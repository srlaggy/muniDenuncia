import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";
import { Button, Appbar } from 'react-native-paper';

const ReadProblem = ({navigation, route}) => {
    const {icon, titleFunction, title, Description} = route.params;
    return (
        <View style={styles.fondo}>
            <Appbar.Header style={{backgroundColor: "#C4E5F5", elevation: 0, shadowOpacity: 0}}>
                <Appbar.BackAction onPress={() => navigation.navigate('MyProblems')} />
            </Appbar.Header>

            <Text style={styles.subtitle}>
                {title}
            </Text>

            <View style={styles.titleImage}>
                <Image style={{margin: "5%", marginLeft: '10%', marginRight: "2%"}} source={icon}/>
                <Text style={{fontSize: 19, margin: 0}}>{titleFunction}</Text>
            </View>

            <Text style={styles.textContainer}>
                {title}
                {"\n\n"}
                {Description}
            </Text>

            <Button style={styles.boton} mode="contained" onPress={() => navigation.navigate('UpdateComment', route.params)}>
                Comentar
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 28,
        color: "black",
        textAlign: "center",
        marginBottom: "5%",
        marginTop: "5%",
    },
    fondo: {
        backgroundColor: "#C4E5F5",
        flex: 1,
    },
    titleImage: {
        alignItems: "center",
        flexDirection: "row",
    },
    textContainer: {
        padding: 10,
        marginHorizontal: '10%',
        height: '30%',
        backgroundColor: '#ECECEC',
        marginBottom: 15,
        fontSize: 17,
        borderWidth: 1,
        borderColor: "#BFBFBF",
        color: "#6A6A6A",
    },
    boton: {
        alignSelf: "center",
        borderRadius: 10,
        paddingVertical: 15,
        width: '40%',
        backgroundColor: "#024772",
        marginVertical: 10,
    },
});

export default ReadProblem;