import React from "react";
import { connect } from "react-redux";
import { getOffices } from "../actions";

class ListLocations extends React.Component {
	componentDidMount() {
		this.props.getOffices();
	}

	renderList() {
		if (!this.props.offices) {
			return <div>Loading...</div>;
		}
		return this.props.offices.map(office => {
			return (
				<div className="item" key={office.id}>
					<div className="content">
						<div className="description">
							<div
								style={{
									position: "relative",
									float: "left",
									margin: "5px"
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
							</div>
							<div
								style={{
									position: "relative",
									float: "left",
									margin: "5px"
								}}
							>
								<h2>{office.name}</h2>
								<p>{office.description}</p>
							</div>
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div
				className="ui relaxed divided list"
				style={{
					backgroundColor: "#1bb8c8",
					padding: "10px",
					margin: "10px"
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
)(ListLocations);
