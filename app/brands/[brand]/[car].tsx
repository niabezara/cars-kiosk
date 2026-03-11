import BackButton from "@/components/ui/BackButton";
import Car360 from "@/components/ui/Car360";
import { carData } from "@/data/dummyData";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function CarDetailScreen() {
  const { brand, car } = useLocalSearchParams();

  const selectedBrand = carData.find(
    (b) => b.brand.toLowerCase() === (brand as string).toLowerCase(),
  );

  const selectedCar = selectedBrand?.cars.find(
    (c) => c.name.toLowerCase() === (car as string).toLowerCase(),
  );
  const images = selectedCar?.images360 || [];
  console.log("Selected Car:", selectedCar?.images360); // Debugging log
  return (
    <View>
      <Text>Brand: {brand}</Text>
      <Text>Model: {car}</Text>

      {/* now this works */}
      <Car360 images={images} />

      <BackButton />
    </View>
  );
}
