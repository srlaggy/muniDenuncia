import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";
import { Button, Appbar } from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';

const ReadProblem = ({navigation,route}) => {
    const {icon, titleFunction, title, Description, StateProblem} = route.params;
    return (
        <LinearGradient
            colors={['#c4e5f5', '#81cbee', '#0982bd']}
            style={styles.fondo}
            start={{ x: 0.3, y: 0.4 }}
            end={{ x: 1, y: 1 }}
        >
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

            <Text style= {styles.textcontainer2}>
                Estado: {StateProblem}
            </Text>

            <Button style={styles.boton} mode="contained" onPress={() => navigation.navigate('ReadComments', route.params)}>
                Leer comentarios
            </Button>
        </LinearGradient>
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
        borderRadius: 8
    },
    textcontainer2: {
        padding: 10,
        marginHorizontal: '10%',
        height: '10%',
        backgroundColor: '#ECECEC',
        marginBottom: 15,
        fontSize: 17,
        borderWidth: 1,
        borderColor: "#BFBFBF",
        color: "#6A6A6A",
        borderRadius: 8
    },
    boton: {
        alignSelf: "center",
        borderRadius: 10,
        paddingVertical: 15,
        width: '50%',
        backgroundColor: "#024772",
        marginVertical: 10,
    },
});

export default ReadProblem;