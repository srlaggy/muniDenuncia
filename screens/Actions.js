import React from "react";
import {Text, SafeAreaView, StyleSheet} from "react-native";
import { ActionButton } from "../components/Buttons";

const Actions = ({navigation}) => {
    return (
        <SafeAreaView style={styles.fondo}>
            <Text style={styles.title}>
                Elija una acción   
            </Text>
            <ActionButton onPress={() => navigation.navigate('Functions')} opcion="Ingresa Problema"/>
            <ActionButton onPress={() => navigation.navigate('Home')} opcion="Mis reportes"/>
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
});

export default Actions;
