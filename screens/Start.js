import React from "react";
import {Text, View, StyleSheet} from "react-native";

const Start = (props) => {
    return (
        <View style={styles.fondo}>
            <Text style={styles.title}>
                MuniAyuda
            </Text>
            <Text style={styles.subtitle}>
                Bienvenida
            </Text>
            <Text style={styles.subtitle}>
                {props.nombre} {props.apellido}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 48,
        color: "#BF7B41",
        textAlign: "center",
        marginTop: "25%",
        marginBottom: "15%",
    },
    subtitle: {
        fontSize: 24,
        color: "black",
        textAlign: "center",
        marginBottom: "5%",
    },
    fondo: {
        backgroundColor: "#C4E5F5",
    },
});

export default Start;