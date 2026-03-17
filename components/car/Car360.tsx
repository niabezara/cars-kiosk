import { use360Viewer } from "@/hooks/use360Viewer";
import React from "react";
import { Dimensions, Image, Pressable, StyleSheet, View } from "react-native";
import { Icons } from "../shared/icons";

const { width } = Dimensions.get("window");
const HEIGHT = 300;

export default function Car360Viewer({ images }: { images: number[] }) {
  const { currentIndex, next, prev, panHandlers } = use360Viewer(images.length);

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

      <Pressable onPress={prev}>
        <Icons.arrow style={{ transform: [{ rotate: "180deg" }] }} />
      </Pressable>

      <Pressable onPress={next}>
        <Icons.arrow />
      </Pressable>
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
