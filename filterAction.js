import axios from 'axios';

export const FETCH_FIL_DATA = 'FETCH_FIL_DATA';

export function fetchFilData() {
  console.log("yes");
  const url = 'src/jsonData/mainData.json';
  const request = axios.get(url);
  
  return {
    type: FETCH_FIL_DATA,
    payload: request
  }
  
};