import {
  Avatar,
  Container,
  Heading,
  HStack,
  Link,
  Spacer,
} from '@chakra-ui/react';
import {Link as NavigationLink} from 'gatsby';
import React, {FC} from 'react';

const siteName = 'bianchiluca.com';

const Header: FC = () => {
  return (
    <>
      <Container maxWidth="100%">
        <HStack spacing={4} align="center">
          <Avatar></Avatar>
          <Heading color="primary">{siteName}</Heading>
          <Spacer />

          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/about">About</NavigationLink>
        </HStack>
      </Container>
    </>
  );
};

export default Header;
