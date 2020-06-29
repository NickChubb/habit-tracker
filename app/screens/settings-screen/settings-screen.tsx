import React, { FunctionComponent as Component } from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color, spacing, typography } from "../../theme"


const FULL: ViewStyle = { flex: 1 }

export const SettingsScreen: Component = observer(function SettingsScreen() {
    const navigation = useNavigation();

    return(
        <View testID="SettingsScreen" style={FULL}>
            <Wallpaper />

        </View>
    );
});