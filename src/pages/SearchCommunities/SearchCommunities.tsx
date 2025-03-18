import { Box, Grid, GridItem, Input, Field } from '@chakra-ui/react';

import { Community } from './types';
import { SearchCommunitiesFilter, CommunityCard } from './components';

import { PageHeader } from '../../components';

import mockCommunityResults from './data/mockCommunityResults.json';

export function SearchCommunities() {
  const communityResults: Community[] = mockCommunityResults.channels;

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
            />
          </Field.Root>
          <SearchCommunitiesFilter />
        </PageHeader.Actions>
      </PageHeader.Root>

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
    </Box>
  );
}
