import React, { FunctionComponent as Component } from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color, spacing, typography } from "../../theme"
import moment from "moment"


const FULL: ViewStyle = { flex: 1 }

const DATE = moment(new Date()).format("MMMM Do, YYYY")

export const DayScreen: Component = observer(function DayScreen() {
    const navigation = useNavigation();

    return(
        <View testID="DayScreen" style={FULL}>
            <Wallpaper />

            <Text>{ DATE }</Text>
        </View>
    );
});