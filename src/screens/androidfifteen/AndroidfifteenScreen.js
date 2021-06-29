import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";
import { FlatGrid } from 'react-native-super-grid';
import colors from "colors";
import Toolbar from "../toolbar/toolbar"
const AndroidFif = props => {

  const [data, setData] = React.useState({
    Itemname: [{ "name": "TREE", "selected": false }, { "name": "BENCH", "selected": false }, { "name": "KETCHUP", "selected": false }, { "name": "DOG", "selected": false }, { "name": "EGG", "selected": false }, { "name": "DOG", "selected": false }, { "name": "TREE", "selected": false }, { "name": "BENCH", "selected": false }, { "name": "KETCHUP", "selected": false }, { "name": "DOG", "selected": false }, { "name": "EGG", "selected": false }, { "name": "DOG", "selected": false }, { "name": "TREE", "selected": false }, { "name": "BENCH", "selected": false }, { "name": "KETCHUP", "selected": false }, { "name": "DOG", "selected": false }, { "name": "EGG", "selected": false }, { "name": "DOG", "selected": false },]
  });


  useEffect(() => {

  }, []);

  const selectitem = (item, index) => {
    console.log("item", item);
    var newArray = data.Itemname;
    item.selected = !item.selected;
    newArray[index] = item;
    setData({
      ...data,
      Itemname: newArray,
    });
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('assets/backgroundImage.png')} style={styles.image}>

        <Toolbar></Toolbar>


        <FlatGrid
          style={styles.grid}
          data={data.Itemname}
          spacing={10}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => selectitem(item, index)}
            >
              <View
                style={[styles.roundedview, { borderColor: item.selected == true ? "#17202A" : "#B3B6B7" }]}
              >
                <Text style={{ textAlign: "center", color: "#656D81" }}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />


        <View style={styles.bottumButton}>
          <Text style={styles.randomText}>Please write each of these words in the exact order that you see them here. This is the ONLY way you will be able to recover your key
          </Text>
          <View style={{ height: 23.07 }}></View>
          <Image
            style={styles.nextPageButton}
            source={require('assets/create.png')}
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
  grid: {
    marginTop: 25.78,
    marginLeft: 5, marginRight: 5
  },
  bottumButton: {
    flexDirection: "column",
    alignItems: "center",
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: "100%"
  },
  roundedview: {
    // width: 150,
    justifyContent: "center",
    height: 37.4,
    borderColor: '#656D81',
    borderWidth: 1,
    borderRadius: 6
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
    marginTop: 10,
    paddingRight: 78,
    paddingLeft: 78,
    textAlign: "center",
    fontSize: 15,
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
    width: 400,
    height: 85
  }
});

AndroidFif.propTypes = {
  example: PropTypes.number
};

AndroidFif.defaultProps = {
  example: 5
};

export default AndroidFif;
