import { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  GridItem,
  Input,
  Field,
  Spinner,
  Flex,
} from '@chakra-ui/react';

import { Community } from './types';
import { SearchCommunitiesFilter, CommunityCard } from './components';

import { PageHeader } from '../../components';

import mockCommunityResults from './data/mockCommunityResults.json';

export function SearchCommunities() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const communityResults: Community[] = mockCommunityResults.channels;

  /**
   * MOCK: Debounce the search query to simulate a real API call
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
      // Simulate an API call or data fetching here
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Simulate a 1-second delay
    }, 500); // Debounce delay of 500ms

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <Box p={4}>
      <PageHeader.Root>
        <PageHeader.Title>Search Communities</PageHeader.Title>
        <PageHeader.Actions>
          <Field.Root>
            <Field.Label srOnly>Search</Field.Label>
            <Input
              placeholder="Search for a community"
              w={{
                base: '100%',
                md: '250px',
              }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Field.Root>
          <SearchCommunitiesFilter />
        </PageHeader.Actions>
      </PageHeader.Root>

      {isLoading && (
        <Flex justifyContent="center" alignItems="center" h="100%">
          <Spinner size="xl" />
        </Flex>
      )}

      {!isLoading && (
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(3, 1fr)',
          }}
          gap={4}
          mt={8}
        >
          {communityResults.map((community) => (
            <GridItem key={community.id}>
              <CommunityCard community={community} />
            </GridItem>
          ))}
        </Grid>
      )}
    </Box>
  );
}
