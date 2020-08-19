export const addUserAct=(data)=>{
  return{
    type:'ADD_USER',
    payload:data
  }
}
export const deleteUserAct=(task_id)=>{
  return{
    type:'DELETE_USER',
    payload:task_id
  }
}
