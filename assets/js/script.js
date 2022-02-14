const input = document.querySelector('.trf-input');
const button = document.querySelector('.btn-trf');
const listaTarefas = document.querySelector('.listaTarefas');
const btnApagar = document.querySelector('.btn-apagar');
let listItem;

//cria tarefa

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function criaTrf (texto) {
    listItem = criaLi();
    listItem.innerText = texto
    listaTarefas.appendChild(listItem);
}

//detalhes

function limpaInput() {
    input.value = "";
    input.focus();
}

document.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if(!input.value) return;
        criaTrf(input.value);   
        botaoApagar(listItem).salvarTarefas();
        limpaInput();
        salvarTarefas();
    }
})


//chamando funções / botao de apagar tarefa
function botaoApagar(li) {
    const apagar = document.createElement('button');
    apagar.innerText = "X"
    apagar.setAttribute('class', "btn-apagar");
    listItem.appendChild(apagar);
    salvarTarefas();
    
}

button.addEventListener('click', function(){
    if(!input.value) return;
    criaTrf(input.value);
    limpaInput();
    botaoApagar(listItem).salvarTarefas();;
    salvarTarefas();
})

document.addEventListener('click', function(e) {
    evento = e.target;

    if (evento.classList.contains('btn-apagar')) {
        evento.parentElement.remove();
    }
})

function salvarTarefas() {
    const todasTarefas = listaTarefas.querySelectorAll('li');
    const arrayTarefa = [];

    for (let tarefa of todasTarefas) {
        let tarefaTexto = tarefa.innerText.replace("X", "").trim();;
        arrayTarefa.push(tarefaTexto);
    }

    const listaJSON = JSON.stringify(arrayTarefa);
    localStorage.setItem('tarefas', listaJSON);
}

function backupTarefas() {
    const backup = localStorage.getItem('tarefas');
    const lista = JSON.parse(backup);

    for (let tarefa of lista) {
        criaTrf(tarefa);
        apagaInput();
        botaoApagar(listItem);
    }
}

backupTarefas();