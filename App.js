import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

class FirstApp extends Component  {


  saludo = () => {
      Alert.alert("title", "mensaje")
  }
 
  render(){

    return (
      <View style={styles.container}>

        <View style={styles.header}>

          <View style={styles.headerLeft}>
            <Image source={require('./assets/bg_home.png')} style={styles.logo}/>
          </View>

          <View style={styles.headerRight}>
            <Button title="login" onPress={this.saludo} />
          </View>
        </View>

        <View style={styles.body}>
          <Text>cagada</Text>
        </View>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    flexDirection: 'column'
  },

  header: {
    flex: 0.2,
    flexDirection: 'row',
    marginTop: 30
  },

  headerLeft : {
    flex: 1,
    backgroundColor: 'yellow'
  },

  headerRight : {
    flex: 1,
    backgroundColor: 'blue'
  },
  
  body : {
    flex: 1,
    alignItems: 'center'
  },

  logo : {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'contain'
  }
})

export default FirstApp