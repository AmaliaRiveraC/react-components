import React, { Component } from 'react';
import Item from './item.jsx';



export default class Lista extends Component {
	render(){
		let arregloDeLi = this.props.elementosLista.map(
			(textoElemento) => {
				return <Item textoItem={textoElemento} />
			})
		return(
			<div className="border col-3">
				<h1>{this.props.tituloLista}</h1>
				<ul>
					{arregloDeLi}
				</ul>
			</div>
		)
	}
}