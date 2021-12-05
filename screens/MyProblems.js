import React from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";
import { Button, Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LinearGradient} from 'expo-linear-gradient';

const MyProblems = ({navigation}) => {
    const data = require("../data/reportes.json");
    return (
        <LinearGradient
            colors={['#c4e5f5', '#81cbee', '#0982bd']}
            style={styles.fondo}
            start={{ x: 0.3, y: 0.4 }}
            end={{ x: 1, y: 1 }}
        >
            <Appbar.Header style={{backgroundColor: "#C4E5F5", elevation: 0, shadowOpacity: 0}}>
                <Appbar.BackAction onPress={() => navigation.navigate('Actions')} />
            </Appbar.Header>
            
            <Text style={styles.title}>
                Mis reportes
            </Text>

            {/* Primer Problema */}
            <View style={styles.rowproblems}>
                <Text style={styles.subtitle}>
                    Disturbios
                </Text>
                <View style={styles.containerIcons}>
                    {/* ReadProblem */}
                    <TouchableOpacity style={styles.ActBotonIcon} onPress={() => navigation.navigate('ReadProblem', {
                        ...data.reporte1, icon: require("../icons/security.png")
                    })}>
                        <Icon name="eye" size={20} color="#024772"/>
                    </TouchableOpacity>
                    {/* UpdateProblem */}
                    <TouchableOpacity style={styles.ActBotonIcon} onPress={() => navigation.navigate('UpdateProblem', {
                        ...data.reporte1, icon: require("../icons/security.png")
                    })}>
                        <Icon name="pencil" size={20} color="#024772"/>
                    </TouchableOpacity>
                    {/* DeleteProblem */}
                    <TouchableOpacity style={styles.ActBotonIcon} onPress={() => navigation.navigate('DeleteProblem', {
                        ...data.reporte1, icon: require("../icons/security.png")
                        })}>
                    <Icon name="trash" size={20} color="#024772"/>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Segundo Problema */}
            <View style={styles.rowproblems}>
                <Text style={styles.subtitle}>
                Robos constantes
                </Text>
                <View style={styles.containerIcons}>
                    {/* ReadProblem */}
                    <TouchableOpacity style={styles.ActBotonIcon} onPress={() => navigation.navigate('ReadProblem', {
                        ...data.reporte2, icon: require("../icons/security.png")
                        })}>
                        <Icon name="eye" size={20} color="#024772"/>
                    </TouchableOpacity>
                    {/* UpdateProblem */}
                    <TouchableOpacity style={styles.ActBotonIcon} onPress={() => navigation.navigate('UpdateProblem', {
                        ...data.reporte2, icon: require("../icons/security.png")
                        })}>
                        <Icon name="pencil" size={20} color="#024772"/>
                    </TouchableOpacity>
                    {/* DeleteProblem */}
                    <TouchableOpacity style={styles.ActBotonIcon} onPress={() => navigation.navigate('DeleteProblem', {
                        ...data.reporte2, icon: require("../icons/security.png")
                        })}>
                        <Icon name="trash" size={20} color="#024772"/>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
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
    subtitle: {
        fontSize: 24,
        color: "black",
        textAlign: "center",
    },
    containerIcons: {
        flexDirection: "row",
        justifyContent: 'flex-end',
    },
    rowproblems: {
        alignItems: "center",
        alignContent: "center",
        marginHorizontal: "5%",
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "space-between",
        borderBottomWidth: 1,
        paddingBottom: "1%",
        marginBottom: "5%",
        borderColor: "#024772",
    },
    ActBotonIcon: {
        marginHorizontal: "4%",
    },
});

export default MyProblems;