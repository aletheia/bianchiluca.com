import {
  Avatar,
  Container,
  Heading,
  HStack,
  Link,
  Spacer,
  VStack,
} from '@chakra-ui/react';
import {useStaticQuery, graphql} from 'gatsby';
import React, {FC} from 'react';
import {Helmet} from 'react-helmet';
import Header from '../Header';

interface LayoutProps {
  pageTitle: string;
  pageDescription?: string;
}

const PageLayout: FC<LayoutProps> = ({
  children,
  pageTitle,
  pageDescription,
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  const {title, author, description} = data.site.siteMetadata;
  const desc = pageDescription || description;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {pageTitle} | {title}
        </title>
        <meta name="description" content={desc} />
        <meta name="og:title" content={pageTitle} />
        <meta name="og:description" content={desc} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:author" content={author} />
      </Helmet>

      <Container maxWidth="100%" padding={12}>
        <VStack spacing={8}>
          <Header siteName={title} />
          <Container maxWidth="100%">{children}</Container>
        </VStack>
      </Container>
    </>
  );
};

export default PageLayout;
