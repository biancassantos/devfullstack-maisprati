import java.math.BigDecimal;

public class Pix extends FormaPagamento {
    private String chavePix;

    public Pix(String chavePix) {
        this.chavePix = chavePix;
    }

    public String getChavePix() {
        return chavePix;
    }

    public void setChavePix(String chavePix) {
        this.chavePix = chavePix;
    }

    @Override
    public boolean validarPagamento() {
        for (ChavePix chave : ChavePix.values()) {
            if (chave.name().equals(this.chavePix.toUpperCase())) {
                return true;
            }
        }

        return false;
    }

    @Override
    public void processarPagamento(BigDecimal valor) throws PagamentoInvalidoException {
        if (!validarPagamento()) {
            throw new PagamentoInvalidoException("Não foi possível realizar o pagamento. Chave pix inválida.");
        }

        System.out.println("Pagamento realizado com sucesso! A compra no valor de R$ " + valor + " foi processada.");
    }
}
