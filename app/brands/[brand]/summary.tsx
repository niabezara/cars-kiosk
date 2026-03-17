import BackButton from "@/components/navigation/BackButton";
import { configStore } from "@/stores/configStore";
import { Text, View } from "react-native";

export default function SummaryScreen() {
  const { selectedGrade, selectedEngine } = configStore();
  console.log(selectedGrade, selectedEngine);
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ marginTop: 20 }}>Selected Grade:</Text>
      <Text>{selectedGrade?.name}</Text>
      <Text>${selectedGrade?.fullPrice}</Text>
      <Text style={{ marginTop: 20 }}>Selected Engine:</Text>
      <Text>{selectedEngine?.name}</Text>

      <BackButton />
    </View>
  );
}
