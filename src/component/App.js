import React, { Component } from 'react'; // import bibloteki React Component
import Createwish from './CreateWish'; //(sekcja stworzone i spełnione życzenia) import komponentu funkcyjnego który filtruje, sortuje, mapuje i wyświetla obiekt state tego komponentu
import NewWish from "./NewWish" //(sekcja górna tworząca nowe życzenie) import komponentu klasowego który tworzy nowy obiekt i pushuje go do tablicy w tym komponencie
import './App.css';

class App extends Component {  // komponent główny przechowujący życzenia 
  counter = 4 // licznik id do nowego życzenia
  state = {
    wishes: [
      {
        id: 0, // unikalne id dzięki któremu rozpoznaję kliknięty element, służy też to przpisywania wartości key do komponentu importowanego
        name: "poćwiczyć", // nazwa życzenia zmieniana imputem 
        active: true, // właściwość na podstawie której stwierdzam niespełnione życzenie i spełnione
        data: "2021-05-07", // data która stwierdza termin życzenia
        important: true, // checkbox który zmienia kolor życzenia w zależności czy jest ważne czy nie
        day: null // data ukończenia życzenia
      },
      {
        id: 1,
        name: "ugotować obiad",
        active: true,
        data: "2021-08-01",
        important: false,
        day: null
      },
      {
        id: 2,
        name: "pograć w fife",
        active: true,
        data: "2021-10-23",
        important: false,
        day: null
      },
      {
        id: 3,
        name: "wykosić trawę",
        active: true,
        data: "2021-01-30",
        important: true,
        day: null
      },
    ],
  }

  handleChangeActive = (id) => { //(przycisk komponentu AddWish) funkcja zmieniająca status życzenia na zrobione 
    const wishes = [...this.state.wishes] // kopia tablicy na podstawie której będzie aktualizowany obiekt state z główą tablicą 
    wishes.forEach(wish => { // metoda fotEach która przechodzi przez wszystkie elementy i wybiera ten kliknięty 
      if (wish.id === id) {
        wish.active = false;
        wish.day = new Date().getTime()  
      }
    })
    this.setState({
      wishes
    })
  }

  handleDelete = (id) => {
    const wishes = this.state.wishes.filter(wish => wish.id !== id) // zwraca tablicę i filtruje  tylko te elementy które są różne od klikniętego id
    
    this.setState({
      wishes // aktualizuje główną tablicę obiektu state na przefiltrowaną kopię z tej metody
    })
  }
  handleAdd = (text, date, checked) => { // metoda dodająca nowy obiekt do tablicy z zyczeniami
    const wish = // nowy obiekt z właściwościami pushowany do obiektu state z zyczeniami
    {
      id: this.counter, // właściwośc z licznika dla ID nowego życzenia
      name: text, // tytuł nowego życzenia pobierany z inputa obiektu state komponentu NewWish
      active: true, // domyślna wartość aktywnego nowego zyczenia
      data: date, // wartość obiektu date konwertowana na datę z obektu state komponetu NewWish
      important: checked, // wartość checkboxa obiekty state komponentu NewWish
      day: null // domyślna wartość która służy do zrobionych życzeń 
    }
    const wishes = [...this.state.wishes] // kopia tablicy obiektu state
    if (text) { // jeżeli w impucie text jest cos wpisane
      wishes.push(wish) // pushuj do kopii tablicy nowy obiekt
      this.setState({
        wishes // aktualizowanie głównego obiektu state na kopię zmienioną tutaj
      })
    }
    else {
      alert("Wpisz życzenie")
    }
    this.counter++ // zwiększanie licznika w celu nadania nowego ID dla nowego obiektu
    return true // jeżeli metoda zwraca tru uruchom dodawanie
  }

  render() {
    return (
      <div className="App">
        <NewWish add={this.handleAdd} /> {/* Komponent klasowy tworzący właściwości do nowego życzenia i przekazujący do tego funkcję tworzącą nowe życzenie  */}
        <hr /> {/* kreska odstępu  */}
        <Createwish wishes={this.state.wishes} delete={this.handleDelete} change={this.handleChangeActive} />
        {/* komponent funkcyjny filtrujący nowe życzenia i usuwający je */}
      </div>
    );
  }
}
export default App  
