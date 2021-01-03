import React from 'react';
import './styles.css';
import Card from './Card.js';
import StackedCards from './StackedCards.js';

class Page extends React.PureComponent {

    componentDidMount() {
	StackedCards();
    }

    componentWillUnmount() {}

    render() {
	return (
	    <div id="body">
		<div id="stacked-cards-block" className="stackedcards stackedcards--animatable init">
		    <div className="stackedcards-container">
			{this.props.cards.map((value, index) =>{
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
