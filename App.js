import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import BookScreen from './src/screens/BookScreen';
import { StyleSheet, Image, Text, View } from 'react-native';

const Drawer = createDrawerNavigator();

function CustomDrawerContent() {
  return (
    <DrawerContentScrollView style={styles.DrawerContainerStyle}>

      <View style={styles.DrawerStyle}>
        <Image
          style={styles.PicStyle}
          source={require('./src/img/img_user_photo.png')}
        />
        <View style={styles.DetailStyle}>
          <View>
            <Text style={styles.DetailTextStyle}>GamexHCI</Text>
            <Text style={styles.DetailTextStyle}>gdlab2017@gmail.com</Text>
          </View>
          <Image
            style={styles.ArrowStyle}
            source={require('./src/img/btn_down_arrow.png')}
          />
        </View>
      </View>
      <View style={styles.DrawerItemStyle1}>
        <Image
          style={styles.IconStyle}
          source={require("./src/img/icon_bottomnav_home.png")}
        />
        <Text style={styles.ItemTextStyle}>Home</Text>
      </View>

      <View style={styles.DrawerItemStyle2}>
        <Image
          style={styles.IconStyle}
          source={require("./src/img/icon_drawer_favorites.png")}
        />
        <Text style={styles.ItemTextStyle}>Favorites</Text>
      </View>

      <View style={styles.DrawerItemStyle3}>
        <Image
          style={styles.IconStyle}
          source={require("./src/img/icon_drawer_aboutus.png")}
        />
        <Text style={styles.ItemTextStyle}>Settings</Text>
      </View>

      <View style={styles.DrawerItemStyle4}>
        <Image
          style={styles.IconStyle}
          source={require("./src/img/icon_drawer_setting.png")}
        />
        <Text style={styles.ItemTextStyle}>About us</Text>
      </View>

      <View style={styles.ActiveDrawerItemStyle}>
        <Image
          style={styles.IconStyleMB}
          source={require("./src/img/icon_drawer_mybook_pressed.png")}
        />
        <Text style={styles.ActiveItemTextStyle}>My Book</Text>
      </View>

    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="My Book"
        drawerStyle={{
          width: 306,
          height: 667,
          backgroundColor: "#ebebeb",
        }}

        drawerContent={props => <CustomDrawerContent {...props}
          labelStyle={{ color: "#5c5c5c", fontWeight: 'normal', }}
        />}

        drawerContentOptions={{
          activeBackgroundColor: '#ebebeb',
          activeTintColor: "#fff",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={BookScreen}
          options={{
            drawerIcon: ({ }) => (
              <Image
                style={styles.ScreenIconStyle}
                source={require('./src/img/icon_drawer_home.png')}
              />)
          }}
        />
        <Drawer.Screen
          name="My Book"
          component={BookScreen}
          options={{
            drawerIcon: ({ }) => (
              <Image
                style={styles.ScreenIconStyle}
                source={require('./src/img/icon_drawer_mybook.png')}
              />)
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  DrawerStyle: {
    height: 196,
    marginTop: -48,
    paddingTop: 48,
    backgroundColor: "#00b49f",
  },
  DetailStyle: {
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  PicStyle: {
    width: 70,
    height: 70,
    marginLeft: 13,
    marginTop: 10,
    marginBottom: 10,
  },
  DetailTextStyle: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 5,
    marginLeft: 16,
  },
  ArrowStyle: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  DrawerItemStyle: {
    flexDirection: "row",
    paddingBottom: 12,
    paddingTop: 38,
  },
  DrawerItemStyle1: {
    position: "relative",
    bottom: 20,
    flexDirection: "row",
    paddingBottom: 12,
    paddingTop: 38,
  },
  DrawerItemStyle2: {
    position: "relative",
    top: 34,
    flexDirection: "row",
    paddingBottom: 12,
    paddingTop: 38,
  },
  DrawerItemStyle3: {
    position: "relative",
    top: 23,
    flexDirection: "row",
    paddingBottom: 12,
    paddingTop: 38,
  },
  DrawerItemStyle4: {
    position: "relative",
    top: 16,
    flexDirection: "row",
    paddingBottom: 12,
    paddingTop: 38,
  },

  IconStyle: {
    width: 24,
    height: 24,
    marginLeft: 24,
    marginRight: 35,
  },
  ScreenIconStyle: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  ItemTextStyle: {
    fontSize: 14,
    color: "#5c5c5c",
    marginTop: 5,
  },
  ActiveItemTextStyle: {
    position:"relative",
    top:10,
    fontSize: 14,
    color: "#fff",
  },
  ActiveDrawerItemStyle: {
    height:62,
    flexDirection: "row",
    paddingBottom: 12,
    paddingTop: 9,
    backgroundColor: "#00b49f",
    marginTop: -235,
  },
  IconStyleMB:{
    position:"relative",
    top:10,
    width: 24,
    height: 24,
    marginLeft: 24,
    marginRight: 35,
  },
});