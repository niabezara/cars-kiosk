import { useMemo, useRef, useState } from "react";
import { Dimensions, PanResponder } from "react-native";

const { width } = Dimensions.get("window");

export function use360Viewer(imagesLength: number) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const indexRef = useRef(0);
  const startXRef = useRef(0);
  const startIndexRef = useRef(0);
  const lengthRef = useRef(imagesLength);
  lengthRef.current = imagesLength;

  const updateIndex = (idx: number) => {
    const len = lengthRef.current;
    if (len === 0) return;
    let next = idx % len;
    if (next < 0) next += len;

    indexRef.current = next;
    setCurrentIndex(next);
  };

  const next = () => updateIndex(indexRef.current + 1);
  const prev = () => updateIndex(indexRef.current - 1);

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponder: () => true,

        onPanResponderGrant: (_, gesture) => {
          startXRef.current = gesture.moveX;
          startIndexRef.current = indexRef.current;
        },

        onPanResponderMove: (_, gesture) => {
          const sensitivity = width / lengthRef.current;

          let idx =
            startIndexRef.current +
            Math.round((startXRef.current - gesture.moveX) / sensitivity);

          updateIndex(idx);
        },
      }),
    [],
  );

  return {
    currentIndex,
    next,
    prev,
    panHandlers: panResponder.panHandlers,
  };
}
