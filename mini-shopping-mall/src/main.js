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

// 함수를 적는 순서도 확인해보자.
function itemArr(item){
    return `<li>
                <img src="${item['item']}" alt="cloth-image" />
                <span>${item['gender']}, ${item['size']}</span>
            </li>`;
}

function displayItems(items){
    console.log("item:",items);
    let lists = document.querySelector('.lists');
    lists.innerHTML= items.map(item => itemArr(item)).join('');
}

function filterCloths(e){
    if(e.target.dataset.type === 'btn'){
        itemsPromise.then((items) => {
            let filteredItems = items.filter((item) => {
                if(e.target.dataset.id == "all") return true;
                else{
                    return item['type'] === e.target.dataset.id || item['color'] === e.target.dataset.id;
                }
            });
            console.log("?:",filteredItems);
            displayItems(filteredItems); // display filtered clothes
        });
    }
}
/* items 받아오기 */
// item을 한 번만 받아온 후로 계속 사용하고 싶어서 아래와 같이 쓴 건데 이렇게 사용하지 않을 수도 있으니까 이 부분 확인해보자.
const itemsPromise = loadItems(); // 나중에 사용할 거임. 

itemsPromise.then(displayItems); // at first load

const body = document.querySelector('body');
body.addEventListener('click', filterCloths);
