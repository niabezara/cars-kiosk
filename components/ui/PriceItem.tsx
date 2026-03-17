import { configStore } from "@/stores/configStore";
import { Grade } from "@/types/types";
import React, { memo, useCallback } from "react";
import { Pressable, Text } from "react-native";
import { useStore } from "zustand";

type PriceItemProps = {
  option: Grade;
};

const PriceItem: React.FC<PriceItemProps> = ({ option }) => {
  const isSelected = useStore(
    configStore,
    (state) => state.selectedGrade?.id === option.id,
  );
  const setGrade = useStore(configStore, (state) => state.setGrade);

  const handlePress = useCallback(() => setGrade(option), [option, setGrade]);

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
      <Text style={{ color: isSelected ? "#fff" : "#000" }}>{option.name}</Text>
      <Text style={{ color: isSelected ? "#fff" : "#666" }}>
        ${option.fullPrice}
      </Text>
    </Pressable>
  );
};

export default memo(PriceItem);
