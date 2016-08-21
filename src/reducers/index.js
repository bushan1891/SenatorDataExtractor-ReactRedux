import { combineReducers } from 'redux';
import SenatorReducer from './reduser_search';

const rootReducer = combineReducers({
      senator_data:SenatorReducer
});

export default rootReducer;
