import React from 'react'
import Tourcards from '../Components/Tourcards';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import cities from '../data.json';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <div className="App">
      <Container sx={{marginY:5}}>
        {cities.map((city)=>(
         <>
          <Typography
          variant="h4"
          component="h2"
          marginTop={5}
          marginBottom={3}>{city.name}Tours</Typography>
        <Grid container spacing={5}>
          {city.tours.map((tour,index) => (<Tourcards tour={tour} key={index}/>))}
     

        </Grid></>
        ))}
       
        
      </Container>
    </div>
  )
}

export default Home
