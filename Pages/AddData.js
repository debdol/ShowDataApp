import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'

const AddData = () => {
    return (
        <View>
            <View>
                <TextInput placeholder='Address' style={styles.inputStyle} onChangeText={(e) => setInputeValue(e)} />
                <TextInput placeholder='pincode' style={styles.inputStyle} onChangeText={(e) => setInputeValue(e)} />
                <TextInput placeholder='latitude' style={styles.inputStyle} onChangeText={(e) => setInputeValue(e)} />
                <TextInput placeholder='longitude' style={styles.inputStyle} onChangeText={(e) => setInputeValue(e)} />
                <TextInput placeholder='escalation' style={styles.inputStyle} onChangeText={(e) => setInputeValue(e)} />
                <TextInput placeholder='mobile Number' style={styles.inputStyle} onChangeText={(e) => setInputeValue(e)} />
            </View>
        </View>
    )
}

export default AddData

const styles = StyleSheet.create({})