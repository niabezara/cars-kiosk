import React from "react";
import { StyleSheet, View } from "react-native";

const Grid = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles.container}>{children}</View>;
};

const Column = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles.column}>{children}</View>;
};

Grid.Column = Column;

export default Grid;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 16,
  },
  column: {
    flex: 1,
  },
});
