import React, { FunctionComponent as Component } from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color, spacing, typography } from "../../theme"
import moment from "moment"


const FULL: ViewStyle = { flex: 1 }
const TOPBAR: ViewStyle = {
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 60,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#555555"
}

const DATE = moment(new Date()).format("MMMM Do, YYYY")

export const DayScreen: Component = observer(function DayScreen() {
    const navigation = useNavigation();

    return(
        <View testID="DayScreen" style={FULL}>
            

            <Text style={TOPBAR}>{ DATE }</Text>
        </View>
    );
});