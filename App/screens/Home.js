import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Text,
  ScrollView,
} from "react-native";
import { format } from "date-fns";

import colors from "../constants/colors";
import { ConversionInput } from "../components/ConversionInput";
import { Button } from "../components/Button";
import { KeyboardSpacer } from "../components/KeyboardSpacer";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
  },
  content: {
    paddingTop: screen.height * 0.1,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoBackground: {
    width: screen.width / 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  textHeader: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 20,
    textAlign: "center",
  },
  text: {
    color: colors.white,
    fontSize: 13,
    textAlign: "center",
  },
});

export default function Home() {
  const baseCurrency = "USD";
  const quoteCurrency = "GBP";
  const conversionRate = 0.7235;
  const date = new Date();

  const [scrollEnabled, setScrollEnabled] = useState(false);

  // useEffect(() => {
  //   const showListener = Keyboard.addListener("keyboardDidShow", () => {
  //     setScrollEnabled(true); // when keyboard shows, allow scroll
  //   });

  //   const hideListener = Keyboard.addListener("keyboardDidHide", () => {
  //     setScrollEnabled(false); // when keyboard hides, don't allow scroll
  //   });

  //   return () => {
  //     showListener.remove(); // when screen is no longer focused, remove listener
  //     hideListener.remove();
  //   };
  // }, []);

  return (
    <View style={styles.container}>
      <ScrollView scrollEnabled={scrollEnabled}>
        <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/background.png")}
              style={styles.logoBackground}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.logo}
              resizeMode="contain" /* contains the image  within width/height */
            />
          </View>

          <Text style={styles.textHeader}>Currency Converter</Text>

          <ConversionInput
            text={baseCurrency}
            value="123"
            onButtonPress={() => alert("todo")}
            onChangeText={(text) => console.log("text", text)}
            keyboardType="numeric"
          />

          <ConversionInput
            text={quoteCurrency}
            value="123"
            onButtonPress={() => alert("todo")}
            editable={false}
          />

          <Text style={styles.text}>
            {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(
              date,
              "MMMM do, yyyy"
            )}`}
          </Text>

          <Button text="Reverse Currencies" onPress={() => alert("todo")} />
          <KeyboardSpacer
            onToggle={(keyboardIsVisible) =>
              setScrollEnabled(keyboardIsVisible)
            }
          />
        </View>
      </ScrollView>
    </View>
  );
}