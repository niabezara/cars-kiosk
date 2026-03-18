import { configStore } from "@/stores/configStore";
import { Grade } from "@/types/types";
import React, { memo, useCallback } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
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
      style={[styles.card, isSelected && styles.cardSelected]}
    >
      <View style={styles.row}>
        <Text style={styles.gradeName}>{option.name}</Text>
        <View style={styles.priceBlock}>
          <Text style={styles.priceLabel}>სრული ღირებულება</Text>
          <Text style={styles.price}>
            {option.fullPrice.toLocaleString()} ₾
          </Text>
          <Text style={styles.leaseLabel}>FLEX LEASE TEGETA თვეში</Text>
          <Text style={styles.leasePrice}>
            {option.leaseFrom.toLocaleString()} ₾ - დან
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default memo(PriceItem);

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
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  gradeName: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1a1a1a",
    minWidth: 60,
  },
  priceBlock: {
    flex: 1,
  },
  priceLabel: {
    fontSize: 11,
    color: "#999",
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  leaseLabel: {
    fontSize: 10,
    fontWeight: "600",
    color: "#00BCD4",
  },
  leasePrice: {
    fontSize: 14,
    fontWeight: "700",
    color: "#00BCD4",
  },
});
