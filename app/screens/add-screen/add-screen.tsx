import React, { FunctionComponent as Component } from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView, TextInput, StyleSheet  } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color, spacing, typography, topbar } from "../../theme"
import { T } from "ramda"
import RNPickerSelect from 'react-native-picker-select';

const FULL: ViewStyle = { 
    flex: 1
}
const TEXT: ViewStyle = {
    color: "#555555",
    fontSize: 18
}
const BOLD: ViewStyle = {
    ...TEXT,
    fontWeight: "bold"
}
const SECTION: ViewStyle = {
    backgroundColor: "#fff",
    padding: 10,
    marginTop: 4
}
const SECTION_TITLE: ViewStyle = {
    ...TEXT,
    marginBottom: 4
}
const INPUT: ViewStyle = {
    padding: 10,
    fontSize: 16
}
const TIME_TEXT: ViewStyle = {
    ...BOLD,
    padding: 10,
    fontSize: 16
}
const ADD_BUTTON: ViewStyle = {
    fontSize: 16,
    padding: 8
}
const SKILL_PICKER = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });

// SKILLS is the object of the users experience in each life skill
const SKILLS = [
    {
        value: 0,
        label: "Cleaning",
        experience: 620
    },
    {
        value: 1,
        label: "Cooking",
        experience: 100
    },
    {
        value: 2,
        label: "Mindfulness",
        experience: 350
    },
    {
        value: 3,
        label: "Hygiene",
        experience: 700
    }
]



let experienceCalculator = function(time: number): number {
    return time * 100;
};

let activityTime = 5;

//const onChange = textValue => 

export const AddScreen: Component = observer(function AddScreen() {
    const navigation = useNavigation();

    return(
        <View testID="AddScreen" style={FULL}>
            <Text style={topbar}>Add an Activity</Text>

            <View style={SECTION}>
                <Text style={SECTION_TITLE}>Enter a New Activity</Text>
                <TextInput style={INPUT} placeholder="Add item..." />
            </View>

            <View style={SECTION}> 
                <Text style={SECTION_TITLE}>How long did it take you to complete?</Text>
                <View style={{flexDirection: "row"}}>
                    <TextInput style={INPUT} placeholder="5..." />
                    <Text style={TIME_TEXT}>Minutes</Text>
                </View>
            </View>

            <View style={SECTION}>  
                <Text style={SECTION_TITLE}>What skill does this activity fall under?</Text>
                <RNPickerSelect 
                    style={SKILL_PICKER}
                    onValueChange={(value) => console.log(value)}
                    items={SKILLS}
                />
            </View>

            <View style={SECTION}>
                <View testID="ExperienceCalculator" style={{flexDirection: "row"}}>
                    <Text style={TEXT}>Experience:</Text>
                    <Text style={BOLD}> {experienceCalculator(activityTime)}</Text>
                </View> 

                <View style={ADD_BUTTON}>
                    <Button text="Add Activity" textStyle={ADD_BUTTON}/>
                </View>
            </View>
            
            
        </View>
    );
});