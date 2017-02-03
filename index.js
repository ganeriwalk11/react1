import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
const url = 'src/jsonData/mainData.json';

export function fetchData() {
  const request = axios.get(url);
  return {
    type: FETCH_DATA,
    payload: request
  }
};

 
export function postData(data) {
  console.log(data);
  //const url = 'src/jsonData/mainData.json';
  const request = axios.post(url,data);
  return ;
  //    return {
  //   type: FETCH_DATA,
  //   payload: request
  // }

 
};
