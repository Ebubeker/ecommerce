import React from 'react';
import { Box, SearchBox, Input, Categories, SectionName, ItemList, Title } from './FilterStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCaretRight } from '@fortawesome/free-solid-svg-icons'

const Filter = () => {
  return (
    <Box className='otherStyle'>
      <Title>Search & Categories</Title>
      <SearchBox>
        <Input placeholder="Search..." type="text"/>
        <FontAwesomeIcon style={{fontSize: '17px', marginLeft: '10px', cursor: 'pointer'}} icon={faMagnifyingGlass}/>
      </SearchBox>
      <Categories>
        <SectionName>Section Categories</SectionName>
        <ItemList><FontAwesomeIcon icon={faCaretRight}/> Patek Philippe</ItemList>
        <ItemList><FontAwesomeIcon icon={faCaretRight}/> Vacheron Constantin</ItemList>
        <ItemList><FontAwesomeIcon icon={faCaretRight}/> Audemars Piguet</ItemList>
        <ItemList><FontAwesomeIcon icon={faCaretRight}/> Blancpain</ItemList>
        <ItemList><FontAwesomeIcon icon={faCaretRight}/> Ulysse Nardin</ItemList>
        <ItemList><FontAwesomeIcon icon={faCaretRight}/> Jaeger-LeCoultre</ItemList>
        <ItemList><FontAwesomeIcon icon={faCaretRight}/> Omega</ItemList>
        <ItemList><FontAwesomeIcon icon={faCaretRight}/> Glashutte Original</ItemList>
        <ItemList><FontAwesomeIcon icon={faCaretRight}/> Rolex</ItemList>
        <ItemList><FontAwesomeIcon icon={faCaretRight}/> Jaquet Droz</ItemList>
      </Categories>
    </Box>
  )
}

export default Filter