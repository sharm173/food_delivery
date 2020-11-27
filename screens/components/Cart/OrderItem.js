import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons'

class OrderItem extends Component {
    render() {
        return (
            <View style={{ marginVertical: 10 }}>
                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                    <Text style={{ flex: 1, fontSize: 16, fontWeight: '300', marginTop: 5, marginRight: 5 }}>1 x</Text>
                    <Text style={{ flex: 8, fontSize: 16, fontWeight: '400', marginTop: 5 }}>{this.props.title}</Text>
                    <Text style={{ flex: 2, fontSize: 16, fontWeight: '400', marginTop: 5 }}>$10.50</Text>
                    <TouchableOpacity style={{ flex: 1, marginRight: 10 }} >
                        <Icon name="ios-trash" color='#3f3f3f' size={30} />
                    </TouchableOpacity>
                </View>
                <View style={{ borderBottomWidth: 1, borderColor: '#dddddd', marginLeft: 40, marginTop: 10 }} />

            </View>
        );
    }
}
export default OrderItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});