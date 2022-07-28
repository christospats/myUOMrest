import React from 'react';
import Menu from './Menu';
import data from './convertcsv (1).json';
import { Accordion, 
         Box,
         Image,
         Text
} from '@chakra-ui/react';
import Schedule from './Schedule';
import dinner from './Assets/dinner.png'

function App() {
  return (
    <Box bg='white' textAlign={'center'}>
      <Accordion allowToggle>
        <Box align='center'>
          <Text fontSize='30px' fontWeight='bold' fontFamily='cursive'>Menu Εστιατορίου</Text>
          <Image src={dinner} 
            width="70px"
            height="70px"
            borderRadius="full"   
          />
        </Box>
        {
          data.map(data => {
            return(
                <Menu data={data} key={data.day}/>
            )
          })
        }
        <Schedule/>
      </Accordion>
    </Box>
    
  );
}

export default App;
