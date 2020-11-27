import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import SwitchSelector from "react-native-switch-selector";


class Tip extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tip: 2
        };
    }
    render() {

        return (

            <View style={{ marginHorizontal: 20 }} >
                <View style={{ flexDirection: 'row', marginTop: 50, marginBottom: 30, justifyContent: 'space-between', }}>
                    <Text style={{ flex: 1, fontSize: 16, fontWeight: '400', marginTop: 5 }}>Driver Tip</Text>
                    <Text style={{ flex: 1, fontSize: 16, fontWeight: '400', marginTop: 5, textAlign: 'right', }}>${this.state.tip}</Text>
                </View>
                <SwitchSelector
                    options={[
                        { label: "$2", value: "2" },
                        { label: "$3", value: "3" },
                        { label: "$4", value: "4" }
                    ]}
                    initial={0}
                    onPress={value => this.setState({
                        tip: value
                    })}
                    borderRadius='5'
                    hasPadding={true}
                    valuePadding={2.5}
                    buttonColor='#ff574d'
                />

            </View>
        );
    }
}
export default Tip;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});