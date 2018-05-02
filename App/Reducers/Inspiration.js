/**
 * Created by Atif Mukhtiar on 6/19/2017.
 */

const inspiration = (state = null, action) => {
    switch (action.type) {
        case 'INSPIRATION':
            return action.inspiration;
            break;
        default:
            return state;
    }// end of switch
}// end of loginResponse

export default inspiration;