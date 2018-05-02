

const faq = (state = null, action) => {
    switch (action.type) {
        case 'FAQ':
            return action.faq;
            break;
        default:
            return state;
    }// end of switch
}// end of loginResponse

export default faq;