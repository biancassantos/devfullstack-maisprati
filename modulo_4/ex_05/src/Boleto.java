import java.math.BigDecimal;

public class Boleto extends FormaPagamento {
    private String formato;

    public Boleto(String formato) {
        this.formato = formato;
    }

    public String getFormato() {
        return formato;
    }

    public void setFormato(String formato) {
        this.formato = formato;
    }

    @Override
    public boolean validarPagamento() {
        for (FormatoBoleto formato : FormatoBoleto.values()) {
            if (formato.name().equals(this.formato.toUpperCase())) {
                return true;
            }
        }

        return false;
    }

    @Override
    public void processarPagamento(BigDecimal valor) throws PagamentoInvalidoException {
        if (!validarPagamento()) {
            throw new PagamentoInvalidoException("Não foi possível realizar o pagamento. Formato de boleto inválido.");
        }

        System.out.println("Pagamento realizado com sucesso! O boleto no valor de R$ " + valor + " foi processado.");
    }
}
