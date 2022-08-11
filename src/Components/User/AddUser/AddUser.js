import React, { useState } from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import ErrorModel from "../../UI/ErrorModel/ErrorModel";
import classes from "./AddUser.module.css";

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error,setError]=useState()

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title:"Invalid Input",
        message:"Please Enter Valid Value(non-empty Values)"
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title:"Age is not Valid",
        message:"please enter valid age(greater than 0)"
      })
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    console.log(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };
  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  const errorHandler=()=>{
    setError(null);
  }
  return (
    <div>
      {error && <ErrorModel title={error.title} message={error.message} onError={errorHandler}  />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
            max="100"
            
          />
          <Button type="submit">Add-User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
