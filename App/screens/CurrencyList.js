import React from "react";
import {
  StatusBar,
  FlatList,
  View,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../constants/colors";
import currencies from "../data/currencies.json";
import { RowItem, RowSeparator } from "../components/RowItem";

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    backgroundColor: colors.blue,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ({ navigation, route = {} }) => {
  const params = route.params || {};

  return (
    <SafeAreaView>
      <View styles={{ backgroundColor: colors.white }}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => {
            const selected = params.activeCurrency === item;
            return (
              <RowItem
                title={item}
                onPress={() => navigation.pop()}
                rightIcon={
                  selected && (
                    <View style={styles.icon}>
                      <Entypo name="check" size={20} color={colors.white} />
                    </View>
                  )
                }
              />
            );
          }}
          keyExtractor={(item) => item}
          ItemSeparatorComponent={() => <RowSeparator />}
        />
      </View>
    </SafeAreaView>
  );
};
