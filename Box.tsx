import {StyleSheet, View} from "react-native";
import React from "react";
// @ts-ignore
import {ShadowBox} from 'react-native-neomorph-shadows';
import {LinearGradient} from "expo-linear-gradient";

const Box = ({children, width, height, withoutInner}) => {
  return (
    <LinearGradient
      colors={['#FC423380', '#FFEE92', '#FC423380']}
      style={[styles.boxBorder, {width: width, height: height}]}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}
    >
      <ShadowBox
        inner={!withoutInner}
        useSvg
        style={{
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.3,
          shadowColor: "#FF7F00",
          shadowRadius: 30,
          borderRadius: 16,
          width: width - 2,
          height: height - 2,
        }}>
        <View style={styles.box}>
          {children}
        </View>
      </ShadowBox>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  boxBorder: {
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  boxShadow: {
    borderRadius: 16,
  },
  box: {
    width: '100%',
    height: '100%',
    backgroundColor: '#14141B',
    borderRadius: 16,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 8
  }
});

export default Box