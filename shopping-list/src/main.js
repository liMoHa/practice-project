// 기능 1. 버튼 click or Enter keydown 되면 입력 문자열 쇼핑 리스트로 추가하기.
// 기능 2. 리스트가 overflow될 때 해당 리스트에 맞춰 스크롤 이동시키기
// 기능 3. 삭제 버튼 클릭시 리스트 삭제하기

// 모든 이미지가 다 다운로드 된 후에 실행.
window.addEventListener('load', () => {
    const inputForm = document.querySelector('.input-form__input'); // 부모 노드
    const addbtn = document.querySelector('.input-form__addBtn');
    const lists = document.querySelector('.container__lists');

    let id = 0;
    // 구조를 좋게 작성할 수 있는 방법은 없을까?
    function createNodes(text){
        const list = document.createElement('li');
        list.setAttribute('class', "list");
        list.setAttribute('data-id', id); // 여기 엘리님 어떻게?
        list.innerHTML = `
            <p class="list__item">${text}</p>
            <button class="list__btn">
                <img src="./img/closed-trash-can.png"/>
                <img src="./img/opened-trash-can.png" class="delete" data-id=${id} />
            </button> `;
        id++;
        return list;
    }

    function onAdd(item){
        // input으로 들어온 문자열이 최소 입력 길이 이상일 때 text로 추가
        const text = inputForm.value.trim();
        // 내가 required minlength로 준 값을 가져오는 방법은 없나...
        if(text !== ""){
            const list = createNodes(text);
            lists.appendChild(list);
            // move scroll bar
            list.scrollIntoView({block: "center"});
            inputForm.value ='';
            inputForm.focus();
        } 
        else {
            inputForm.value ='';
            return; // 입력 길이가 0이면 아무것도 안 하고 걍 종료.
        }
    }

    // 쇼핑 리스트 생성
    addbtn.addEventListener('click', onAdd);
    window.addEventListener('keydown', e => {
        if(e.key == 'Enter') onAdd();
    });

    lists.addEventListener('click', e => {
    const id = e.target.dataset.id;
       if(id){
           const list = document.querySelector(`.list[data-id="${id}"]`);
           list.remove();
       }
    })
});