import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { Button} from 'react-native-paper';

const Function = ({navigation}) => {
    const [items, setItems] = React.useState([
        { name: 'Emergencia de Seguridad', code: '#E6AF80', icon: "../icons/security3.png"},
        { name: 'Corte de Luz', code: '#E6AF80', icon: "../icons/security3.png"}, /* #2ecc71 */
        { name: 'Actividad Sospechosa', code: '#E6AF80', icon: "../icons/security3.png"}, /**#3498db */
        { name: 'Aviso Comunitario', code: '#E6AF80', icon: "../icons/security3.png"}, /**#9b59b6 */
    ]);

    return (
        <View style={styles.fondo}>

            {/* WIZARD */}
            <Button style={styles.boton} mode="contained" onPress={() => navigation.navigate('Actions')}>
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
                        <View style={styles.itemContainer2}>
                            {/* <Image size={80} source={require(item.icon)} /> */}
                            <Image size={80} source={require("../icons/security3.png")} />
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
    boton: {
        width: "80%",
        backgroundColor: "#024772",
        marginTop: "5%",
        // align: "center",
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
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        height: 150,
        backgroundColor: '#E6AF80',
    },
    itemContainer2: {
        justifyContent: 'flex-end',
        height: 150,
        alignItems: "center",
        padding: "7%"
    },
    itemName: {
        fontSize: 16,
        color: '#00212D',
        fontWeight: '600',
        textAlign: 'center',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
});

export default Function;