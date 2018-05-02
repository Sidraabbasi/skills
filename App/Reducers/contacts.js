

const contacts = (state = null, action) => {
    switch (action.type) {
        case 'CONTACTS':
            return action.contacts;
            break;
        default:
            return state;
    }// end of switch
}// end of loginResponse

export default contacts;