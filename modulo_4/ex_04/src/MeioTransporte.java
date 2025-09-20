public class MeioTransporte implements IMeioTransporte {
    private double limiteVelocidade;
    private double velocidadeAtual = 0.0;

    public MeioTransporte(double limiteVelocidade) {
        if (limiteVelocidade <= 0) {
            throw new IllegalArgumentException("O limite de velocidade deve ser maior que zero.");
        }

        this.limiteVelocidade = limiteVelocidade;
    }

    public double getLimiteVelocidade() {
        return limiteVelocidade;
    }

    public void setLimiteVelocidade(double limiteVelocidade) {
        if (limiteVelocidade <= 0) {
            throw new IllegalArgumentException("O limite de velocidade deve ser maior que zero.");
        }

        this.limiteVelocidade = limiteVelocidade;
    }

    public double getVelocidadeAtual() {
        return velocidadeAtual;
    }

    public void setVelocidadeAtual(double velocidadeAtual) {
        this.velocidadeAtual = velocidadeAtual;
    }

    @Override
    public void acelerar() throws LimiteAtingidoException {
        if (velocidadeAtual + 1.0 > limiteVelocidade) {
            throw new LimiteAtingidoException("O limite máximo de velocidade foi atingido.");
        }

        velocidadeAtual += 1.0;
        System.out.println("O veículo está a " + velocidadeAtual + " Km/h.");
    }

    @Override
    public void frear() {
        velocidadeAtual = 0.0;
        System.out.println("O veículo freou.");
    }
}
