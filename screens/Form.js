import React, { useState } from "react";
import {Text, View, StyleSheet, TextInput, Image} from "react-native";
import { Button, Appbar } from 'react-native-paper';
import Steps from '../components/wizard/Steps';
import StepsState from '../components/wizard/context/stepsState';
import {LinearGradient} from 'expo-linear-gradient';

const Form = ({navigation, route}) => {
    const { itemFunction, itemImage } = route.params;
    const [titulo, setTitulo] = useState();
    const [descripcion, setDescripcion] = useState('');
    return (
        <LinearGradient
            colors={['#c4e5f5', '#81cbee', '#0982bd']}
            style={styles.fondo}
            start={{ x: 0.3, y: 0.4 }}
            end={{ x: 1, y: 1 }}
        >
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
            
            <View style={styles.titleImage}>
                <Image style={{margin: "5%", marginLeft: '10%', marginRight: "2%"}} source={itemImage}/>
                <Text style={{fontSize: 19, margin: 0}}>{itemFunction}</Text>
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
        </LinearGradient>
    );
};

const routes = [
    {
        title: 'Categoría',
    },
    {
        title: 'Descripción',
    },
    {
        title: 'Confirmación',
    },
];

const styles = StyleSheet.create({
    fondo: {
        backgroundColor: "#C4E5F5",
        flex: 1,
    },
    title: {
        fontSize: 28,
        color: "black",
        textAlign: "center",
        marginTop: "5%",
        marginBottom: "2%",
    },
    titleImage: {
        alignItems: "center",
        flexDirection: "row",
    },
    ActBoton: {
        alignSelf: 'center',
        borderRadius: 10,
        paddingVertical: 15,
        width: '40%',
        backgroundColor: "#024772",
        marginVertical: 10,
    },
    emergencia: {
        padding: 10,
        fontSize: 17,
        marginHorizontal: '10%',
        height: '10%',
        backgroundColor: '#FFFF',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#BFBFBF",
        borderRadius: 8
    },
    emergencia2: {
        height: "25%",
    }
});

export default Form;