import React, { FunctionComponent as Component } from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView, FlatList} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color, spacing, typography, topbar } from "../../theme"


const FULL: ViewStyle = { flex: 1 }

// SKILLS is the object of the users experience in each life skill
const SKILLS = [
    {
        name: "Cleaning",
        experience: 0
    },
    {
        name: "Cooking",
        experience: 0
    },
    {
        name: "Mindfulness",
        experience: 0
    },
    {
        name: "Hygiene",
        experience: 0
    }
]

export const SkillsScreen: Component = observer(function SkillsScreen() {
    const navigation = useNavigation();

    return(
        <View testID="SkillsScreen" style={FULL}>
            
            <Text style={topbar}>Skills</Text>
            
            <FlatList 
                data={SKILLS}
                renderItem={({item}) => <Text>{SKILLS.name}</Text>}
            />
                

        </View>
    );
});