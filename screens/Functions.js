import React, { useContext } from 'react';
import Steps from '../components/wizard/Steps';
import StepsState from '../components/wizard/context/stepsState';
import { StyleSheet, SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { Button, Appbar } from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';

const Function = ({navigation}) => {
    const [items, setItems] = React.useState([
        { name: 'Emergencia de Seguridad', code: '#E6AF80', icon: require("../icons/security.png")},
        { name: 'Corte de Luz', code: '#E6AF80', icon: require("../icons/trafficlight.png")},
        { name: 'Actividad Sospechosa', code: '#E6AF80', icon: require("../icons/thief.png")},
        { name: 'Aviso Comunitario', code: '#E6AF80', icon: require("../icons/campaign.png")},
    ]);

    return (
        <LinearGradient
            colors={['#c4e5f5', '#81cbee', '#0982bd']}
            style={styles.fondo}
            start={{ x: 0.3, y: 0.4 }}
            end={{ x: 1, y: 1 }}
        >
            <Appbar.Header style={{backgroundColor: "#C4E5F5", elevation: 0, shadowOpacity: 0}}>
                <Appbar.BackAction onPress={() => navigation.navigate('Actions')} />
                {/* <Appbar.Content title="Reportes"/> */}
            </Appbar.Header>

            {/* WIZARD */}
            <StepsState>
                <Steps routes={routes} num={1}/>
            </StepsState>

            {/* TÍTULO REPORTE */}
            <Text style={styles.subtitle}>
                Reportes
            </Text>

            {/* ICONOS */}
            <FlatGrid
                itemDimension={130}
                data={items}
                style={styles.gridView}
                spacing={10}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.itemContainer}
                        onPress={() => {
                            navigation.navigate('Form', {itemFunction: item.name, itemImage: item.icon})
                        }}
                    >
                        <View style={styles.itemContainerImage}>
                            <Image source={item.icon} />
                        </View>
                        <View style={styles.itemContainerFunction}>
                            <Text style={styles.itemName}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </LinearGradient>
    );
}

const routes = [
    {
        title: 'Categoría',
    },
    {
        title: 'Descripción',
    },
    {
        title: 'Confirmación',
    },
];

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
        // alignItems: "center",
    },
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