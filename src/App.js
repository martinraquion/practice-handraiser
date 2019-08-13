import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid'
import Header from './components/Header'
import Container from '@material-ui/core/Container'

// components
import QueueList from './components/studentPage/QueueList'
import BeingHelpedList from './components/studentPage/BeingHelpedList'


function App() {
  return (
   <React.Fragment>
   <Header />
   <Container maxWidth='lg' style={{marginTop:'30px'}}>
   <Grid container spacing={3}>
     <QueueList />
     <BeingHelpedList />
   </Grid>
   </Container>
   </React.Fragment>
  );
}

export default App;
