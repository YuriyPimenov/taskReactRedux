import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducer from './reducers/index';

const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> ,
     document.getElementById('root'));
registerServiceWorker();



// import { createStore } from 'redux';
// import data from './data.js';
//
// function contacts(state = [],action) {
//     if(action.type==='ADD_CONTACT'){
//         return [
//             ...state,
//             action.name
//         ];
//     }
//     return state;
// }
// const store = createStore(contacts);
//
// const list = document.querySelectorAll('.list')[0];
// const contactInput = document.querySelectorAll('.contactInput')[0];
// const addContactBtn = document.querySelectorAll('.addContact')[0];
// //Подписываемся на изменения
// store.subscribe(()=>{
//     console.log('subscribe',store.getState());
//
//     list.innerHTML = '';
//     contactInput.value = '';
//     store.getState().forEach(contact =>{
//         const li = document.createElement('li');
//         li.textContent = contact;
//         list.appendChild(li);
//     });
// });
//
// //Создаём событие и добавляем
// data.map(function(el){
//     store.dispatch({type:'ADD_CONTACT',img:el.img,name:el.name,number:el.number,like:el.like,male:el.male});
// });
// // store.dispatch({type:'ADD_CONTACT',payload:'тест'});
//
//
// addContactBtn.addEventListener('click',()=>{
//     const contactName =contactInput .value;
//     console.log(contactName);
//     store.dispatch({type:'ADD_CONTACT',name:contactName});
// });