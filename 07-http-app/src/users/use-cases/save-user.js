import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { userModelToLocalhost } from "../mappers/usert-to-localhost.mapper";
import { User } from "../models/user";

/**
 * 
 * @param {Like<User>} userLike 
 */


export const saveUser= async (userLike)=>{

    const user= new User(userLike);

    if(!user.firstName||!user.lastName)
        throw 'First & Last name are required';
        
        
    const userToSave= userModelToLocalhost(user);
    let userUpdated;

    if(user.id){
        userUpdated= await updatedUser(userToSave);
    }else{
        userUpdated=await createUser(userToSave);
    }
    return localhostUserToModel(userUpdated);

}


/**
 * 
 * @param {Like<User>} user 
 */

const updatedUser = async(user) =>{

    const url=`${import.meta.env.VITE_BASE_URL}/users/${user.id}`
    const res = await fetch(url,{
        method: 'PATCH',
        body: JSON.stringify(user),
        headers:{
            'Content-type':'application/json'
        }
    });
    const updatedUser = await res.json();
    console.log({updatedUser});
    return updatedUser;

}



/**
 * 
 * @param {Like<User>} user 
 */

const createUser = async(user) =>{

    const url=`${import.meta.env.VITE_BASE_URL}/users`
    const res = await fetch(url,{
        method: 'POST',
        body: JSON.stringify(user),
        headers:{
            'Content-type':'application/json'
        }
    });
    const newUser = await res.json();
    console.log({newUser});
    return newUser;

}
