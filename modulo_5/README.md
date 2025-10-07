# Atividade 8 - Cafeteria BomGosto
Atividade para praticar conhecimentos em banco de dados, utilizando PostgreSQL.


1) Faça uma listagem do cardápio ordenada por nome;
```
SELECT *
FROM cardapio
ORDER BY nome_item;
```

2) Apresente todas as comandas (código, data, mesa e nome do cliente) e os itens da comanda (código comanda, nome do café, descricão, quantidade, preço unitário e preço total do café) destas ordenados data e código da comanda e, também o nome do café;
```
SELECT 	co.id_comanda,
		co.data,
		co.nr_mesa,
		co.nome_cliente,
		ca.nome_item,
		ca.descricao,
		ic.quantidade,
		ca.preco_unitario,
		(ic.quantidade * ca.preco_unitario) AS preco_total
FROM comanda co
JOIN item_comanda ic
USING(id_comanda)
JOIN cardapio ca
USING (id_cardapio)
ORDER BY co.data, co.id_comanda, ca.nome_item;
```

3) Liste todas as comandas (código, data, mesa e nome do cliente) mais uma coluna com o valor total da comanda. Ordene por data esta listagem;
```
SELECT 	co.id_comanda,
		co.data,
		co.nr_mesa,
		co.nome_cliente,
		SUM(ic.quantidade * ca.preco_unitario) AS valor_total_comanda
FROM comanda co
JOIN item_comanda ic
USING(id_comanda)
JOIN cardapio ca
USING (id_cardapio)
GROUP BY co.id_comanda
ORDER BY co.data;
```

4) Faça a mesma listagem das comandas da questão anterior (6), mas traga apenas as comandas que possuem mais do que um tipo de café na comanda;
```
SELECT 	co.id_comanda,
		co.data,
		co.nr_mesa,
		co.nome_cliente,
		SUM(ic.quantidade * ca.preco_unitario) AS valor_total_comanda
FROM comanda co
JOIN item_comanda ic
USING(id_comanda)
JOIN cardapio ca
USING(id_cardapio)
INNER JOIN (
	SELECT id_comanda
	FROM item_comanda
	GROUP BY id_comanda
	HAVING COUNT(*) > 1
) AS contagem_itens
USING(id_comanda)
GROUP BY co.id_comanda
ORDER BY co.data;
```

5) Qual o total de faturamento por data? ordene por data esta consulta.
```
SELECT 	co.data,
		SUM(ic.quantidade * ca.preco_unitario) AS faturamento_total_dia
FROM comanda co
LEFT JOIN item_comanda ic
USING(id_comanda)
LEFT JOIN cardapio ca
USING (id_cardapio)
GROUP BY co.data
ORDER BY co.data;
```