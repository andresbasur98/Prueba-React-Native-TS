import React from 'react'
import { View, StyleSheet, Text } from 'react-native'




export const SumissionItem = ({sumissionItem}: any) => {

    console.log(sumissionItem)

    return (
        <View style={{marginLeft: 10, marginBottom: 10}}>
            <Text>Submission {sumissionItem.index}</Text>
            <View style={{marginLeft: 10}}>
                <Text>{sumissionItem.name}</Text>
                <Text>{sumissionItem.surname}</Text>
                <Text>{sumissionItem.age}</Text>
            </View>
        </View>
    )
}


