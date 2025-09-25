import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { Flex, Text } from "@radix-ui/themes";

const TabsMenu = [
  {
    value: "tab1",
    label: "profile",
    content: <>hi its profile page</>,
  },
  {
    value: "tab2",
    label: "notification",
    content: <>hi its notification page</>,
  },
];

const AccessibleTabsExample: React.FC = () => {
  return (
    <Tabs.Root>
      <Tabs.List>
        <Flex direction={"row"} gap={"2"}>
          {TabsMenu.map((tab) => (
            <Tabs.Trigger key={tab.value} value={tab.value}>
              <Text className="text-2xl">{tab.label.toUpperCase()}</Text>
            </Tabs.Trigger>
          ))}
        </Flex>
      </Tabs.List>
      {TabsMenu.map((tab) => (
        <Tabs.Content key={tab.value} value={tab.value}>
          {tab.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default AccessibleTabsExample;
