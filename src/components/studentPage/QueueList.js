import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));

const users=['John','Jane', 'Joe', 'Jesus']

const QueueList = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6}>
        <Paper style={{height: '500px', overflowY:'scroll'}}>
          <div className={classes.demo}>
            <List>
            {users.map(list=>(
                <ListItem>
                  
                  <ListItemText
                    primary={list}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
            ))}          
            </List>
          </div>
        </Paper>
        </Grid>
    )
}

export default QueueList

