import React, { FunctionComponent as Component } from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView, FlatList} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color, spacing, typography, topbar } from "../../theme"
import { iteratorSymbol } from "mobx/lib/internal"
import * as Progress from 'react-native-progress'
import AsyncStorage from "@react-native-community/async-storage"

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
    marginLeft: 2,
    color: "#555555",
    flex: 1
}

// SKILLS is the object of the users experience in each life skill
const SKILLS = [
    {
        id: 0,
        name: "Cleaning",
        experience: 620
    },
    {
        id: 1,
        name: "Cooking",
        experience: 100
    },
    {
        id: 2,
        name: "Mindfulness",
        experience: 350
    },
    {
        id: 3,
        name: "Hygiene",
        experience: 700
    }
]


let levelCalculator = (exp) => {
    return exp / 1000;
}

function Skill({skill}){
    return(
        <View style={LIST_ITEM}>
            <View style={{flexDirection: "row", margin: 3, justifyContent: "space-between"}}>
                <Text style={LIST_TITLE}>{skill.name}</Text>
                <Text style={LIST_LEVEL}>Level: <Text style={LIST_LEVEL_NUM}>{Math.floor(levelCalculator(skill.experience))}</Text></Text>
            </View>
            <View style={{flexDirection: "row", margin: 3}}>
                <Text style={LIST_EXPERIENCE}>{skill.experience} / 1000</Text>
                <Progress.Bar progress={skill.experience / 1000} height={16} width={250}/>
            </View>
        </View>
    );
}

export const SkillsScreen: Component = observer(function SkillsScreen() {
    const navigation = useNavigation();

    return(
        <View testID="SkillsScreen" style={FULL}>
            
            <Text style={topbar}>Skills</Text>

            <FlatList 
                data={SKILLS}
                renderItem={({item}) => <Skill skill={item} />}
            />
                

        </View>
    );
});