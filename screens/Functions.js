import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { Button, Appbar } from 'react-native-paper';

const Function = ({navigation}) => {
    const [items, setItems] = React.useState([
        { name: 'Emergencia de Seguridad', code: '#E6AF80', icon: require("../icons/security3.png")},
        { name: 'Corte de Luz', code: '#E6AF80', icon: require("../icons/trafficlight.png")},
        { name: 'Actividad Sospechosa', code: '#E6AF80', icon: require("../icons/thief.png")},
        { name: 'Aviso Comunitario', code: '#E6AF80', icon: require("../icons/campaign.png")},
    ]);

    return (
        <View style={styles.fondo}>
            <Appbar.Header style={{backgroundColor: "#024772"}}>
                <Appbar.BackAction onPress={() => navigation.navigate('Actions')} />
                <Appbar.Content title="Funciones"/>
            </Appbar.Header>

            {/* WIZARD */}
            <Button mode="contained" onPress={() => navigation.navigate('Actions')}>
                WIZARD
            </Button>

            {/* TÍTULO REPORTE */}
            <Text style={styles.subtitle}>
                Reportes
            </Text>

            {/* ICONOS */}
            <FlatGrid
                itemDimension={130}
                data={items}
                style={styles.gridView}
                // staticDimension={300}
                // fixed
                spacing={10}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('Form')}>
                        <View style={styles.itemContainerImage}>
                            <Image source={item.icon} />
                        </View>
                        <View style={styles.itemContainerFunction}>
                            <Text style={styles.itemName}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />

        </View>
        );
    }

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 25,
        color: "black",
        textAlign: "left",
        marginBottom: "5%",
        marginTop: "5%",
        marginLeft: "5%",
    },
    fondo: {
        backgroundColor: "#C4E5F5",
        flex: 1,
        // alignItems: "center",
    },
    container_gris: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#B1A5A5",
        opacity: 0.5,
        marginTop: "5%",
        marginBottom: "10%",
        marginLeft: "5%",
        alignItems: "center",
        marginRight: "5%",
    },
    /** */
    gridView: {
        marginTop: 10,
        flex: 1,
    },
    ////////////////////////
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        height: 150,
        backgroundColor: '#E6AF80',
        padding: 5,
    },
    itemContainer2: {
        justifyContent: 'flex-end',
        height: "100%",
        alignItems: "center",
    },
    itemContainerImage: {
        justifyContent: 'flex-end',
        height: "65%",
        alignItems: "center",
    },
    itemContainerFunction: {
        marginTop: "5%",
        height: "35%",
    },
    ////////////////////////
    itemName: {
        fontSize: 16,
        color: '#00212D',
        fontWeight: '600',
        textAlign: 'center',
    },
});

export default Function;