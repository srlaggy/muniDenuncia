import React from "react";
import {Text, SafeAreaView, StyleSheet, TextInput, View} from "react-native";
import { Button, Appbar } from 'react-native-paper';

const Form2 = ({navigation, route}) => {
    const { itemFunction2, itemImage2, titulo2, descripcion2} = route.params;
    return (
        <SafeAreaView style={styles.fondo}>
            <Appbar.Header style={{backgroundColor: "#024772"}}>
                <Appbar.BackAction onPress={() => navigation.navigate('Form')} />
                <Appbar.Content title="Formulario"/>
            </Appbar.Header>
            
            <Text style={styles.title}>
                Describir reporte  
            </Text>
            <Text style={{marginHorizontal: '10%',marginBottom: "5%", fontSize: 15}}>  {itemFunction2}</Text>

            <Text style={styles.emergencia} >{titulo2}</Text>

            <Text style={[styles.emergencia, styles.emergencia2]}>{descripcion2}</Text>

            <View style={styles.buttonContainer}>
                <Button style={[styles.ActBoton, styles.cancel]} mode="contained" onPress={() => navigation.navigate('Form', {itemFunction: itemFunction2, itemImage: itemImage2})}>
                <Text style={{color: "#BBBBBB"}}>Cancelar</Text>
                </Button>
                <Button style={styles.ActBoton} mode="contained" onPress={() => alert('Publicado')}>
                    Confirmar
                </Button>
            </View>
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
        marginTop: "15%",
        marginBottom: "15%",
    },
    ActBoton: {
        alignSelf: 'flex-end',
        borderRadius: 10,
        paddingVertical: 15,
        width: '40%',
        backgroundColor: "#024772",
        //marginRight: '10%',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "#024772",
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
    },
    buttonContainer: {
        flexDirection:'row',
        justifyContent:'space-around',
        marginHorizontal: '10%',
    },
    cancel: {
        backgroundColor: "#FFFF",
        borderColor: "#BBBBBB",
    }
});

export default Form2;