/**
 * Created by User_airtango on 6/21/2017.
 */


const TeaserSlider = (state = null, action) => {
    switch (action.type) {
        case 'TEASER_SLIDER':
            return action.teaserSlider;
            break;
        default:
            return state;
    }// end of switch
}// end of teaserSlider

export default TeaserSlider;