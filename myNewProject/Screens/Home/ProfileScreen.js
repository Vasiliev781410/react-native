 
import React, { useState } from "react";
import { Text, View, StyleSheet} from 'react-native';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text>Профіль</Text>
        </View>                               
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
    },
});