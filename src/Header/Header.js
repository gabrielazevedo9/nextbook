import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function Header() {
    return(
        <header className="header">
            
            <div className="nextbook">
                <h1>NEXTBOOK</h1>
            </div>
            <div className="menu">
                <input className="pesquisar" type="text" id="busca" placeholder="Pesquisar Livro"/>
                <button className="filtrar">Filtrar</button>
                <button className="login">Login</button>
            </div>
        
        </header>
    );
}

export default Header; 

