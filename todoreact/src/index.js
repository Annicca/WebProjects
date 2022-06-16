import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const todoList = ["Выпить чай", "Съесть булочку", "Покормить кота"]
const Header = () =>{
    return(<h1>To do List</h1>)
}
const Input = () =>{
    return(
        <div>
            <input className="in" placeholder="Введите значение"></input>
            <button className="but">Add</button>
        </div>
    )
}
const List = ({todoL}) =>{
    return(
        <ul className="list">
            {todoL.map(todo =>(<li>{todo}</li>))}
        </ul>
    )
}
const App = () => {
    return(<div className="App"><Header/><Input/><List todoL = {todoList}/></div>);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App classNAme = "App"/>
);
