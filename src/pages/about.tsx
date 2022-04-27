import {Container, Heading} from '@chakra-ui/react';
import {Link} from 'gatsby';
import React, {FC} from 'react';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';

const AboutPage: FC = () => {
  return (
    <>
      <PageLayout>
        <Heading>About me</Heading>
      </PageLayout>
    </>
  );
};

export default AboutPage;
