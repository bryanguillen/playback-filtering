import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <div>
        <h1>Playback Filtering</h1>
      </div>
    </ChakraProvider>
  );
}

export default App;
