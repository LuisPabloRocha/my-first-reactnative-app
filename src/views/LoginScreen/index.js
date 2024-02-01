import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet, Image, Alert} from "react-native";

const LoginScreen = ({navigation}) => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const handleSignInPress =()=>{
        if(user.trim().length && password.trim().length >0){
            if(user === "user" && password === "password"){
                navigation.navigate("Home");
            }else{
                Alert.alert("Error","El usuario y contraseña son incorrectos");
                setPassword("");
                setUser("");
            }
        }
    };

    const handleUserTextChange =(text )=> setUser(text);
    const handlePasswordTextChange=(text) => setPassword(text);
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Image source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
            }} style={styles.image}>
            </Image>
            </View>
            <View style={styles.inputsContainer} >
                <TextInput placeholder="user" style={styles.textInput} 
                onChangeText={handleUserTextChange}
                value={user}></TextInput>
                <TextInput placeholder="password" style={styles.textInput} 
                secureTextEntry 
                onChangeText={handlePasswordTextChange}
                value={password}></TextInput>
            </View>
           <Button style={styles.button} title="Sign In" onPress={handleSignInPress}>
            </Button> 
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        marginLeft:18,
        marginRight:18
    },
    imageContainer:{
        marginTop:10,
        marginBottom:10,
    },
    image:{
        width:70,
        height:70,
        alignSelf:"center"
    },
    textInput:{
        backgroundColor:"#ffff",
        padding: 6,
        marginBottom:6,
        marginTop:4,
        fontSize:16
    },
    button:{
        backgroundColor: "#19723"
    }
});

export default LoginScreen;