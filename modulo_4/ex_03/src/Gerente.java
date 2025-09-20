import java.math.BigDecimal;

public class Gerente extends Funcionario {
    public Gerente(String nome, BigDecimal salario) {
        super(nome, salario);
    }

    @Override
    public BigDecimal calcularBonus() {
        BigDecimal bonus = getSalario().multiply(new BigDecimal("0.2"));
        return getSalario().add(bonus);
    }
}
