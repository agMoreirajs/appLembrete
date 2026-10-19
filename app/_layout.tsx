import { StyleSheet} from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

export default function RootLayoutLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}} />
            <Stack.Screen name="list" options={{headerShown: false}} />
        </Stack>

    )
}

const styles = StyleSheet.create({
})