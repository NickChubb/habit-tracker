import React, { FunctionComponent as Component } from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView, TextInput  } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color, spacing, typography, topbar } from "../../theme"


const FULL: ViewStyle = { flex: 1 }
const INPUT: ViewStyle = {
    height: 60,
    padding: 8,
    fontSize: 16
}

//const onChange = textValue => 

export const AddScreen: Component = observer(function AddScreen() {
    const navigation = useNavigation();

    return(
        <View testID="AddScreen" style={FULL}>
            <Text style={topbar}>Add an Activity</Text>

            <TextInput style={INPUT} placeholder="Add item..." />
        </View>
    );
});