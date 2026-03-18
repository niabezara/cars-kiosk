import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CardProps {
  type: "brand" | "car";
  name: string;
  price?: number;
  logo?: string;
  image?: any;
  tag?: string;
  onPress?: () => void;
}

export default function Card({
  type,
  name,
  price,
  logo,
  image,
  tag,
  onPress,
}: CardProps) {
  if (type === "brand") {
    return (
      <TouchableOpacity style={styles.brandCard} onPress={onPress}>
        {logo ? (
          <Image
            source={{ uri: logo }}
            style={styles.brandLogo}
            resizeMode="contain"
          />
        ) : null}
        <Text style={styles.brandName}>{name}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={styles.carCard} onPress={onPress}>
      <View style={styles.carHeader}>
        <Text style={styles.carName}>{name}</Text>
        {tag ? <Text style={styles.tag}>{tag}</Text> : null}
      </View>
      {image ? (
        <Image source={image} style={styles.carImage} resizeMode="contain" />
      ) : null}
      {price !== undefined && (
        <Text style={styles.price}>
          საწყისი ფასი {price.toLocaleString()} ₾
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  brandCard: {
    width: "48%",
    backgroundColor: "#f5f5f5",
    borderRadius: 14,
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 120,
  },
  brandLogo: {
    width: 80,
    height: 50,
    marginBottom: 8,
  },
  brandName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  carCard: {
    width: "48%",
    backgroundColor: "#f5f5f5",
    borderRadius: 14,
    padding: 14,
    minHeight: 160,
  },
  carHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 8,
  },
  carName: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1a1a1a",
  },
  tag: {
    fontSize: 12,
    fontWeight: "700",
    color: "#00BCD4",
  },
  carImage: {
    width: "100%",
    height: 90,
    marginBottom: 8,
  },
  price: {
    fontSize: 13,
    color: "#555",
    fontWeight: "500",
  },
});
