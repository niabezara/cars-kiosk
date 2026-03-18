import Contact from "@/components/Contact";
import BackButton from "@/components/navigation/BackButton";
import { carData } from "@/data/dummyData";
import { InquiryFormData, inquirySchema } from "@/schema/validation";
import { configStore } from "@/stores/configStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useStore } from "zustand";

export default function SummaryScreen() {
  const { brand, car } = useLocalSearchParams();
  const [loading, setLoading] = useState(false);

  const selectedGrade = useStore(configStore, (state) => state.selectedGrade);
  const selectedEngine = useStore(configStore, (state) => state.selectedEngine);

  const selectedBrand = carData.find((b) => b.id === (brand as string));
  const selectedCar = selectedBrand?.cars.find((c) => c.id === (car as string));

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: InquiryFormData) => {
    setLoading(true);
    try {
      const response = await fetch("", {
        //TODO
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          brand: selectedBrand?.brand,
          car: selectedCar?.name,
          grade: selectedGrade?.name,
          engine: selectedEngine?.name,
          price: selectedGrade?.fullPrice,
        }),
      });

      if (!response.ok) throw new Error("Failed to send");
      Alert.alert("Success");
    } catch {
      Alert.alert("Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <Text style={styles.heading}>
          შეიყვანეთ თქვენი მონაცემები და ჩვენ დაგიკავშირდებით
        </Text>
        <Text style={styles.subheading}>
          ნაჩვენები ფასი მხოლოდ სახელმძღვანელოა. დეტალებს თქვენი{" "}
          {selectedBrand?.brand}-ს დილერი დაგიდასტურებთ.
        </Text>

        {/* Car Image */}
        {selectedCar?.image && (
          <Image
            source={
              typeof selectedCar.image === "string"
                ? { uri: selectedCar.image }
                : selectedCar.image
            }
            style={styles.image}
            resizeMode="contain"
          />
        )}

        {/* Your Car Section */}
        <Text style={styles.sectionLabel}>
          თქვენი {selectedBrand?.brand}
        </Text>

        <View style={styles.configRow}>
          {/* Engine Info */}
          {selectedEngine && (
            <View style={styles.engineCard}>
              <Text style={styles.specLabel}>ძრავა</Text>
              <Text style={styles.specValue}>{selectedEngine.name}</Text>
              <Text style={styles.specLabel}>სიმძლავრე</Text>
              <Text style={styles.specValue}>
                {selectedEngine.horsepower} ცხ / {selectedEngine.horsepowerKw} kW
              </Text>
              <Text style={styles.specLabel}>გადაცემათა კოლოფი</Text>
              <Text style={styles.specValue}>{selectedEngine.transmission}</Text>
              <Text style={styles.specLabel}>საშუალო წვა</Text>
              <Text style={styles.specValue}>
                {selectedEngine.fuelConsumption}
              </Text>
            </View>
          )}

          {/* Grade/Price Info */}
          {selectedGrade && (
            <View style={styles.gradeCard}>
              <Text style={styles.gradeName}>{selectedGrade.name}</Text>
              <Text style={styles.priceLabel}>სრული ღირებულება</Text>
              <Text style={styles.price}>
                {selectedGrade.fullPrice.toLocaleString()} ₾
              </Text>
              <Text style={styles.leaseLabel}>FLEX LEASE TEGETA თვეში</Text>
              <Text style={styles.leasePrice}>
                {selectedGrade.leaseFrom.toLocaleString()} ₾ - დან
              </Text>
            </View>
          )}
        </View>

        {/* Contact Form */}
        <Contact
          control={control}
          errors={errors}
          onSubmit={handleSubmit(onSubmit)}
          loading={loading}
        />
      </ScrollView>

      <BackButton />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    padding: 20,
    paddingTop: 50,
    paddingBottom: 100,
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  subheading: {
    fontSize: 14,
    color: "#888",
    lineHeight: 20,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 240,
    marginBottom: 20,
    borderRadius: 12,
  },
  sectionLabel: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 16,
  },
  configRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
  },
  engineCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: "#e8e8e8",
    borderRadius: 12,
    padding: 14,
  },
  gradeCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: "#e8e8e8",
    borderRadius: 12,
    padding: 14,
  },
  specLabel: {
    fontSize: 11,
    color: "#999",
    marginTop: 6,
  },
  specValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1a1a1a",
  },
  gradeName: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  priceLabel: {
    fontSize: 11,
    color: "#999",
  },
  price: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 6,
  },
  leaseLabel: {
    fontSize: 10,
    fontWeight: "600",
    color: "#00BCD4",
  },
  leasePrice: {
    fontSize: 16,
    fontWeight: "700",
    color: "#00BCD4",
  },
});
