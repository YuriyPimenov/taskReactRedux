/**
 * Created by user on 19.04.18.
 */
//Добавляем массив контактов
import data from '../data.js';
export default function filterContacts(state = '',action) {
    if(action.type==='FIND_CONTACT'){
        return  action.payload;
    }
    return state;
}