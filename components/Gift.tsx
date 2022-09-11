import React from "react";
import { Button } from "react-native";
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
  withRepeat,
  withSequence,
  useAnimatedProps,
} from "react-native-reanimated";
import { Svg, Path } from "react-native-svg";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export function Gift() {
  const leftQX = useSharedValue(30);
  const rightQX = useSharedValue(170);
  const startX = 30;
  const startY = startX + 50;
  const endPositionY = startY + 100;
  const bottomSideEndPositionX = 170;

  const strokeWidth = 8;

  const animatedProps = useAnimatedProps(() => {
    // 左辺
    const leftSideStart = `M ${startX} ${startY}`;
    const leftSideQuadraticBezierCurve = `Q ${leftQX.value} ${130}`;
    const leftSideEnd = ` ${startX} ${endPositionY} `;
    const leftSide = `${leftSideStart} ${leftSideQuadraticBezierCurve}, ${leftSideEnd}`;
    // 下辺
    const bottomSide = `H ${bottomSideEndPositionX}`;
    // 右辺
    const rightSideStart = `M ${bottomSideEndPositionX} ${endPositionY}`;
    const rightSideQuadraticBezierCurve = `Q ${rightQX.value} ${130}`;
    const rightSideEnd = `${bottomSideEndPositionX} ${startY}`;
    const rightSide = `${rightSideStart}, ${rightSideQuadraticBezierCurve} ${rightSideEnd}`;
    // 上辺
    const topSide = `H ${startX}`;

    // box path
    const d = `${leftSide}, ${bottomSide} ${rightSide} ${topSide}`;
    return { d };
  });

  return (
    <>
      <Svg width={200} height={200}>
        <AnimatedPath
          animatedProps={animatedProps}
          stroke="black"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </Svg>
      <Button
        title="Move"
        onPress={() => {
          leftQX.value = withSequence(
            withTiming(5, { duration: 1000 }),
            withRepeat(withTiming(30, { duration: 100 }), 5, true)
          );
          rightQX.value = withSequence(
            withTiming(170 + 25, { duration: 1000 }),
            withRepeat(withTiming(170, { duration: 100 }), 5, true)
          );
        }}
      />
    </>
  );
}
