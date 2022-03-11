let adicionar = document.querySelector('.add_task')


adicionar.addEventListener('click', adicionar_Task)

function adicionar_Task(){

    let taskInput = document.querySelector('#task').value
    let listTask = document.querySelector('.list-task')
    let liTask = document.createElement('li')
    
  
    
    if(!taskInput){
        alert('Digite uma tarefa!!')
    }
    else{
       
       
        listTask.appendChild(liTask)
        liTask.innerHTML = `${taskInput}`
        document.querySelector('#task').value = null
    }

    liTask.addEventListener('click', conclude)
        
    function conclude(){
        liTask.classList.toggle('conclude')
    }

   let botao = document.createElement('button')
   botao.appendChild(document.createTextNode('X'))
   liTask.appendChild(botao)

   botao.addEventListener('click', clique)

   function clique(){
       liTask.classList.add('exclui')
   }

}
 