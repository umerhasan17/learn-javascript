// reducers broken up into 2 files
// this is the combination file

import {combinedReducers} from "redux";
import messages from "./messages";
import users from "./users";

const chat = combinedReducers({
    messages, 
    users
})

export default chat;