import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Start from './screens/Start';

export default function App() {
    return (
        <Start nombre={"Marta"} apellido={"Muñoz"}/>
    );
}
