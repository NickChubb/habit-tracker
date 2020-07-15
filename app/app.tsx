/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app or storybook.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigation, so head over there
 * if you're interested in adding screens and navigators.
 */
import "./i18n"
import "./utils/ignore-warnings"
import React, { useState, useEffect, useRef, FunctionComponent as Component } from "react"
import { NavigationContainerRef, NavigationContainer, TabActions } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, initialWindowSafeAreaInsets } from "react-native-safe-area-context"
import * as storage from "./utils/storage"
import {
  useBackButtonHandler,
  RootNavigator,
  canExit,
  setRootNavigation,
  useNavigationPersistence,
} from "./navigation"
import { RootStore, RootStoreProvider, setupRootStore } from "./models"
import {DayScreen, SkillsScreen, SettingsScreen, CalendarScreen, AddScreen} from "./screens"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faCheck, faChartBar, faPlusCircle, faCalendarCheck, faCog } from "@fortawesome/free-solid-svg-icons"
import { View } from "react-native"

// This puts screens in a native ViewController or Activity. If you want fully native
// stack navigation, use `createNativeStackNavigator` in place of `createStackNavigator`:
// https://github.com/kmagiera/react-native-screens#using-native-stack-navigator
import { enableScreens } from "react-native-screens"
enableScreens()

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE"

const Tab = createBottomTabNavigator();

/**
 * This is the root component of our app.
 */
const App: Component<{}> = () => {
  const navigationRef = useRef<NavigationContainerRef>()
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined)

  // Kick off initial async loading actions, like loading fonts and RootStore
  useEffect(() => {
    ;(async () => {
      setupRootStore().then(setRootStore)
    })()
  }, [])

  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything. This will be the background
  // color set in native by rootView's background color. You can replace
  // with your own loading component if you wish.
  if (!rootStore) return null

  // otherwise, we're ready to render the app
  return (
    <RootStoreProvider value={rootStore}>
      <SafeAreaProvider initialSafeAreaInsets={initialWindowSafeAreaInsets}>
        <NavigationContainer>
          <Tab.Navigator 
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Day') {
                  iconName = focused
                    ? faCheck
                    : faCheck;
                } else if (route.name === 'Skills') {
                  iconName = focused ? faChartBar : faChartBar;
                } else if (route.name === 'Add') {
                  iconName = focused ? faPlusCircle : faPlusCircle;
                } else if (route.name === 'Calendar') {
                  iconName = focused ? faCalendarCheck : faCalendarCheck;
                } else if (route.name === 'Settings') {
                  iconName = focused ? faCog : faCog;
                }

                // You can return any component that you like here!
                return (
                  <View style={{marginTop: 14}}>
                    <FontAwesomeIcon icon={ iconName } />
                  </View>
                );
              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}>
            <Tab.Screen name="Day" component={DayScreen}/>
            <Tab.Screen name="Skills" component={SkillsScreen}/>
            <Tab.Screen name="Add" component={AddScreen}/>
            <Tab.Screen name="Calendar" component={CalendarScreen}/>
            <Tab.Screen name="Settings" component={SettingsScreen}/>            
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </RootStoreProvider>
  )
}

export default App
