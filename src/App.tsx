import { Flex, Text, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import AlertDialogExample from "./components/AlertDialogExample";
import AccessibleTabsExample from "./components/AccessibleTabsExample";

function App() {
  return (
    <Theme accentColor="violet" grayColor="sand" radius="large" scaling="95%">
      <Flex direction="column" gap="4">
        <Text className="text-2xl">Hello from Radix Themes :)</Text>
        <AlertDialogExample />
        <AccessibleTabsExample />
      </Flex>
    </Theme>
  );
}

export default App;
