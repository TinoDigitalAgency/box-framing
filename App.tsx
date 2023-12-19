import {StatusBar, StyleSheet, View} from 'react-native';
import Box from "./Box";
import Logo from "./Logo";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'black'} translucent={true}/>
      <View style={styles.container}>
        <Logo/>
        <Box width={300} height={300}/>
        {/*<Box width={300} height={200}>*/}
        {/*  <Box width={276} height={90} withoutInner/>*/}
        {/*</Box>*/}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090C',
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
});
