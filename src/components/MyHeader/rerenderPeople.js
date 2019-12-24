
import {RefOfArea} from './../../index.js';
import {rerenderDOM} from './../../index.js';
import sorting from './sortingPeople';
import GetvenbestUsers from './../../Redux/GetPeople.js';
import store from './../../Redux/State.js';


let rerenderPeople = () => {
  GetvenbestUsers(store, 1);
  //rerenderDOM(GetvenbestUsers(store), rerenderPeople, RefOfArea);
}
 
export default rerenderPeople;