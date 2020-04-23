import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Footer = () => {
  return (
    <ScrollView>
      <View>
        <View style={styles.footerBookStyle}>

          <View style={styles.BtnBoxStyle}>
            <Image
              style={styles.BtnMarkStyle}
              source={require('../img/icon_bottomnav_home.png')} />
            <Text style={styles.BtnTextStyle}>Home</Text>
          </View>

          <View style={styles.BtnBoxStyle}>
            <Image
              style={styles.BtnMarkStyle}
              source={require('../img/icon_bottomnav_mybook_selected.png')} />
            <Text style={styles.BtnTextStyle_MyBook}>My Book</Text>
          </View>

          <View style={styles.BtnBoxStyle}>
            <Image
              style={styles.BtnMarkStyle}
              source={require('../img/icon_drawer_favorites.png')} />
            <Text style={styles.BtnTextStyle}>Favorite</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  footerBookStyle: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 76,
  },
  BtnBoxStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  BtnMarkStyle: {
    width: 34,
    height: 34,
  },
  BtnTextStyle: {
    fontSize: 14,
    color: "#818181",
  },
  BtnTextStyle_MyBook: {
    fontSize: 14,
    color: "#00b49f",
  },
  FooterBtnStyle: {
    height: 18,
    width: 18,
  },

});

export default Footer;