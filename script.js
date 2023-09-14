function toggleImageSize(event) {
    var img = event.target;
    if (img.style.width === '50%') {
        img.style.width = '100%';
    } else {
        img.style.width = '50%';
    }
}

function addTask() {
    var task = document.getElementById('task').value;
    var imageInput = document.getElementById('image');
    var image = imageInput.files[0];

    if (task !== '') {
        var taskList = document.getElementById('taskList');
        var newTask = document.createElement('li');
        newTask.appendChild(document.createTextNode(task));

        if (image) {
            var imgContainer = document.createElement('div');
            imgContainer.style.float = 'right'; // Colocando a imagem à direita
            var img = document.createElement('img');
            img.src = URL.createObjectURL(image);
            img.style.maxWidth = '50%'; // Definindo o tamanho inicial da imagem
            img.style.cursor = 'pointer'; // Adicionando um cursor de clique na imagem
            img.addEventListener('click', toggleImageSize); // Adicionando um ouvinte de evento de clique

            imgContainer.appendChild(img);
            newTask.appendChild(imgContainer);
        }

        var editButton = document.createElement('button');
        editButton.appendChild(document.createTextNode('Editar'));
        editButton.classList.add('edit');
        editButton.onclick = function() {
            var newTaskText = prompt("Editar Tarefa:", task);
            if (newTaskText !== null && newTaskText !== '') {
                newTask.firstChild.nodeValue = newTaskText;
            }
        };

        var deleteButton = document.createElement('button');
        deleteButton.appendChild(document.createTextNode('Excluir'));
        deleteButton.classList.add('delete');
        deleteButton.onclick = function() {
            newTask.remove();
        };

        newTask.appendChild(document.createElement('br'));
        newTask.appendChild(editButton);
        newTask.appendChild(deleteButton);

        taskList.appendChild(newTask);
        document.getElementById('task').value = '';
        imageInput.value = ''; // Limpa o campo de upload de imagem
    }
}
