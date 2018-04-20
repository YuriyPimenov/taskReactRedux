import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
// import {getContacts} from './actions/contacts'

class App extends Component {
    addContact(){
        console.log('add',this.contactInputName.value);
        this.props.onAddContact(this.contactInputName.value, this.contactInputNumber.value);
        this.contactInputName.value = '';
        this.contactInputNumber.value = '';
    }
    findTrack(){
        console.log('search',this.searchInput.value);
        this.props.onFindContact(this.searchInput.value);

    }
    sendForm(e){
        e.preventDefault();
        this.addContact();
    }
    addLike(id){
        console.log(777,this.props);
        this.props.onAddLike(id);
    }
    render() {
      console.log(this.props.testStore);
    return (
      <div className="book">
          <div className="form">
              <form onSubmit={this.sendForm.bind(this)}>
                  <input required placeholder="Имя" type="text" ref={(input)=>{this.contactInputName = input}}/>
                  <input required placeholder="Телефон" type="text" ref={(input)=>{this.contactInputNumber = input}}/>

                  <input type="submit" value="Добавить контакт"/>
                  {/*<button onClick={this.addContact.bind(this)}>Добавить контакт</button>*/}
              </form>

          </div>
          <div className="search">
              <input type="text" ref={(input)=>{this.searchInput = input}}/>
              <button onClick={this.findTrack.bind(this)}>Найти</button>
          </div>
          {/*<div>*/}
              {/*<button onClick={this.props.onGetContacts}>Получить контакт</button>*/}
          {/*</div>*/}
          <ul>
              {this.props.testStore.map((contact,index)=> {
                     return(
                         <ItemLi
                                 key={index}
                                 name={contact.name}
                                 img={contact.img}
                                 number={contact.number}
                                 id={contact.id}
                                 like={contact.like}
                                 addLikeItem={this.addLike.bind(this)}
                         />
                         )

              }
              )}
          </ul>
      </div>
    );
    }
}
class ItemLi extends Component{
    render(){
        return(
            <li key={this.props.index}>
                <img width="100px" src={this.props.img} alt=""/>
                <div className="itemLi">
                    <span className="name">Имя: {this.props.name}</span>
                    <span className="number">Телефон: {this.props.number}</span>
                    <button onClick={this.props.addLikeItem.bind(null,this.props.id)}>Кол-во лайков - {this.props.like}</button>

                </div>
                {/*<span>{this.props.name}</span>*/}
                {/*<span>{this.props.number}</span>*/}
                {/*<button onClick={this.props.addLikeItem.bind(null,this.props.id)}>Кол-во лайков - {this.props.like}</button>*/}
            </li>
        );
    }
}

export default connect(
    state=>({
        testStore:state.contacts.filter(contact=>contact.name.includes(state.filterContacts))//Наше хранилище
    }),
    dispatch=>({
        onAddLike:(id)=>{
            console.log('Добавляем лайк',id);
            dispatch({type:'ADD_LIKE',payload:id})
        },
        onAddContact:(name,number)=>{
            const payload = {
                id:Date.now().toString(),
                name,
                number,
                img: 'https://pp.userapi.com/c319117/v319117004/7c23/poHEINAmjBg.jpg',
                male:'men',
                like:0
            };
            dispatch({type:'ADD_CONTACT',payload:payload})
        },
        onFindContact:(contact)=>{

            dispatch({type:'FIND_CONTACT',payload:contact})
        },
        // onGetContacts:()=>{
        //
        //
        //     dispatch(getContacts());
        // }
    })
)(App);
