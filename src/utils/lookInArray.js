

export const getCommentsById = (array, postId) => {
        const arrayComment = array.filter(commentItem => {
           if (commentItem.postId === postId)
               return commentItem
           
       })
       return arrayComment;
}


export const getPhotosById = (array, albumId) => {
        const arrayAlbums = array.filter(photoItem => {
           if (photoItem.albumId === albumId)
                return photoItem
           
       })
       return arrayAlbums;
}

export const getSinglePhotoById = (array, photoId) => {
        const arrayPhoto = array.filter(photoItem => {
           if (photoItem.id === photoId)
                return photoItem
       })
       return arrayPhoto[0];
}