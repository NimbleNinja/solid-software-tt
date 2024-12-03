import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { getRandomColors } from "./tools/colors";
import { StatusBarColor } from "./types/colors";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("rgb(255,255,255)");
  const [titleColor, setTitleColor] = useState("rgb(0,0,0)");
  const [statusBarColor, setStatusBarColor] = useState<StatusBarColor>("dark");

  const setColorsHandler = () => {
    const { backgroundColor, titleColor, statusBarColor } = getRandomColors();
    setBackgroundColor(backgroundColor);
    setTitleColor(titleColor);
    setStatusBarColor(statusBarColor);
  };
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Pressable style={styles.pressableBackground} onPress={setColorsHandler}>
        <Text style={[styles.title, { color: titleColor }]}>Hello there</Text>
      </Pressable>
      <StatusBar style={statusBarColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pressableBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
  },
});
