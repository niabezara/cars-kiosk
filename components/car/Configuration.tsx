import { EngineConfig } from "@/types/types";
import { View } from "react-native";
import EngineItem from "../ui/EngineItem";

const renderItem = (item: EngineConfig) => (
  <EngineItem key={item.id} item={item} />
);

const Configuration = ({ details }: { details: EngineConfig[] }) => {
  return <View>{details.map(renderItem)}</View>;
};

export default Configuration;
