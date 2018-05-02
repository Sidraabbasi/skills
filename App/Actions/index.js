/**
 * Created by Atif Mukhtiar on 6/19/2017.
 */

export const setLoginAction = (loginResponse) => {
    return {
        type: 'LOGIN_RESPONSE',
        loginResponse
    }
};

export const setPackageAction = (packages) => {
    return {
        type: 'PACKAGE',
        packages
    }
};


export const setStatusAction = (status) => {
    return {
        type: 'STATUS',
        status
    }
};


export const setInspirationAction = (inspiration) => {
    return {
        type: 'INSPIRATION',
        inspiration
    }
};

export const setFaqAction = (faq) => {
    return {
        type: 'FAQ',
        faq
    }
};

export const setContactListAction = (contacts) => {
    return {
        type: 'CONTACTS',
        contacts
    }
};


export const getTeaserSliderAction = (teaserSlider) => {
    return {
        type: 'TEASER_SLIDER',
        teaserSlider
    }
};

export const setActivityAction = (activity) => {
    return {
        type: 'ACTIVITY',
        activity
    }
};

export const setAttachmentsAction = (attachments) => {
    return {
        type: 'ATTACHMENTS',
        attachments
    }
};