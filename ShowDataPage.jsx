import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const ShowDataPage = ({ route }) => {
    const [redirectData, setRedirectData] = useState();
    useEffect(() => {
        if (route.params.mobileNumber) {
            setRedirectData(route.params.mobileNumber);
        } else if (route.params.fullName) {
            setRedirectData(route.params.fullName);
        } else if (route.params.pincode) {
            setRedirectData(route.params.pincode);
        }
    }, [route])

    return (
        <View>
            <Text style={{ color: "black", fontSize: 40 }}>{redirectData} related all data:</Text>
        </View>
    )
}


const styles = StyleSheet.create({})
export default ShowDataPage