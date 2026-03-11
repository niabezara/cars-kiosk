import { StyleSheet, View } from "react-native";

interface Props {
  children: React.ReactNode;
}

export default function Grid({ children }: Props) {
  return <View style={styles.grid}>{children}</View>;
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
});
