import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from "react-native";

const { height, width } = Dimensions.get('window');

class PlaceOrder extends Component {
    render() {
        return (
            <TouchableOpacity style={{
                backgroundColor: '#ff574d', width: width - 48, height: 45, justifyContent: 'center',
                borderRadius: 30, alignItems: 'center', alignSelf: "center", marginTop: 50, bottom: 50
            }} //onPress={() => this.props.navigation.navigate('RestaurantMenu')}
            >
                <Text style={{ color: '#F5F8FB', fontSize: 14, fontWeight: 'bold' }}> Place Order </Text>
            </TouchableOpacity>
        );
    }
}
export default PlaceOrder;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});