import {get_Users, update_User, delete_User, getUsers_Success, getUsers_Fail, search_user} from './ActionTypes'
const INIT_STATE = {users : [], pageNo : 1, message : null, fetchedUsers : []}
export const userReducer = (state = INIT_STATE, action)=>
{
    switch(action.type)
    {   
        case getUsers_Success:
            {
                return {
                    ...state, users: action.payload.users, fetchedUsers : action.payload.users
                }
            }
        case getUsers_Fail:
            {
                return {...state, message: action.payload.message}
            }
        case update_User:
            {
                return { ...state, users : state.users.map((e)=>{
                    if(e.id === action.payload.id)
                    { 
                        console.log(action.payload);
                        return {...e, first_name : action.payload.first_name, last_name : action.payload.last_name}
                    }
                    else{
                        return e
                    }
                })}
            }
        case delete_User:
            {
                return { ...state, users: state.users.filter((e)=>{
                    if(e.id === action.payload.id)
                    return false
                    return true
                })}
            }
        case search_user:
            {
                return {...state, users: state.fetchedUsers.filter((e)=>{
                    if(!action.payload.keyword || action.payload.keyword === '')
                    return true;
                    else if ((e.first_name + e.last_name).toUpperCase().search(action.payload.keyword?.toUpperCase()) !== -1 )
                    return true;
                    return false
                })}
            }
        default:
            return state;
    }
}