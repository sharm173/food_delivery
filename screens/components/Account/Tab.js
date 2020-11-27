import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
class Tab extends Component {
    render() {
        return (
            <TouchableOpacity style={{ marginLeft: 20, marginTop: 10 }}>
                <View style={{ flexDirection: 'row', marginVertical: 2, justifyContent: 'space-between', marginRight: 15 }}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: '500' }}> {this.props.title} </Text>
                        <Text style={{ fontSize: 12, fontWeight: '400', color: '#484848' }}> {this.props.subtitle} </Text>
                    </View>
                    <Icon name="ios-arrow-forward" color='#3f3f3f' size={30} />
                </View>
                <View style={{ borderBottomWidth: 1, borderColor: '#dddddd', marginTop: 10 }} />
            </TouchableOpacity>
        );
    }
}
export default Tab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});