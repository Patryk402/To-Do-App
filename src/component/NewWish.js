
import React, { Component } from 'react';

class NewWish extends Component { // komponent przechowujący wszystkie dane i funkcje służące do stworzenia nowego obiektu do tablicy w obiekcie state komponentu App.js
   
    state = { // przechowuje zawartości inputa text, checked inputa checkbox i datę uciętą metodą slice() która po ucięciu pokazuje DD-MM-YY
        text: "",
        date: new Date().toISOString().slice(0,10),
        checked: false,
    }
    handleText = (e) => { // funkcja onChange zmieniająca zawartośc obiektu statne na value z inputa text
        const text = e.target.value
        this.setState(
            {
            text
            }
        );
    }
    handleChecked = (e) => { // funkcja onChange zmieniająca zawartośc obiektu statne na checked z inputa checkbox
        const checked = e.target.checked
        this.setState(
            {
                checked
            }
        );
    }
    handleDate = (e) => { // funkcja onChange zmieniająca zawartośc obiektu statne na value z inputa date
        const date = e.target.value
        this.setState(
            {
            date
            }
        );
    }
    handleSend = (e) => { // funkcja przekazywana jako props do komponentu App.js wywołująca dodanie nowego obiektu do state w App.js
        e.preventDefault()
        const { text , date , checked} = this.state // desktukturyzacja 
        const add = this.props.add(text , date , checked)  // przekazywanie argumentów destrukturyzacji propsem do komponentu App.js(w nim jest jako add który wywołuje tamtejszą funkcje handle add i przekazuje jej parametry stąd)
        if (add) { 
            this.setState({ // czyszczenie pól w obiekcie state po kliknięciu jeżeli funkcja handleAdd zwraca true
                text: "",
                date: new Date().toISOString().slice(0, 10),
                checked: false
            })
        }
    }
    
    render() {
        const minDate = new Date().toISOString().slice(0, 10) // tworzeie minimalnej daty do inputa date
        let maxDate = minDate.slice(0,4) * 1 + 1 // tworzenie maksmalnej daty do inputa date tworząc rok
        maxDate = maxDate + "-12-29" // łączenie maksymalnej daty w całość dodając miesiać i dzień 
        return (
            <>
                <form onSubmit = {this.handleSend}> {/* formularz zawierający inputy uzupełniające obiekt state i przycisk dodający nowy obiekt(nowe życzenie)*/}
                <h2> Add New Wish </h2>
                <input style = {{fontSize:20, padding:10}} type="text" onChange = {this.handleText} placeholder="dodaj życzenie" value={this.state.text} /> <input type="checkbox" onChange = {this.handleChecked}  checked={this.state.checked}/> <strong> priorytet</strong>
                <br />
                <br />
                <strong>do kiedy</strong> <input type="date" onChange = {this.handleDate}  value = {this.state.date} min = {minDate} max = {maxDate} />
                <br />
                <br />
                <button style = {{ fontSize: 20 , color: "blue" , padding: 10 }}>Add Wish</button>
                </form>
                
            </>    
          );
    }
  
}
 
export default NewWish;