import React, { Component } from "react";
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView

} from "react-native";
import OrderItem from './components/Cart/OrderItem'
import Total from './components/Cart/Total'
const { height, width } = Dimensions.get('window');
class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurantName: props.navigation.state.params.restaurantName
        };
    }
    render() {

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f8fb' }}>
                <ScrollView style={{ marginLeft: 10 }}>
                    <View >
                        <Text style={{ alignSelf: 'center', fontSize: 24, fontWeight: '500', marginTop: 10 }}>{this.state.restaurantName}</Text>
                        <Text style={{ marginTop: 30, fontSize: 16, fontWeight: 'bold', marginBottom: 20 }}>Items </Text>

                        <OrderItem title="Pepperoni Pizza" />
                        <OrderItem title="Cheese Pizza" />
                        <OrderItem title="Veg Pizza" />
                        <OrderItem title="Garlic Bread" />
                        <OrderItem title="Cake" />
                    </View>
                    <Total />

                </ScrollView>
                <TouchableOpacity style={{
                    backgroundColor: '#ff574d', width: width - 48,
                    height: 45, justifyContent: 'center', borderRadius: 30, alignItems: 'center',
                    alignSelf: "center", bottom: 20
                }}
                    onPress={() => this.props.navigation.navigate('Checkout')}
                >

                    <Text style={{ color: '#F5F8FB', fontSize: 14, fontWeight: 'bold' }}> Continue</Text>
                </TouchableOpacity>
            </SafeAreaView >
        );
    }
}
export default Cart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});