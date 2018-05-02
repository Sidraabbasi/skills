let URL = require('url');
import KeysNetwork from '../Keys/KeysNetwork';

export default class NetworkApiCall {


    static initGetInstance(endpointUri, body = {}, method = 'GET', headers = {}) {
        let url = URL.parse(`${KeysNetwork.BASE_URL}${endpointUri}`);

        console.log('NetworkCall URL', KeysNetwork.BASE_URL + endpointUri);

        url.query = {};
        let timeout = {timeout: 5000};
        Object.keys(body)
            .forEach((key) => {
                url.query[key] = body[key]
            });
        return fetch(URL.format(url), {
            method,
            headers,
            timeout,

        });
    }// end of initInstance


    static initPostInstance(endpointUri, body = {}, method = 'POST') {

        let url = URL.parse(`${KeysNetwork.BASE_URL}${endpointUri}`);
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        let timeout = {timeout: 100000};
        return fetch(URL.format(url), {
            method,
            headers,
            body,
            timeout,
        });
    }// end of initInstance


    static isObjectEmpty(obj) {

        return Object.keys(obj).length === 0 && obj.constructor === Object;
    }
}
