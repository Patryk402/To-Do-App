import React from 'react';

const AddWish = (props) => { // komponent funkcyjny tworzący bazę zmapowanych elementów i tworzy strkturę komponentu wyświetlanego w porzednim, wywołujący funkcje
    const style = { color: "red" } // style do wartośc important czyli elementu na czerwono
    const day = new Date(props.day).toLocaleString()// konwetowanie obiektu date na datę i godzinę 
    if (props.active) { // jeżeli active jest true zwróć tą zawartość (życzenia do zrobienia)
        return (
            <>
            <li>
                {props.important? <strong style={style}>{props.name} </strong> : <strong>{props.name}</strong>} {/* instrukcja zmieniająca kolor tekstu w zależności od statusu checkboxu inportant */}
                <em> zrobić do </em>
                <span> {props.data} </span> {/* wyświetlanie daty utworzenia życzenia */}
                <button onClick={() => props.change(props.id)}>Zrobione</button> {/* na podstawie id z obiekty state w App.js wywoływana jest funkcja zmieniająca active na false klikniętego elementu */}
                <button onClick={() => props.delete(props.id)}>X</button> {/* funkcja filtrująca która usuwa kliknięty element z listy */}
            </li>
                <br />
                </>
             )
        }
    else {// jeżeli active  jest false zwróć to (zrobione życzenia)
        return (
            <li>
                <strong>{props.name}</strong>
                <em> ( zrobione dnia {day} ) </em> {/* Wyświetlanie daty i godziny zrobionego życzenia*/}
                <button onClick={() => props.delete(props.id)}>X</button>
             </li>
             )
      }
    
}
 
export default AddWish;