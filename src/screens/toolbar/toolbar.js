import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet, ImageBackground, Image } from "react-native";
/**
 * ? Local Imports
 */
import colors from "colors";

const Toolbar = props => {


    useEffect(() => {

    }, []);


    return (
        <View style={styles.menuBar}>
            <Image
                style={styles.tinyLogo}
                source={require('assets/circle.png')}
            />
            <Image
                style={styles.hemIcon}
                source={require('assets/hemIcon.png')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
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
});

Toolbar.propTypes = {
    example: PropTypes.number
};

Toolbar.defaultProps = {
    example: 5
};

export default Toolbar;
