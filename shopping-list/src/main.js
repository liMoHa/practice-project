// 기능 1. 버튼 click or Enter keydown 되면 입력 문자열 쇼핑 리스트로 추가하기.
// 기능 2. 리스트가 overflow될 때 해당 리스트에 맞춰 스크롤 이동시키기
// 기능 3. 삭제 버튼 클릭시 리스트 삭제하기

// 모든 이미지가 다 다운로드 된 후에 실행.
window.addEventListener('load', () => {
    const inputForm = document.querySelector('.input-form__input'); // 부모 노드
    const button = document.querySelector('.input-form__addBtn');
    const lists = document.querySelector('.container__lists');
    
    // 구조를 좋게 작성할 수 있는 방법은 없을까?
    function createNodes(){
        // element 생성
        let list = document.createElement('div');
        let item = document.createElement('p');
        let button = document.createElement('button');
        let img = document.createElement('img');

        // 속성 추가
        list.setAttribute('class', "list");
        item.setAttribute('class', "list__item");
        button.setAttribute('class', "list__btn");
        img.setAttribute('src', "./img/closed-trash-can.png");
        img.setAttribute('alt', "closed transh can");

        // 자식 노드 추가
        lists.appendChild(list);
        list.appendChild(item);
        list.appendChild(button);
        button.appendChild(img);

        return item;
    }

    function insertList(item){
        // input으로 들어온 문자열이 최소 입력 길이 이상일 때 text로 추가
        const text = inputForm.value;
        // 내가 required minlength로 준 값을 가져오는 방법은 없나...
        if(text.length >= 1){
            createNodes().textContent = text;
            inputForm.value ='';
        } 
        else return; // 입력 길이가 0이면 아무것도 안 하고 걍 종료.
    }

    // 쇼핑 리스트 생성
    button.addEventListener('click', insertList);
    window.addEventListener('keydown', (e) => {
        if(e.key == 'Enter') insertList();
    })
});
