import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ShowDataPage} from './Pages/ShowDataPage';
import {CustomeComponent} from './Pages/CustomeComponent';
import DelhiveryDetails from './Pages/DelhiveryDetails';
import AddData from './Pages/AddData';
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
        <Stack.Screen name='DelhiveryDetails' component={DelhiveryDetails} options={(() => ({
          headerTitle:"Your Data",
          headerTitleStyle:{
            fontFamily:"Forza-Bold",
            color: "#3D4759",
          },
          headerTitleAlign:'center'
        }))} />
        <Stack.Screen name='AddData' component={AddData} options={(() => ({
          headerTitle:"Add Data",
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