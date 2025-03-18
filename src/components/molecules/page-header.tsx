/**
 * Component pattern for consistency with chakra
 */

import React from 'react';
import { Heading, Flex, HeadingProps, FlexProps } from '@chakra-ui/react';

interface RootProps {
  children: React.ReactNode;
}

function Root({ children }: RootProps) {
  return (
    <Flex
      justifyContent={{
        base: 'flex-start',
        md: 'space-between',
      }}
      alignItems={{
        base: 'flex-start',
        md: 'center',
      }}
      flexDirection={{
        base: 'column',
        md: 'row',
      }}
      gap={4}
    >
      {children}
    </Flex>
  );
}

// Define the Title component
function Title(props: HeadingProps) {
  return <Heading {...props} />;
}

function Actions(props: FlexProps) {
  return <Flex {...props} gap={4} alignItems="center" />;
}

// Define the PageHeader component as an object with nested components
const PageHeader = {
  Root,
  Title,
  Actions,
};

export { PageHeader };
