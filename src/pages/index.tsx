import {Container, Heading} from '@chakra-ui/react';
import * as React from 'react';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';

const IndexPage = () => {
  return (
    <>
      <PageLayout>
        <Heading>Hello, world!</Heading>
      </PageLayout>
    </>
  );
};

export default IndexPage;
