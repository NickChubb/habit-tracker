import React, { FunctionComponent as Component } from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color, spacing, typography, topbar } from "../../theme"
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'


const FULL: ViewStyle = { flex: 1 }

export const CalendarScreen: Component = observer(function CalendarScreen() {
    const navigation = useNavigation();

    return(
        <View testID="CalendarScreen" style={FULL}>
            
            <Text style={topbar}>Calendar</Text>

            < Calendar />

        </View>
    );
});