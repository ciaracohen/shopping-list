// enter items with text and submit by clicking add item or return key
//remove items
//check/uncheck items
//
function handleAddItem () {
    $('#js-shopping-list-form').on('submit', e => {
        e.preventDefault();
        const inputItem = $('#shopping-list-entry').val();
        console.log(inputItem);
        $('.shopping-list').append(`<li>
        <span class="shopping-item">${inputItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
    })
}

// check item
function handleCheckItem () {
    $('.shopping-list').on('click', '.shopping-item-toggle', e => {
        $(e.currentTarget).closest('li').toggleClass('shopping-item__checked');
    });
}
    

// delete item
function handleDeleteItem () {
$('.shopping-list').on('click', '.shopping-item-delete', e => {
    $(e.currentTarget).closest('li').remove();
  });
}


function handleBindEvents() {
     handleAddItem();
     handleCheckItem();
     handleDeleteItem();
}

$(handleBindEvents)