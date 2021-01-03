import React from 'react';

class Card extends React.PureComponent {
    constructor(props) {
	super(props);
	this.handleFlip = this.handleFlip.bind(this);
    }

    handleFlip() {
	//alert("flip");
    }

    render() {
	return(
	    <div id="card" onClick={this.handleFlip}>
		<div id="card-inner">
		    <div id="card-front">
			<p>Flash Deck</p>
		    </div>
		    <div id="card-back">
			<p>back back back back back back back back back back</p>
		    </div>
		</div>
	    </div>
	);
    }
}

export default Card
