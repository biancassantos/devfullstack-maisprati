import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
//    Exercício 1 — Encapsulamento (Classe Produto)
//    Implemente a classe Produto com atributos privados nome, preco e
//    quantidadeEmEstoque. Forneça getters e setters com validações: preco e
//    quantidadeEmEstoque não podem ser negativos e nome não pode ser nulo ou
//    vazio. Lance IllegalArgumentException em casos inválidos. Demonstre o uso
//    criando instâncias, alterando valores válidos e tentando atribuições inválidas.

        Produto produto1 = new Produto("Fone de ouvido", new BigDecimal("120.00"), 10);
        Produto produto2 = new Produto("", new BigDecimal("70.00"), 7);

        // - Atribuições
        produto2.setNome("Carregador");
        produto1.setQuantidadeEmEstoque(9);

        // - Atribuições inválidas
        // produto1.setNome("");
        // produto1.setPreco(new BigDecimal("-100.00"));
        // produto1.setQuantidadeEmEstoque(-3);

        // - Mostra os produtos
        System.out.println(produto1);
        System.out.println("--------------");
        System.out.println(produto2);

        // - Desconto
        System.out.println();
        System.out.println("PRODUTOS COM DESCONTO");
        System.out.println("--------------");
        produto1.aplicarDesconto(10);
        System.out.println(produto1);
        System.out.println("--------------");
        produto2.aplicarDesconto(50);
        System.out.println(produto2);

        // - Desconto inválido
        // produto1.aplicarDesconto(-2);
        // produto1.aplicarDesconto(60);
    }
}