import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import imagemL from './assets/icons/logo-palmeiras-claro.png';
import imagemD from './assets/icons/logo-palmeiras-escuro.png';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';
const App = () => {
  const [toggle, setToggle] = useState(false);
  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);
  useEffect(() => {
    Torch.switchState(toggle)
    console.log("trocou estado do flash");
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      handleChangeToggle(oldToggle => !oldToggle);
    });
    return () => subscription.remove();
  }, [])

  return (
    < View style={toggle ? style.containerLight : style.container} >
      <TouchableOpacity onPress={handleChangeToggle}>

        <Image
          style={toggle ? style.LightingOn : style.LightingOff}
          source={toggle ? imagemL : imagemD}
        />

      </TouchableOpacity>

    </View >
  )
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#006135",
    alignItems: "center",
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: 'center',
  },
  LightingOn: {
    resizeMode: "contain",
    alignSelf: "center",
    width: 300,
    height: 300,
  },
  LightingOff: {
    resizeMode: "contain",
    alignSelf: "center",
    width: 300,
    height: 300,
  },
});

export default App;
