import React from 'react';

export default class Item extends React.Component {
	render(){
		return(
			<li className="item text-left">{this.props.textoItem}</li>
		)
	}
}