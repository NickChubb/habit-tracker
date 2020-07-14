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
const INPUT: ViewStyle = {
    height: 60,
    padding: 8,
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

            <View>
                <Text style={TEXT}>Enter a New Activity</Text>
                <TextInput style={INPUT} placeholder="Add item..." />
            </View>

            <View> 
                <Text style={TEXT}>How long did it take you to complete?</Text>
                <TextInput style={INPUT} placeholder="5..." />
                <Text style={TEXT}>Minutes</Text>
            </View>

            <View>  
                <Text style={TEXT}>What skill does this activity fall under?</Text>
                <RNPickerSelect 
                    style={SKILL_PICKER}
                    onValueChange={(value) => console.log(value)}
                    items={SKILLS}
                />
            </View>

            <View testID="ExperienceCalculator" style={{flexDirection: "row"}}>
                <Text style={TEXT}>Experience:</Text>
                <Text style={BOLD}> {experienceCalculator(activityTime)}</Text>
            </View> 

            <View style={ADD_BUTTON}>
                <Button text="Add Activity" textStyle={ADD_BUTTON}/>
            </View>
            
        </View>
    );
});