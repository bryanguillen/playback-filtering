import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

import { SearchCommunities } from './pages/SearchCommunities';

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <SearchCommunities />
    </ChakraProvider>
  );
}

export default App;
