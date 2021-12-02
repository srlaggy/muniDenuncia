import React, {useState, useEffect} from "react";
import {Text, SafeAreaView, StyleSheet, TextInput, View, Image} from "react-native";
import { Button, Appbar } from 'react-native-paper';
import Steps from '../components/wizard/Steps';
import StepsState from '../components/wizard/context/stepsState';
import AwesomeAlert from 'react-native-awesome-alerts';
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";

const Form2 = ({navigation, route}) => {
    const { itemFunction2, itemImage2, titulo2, descripcion2} = route.params;
    const [alert, setAlert] = useState(false);

    const showAlert = () => {
        setAlert(true);
    }

    const hideAlert = () => {
        setAlert(false);
        navigation.navigate('Actions');
    }

    return (
        <SafeAreaView style={styles.fondo}>
            <Appbar.Header style={{backgroundColor: "#C4E5F5", elevation: 0, shadowOpacity: 0}}>
                <Appbar.BackAction onPress={() => navigation.navigate('Form', {itemFunction: itemFunction2, itemImage: itemImage2})} />
                {/* <Appbar.Content title="Formulario"/> */}
            </Appbar.Header>
            {/* WIZARD */}
            <StepsState>
                <Steps routes={routes} num={3}/>
            </StepsState>
            
            <Text style={styles.title}>
                Describir reporte  
            </Text>

            <View style={styles.titleImage}>
                <Image style={{margin: "5%", marginLeft: '10%', marginRight: "2%"}} source={itemImage2}/>
                <Text style={{fontSize: 19, margin: 0}}>{itemFunction2}</Text>
            </View>

            <Text style={styles.emergencia} >{titulo2}</Text>
            <Text style={[styles.emergencia, styles.emergencia2]}>{descripcion2}</Text>

            <View style={styles.buttonContainer}>
                <Button style={[styles.ActBoton, styles.cancel]} mode="contained" onPress={() => navigation.navigate('Form', {itemFunction: itemFunction2, itemImage: itemImage2})}>
                    <Text style={{color: "#7A7777"}}>Cancelar</Text>
                </Button>
                <Button style={styles.ActBoton} mode="contained" onPress={showAlert}>
                    Confirmar
                </Button>
            </View>

            <AwesomeAlert
                show={alert}
                showProgress={true}
                title="Reporte Publicado"
                closeOnTouchOutside={true}
                showConfirmButton={true}
                confirmText="Ir al inicio"
                confirmButtonColor="#024772"
                onConfirmPressed={hideAlert}
                onDismiss={hideAlert}
            />
        </SafeAreaView>
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
        backgroundColor: '#ECECEC',
        marginBottom: 15,
        fontSize: 17,
        borderWidth: 1,
        borderColor: "#BFBFBF",
        color: "#6A6A6A",
    },
    emergencia2: {
        height: "25%",
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