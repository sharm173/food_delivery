import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class CompletedOrderDetail extends Component {
    render() {
        return (
            <View style={{ marginLeft: 20 }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 20 }}>Pizza Hut</Text>
                <View>
                    <Text style={{ fontSize: 24, fontWeight: '600', marginTop: 30 }}>Order Complete</Text>
                    <Text style={{ fontSize: 14, fontWeight: '300', marginTop: 10 }}>Pizza Hut . Friday, Nov 6th at 3:34 PM</Text>
                    <View style={{ borderBottomWidth: 1, borderColor: '#dddddd', marginTop: 30 }} />
                </View>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 30 }}>Order Details</Text>
                    <Text style={{ fontSize: 14, fontWeight: '500', marginTop: 10 }}>2 items</Text>
                    <Text style={{ fontSize: 14, fontWeight: '300', marginTop: 10 }}>1x Veg Pizza</Text>
                    <Text style={{ fontSize: 14, fontWeight: '300', marginTop: 10 }}>1x Garlic Bread</Text>
                    <View style={{ borderBottomWidth: 1, borderColor: '#dddddd', marginTop: 30 }} />
                </View>
            </View>
        );
    }
}
export default CompletedOrderDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});