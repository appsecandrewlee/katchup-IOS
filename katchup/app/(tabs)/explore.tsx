import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold" }}>Welcome to Katchup</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
  },
});
