import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from './Redux/State.js';
import GetvenbestUsers from './Redux/GetPeople.js';
import {info_of_ID} from './Redux/Peoples.js';
import rerenderPeople from './components/MyHeader/rerenderPeople.js';

var justNeedId = info_of_ID;

let AreaSorter1 = React.createRef();
let AreaSorter2 = React.createRef();
let AreaSorter3 = React.createRef();
let AreaSorterm = React.createRef();
let AreaSorterf = React.createRef();
export let RefOfArea = {
  AreaSorter1: AreaSorter1,
  AreaSorter2: AreaSorter2,
  AreaSorter3: AreaSorter3,
  AreaSorterm: AreaSorterm,
  AreaSorterf: AreaSorterf
}
export let rerenderDOM = (justNeedId, rerenderPeople, RefOfArea) => {
  ReactDOM.render(<App justNeedId={justNeedId} rerenderPeople={rerenderPeople} RefOfArea={RefOfArea}/>, document.getElementById('root'));
}
 GetvenbestUsers(store, 0);
//rerenderDOM(GetvenbestUsers(store), rerenderPeople, RefOfArea);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
