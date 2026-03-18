import BackButton from "@/components/navigation/BackButton";
import Card from "@/components/ui/Card";
import { carData } from "@/data/dummyData";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function BrandScreen() {
  const { brand } = useLocalSearchParams();
  const router = useRouter();

  const selectedBrand = carData.find(
    (b) => b.id === (brand as string),
  );

  const cars = selectedBrand?.cars ?? [];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Brand Logo */}
        {selectedBrand?.logo && (
          <View style={styles.header}>
            <Image
              source={{ uri: selectedBrand.logo }}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.brandName}>{selectedBrand.brand}</Text>
          </View>
        )}

        <Text style={styles.title}>2026 წლის სამოდელო რიგი</Text>
        <View style={styles.divider} />

        <View style={styles.grid}>
          {cars.map((car) => (
            <Card
              key={car.name}
              type="car"
              name={car.name}
              price={car.grades[0].fullPrice}
              image={typeof car.image === "string" ? undefined : car.image}
              tag={
                car.engines.some((e) => e.fuel === "Hybrid") ? "HYBRID" : undefined
              }
              onPress={() => router.push(`/brands/${brand}/${car.id}`)}
            />
          ))}
        </View>
      </ScrollView>

      <BackButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scroll: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 80,
  },
  header: {
    alignItems: "center",
    marginBottom: 16,
  },
  logo: {
    width: 80,
    height: 80,
  },
  brandName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    textTransform: "uppercase",
    letterSpacing: 2,
    marginTop: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#555",
    textAlign: "center",
    marginBottom: 12,
  },
  divider: {
    width: 50,
    height: 3,
    backgroundColor: "#E53935",
    alignSelf: "center",
    marginBottom: 24,
    borderRadius: 2,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },
});
