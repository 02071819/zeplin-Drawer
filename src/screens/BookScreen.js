import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Content from "../components/content";
import Footer from "../components/Footer"
import Header from "../components/Header"

const BookScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <Content />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

export default BookScreen;