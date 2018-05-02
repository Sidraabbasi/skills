/**
 * Created by Atif Mukhtiar on 6/19/2017.
 */


import {combineReducers} from 'redux';
import loginResponse from './LoginResponse';
import inspiration from './Inspiration';
import packages from './package';
import status from './status';
import faq from './faq';
import contacts from './contacts';
import activity from './activity';
import attachments from './attachments';

module.exports = combineReducers({
    inspiration,
    loginResponse,
    packages,
    status,
    faq,
    contacts,
    activity,
    attachments
});// end of combineReducers