import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import COLORS from "../src/const/color";
import {
  FontAwesome,
  MaterialIcons,
  AntDesign,
  Ionicons,
} from "react-native-vector-icons";
import { NavigationActions } from "@react-navigation/native";
const DetailsScreen = ({ navigation, route }) => {
  const veggie = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={28}
          onPress={() => navigation.goBack()}
        />
        <AntDesign name="shoppingcart" size={28} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default DetailsScreen;
