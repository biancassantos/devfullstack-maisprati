public class Bicicleta extends MeioTransporte {
    public Bicicleta(double limiteVelocidade) {
        super(limiteVelocidade);
    }

    @Override
    public void acelerar() throws LimiteAtingidoException {
        if (getVelocidadeAtual() + 2.0 > getLimiteVelocidade()) {
            throw new LimiteAtingidoException("O limite máximo de velocidade da bicicleta foi atingido.");
        }

        setVelocidadeAtual(getVelocidadeAtual() + 2.0);
        System.out.println("A bicicleta está a " + getVelocidadeAtual() + " Km/h.");
    }

    @Override
    public void frear() {
        setVelocidadeAtual(0.0);
        System.out.println("A bicicleta freou.");
    }
}
