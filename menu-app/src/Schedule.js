import React, { Component } from 'react';
import { Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon
} from '@chakra-ui/react';

class Schedule extends Component {
    state = {  } 
    render() { 
        return (
        <>
            <AccordionItem>
                <h2>
                <AccordionButton _expanded={{ bg: 'blue', color: 'yellow' }}>
                    <Box flex='1' textAlign='center' fontSize='large'>
                        Λειτουργία Εστιατορίου
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <h3>Πρωινό</h3>
                    08:00-09:30
                <h3>Μεσημεριανό</h3>
                12:30-15:30(ΚΑΘΗΜΕΡΙΝΕΣ)<br></br>
                13:00-15:30(ΣΚ και ΑΡΓΙΕΣ)
                <h3>Βραδινό</h3>
                18:00-20:00
                </AccordionPanel>
            </AccordionItem>
      </>
        );
    }
}
 
export default Schedule;