import React from "react";

//Styles
import "../styles/Header.css";

const Header = ({handleFilterTrue, handleFilterFalse, handleAll}) => {

    return (
        
        <>

        <header>
            <h4 className="logo">Lista de tareas</h4>
       
            <button className="btn-header"onClick={handleAll}>Todas</button>
            <button className="btn-header" onClick={handleFilterTrue}>Completadas</button>
            <button className="btn-header" onClick={handleFilterFalse}>Pendientes</button>


        </header>
        </>

    );
};

export default Header;