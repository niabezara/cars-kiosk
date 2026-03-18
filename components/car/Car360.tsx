import { use360Viewer } from "@/hooks/use360Viewer";
import React from "react";
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");
const HEIGHT = 280;

export default function Car360Viewer({ images }: { images: number[] }) {
  const { currentIndex, next, prev, panHandlers } = use360Viewer(images.length);

  if (!images?.length) return null;

  return (
    <View style={styles.wrapper}>
      <View {...panHandlers} style={styles.container}>
        {images.map((img, i) => (
          <Image
            key={i}
            source={img}
            style={[styles.image, { opacity: i === currentIndex ? 1 : 0 }]}
            resizeMode="contain"
          />
        ))}

        {/* Left Arrow */}
        <Pressable style={[styles.arrow, styles.arrowLeft]} onPress={prev}>
          <Text style={styles.arrowText}>←</Text>
        </Pressable>

        {/* Right Arrow */}
        <Pressable style={[styles.arrow, styles.arrowRight]} onPress={next}>
          <Text style={styles.arrowText}>→</Text>
        </Pressable>
      </View>

      {/* Oval indicator */}
      <View style={styles.ovalWrap}>
        <View style={styles.oval} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#2d2d2d",
  },
  container: {
    width,
    height: HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    position: "absolute",
    width,
    height: HEIGHT,
  },
  arrow: {
    position: "absolute",
    top: "50%",
    marginTop: -20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  arrowLeft: {
    left: 12,
  },
  arrowRight: {
    right: 12,
  },
  arrowText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  ovalWrap: {
    alignItems: "center",
    paddingBottom: 12,
  },
  oval: {
    width: width * 0.7,
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },
});
