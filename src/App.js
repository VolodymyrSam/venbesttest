import React from 'react';
//import logo from './logo.svg';
import './INT20H.css';
import './venbest-test-app.css';
import MyHeader from './components/MyHeader/MyHeader.js';
import ListPeople from './components/ListPeople/ListPeople.js';

function App(props) {
  return (
    <div className="App">
      <MyHeader RefOfArea={props.RefOfArea} rerenderPeople={props.rerenderPeople}/> {/*f={props.f}*/}
      <ListPeople justNeedId={props.justNeedId}/>
      </div>
  );
}

export default App;
