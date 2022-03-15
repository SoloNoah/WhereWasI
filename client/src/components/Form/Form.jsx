import React from 'react';
import { Link } from 'react-router-dom';
import { FormControl, Input, InputLabel, Button } from '@mui/material';

const Form = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onClick();
  };

  return (
    <div className='form'>
      <span className='form-header'>
        <h1>{props.title}</h1>

        <h4>{props.subTitle}</h4>
      </span>

      <FormControl>
        <InputLabel htmlFor={props.inputTop.toString().toLowerCase()}>{props.inputTop}</InputLabel>
        <Input id={props.inputTop.toString().toLowerCase()} required={true} className='input' onChange={(e) => props.setTop(e.target.value)} />
      </FormControl>
      <FormControl>
        <InputLabel className='inputLabel' htmlFor={props.inputBot.toString().toLowerCase()}>
          {props.inputBot}
        </InputLabel>
        <Input id={props.inputBot.toString().toLowerCase()} required={true} className='input' type={props.botType} onChange={(e) => props.setBottom(e.target.value)} />
      </FormControl>
      <Button variant='contained' color='primary' style={{ marginBottom: '1em' }} type='submit' onClick={handleSubmit} className='submit'>
        Submit
      </Button>
      <Link to={props.next} style={{ textDecoration: 'none' }}>
        <p className='form-link'>{props.next}</p>
      </Link>
    </div>
  );
};

export default Form;
