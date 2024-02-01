import React, { startTransition } from "react";
import { Text, SafeAreaView, StyleSheet, View, Image } from "react-native";
import {Card} from '@rneui/themed'

const HomeScreen = ()=>{
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headercontainer}>
            <Image source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
            }} style={styles.image}>
            </Image>

            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Bienvenido de nuevo usuario</Text>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headercontainer:{
        backgroundColor:"#63a4ff",
        height:50,
        justifyContent:"center",
        alignItems:"flex-end",
        paddingLeft:12,
        paddingRight:12
    },
    image:{
        width:35,
        height:35
    },
    content:{
        flex:1,
        //backgroundColor:"black"
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        fontSize:30
    }

})

export default HomeScreen;