import { useRef, useState } from "react";
import { Dimensions, PanResponder } from "react-native";

const { width } = Dimensions.get("window");

export function use360Viewer(imagesLength: number) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const indexRef = useRef(0);
  const startXRef = useRef(0);
  const startIndexRef = useRef(0);

  const updateIndex = (idx: number) => {
    let next = idx % imagesLength;
    if (next < 0) next += imagesLength;

    indexRef.current = next;
    setCurrentIndex(next);
  };

  const next = () => updateIndex(indexRef.current + 1);
  const prev = () => updateIndex(indexRef.current - 1);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,

      onPanResponderGrant: (_, gesture) => {
        startXRef.current = gesture.moveX;
        startIndexRef.current = indexRef.current;
      },

      onPanResponderMove: (_, gesture) => {
        const sensitivity = width / imagesLength;

        let idx =
          startIndexRef.current +
          Math.round((startXRef.current - gesture.moveX) / sensitivity);

        updateIndex(idx);
      },
    }),
  ).current;

  return {
    currentIndex,
    next,
    prev,
    panHandlers: panResponder.panHandlers,
  };
}
