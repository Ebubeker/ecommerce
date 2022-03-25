import React from 'react';
import {Box, OneCategory, CategoryImg,CategoryName, TwoCategory, SingleCat, FourCategory, FourSingleCat, CategoryNameTwo } from './CategoriesStyled';
import { Container } from '@mui/material';


const Categories = () => {
  return (
    <Box className='otherStyle'>
        <Container maxWidth="xl">
            <OneCategory>
                <CategoryImg src="https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"/>
                <CategoryName>Watches For Women</CategoryName>
            </OneCategory>
            <TwoCategory>
                <SingleCat>
                    <CategoryImg src="https://images.unsplash.com/photo-1570943991418-ffa08d952b16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/>
                    <CategoryName>Diamond Watch</CategoryName>
                </SingleCat>
                <SingleCat>
                    <CategoryImg src="https://images.unsplash.com/photo-1612771409641-b0478cab8b69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/>
                    <CategoryName>Clean Watches</CategoryName>
                </SingleCat>
            </TwoCategory>
            <FourCategory>
                <FourSingleCat>
                    <CategoryImg src="https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/>
                    <CategoryNameTwo>Men Watches</CategoryNameTwo>
                </FourSingleCat>
                <FourSingleCat>
                    <CategoryImg src="https://images.unsplash.com/photo-1618828272323-9f46e858e55e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"/>
                    <CategoryNameTwo>Rose Gold Watches</CategoryNameTwo>
                </FourSingleCat>
                <FourSingleCat>
                    <CategoryImg src="https://images.unsplash.com/photo-1617714651073-17a0fcd14f9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"/>
                    <CategoryNameTwo>Silver Watches</CategoryNameTwo>
                </FourSingleCat>
                <FourSingleCat>
                    <CategoryImg src="https://images.unsplash.com/photo-1515090916855-28e4d1a230ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"/>
                    <CategoryNameTwo>Titanium Watches</CategoryNameTwo>
                </FourSingleCat>
            </FourCategory>
        </Container>
    </Box>
  )
}

export default Categories