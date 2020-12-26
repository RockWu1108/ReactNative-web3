import { StatusBar } from 'expo-status-bar';
import React,{useState , useEffect} from 'react';
import { StyleSheet, Text, View ,Button ,Image } from 'react-native';
import '../global';
import Web3 from 'web3';


export default function HomeScreen() {

  const[EthPrice , setEthPrice] = useState(0);
  useEffect(() => {
    const ws = new WebSocket("wss://stream.binance.com:9443/ws/ETHUSDT@trade");
        ws.onopen = () => {
          ws.send(
            JSON.stringify({
              method: "SUBSCRIBE",
              params: ["ethusdt@trade"],
              id: 13
            })
          );
    };
    ws.onmessage = (evnt) => {
        if(JSON.parse(evnt.data).p !== undefined){
          setEthPrice(JSON.parse(evnt.data).p);
        }

    }},[])



// const getBinanceApi = () => {
//   fetch('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT')
//     .then((response) => response.json())
//     .then((json) => {
//       setEthPrice(json.price);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };


  return (
    <View style={styles.container}>
      {/* <Text>{balance}</Text> */}
      <Image style={styles.image} source={{uri :'https://b.gmic.cn/wp-content/uploads/2020/09/VitalikButerin_GMIC-825x383.jpg'}} />
      <Text style={styles.text}>
      Vitaly Dmitriyevich“ Vitalik” Buterin（生於1994年1月31日）是俄語-加拿大程序員和作家。他是以太坊（Ethereum）的共同創始人和比特幣雜誌（Bitcoin Magazine）的共同創始人。
      </Text>

      <View style={{flexDirection : 'row' , marginTop:30}}>
        <Image style={{width:50, height:50,margin: 10}} source={{uri :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDn0ojTITvcdAzMsfBMJaZC4STaDHzduleQ&usqp=CAU'}} />
        <Text style={styles.text }>{"ETH PRICE : " + EthPrice + " USDT"}</Text>
      </View>
    </View>

  );

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20 
  },
  image: {
    width: 350, 
    height:200, 
    
  },
  text :{

    textAlign:'left',
    margin: 10,
    borderRadius:5,
    borderWidth:1,
    backgroundColor:'white',
    color:'black',
    fontSize: 15,
    padding:10
  }
});

