import React from "react";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";
import { getOffices } from "../actions";
import { connect } from "react-redux";

const mapStyles = {
	width: "100%",
	height: "100%"
};

class MapLocations extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showingInfoWindow: false,
			activeMarker: {},
			selectedPlace: {}
		};

		this.onMarkerClick = this.onMarkerClick.bind(this);
		this.onMapClick = this.onMapClick.bind(this);
	}

	componentDidMount() {
		this.props.getOffices();
	}

	onMarkerClick(props, marker, e) {
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		});
	}

	onMapClick(props) {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			});
		}
	}

	renderList() {
		if (!this.props.offices) {
			return <div>Loading...</div>;
		}
		return this.props.offices.map(office => {
			return (
				<Marker
					key={office.id}
					position={{
						lat: office.latitude,
						lng: office.longitude
					}}
					title={office.name}
					name={office.name}
					label={office.name}
					description={office.description}
					onClick={this.onMarkerClick}
				/>
			);
		});
	}

	render() {
		console.log(
			this.state.activeMarker !== null && this.state.showingInfoWindow
		);
		return (
			<Map
				google={this.props.google}
				zoom={2}
				minZoom={1}
				style={mapStyles}
				initialCenter={{
					lat: 0,
					lng: 0
				}}
				onClick={this.onMapClick}
				style={{ width: "86vw", height: "100vh" }}
			>
				{this.renderList()}
				<InfoWindow
					marker={this.state.activeMarker}
					visible={this.state.showingInfoWindow}
				>
					<div>
						<h4>
							{this.state.activeMarker
								? this.state.activeMarker.name
								: ""}
						</h4>
						<p>
							{this.state.activeMarker
								? this.state.activeMarker.description
								: ""}
						</p>
					</div>
				</InfoWindow>
			</Map>
		);
	}
}

const mapStateToProps = state => {
	return { offices: state.offices };
};

export default connect(
	mapStateToProps,
	{ getOffices }
)(
	GoogleApiWrapper({ apiKey: "AIzaSyCl3cuStcHOCqi_UAYpdghxDU3m5n4383M" })(
		MapLocations
	)
);
