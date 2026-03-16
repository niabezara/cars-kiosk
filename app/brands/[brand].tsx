// /app/brands/[brand].tsx
import BackButton from "@/components/navigation/BackButton";
import Card from "@/components/ui/Card";
import { carData } from "@/data/dummyData";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function BrandScreen() {
  const { brand } = useLocalSearchParams();
  const router = useRouter();

  // Find the selected brand
  const selectedBrand = carData.find(
    (b) => b.brand.toLowerCase() === (brand as string)?.toLowerCase(),
  );

  const cars = selectedBrand?.cars ?? [];

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 18, marginBottom: 16 }}>
        2026 წლის სამოდელო რიგი
      </Text>

      {cars.map((car) => (
        <Card
          key={car.name}
          type="car"
          name={car.name}
          price={car.price}
          onPress={() => router.push(`/brands/${brand}/${car.id}`)} // Navigate to car details
        />
      ))}

      <BackButton />
    </View>
  );
}
