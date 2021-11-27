import React from "react";
import {Text, View, StyleSheet} from "react-native";
import { Button, Avatar } from 'react-native-paper';

const Start = ({navigation}) => {
    return (
        <View style={styles.fondo}>
            <Text style={styles.title}>
                MuniAyuda
            </Text>
            <Text style={styles.subtitle}>
                Bienvenida
            </Text>
            <Avatar.Image size={150} source={require('../assets/marta.png')} />
            <Text style={styles.subtitle}>
                Marta Muñoz
            </Text>
            <Button style={styles.boton} mode="contained" onPress={() => navigation.navigate('Actions')}>
                Ingresar
            </Button>
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
        flex: 1,
        alignItems: "center",
    },
    boton: {
        width: "40%",
        backgroundColor: "#BF7B41",
        marginTop: "40%",
    },
});

export default Start;