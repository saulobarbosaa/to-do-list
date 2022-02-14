//variaveis

const input = document.querySelector('.trf-input');
const button = document.querySelector('.btn-trf');
const listaTarefas = document.querySelector('.listaTarefas');
const btnApagar = document.querySelector('.btn-apagar');


//criação de tarefas
function criaLi() {
    const li = document.createElement('li');
    return li;
}

function criaTrf(textoLi) {
    listItem = criaLi();
    listItem.innerText = textoLi;
    listaTarefas.appendChild(listItem);
    salvarTarefas();
}

function apagaInput() {
    input.value = ""; 
    input.focus();
}

function botaoApagar(li) {
    const botaoApagar = document.createElement('button');
    listItem.innerHTML += "  "
    botaoApagar.innerText = "X";
    li.appendChild(botaoApagar);
    botaoApagar.setAttribute('class', "btn-apagar");
    salvarTarefas();
}

//adicionar tarefa
button.addEventListener('click', function() {
    if(!input.value) return;
    criaTrf(input.value);
    apagaInput();
    botaoApagar(listItem);
    salvarTarefas();
})

input.addEventListener('keypress', function(evento) {
    if(evento.keyCode === 13) {
        if(!input.value) return;
        criaTrf(input.value);
        botaoApagar(listItem)
        apagaInput();
        salvarTarefas();
    }
})

//apagar tarefa

document.addEventListener('click', function(e) {
    const evento = e.target;

    if (evento.classList.contains('btn-apagar')) {
        evento.parentElement.remove();
        salvarTarefas();
    }
       
})

function salvarTarefas() {
    const todasTarefas = listaTarefas.querySelectorAll('li');
    const arrayTarefa = [];
    
    for (let tarefa of todasTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace("X", "").trim();
        arrayTarefa.push(tarefaTexto);
    }

    const tarefaJSON = JSON.stringify(arrayTarefa);
    localStorage.setItem('tarefas', tarefaJSON);

}

function backupTarefas() {
    const backup = localStorage.getItem('tarefas');
    const arrayTarefa = JSON.parse(backup);

    for (let tarefa of arrayTarefa) {
        criaTrf(tarefa);
        apagaInput();
        botaoApagar(listItem); 
    }
}

backupTarefas();