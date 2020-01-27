import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      width: 200,
    },
  },
}));

export default function TextInputCmp(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField value={props.value} name={props.name} onChange={props.onChange}  label={props.label} />
    </form>
  );
}