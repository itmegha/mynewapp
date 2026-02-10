function Singleu(props){
    
    const user  = props.user;

    const deleteD = (id)=>{
      props.setUser2(id);
    }
    return(<>
       <table className="table table-bodered">
           <tr>
           <th>Keys</th>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ADDRESS</th>
            <th>ACTION</th>
           </tr>
           {
           user.map((u,ind)=>{
            return(
                <tr>
                    <td>key = {ind}</td>
                    <td>{u.id}</td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.address}</td>
                    <td>
                        <button
                        onClick={()=>deleteD(u.id)}
                        >delete</button>
                    </td>
                </tr>

            )
           })
           }
       </table>
    </>)
}
export default Singleu;