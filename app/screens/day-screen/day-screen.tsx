import React, { FunctionComponent as Component } from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView, FlatList } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color, spacing, typography, topbar } from "../../theme"
import moment from "moment"

// Styling
const FULL: ViewStyle = { flex: 1 }
const LIST_ITEM: ViewStyle = {
    backgroundColor: "#fff",
    fontWeight: "bold",
    marginTop: 5,
    padding: 20,
    textAlign: "center"
}
const LIST_TITLE: ViewStyle = {
    color: "#555555",
    fontSize: 18,
    fontWeight: "bold"
}
const LIST_LEVEL: ViewStyle = {
    alignItems: 'center',
    color: "#555555",
    fontSize: 18
}
const LIST_LEVEL_NUM: ViewStyle = {
    ...LIST_LEVEL,
    fontWeight: "bold"
}
const LIST_EXPERIENCE: ViewStyle = {
    color: "#555555",
    flex: 1
}

// Current Date using moment.js
const DATE = moment(new Date()).format("MMMM Do, YYYY")

const TODO = [
    {
        id: 0,
        title: "Meditate 10 Minutes",
        skill: "Mindfulness",
        experience: 500,
        priority: 3
    },
    {
        id: 1,
        title: "Read a Chapter",
        skill: "Mindfulness",
        experience: 500,
        priority: 2
    },
    {
        id: 2,
        title: "Cook Breakfast",
        skill: "Cooking",
        experience: 500,
        priority: 0
    }
]

function Todo({todo}){
    return(
        <View style={LIST_ITEM}>
            <View style={{flexDirection: "row", margin: 3, justifyContent: "space-between"}}>
                <Text style={LIST_TITLE}>{todo.title}</Text>
                <Text style={LIST_LEVEL}>Level: <Text style={LIST_LEVEL_NUM}>{todo.priority}</Text></Text>
            </View>
            <View style={{flexDirection: "row", margin: 3}}>
                <Text style={LIST_EXPERIENCE}>Experience: {todo.experience}</Text>
                
            </View>
        </View>
    );
}

const deleteItem = (id) => {
    setItems(prevItems => {
        return prevItems.filter(item => item.id != id);
    });
}

export const DayScreen: Component = observer(function DayScreen() {
    const navigation = useNavigation();

    return(
        <View testID="DayScreen" style={FULL}>
            

            <Text style={topbar}>{ DATE }</Text>

            <FlatList
                data={TODO}
                renderItem={({item}) => <Todo todo={item} />}
            />

            <Text style={LIST_TITLE}>
                Completed:
            </Text>
        </View>
    );
});