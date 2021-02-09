import {executeServiceCall} from '../service';
import * as paths from '../callsConstants';


export function getAlbums(callback){
    executeServiceCall(paths.PATH_ALBUMS).then(callback);
}