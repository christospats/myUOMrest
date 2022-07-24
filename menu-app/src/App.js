import React from 'react';
import Menu from './Menu';
import data from './convertcsv (1).json';
import { Accordion, Box,
         Button,
         ButtonGroup
} from '@chakra-ui/react';
import Schedule from './Schedule';

function App() {
  return (
    <Box bg='white' textAlign={'center'} borderStyle='solid' p={4} >
      <Accordion allowToggle>
      <h1>Menu Εστιατορίου</h1>
      {
        data.map(data => {
          return(
            <div>
              <Menu day={data.day}
                    gevmakirios={data.gevmaKirios}
                    gevmaEidiko={data.gevmaEidiko}
                    gevmaGarnitoura={data.gevmaGarnitoura}
                    gevmaSalata={data.gevmaSalata}
                    gevmaEpidorpio={data.gevmaEpidorpio}
                    deipnoKirios={data.deipnoKirios}
                    deipnoEidiko={data.deipnoEidiko}
                    deipnoGarnitoura={data.deipnoGarnitoura}
                    deipnoSalata={data.deipnoSalata}
                    deipnoEpidorpio={data.deipnoEpidorpio}/>
            </div>
          )
        })
      }
      <Schedule />
      </Accordion>
      <ButtonGroup colorScheme='pink' variant='solid' spacing='6'>
        <Button>Back</Button>
      </ButtonGroup>
    </Box>
    
  );
}

export default App;
