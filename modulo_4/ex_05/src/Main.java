import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
//        Exercício 5 — Abstração (Sistema de Pagamentos)
//        Implemente a classe abstrata FormaPagamento com validarPagamento() e
//        processarPagamento(BigDecimal valor). Crie CartaoCredito, Boleto e Pix com
//        validações específicas (ex.: número do cartão, formato de boleto,
//        chave Pix).
//        Simule o uso de cada forma por polimorfismo e trate erros de validação
//        com exceções específicas (ex.: PagamentoInvalidoException).

        FormaPagamento cartao = new CartaoCredito("1234567890123456");
        // FormaPagamento cartao = new CartaoCredito("1234567890123"); // Cartão inválido

        FormaPagamento boleto = new Boleto("Deposito");
        // FormaPagamento boleto = new Boleto("Cobranca"); // Boleto inválido

        //FormaPagamento pix = new Pix("Email");
        FormaPagamento pix = new Pix("Data_Nascimento"); // Pix inválido


        try {
            System.out.print("CARTÃO -> ");
            cartao.processarPagamento(new BigDecimal("120.00"));
            System.out.print("BOLETO -> ");
            boleto.processarPagamento(new BigDecimal("200.00"));
            System.out.print("PIX -> ");
            pix.processarPagamento(new BigDecimal("25.00"));
        } catch (PagamentoInvalidoException error) {
            System.out.println(error.getMessage());
        }
    }
}