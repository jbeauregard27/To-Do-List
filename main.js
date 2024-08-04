document.getElementById('add').addEventListener('click', function () {
    addToDo()
});

function addToDo() {
    const itemContainer = document.getElementById('item');

    const itemWrapper = document.createElement('div');
    itemWrapper.className = 'item-wrapper';

    const newItem = document.createElement('textarea');
    newItem.placeholder = 'New Item';
    newItem.className = 'todo-item';

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Done';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', function() {
        itemContainer.removeChild(itemWrapper);
    });

    itemWrapper.appendChild(newItem);
    itemWrapper.appendChild(deleteButton);
    itemContainer.appendChild(itemWrapper);
}
