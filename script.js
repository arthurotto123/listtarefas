
const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const lista = document.querySelector('.list-tasks')



let minhalista = []

function pegarvalor() {
    if (input.value.trim() === '') {
        alert('Por favor, insira uma tarefa válida!');
        return;
    }
    minhalista.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    renderizar()

}

function renderizar() {


    let novali = ''

    minhalista.forEach((item, index) => {
        novali = `${novali} 
        <li class="task  ${item.concluida && "done"}">
                <i class="fa-solid fa-check" id="check" onclick="concluirtarefa(${index}"></i>
                <p>${item.tarefa}</p>
                <i class="fa-solid fa-trash" id="trash" onclick="deletaritem(${index})"></i>
            </li>`

    })

    lista.innerHTML = novali


    localStorage.setItem('lista', JSON.stringify(minhalista))


}

function concluirtarefa(index) {
    minhalista[index].concluida = !minhalista[index].concluida
    renderizar()


}



function deletaritem(index) {
    minhalista.splice(index, 1);
    renderizar();

}

function carregar() {
    const tarefasdolocalstore = localStorage.getItem('lista')
    minhalista = JSON.parse(tarefasdolocalstore) 
    renderizar()

}



carregar()
button.addEventListener('click', pegarvalor)


const buttonTrocarFundo = document.createElement('button');
buttonTrocarFundo.textContent = 'TEMA';
buttonTrocarFundo.style.position = 'fixed';
buttonTrocarFundo.style.top = '20px';
buttonTrocarFundo.style.right = '100px';
buttonTrocarFundo.style.padding = '5px 20px';
buttonTrocarFundo.style.backgroundColor = '#348094';
buttonTrocarFundo.style.color = 'white'
buttonTrocarFundo.style.border = 'none';
buttonTrocarFundo.style.borderRadius = '10px';
buttonTrocarFundo.style.cursor = 'pointer';
buttonTrocarFundo.style.fontSize = '1.5rem';
buttonTrocarFundo.style.boxShadow = '1px 1px 5px rgb(0, 102, 255)';
document.body.appendChild(buttonTrocarFundo);

let fundoAtual = 0; // Variável para controlar qual imagem está sendo exibida

const imagensDeFundo = [
    'url("img/ChatGPT Image 21 de abr. de 2025, 12_22_47.png")', // Imagem 1
    'url("img/ChatGPT Image 21 de abr. de 2025, 18_51_54.png")'  // Imagem 2
];

buttonTrocarFundo.addEventListener('click', () => {
    fundoAtual = (fundoAtual + 1) % imagensDeFundo.length; // Alterna entre 0 e 1
    document.body.style.backgroundImage = imagensDeFundo[fundoAtual];
    document.body.style.backgroundSize = 'cover'; // Ajusta o tamanho da imagem
});