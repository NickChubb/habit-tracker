import React, { FunctionComponent as Component, useState } from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView, TextInput, Switch, StyleSheet  } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color, spacing, typography, topbar } from "../../theme"
import { T } from "ramda"
import RNPickerSelect from 'react-native-picker-select';
import { act } from "react-test-renderer"

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
    padding: 20,
    marginTop: 4
}
const SECTION_TITLE: ViewStyle = {
    ...TEXT,
    marginBottom: 16
}
const EXPERIENCE_SECTION: ViewStyle = {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between"
}
const INPUT: ViewStyle = {
    padding: 10,
    fontSize: 16,
    backgroundColor: "#F1F1F1",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#EAEAEA"
}
const NOTES_INPUT: ViewStyle = {
    ...INPUT,
    maxHeight: 120,
    minHeight: 80,
    marginTop: 4
}
const TIME_INPUT_SECTION: ViewStyle = {
    flexDirection: "row",
    backgroundColor: "#F1F1F1",
    borderRadius: 4,
    alignItems: "flex-end"
}
const TIME_INPUT: ViewStyle = {
    ...INPUT,
    width: "100%",
    flex: 20
}
const TIME_TEXT: ViewStyle = {
    ...BOLD,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#F1F1F1",
    flex: 8,
    textAlign: "right"
}
const ADD_BUTTON: ViewStyle = {
    fontSize: 16,
    padding: 8
}
const BUTTON_TEXT: ViewStyle = {
    ...BOLD,
    padding: 8,
    color: "#fff",
    fontSize: 16
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

let experienceCalculator = function(time: string): string {

    let int_time = parseInt(time);

    if(isNaN(int_time)){
        return "Enter a value";
    }else{
        return String(int_time * 100);
    }
};

//const onChange = textValue => 

export const AddScreen: Component = observer(function AddScreen() {

    const navigation = useNavigation();
    const [time, setTime] = useState("");

    return(
        
        <View testID="AddScreen" style={FULL}>
            <Text style={topbar}>Add an Activity</Text>

            <View style={SECTION}>
                <Text style={SECTION_TITLE}>Enter a New Activity:</Text>
                <TextInput style={INPUT} placeholder="Title..." />
                <TextInput style={NOTES_INPUT} multiline placeholder="Notes... (Optional)" />
            </View>

            <View style={SECTION}> 
                <Text style={SECTION_TITLE}>How long did it take you to complete?</Text>
                <View style={TIME_INPUT_SECTION}>
                    <TextInput style={TIME_INPUT} placeholder="5..." onChangeText={(time) => setTime(time)} defaultValue={time} />
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
                <View style={EXPERIENCE_SECTION} testID="ExperienceCalculator">
                    <Text style={TEXT}>Experience to be Gained:</Text>
                    <Text style={BOLD}> {experienceCalculator(time)}</Text>
                </View> 

                <View style={ADD_BUTTON}>
                    <Button text="Add Activity" textStyle={BUTTON_TEXT}/>
                </View>

                <View style={EXPERIENCE_SECTION}>
                    <Text style={TEXT}>Make Daily?</Text>
                    <Switch></Switch>
                    <Text style={TEXT}>Priority:</Text>
                    <Text>🔥🔥🔥</Text>
                </View>
            </View>
            
            
        </View>
    );
});