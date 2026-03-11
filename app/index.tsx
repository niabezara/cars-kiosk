// /app/index.tsx
import Card from "@/components/ui/Card";
import { carData } from "@/data/dummyData";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 18, marginBottom: 16 }}>
        აირჩიეთ თქვენთვის სასურველი ბრენდი
      </Text>

      <View>
        {carData.map((brand) => (
          <Card
            key={brand.brand}
            type="brand"
            name={brand.brand}
            onPress={() => router.push(`/brands/${brand.brand}`)} // Navigate to brands
          />
        ))}
      </View>

      <Text style={{ marginTop: 24 }}>2026 ავტომობილების კატალოგი</Text>
    </SafeAreaView>
  );
}
