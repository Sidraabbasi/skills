/**
 * Created by Atif Mukhtiar on 6/20/2017.
 */


const status = (state = null, action) => {
    switch (action.type) {
        case 'STATUS':
            return action.status;
            break;
        default:
            return state;
    }// end of switch
}// end of loginResponse

export default status;