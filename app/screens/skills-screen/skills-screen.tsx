import React, { FunctionComponent as Component } from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color, spacing, typography } from "../../theme"


const FULL: ViewStyle = { flex: 1 }

// SKILLS is the object of the users experience in each life skill
const SKILLS = {
    mindfulness: 0,
    hygiene: 0,
    cleaning: 0,
    cooking: 0,
    exercise: 0
}

export const SkillsScreen: Component = observer(function SkillsScreen() {
    const navigation = useNavigation();

    return(
        <View testID="SkillsScreen" style={FULL}>
            

            

        </View>
    );
});