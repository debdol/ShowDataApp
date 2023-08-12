import { StyleSheet, Text, TextInput, TouchableOpacity, View, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const CustomeComponent = () => {
  const navigation = useNavigation();
  const [mobileNumber, setMobileNumber] = useState();
  const [fullName, setFullName] = useState();
  const [pincode, setPincode] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const dataApiHandler = () => {
    if (mobileNumber) {
      // mobileNumber end point

      console.log("mobileNumber :", mobileNumber);
      navigation.navigate("ShowDataPage", { mobileNumber: mobileNumber });
      setMobileNumber();
    } else if (fullName) {
      // fullName end poin

      console.log("fullName :", fullName);
      navigation.navigate("ShowDataPage", { fullName: fullName });
      setFullName();
    } else if (pincode) {
      // pincode endPoint

      console.log("pincode :", pincode);
      navigation.navigate("ShowDataPage", { pincode: pincode });
      setPincode();
    } else {
      setModalVisible(true)
    }
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputMainView}>
        <View style={styles.labelAndInputView}>
          <Text style={styles.lebel}>Enter Your Mobile Number :</Text>
          <TextInput placeholder='Enter Your Mobile Number' style={styles.inputStyle} onChangeText={(e) => setMobileNumber(e)} keyboardType='number-pad' value={mobileNumber} />
        </View>
        <View style={styles.labelAndInputView}>
          <Text style={styles.lebel}>Enter Your FullName :</Text>
          <TextInput placeholder='Enter Your Full Name' style={styles.inputStyle} onChangeText={(e) => setFullName(e)} value={fullName} />
        </View>
        <View style={styles.labelAndInputView}>
          <Text style={styles.lebel}>Enter Your Pincode :</Text>
          <TextInput placeholder='Enter Your Pincode' style={styles.inputStyle} onChangeText={(e) => setPincode(e)} keyboardType='number-pad' value={pincode} />
        </View>
      </View>
      <TouchableOpacity style={styles.SearchButton} onPress={() => {
        dataApiHandler();
      }}>
        <Text style={styles.buttonTxt}>Search</Text>
      </TouchableOpacity>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>pls,fill any of the input field</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Dismiss</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  mainContainer: {
    // borderWidth:1,
    // borderColor:"red",
    padding: 11,
  },
  inputMainView: {
    // borderWidth:1,
    // borderColor:"red",
    height: "60%",
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  labelAndInputView: {
    flexDirection: "column",
    // borderWidth:1,
    // borderColor:"red",
  },
  lebel: {
    color: "black",
    fontFamily: "Forza-Bold"
  },
  inputStyle: {
    width: 368,
    height: 65,
    borderRadius: 30,
    backgroundColor: "#D7E2F0",
    paddingHorizontal: 20,
    fontFamily: "Forza-Bold",
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

  //model style.......................
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    height: 40,
    width: 90,
    borderRadius: 15,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    textAlign: "center",
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: "Forza-Bold",
    fontSize: 20,
    color: "#3D4759"
  },
})
export default CustomeComponent;