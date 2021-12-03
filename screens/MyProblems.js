import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";
import { Button, Appbar } from 'react-native-paper';

const MyProblems = ({navigation}) => {
    const data = require("../data/reportes.json");
    return (
        <View style={styles.fondo}>
            <Appbar.Header style={{backgroundColor: "#C4E5F5", elevation: 0, shadowOpacity: 0}}>
                <Appbar.BackAction onPress={() => navigation.navigate('Actions')} />
            </Appbar.Header>
            <Text style={styles.title}>
                Mis reportes  
            </Text>
            {/* Primer Problema */}
            <View style={styles.rowproblems}>
                {/* ReadProblem */}
                <Button style={styles.ActBoton} mode="contained" onPress={() => navigation.navigate('ReadProblem', {
                    ...data.reporte1, icon: require("../icons/security.png")
                    })}>
                    Disturbios
                </Button>
                {/* UpdateProblem */}
                <Button onPress={() => navigation.navigate('UpdateProblem', {
                    ...data.reporte1, icon: require("../icons/security.png")
                    })}>
                    <Image style={{margin: "5%"}} source={require("../icons/change.png")}/>
                </Button>
                {/* DeleteProblem */}
                <Button onPress={() => navigation.navigate('DeleteProblem', {
                    ...data.reporte1, icon: require("../icons/security.png")
                    })}>
                    <Image style={{margin: "5%"}} source={require("../icons/delete.png")}/>
                </Button>
            </View>

            {/* Segundo Problema */}
            <View style={styles.rowproblems}>
                {/* ReadProblem */}
                <Button style={styles.ActBoton} mode="contained" onPress={() => navigation.navigate('ReadProblem', {
                    ...data.reporte2, icon: require("../icons/security.png")
                    })}>
                    Robos constantes
                </Button>
                {/* UpdateProblem */}
                <Button onPress={() => navigation.navigate('UpdateProblem', {
                    ...data.reporte2, icon: require("../icons/security.png")
                    })}>
                    <Image style={{margin: "5%"}} source={require("../icons/change.png")}/>
                </Button>
                {/* DeleteProblem */}
                <Button onPress={() => navigation.navigate('DeleteProblem', {
                    ...data.reporte2, icon: require("../icons/security.png")
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