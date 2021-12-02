import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";
import { Button, Appbar } from 'react-native-paper';

const MyProblems = ({navigation}) => {
    return (
        <View style={styles.fondo}>
            <Appbar.Header style={{backgroundColor: "#C4E5F5", elevation: 0, shadowOpacity: 0}}>
                <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
            </Appbar.Header>
            <Text style={styles.title}>
                Mis reportes  
            </Text>
            {/* Primer Problema */}
            <View style={styles.rowproblems}>
                {/* ReadProblem */}
                <Button style={styles.ActBoton} mode="contained" onPress={() => navigation.navigate('ReadProblem', {
                    icon: require("../icons/security.png"), 
                    titleFunction: "Emergencia de Seguridad",
                    title: "Disturbios",
                    Description: "Discusiones en la calle Viana entre transeúntes todas las noches",
                    StateProblem: "En proceso"
                    })}>
                    Disturbios
                </Button>
                {/* UpdateProblem */}
                <Button onPress={() => navigation.navigate('UpdateProblem', {
                    icon: require("../icons/security.png"), 
                    titleFunction: "Emergencia de Seguridad",
                    title: "Disturbios",
                    Description: "Discusiones en la calle Viana entre transeúntes todas las noches",
                    })}>
                    <Image style={{margin: "5%"}} source={require("../icons/change.png")}/>
                </Button>
                {/* DeleteProblem */}
                <Button onPress={() => navigation.navigate('DeleteProblem', {
                    icon: require("../icons/security.png"), 
                    titleFunction: "Emergencia de Seguridad",
                    title: "Disturbios",
                    Description: "Discusiones en la calle Viana entre transeúntes todas las noches",
                    })}>
                    <Image style={{margin: "5%"}} source={require("../icons/delete.png")}/>
                </Button>
            </View>

            {/* Segundo Problema */}
            <View style={styles.rowproblems}>
                {/* ReadProblem */}
                <Button style={styles.ActBoton} mode="contained" onPress={() => navigation.navigate('ReadProblem', {
                    icon: require("../icons/security.png"), 
                    titleFunction: "Emergencia de Seguridad",
                    title: "Robos constantes",
                    Description: "Transeúntes roban constantemente dentro de los autos en la calle 5 oriente.",
                    StateProblem: "Solucionado"
                    })}>
                    Robos constantes
                </Button>
                {/* UpdateProblem */}
                <Button onPress={() => navigation.navigate('UpdateProblem', {
                    icon: require("../icons/security.png"), 
                    titleFunction: "Emergencia de Seguridad",
                    title: "Robos constantes",
                    Description: "Transeúntes roban constantemente dentro de los autos en la calle 5 oriente.",
                    })}>
                    <Image style={{margin: "5%"}} source={require("../icons/change.png")}/>
                </Button>
                {/* DeleteProblem */}
                <Button onPress={() => navigation.navigate('DeleteProblem', {
                    icon: require("../icons/security.png"), 
                    titleFunction: "Emergencia de Seguridad",
                    title: "Robos constantes",
                    Description: "Transeúntes roban constantemente dentro de los autos en la calle 5 oriente.",
                    })}>
                    <Image style={{margin: "5%"}} source={require("../icons/delete.png")}/>
                </Button>
            </View>
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
        width: '55%',
        backgroundColor: "#E6AF80",
        marginVertical: 10,

    },
    rowproblems: {
        marginLeft: "5%",
        flexDirection: "row",
    },
});

export default MyProblems;