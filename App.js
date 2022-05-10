import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.containerG}></Text>
      <Text style={styles.containerR}></Text>
      <Text style={styles.containerB}></Text>
      <StatusBar style="auto" />

     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
   
  },  
  containerG: {
    flex: 2,
    backgroundColor: '#0F0',
 paddingLeft:0,
    width : '100%', 
  
   
  },  containerR: {
    flex: 1,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
    width : '100%',   
    
  },  containerB: {
    flex: 3,
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
     width : '100%',
     
  },
});
