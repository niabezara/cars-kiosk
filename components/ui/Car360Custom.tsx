import React, { useRef, useState } from "react";
import { Dimensions, Image, PanResponder, StyleSheet, View } from "react-native";

const { width } = Dimensions.get("window");
const HEIGHT = 300;

export default function Car360Viewer({ images }: { images: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const indexRef = useRef(0);
  const startXRef = useRef(0);
  const startIndexRef = useRef(0);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (_, gesture) => {
        startXRef.current = gesture.moveX;
        startIndexRef.current = indexRef.current;
      },
      onPanResponderMove: (_, gesture) => {
        const sensitivity = width / images.length;
        let idx =
          (startIndexRef.current +
            Math.round((startXRef.current - gesture.moveX) / sensitivity)) %
          images.length;
        if (idx < 0) idx += images.length;
        if (idx !== indexRef.current) {
          indexRef.current = idx;
          setCurrentIndex(idx);
        }
      },
    }),
  ).current;

  if (images.length === 0) return null;

  return (
    <View
      {...panResponder.panHandlers}
      style={{ width, height: HEIGHT }}
    >
      {images.map((img, i) => (
        <Image
          key={i}
          source={img}
          style={[
            styles.image,
            { opacity: i === currentIndex ? 1 : 0 },
          ]}
          resizeMode="contain"
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width,
    height: HEIGHT,
  },
});
