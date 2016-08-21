import { FETCH_DATA } from '../actions/index';

export default function(state=[],action){
// allways return new state don not modify
// never use state.push this modufy the array

switch ( action.type ) {
  case FETCH_DATA :
        console.log('result at reducer' ,action.payload.data.objects);
      return state.concat([ action.payload.data.objects]);
      //or
      //return [action.payload.data,...state]
}
  return state;
}
