import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, changeTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이선 독학']);
  let [newTitle, changeNewTitle] = useState('');
  let [count, addCount] = useState(0);

  let [modal, changeModal] = useState(false);
  let [selectTitle, changeSelectTitle] = useState(0);

  let [contentText, changeContentText] = useState('');

  function UIs(){
    var arrayUIs = [];
    for (var i=0; i<3; i++){
      arrayUIs.push(<div>arrayUIs</div>)
    }

    return arrayUIs
  }

  let style1 = { color : 'blue', fontSize: '30px' };
  let posts = '강남 고기 맛집';

  function changeTitle1(){
    var newArray1 = [...title];
    newArray1[0] = '여자 코트 추천';
    changeTitle( newArray1 );
  }
 
  function changeTitle2(){
    var newArray2 = [...title];
    newArray2 = newArray2.sort();
    changeTitle( newArray2 );
  }

  function addTitle(t){
    var newArray3 = [...title];
    newArray3 = newArray3.push(t);
    changeTitle( newArray3 );
  }

  function addCount1(i){
    var newCountArray = [...count];
    newCountArray[i] = newCountArray[i] +1;
    addCount( newCountArray );
  }

  return (
    <div className="App">
      <div className = "black-nav">
        <div style={ style1 }>개발 blog</div>
      </div>

      <button onClick = { changeTitle1 }>button1</button>
      <button onClick = { changeTitle2 }>button2</button>
      <button onClick = { addCount1 }>button3</button>

      {
        title.map(function(a, i){
          return (
            <div className = "list" key={i}>
              <h3 onClick={ ()=>{ changeSelectTitle(i) } }> { a } 
                <span onClick={ ()=>{ addCount1(count + 1) } }> { count }</span>
              </h3>
              <p>2월 21일 발행</p>
              <hr/>
            </div>
          )
        })
      }

      <input onChange = { (e)=>{ changeContentText(e.target.value) } } />
      {<br></br>}
      { contentText }

      <div className = "publish">
        <input onChange = { (e)=>{ changeNewTitle(e.target.value) } } />
        { newTitle }
        <button onClick = { (e)=>{ addTitle(newTitle) } }>저장</button>
      </div>

      <button onClick = {
          modal == false
          ? ()=> { changeModal(true) }
          : ()=> { changeModal(false) }
      }> 모달창 열고 닫는 버튼 깃테스트</button>

      {
        modal == true
        ? <Modal modalTitle = { title } modalSelectTitle = { selectTitle } />
        : null
      } 
    </div>
  );
}

function Modal(props){
  return(
    <div className = "modal">
      <h2>제목 : { props.modalTitle[props.modalSelectTitle] }</h2>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  )
}

export default App;
