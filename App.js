import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

import HomeScreen from './src/HomeScreen.js';
import ProfileScreen from './src/ProfileScreen.js';
import {Ionicons} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
export default function App() {
  // const[balance , setbalance] = useState(0);
  // const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/60884cd048a04f8ca58104fb188b2f91"));
  // web3.eth.getBalance("0x7FF972A8769417bc3870664fcc2D8190d4Af23dD").then((result) =>{
  //   setbalance(result);
  // });
  function detailStack(){
    return(
        <Stack.Navigator
        initialRouteName = 'Ethereum'
        screenOptions ={{
          headerStyle :{backgroundColor:'tomato'},
          headerTintColor : 'white',
          headerBackTitle :'返回'
        }}
        >
          <Stack.Screen name="Ethereum" component={HomeScreen} />
      </Stack.Navigator>
    )
  }

  function profileStack(){
    return(
        <Stack.Navigator
        initialRouteName = 'Transaction'
        screenOptions ={{
          headerStyle :{backgroundColor:'tomato'},
          headerTintColor : 'white',
          headerBackTitle :'返回'
        }}
        >
          <Stack.Screen name="Transaction" component={ProfileScreen} />
      </Stack.Navigator>
    )
  }
    // 創建底部Tab
    const Tab = createBottomTabNavigator();
    //上下頁跳轉
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
  
        <Tab.Navigator
        screenOptions = { ({route}) =>({
          tabBarIcon : ({color})=>{
            let iconUri ;
            if(route.name == 'Transaction'){
               //iconName = 'water'
               //自行設定icon image
               iconUri ='https://cdn.iconscout.com/icon/premium/png-512-thumb/wallet-224-207902.png';
            }
            else if (route.name =='Ethereum'){
              iconUri ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDn0ojTITvcdAzMsfBMJaZC4STaDHzduleQ&usqp=CAU';
  
            }
            return<Image source={{uri :iconUri}} style={{width:25 , height:25}}/>
          }
        })}
        
          tabBarOptions = {{
            activeTintColor : 'tomato' , 
            inactiveTintColor : 'gray'
          }}
          >
          <Tab.Screen name="Ethereum" component={detailStack} />
          <Tab.Screen name="Transaction" component={profileStack} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  
  
  