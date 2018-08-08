import {takeEvery} from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';

// function* is a generator function. Can return something different
const handleNewMessage = function* handleNewMessage (params) {
    // yield mandatory for generator functions

    // when this action occurs, send a message to the websocket passing in the action and some details.
    // so the message can be dispatched by server to all clients.
    yield takeEvery(types.ADD_MESSAGE, (action) => {
        action.author = params.username;
        params.socket.send(JSON.stringify(action));
    })
}

export default handleNewMessage;