import { AppShell } from '@mantine/core';
import { MantineProvider } from '@mantine/core';

import LoginForm from "./LoginForm";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell padding={0}>
        <LoginForm></LoginForm>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
