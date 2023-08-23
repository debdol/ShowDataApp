import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

export const ShowDataPage = ({ route }) => {
    const [redirectData, setRedirectData] = useState();
    const [cancelledOrder, setCancelledOrder] = useState(false);
    const [rtoOrder, setRtoOrder] = useState(false);
    const [deletedOrder, setDeletedOrder] = useState(false);
    const [orders, setOrders] = useState(false);

    const [ordersData, setOrdersData] = useState();
    const [cancelledData, setCancelledData] = useState();
    const [rtoData, setRtoData] = useState();
    const [deletedData, setDeletedData] = useState();
    // console.log("deleted_order :", route.params.responce.orders[0].order_approved_time.$date);
    useEffect(() => {
        setCancelledData(route.params.responce.cancelled_orders);
        setRtoData(route.params.responce.rto_order);
        setDeletedData(route.params.responce.deleted_order);
        setOrdersData(route.params.responce.orders);
    }, [route])

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.btnMainKeyView}>
                        <Text style={styles.headingText}>Cancelled Order:</Text>
                        <TouchableOpacity onPress={() => {
                            setCancelledOrder(!cancelledOrder);
                        }} style={styles.btnStyle}>
                            <Text style={styles.btnText}>See Data</Text>
                        </TouchableOpacity>
                    </View>
                    <SafeAreaView>
                        <ScrollView>
                            <View style={{ padding: 5 }}>
                                {cancelledOrder && cancelledData ? (
                                    cancelledData.map((item, index) => {
                                        // console.log("item", item)
                                        return (
                                            <View style={styles.mapView} key={index}>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Address : </Text>
                                                    <Text style={styles.valueStyle}>{item.address}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Cancelled Time : </Text>
                                                    <Text style={styles.valueStyle}>{item.cancelled_time}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Car Model : </Text>
                                                    <Text style={styles.valueStyle}>{item.car_model}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Car Number : </Text>
                                                    <Text style={styles.valueStyle}>{item.car_number}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Cod Amount : </Text>
                                                    <Text style={styles.valueStyle}>{item.cod_amount}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Contact Number : </Text>
                                                    <Text style={styles.valueStyle}>{item.contact_number}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Courier : </Text>
                                                    <Text style={styles.valueStyle}>{item.courier}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Courier Id : </Text>
                                                    <Text style={styles.valueStyle}>{item.courier_id}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Created At : </Text>
                                                    <Text style={styles.valueStyle}>{item.created_at.$date}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Current Status Time : </Text>
                                                    <Text style={styles.valueStyle}>{item.current_status_time}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Current Status Type : </Text>
                                                    <Text style={styles.valueStyle}>{item.current_status_type}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Employee Name : </Text>
                                                    <Text style={styles.valueStyle}>{item.employee_name}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Manifest Link : </Text>
                                                    <Text style={styles.valueStyle}>{item.manifest_link}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Name : </Text>
                                                    <Text style={styles.valueStyle}>{item.name}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Order Approved Time : </Text>
                                                    <Text style={styles.valueStyle}>{item.order_approved_time.$date}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Order Created Datetime : </Text>
                                                    <Text style={styles.valueStyle}>{item.order_created_datetime.$date}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Order Id : </Text>
                                                    <Text style={styles.valueStyle}>{item.order_id}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Order Pk : </Text>
                                                    <Text style={styles.valueStyle}>{item.order_pk}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Pin Code : </Text>
                                                    <Text style={styles.valueStyle}>{item.pin_code}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Server : </Text>
                                                    <Text style={styles.valueStyle}>{item.server}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>State : </Text>
                                                    <Text style={styles.valueStyle}>{item.state}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Tracking Id : </Text>
                                                    <Text style={styles.valueStyle}>{item.tracking_id} ,</Text>
                                                </View>
                                            </ View>
                                        )
                                    })
                                ) : null
                                }
                            </View>
                        </ScrollView>
                    </SafeAreaView>

                    <View style={styles.btnMainKeyView}>
                        <Text style={styles.headingText}>RTO:</Text>
                        <TouchableOpacity onPress={() => {
                            setRtoOrder(!rtoOrder);
                        }} style={styles.btnStyle}>
                            <Text style={styles.btnText}>See Data</Text>
                        </TouchableOpacity>
                    </View>
                    <SafeAreaView>
                        <ScrollView>
                            <View style={{ padding: 5 }}>
                                {rtoOrder && rtoData ? (
                                    rtoData.map((item, index) => {
                                        return (
                                            <View style={styles.mapView} key={index}>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Address : </Text>
                                                    <Text style={styles.valueStyle}>{item.address}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Car Model : </Text>
                                                    <Text style={styles.valueStyle}>{item.car_model}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Car Number : </Text>
                                                    <Text style={styles.valueStyle}>{item.car_number}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Card Number : </Text>
                                                    <Text style={styles.valueStyle}>{item.card_number}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Contact Number : </Text>
                                                    <Text style={styles.valueStyle}>{item.contact_number}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Name : </Text>
                                                    <Text style={styles.valueStyle}>{item.name}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Order Approved Time : </Text>
                                                    <Text style={styles.valueStyle}>{item.order_approved_time}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Order Deliver Time : </Text>
                                                    <Text style={styles.valueStyle}>{item.order_delivered_time}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Pin Code: </Text>
                                                    <Text style={styles.valueStyle}>{item.pin_code}</Text>
                                                </View>
                                            </ View>
                                        )
                                    })
                                ) : null}
                            </View>
                        </ScrollView>
                    </SafeAreaView>

                    <View style={styles.btnMainKeyView}>
                        <Text style={styles.headingText}>Deleted Order:</Text>
                        <TouchableOpacity onPress={() => {
                            setDeletedOrder(!deletedOrder);
                        }} style={styles.btnStyle}>
                            <Text style={styles.btnText}>See Data</Text>
                        </TouchableOpacity>
                    </View>
                    <SafeAreaView>
                        <ScrollView style={{ padding: 5 }}>
                            <View>
                                {deletedOrder && deletedData ? (
                                    deletedData.map((item, index) => {
                                        return (
                                            <View style={styles.mapView} key={index}>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Address : </Text>
                                                    <Text style={styles.valueStyle}>{item.address}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Car Model : </Text>
                                                    <Text style={styles.valueStyle}>{item.car_model}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Car Number : </Text>
                                                    <Text style={styles.valueStyle}>{item.car_number}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Contact Number : </Text>
                                                    <Text style={styles.valueStyle}>{item.contact_number}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Delete Time : </Text>
                                                    <Text style={styles.valueStyle}>{item.delete_time}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Name : </Text>
                                                    <Text style={styles.valueStyle}>{item.name}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Pin Code : </Text>
                                                    <Text style={styles.valueStyle}>{item.pin_code}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>State : </Text>
                                                    <Text style={styles.valueStyle}>{item.state}</Text>
                                                </View>
                                            </View>
                                        )
                                    })
                                ) : null}
                            </View>
                        </ScrollView>
                    </SafeAreaView>

                    <View style={styles.btnMainKeyView}>
                        <Text style={styles.headingText}>Orders:</Text>
                        <TouchableOpacity onPress={() => {
                            setOrders(!orders);
                        }} style={styles.btnStyle}>
                            <Text style={styles.btnText}>See Data</Text>
                        </TouchableOpacity>
                    </View>
                    <SafeAreaView>
                        <ScrollView style={{ padding: 5 }}>
                            <View>
                                {orders && ordersData ? (
                                    ordersData.map((item, index) => {
                                        console.log("orders :", item.order_approved_time)
                                        return (
                                            <View style={styles.mapView} key={index}>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>Name : </Text>
                                                    <Text style={styles.valueStyle}>{item.name}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>car_number : </Text>
                                                    <Text style={styles.valueStyle}>{item.car_number}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>car_model : </Text>
                                                    <Text style={styles.valueStyle}>{item.car_model}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>contact_number : </Text>
                                                    <Text style={styles.valueStyle}>{item.contact_number}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>address : </Text>
                                                    <Text style={styles.valueStyle}>{item.address}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>cod_amount : </Text>
                                                    <Text style={styles.valueStyle}>{item.cod_amount}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>pin_code : </Text>
                                                    <Text style={styles.valueStyle}>{item.pin_code}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>order_created_datetime : </Text>
                                                    {item.order_created_datetime ? <Text style={styles.valueStyle}>{item.order_created_datetime.$date}</Text> : null}
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>courier : </Text>
                                                    <Text style={styles.valueStyle}>{item.courier}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>courier_id : </Text>
                                                    <Text style={styles.valueStyle}>{item.courier_id}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>created_at : </Text>
                                                    {item.created_at ? <Text style={styles.valueStyle}>{item.created_at.$date}</Text> : null}
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>employee_name : </Text>
                                                    <Text style={styles.valueStyle}>{item.employee_name}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>manifest_link : </Text>
                                                    <Text style={styles.valueStyle}>{item.manifest_link}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>order_approved_time : </Text>
                                                    {item.order_approved_time ? <Text style={styles.valueStyle}>{item.order_approved_time.$date}</Text> : null}
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>order_id : </Text>
                                                    <Text style={styles.valueStyle}>{item.order_id}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>order_pk : </Text>
                                                    <Text style={styles.valueStyle}>{item.order_pk}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>tracking_id : </Text>
                                                    <Text style={styles.valueStyle}>{item.tracking_id}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>current_status_time : </Text>
                                                    <Text style={styles.valueStyle}>{item.current_status_time}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>current_status_type : </Text>
                                                    <Text style={styles.valueStyle}>{item.current_status_type}</Text>
                                                </View>
                                                <View style={styles.keyValueDiv}>
                                                    <Text style={styles.keyStyle}>state : </Text>
                                                    <Text style={styles.valueStyle}>{item.state}</Text>
                                                </View>
                                            </View>
                                        )
                                    })
                                ) : null}
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    valueStyle: {
        fontFamily: "Forza-Bold",
        color: "#9199AB",
        width: "70%",
        textAlign: "center"
    },
    keyStyle: {
        fontFamily: "Forza-Black",
        color: "#3D4759",
        width: "30%"
    },
    headingText: {
        fontFamily: "Forza-Bold",
        color: "#3D4759"
    },
    container: {
        padding: 10,
    },
    mapView: {
        borderWidth: 1,
        borderColor: "#E0EAEF",
        borderRadius: 10,
        padding: 6,
        marginBottom: 2,
        backgroundColor: "#FFF",
    },
    btnStyle: {
        // borderWidth: 1,
        // borderColor: "red",
        padding: "1.5%",
        width: 135,
        height: 35,
        backgroundColor: '#007AFF',
        borderRadius: 25,
        alignItems: "center",
        textAlignVertical: "center"
    },
    btnText: {
        fontFamily: "Forza-Bold",
        color: "#FFF"
    },
    btnMainKeyView: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    keyValueDiv: {
        flexDirection: "row",

    }
})
// export default ShowDataPage