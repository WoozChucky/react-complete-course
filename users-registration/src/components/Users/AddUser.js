import Card from "../UI/Card";

import style from './AddUser.module.css';
import Button from "../UI/Button";
import {useState} from "react";
import ErrorModal from "../UI/ErrorModal";

export default function AddUser(props) {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    function addUserHandler(event) {
        event.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0 || +age < 1) {
            setError({
                title: 'Invalid input',
                content: 'Please enter a valid name and age.'
            });
            return;
        }

        console.log(username + ' ' + age);
        setUsername('');
        setAge('');

        props.onAddedUser({
           name: username,
           age: age
        });
    }

    const usernameChangeHandler = (event) => {
        setUsername(prevState => {
            if (prevState !== event.target.value)
                return event.target.value;
            return prevState;
        })
    };

    const ageChangeHandler = (event) => {
        setAge(prevState => {
            if (prevState !== event.target.value)
                return event.target.value;
            return prevState;
        })
    };

    const onOkClickHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && <ErrorModal title={error.title} content={error.content} onOkayClick={onOkClickHandler} />}
            <Card className={style.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={username} onChange={usernameChangeHandler} />
                    <label htmlFor="age">Age (years)</label>
                    <input id="age" type="number" step="1" value={age} onChange={ageChangeHandler} />
                    <Button type='submit' onClick={() => {}}>Add User</Button>
                </form>
            </Card>
        </div>
    );

}