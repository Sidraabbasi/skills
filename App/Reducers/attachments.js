

const attachments = (state = null, action) => {
    switch (action.type) {
        case 'ATTACHMENTS':
            return action.attachments;
            break;
        default:
            return state;
    }// end of switch
}// end of loginResponse

export default attachments;