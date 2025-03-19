import { useEffect, useState } from 'react';
import { Field, Input } from '@chakra-ui/react';

interface SearchCommunitiesInputProps {
  onSearch: () => void;
}

export function SearchCommunitiesInput({
  onSearch,
}: SearchCommunitiesInputProps) {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      // here we could pass in the searchQuery to call the API; but this is just a mock
      onSearch();
    }, 500); // Debounce delay of 500ms

    return () => clearTimeout(timer);
  }, [searchQuery, onSearch]);

  return (
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
  );
}
