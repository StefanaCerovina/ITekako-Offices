export default (state=[], action) => {
	switch(action.type){
		case 'GET_OFFICES':
			return action.payload
		default:
			return state;
	}
}