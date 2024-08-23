import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import AITextGenerator from "./katchbot";

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.WelcomeText}>
          Welcome to <Text style={styles.KatchUpText}>Katch</Text>
          <Text style={styles.UpText}>Up</Text>
        </Text>
        <Text style={styles.descriptionText}>
          An AI powered scheduling tool that finds your perfect venue <br></br>, saves you
          money and <br></br>seamlessly update your calendar
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AITextGenerator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5DC",
    alignItems: "center",
    justifyContent: "center",
  },
  KatchUpText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 30,
  },
  WelcomeText: {
    fontWeight: "bold",
    fontSize: 30,
  },
  UpText: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 30,
  },
  descriptionText: {
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
});
