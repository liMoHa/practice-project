// 기능 1. 버튼 click or Enter keydown 되면 입력 문자열 쇼핑 리스트로 추가하기.
// 기능 2. 리스트가 overflow될 때 해당 리스트에 맞춰 스크롤 이동시키기
// 기능 3. 삭제 버튼 클릭시 리스트 삭제하기

// 모든 이미지가 다 다운로드 된 후에 실행.
window.addEventListener('load', () => {
    const inputForm = document.querySelector('.input-form__input'); // 부모 노드
    const addbtn = document.querySelector('.input-form__addBtn');
    const lists = document.querySelector('.container__lists');

    // 구조를 좋게 작성할 수 있는 방법은 없을까?
    function createNodes(){
        // element 생성
        let list = document.createElement('div');
        let item = document.createElement('p');
        let deleteBtn = document.createElement('button');
        let img1 = document.createElement('img');
        let img2 = document.createElement('img');

        // 속성 추가
        list.setAttribute('class', "list");
        item.setAttribute('class', "list__item");
        deleteBtn.setAttribute('class', "list__btn");
        img1.setAttribute('src', "./img/closed-trash-can.png");
        img2.setAttribute('src', "./img/opened-trash-can.png");
        img2.setAttribute('class', "delete");

        // 자식 노드 추가
        lists.appendChild(list);
        list.appendChild(item);
        list.appendChild(deleteBtn);
        deleteBtn.appendChild(img1);
        deleteBtn.appendChild(img2);

        // move scroll bar
        const y = lists.scrollHeight;
        console.log(y);
        lists.scrollTop = y;
        //lists.scrollTo({top: y, behavior: "smooth"});


        return item;
    }

    function insertList(item){
        // input으로 들어온 문자열이 최소 입력 길이 이상일 때 text로 추가
        const text = inputForm.value.trim();
        // 내가 required minlength로 준 값을 가져오는 방법은 없나...
        if(text !== ""){
            createNodes().textContent = text;
            inputForm.value ='';
            inputForm.focus();
        } 
        else {
            inputForm.value ='';
            return; // 입력 길이가 0이면 아무것도 안 하고 걍 종료.
        }
    }

    function deleteList(e){
        //console.log('event: ', e);
        // 만약 delet버튼에서 이벤트가 발생했다면 실행
        if(e.target.className === 'delete'){
            // e.path[2]이걸 지우면 됨.
            lists.removeChild(e.path[2]);   
        }
    }

    // 쇼핑 리스트 생성
    addbtn.addEventListener('click', insertList);
    window.addEventListener('keydown', (e) => {
        if(e.key == 'Enter') insertList();
    });

    //쇼핑 리스트 제거
    lists.addEventListener('click', (e) => {
        deleteList(e);
    });

    document.addEventListener('mousemove', (e) => {
        console.clear();
        console.log(e.pageY);
    });
});