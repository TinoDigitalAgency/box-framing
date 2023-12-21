import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Box from "./Box";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'black'} translucent={true}/>
      <SafeAreaView style={styles.container}>
        <Box>
          <Text style={{color: '#fff', fontSize: 20, lineHeight: 25}}>Test text</Text>
          <View style={{height: 200}}/>
          <Text style={{color: '#fff', fontSize: 20, lineHeight: 25}}>Test text</Text>
        </Box>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090C',
    paddingHorizontal: 24,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
});
