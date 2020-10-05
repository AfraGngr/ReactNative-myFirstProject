// App.js
import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import MyComponent from './components/MyComponent';
/**
 *  <View style = {{ // Inline Style
        backgroundColor: "purple",
        padding: 10,
        margin: 20,
      }
      }>
 */
const App = () => {
  const my_name = "Afra"

  // function myFunction(){
  //   // return "Hello there !" //**2
  //   return <Text>Hi everybody !</Text> // **1
    
  // }

  const isAdmin = true 
  function myFunction_2(){
    return isAdmin ? <Text style={{fontSize: 40, textAlign:"center"}}>This is Admin!</Text>:null 
    // if (isAdmin){
    //   return <Text>Admin</Text>
    // } else {
    //   return <Text>Üye</Text>
    // }


    // if (isAdmin)
    //   return <Text>Admin</Text>
  
    // return <Text>Üye</Text> // isAdmin = false olursa 
  }

  function myName(username){
    return <Text style = {{margin:10, fontSize:15, color:"red", textAlign:"center"}}>{username}</Text>
  }

  function myArrayFunction(){
    const myArray = ["İzmir", "Ankara", "İstanbul"]

    return myArray.map(city=>{
      return <Text>{city}</Text>
    })
  };
  

  
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>CLARUSWAY!</Text>
      </View>
    <MyComponent/>
    {/* {myFunction()} **1 */}
    {/* /* <Text>{myFunction()}</Text> **2 */}
    {/* <Text style = {styles.hello}>Hogeldin {my_name} </Text>
    <Text style = {styles.number}>Sonuç {4+5} </Text> */}
    {myFunction_2()}

    {isAdmin ? <Text style = {{margin:10, fontSize:35, color:"red", textAlign:"center"}}>Other Users</Text>: null} 

    {isAdmin && <Text style = {{margin:10, fontSize:25, color:"purple", textAlign:"center"}}>Third Party</Text>} 
    {/* isAdmin = true diğer kısımda true olduğu için yazdırır. */}

    {myName("~Afra~")}

    {myArrayFunction()}
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    padding: 10,
    margin: 20,
    borderRadius: 15,
  },
  text: {
    color: 'antiquewhite',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
  },

  // hello:{
  //   margin: 20,
  //   textAlign: "center",
  //   fontSize: 30,
  //   fontWeight: "bold",
  //   color: "pink"
  // },
  // number:{
  //   fontSize:25,
  //   fontWeight: "bold",
  //   margin: 10,
  // }
});