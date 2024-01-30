import React from 'react'

function useDeleteComment() {
  const deleteComment=(id,tree)=>{
    if(tree.id==id){
        return tree?.replies?.filter((el)=>el.id!==id)
    }
    let updatetree=tree?.replies?.map((el)=>{
        return deleteComment(id,el)
    })
    return {...tree,replies:updatetree}
    
  }
  return deleteComment
}

export default useDeleteComment
