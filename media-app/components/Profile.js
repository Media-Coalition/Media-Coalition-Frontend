import React, { useState } from "react";

function Profile(){
    const [username, setUserName] = useState("")

    const handleInputChanges = () =>{

    }
    

    return(
        <div>
        {username}
        <input type="text"/>
        <Button onClick={setUserName}>Change Username</Button>
        {name}
        <Button>Change Name</Button>
        {age}
        {password}
        <Button>Change Password</Button>
        {reviews}
 
        </div>
    )
}

export default Profile;