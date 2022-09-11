import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Gift } from "./components/Gift";

import { Heart } from "./components/Heart";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Heart animation!</Text>
      <Heart />
      <Text>Svg animation!</Text>
      <View
        style={{
          backgroundColor: "pink",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Gift />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
