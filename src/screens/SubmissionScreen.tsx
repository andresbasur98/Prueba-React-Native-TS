import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { SumissionItem } from '../components/SumissionItem'


export const SubmissionScreen = () => {

    const { submissions } = useSelector((state: any) => state.submissions)
    console.log(submissions)

    return (
        <View style={styles.submissionContainer}>
            <View>
                <FlatList
                    data={submissions}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item, index }) => <SumissionItem sumissionItem={{ ...item, index }} />}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    submissionContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
