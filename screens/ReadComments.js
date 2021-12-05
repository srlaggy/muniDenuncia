import React from "react";
import {Text, View, StyleSheet, Image, FlatList} from "react-native";
import { Button, Appbar } from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';

const ReadComments = ({navigation, route}) => {
    const {title, comments} = route.params;
    return (
        <LinearGradient
            colors={['#c4e5f5', '#81cbee', '#0982bd']}
            style={styles.fondo}
            start={{ x: 0.3, y: 0.4 }}
            end={{ x: 1, y: 1 }}
        >
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
                {comments.map((comment, i) =>
                    <Text style={styles.textcontainer2} key={i}>
                        {comment}
                    </Text>
                )}
            </View>

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
        borderRadius: 8
    },
});

export default ReadComments;