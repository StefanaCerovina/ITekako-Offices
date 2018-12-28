import maps from "../apis/maps";

export const getOffices = () => async dispatch => {
	const response = await maps.get("/offices");
	dispatch({ type: "GET_OFFICES", payload: response.data });
};
