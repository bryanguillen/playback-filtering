import { Button, Portal, CloseButton, Drawer } from '@chakra-ui/react';

export function SearchCommunitiesFilter() {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button size="sm">Filter</Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Filter Communities</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <p>
                Here we would have some filters to choose from. Then, we would
                also have a save or apply button that could be used to apply the
                filters.
              </p>
            </Drawer.Body>
            <Drawer.Footer>
              <Button>Save</Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
