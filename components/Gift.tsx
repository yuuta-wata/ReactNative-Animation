import React from "react";
import Animated from "react-native-reanimated";
import { Svg, Path } from "react-native-svg";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export function Gift() {
  const startX = 30;
  const startY = startX + 50;
  const endPositionY = startY + 100;
  const bottomSideEndPositionX = 170;

  const strokeWidth = 8;

  // 左辺
  const leftSideStart = `M ${startX} ${startY}`;
  const leftSideQuadraticBezierCurve = `Q ${30} ${130}`;
  const leftSideEnd = ` ${startX} ${endPositionY} `;
  const leftSide = `${leftSideStart} ${leftSideQuadraticBezierCurve}, ${leftSideEnd}`;
  // 下辺
  const bottomSide = `H ${bottomSideEndPositionX}`;
  // 右辺
  const rightSideStart = `M ${bottomSideEndPositionX} ${endPositionY}`;
  const rightSideQuadraticBezierCurve = `Q ${170} ${130}`;
  const rightSideEnd = `${bottomSideEndPositionX} ${startY}`;
  const rightSide = `${rightSideStart}, ${rightSideQuadraticBezierCurve} ${rightSideEnd}`;
  // 上辺
  const topSide = `H ${startX}`;

  // box path
  const d = `${leftSide}, ${bottomSide} ${rightSide} ${topSide}`;

  return (
    <Svg width={200} height={200}>
      <AnimatedPath
        d={d}
        stroke="black"
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </Svg>
  );
}
