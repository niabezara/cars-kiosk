import Card from "@/components/ui/Card";
import { carData } from "@/data/dummyData";
import { useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Logo */}
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_logo.svg/200px-Toyota_logo.svg.png",
            }}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.brandText}>TEGETA CARS</Text>
        </View>

        <Text style={styles.title}>აირჩიეთ თქვენი სასურველი ბრენდი</Text>
        <View style={styles.divider} />

        <View style={styles.grid}>
          {carData.map((brand) => (
            <Card
              key={brand.brand}
              type="brand"
              name={brand.brand}
              logo={brand.logo}
              onPress={() => router.push(`/brands/${brand.id}`)}
            />
          ))}
        </View>

        <Text style={styles.footer}>2026 ავტომობილების კატალოგი</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scroll: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  header: {
    alignItems: "center",
    marginTop: 24,
    marginBottom: 16,
  },
  logo: {
    width: 120,
    height: 60,
  },
  brandText: {
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 6,
    color: "#1a1a1a",
    marginTop: 8,
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
  footer: {
    textAlign: "center",
    fontSize: 14,
    color: "#999",
    marginTop: 32,
  },
});
