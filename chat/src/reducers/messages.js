// in a reducer pass in the current state and the action
// return the new state
// default state passed in is an empty array. Otherwise it will pass in the state.
// e.g. will pass in the current list of messages and return a new state.

import * as types from '../constants/ActionTypes'

const messages = (state = [], action) => {
	switch (action.type) {
		case types.ADD_MESSAGE:
		case types.MESSAGE_RECEIVED:
			return state.concat([
				{
					message: action.message,
					author: action.author,
					id: action.id
				}
				])
		default:
			return state
	}
}

export default messages