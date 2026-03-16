import { use360Viewer } from "@/hooks/use360Viewer";
import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

const { width } = Dimensions.get("window");
const HEIGHT = 300;

export default function Car360Viewer({ images }: { images: number[] }) {
  const { currentIndex, panHandlers } = use360Viewer(images.length);

  if (!images?.length) return null;

  return (
    <View {...panHandlers} style={styles.container}>
      {images.map((img, i) => (
        <Image
          key={i}
          source={img}
          style={[styles.image, { opacity: i === currentIndex ? 1 : 0 }]}
          resizeMode="contain"
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height: HEIGHT,
  },
  image: {
    position: "absolute",
    width,
    height: HEIGHT,
  },
});
