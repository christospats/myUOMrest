import React, { Component } from 'react';
import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon
  } from '@chakra-ui/react';
  import { Button, ButtonGroup } from '@chakra-ui/react'

class Menu extends Component {
    state = {  } 
    render() { 
        return (
          <Box bg='white' textAlign={'center'} borderStyle='solid' p={4} >
            <h1>MENU Εστιατορίου</h1>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'blue', color: 'yellow' }}>
                    <Box flex='1' textAlign='center' fontSize='large'>
                      Δευτέρα
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'blue', color: 'yellow' }}>
                    <Box flex='1' textAlign='center' fontSize='large'>
                      Τρίτη
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'blue', color: 'yellow' }}>
                    <Box flex='1' textAlign='center' fontSize='large'>
                      Τετάρτη
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'blue', color: 'yellow' }}>
                    <Box flex='1' textAlign='center' fontSize='large'>
                      Πέμπτη
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'blue', color: 'yellow' }}>
                    <Box flex='1' textAlign='center' fontSize='large'>
                      Παρασκευή
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'blue', color: 'yellow' }}>
                    <Box flex='1' textAlign='center' fontSize='large'>
                      Σάββατο
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'blue', color: 'yellow' }}>
                    <Box flex='1' textAlign='center' fontSize='large'>
                      Κυριακή
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </AccordionPanel>
              </AccordionItem>
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
            </Accordion>
            <ButtonGroup colorScheme='pink' variant='solid' spacing='6'>
                 <Button>Back</Button>
            </ButtonGroup>
          </Box >

        );
    }
}
 
export default Menu;