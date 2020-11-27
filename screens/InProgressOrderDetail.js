import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class InProgressOrderDetail extends Component {
    render() {
        return (
            <View style={{ marginLeft: 20 }}>
                <View>
                    <Text style={{ fontSize: 30, fontWeight: '600', marginTop: 30 }}>Confirming your order</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 16, fontWeight: '400', marginTop: 10 }}>Delvered by </Text>
                        <Text style={{ fontSize: 16, fontWeight: '400', marginTop: 10, color: '#ff574d' }}> 3:34 PM</Text>
                    </View>
                    <Text style={{ fontSize: 16, fontWeight: '300', marginTop: 10, color: '#484848' }}>We've sent your order to Pizza Hut for final confirmation.</Text>
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
export default InProgressOrderDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});