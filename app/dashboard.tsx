import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { Link } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function dashboard() {
  const { width, height } = useWindowDimensions();

  return (
    <ScrollView>
      <View style={[styles.container, { width: width, height: height * 0.5 }]}>
        <Image
          style={styles.image}
          source={require("../assets/images/hero.jpg")}
        />
        <View>
          <View style={styles.title}>
            <FontAwesome6 name="kit-medical" size={24} color="black" />
            <Text style={styles.textTitle}>Biomedik</Text>
          </View>
          <View style={styles.mainContent}>
            <View style={styles.card}>
              <View style={styles.anatomiContainer}>
                <Image
                  style={styles.anatomi}
                  source={require("../assets/images/anatomi.png")}
                />
              </View>
              <Text style={styles.textSubTitle}>Anatomi</Text>
              <Link style={styles.subButton} href={"/anatomi"}>
                Mulai
              </Link>
            </View>

            <View style={styles.card}>
              <View style={styles.anatomiContainer}>
                <Image
                  style={styles.anatomi}
                  source={require("../assets/images/anatomi.png")}
                />
              </View>
              <Text style={styles.textSubTitle}>Anatomi</Text>
              <Link style={styles.subButton} href={"/anatomi"}>
                Mulai
              </Link>
            </View>
            <View style={styles.card}>
              <View style={styles.anatomiContainer}>
                <Image
                  style={styles.anatomi}
                  source={require("../assets/images/anatomi.png")}
                />
              </View>
              <Text style={styles.textSubTitle}>Anatomi</Text>
              <Link style={styles.subButton} href={"/anatomi"}>
                Mulai
              </Link>
            </View>
            <View style={styles.card}>
              <View style={styles.anatomiContainer}>
                <Image
                  style={styles.anatomi}
                  source={require("../assets/images/anatomi.png")}
                />
              </View>
              <Text style={styles.textSubTitle}>Anatomi</Text>
              <Link style={styles.subButton} href={"/anatomi"}>
                Mulai
              </Link>
            </View>
            <View style={styles.card}>
              <View style={styles.anatomiContainer}>
                <Image
                  style={styles.anatomi}
                  source={require("../assets/images/anatomi.png")}
                />
              </View>
              <Text style={styles.textSubTitle}>Anatomi</Text>
              <Link style={styles.subButton} href={"/anatomi"}>
                Mulai
              </Link>
            </View>
            <View style={styles.card}>
              <View style={styles.anatomiContainer}>
                <Image
                  style={styles.anatomi}
                  source={require("../assets/images/anatomi.png")}
                />
              </View>
              <Text style={styles.textSubTitle}>Anatomi</Text>
              <Link style={styles.subButton} href={"/anatomi"}>
                Mulai
              </Link>
            </View>
            <View style={styles.card}>
              <View style={styles.anatomiContainer}>
                <Image
                  style={styles.anatomi}
                  source={require("../assets/images/anatomi.png")}
                />
              </View>
              <Text style={styles.textSubTitle}>Anatomi</Text>
              <Link style={styles.subButton} href={"/anatomi"}>
                Mulai
              </Link>
            </View>
            <View style={styles.card}>
              <View style={styles.anatomiContainer}>
                <Image
                  style={styles.anatomi}
                  source={require("../assets/images/anatomi.png")}
                />
              </View>
              <Text style={styles.textSubTitle}>Anatomi</Text>
              <Link style={styles.subButton} href={"/anatomi"}>
                Mulai
              </Link>
            </View>
            <View style={styles.card}>
              <View style={styles.anatomiContainer}>
                <Image
                  style={styles.anatomi}
                  source={require("../assets/images/anatomi.png")}
                />
              </View>
              <Text style={styles.textSubTitle}>Anatomi</Text>
              <Link style={styles.subButton} href={"/anatomi"}>
                Mulai
              </Link>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  textTitle: { marginLeft: 10, fontSize: 16, fontWeight: "bold" },
  anatomi: {
    width: 50,
    height: 50,
  },
  anatomiContainer: {
    alignItems: "center",
    backgroundColor: "#ccc",
    width: 60,
    height: 60,
    borderRadius: 30,
    paddingVertical: 5,
  },
  textSubTitle: { fontSize: 12, fontWeight: "bold", textAlign: "center" },
  card: {
    width: 80,
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  subButton: {
    backgroundColor: "#0a7ea4",
    marginTop: 10,
    paddingVertical: 8,
    borderRadius: 20,
    color: "#fff",
    textAlign: "center",
  },
  mainContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
});
