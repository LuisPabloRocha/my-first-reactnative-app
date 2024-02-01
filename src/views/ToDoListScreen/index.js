import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, Button, StyleSheet, SafeAreaView, FlatList } from "react-native";

const ToDoListScreen = () => {
    const [todoListData, setToDoListData] = useState([]);
    const [todoText, setTodoText] = useState("");
    const handleChangeText = (text) => {
        setTodoText(text);
    };

    const handleButtonPress = () => {
        if (todoText.trim().length > 0) {
            setToDoListData((value) => value.concat({ text: todoText }));
            setTodoText("");
        }
    };
    const handleRenderListItem = ({ item }) => {
        return <Text>{item.text}</Text>
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.ViewContainer}>
                <View>
                    <TextInput placeholder="Escribe tu palabra"
                        style={styles.textInput}
                        placeholderTextColor="#c4c4c4"
                        value={todoText}
                        onChangeText={handleChangeText} />
                    <Button title="Enter" style={styles.button} onPress={handleButtonPress} />
                </View>
                <View>
                    <FlatList data={todoListData}
                        renderItem={handleRenderListItem}
                        keyExtractor={(item) => item.text}>
                    </FlatList>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    ViewContainer:{
        flex: 1,
        backgroundColor: "#fffbfb",
        paddingTop: 10,
        paddingBottom: 16,
        paddingLeft: 12,
        paddingRight: 12
    },
    container: {
        flex: 1,
        backgroundColor: "#fffbfb",
        paddingTop: 10,
        paddingBottom: 16,
        paddingLeft: 12,
        paddingRight: 12
    },
    textInput: {
        backgroundColor: "#f5f5f5",
        color: "#212121",
        fontSize: 20,
        marginBottom: 16,
        padding: 10
    }
});
export default ToDoListScreen;