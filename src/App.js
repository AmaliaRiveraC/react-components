import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lista from './components/lista.jsx';

class App extends Component {
	render() {
		return (
			<div className="App container">
				<div className="row">
					<Lista tituloLista="Materias" elementosLista={["JavaScript", "Css", "HTML"]}/>
					<Lista tituloLista="Mandado" elementosLista={["leche", "papel higienico", "cafe"]}/>
					<Lista tituloLista="Deudas" elementosLista={["laboratoria", "campus party", "doctor"]}/>
				</div>
			</div>
		);
	}
}

export default App;
