import {rerenderDOM} from './../index.js';
import {RefOfArea} from './../index.js';
import rerenderPeople from './../components/MyHeader/rerenderPeople.js';
import sorting from './../components/MyHeader/sortingPeople.js';

let GetvenbastUsers = (store, flag) => {
  if(flag == 1) {
  window.fetch("https://venbest-test.herokuapp.com/")
    .then(res => res.json())
    .then(
      (res) => {
        store.state = res;
        rerenderDOM(sorting(store.state), rerenderPeople, RefOfArea);
      },
      (error) => {
        console.log(error)
      }
    )
  } else {
    window.fetch("https://venbest-test.herokuapp.com/")
    .then(res => res.json())
    .then(
      (res) => {
        store.state = res;
        rerenderDOM(store.state, rerenderPeople, RefOfArea);
      },
      (error) => {
        console.log(error)
      }
    )
  }
};
export default GetvenbastUsers;