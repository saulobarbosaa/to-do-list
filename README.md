# 📋 To-do List / Lista de Afazeres

Esse repositório consiste em uma lista de afazeres feita com HTML, CSS e JavaScript.

## 👨‍💻 Sobre o projeto:

Como foi falado anteriormente, esse projeto consiste em uma lista de afazeres onde o usuário tem a alternativa de adicionar coisas para serem feitas e apagá-las assim que forem terminadas. Além do mais, os itens adicionados ficam salvos caso a página seja reiniciada ou fechada e aberta novamente.

No geral, a parte de HTML e CSS é básica, adicionando o input, o botão e a lista. 

Em relação ao JavaScript, o código se baseia em pequenas functions que são chamadas por meio de um EventListener principal que é iniciado no momento em que o usuário adiciona um item. Dentre essas funções, as principais são a de criar um *list item* e a de criação do botão de apagar o item.
Basicamente, a criação de um *li* é feita por meio de um:

```
document.createElement('li')
```
Logo após isso, este *li* é adicionado como um filho da *ul*:

```
listaTarefas.appendChild(listItem)
```

O botão de apagar segue a mesma lógica, entretanto, ao ser clicado é acionado um *EventListener* que faz com que todo o *li* seja removido do documento.

```
document.addEventListener('click', function(e) {
    const evento = e.target;

    if (evento.classList.contains('btn-apagar')) {
        evento.parentElement.remove();
    }     
})
```

Por último, o modo do qual todas as tarefas são salvas, isso tudo é feito por meio de uma *function* que converte todas as tarefas em um *array* e em seguida salva todas elas em um *JSON* como uma *string*, para que dessa forma, esse *JSON* seja 'setado' como um item no *localStorage* do navegador.
Em seguida no momento em que a página é reiniciada ou fechada e aberta novamente, este item seja puxado pelo navegador por uma outra *function*, convertido como *array* e repetindo o processo de criação de tarefas por meio já citado anteriormente.
```
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
```

## Isso é tudo, agradeço pela sua atenção!
