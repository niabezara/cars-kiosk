import { configStore } from "@/stores/configStore";
import { EngineConfig } from "@/types/types";
import React, { memo, useCallback } from "react";
import { Pressable, Text } from "react-native";
import { useStore } from "zustand";

type EngineItemProps = {
  item: EngineConfig;
};

const EngineItem: React.FC<EngineItemProps> = ({ item }) => {
  const isSelected = useStore(
    configStore,
    (state) => state.selectedEngine?.id === item.id,
  );
  const setEngine = useStore(configStore, (state) => state.setEngine);

  const handlePress = useCallback(() => setEngine(item), [item, setEngine]);

  return (
    <Pressable
      onPress={handlePress}
      style={{
        padding: 16,
        marginBottom: 10,
        borderRadius: 12,
        backgroundColor: isSelected ? "#000" : "#fff",
      }}
    >
      <Text style={{ color: isSelected ? "#fff" : "#000" }}>{item.name}</Text>
    </Pressable>
  );
};

export default memo(EngineItem);
