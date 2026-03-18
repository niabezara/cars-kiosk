import { Grade } from "@/types/types";
import React from "react";
import { View } from "react-native";
import PriceItem from "../ui/PriceItem";

type PriceProps = {
  data: Grade[];
};

const Price: React.FC<PriceProps> = ({ data }) => {
  return (
    <View>
      {data.map((item) => (
        <PriceItem key={item.id} option={item} />
      ))}
    </View>
  );
};

export default Price;
