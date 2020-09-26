function processInput() {
    const inputEl = document.getElementsByTagName('input')[0];
    const inputValue = inputEl.value.trim();

    if (!inputValue) {
        alert('Please enter value. ');
        return;
    }

    const item = document.createElement('li')
    item.innerHTML = inputValue;
    item.className = "toDoTask";

    const closeIcon = document.createElement('span');
    closeIcon.innerHTML = 'x';
    closeIcon.className = 'remove';

    item.appendChild(closeIcon);

    const list = document.getElementsByClassName('list')[0];

    list.appendChild(item);
    inputEl.value = '';

}

function onInputKeyPress() {
    if (event.keyCode === 13) {
        processInput();
    }
}

function OnAddBtnClick() {
    processInput();
}

function onItemClick() {
    const target = event.target;
    if (target.className === 'remove') {
        const parent = target.parentNode;
        removeItem(parent);
        return;
    }
    target.classList.toggle('checked');
    // if (target.className === 'checked') {
    //     target.className = '';
    // } else (
    //     target.className = 'checked';
    // )


}

function removeItem(item) {
    const list = document.getElementById('list');
    list.removeChild(item);
}