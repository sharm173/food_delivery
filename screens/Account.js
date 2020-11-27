import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from "react-native";
import Tab from "./components/Account/Tab";
class Account extends Component {
    render() {
        return (
            <SafeAreaView>
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 20, marginVertical: 30 }}>Account </Text>
                <Tab title='John Doe' subtitle='Change your account information' />
                <Tab title='Payment' subtitle='Manage payment methods' />
                <Tab title='Addresses' subtitle='Add or remove a delivery address' />
                <Tab title='Privacy' subtitle='Edit privacy settings' />
                <Tab title='Help' subtitle='Contact support' />
            </SafeAreaView>
        );
    }
}
export default Account;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});