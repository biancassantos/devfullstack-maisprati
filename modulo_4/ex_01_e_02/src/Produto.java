import java.math.BigDecimal;
import java.math.RoundingMode;

public class Produto {
    private String nome;
    private BigDecimal preco;
    private int quantidadeEmEstoque;

    public Produto(String nome, BigDecimal preco, int quantidadeEmEstoque) {
        setNome(nome);
        setPreco(preco);
        setQuantidadeEmEstoque(quantidadeEmEstoque);
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        if (nome == null || nome.isEmpty()) {
            throw new IllegalArgumentException("O nome não pode ser nulo ou vazio.");
        }
        this.nome = nome;
    }

    public BigDecimal getPreco() {
        return preco;
    }

    public void setPreco(BigDecimal preco) {
        if (preco.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Preços negativos não são permitidos.");
        }
        this.preco = preco;
    }

    public int getQuantidadeEmEstoque() {
        return quantidadeEmEstoque;
    }

    public void setQuantidadeEmEstoque(int quantidadeEmEstoque) {
        if (quantidadeEmEstoque < 0) {
            throw new IllegalArgumentException("Quantidades negativas não são permitidas.");
        }
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

//     Exercício 2 — Encapsulamento com Validação de Regra (Desconto)
//     Estenda Produto com o método aplicarDesconto(double porcentagem).
//     Permita apenas valores entre 0 e 50 (inclusive) e lance exceção
//     (IllegalArgumentException ou DescontoInvalidoException) se a regra for violada.
//     Mostre, em um main ou testes, o preço antes/depois do desconto e a
//     reação a entradas inválidas.
    public void aplicarDesconto(double porcentagem) {
        if (porcentagem < 0 || porcentagem > 50) {
            throw new IllegalArgumentException("Porcentagem fora do limite permitido.");
        }

        BigDecimal desconto = preco.multiply(new BigDecimal(String.valueOf(porcentagem))).divide(new BigDecimal("100.00"), 2, RoundingMode.UP);

        this.preco = preco.subtract(desconto);
    }

    public String toString() {
        return "Produto: "
                + nome
                + "\nPreço: R$ "
                + preco
                + "\nQuantidade em estoque: "
                + quantidadeEmEstoque;
    }
}
