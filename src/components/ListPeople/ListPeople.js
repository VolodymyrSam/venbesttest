import React from 'react';
//import './normalize.css';
import './../../INT20H.css';
import './../../venbest-test-app.css';
import PeopleInfo from './PeopleInfo.js';
//import NoNavigation from './Navigation/NoMenu.js'; info_of_ID1

//var fs = require('fs');
//var PeoplesInfo1 = fs.readFile('PeoplesInfo1.json', 'utf8');
//var PeoplesInfo12 = JSON.parse('PeoplesInfo1.json');
//console.log(PeoplesInfo12);

//import info_of_ID1 from './PeoplesInfo1.json';

/* <PeopleInfo content={info_of_ID[0]}/>
<PeopleInfo content={info_of_ID[1]}/>
<PeopleInfo content={info_of_ID[2]}/>
<PeopleInfo content={info_of_ID[3]}/>
<PeopleInfo content={info_of_ID[4]}/> */

const ListPeople = (props) => {

  let Peoples = props.justNeedId.map( (info_ID, index) => <PeopleInfo content={info_ID} index = {index}/>);
  
  return (
    <div className="ListPeople">
      {Peoples}
    </div>
  );
}

export default ListPeople;