import React from "react";
import { StyleSheet, Text, View ,Image} from "react-native";

const Content = () => {
  return (
      <View>
          <View style={styles.boxStyle}>
            <View>
                <Image 
                    style = {styles.picStyle}
                    source = {require('../img/img_theImmortalists.png')}/>
            </View>
            <View style={styles.infoStyle}>
                <Text style={styles.titleStyle}>The Immortalists</Text>
                <Text style={styles.authorStyle}>Chloe Benjamin</Text>
                <Text style={styles.detailStyle}>If you were told the date of your {"\n"}death, how would it shape your...</Text>
                <View style={styles.loadingStyle}>
                    <View style={styles.InloadingStyle}></View>
                </View>
                <Text style={styles.detailStyle}>50% completed</Text>
            </View>
        </View>
        <View style={styles.boxStyle}>
            <View>
                <Image 
                    style = {styles.picStyle}
                    source = {require('../img/img_gristmillroad.png')}/>
            </View>
            <View style={styles.infoStyle}>
                <Text style={styles.titleStyle}>Grist Mill Road</Text>
                <Text style={styles.authorStyle}>Christopher J.</Text>
                <Text style={styles.detailStyle}>Twenty-six years ago Hannah had{"\n"}her eye shot out. Now she wants...</Text>
                <View style={styles.loadingStyle,styles.loadingStyle_2}></View>
                <Image 
                    style = {styles.startreadStyle}
                    source = {require('../img/btn_startreadpressed.png')}/>
            </View>
        </View>
        <View style={styles.boxStyle}>
            <View>
                <Image 
                    style = {styles.picStyle}
                    source = {require('../img/img_streetartactivitybook.png')}/>
            </View>
            <View style={styles.infoStyle}>
                <Text style={styles.titleStyle}>Street Art Activity Book</Text>
                <Text style={styles.authorStyle}>Mitchell Beazley</Text>
                <Text style={styles.detailStyle}>Street art is colorful, vibrant,{"\n"}divverse and exciting. Now you can...</Text>
                <View style={styles.loadingStyle}>
                    <View style={styles.InloadingStyle}></View>
                </View>
                <Text style={styles.detailStyle}>50% completed</Text>
            </View>
        </View>
      </View>
      
  );
};

const styles = StyleSheet.create({
  boxStyle: {
    backgroundColor: "#f8f8f8",
    flexDirection: "row",
    justifyContent: "flex-start",
    height: 170,
  },
  picStyle:{
    width: 93,
    height: 140,
    marginLeft: 18,
    marginTop: 15
  },
  infoStyle: {
    padding:18,
  },
  titleStyle:{
    fontSize: 18,
    color: "#212121",
    marginTop:10,
    marginBottom: 11,
  },
  authorStyle: {
    fontSize: 14,
    color: "#717171",
    marginBottom: 11
  },
  detailStyle: {
    fontSize: 12,
    color: "#b1b1b1",
    marginBottom:11,
  },
  loadingStyle: {
    width: 194,
    height: 3,
    backgroundColor: "#c3c3c3",
    borderRadius: 3,
    marginBottom: 11,
  },
  InloadingStyle: {
      width: 97,
      height: 3,
      backgroundColor: "#70b4a1",
  },
  startreadStyle: {
      width: 82,
      height: 21
  },
  loadingStyle_2: {
    width: 194,
    height: 3,
    backgroundColor: "#c3c3c3",
    borderRadius: 3,
    marginBottom: 6,
  }
});

export default Content;