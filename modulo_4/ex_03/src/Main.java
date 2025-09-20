import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
//        Exercício 3 — Herança (Hierarquia de Funcionários)
//        Crie a classe base Funcionario com protected String nome e protected
//        BigDecimal salario (com getters). Crie Gerente e Desenvolvedor que
//        sobrescrevem calcularBonus(): 20% do salário para gerente e 10% para
//        desenvolvedor. Garanta que salários sejam positivos. Em um programa, coloque
//        diferentes funcionários em uma coleção do tipo List<Funcionario>
//        e exiba o bônus de cada um.

        List<Funcionario> funcionarios = new ArrayList<>();

        funcionarios.add(new Gerente("Steve", new BigDecimal("6500.00")));
        funcionarios.add(new Desenvolvedor("Bucky", new BigDecimal("4000.00")));
        funcionarios.add(new Gerente("Natasha", new BigDecimal("7500.00")));

        // - Funcionário inválido
        // funcionarios.add(new Gerente("Tony", new BigDecimal("-5000.00")));

        for (Funcionario funcionario : funcionarios) {
            System.out.println(funcionario.getNome());
            System.out.println("Salário base: R$ " + funcionario.getSalario());
            System.out.println("Salário com bônus: R$ " + funcionario.calcularBonus());
            System.out.println("---------------------");
        }
    }
}