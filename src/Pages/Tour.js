import React from 'react'
import { Typography } from '@mui/material'
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import ImageCollage from '../Components/ImageCollage';
import CustomizedAccordions from '../Components/Accordain';



const Tour = () => 
<Container sx={{width : 900}}>
    <Typography variant="h3" component="h1" marginTop={3}>
        Explore the world in Vegas
    </Typography>
    <Box marginTop={3} sx={{display : "flex"}}>
        <img src="https://media.istockphoto.com/photos/las-vegas-picture-id954500850?b=1&k=20&m=954500850&s=170667a&w=0&h=LdiSayYN68kDD0A_tgtB2ozbe3cIOTCRMjLb3z_8GY8=" alt="" height={300} />
        <ImageCollage />
    </Box>
    <Box>
    <Typography variant="h6" component="h4" marginTop={3}>
        About This Ticket
    </Typography>
    <Typography variant="para" component="p" marginTop={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam expedita molestias suscipit animi, autem ducimus deleniti dolore, impedit pariatur mollitia sunt possimus.
    </Typography>

    </Box>
    <Box>
    <Typography variant="h6" component="h4" marginTop={3}>
        Frequently asked the question
        </Typography>
        <CustomizedAccordions/>


    </Box>
    

</Container>
export default Tour
