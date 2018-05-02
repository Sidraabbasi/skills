/**
 * Created by Atif Mukhtiar on 6/20/2017.
 */


const packages = (state = null, action) => {
    switch (action.type) {
        case 'PACKAGE':
            return action.packages;
            break;
        default:
            return state;
    }// end of switch
}// end of loginResponse

export default packages;