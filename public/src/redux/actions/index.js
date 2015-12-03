import fetch from 'isomorphic-fetch'
import request from 'browser-request';

export function submitApp(application) {
    return dispatch => {
        return request({method: 'POST', url: '/api/sendApp', body: application, json: true}, function (err, res, body) {
            if (err) {
                throw err;
            } else {
                if (result.ok) {

                }
            }
        })
    }
}