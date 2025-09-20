import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
//        Exercício 6 — Imutabilidade e Objetos de Valor (Carrinho de Compras)
//        Crie o objeto de valor imutável Dinheiro (valor BigDecimal e enum Moeda) com
//        equals/hashCode coerentes. Modele Produto, ItemCarrinho e um Carrinho cuja
//        lista de itens seja imutável: operações de adicionar/remover/aplicar
//        cupom retornam um novo carrinho. Valide quantidades > 0, proíba
//        valores negativos e limite cupons a 30% com arredondamento bancário.
//        Demonstre o fluxo completo em testes.

        Dinheiro um = new Dinheiro(new BigDecimal("25.00"), Moeda.BRL);
        Dinheiro dois = new Dinheiro(new BigDecimal("25.00"), Moeda.BRL);
        System.out.println("=== Teste de equals ===");
        if (um.equals(dois)) {
            System.out.println("Os dinheiros são iguais.");
        } else {
            System.out.println("Os dinheiros são diferentes.");
        }
        System.out.println();


        ItemCarrinho blusa = new ItemCarrinho(new Produto("Blusa preta", new Dinheiro(new BigDecimal("50.00"), Moeda.BRL)), 1);
        ItemCarrinho calca = new ItemCarrinho(new Produto("Calca jeans", new Dinheiro(new BigDecimal("149.90"), Moeda.BRL)), 1);
        ItemCarrinho tenis = new ItemCarrinho(new Produto("Tênis branco", new Dinheiro(new BigDecimal("209.90"), Moeda.BRL)), 1);

        List<ItemCarrinho> meusItens = new ArrayList<>();
        meusItens.add(blusa);
        meusItens.add(calca);
        meusItens.add(tenis);

        Carrinho carrinho = new Carrinho(meusItens);

        System.out.println("=== Carrinho original ===");
        carrinho.mostrarCarrinho();

        ItemCarrinho brincos = new ItemCarrinho(new Produto("Brincos", new Dinheiro(new BigDecimal("20.00"), Moeda.BRL)), 2);

        Carrinho carrinhoAdiciona = carrinho.adicionar(brincos);
        System.out.println("=== Carrinho adiciona item ===");
        carrinhoAdiciona.mostrarCarrinho();
        System.out.println();

        Carrinho carrinhoRemove = carrinhoAdiciona.remover(blusa);
        System.out.println("=== Carrinho remove item ===");
        carrinhoRemove.mostrarCarrinho();
        System.out.println();

        try {
            Carrinho carrinhoCupom = carrinhoRemove.aplicarCupom(0.2);
            System.out.println("=== Carrinho aplica cupom ===");
            carrinhoCupom.mostrarCarrinho();
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        }
    }
}