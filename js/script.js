function addItem() {
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if(inputValue === '') {
        alert('write something!');
    } else {
        $('#list').append(li);
    }

    function crossOut() {
        li.addClass('strike');
    }

    li.on('dblclick', crossOut);

    let crossOutButton = $('<crossOutButton> x</crossOutButton>')
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);
    function deleteListItem() {
        li.addClass('delete');
    }

    $('#list').sortable();
}