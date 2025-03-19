import { useState, useCallback } from 'react';
import { Box, Grid, GridItem, Spinner, Flex } from '@chakra-ui/react';

import { Community } from './types';
import {
  SearchCommunitiesFilter,
  CommunityCard,
  SearchCommunitiesInput,
} from './components';

import { PageHeader } from '../../components';

import mockCommunityResults from './data/mockCommunityResults.json';

export function SearchCommunities() {
  const [isLoading, setIsLoading] = useState(false);

  const communityResults: Community[] = mockCommunityResults.channels;

  // Mock API call to fetch communities
  const handleSearch = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate a 1-second delay
  }, []);

  return (
    <Box p={4}>
      <PageHeader.Root>
        <PageHeader.Title>Search Communities</PageHeader.Title>
        <PageHeader.Actions>
          <SearchCommunitiesInput onSearch={handleSearch} />
          <SearchCommunitiesFilter onApply={handleSearch} />
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
