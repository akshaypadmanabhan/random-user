import React from 'react'
import Button from '../Button'
import Card from '../Card'
import classes from "./ErrorModel.module.css"

function ErrorModel(props) {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onError}/>
      <Card className={classes.model}> 
    <header className={classes.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
      <p>{props.message}</p>
    </div>
    <footer className={classes.actions}>
      <Button onClick={props.onError}>Okay</Button>

    </footer>
   </Card>
    </div>
   
  )
}

export default ErrorModel
