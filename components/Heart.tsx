import React, { useRef } from "react";
import { StyleSheet, TouchableOpacity, Animated } from "react-native";

export function Heart() {
  const animation = useRef(new Animated.Value(1)).current;

  const endHeartAnimation = (endResult: Animated.EndResult) => {
    const { finished } = endResult;

    if (finished) {
      Animated.timing(animation, {
        toValue: 1,
        delay: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    }
  };

  const startHeartAnimation = () => {
    Animated.timing(animation, {
      toValue: 0.8,
      delay: 0,
      duration: 100,
      useNativeDriver: true,
    }).start(endHeartAnimation);
  };

  return (
    <TouchableOpacity style={styles.heartButton} onPress={startHeartAnimation}>
      <Animated.Image
        style={
          (styles.heart,
          {
            transform: [{ scale: animation }],
          })
        }
        source={require("../assets/heart.png")}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  heartButton: {
    // width: 50,
    // height: 50,
    // backgroundColor: "pink",
  },
  heart: {
    width: 50,
    height: 50,
    top: 0,
  },
});
