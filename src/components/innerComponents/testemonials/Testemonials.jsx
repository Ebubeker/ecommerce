import React from 'react';
import { Container } from '@mui/material';
import {Box, Title, TestemonialsBox, Content, Image, Testemony, Text, Author, ContentDescription} from './TestemonialsStyled';
import { Slide } from 'react-slideshow-image';

const Testemonials = () => {
  return (
    <Box className='otherStyle'>
        <Container maxWidth="xl">
            <TestemonialsBox>
                <Content>
                    <Title>- Testemonials -</Title>
                    <Slide style={{marginLeft: "20px", marginRight: "20px"}}>
                        <Testemony>
                            <Text>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias esse atque aliquam!"</Text>
                            <Author>- Ebubeker Rexha -</Author>
                        </Testemony>
                        <Testemony>
                            <Text>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias esse atque aliquam!"</Text>
                            <Author>- Ebubeker Rexha -</Author>
                        </Testemony>
                        <Testemony>
                            <Text>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias esse atque aliquam!"</Text>
                            <Author>- Ebubeker Rexha -</Author>
                        </Testemony>
                        <Testemony>
                            <Text>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias esse atque aliquam!"</Text>
                            <Author>- Ebubeker Rexha -</Author>
                        </Testemony>
                        <Testemony>
                            <Text>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias esse atque aliquam!"</Text>
                            <Author>- Ebubeker Rexha -</Author>
                        </Testemony>
                    </Slide>
                    <ContentDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae id nihil esse aperiam recusandae deserunt. Corporis hic blanditiis distinctio ducimus repudiandae! Et necessitatibus alias deleniti voluptatibus, optio laborum voluptas qui sint voluptates quos placeat veniam fugiat provident quasi eveniet cupiditate, delectus libero ad corrupti dolor, fuga pariatur fugit minus?
                    </ContentDescription>
                </Content>
                <Image src="https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="watch"/>
            </TestemonialsBox>
        </Container>
    </Box>
  )
}

export default Testemonials