import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import Address from './components/Checkout/Address'
import PhoneNumber from './components/Checkout/PhoneNumber'
import Payment from './components/Checkout/Payment'
import Tip from './components/Checkout/Tip'
import PlaceOrder from "./components/Checkout/PlaceOrder";
import { ScrollView } from "react-native-gesture-handler";
class Checkout extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#f5f8fb', flex: 1 }}>
                <ScrollView>
                    <Address />
                    <PhoneNumber />
                    <Payment />
                    <Tip />
                </ScrollView>
                <PlaceOrder />
            </View>
        );
    }
}
export default Checkout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});