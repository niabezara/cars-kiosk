import { imageMap } from "@/data/dummyData";
import { Images360Config } from "@/types/types";
import { Image } from "expo-image";
import { useRef, useState } from "react";
import { Dimensions, PanResponder, StyleSheet, View } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

type Props = {
  config: Images360Config;
};

export default function Car360Viewer({ config }: Props) {
  const sources = useRef(
    Array.from({ length: config.count }, (_, i) => {
      const key = `${config.prefix}${i + 1}`;
      const src = imageMap[key];
      if (!src) throw new Error(`[imageMap] missing key: "${key}"`);
      return src;
    }),
  ).current;

  const [frameIndex, setFrameIndex] = useState(0);
  const loadedCount = useRef(0);
  const [ready, setReady] = useState(false);

  // Adaptive sensitivity — scales to screen width and frame count
  // same idea as old code but kept as a ref so it never recomputes
  const dragPerFrame = useRef(SCREEN_WIDTH / sources.length).current;

  // Track start position and start index together (old code's approach, improved)
  const startX = useRef(0);
  const startIndex = useRef(0);

  function onFrameLoad() {
    loadedCount.current += 1;
    if (loadedCount.current >= sources.length) {
      setReady(true);
    }
  }

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true, // fires on touch down, not after move
      onPanResponderGrant: (_, { x0 }) => {
        startX.current = x0;
        startIndex.current = 0; // will be set properly via setFrameIndex callback below
      },
      onPanResponderMove: (_, { moveX }) => {
        const dx = startX.current - moveX;
        const rawStep = Math.round(dx / dragPerFrame);

        setFrameIndex((current) => {
          // Capture real current index on first move
          startIndex.current = startIndex.current || current;
          const next =
            (((startIndex.current + rawStep) % sources.length) +
              sources.length) %
            sources.length;
          return next;
        });
      },
      onPanResponderRelease: () => {
        // Reset so next gesture starts fresh
        startX.current = 0;
        startIndex.current = 0;
      },
    }),
  ).current;

  return (
    <View
      style={[styles.container, !ready && styles.loading]}
      {...panResponder.panHandlers}
    >
      {sources.map((src, i) => (
        <Image
          key={i}
          source={src}
          style={[
            styles.frame,
            i === frameIndex ? styles.visible : styles.hidden,
          ]}
          contentFit="contain"
          transition={0}
          cachePolicy="memory"
          onLoad={onFrameLoad}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    aspectRatio: 16 / 9,
    backgroundColor: "#161616",
  },
  loading: {
    opacity: 0, // hide until all frames decoded, no spinner needed
  },
  frame: {
    ...StyleSheet.absoluteFillObject,
  },
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
});
