import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
class Address extends Component {
    render() {
        return (
            <TouchableOpacity style={{ marginVertical: 10 }}>
                <View style={{ flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between', marginHorizontal: 20 }}>
                    <Text style={{ flex: 1, fontSize: 16, fontWeight: '400', marginTop: 5 }}>Address</Text>
                    <Text style={{ flex: 1, fontSize: 16, fontWeight: '400', marginTop: 5, textAlign: 'right', marginRight: 10 }}>447 S 7th Street</Text>
                    <Icon name="ios-arrow-forward" color='#3f3f3f' size={30} />
                </View>
                <View style={{ borderBottomWidth: 1, borderColor: '#dddddd', marginLeft: 30, marginTop: 10 }} />

            </TouchableOpacity>
        );
    }
}
export default Address;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});