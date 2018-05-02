/**
 * Created by Atif Mukhtiar on 6/20/2017.
 */


const loginResponse = (state = null, action) => {
    switch (action.type) {
        case 'LOGIN_RESPONSE':
            return action.loginResponse;
            break;
        default:
            return state;
    }// end of switch
}// end of loginResponse

export default loginResponse;