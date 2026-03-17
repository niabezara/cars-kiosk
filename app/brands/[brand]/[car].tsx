import Car360Viewer from "@/components/car/Car360";
import Configuration from "@/components/car/Configuration";
import Price from "@/components/car/Price";
import BackButton from "@/components/navigation/BackButton";
import Grid from "@/components/ui/Grid";
import { carData } from "@/data/dummyData";
import { configStore } from "@/stores/configStore";
import { resolve360Images } from "@/utils/imageMap";
import { router, useLocalSearchParams } from "expo-router";
import { Button, Image, ScrollView, Text, View } from "react-native";
import { useStore } from "zustand/react";

export default function CarDetailScreen() {
  const { brand, car } = useLocalSearchParams();

  const selectedBrand = carData.find((b) => b.id === (brand as string));

  const selectedCar = selectedBrand?.cars.find((c) => c.id === (car as string));
  const selectedGrade = useStore(configStore, (state) => state.selectedGrade);
  if (!selectedCar || !selectedBrand) {
    return (
      <View>
        <Text>Car not found</Text>
        <BackButton />
      </View>
    );
  }

  return (
    <ScrollView>
      <Text>{selectedCar.name}</Text>

      {selectedCar.images360 ? (
        <Car360Viewer images={resolve360Images(selectedCar.images360)} />
      ) : (
        <View>
          <Image source={{ uri: selectedCar.image }} resizeMode="contain" />
          <Text>360° view coming soon</Text>
        </View>
      )}
      <Grid>
        <Configuration details={selectedCar.engines} />
        <Price data={selectedCar.grades} />
      </Grid>
      <Button
        title="Continue"
        disabled={!selectedGrade} // visually disabled when nothing selected
        onPress={() => {
          if (!selectedGrade) return;
          router.push(`/brands/${brand}/${car}/summary`);
        }}
      />
      <BackButton />
    </ScrollView>
  );
}
