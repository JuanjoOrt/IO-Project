

export const getCommentsById = (array, postId) => {
         const arrayComment = array.filter(commentItem => {
            if (commentItem.postId === postId)
                return commentItem
            
        })
        return arrayComment;
}