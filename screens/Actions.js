import React from "react";
import {Text, View, StyleSheet} from "react-native";
import { Button, Appbar } from 'react-native-paper';

const Actions = ({navigation}) => {
    return (
        <View style={styles.fondo}>
            <Appbar.Header style={{backgroundColor: "#C4E5F5", elevation: 0, shadowOpacity: 0}}>
                <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
            </Appbar.Header>
            <Text style={styles.title}>
                Elija una acción   
            </Text>
            <Button style={styles.ActBoton} mode="contained" onPress={() => navigation.navigate('Functions')}>
                Ingresa Problema
            </Button>
            <Button style={styles.ActBoton} mode="contained" onPress={() => navigation.navigate('MyProblems')}>
                Mis reportes
            </Button>
        </View>
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
        backgroundColor: "#E6AF80",
        marginVertical: 10,

    },
});

export default Actions;