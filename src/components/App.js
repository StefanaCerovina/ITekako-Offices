import React from 'react';
import ListLocations from './ListLocations';
import MapLocations from './MapLocations';
import GridLocations from './GridLocations';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import Header from './Header';

const App = () => {
	return(
		<div className="ui container">
			<BrowserRouter>
				<div>
					<Header/>
					<Redirect from="/" to="/list" />
					<Route path="/list" component={ListLocations}/>
					<Route path="/map" component={MapLocations}/>
					<Route path="/grid" component={GridLocations}/>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;