import React, { Component } from "react";
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet
} from "react-native";
import CompletedOrder from "./components/Orders/CompletedOrder";
import InProgressOrder from "./components/Orders/InProgressOrder";

class Orders extends Component {
    render() {
        return (
            <SafeAreaView >
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 20, marginTop: 30 }}>Orders </Text>
                <Text style={{ fontSize: 24, fontWeight: '600', marginLeft: 20, marginTop: 30, marginBottom: 20 }}>In progress</Text>
                <InProgressOrder navigation={this.props.navigation} />


                <Text style={{ fontSize: 24, fontWeight: '600', marginLeft: 20, marginTop: 30, marginBottom: 20 }}>Completed </Text>
                <CompletedOrder navigation={this.props.navigation} />
                <CompletedOrder navigation={this.props.navigation} />
                <CompletedOrder navigation={this.props.navigation} />
                <CompletedOrder navigation={this.props.navigation} />
                <CompletedOrder navigation={this.props.navigation} />
                <CompletedOrder navigation={this.props.navigation} />
            </SafeAreaView>
        );
    }
}
export default Orders;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});