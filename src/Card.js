import React from 'react';

class Card extends React.PureComponent {
    constructor(props) {
	super(props);
	this.handleClick = this.handleClick.bind(this);
    }    

    handleClick(e) {
	var classList = e.currentTarget.classList;
	classList.contains('flipped') ? classList.remove('flipped') : classList.add('flipped')
    }
    
    render() {
	return(
	    <div className='card'
		 onClick={this.handleClick}
		 >
		<div className="card-inner">
		    <div className="card-front">
			<p>{this.props.frontTxt}</p>
		    </div>
		    <div className="card-back">
			<p>{this.props.backTxt}</p>
		    </div>
		</div>
	    </div>
	);
    }
}

export default Card
