import React from 'react'; // import bibloteki React Component
import AddWish from './AddWish' // import komponentu funkcyjnego przechowującego przyciski które wywołują metody usuwające i zmieniające zadania na nieaktywne, tworzy tam też zmapowaną strukturę która jest wyświetlana tutaj w tym komponencie
const CreateWish = (props) => { //
    const style = {fontSize:12, color: "red"} // zmienna przechowująca style do komunikatu zrbionych życzeń 
    
    const activeWishes = props.wishes.filter(wish => wish.active) // nowa tablica przefiltrowanych aktywnych życzeń
    const discableWishes = props.wishes.filter(wish => !wish.active) // nowa tablica przefiltrowanych nieaktywnych życzeń
    
    activeWishes.sort((a, b) => { // nowa tablica przesortowanych elementów od A do Z czyli od najmniejszej do najwiekszej
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
         return 0
    })
    discableWishes.sort((a, b) => b.day - a.day) // nowa talbica przesortowanych elementów na podstawie milisekund obiektu date z obiektu state App.js
    
    const active = activeWishes.map(wish => ( // mapowanie przefiltrowanej tablicy z aktywnymi życzeniami i tworzenie na jej podstawie nowego komponentu który tworzy zawartość na podstawie zwracanej w tym komponencie
        <AddWish key={wish.id} id={wish.id} name={wish.name} delete = {props.delete} change = {props.change} active = {wish.active} data = {wish.data}  important = {wish.important}/>
    ))
    const discable= discableWishes.map(wish => ( // mapowanie przefiltrowanej tablicy z nieaktywnymi życzeniami i tworzenie na jej podstawie nowego komponentu który tworzy zawartość na podstawie zwracanej w tym komponencie
        <AddWish key={wish.id} id={wish.id}  name={wish.name} delete = {props.delete} active = {wish.active} data = {wish.data} day = {wish.day}  />
    ))
    return (
        <>
        <strong>Wishes ({activeWishes.length}) </strong> {/* długość aktywnych indexów  z przefiltrowanej tablicy */}
          
        <div>{active} </div>
            
        <hr />
     
            <strong>Done Wishes ({discableWishes.length}) {/* długość nieaktywnych indexów  z przefiltrowanej tablicy */}
                <br/>
                {discableWishes.length > 5 ? <span style={style}> (appear only first 5 wishes)</span> : null} </strong> {/* jeżeli jest wiecej niż 5 niekatywnych elementów wyświetl ten komunikat */}
            
            <div>{discable.splice(0, 5)} </div> {/*  wytnij tylko 5 niekatywnych elementów z tablicy discable */}
        </>
     );
}
 
export default CreateWish;