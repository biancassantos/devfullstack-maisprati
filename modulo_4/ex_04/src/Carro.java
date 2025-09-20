public class Carro extends MeioTransporte {
    public Carro(double limiteVelocidade) {
        super(limiteVelocidade);
    }

    @Override
    public void acelerar() throws LimiteAtingidoException {
        if (getVelocidadeAtual() + 10.0 > getLimiteVelocidade()) {
            throw new LimiteAtingidoException("O limite máximo de velocidade do carro foi atingido.");
        }

        setVelocidadeAtual(getVelocidadeAtual() + 10.0);
        System.out.println("O carro está a " + getVelocidadeAtual() + " Km/h.");
    }

    @Override
    public void frear() {
        setVelocidadeAtual(0.0);
        System.out.println("O carro freou.");
    }
}
