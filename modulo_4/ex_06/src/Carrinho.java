import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.List;

public class Carrinho {
    private final List<ItemCarrinho> itens;
    private Dinheiro total;

    public Carrinho(List<ItemCarrinho> itens) {
        this.itens = itens;
        BigDecimal valor = itens
                            .stream()
                            .map(ItemCarrinho::getTotal)
                            .reduce(BigDecimal.ZERO, BigDecimal::add);
        Moeda moeda = itens.getFirst().getProduto().getPreco().getMoeda();
        this.total = new Dinheiro(valor, moeda);
    }

    public List<ItemCarrinho> getItens() {
        return itens;
    }

    public BigDecimal getTotal() {
        return total.getValor();
    }

    public void setTotal(BigDecimal total) {
        this.total = new Dinheiro(total, this.total.getMoeda());
    }


    public Carrinho adicionar(ItemCarrinho item) {
        List<ItemCarrinho> novoItens = new ArrayList<>(itens);
        novoItens.add(item);

        return new Carrinho(novoItens);
    }

    public Carrinho remover(ItemCarrinho item) {
        List<ItemCarrinho> novoItens = new ArrayList<>(itens);
        novoItens.remove(item);

        return new Carrinho(novoItens);
    }

    public Carrinho aplicarCupom(double porcentagem) {
        if (porcentagem < 0 || porcentagem > 0.3) {
            throw new IllegalArgumentException("Valor de cupom inválido.");
        }

        List<ItemCarrinho> novoItens = new ArrayList<>(itens);
        Carrinho novoCarrinho = new Carrinho(novoItens);
        BigDecimal desconto = novoCarrinho.getTotal().multiply(new BigDecimal(String.valueOf(porcentagem)));
        BigDecimal novoTotal = novoCarrinho
                                .getTotal()
                                .subtract(desconto)
                                .setScale(2, RoundingMode.HALF_EVEN);

        novoCarrinho.setTotal(novoTotal);

        return novoCarrinho;
    }

    public void mostrarCarrinho() {
        System.out.println("Itens no carrinho:");
        for (ItemCarrinho item : itens) {
            System.out.println(item.getProduto().getNome());
            System.out.println("Quantidade: " + item.getQuantidade());
            System.out.println("------------------------");
        }
        System.out.println("Total: " + total);
    }
}
