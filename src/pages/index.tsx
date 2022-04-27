import {Container, Heading, Text} from '@chakra-ui/react';
import * as React from 'react';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';

const IndexPage = () => {
  return (
    <>
      <PageLayout pageTitle="Home">
        <Heading>Hello, world!</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu
          sapien fringilla, tincidunt tortor vitae, ultricies nibh. Praesent
          consectetur, arcu quis auctor venenatis, mi ligula porta magna, ut
          consequat erat dolor vel mi. Integer sit amet odio at leo elementum
          malesuada et vitae leo. Donec cursus lacus eget dolor aliquet, eget
          placerat purus gravida. Nunc est lacus, condimentum ut mi id,
          malesuada aliquet dui. Duis tristique ante fringilla, aliquam urna in,
          blandit nisi. Quisque nunc enim, accumsan at mauris ornare, gravida
          varius ante. Pellentesque tincidunt ligula velit, in euismod sem
          vestibulum ut. Vestibulum maximus metus non porta consectetur. Etiam
          placerat tincidunt nibh id convallis. Maecenas at facilisis metus.
          Vivamus id feugiat tellus, sed varius nisi.
        </Text>
      </PageLayout>
    </>
  );
};

export default IndexPage;
