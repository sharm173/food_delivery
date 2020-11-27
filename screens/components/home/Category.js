import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity
} from "react-native";

const { height, width } = Dimensions.get('window');
const hRatio = height / 812;
const wRatio = width / 375;

class Category extends Component {
    render() {
        return (
            <TouchableOpacity>
                <View style={{
                    height: 130 * hRatio, width: 140 * hRatio,
                    marginLeft: 20 * wRatio, borderWidth: 0.5,
                    borderColor: '#dddddd',
                    shadowOffset: { width: 0, height: 0 },
                    shadowColor: '#353c59',
                    shadowOpacity: 0,
                    elevation: 1, backgroundColor: '#f5f8fb'
                }}>
                    <View style={{ flex: 4 }}>
                        <Image source={this.props.imageUri}
                            style={{
                                flex: 1, width: null,
                                height: null, resizeMode: 'cover'
                            }}
                        />
                    </View>
                    <View style={{ flex: 1, paddingLeft: 10 * wRatio, paddingTop: 10 * hRatio }}>
                        <Text style={{ color: '#3f3f3f' }}>{this.props.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});