import axios from 'axios';
export const FETCH_DATA ='FETCH_DATA';

 export function fetchData(data){
   console.log('action',data);
const url = 'https://www.govtrack.us/api/v2/role?role_type=senator&offset=' + data.offset;
const request = axios.get(url);
console.log('Request',request);

  return {
    type: FETCH_DATA,
    payload: request
  };

}
