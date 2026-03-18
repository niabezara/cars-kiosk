import { configStore } from "@/stores/configStore";
import { EngineConfig } from "@/types/types";
import React, { memo, useCallback } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
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
      style={[styles.card, isSelected && styles.cardSelected]}
    >
      <Text style={styles.label}>ძრავა</Text>
      <Text style={[styles.name, isSelected && styles.textSelected]}>
        {item.name}
      </Text>

      <View style={styles.row}>
        <View style={styles.spec}>
          <Text style={styles.specLabel}>სიმძლავრე</Text>
          <Text style={[styles.specValue, isSelected && styles.textSelected]}>
            {item.horsepower} ცხ / {item.horsepowerKw} kW
          </Text>
        </View>
        <View style={styles.spec}>
          <Text style={styles.specLabel}>მაბრუნი მომენტი</Text>
          <Text style={[styles.specValue, isSelected && styles.textSelected]}>
            {item.torque} Nm
          </Text>
        </View>
      </View>

      <Text style={styles.specLabel}>გადაცემათა კოლოფი</Text>
      <Text style={[styles.specValue, isSelected && styles.textSelected]}>
        {item.transmission}
      </Text>

      <Text style={styles.specLabel}>საშუალო წვა</Text>
      <Text style={[styles.specValue, isSelected && styles.textSelected]}>
        {item.fuelConsumption}
      </Text>
    </Pressable>
  );
};

export default memo(EngineItem);

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 10,
    borderRadius: 12,
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: "#e8e8e8",
  },
  cardSelected: {
    borderColor: "#E53935",
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 12,
    color: "#999",
    marginBottom: 2,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 12,
  },
  textSelected: {
    color: "#1a1a1a",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  spec: {
    flex: 1,
  },
  specLabel: {
    fontSize: 11,
    color: "#999",
    marginBottom: 2,
    marginTop: 4,
  },
  specValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
});
