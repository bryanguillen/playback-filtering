import { Button, Card, Image } from '@chakra-ui/react';

import { Community } from '../types';

interface CommunityCardProps {
  community: Community;
}

export function CommunityCard({ community }: CommunityCardProps) {
  return (
    <Card.Root overflow="hidden">
      <Image src={community.image} alt={community.description} />
      <Card.Body>
        <Card.Title>{community.name}</Card.Title>
        <Card.Description>{community.description}</Card.Description>
      </Card.Body>
      <Card.Footer>
        <Button
          variant="solid"
          onClick={() => console.log('Visit Community: ', community.id)}
        >
          Visit Community
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}
