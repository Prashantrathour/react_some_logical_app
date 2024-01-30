import React from 'react'

function useAddComment() {
  const addcomment=(id,newcommet,tree)=>{
   
    if(tree.id==id){
        tree.replies.unshift(newcommet)
        return tree
    }
let updatedReply=tree?.replies?.map((el)=>{
        return  addcomment(id,newcommet,el)
    })
    
    
    return {...tree,replies:updatedReply}
  }
  return {addcomment}
}

export default useAddComment
