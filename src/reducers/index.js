/**
 * Created by user on 19.04.18.
 */
import {combineReducers} from 'redux';

import contacts from './contacts';
import filterContacts from './filterTracks'

export default combineReducers({
    contacts,
    filterContacts
})