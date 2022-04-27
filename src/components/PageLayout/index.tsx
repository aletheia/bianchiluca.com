import {
  Avatar,
  Container,
  Heading,
  HStack,
  Link,
  Spacer,
  VStack,
} from '@chakra-ui/react';
import {Link as NavigationLink} from 'gatsby';
import React, {FC} from 'react';
import Header from '../Header';

const PageLayout: FC = (props) => {
  return (
    <>
      <Container maxWidth="100%" padding={12}>
        <VStack spacing={8}>
          <Header />
          <Container maxWidth="100%">{props.children}</Container>
        </VStack>
      </Container>
    </>
  );
};

export default PageLayout;
