import {Container, Heading, Text} from '@chakra-ui/react';
import {Link} from 'gatsby';
import React, {FC} from 'react';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';

const AboutPage: FC = () => {
  return (
    <>
      <PageLayout pageTitle="About Me">
        <Heading>About me</Heading>
        <Text>
          Aenean condimentum vehicula sagittis. Aenean commodo purus eget
          pretium vehicula. Aliquam sollicitudin quis enim et sollicitudin. Nam
          congue metus eget nisl ornare pulvinar. Nullam scelerisque non erat
          sed tincidunt. Nunc turpis risus, ultricies nec maximus ac, facilisis
          non felis. Donec laoreet congue fermentum. Cras commodo lacus erat, ut
          fringilla enim accumsan id. Duis volutpat magna justo, venenatis
          vulputate libero pretium vitae. Nulla erat tortor, laoreet nec elit
          ut, varius mollis eros. Maecenas sagittis molestie mollis. Proin
          feugiat fermentum tristique. Etiam auctor orci dapibus leo tempor, vel
          pharetra urna faucibus. Praesent iaculis non ante sed interdum. Sed
          consequat magna massa, nec blandit libero porttitor nec.
        </Text>
      </PageLayout>
    </>
  );
};

export default AboutPage;
