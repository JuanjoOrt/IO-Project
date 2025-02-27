import {executeServiceCall} from '../service';
import * as paths from '../callsConstants';


export function getAlbums(callback){
    executeServiceCall(paths.PATH_ALBUMS).then(callback);
}

export function getUsers(callback){
    executeServiceCall(paths.PATH_USERS).then(callback);
}

export function getTodo(callback){
    executeServiceCall(paths.PATH_TODOS).then(callback);
}

export function getPosts(callback){
    executeServiceCall(paths.PATH_POSTS).then(callback);
}

export function getComments(callback){
    executeServiceCall(paths.PATH_COMMENTS).then(callback);
}

export function getPhotos(callback){
    executeServiceCall(paths.PATH_PHOTOS).then(callback);
}
