

const activity = (state = null, action) => {
    switch (action.type) {
        case 'ACTIVITY':
            return action.activity;
            break;
        default:
            return state;
    }// end of switch
}// end of loginResponse

export default activity;