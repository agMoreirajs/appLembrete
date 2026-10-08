import {View, Image, StyleSheet, Text } from 'react-native'
import { router } from 'expo-router'
import { Button } from '../components/button/button'

export default function RootLayout (){

  function navite() {
    router.replace('/list')
  }
} 

return (
  <View style={styles.container}>
    <Image
      source={require('../assets/appLembrete.png')}
      style={styles.logo}
      resizeMode='cover'
      />
      <Text style={styles.textName}>Lemprei para você - 2026 © </Text>
      <Text style={styles.textDev}>by Agatha Moreira</Text>
      <Button title="Entrar" function={navigate}/>
  </View>

)

const styles = StyleSheet.create({
  container:
  {flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0EBEE'
  }
})