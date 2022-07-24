import React, { Component } from 'react';
import {
    Box,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer
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
                  <TableContainer>
                    <Table variant='simple' align='center'>
                      <Thead></Thead>
                      <Tbody>
                        <Td>
                          <Tr>Γεύμα κυρίως: </Tr>
                          <Tr>Γεύμα ειδικό: </Tr>
                          <Tr>Γεύμα γαρνιτούρα: </Tr>
                          <Tr>Γεύμα σαλάτα: </Tr>
                          <Tr>Γεύμα επιδόρπιο: </Tr>
                          <Tr>Δείπνο κυρίως: </Tr>
                          <Tr>Δείπνο ειδικό: </Tr>
                          <Tr>Δείπνο γαρνιτούρα: </Tr>
                          <Tr>Δείπνο σαλάτα: </Tr>
                          <Tr>Δείπνο επιδόρπιο: </Tr>
                        </Td>
                        <Td>
                          <Tr>{this.props.gevmakirios}</Tr>
                          <Tr>{this.props.gevmaEidiko} </Tr>
                          <Tr>{this.props.gevmaGarnitoura} </Tr>
                          <Tr>{this.props.gevmaSalata} </Tr>
                          <Tr>{this.props.gevmaEpidorpio} </Tr>
                          <Tr>{this.props.deipnoKirios} </Tr>
                          <Tr>{this.props.deipnoEidiko} </Tr>
                          <Tr>{this.props.deipnoGarnitoura} </Tr>
                          <Tr>{this.props.deipnoSalata} </Tr>
                          <Tr>{this.props.deipnoEpidorpio}</Tr>
                        </Td>
                      </Tbody>
                      <Tfoot></Tfoot>
                    </Table>
                  </TableContainer>
                </AccordionPanel>
              </AccordionItem>
            </>
          </div>

        );
    }
}
 
export default Menu;