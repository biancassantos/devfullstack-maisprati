public class Produto {
    private String nome;
    private Dinheiro preco;

    public Produto(String nome, Dinheiro preco) {
        this.nome = nome;
        this.preco = preco;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Dinheiro getPreco() {
        return preco;
    }

    public void setPreco(Dinheiro preco) {
        this.preco = preco;
    }
}
