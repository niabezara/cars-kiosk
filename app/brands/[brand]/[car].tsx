import Car360Viewer from "@/components/car/Car360";
import BackButton from "@/components/navigation/BackButton";

import { carData } from "@/data/dummyData";
import { resolve360Images } from "@/utils/imageMap";
import { useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";

export default function CarDetailScreen() {
  const { brand, car } = useLocalSearchParams();

  const selectedBrand = carData.find((b) => b.id === (brand as string));

  const selectedCar = selectedBrand?.cars.find((c) => c.id === (car as string));

  if (!selectedCar || !selectedBrand) {
    return (
      <View>
        <Text>Car not found</Text>
        <BackButton />
      </View>
    );
  }

  return (
    <View>
      <Text>{selectedCar.name}</Text>

      {selectedCar.images360 ? (
        <Car360Viewer images={resolve360Images(selectedCar.images360)} />
      ) : (
        <View>
          <Image source={{ uri: selectedCar.image }} resizeMode="contain" />
          <Text>360° view coming soon</Text>
        </View>
      )}

      <BackButton />
    </View>
  );
}
