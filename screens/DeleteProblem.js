import React, {useState, useEffect} from "react";
import {Text, SafeAreaView, StyleSheet, TextInput, View, Image} from "react-native";
import { Button, Appbar } from 'react-native-paper';
import AwesomeAlert from 'react-native-awesome-alerts';
import {LinearGradient} from 'expo-linear-gradient';

const ReadProblem = ({navigation,route}) => {
    const { icon, titleFunction, title, Description} = route.params;
    const [alert, setAlert] = useState(false);
    const [deleted, setDeleted] = useState(false);

    const showAlert = () => {
        setAlert(true);
    }

    const hideAlert = () => {
        setAlert(false);
    }

    const endAlert = () => {
        setAlert(false);
        //navigation.navigate('Actions');
        setDeleted(true);

        setTimeout(() => {
            navigation.navigate('Actions');
        }, 2000);
    }

    return (
        <LinearGradient
            colors={['#c4e5f5', '#81cbee', '#0982bd']}
            style={styles.fondo}
            start={{ x: 0.3, y: 0.4 }}
            end={{ x: 1, y: 1 }}
        >
            <Appbar.Header style={{backgroundColor: "#C4E5F5", elevation: 0, shadowOpacity: 0}}>
                <Appbar.BackAction onPress={() => navigation.navigate('MyProblems')} />
                {/* <Appbar.Content title="Formulario"/> */}
            </Appbar.Header>
            
            <Text style={styles.title}>
                Eliminar Reporte 
            </Text>

            <View style={styles.titleImage}>
                <Image style={{margin: "5%", marginLeft: '10%', marginRight: "2%"}} source={icon}/>
                <Text style={{fontSize: 19, margin: 0}}>{titleFunction}</Text>
            </View>

            <Text style={styles.emergencia} >{title}</Text>
            <Text style={[styles.emergencia, styles.emergencia2]}>{Description}</Text>

            {!deleted &&
                <View style={styles.buttonContainer}>
                    <Button id="buttonDelete" style={styles.boton} disabled={deleted} mode="contained" onPress={showAlert}>
                        Eliminar
                    </Button>
                </View>
            }

            <AwesomeAlert
                show={alert}
                showProgress={true}
                title="¿Estas seguro?"
                closeOnTouchOutside={true}
                showConfirmButton={true}
                showCancelButton={true}
                confirmText="Si"
                cancelText="No"
                confirmButtonColor="#024772"
                onConfirmPressed={endAlert}
                onCancelPressed={hideAlert}
                onDismiss={hideAlert}
            />

            {deleted &&
                <View style={styles.containerNoti}>
                    <Text style={styles.textoNoti}>¡Reporte eliminado!</Text>
                </View>
            }

    </LinearGradient>
    );
};

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
        borderRadius: 8
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
    },
    boton: {
        alignSelf: "center",
        borderRadius: 10,
        paddingVertical: 15,
        width: '40%',
        backgroundColor: "#024772",
        marginVertical: 10,
    },
    containerNoti: {
        marginVertical: 10,
        // borderWidth: 1,
        marginHorizontal: "17%",
        paddingVertical: "3%",
        borderRadius: 20,
        backgroundColor: "rgba(206,206,208,0.7)",
    },
    textoNoti: {
        fontSize: 20,
        textAlign: "center",
        color: "#5D5D5D",
    }
});

export default ReadProblem;