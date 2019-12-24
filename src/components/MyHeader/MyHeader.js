import React from 'react';
//import './normalize.css';
import './../../INT20H.css';
import './../../venbest-test-app.css';
//import Navigation from './Navigation/Menu.js';
//import NoNavigation from './Navigation/NoMenu.js';
//import { AreaSorter1 } from './../index';
let MyHeader = (props) => {
  //let AreaSorter1 = React.createRef();
  return (
    <div className="MyHeader">
      <div className="top-block">
        <div className="screen">
           <header>
              Наши клиенты:
           </header>
        </div>
        <div className="screen">
           <div className="sorting row justify-content-center">
              <div className="col-sm-7 col-md-7 col-lg-5 col-xl-5" id="list-ul1">
                 <b className="PreText">Имя:</b><input className="text_sort input0" type="text" placeholder="имя" name="vh"  id="inputList1" ref={props.RefOfArea.AreaSorter1} onInput={ props.rerenderPeople }></input> {/**/}
                 <b className="PreText">Фамилия:</b><input className="text_sort input0" type="text" placeholder="фамилия" name="vh"  id="inputList2" ref={props.RefOfArea.AreaSorter2} onInput={ props.rerenderPeople }></input> {/**/}
                 <b className="PreText">Возраст:</b><input className="text_sort input0" type="text" placeholder="возраст" name="vh"  id="inputList3" ref={props.RefOfArea.AreaSorter3} onInput={ props.rerenderPeople }></input> {/**/}
                 <div className="checkbox row justify-content-center">
                 <b className="PreText col-auto">Пол:   </b>
                  <div className="form-check form-check-inline col-auto mycheck">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" ref={props.RefOfArea.AreaSorterm} defaultChecked onInput={ props.rerenderPeople }></input>
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Мужчина</label>
                  </div>
                  <div className="form-check form-check-inline col-auto mycheck">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" ref={props.RefOfArea.AreaSorterf} defaultChecked onInput={ props.rerenderPeople }></input>
                    <label className="form-check-label" htmlFor="inlineCheckbox2">Женщина</label>
                  </div>
                 </div>
              </div>
              {/* <div className="col-sm-5 col-md-5 col-lg-4 col-xl-3">
                 <button className="btnsort" id="sort" onClick={ props.rerenderPeople }>Отсортировать</button> {//}
              </div> */}
           </div>
        </div>
      </div>
    </div>
  );
}

export default MyHeader;