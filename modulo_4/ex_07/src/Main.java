public class Main {
    public static void main(String[] args) {
//        Exercício 7 — Generics (Repositório Genérico em Memória)
//        Defina Identificavel com getId().
//        Crie IRepository<T extends Identificavel, ID> com salvar, buscarPorId
//        (retorna Optional<T>), listarTodos e remover.
//        Implemente InMemoryRepository com Map<ID, T>, garanta que listarTodos
//        devolva cópia imutável e lance EntidadeNaoEncontradaException ao remover ID
//        inexistente. Use com entidades como Produto e Funcionario.

        IRepository<Produto, Integer> produtoRepository = new InMemoryRepository<>();
        IRepository<Funcionario, String> funcionarioRepository = new InMemoryRepository<>();

        // - Produto
        Produto produto1 = new Produto(1, "Caneta", 200.00);
        Produto produto2 = new Produto(2, "Chiclete", 2.00);

        produtoRepository.salvar(produto1);
        produtoRepository.salvar(produto2);

        System.out.println("=== Todos os produtos ===");
        for(Produto produto : produtoRepository.getAll()) {
            System.out.println(produto.getNome());
        }

        System.out.println("=== Produto removido ===");
        try {
            produtoRepository.remover(1);
            for(Produto produto : produtoRepository.getAll()) {
                System.out.println(produto.getNome());
            }
        } catch (EntidadeNaoEncontradaException e) {
            System.out.println(e.getMessage());
        }
        System.out.println();


        // - Funcionario
        Funcionario funcionario1 = new Funcionario("abc", "Rocket", "CEO");
        Funcionario funcionario2 = new Funcionario("def", "Groot", "Assistente");
        Funcionario funcionario3 = new Funcionario("ghi", "Peter", "Assistente");

        funcionarioRepository.salvar(funcionario1);
        funcionarioRepository.salvar(funcionario2);
        funcionarioRepository.salvar(funcionario3);

        System.out.println("=== Todos os funcionários ===");
        for(Funcionario funcionario : funcionarioRepository.getAll()) {
            System.out.println(funcionario.getNome());
        }

        System.out.println("=== Funcionário removido ===");
        try {
            funcionarioRepository.remover("ghi");
            for(Funcionario funcionario : funcionarioRepository.getAll()) {
                System.out.println(funcionario.getNome());
            }
        } catch (EntidadeNaoEncontradaException e) {
            System.out.println(e.getMessage());
        }
    }
}