import React from "react";
import {Text, View, StyleSheet} from "react-native";
import { Button, Avatar } from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';

const Start = ({navigation}) => {
    return (
        <LinearGradient
            colors={['#c4e5f5', '#81cbee', '#0982bd']}
            style={styles.fondo}
            start={{ x: 0.3, y: 0.4 }}
            end={{ x: 1, y: 1 }}
        >
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
                <Text style={{fontSize: 18}}>
                    Ingresar
                </Text>
            </Button>
        </LinearGradient>
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
        flex: 1,
        alignItems: "center",
    },
    boton: {
        width: "50%",
        height: "7%",
        justifyContent: "center",
        backgroundColor: "#E6AF80",
        marginTop: "35%",
    },
});

export default Start;