import session from "../Session";
import actions from "./Actions";

const Reducer = (state, action) => {
    switch(action.type){
        case actions.login:
            session.set('isLogin', true)
            return {...state, isLogin: true};
        default:
            return state
    }
}

export default Reducer