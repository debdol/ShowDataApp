import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomeComponent from './CustomeComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShowDataPage from './ShowDataPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CustomeComponent">
        <Stack.Screen name='CustomeComponent' component={CustomeComponent} options={(() => ({
          headerShown: false
        }))} />
        <Stack.Screen name='ShowDataPage' component={ShowDataPage} options={(() => ({
          headerTitle:"Your Data",
          headerTitleStyle:{
            fontFamily:"Forza-Bold",
            color: "#3D4759",
          },
          headerTitleAlign:'center'
        }))} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({})
export default App;