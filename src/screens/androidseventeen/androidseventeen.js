import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet, ImageBackground, Image } from "react-native";
/**
 * ? Local Imports
 */
import colors from "colors";
import Toolbar from "../toolbar/toolbar"
const AndroidSevent = props => {


  useEffect(() => {

  }, []);


  return (
    <View style={styles.container}>
      <ImageBackground source={require('assets/backgroundImage.png')} style={styles.image}>

        <Toolbar></Toolbar>

        <Text style={styles.address}>SIGN IN WITH YOUR SELF</Text>
        <Text style={styles.requestfrom}>Request from</Text>

        <Image
          style={styles.vectorTop}
          source={require('assets/vector.png')}
        />

        <Text style={styles.randomText}>P L A T F O R M  X
        </Text>

        <Image
          style={styles.vector}
          source={require('assets/vector.png')}
        />

        <View style={styles.bottumButton}>
          <Image
            style={styles.nextPageButton}
            source={require('assets/deny.png')}
          />
          <View style={{ height: 8.28 }}></View>
          <Image
            style={styles.allowaccess}
            source={require('assets/allowaccess.png')}
          />
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
  vectorTop: {
    alignSelf: "center",
    height: 3,
    width: 320,
    marginTop: 40,
  },
  randomText: {
    paddingLeft: 48,
    paddingRight: 48,
    color: "#0B0E39",
    marginTop: 90,
    marginBottom: 60,
    textAlign: "center",
    fontWeight: "400",
    fontSize: 20,
    fontFamily: "Gilroy-Regular"
  },
  address: {
    color: "#0B0E39",
    marginTop: 20,
    paddingRight: 78,
    paddingLeft: 78,
    textAlign: "center",
    fontSize: 17,
    fontFamily: "Gilroy-Regular"
  },
  requestfrom: {
    color: "#7E8490",
    marginTop: 10,
    paddingRight: 78,
    paddingLeft: 78,
    textAlign: "center",
    fontSize: 14,
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
    backgroundColor: "#000000a0",
    fontFamily: "Gilroy-Regular"
  },
  nextPageButton: {
    width: 285.08,
    height: 47.72
  },
  allowaccess: {
    width: 345,
    height: 78.72
  }
});

AndroidSevent.propTypes = {
  example: PropTypes.number
};

AndroidSevent.defaultProps = {
  example: 5
};

export default AndroidSevent;
