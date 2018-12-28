import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{

	constructor(props){
		super(props);
		this.state = {active: 'list'}
	}

	onClickLink(activeComponent){
		this.setState({active: activeComponent});
	}

	render(){
		return (
			<div className="ui inverted segment">
	  			<div className="ui inverted secondary fluid four item pointing menu">
	  				<div className="item">
	  					<h2>Offices </h2>
	  				</div>
					<Link to="/list" className={this.state.active === 'list' ? 'item active' : 'item'} onClick={() => {this.onClickLink('list')}}>
						List
					</Link>
					<Link to="/map"  className={this.state.active === 'map' ? 'item active' : 'item'} onClick={() => {this.onClickLink('map')}}>
						Map
					</Link>
					<Link to="/grid" className={this.state.active === 'grid' ? 'item active' : 'item'}  onClick={() => {this.onClickLink('grid')}}>
						Grid
					</Link>
				</div>
			</div>
	);
	}
	
}

export default Header;