import Image360Viewer from "@hauvo/react-native-360-image-viewer";
import React from "react";
import { Dimensions, View } from "react-native";

const { width } = Dimensions.get("window");

export default function Car360Viewer({ images }: { images: any[] }) {
  return (
    <View style={{ width, height: 300 }}>
      <Image360Viewer srcset={images} width={width} height={300} />
    </View>
  );
}
