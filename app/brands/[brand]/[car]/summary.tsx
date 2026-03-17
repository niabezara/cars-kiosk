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
    <ScrollView style={styles.container}>
      {/* Car Image */}
      {selectedCar?.image && (
        <Image
          source={selectedCar.image}
          style={styles.image}
          resizeMode="contain"
        />
      )}

      {/* Car Name */}
      <Text style={styles.carName}>
        {selectedBrand?.brand} {selectedCar?.name}
      </Text>

      {/* Grade */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Selected Grade</Text>
        <Text style={styles.value}>{selectedGrade?.name}</Text>
        <Text style={styles.price}>
          ${selectedGrade?.fullPrice?.toLocaleString()}
        </Text>
      </View>

      {/* Engine */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Selected Engine</Text>
        <Text style={styles.value}>{selectedEngine?.name}</Text>
        <Text style={styles.subValue}>
          {selectedEngine?.horsepower} hp · {selectedEngine?.transmission}
        </Text>
      </View>
      <Contact
        control={control}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
        loading={loading}
      />

      <BackButton />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: "100%",
    height: 220,
  },
  carName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 8,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#888",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
  },
  subValue: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  price: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    fontSize: 15,
    backgroundColor: "#fafafa",
  },
  inputError: {
    borderColor: "red",
  },
  textarea: {
    height: 100,
    textAlignVertical: "top",
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: -8,
    marginBottom: 8,
    marginLeft: 4,
  },
  button: {
    backgroundColor: "#000",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 24,
    marginBottom: 40,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
