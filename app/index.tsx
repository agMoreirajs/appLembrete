 
import { View, Image, StyleSheet, Text } from 'react-native'
import { router } from 'expo-router'
import { Button } from '../components/button/button';
 
export default function RootLayout() {
 
  function navigate() {
    router.replace('/list');
  }
 
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/appLembrete.png')}
        style={styles.logo}
        resizeMode='cover'
      />
      <Text style={styles.textName}>Lemprei para você - 2026 ©</Text>
 
      <Button title="Entrar" onPress={navigate} />
    </View>
  )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1cbde',
  },
  logo: {
    height: 150,
    width: 150,
    marginBottom: 20,
   
  },
  textName: {
    color: '#cf047bbd',
    fontSize: 16,
    fontWeight: 'bold'
  },
  textDev: {
    fontSize: 12,
    marginBottom: 32
  }
})