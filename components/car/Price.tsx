import { Grade } from "@/types/types";
import React from "react";
import { FlatList } from "react-native";
import PriceItem from "../ui/PriceItem";

type PriceProps = {
  data: Grade[];
};

const renderItem = ({ item }: { item: Grade }) => <PriceItem option={item} />;
const keyExtractor = (item: Grade) => item.id;

const Price: React.FC<PriceProps> = ({ data }) => {
  return (
    <FlatList data={data} keyExtractor={keyExtractor} renderItem={renderItem} />
  );
};

export default Price;
