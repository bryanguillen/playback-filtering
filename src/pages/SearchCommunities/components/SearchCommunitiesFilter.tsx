import { useState } from 'react';
import {
  Button,
  Portal,
  CloseButton,
  Drawer,
  Field,
  RadioGroup,
  CheckboxGroup,
  Checkbox,
  Fieldset,
  VStack,
} from '@chakra-ui/react';

interface SearchCommunitiesFilterProps {
  onApply: () => void;
}

export function SearchCommunitiesFilter({
  onApply,
}: SearchCommunitiesFilterProps) {
  const [selectedSport, setSelectedSport] = useState<string | undefined>();
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  return (
    <Drawer.Root size="md">
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
              <VStack gap={4}>
                <Field.Root>
                  <Field.Label fontSize="md" mb={2}>
                    Sport
                  </Field.Label>
                  <RadioGroup.Root
                    value={selectedSport}
                    onValueChange={(e) => setSelectedSport(e.value)}
                  >
                    <VStack gap={2} alignItems="flex-start">
                      <RadioGroup.Item value="baseball">
                        <RadioGroup.ItemHiddenInput />
                        <RadioGroup.ItemIndicator />
                        <RadioGroup.ItemText>Baseball</RadioGroup.ItemText>
                      </RadioGroup.Item>
                      <RadioGroup.Item value="basketball">
                        <RadioGroup.ItemHiddenInput />
                        <RadioGroup.ItemIndicator />
                        <RadioGroup.ItemText>Basketball</RadioGroup.ItemText>
                      </RadioGroup.Item>
                      <RadioGroup.Item value="football">
                        <RadioGroup.ItemHiddenInput />
                        <RadioGroup.ItemIndicator />
                        <RadioGroup.ItemText>Football</RadioGroup.ItemText>
                      </RadioGroup.Item>
                      <RadioGroup.Item value="soccer">
                        <RadioGroup.ItemHiddenInput />
                        <RadioGroup.ItemIndicator />
                        <RadioGroup.ItemText>Soccer</RadioGroup.ItemText>
                      </RadioGroup.Item>
                    </VStack>
                  </RadioGroup.Root>
                </Field.Root>

                <Fieldset.Root>
                  <Fieldset.Legend fontSize="md" mb={2}>
                    Sizes
                  </Fieldset.Legend>
                  <CheckboxGroup
                    value={selectedSizes}
                    onValueChange={(values) => setSelectedSizes(values)}
                  >
                    <Checkbox.Root value="small">
                      <Checkbox.HiddenInput />
                      <Checkbox.Control />
                      <Checkbox.Label>Small</Checkbox.Label>
                    </Checkbox.Root>
                    <Checkbox.Root value="medium">
                      <Checkbox.HiddenInput />
                      <Checkbox.Control />
                      <Checkbox.Label>Medium</Checkbox.Label>
                    </Checkbox.Root>
                    <Checkbox.Root value="large">
                      <Checkbox.HiddenInput />
                      <Checkbox.Control />
                      <Checkbox.Label>Large</Checkbox.Label>
                    </Checkbox.Root>
                  </CheckboxGroup>
                </Fieldset.Root>
              </VStack>
            </Drawer.Body>

            <Drawer.Footer>
              <Drawer.Context>
                {({ setOpen }) => (
                  <Button
                    onClick={() => {
                      onApply();
                      setOpen(false);
                    }}
                  >
                    Apply
                  </Button>
                )}
              </Drawer.Context>
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
