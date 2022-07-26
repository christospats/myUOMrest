import React, { Component } from 'react';
import {
    Box,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Accordion
  } from '@chakra-ui/react';

class Menu extends Component {
    state = {  } 
    render() { 
        return (
          <div>
            <>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'blue', color: 'yellow' }}>
                    <Box flex='1' textAlign='center' fontSize='large'>
                      {this.props.day}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>

                  <Accordion defaultIndex={[0]} allowToggle>
                    {/*Accordion gia geuma*/}
                    <AccordionItem>
                      <h2>
                        <AccordionButton _expanded={{ bg: 'blue', color: 'yellow' }}>
                          <Box flex='1' textAlign='center' fontSize='large'>
                          Γεύμα
                          </Box>
                        <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <div>
                          {this.props.gevmakirios}<br></br>
                          {this.props.gevmaEidiko}<br></br>
                          {this.props.gevmaGarnitoura}<br></br>
                          {this.props.gevmaSalata}<br></br>
                          {this.props.gevmaEpidorpio} 
                        </div>
                      </AccordionPanel>
                   </AccordionItem>
                    {/*Accordion gia deipno*/}
                   <AccordionItem>
                      <h2>
                        <AccordionButton _expanded={{ bg: 'blue', color: 'yellow' }}>
                          <Box flex='1' textAlign='center' fontSize='large'>
                          Δείπνο
                          </Box>
                        <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <div>
                          {this.props.deipnoKirios}<br></br>
                          {this.props.deipnoEidiko}<br></br>
                          {this.props.deipnoGarnitoura}<br></br>
                          {this.props.deipnoSalata}<br></br>
                          {this.props.deipnoEpidorpio} 
                        </div>
                      </AccordionPanel>
                   </AccordionItem>
                  </Accordion>

                </AccordionPanel>
              </AccordionItem>
            </>
          </div>

        );
    }
}
 
export default Menu;