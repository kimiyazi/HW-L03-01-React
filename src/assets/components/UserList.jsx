export const UserList = ({users}) => {
  return (
    users.map((user)=>{
        return(
            <>
                <p>Name : {user.name}</p>
                <p>Age: {user.age}</p>
                <p>City: {user.city}</p>
            </>
        )    
    })
  )

};

export default UserList;