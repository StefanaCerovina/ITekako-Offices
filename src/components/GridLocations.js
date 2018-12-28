import React from "react";
import { getOffices } from "../actions";
import { connect } from "react-redux";

class GridLocations extends React.Component {
	componentDidMount() {
		this.props.getOffices();
	}

	renderList() {
		if (!this.props.offices) {
			return <div>Loading...</div>;
		} else {
			return this.props.offices.map(office => {
				return (
					<div
						key={office.id}
						className="four wide column"
						style={{
							textAlign: "center",
							backgroundColor: "white",
							margin: "10px"
						}}
					>
						{office.photo ? (
							<img
								className="ui avatar centered image"
								src={office.photo}
							/>
						) : (
							<div className="ui circular centered label">
								{office.name[0]}
							</div>
						)}
						<h3>{office.name}</h3>
						<p>{office.description}</p>
					</div>
				);
			});
		}
	}

	render() {
		return (
			<div
				className="ui grid centered container"
				style={{
					backgroundColor: "#1bb8c8",
					margin: "10px",
					padding: "10px"
				}}
			>
				{this.renderList()}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { offices: state.offices };
};

export default connect(
	mapStateToProps,
	{ getOffices }
)(GridLocations);
