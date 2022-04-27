import {Container, Heading, Text} from '@chakra-ui/react';
import {Link, StaticQueryDocument} from 'gatsby';
import React, {FC} from 'react';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';
import {graphql} from 'gatsby';

const Blog: FC<{data: any}> = ({data}) => {
  return (
    <>
      <PageLayout pageTitle="Blog">
        <Heading>Blog</Heading>
        <Text>Posts here</Text>
        <ul>
          {data.allFile.nodes.map((node: {name: string}) => (
            <li key={node.name}>
              <Link to={`/blog/${node.name}`}>{node.name}</Link>
            </li>
          ))}
        </ul>
      </PageLayout>
    </>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default Blog;
