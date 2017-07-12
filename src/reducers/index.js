import { combineReducers } from 'redux';
import LibraryReducer from './reducer_libraries';
import SelectedLibraryReducer from './reducer_selected';

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectedLibraryReducer
});
