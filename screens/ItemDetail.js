import React, { Component } from "react";
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from "react-native";
import QuantitySelector from "./components/RestaurantMenu/QuantitySelector";
import { TextInput } from "react-native-gesture-handler";

const { height, width } = Dimensions.get('window');
class ItemDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: "",
            text: "",
            title: props.navigation.state.params.title,
            price: props.navigation.state.params.price,
            description: props.navigation.state.params.description,
            restaurantName: props.navigation.state.params.restaurantName
        };
    }
    onAdd() {
        this.props.navigation.navigate('RestaurantMenu');
        global.cart.push(this.state.title);
        console.log(global.cart);
    }
    render() {
        return (
            <SafeAreaView >
                <View>
                    <Text style={{ fontSize: 26, fontWeight: 'bold', marginTop: 20, marginLeft: 20 }}> {this.state.title}</Text>
                    <Text style={{ fontSize: 12, fontWeight: '300', marginLeft: 20, marginTop: 10 }}> {this.state.description}</Text>
                </View>
                <View style={{ borderBottomWidth: 1, borderColor: '#dddddd', margin: 20 }} />
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20, marginLeft: 20 }}> Select Quantity</Text>
                    <QuantitySelector onChange={(text) => this.setState({ quantity: text })}
                        value={1}
                        minQuantity={0}
                        maxQuantity={100} />
                </View>
                <View style={{ borderBottomWidth: 1, borderColor: '#dddddd', margin: 20 }} />
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20, marginLeft: 20 }}> Special Instructions</Text>
                    <TextInput
                        style={{
                            height: 200, width: 350, borderColor: '#dddddd', borderWidth: 1,
                            marginTop: 30, alignSelf: 'center', borderRadius: 2
                        }}
                        multiLine={true}
                        placeholder=""
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                </View>
                <TouchableOpacity style={{
                    backgroundColor: '#ff574d', width: width - 48, height: 45, justifyContent: 'center',
                    borderRadius: 5, alignItems: 'center', alignSelf: "center", marginTop: 50, marginBottom: 20
                }} onPress={() => this.onAdd()}
                >
                    <Text style={{ color: '#F5F8FB', fontSize: 14, fontWeight: 'bold' }}> Add to Order </Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}
export default ItemDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});