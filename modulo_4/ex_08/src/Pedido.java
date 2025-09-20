import java.math.BigDecimal;

public class Pedido {
    private BigDecimal valor;
    private String cep;
    private CalculadoraFrete estrategia = new Sedex();
    private BigDecimal valorFrete;

    public Pedido(BigDecimal valor, String cep) {
        this.valor = valor;
        setCep(cep);
        this.valorFrete = estrategia.calcular(this);
    }

    @Override
    public String toString() {
        return "Valor do pedido: R$ "
                + valor
                + "\nCEP: "
                + cep
                + "\nFrete: R$ "
                + valorFrete;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        if (!(cep.length() == 8)) {
            throw new IllegalArgumentException("CEP inválido.");
        }

        this.cep = cep;
    }

    public CalculadoraFrete getEstrategia() {
        return estrategia;
    }

    public void setEstrategia(CalculadoraFrete estrategia) {
        this.estrategia = estrategia;
        setValorFrete(estrategia.calcular(this));
    }

    public BigDecimal getValorFrete() {
        return valorFrete;
    }

    public void setValorFrete(BigDecimal valorFrete) {
        this.valorFrete = valorFrete;
    }
}
