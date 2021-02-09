import axios from 'axios';

export function executeServiceCall(actionURL) {
    return axios({
        method: 'GET',
        url: actionURL
    }).then(function (response) {
        return response.data;
    });
}