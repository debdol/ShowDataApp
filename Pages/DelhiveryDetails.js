import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const DelhiveryDetails = ({ route }) => {
    const Navigation = useNavigation();
    const [customerData, setCustomerData] = useState();

    useEffect(() => {
        // console.log("routes :", route.params.responce.data.length);
        setCustomerData(route.params.responce.data);
    }, [route]);
    return (
        <View style={styles.box} >
            {
                customerData ? customerData.map((item, index) => (
                    <View style={styles.box2} key={index}>
                        <Text style={styles.main}>{index + 1})</Text>
                        <Text style={styles.main}>{item.address}</Text>
                        <Text style={styles.main}>{item?.pin_code}</Text>
                        <Text style={styles.main}>{item?.pincode}</Text>
                        <Text style={styles.main}>{item?.lati}, {item?.longi}{"\n"}</Text>
                        <Text style={styles.main}>{item?.Escalation1}</Text>
                        <Text style={styles.main}>{item?.designation1}</Text>
                        <Text style={styles.main}>{item?.mobile1}{"\n"}</Text>
                        <Text style={styles.main}>{item?.Escalation2}</Text>
                        <Text style={styles.main}>{item?.designation2}</Text>
                        <Text style={styles.main}>{item?.mobile2}{"\n"}</Text>
                        <Text style={styles.main}>{item?.Escalation3}</Text>
                        <Text style={styles.main}>{item?.designation3}</Text>
                        <Text style={styles.main}>{item?.mobile3}</Text>
                    </View>
                )) : null
            }
        </View >
    )
}

export default DelhiveryDetails;

const styles = StyleSheet.create({
    main: {
        color: "black"
    },
    inputMainView: {
        height: "60%",
        flexDirection: "column",
        // justifyContent: "space-evenly"
    },
    inputStyle: {
        width: "100%",
        height: "44%",
        alignSelf: "center",
        borderRadius: 30,
        backgroundColor: "#D7E2F0",
        paddingHorizontal: 20,
        fontFamily: "Forza-Bold",
        color: "#9199AB"
    },
    SearchButton: {
        // borderWidth: 1,
        // borderColor: "red",
        width: 257,
        height: 70,
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "#2196F3",
        borderRadius: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonTxt: {
        textAlign: "center",
        fontFamily: "Forza-Bold",
        color: "#FFF",
        fontSize: 18
    },
})