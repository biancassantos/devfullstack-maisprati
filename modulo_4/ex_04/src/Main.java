import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
//        Exercício 4 — Polimorfismo com Interface (IMeioTransporte)
//        Defina a interface IMeioTransporte com acelerar() e frear().
//        Implemente Carro, Bicicleta e Trem, cada um com lógica própria de
//        variação de velocidade e limites.
//        No método principal, crie uma lista de IMeioTransporte, percorra e invoque
//        acelerar()/frear() demonstrando polimorfismo. Trate operações inválidas com
//        exceções apropriadas.

        List<IMeioTransporte> transportes = new ArrayList<>();

        transportes.add(new Carro(100.00));
        transportes.add(new Bicicleta(4.0));
        transportes.add(new Trem(180.00));

        for (IMeioTransporte transporte : transportes) {
            try {
                transporte.acelerar();
                transporte.acelerar();
                transporte.acelerar();
            } catch (LimiteAtingidoException error) {
                System.out.println(error.getMessage());
            }

            transporte.frear();
            System.out.println("-------------");
        }
    }
}