import { StyleSheet, Text, TextInput, TouchableOpacity, View, Modal, Pressable, Alert, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';


export const CustomeComponent = () => {
  const navigation = useNavigation();
  const [inputeValue, setInputeValue] = useState();
  const [delhiveryInput, setDehiveryInput] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const data = [
    { label: 'Delhivery', value: '1' },
    { label: 'Bluedart', value: '2' },
  ];
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const dataApiHandler = () => {
    if (inputeValue) {
      axios.get(`http://103.168.173.64:2020/search-user?query=${inputeValue}`)
        .then((res) => {
          if (res.data.cancelled_orders.length === 0 && res.data.deleted_order.length === 0 && res.data.orders.length === 0 && res.data.rto_orders.length === 0) {
            Alert.alert("No data found")
          } else {
            navigation.navigate("ShowDataPage", { responce: res.data });
          }
        })
        .catch((error) => {
          console.log(error)
          Alert.alert("No data found")
        })
    } else {
      setModalVisible(true);
    }
  }

  
  const delhiveryApiHandler = () => {
    if (value == 1) {
      console.log("value :", value);
      axios.get(`http://103.168.173.64:2020/search-couriers-delhivery?query=${delhiveryInput}`)
        .then((res) => {
          console.log("res :", res.data.data.length);
          if (res.data.data.length === "undefined") {
            navigation.navigate("AddData");
          } else {
            navigation.navigate("DelhiveryDetails", { responce: res.data });
            // navigation.navigate("AddData");
          }
        })
        .catch((error) => console.log(error));
    } else if (value == 2) {
      axios.get(`http://103.168.173.64:2020/search-couriers-bluedart?query=${delhiveryInput}`)
        .then((res) => {
          console.log("bluedart :", res);
          if (res.data.length !== 0) {
            navigation.navigate("DelhiveryDetails", { responce: res.data });
          } else {
            navigation.navigate("AddData");
          }
        })
        .catch((error) => console.log(error));
    }
  }


  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputMainView}>
        <View style={styles.labelAndInputView}>
          <TextInput placeholder='Mobile Number,Name Or Pincode' style={styles.inputStyle} onChangeText={(e) => setInputeValue(e)} value={inputeValue} />
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
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          console.log(item);
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? 'blue' : 'black'}
            name="caretdown"
            size={20}
          />
        )}
      />
      <View style={styles.dehiveryInputView}>
        <TextInput placeholder='Pincode' style={styles.dehiveryInput} onChangeText={(e) => setDehiveryInput(e)} value={delhiveryInput} />
      </View>
      <TouchableOpacity style={styles.SearchButton} onPress={() => {
        delhiveryApiHandler();
      }}>
        <Text style={styles.buttonTxt}>Search here...</Text>
      </TouchableOpacity>
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
    height: "60%",
    flexDirection: "column",
    // justifyContent: "space-evenly"
  },
  labelAndInputView: {
    // flexDirection: "column",
    // borderWidth:1,
    // borderColor:"red",
  },
  lebel: {
    color: "black",
    fontFamily: "Forza-Bold"
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

  //DropDown Style...........................................................
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
})
// export default CustomeComponent;