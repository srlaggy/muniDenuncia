import React from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";
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
                <TouchableOpacity style={styles.ActBotonIcon} onPress={() => navigation.navigate('UpdateProblem', {
                    ...data.reporte1, icon: require("../icons/security.png")
                    })}>
                    <Image source={require("../icons/change2.png")}/>
                </TouchableOpacity>
                {/* DeleteProblem */}
                <TouchableOpacity style={styles.ActBotonIcon} onPress={() => navigation.navigate('DeleteProblem', {
                    ...data.reporte1, icon: require("../icons/security.png")
                    })}>
                    <Image source={require("../icons/delete2.png")}/>
                </TouchableOpacity>
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
                <TouchableOpacity style={styles.ActBotonIcon} onPress={() => navigation.navigate('UpdateProblem', {
                    ...data.reporte2, icon: require("../icons/security.png")
                    })}>
                    <Image source={require("../icons/change2.png")}/>
                </TouchableOpacity>
                {/* DeleteProblem */}
                <TouchableOpacity style={styles.ActBotonIcon} onPress={() => navigation.navigate('DeleteProblem', {
                    ...data.reporte2, icon: require("../icons/security.png")
                    })}>
                    <Image source={require("../icons/delete2.png")}/>
                </TouchableOpacity>
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
        marginBottom: "10%",
    },
    ActBoton: {
        alignSelf: 'center',
        borderRadius: 10,
        paddingVertical: 15,
        width: '55%',
        backgroundColor: "#E6AF80",
        marginTop: 15,

    },
    rowproblems: {
        alignContent: "center",
        marginLeft: "10%",
        flexDirection: "row",
    },
    ActBotonIcon: {
        alignSelf: 'center',
        borderRadius: 10,
        paddingVertical: 15,
        width: '10%',
        marginTop: 15,
        marginLeft: "5%",
    },
});

export default MyProblems;