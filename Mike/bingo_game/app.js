// const cardItems = document.querySelector('.card_item');

// cardItems.addEventListener('click', () => {
//     cardItems.classList.add('card_item_clicked');
// });


// This code adds an event listener to each card item to toggle the clicked state
// when clicked, allowing the user to click multiple items without losing the active state.
const cardItemsList = document.querySelectorAll('.card_item');
cardItemsList.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('card_item_clicked');
    });
});