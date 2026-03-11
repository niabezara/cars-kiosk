import { StyleSheet, View } from "react-native";

interface Props {
  children: React.ReactNode;
}

export default function GridItem({ children }: Props) {
  return <View style={styles.item}>{children}</View>;
}

const styles = StyleSheet.create({
  item: {
    width: "48%",
  },
});
