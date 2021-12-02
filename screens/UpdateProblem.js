import React from "react";
import {Text, View, StyleSheet} from "react-native";
import { Button, Appbar } from 'react-native-paper';

const ReadProblem = ({navigation}) => {
    return (
        <View style={styles.fondo}>
            <Appbar.Header style={{backgroundColor: "#C4E5F5", elevation: 0, shadowOpacity: 0}}>
                <Appbar.BackAction onPress={() => navigation.navigate('MyProblems')} />
            </Appbar.Header>
            <Text style={styles.title}>HOLA</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 48,
        color: "#BF7B41",
        textAlign: "center",
        marginTop: "25%",
        marginBottom: "15%",
    },
    subtitle: {
        fontSize: 24,
        color: "black",
        textAlign: "center",
        marginBottom: "5%",
    },
    fondo: {
        backgroundColor: "#C4E5F5",
        flex: 1,
        alignItems: "center",
    },
    boton: {
        width: "50%",
        height: "7%",
        justifyContent: "center",
        backgroundColor: "#E6AF80",
        marginTop: "35%",
    },
});

export default ReadProblem;