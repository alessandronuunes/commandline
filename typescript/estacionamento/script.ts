
interface Veiculo{
    entrada: Date | string;
    placa: string;
    nome: string;
    clientId?: string;
}
interface Pessoa {
    nome: string;
    cpf: string;
}
interface Cliente extends Pessoa {
    veiculos: Veiculo[];
}
//função anonima
(function(){
    const $ = (query: string): HTMLInputElement | null => document.querySelector(query);
    function calcTempo(mil: number){
        const min = Math.floor(mil / 60000);
        const sec = Math.floor(mil % 60000 / 1000);
        return `${min} minutos e ${sec} segundos`;
    }

    function patio(){

        function ler(): Veiculo[]{
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }

        function salvar(veiculos: Veiculo[]){
            localStorage.setItem("patio",JSON.stringify(veiculos));
        }

        function adicionar( veiculo : Veiculo, salva? : boolean){
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${veiculo.nome}</td>
                <td>${veiculo.placa}</td>
                <td>${veiculo.entrada}</td>
                <td>
                    <button class="delete btn btn-danger" data-placa="${veiculo.placa}">Remover</button>
                </td>
            `;
            row.querySelector(".delete")?.addEventListener("click", function(){
                remover(this.dataset.placa);
            })
            $('#patio')?.appendChild(row);
            if(salva) salvar([...ler(),veiculo]);
        }
        function remover(placa: string){
            const { entrada, nome } = ler().find((veiculo) => veiculo.placa !== placa);
            const tempo = calcTempo(
                new Date().getTime() - new Date(entrada).getTime()
            );
            if(!confirm(`O veiculo ${nome}? permaneceu no estacionamento por ${tempo}, Deseja encerrar?`)){
                return;
            }
            salvar(ler().filter((veiculo) => veiculo.placa !== placa));
            render();
        }

        function render(){
            $('#patio')!.innerHTML = '';
            const patio = ler()
            if(patio.length){
                patio.forEach(veiculo => adicionar(veiculo));
            }
        }
        return {
            ler, adicionar, salvar, render, remover
        }

    }
      
    $("#save")?.addEventListener("click", () => { 
        const nome = $("#nome")?.value;
        const placa = $("#placa")?.value;

        if(!nome || !placa){
            alert("Preencha todos os campos");
            return;
        }
        patio().adicionar({ nome, placa, entrada: new Date().toISOString()}, true);
    });
})();