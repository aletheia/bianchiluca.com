import { Avatar, Container, Heading, HStack } from '@chakra-ui/react';
import React, { FC } from 'react';

const Header: FC = () => {
    return (
        <>
            <Container maxWidth="100%">
                <HStack spacing={4} align="center">
                    <Avatar ></Avatar>
                    <Heading color="primary">bianchiluca.com</Heading>
                </HStack>
            </Container>
        </>
    );
}

export default Header;