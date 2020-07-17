import React, { FunctionComponent as Component } from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView, FlatList } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color, spacing, typography, topbar } from "../../theme"
import moment from "moment"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

// Styling
const FULL: ViewStyle = { flex: 1 }
const LIST_ITEM: ViewStyle = {
    backgroundColor: "#fff",
    fontWeight: "bold",
    marginTop: 5,
    flexDirection: "row",
    padding: 10
}
const LIST_TEXT: ViewStyle = {
    textAlign: "center",
    flex: 10
}
const CHECK: ViewStyle = {
    color: "#555555",
    fontSize: 40,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    flex: 2
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
            <View style={CHECK}>
                <FontAwesomeIcon icon={ faCheck } size="26" />
            </View>
            <View style={LIST_TEXT}>
                <View style={{flexDirection: "row", margin: 3, justifyContent: "space-between"}}>
                    <Text style={LIST_TITLE}>{todo.title}</Text>
                </View>
                <View style={{flexDirection: "row", margin: 3, justifyContent: "space-between"}}>
                    <Text style={LIST_EXPERIENCE}>Experience: {todo.experience}</Text>
                    <Text style={LIST_EXPERIENCE}>Priority: <Text style={LIST_LEVEL_NUM}>{("🔥").repeat(todo.priority)}</Text></Text>
                </View>
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