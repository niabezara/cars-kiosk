// /components/icons/Icons.tsx
import React from "react";
import Svg, { Path } from "react-native-svg";

export const Icons = {
  arrowLeft: (props?: any) => (
    <Svg width={53} height={105} viewBox="0 0 53 105" {...props}>
      <Path
        d="M51.7171 0V1.6063M51.7171 1.6063V102L1.41571 51.8031L51.7171 1.6063Z"
        stroke="#CEB7FF"
        strokeWidth={2}
      />
      <Path
        d="M9.79926 51.5611L45.4294 86.6301V16.4921L9.79926 51.5611Z"
        fill="#CEB7FF"
      />
      <Path
        d="M45.4294 15.3699V16.4921M45.4294 16.4921V86.6301L9.79926 51.5611L45.4294 16.4921Z"
        stroke="#CEB7FF"
        strokeWidth={2}
      />
    </Svg>
  ),
};
