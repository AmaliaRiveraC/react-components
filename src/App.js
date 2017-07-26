import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lista from './components/lista.jsx';

class App extends Component {
	render() {
		return (
			<div className="App container">
				<div className="row">
					<Lista tituloLista="Primera Lista"/>
					<Lista tituloLista="Segunda Lista"/>
					<Lista tituloLista="Tercera Lista"/>
				</div>
			</div>
		);
	}
}

export default App;
