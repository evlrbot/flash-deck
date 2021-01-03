import React from 'react';
import './styles.css';
import Card from './Card.js';
import StackedCards from './StackedCards.js';

class Page extends React.PureComponent {
    constructor(props) {
	super(props);
	this.state = {
	    x : null,    // mouse x
	    y : null,     // mouse y
	    cards : ['foo','man','chu']
	}
	this.onMouseMove = this.onMouseMove.bind(this);
    }

    componentDidMount() {
	StackedCards();
    }

    componentWillUnmount() {}

    // handle the onMouseMove event in the component
    onMouseMove(e) {
	this.setState({
	    x : e.clientX,
	    y : e.clientY
	});
    }
    
    render() {
	return (
	    <div id="body" onMouseMove={this.onMouseMove}>
		<div id="stacked-cards-block" className="stackedcards stackedcards--animatable init">
		    <div className="stackedcards-container">
			{this.state.cards.map((value, index) =>{
			    return <Card key={index} frontTxt={`${index}`} backTxt={`${value}`}/>
			})}
		    </div>
		    <div className="stackedcards--animatable stackedcards-overlay top">TOP</div>
		    <div className="stackedcards--animatable stackedcards-overlay right">RIGHT</div>
		    <div className="stackedcards--animatable stackedcards-overlay left">LEFT</div>
		</div>
		<div className="global-actions">
		    <div className="left-action">Left</div>
		    <div className="top-action">Top</div>
		    <div className="right-action">Right</div>
		</div>  
	    </div>
	);
    }
}

export default Page
