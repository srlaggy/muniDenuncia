import React, { useState } from "react";
import {Text, View, StyleSheet, TextInput, Image} from "react-native";
import { Button, Appbar } from 'react-native-paper';
import Steps from '../components/wizard/Steps';
import StepsState from '../components/wizard/context/stepsState';

const Form = ({navigation, route}) => {
    const { itemFunction, itemImage } = route.params;
    const [titulo, setTitulo] = useState();
    const [descripcion, setDescripcion] = useState('');
    return (
        <View style={styles.fondo}>
            <Appbar.Header style={{backgroundColor: "#C4E5F5", elevation: 0, shadowOpacity: 0}}>
                <Appbar.BackAction onPress={() => navigation.navigate('Functions')} />
                {/* <Appbar.Content title="Formulario"/> */}
            </Appbar.Header>
            {/* WIZARD */}
            <StepsState>
                <Steps routes={routes} num={2}/>
            </StepsState>

            <Text style={styles.title}>
                Describir reporte  
            </Text>
            
            <View style={{flexDirection:'row'}}>
                <Image style={{marginHorizontal: '10%',marginBottom: "5%",}} source={itemImage}/>
                <Text style={{marginHorizontal: '10%',marginBottom: "5%", fontSize: 15}}>{itemFunction}</Text>
            </View>

            <TextInput 
                style={styles.emergencia} 
                placeholder="Título Emergencia" 
                onChangeText={(val) => setTitulo(val)}
            />

            <TextInput
                style={[styles.emergencia, styles.emergencia2]}
                multiline = {true}
                numberOfLines={10}
                placeholder="¿Cuál es su emergencia?"
                onChangeText={(val) => setDescripcion(val)}

            />

            <Button style={styles.ActBoton} mode="contained" onPress={() => navigation.navigate('Form2', {
                itemFunction2: itemFunction,
                itemImage2: itemImage,
                titulo2: titulo,
                descripcion2: descripcion
                })}>
                Publicar
            </Button>
        </View>
    );
};

const routes = [
    {
        title: 'Categoria',
    },
    {
        title: 'Descripcion',
    },
    {
        title: 'Confirmacion',
    },
];

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