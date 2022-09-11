import React from "react";
import { Button } from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  withRepeat,
  withSequence,
  useAnimatedProps,
} from "react-native-reanimated";
import { Svg, Path } from "react-native-svg";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export function Gift() {
  const boxTopX = useSharedValue(30);
  const startX = 30;
  const startY = startX + 50;
  const endPositionY = startY + 100;
  const bottomSideEndPositionX = 170;
  const leftQX = useSharedValue(startX);
  const rightQX = useSharedValue(bottomSideEndPositionX);

  const strokeWidth = 8;

  const animatedProps = useAnimatedProps(() => {
    // 左辺
    const leftSideStart = `M ${startX} ${startY}`;
    const leftSideQuadraticBezierCurve = `Q ${leftQX.value} ${150}`;
    const leftSideEnd = ` ${startX} ${endPositionY} `;
    const leftSide = `${leftSideStart} ${leftSideQuadraticBezierCurve}, ${leftSideEnd}`;
    // 下辺
    const bottomSide = `H ${bottomSideEndPositionX}`;
    // 右辺
    const rightSideStart = `M ${bottomSideEndPositionX} ${endPositionY}`;
    const rightSideQuadraticBezierCurve = `Q ${rightQX.value} ${150}`;
    const rightSideEnd = `${bottomSideEndPositionX} ${startY}`;
    const rightSide = `${rightSideStart}, ${rightSideQuadraticBezierCurve} ${rightSideEnd}`;
    // 上辺
    const topSide = `H ${startX}`;

    // box path 左辺から反時計回り
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
          const initLeft = 30;
          const initRight = 170;
          leftQX.value = withSequence(
            withTiming(initLeft - 25, { duration: 1000 }),
            withRepeat(withTiming(initLeft - 15, { duration: 100 }), 5, true),
            withTiming(initLeft, { duration: 100 })
          );
          rightQX.value = withSequence(
            withTiming(initRight + 25, { duration: 1000 }),
            withRepeat(withTiming(initRight + 15, { duration: 100 }), 5, true),
            withTiming(initRight, { duration: 100 })
          );
        }}
      />
    </>
  );
}
