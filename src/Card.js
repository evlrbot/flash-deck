import React from 'react';

class Card extends React.PureComponent {
    constructor(props) {
	super(props);
	this.handleClick = this.handleClick.bind(this);
	this.state = {
	    flipped: false
	};
    }    

    handleClick() {
	console.log('click');
	this.setState(function(state, props){
	    return {
		flipped: state.flipped ? false : true
	    }
	});
    }
    
    render() {
	return(
	    <div className={`card ${this.state.flipped ? 'card flipped' : 'card'}`}
		 onClick={this.handleClick}
		 >
		<div className="card-inner">
		    <div className="card-front">
			<p>Flash Deck</p>
		    </div>
		    <div className="card-back">
			<p>back back back back back back back back back back</p>
		    </div>
		</div>
	    </div>
	);
    }
}

export default Card
