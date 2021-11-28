import React from "react";
import {Text, SafeAreaView, StyleSheet, TextInput} from "react-native";
import { Button, Appbar } from 'react-native-paper';
import { useForm } from "react-hook-form";

const Form = ({navigation}) => {
    return (
        <SafeAreaView style={styles.fondo}>
            <Appbar.Header style={{backgroundColor: "#024772"}}>
                <Appbar.BackAction onPress={() => navigation.navigate('Functions')} />
                <Appbar.Content title="Formulario"/>
            </Appbar.Header>
            {/* WIZARD */}
            <Button style={styles.boton} mode="contained" onPress={() => navigation.navigate('Actions')}>
                WIZARD
            </Button>

            <Text style={styles.title}>
                Describir reporte  
            </Text>

            <TextInput style={styles.emergencia} placeholder="Título Emergencia"/>

            <TextInput style={[styles.emergencia, styles.emergencia2]} multiline = {true} numberOfLines={10} placeholder="¿Cuál es su emergencia?" />

            <Button style={styles.ActBoton} mode="contained" onPress={() => alert('Disponible en la próxima implementación')}>
                Publicar
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
        alignSelf: 'flex-end',
        borderRadius: 10,
        paddingVertical: 15,
        width: '40%',
        backgroundColor: "#024772",
        marginRight: '10%',
        marginVertical: 10,

    },
    emergencia: {
        padding: 10,
        marginHorizontal: '10%',
        height: '10%',
        backgroundColor: '#FFFF',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#BFBFBF",
    },
    emergencia2: {
        height: "30%",
    }
});

export default Form;