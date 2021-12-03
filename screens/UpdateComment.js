import React, {useState} from "react";
import {Text, View, StyleSheet, TextInput} from "react-native";
import { Button, Appbar } from 'react-native-paper';
import AwesomeAlert from 'react-native-awesome-alerts';

const UpdateComment = ({navigation, route}) => {
    const [comment, setComment] = useState("");
    const [alert, setAlert] = useState(false);
    const [actualizado, setActualizado] = useState(false);

    const showAlert = () => {
        setAlert(true);
    }

    const hideAlert = () => {
        setAlert(false);
    }

    const endAlert = () => {
        setAlert(false);
        setActualizado(true);

        setTimeout(() => {
            navigation.navigate('Actions');
        }, 2000);
    }

    return (
        <View style={styles.fondo}>
            <Appbar.Header style={{backgroundColor: "#C4E5F5", elevation: 0, shadowOpacity: 0}}>
                <Appbar.BackAction onPress={() => navigation.navigate('UpdateProblem', route.params)} />
            </Appbar.Header>

            <View style={styles.container}>
                <Text style={styles.subtitle}>
                    Comentario
                </Text>

                <TextInput
                    style={styles.comment}
                    multiline = {true}
                    numberOfLines={10}
                    placeholder="Ingrese un comentario al Reporte"
                    onChangeText={(val) => setComment(val)}
                />

                <Button style={styles.boton} mode="contained" onPress={showAlert}>
                    Publicar
                </Button>

                <AwesomeAlert
                    show={alert}
                    showProgress={true}
                    title="¿Estas seguro?"
                    closeOnTouchOutside={true}
                    showConfirmButton={true}
                    showCancelButton={true}
                    confirmText="Aceptar"
                    cancelText="Cancelar"
                    confirmButtonColor="#024772"
                    onConfirmPressed={endAlert}
                    onCancelPressed={hideAlert}
                    onDismiss={hideAlert}
                />

                {actualizado &&
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.chao}>¡Comentario actualizado!</Text>
                    </View>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    },
    title: {
        fontSize: 28,
        color: "black",
        textAlign: "center",
        marginTop: "5%",
        marginBottom: "2%",
    },
    subtitle: {
        fontSize: 28,
        color: "black",
        textAlign: "left",
        marginBottom: "5%",
        marginTop: "5%",
        marginLeft: 5,
    },
    fondo: {
        backgroundColor: "#C4E5F5",
        flex: 1,
    },
    comment: {
        padding: 10,
        fontSize: 17,
        backgroundColor: '#FFFF',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#BFBFBF",
        height: "40%",
    },
    boton: {
        alignSelf: "center",
        borderRadius: 10,
        paddingVertical: 15,
        width: '40%',
        backgroundColor: "#024772",
        marginVertical: 10,
    },
    chao: {
        fontSize: 28,
        textAlign: "center",
        marginTop: "5%",
        marginBottom: "2%",
        color: "#E6AF80"
    },
});

export default UpdateComment;