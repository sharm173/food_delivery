import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    SafeAreaView,
    ScrollView
} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from "react-native-gesture-handler";

class Search extends Component {
    state = {
        text: ""
    }
    render() {
        return (
            <SafeAreaView style={{}}>
                <ScrollView>
                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: 'white', marginHorizontal: 20,
                        shadowOffset: { width: 0, height: 0 },
                        shadowColor: '#353c59',
                        shadowOpacity: 0.2,
                        elevation: 1,
                        height: 45,
                        marginTop: Platform.OS == 'android' ? 30 : 10
                    }}>
                        <Icon name='ios-search' size={20} style={{ marginRight: 10, padding: 10 }} />
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="Search Food Delivery"
                            placeholderTextColor="grey"
                            style={{
                                flex: 1, fontWeight: '700',
                                backgroundColor: 'white'
                            }}
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.text}
                            onSubmitEditing={() => this.filterByQuery()}
                        />

                    </View>
                    <TouchableOpacity><Text style={{ marginTop: 20, marginLeft: 15, fontWeight: 'bold' }}> Recents</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={{ color: '#ff574d', marginTop: 20, marginLeft: 15 }}> Pizza Hut</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={{ color: '#ff574d', marginTop: 20, marginLeft: 15 }}> California Wet Buritto</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={{ color: '#ff574d', marginTop: 20, marginLeft: 15 }}> Dominos</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={{ color: '#ff574d', marginTop: 20, marginLeft: 15 }}> Subway</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={{ marginTop: 40, marginLeft: 15, fontWeight: 'bold' }}> Top Searches</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={{ color: '#ff574d', marginTop: 20, marginLeft: 15 }}> Indian Cusine</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={{ color: '#ff574d', marginTop: 20, marginLeft: 15 }}> China Wok</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={{ color: '#ff574d', marginTop: 20, marginLeft: 15 }}> Shanghai kitchen</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={{ color: '#ff574d', marginTop: 20, marginLeft: 15 }}> Subway</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={{ marginTop: 40, marginLeft: 15, fontWeight: 'bold' }}> Categories </Text></TouchableOpacity>
                    <TouchableOpacity><Text style={{ color: '#ff574d', marginTop: 20, marginLeft: 15 }}> Indian </Text></TouchableOpacity>
                    <TouchableOpacity><Text style={{ color: '#ff574d', marginTop: 20, marginLeft: 15 }}> Chinese</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={{ color: '#ff574d', marginTop: 20, marginLeft: 15 }}> Mexican</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={{ color: '#ff574d', marginTop: 20, marginLeft: 15 }}> Pizza</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={{ color: '#ff574d', marginTop: 20, marginLeft: 15 }}> Italian</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={{ color: '#ff574d', marginTop: 20, marginLeft: 15 }}> Burger</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={{ color: '#ff574d', marginTop: 20, marginLeft: 15 }}> Hawian</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={{ color: '#ff574d', marginTop: 20, marginLeft: 15 }}> Fast food</Text></TouchableOpacity>

                </ScrollView>
            </SafeAreaView >
        );
    }
}
export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});