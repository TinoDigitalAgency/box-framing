import {Image, StyleSheet, View} from "react-native";
import React from "react";
import {LinearGradient} from "expo-linear-gradient";
import {Shadow} from "react-native-shadow-2";

const Logo = () => {
  return (
    <Shadow distance={16} startColor={'rgba(253, 111, 39, 0.25)'}  offset={[0, 4]}>
      <LinearGradient
        colors={['#AA390000', '#AA3900']}
        style={styles.logoBorder}
        start={{x: 0.5, y: 0.5}}
      >
        <View style={styles.box}>
          <Image source={require('./assets/logo.png')} style={styles.image}/>
        </View>
      </LinearGradient>
    </Shadow>
  )
}

const styles = StyleSheet.create({
  logoBorder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: 'rgba(253, 111, 39, 0.40)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 2,
  },
  image: {
    height: 12,
    width: 24,
    resizeMode: "contain"
  },
  box: {
    width: 38,
    height: 38,
    backgroundColor: '#FD6F27',
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default Logo