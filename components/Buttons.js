import React from "react";
import {Text, TouchableOpacity, StyleSheet} from "react-native";

export function ActionButton(props) {

    const {opcion, onPress} = props
    return(
        <TouchableOpacity onPress = {onPress} style={styles.ActBoton}>
                <Text style={styles.buttonText}>{opcion}</Text>                
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    ActBoton: {
        alignSelf: 'center',
        borderRadius: 10,
        paddingVertical: 15,
        width: '65%',
        backgroundColor: "#BF7B41",
        marginVertical: 10,

    },
    buttonText: {
        textAlign: 'center',
        fontSize: 24,
    }
})