import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";
/**
 * ? Local Imports
 */
import colors from "colors";
import Toolbar from "../toolbar/toolbar"
const HomeScreen = props => {


  useEffect(() => {

  }, []);


  return (
    <View style={styles.container}>
      <ImageBackground source={require('assets/backgroundImage.png')} style={styles.image}>

        <Toolbar></Toolbar>

        <Text style={styles.address}>e 4 f a 1 5 5 5 a d 8 7 7 b f 0 e c 4 5 5 4 8 3 3 7 1 8 6 7 2 0 0 e e e 8 9 5 5 0 a 9 3 e f f 2 f 9 5 a 6 1 9 8
        </Text>

        <Image
          style={styles.vector}
          source={require('assets/vector.png')}
        />

        <Text style={styles.randomText}>It may not look like it, but this is the most important string of numbers you’ll ever have with regard to identity.
          {'\n'}{'\n'}
          This is a key. Specifically, it’s YOUR key. Everything you do via the SELF ID app will happen as an abstraction from this hash. Think of it as your DNA.
          {'\n'}{'\n'}
          You’ll need to write this down on a piece of paper (do NOT keep a digital copy)
        </Text>

        <View style={styles.bottumButton}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('androidfif')}
          >
            <Image
              style={styles.nextPageButton}
              source={require('assets/setupCode.png')}
            />
          </TouchableOpacity>


          <View style={{ height: 8.28 }}></View>
          <TouchableOpacity
             onPress={() => props.navigation.navigate('androidseventeen')}
          >
            <Image
              style={styles.nextPageButton}
              source={require('assets/skipCodeContinue.png')}
            />
          </TouchableOpacity>

          <View style={{ height: 45.07 }}></View>
        </View>


      </ImageBackground>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  bottumButton: {
    flexDirection: "column",
    alignItems: "center",
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: "100%"
  },
  vector: {
    alignSelf: "center",
    height: 3,
    width: 320,
    marginTop: 25,
  },
  randomText: {
    paddingLeft: 48,
    paddingRight: 48,
    color: "#7E8490",
    marginTop: 30,
    textAlign: "center",
    fontWeight: "400",
    fontSize: 14,
    fontFamily: "Gilroy-Regular"
  },
  address: {
    color: "#0B0E39",
    marginTop: 15,
    paddingRight: 78,
    paddingLeft: 78,
    textAlign: "center",
    fontSize: 17,
    fontFamily: "Gilroy-Regular"
  },
  menuBar: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  hemIcon: {
    marginTop: 53.24,
    marginRight: 20,
    width: 16.63,
    height: 12.76,
  },
  tinyLogo: {
    marginTop: 30,
    marginLeft: 20,
    width: 57.36,
    height: 57.36,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
  nextPageButton: {
    width: 285.08,
    height: 47.72
  }
});

HomeScreen.propTypes = {
  example: PropTypes.number
};

HomeScreen.defaultProps = {
  example: 5
};

export default HomeScreen;
