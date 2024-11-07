import { Text, View, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/react-logo.png")} />
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/dashboard" style={styles.button}>
        Get Started
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
  button: {
    fontSize: 20,
    backgroundColor: "#0a7ea4",
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    color: "#fff",
  },
});
