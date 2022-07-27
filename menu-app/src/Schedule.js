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
                <AccordionButton _hover={{ bg: "rgb(20, 88, 148)" }}
                    margin="0 auto"
                    padding="8px"
                    width="80vw"
                    textAlign="center"
                    marginBottom="0.3em"
                    bgColor="rgb(20, 88, 148)"
                    color="rgb(252, 180, 12)"
                    borderRadius="20"
                    border="none"
                    alt="profPic"
                    overflow="hidden"
                    _expanded={{ bg: "rgb(24, 107, 180)", color: "rgb(227, 160, 2)"}}
                >
                    <Box flex='1' textAlign='center' fontSize='25px'>
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