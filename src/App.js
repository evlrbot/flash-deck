import Page from './Page.js'
var cardData = ['foo','man','chu', 'bar', 'baz', 'zab'];

function App() {
    return (
	    <div className="App">
	    <Page cards={cardData} />
	    </div>
    );
}

export default App;
