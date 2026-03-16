import { useRef, useState } from "react";
import { Dimensions, PanResponder } from "react-native";

const { width } = Dimensions.get("window");

export function use360Viewer(imagesLength: number) {
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
        const sensitivity = width / imagesLength;

        let nextIndex =
          (startIndexRef.current +
            Math.round((startXRef.current - gesture.moveX) / sensitivity)) %
          imagesLength;

        if (nextIndex < 0) nextIndex += imagesLength;

        if (nextIndex !== indexRef.current) {
          indexRef.current = nextIndex;
          setCurrentIndex(nextIndex);
        }
      },
    }),
  ).current;

  return {
    currentIndex,
    panHandlers: panResponder.panHandlers,
  };
}
