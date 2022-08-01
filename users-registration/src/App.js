import React, {useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";


function App() {

    const [users, setUsers] = useState([]);

    const onAddedUserHandler = (user) => {
        setUsers([user, ...users]);
    };

    return (
        <div>
            <AddUser onAddedUser={onAddedUserHandler}/>
            <UserList users={users}/>
        </div>
    );
}

export default App;
