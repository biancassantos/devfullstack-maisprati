import java.math.BigDecimal;

public class Desenvolvedor extends Funcionario {
    public Desenvolvedor(String nome, BigDecimal salario) {
        super(nome, salario);
    }

    @Override
    public BigDecimal calcularBonus() {
        BigDecimal bonus = getSalario().multiply(new BigDecimal("0.1"));
        return getSalario().add(bonus);
    }
}
