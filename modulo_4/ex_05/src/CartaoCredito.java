import java.math.BigDecimal;

public class CartaoCredito extends FormaPagamento {
    private String numeroCartao;

    public CartaoCredito(String numeroCartao) {
        this.numeroCartao = numeroCartao;
    }

    public String getNumeroCartao() {
        return numeroCartao.substring(0, 4) + "...";
    }

    public void setNumeroCartao(String numeroCartao) {
        this.numeroCartao = numeroCartao;
    }

    @Override
    public boolean validarPagamento() {
        return numeroCartao.length() == 16;
    }

    @Override
    public void processarPagamento(BigDecimal valor) throws PagamentoInvalidoException {
        if (!validarPagamento()) {
            throw new PagamentoInvalidoException("Não foi possível realizar o pagamento. Número de cartão inválido.");
        }

        System.out.println("Pagamento realizado com sucesso! A compra no valor de R$ " + valor + " foi processada.");
    }
}
