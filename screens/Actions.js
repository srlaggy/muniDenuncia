import React from "react";
import {Text, SafeAreaView, StyleSheet} from "react-native";
import { Button, Appbar } from 'react-native-paper';

const Actions = ({navigation}) => {
    return (
        <SafeAreaView style={styles.fondo}>
            <Appbar.Header style={{backgroundColor: "#BF7B41"}}>
                <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
                <Appbar.Content title="Acciones"/>
            </Appbar.Header>
            <Text style={styles.title}>
                Elija una acción   
            </Text>
            <Button style={styles.ActBoton} mode="contained" onPress={() => navigation.navigate('Functions')}>
                Ingresa Problema
            </Button>
            <Button style={styles.ActBoton} mode="contained" onPress={() => alert('Disponible en la próxima implementación')}>
                Mis reportes
            </Button>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    fondo: {
        backgroundColor: "#C4E5F5",
        flex: 1,
    },
    title: {
        fontSize: 36,
        color: "black",
        textAlign: "center",
        marginTop: "25%",
        marginBottom: "15%",
    },
    ActBoton: {
        alignSelf: 'center',
        borderRadius: 10,
        paddingVertical: 15,
        width: '65%',
        backgroundColor: "#BF7B41",
        marginVertical: 10,

    },
});

export default Actions;