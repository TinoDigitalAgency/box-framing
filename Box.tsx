import {Dimensions, StyleSheet, View} from "react-native";
import React, {useState} from "react";
// @ts-ignore
import {ShadowBox} from 'react-native-neomorph-shadows';
import {LinearGradient} from "expo-linear-gradient";

const Box = ({children}) => {

  const [parentDimensions, setParentDimensions] = useState({width: 0, height: 0});

  const onParentLayout = (event) => {
    const {width, height} = event.nativeEvent.layout;
    if (parentDimensions.height === 0 && parentDimensions.width === 0) {
      setParentDimensions({width, height});
    }
  };

  return (
    <LinearGradient
      colors={['#FC423380', '#FFEE92', '#FC423380']}
      style={[styles.boxBorder, parentDimensions.height && {height: parentDimensions.height}]}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}
      onLayout={onParentLayout}
    >
      <ShadowBox
        inner
        useSvg
        style={{
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.3,
          shadowColor: "#FF7F00",
          shadowRadius: 30,
          borderRadius: 16,
          width: parentDimensions.width - 2,
          height: parentDimensions.height - 2,
        }}>
        <View style={[styles.box, {
          width: parentDimensions.width - 2,
          height: parentDimensions.height - 2
        }]}>
          {children}
        </View>
      </ShadowBox>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  boxBorder: {
    width: Dimensions.get('window').width - 48,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  boxShadow: {
    borderRadius: 16,
  },
  box: {
    width: '100%',
    backgroundColor: '#14141B',
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16
  }
});

export default Box