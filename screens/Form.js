import React from "react";
import {Text, SafeAreaView, StyleSheet} from "react-native";
import { Button } from 'react-native-paper';

const Form = ({navigation}) => {
    return (
        <SafeAreaView style={styles.fondo}>
            <Text style={styles.title}>
                Elija una acción   
            </Text>
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

export default Form;