import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

class InProgressOrder extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('InProgressOrderDetail')}>
                < View style={{ marginVertical: 10, marginLeft: 20 }}>
                    <Text style={{ flex: 8, fontSize: 18, fontWeight: 'bold', marginTop: 5 }}>Pizza Hut</Text>
                    <Text style={{ fontSize: 16, fontWeight: '400', marginTop: 5 }}>Today, 3:35 PM . $10.50</Text>
                    <Text style={{ fontSize: 16, fontWeight: '400', marginTop: 5 }}>Crunchy Taco, Fries</Text>
                </View>
                <View style={{ borderBottomWidth: 1, borderColor: '#dddddd', marginLeft: 20, marginTop: 10 }} />

            </TouchableOpacity >
        );
    }
}
export default InProgressOrder;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});