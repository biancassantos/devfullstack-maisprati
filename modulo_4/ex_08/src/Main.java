import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
//        Exercício 8 — Padrão Strategy (Cálculo de Frete com Lambdas)
//        Modele CalculadoraFrete com calcular(Pedido): BigDecimal. Crie estratégias
//        Sedex, Pac e RetiradaNaLoja e permita injeção/troca da estratégia no Pedido.
//        Acrescente uma estratégia promocional via lambda (frete grátis acima de X).
//        Valide CEP/região e dispare exceções para CEP inválido. Mostre a troca
//        de estratégia em tempo de execução.

        CalculadoraFrete fretePromocional = pedido -> {
            if (pedido.getValor().compareTo(new BigDecimal("199.00")) > 0)  {
                return BigDecimal.ZERO;
            }

            return pedido.getValorFrete();
        };

        Pedido pedido1;

        try {
            pedido1 = new Pedido(new BigDecimal("200.00"), "12345678");

            System.out.println("=== Frete Sedex (inicial) ===");
            System.out.println(pedido1);
            System.out.println();

            System.out.println("=== Frete Pac ===");
            pedido1.setEstrategia(new Pac());
            System.out.println(pedido1);
            System.out.println();

            System.out.println("=== Frete Retirada na loja ===");
            pedido1.setEstrategia(new RetiradaNaLoja());
            System.out.println(pedido1);
            System.out.println();

            System.out.println("=== Frete promocional ===");
            pedido1.setEstrategia(fretePromocional);
            System.out.println(pedido1);

        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        }

    }
}