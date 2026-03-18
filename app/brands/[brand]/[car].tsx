import Car360Viewer from "@/components/car/Car360";
import Configuration from "@/components/car/Configuration";
import Price from "@/components/car/Price";
import BackButton from "@/components/navigation/BackButton";
import { carData } from "@/data/dummyData";
import { configStore } from "@/stores/configStore";
import { resolve360Images } from "@/utils/imageMap";
import { router, useLocalSearchParams } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useStore } from "zustand/react";

export default function CarDetailScreen() {
  const { brand, car } = useLocalSearchParams();

  const selectedBrand = carData.find((b) => b.id === (brand as string));
  const selectedCar = selectedBrand?.cars.find(
    (c) => c.id === (car as string),
  );
  const selectedGrade = useStore(configStore, (state) => state.selectedGrade);

  if (!selectedCar || !selectedBrand) {
    return (
      <View style={styles.notFound}>
        <Text>Car not found</Text>
        <BackButton />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Car Title */}
        <Text style={styles.carTitle}>
          {selectedBrand.brand.toUpperCase()} {selectedCar.name.toUpperCase()}
        </Text>

        {/* 360 Viewer or Static Image */}
        <View style={styles.imageArea}>
          {selectedCar.images360 ? (
            <Car360Viewer
              images={resolve360Images(selectedCar.images360)}
            />
          ) : (
            <View style={styles.staticImageWrap}>
              <Image
                source={
                  typeof selectedCar.image === "string"
                    ? { uri: selectedCar.image }
                    : selectedCar.image
                }
                style={styles.staticImage}
                resizeMode="contain"
              />
            </View>
          )}
        </View>

        {/* Color Dots */}
        {selectedCar.details.colors.length > 0 && (
          <View style={styles.colorRow}>
            {selectedCar.details.colors.map((color, i) => (
              <View
                key={i}
                style={[styles.colorDot, { backgroundColor: getColorHex(color) }]}
              />
            ))}
          </View>
        )}

        {/* Two Column: Specs + Prices */}
        <View style={styles.grid}>
          {/* Left: Engine Specs */}
          <View style={styles.column}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionIcon}>⚙️</Text>
              <Text style={styles.sectionTitle}>ტექნიკური მონაცემები</Text>
            </View>
            <Configuration details={selectedCar.engines} />
          </View>

          {/* Right: Grades & Prices */}
          <View style={styles.column}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionIcon}>🏷️</Text>
              <Text style={styles.sectionTitle}>გრეიდები და ფასები</Text>
            </View>
            <Price data={selectedCar.grades} />
          </View>
        </View>

        {/* Continue Button */}
        <TouchableOpacity
          style={[styles.continueBtn, !selectedGrade && styles.continueBtnDisabled]}
          disabled={!selectedGrade}
          onPress={() => {
            if (!selectedGrade) return;
            router.push(`/brands/${brand}/${car}/summary`);
          }}
        >
          <Text style={styles.continueBtnText}>გაგრძელება</Text>
        </TouchableOpacity>
      </ScrollView>

      <BackButton />
    </View>
  );
}

function getColorHex(name: string): string {
  const map: Record<string, string> = {
    White: "#f0f0f0",
    Black: "#1a1a1a",
    Silver: "#c0c0c0",
    "Dark Grey": "#444",
    Sand: "#d4b896",
    Grey: "#999",
    Red: "#cc2233",
    Blue: "#2255aa",
    "Sonic Grey": "#7a7d80",
    "Rallye Red": "#cc0000",
    "Lunar Silver": "#b0b3b5",
    "Crystal Black": "#111",
    "Alpine White": "#f5f5f5",
    "Black Sapphire": "#1c1c2e",
    "Portimao Blue": "#1e3a5f",
    "Melbourne Red": "#8b0000",
  };
  return map[name] || "#ccc";
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scroll: {
    paddingBottom: 80,
  },
  notFound: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  carTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#1a1a1a",
    paddingHorizontal: 20,
    paddingTop: 50,
    marginBottom: 8,
  },
  imageArea: {
    backgroundColor: "#2d2d2d",
    minHeight: 260,
    justifyContent: "center",
    alignItems: "center",
  },
  staticImageWrap: {
    width: "100%",
    height: 240,
    justifyContent: "center",
    alignItems: "center",
  },
  staticImage: {
    width: "90%",
    height: 220,
  },
  colorRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 16,
  },
  colorDot: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#e0e0e0",
  },
  grid: {
    flexDirection: "row",
    paddingHorizontal: 16,
    gap: 12,
  },
  column: {
    flex: 1,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 12,
    marginTop: 8,
  },
  sectionIcon: {
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#333",
  },
  continueBtn: {
    backgroundColor: "#2196F3",
    marginHorizontal: 20,
    marginTop: 24,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  continueBtnDisabled: {
    opacity: 0.4,
  },
  continueBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
