import {fetch} from 'whatwg-fetch';
import {appConfig} from '../appConfig.js';

export function sendAjax(url, options = {}) {
    let fullUrl = `${appConfig.serverPath}/${url}`;

    let promise = new Promise((resolve, reject) => {
        //
        fetch(fullUrl, options).then((response) => {
            //
            resolve(response.json());
            // return response.json();
        }).catch((error => {
            //
            reject(error);
        }))
    });

    return promise;

}