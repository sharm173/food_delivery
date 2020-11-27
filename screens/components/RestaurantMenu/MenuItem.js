import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

class MenuItem extends Component {
    render() {
        return (
            <TouchableOpacity style={{
                flexDirection: 'row', borderWidth: 1, borderColor: '#dddddd',
                margin: 5,
            }} onPress={() => this.props.navigation.navigate('ItemDetail', {
                title: this.props.title,
                price: this.props.price,
                description: this.props.description,
                restaurantName: this.props.restaurantName

            })}>
                <View style={{ alignSelf: 'flex-start', padding: 10, }}>
                    <Text style={{
                        marginLeft: 20, fontSize: 20,
                        color: '#3f3f3f',
                        fontWeight: 'bold',
                    }} > {this.props.title}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'column', alignSelf: 'flex-end', justifyContent: 'flex-end', padding: 10 }}>
                    <Text style={{
                        alignSelf: 'flex-end', marginRight: 20, fontSize: 20,
                        color: '#3f3f3f',
                        fontWeight: 'bold',
                    }} > {this.props.price}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
export default MenuItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});