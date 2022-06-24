import { useState } from "react"; 
import { createUser } from "../../utils";

export const LogorSign = ({setter}) => { 
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitHandler = (e) => { 
        e.preventDefault();
        createUser(username, email,password, setter);
    }

    return(
        <form onSubmit={submitHandler}>
            <input onChange={(e)=> setUserName(e.target.value)}></input>
            <input onChange={(e)=> setEmail(e.target.value)}></input>
            <input onChange={(e)=> setPassword(e.target.value)}></input>
            <button type="submit">Submit</button>
        </form>
    )
}