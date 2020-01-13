import React from 'react';
//import './normalize.css';
import './../../INT20H.css';
import './../../venbest-test-app.css';
const PeopleInfo = (props) => {

  let Sex = ()=> {
    return (props.content.sex === "m") ? "Парень": "Девушка"
  }

  return (
    <div className="PeopleInfo row justify-content-center">
    <b className="namber_in_order align-self-center">{props.index + 1} </b>
    <div className="conteiner">
    <hr></hr>
      <div className="LineOfNameSurname">
        <b>{props.content.name} {props.content.lastname}</b>
      </div>
      <div className="LineOfAge">
        <b>Возраст: <span>{props.content.age}</span></b>
      </div>
      <div className="LineOfGender">
        <b>Пол: <span>{ Sex() }</span></b>
      </div>
    <hr></hr>
    </div>
    </div>
  );
}

export default PeopleInfo;