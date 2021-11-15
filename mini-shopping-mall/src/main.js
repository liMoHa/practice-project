// fetch items in itesm.json

function loadItems(){
    return fetch('../data/items.json')
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        return json.items;
    });
}

function itemArr(item){
    return `<li>
                <img src="${item['item']}" alt="cloth-image" />
                <span>${item['gender']}, ${item['size']}</span>
            </li>`;
}

function displayItems(items){
    let lists = document.querySelector('.lists');
    lists.innerHTML= items.map(item => itemArr(item)).join('');
}

/* items 받아오기 */
loadItems()
.then((items) => {
    console.log(items);
    displayItems(items);
});