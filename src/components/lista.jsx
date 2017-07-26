import React from 'react';
import Item from './item.jsx';


export default class Lista extends React.Component {
	render(){
		return(
			<div className="border col-3">
				<h1>{this.props.tituloLista}</h1>
				<ul>
					<Item textoItem="Primer Item"/>
					<Item textoItem="Segundo Item"/>
					<Item textoItem="Tercer Item"/>
					<Item textoItem="Cuarto Item"/>
					<Item textoItem="Quinto Item"/>
					<Item textoItem="Sexto Item"/>
				</ul>
			</div>
		)
	}
}