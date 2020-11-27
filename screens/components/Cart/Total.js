import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class Total extends Component {
    render() {
        return (
            <View >
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 50, marginBottom: 20 }}>Total </Text>
                <View style={{ flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between', marginRight: 20 }}>
                    <Text style={{ flex: 1, fontSize: 16, fontWeight: '400', marginTop: 5 }}>Subtotal</Text>
                    <Text style={{ flex: 1, fontSize: 16, fontWeight: '400', marginTop: 5, textAlign: 'right', marginRight: 10 }}>$50.00</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between', marginRight: 20 }}>
                    <Text style={{ flex: 1, fontSize: 16, fontWeight: '400', marginTop: 5 }}>Fees and Estimated tax</Text>
                    <Text style={{ flex: 1, fontSize: 16, fontWeight: '400', marginTop: 5, textAlign: 'right', marginRight: 10 }}>$4.32</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between', marginRight: 20 }}>
                    <Text style={{ flex: 1, fontSize: 16, fontWeight: '400', marginTop: 5 }}>Delivery</Text>
                    <Text style={{ flex: 1, fontSize: 16, fontWeight: '400', marginTop: 5, textAlign: 'right', marginRight: 10 }}>$2.99</Text>
                </View>
            </View>
        );
    }
}
export default Total;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});