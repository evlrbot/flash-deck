import React from 'react';
import './styles.css';
import Card from './Card.js';
import stackedCards from './StackedCards.js';
import http from 'http';

class Page extends React.PureComponent {

    constructor(props) {
	super(props);
	
	this.state = {
	    data: []
	};
    }
    
    async data() {
	return new Promise((resolve, reject) => {
	    http.get('http://localhost/cards', (res) => {
		let data = '';
		res.on('data', chunk => {
		    data += chunk;
		});
		res.on('end',() => {
		    return resolve(JSON.parse(data));		    
		});
		res.on('error', () => console.log );
	    });
	});
    }

    componentDidMount() {
	this.data()
	    .then((d) => {
		console.log(d)
		this.setState({data : d});
	    })
	    .then(() => {
		stackedCards();
	    });
    }

    componentWillUnmount() {}

    render() {
	return (
	    <div id="body">
		<div id="stacked-cards-block" className="stackedcards stackedcards--animatable init">
		    <div className="stackedcards-container">
			{this.state.data.map((value, index) =>{
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
