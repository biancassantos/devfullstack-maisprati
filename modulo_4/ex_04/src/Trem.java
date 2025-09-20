public class Trem extends MeioTransporte {
    public Trem(double limiteVelocidade) {
        super(limiteVelocidade);
    }

    @Override
    public void acelerar() throws LimiteAtingidoException {
        if (getVelocidadeAtual() + 20.0 > getLimiteVelocidade()) {
            throw new LimiteAtingidoException("O limite máximo de velocidade do trem foi atingido.");
        }

        setVelocidadeAtual(getVelocidadeAtual() + 20.0);
        System.out.println("O trem está a " + getVelocidadeAtual() + " Km/h.");
    }

    @Override
    public void frear() {
        setVelocidadeAtual(0.0);
        System.out.println("O trem freou.");
    }
}
