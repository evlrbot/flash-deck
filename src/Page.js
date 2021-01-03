import React from 'react';
import './styles.css';
import Card from './Card.js';

class Page extends React.PureComponent {
    constructor(props) {
	super(props);
	this.state = {
	    x : null,    // mouse x
	    y : null     // mouse y
	}
	this.onMouseMove = this.onMouseMove.bind(this);
    }

    componentDidMount(){}

    componentWillUnmount(){}

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
		<div className="mouse_position">
		    X:{this.state.x}<br/>
		    Y:{this.state.y}
		</div>

		<Card />
	    </div>
	);
    }
}

export default Page
