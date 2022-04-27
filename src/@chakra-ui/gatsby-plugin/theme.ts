import {extendTheme} from '@chakra-ui/react';

const Heading = {

  baseStyle: {
    color: 'gray',
  },
};

const theme = {
  colors: {
    primary: 'rebeccapurple',
  },
  components: {
    Heading,
  },
};

export default extendTheme(theme);
