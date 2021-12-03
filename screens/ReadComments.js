import React from "react";
import {Text, View, StyleSheet, Image, FlatList} from "react-native";
import { Button, Appbar } from 'react-native-paper';

const ReadComments = ({navigation, route}) => {
    const {title, comments} = route.params;
    const listItems = comments.map((comment) =>  <Text style={styles.textcontainer2}>{comment}</Text>);
    return (
        <View style={styles.fondo}>
            <Appbar.Header style={{backgroundColor: "#C4E5F5", elevation: 0, shadowOpacity: 0}}>
                <Appbar.BackAction onPress={() => navigation.navigate('ReadProblem', route.params)} />
            </Appbar.Header>

            <Text style={styles.subtitle}>
                {title}
            </Text>

            <View style={styles.titleImage}>
                <Text style={{fontSize: 19, marginHorizontal: '10%'}}>Comentarios</Text>
            </View>

            <View>
            {listItems}
            </View>

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
        flexDirection: "row",
        marginBottom: "5%",
    },
    textcontainer2: {
        padding: 10,
        marginHorizontal: '10%',
        height: '20%',
        backgroundColor: '#ECECEC',
        marginBottom: 15,
        fontSize: 17,
        borderWidth: 1,
        borderColor: "#BFBFBF",
        color: "#6A6A6A",
    },
});

export default ReadComments;