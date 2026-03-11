// /components/ui/Card.tsx
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface CardProps {
  type: "brand" | "car";
  name: string;
  price?: number; // Only for car
  onPress?: () => void;
}

export default function Card({ type, name, price, onPress }: CardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{name}</Text>
      {type === "car" && price !== undefined && (
        <Text style={styles.price}>${price}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 12,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    marginTop: 4,
    fontSize: 14,
    color: "green",
  },
});
