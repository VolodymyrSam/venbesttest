
import {RefOfArea} from '../../index.js';
//import {info_of_ID} from '../../Redux/Peoples.js';


export let sortingByName = (inputID)=> {
  let text = RefOfArea.AreaSorter1.current.value;
  let justNeedId = inputID.filter( (item, i, arr) => {
    return (inputID[i].name.toLowerCase().includes(text.toLowerCase()))
  })
  if(text === 0) {justNeedId = inputID} 
  return justNeedId;
}

export let sortingByLastname = (inputID)=> {
  let text = RefOfArea.AreaSorter2.current.value;
  let justNeedId;
  justNeedId = sortingByName(inputID).filter( (item, i, arr) => {
    return (sortingByName(inputID)[i].lastname.toLowerCase().includes(text.toLowerCase()))
  });
  if(text === 0) {justNeedId = sortingByName(inputID)}
  return justNeedId;
}

export let sortingByAge = (inputID)=> {
  let text = RefOfArea.AreaSorter3.current.value;
  let justNeedId;
  justNeedId = sortingByLastname(inputID).filter( (item, i, arr) => {
    return (sortingByLastname(inputID)[i].age.toString() === text.toString())
  });
  if(text == 0) { return justNeedId = sortingByLastname(inputID)}
  return justNeedId;
}

export let sortingBySex = (inputID) => {
  let checkedm = RefOfArea.AreaSorterm.current.checked;
  let checkedf = RefOfArea.AreaSorterf.current.checked;
  let justNeedId;
  if(checkedm && checkedf) {justNeedId = sortingByAge(inputID)} else {
    if(checkedm) {
      justNeedId = sortingByAge(inputID).filter( (item, i, arr) => {
        return (sortingByAge(inputID)[i].sex === "m")
      });
    } else {
      if(checkedf) {
      justNeedId = sortingByAge(inputID).filter( (item, i, arr) => {
        return (sortingByAge(inputID)[i].sex === "f")
      });
      } else {
        justNeedId=[];
      }
    }
  }
  
  return justNeedId
}

let sorting = (inputID) => {
  return sortingBySex(inputID);
}

export default sorting;