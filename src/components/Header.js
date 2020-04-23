import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Header = ({ navigation }) => {
  return (
    <View style={styles.headerStyle}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
      >
        <Image
          style={styles.NavbarBtnStyle}
          source={require('../img/btn_navbar_mobile.png')} />
      </TouchableOpacity>
      
      <Text style={styles.textStyle}>My Book</Text>
      
      <Image
        style={styles.NavbarBtnStyle}
        source={require('../img/btn_search.png')} />
    </View>
  );
};

const styles = StyleSheet.create({

  headerStyle: {
    backgroundColor: "#00b49f",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    paddingTop: 24,
    elevation: 2
  },
  textStyle: {
    fontSize: 22,
    color: "#fff",
  },
  NavbarBtnStyle: {
    height: 40,
    width: 40,
    margin: 8
  },

});

export default Header;