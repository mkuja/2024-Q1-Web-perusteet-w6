
const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');

function todo() {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const todoText = input.value.trim();
        if (todoText !== '') {
            const li = document.createElement('li');
            li.textContent = todoText;
            todos.appendChild(li);
            input.value = '';
            input.focus();
        }
    });
}

todo();
