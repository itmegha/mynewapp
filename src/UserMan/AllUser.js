import { useState } from "react";
import Singleu from "./Singleu";

function AllUser(){

    const [users,setUser] =useState([
{ id: 1, name: "Alice Johnson", email: "alice@example.com", phone: "555-1234", address: "123 Main St" },
{ id: 2, name: "Bob Smith", email: "bob@example.com", phone: "555-5678", address: "456 Elm St" },
{ id: 3, name: "Charlie Brown", email: "charlie@example.com", phone: "555-9101", address: "789 Oak St" }
]);

    const setUser1 = (id)=>{
       const updatedData = users.filter(item => item.id !== id);
       setUser(updatedData);
    }
    return(
        <>
           <Singleu user = {users} setUser2 =  {setUser1}/>
        </>
    )
}
export default AllUser;