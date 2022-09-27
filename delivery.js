import * as React from 'react';
import { Text, View, Image, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Delivery extends React.Component {
    constructor(props) {
        super()
        this.state = {
            name: '',
            address: '',
            person_phone: '',
            error_name: '',
            error_address: '',
            error_phone: '',
            total: '',
        }
    }

    componentDidMount() {
        let total = this.props.navigation.getParam('total')

        this.setState({
            total,
        })
    }

    data_fun() {
        let new_name = this.state.name
        let new_address = this.state.address
        let new_phone = this.state.person_phone

        if (new_name.length == 0) {
            this.setState({ error_name: 'please enter name' })
        }
        else if (new_address.length == 0) {
            this.setState({ error_address: 'please enter address' })
        }
        else if (new_phone.length == 0) {
            this.setState({ error_phone: 'please enter your phone' })
        }
        else if (!new_phone.startsWith('010') &&
            !new_phone.startsWith('011') &&
            !new_phone.startsWith('012') &&
            !new_phone.startsWith('015') ||
            new_phone.length != 11) {
            this.setState({ error_phone: 'please enter valed phone' })
        }
        else {
            this.props.navigation.navigate("Finish")
            this.setState({
                name: '',
                address: '',
                person_phone: '',
            })
        }


    }


    render() {
        return (
            <>
                <StatusBar backgroundColor={'#fff'} barStyle='dark-content' />
                <View style={{ flex: 1, backgroundColor: '#fff' }}>

                    <Text
                        style=
                        {{
                            fontSize: 40,
                            fontWeight: 'bold',
                            fontStyle: 'italic',
                            color: '#000',
                            marginTop: 30,
                            textAlign: 'center'
                        }}
                    >
                        Delivery
                    </Text>

                    <View
                        style=
                        {{
                            borderColor: 'gray',
                            marginTop: 50,
                            marginLeft: 10
                        }}>

                        <Text style={{ color: '#000', fontSize: 20 }}>Full name</Text>

                        <View style={{ flexDirection: "row" }}>
                            <TextInput
                                style=
                                {{
                                    borderRadius: 10,
                                    width: "90%",
                                    color: '#000',
                                    paddingLeft: 10,
                                    borderBottomWidth: 1
                                }}
                                placeholder='Enter your name'
                                placeholderTextColor={"gray"}
                                value={this.state.name}
                                onChangeText={(value) => {
                                    this.setState({ name: value, error_name: '' })
                                }}
                            />
                        </View>

                        <Text style={{ fontWeight: 'bold', color: "#f00", textAlign: 'center' }}>{this.state.error_name}</Text>

                    </View>

                    <View
                        style=
                        {{
                            borderColor: 'gray',
                            marginTop: 20,
                            marginLeft: 10
                        }}>

                        <Text style={{ color: '#000', fontSize: 20 }}>Address</Text>

                        <View style={{ flexDirection: "row" }}>
                            <TextInput
                                style=
                                {{
                                    borderRadius: 10,
                                    width: "90%",
                                    color: '#000',
                                    paddingLeft: 10,
                                    borderBottomWidth: 1
                                }}
                                placeholder='Enter your address'
                                placeholderTextColor={"gray"}
                                value={this.state.address}
                                onChangeText={(value) => {
                                    this.setState({ address: value, error_address: '' })
                                }}
                            />
                        </View>

                        <Text style={{ fontWeight: 'bold', color: "#f00", textAlign: 'center' }}>{this.state.error_address}</Text>

                    </View>

                    <View
                        style=
                        {{
                            borderColor: 'gray',
                            marginTop: 20,
                            marginLeft: 10
                        }}>

                        <Text style={{ color: '#000', fontSize: 20 }}>Phone</Text>

                        <View style={{ flexDirection: "row" }}>
                            <TextInput
                                style=
                                {{
                                    borderRadius: 10,
                                    width: "90%",
                                    color: '#000',
                                    paddingLeft: 10,
                                    borderBottomWidth: 1
                                }}
                                placeholder='Enter your phone number'
                                placeholderTextColor={"gray"}
                                keyboardType='phone-pad'
                                value={this.state.person_phone}
                                onChangeText={(value) => {
                                    this.setState({ person_phone: value, error_phone: '' })
                                }}
                            />
                        </View>

                        <Text style={{ fontWeight: 'bold', color: "#f00", textAlign: 'center' }}>{this.state.error_phone}</Text>

                    </View>

                    <View
                        style=
                        {{
                            width: '90%',
                            height: '7%',
                            alignSelf: 'center',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            backgroundColor: '#fff',
                            marginTop: 40,
                        }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>Buy:</Text>

                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000', marginLeft: '5%' }}> ${this.state.total}</Text>

                    </View>

                    <View
                        style=
                        {{
                            width: '90%',
                            height: '7%',
                            alignSelf: 'center',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            backgroundColor: '#fff',
                        }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>Service:</Text>

                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000', marginLeft: '5%' }}> $5</Text>

                    </View>

                    <View
                        style=
                        {{
                            width: '90%',
                            height: '7%',
                            alignSelf: 'center',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            backgroundColor: '#fff',
                            borderBottomWidth: 1,
                        }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>Total price:</Text>

                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000', marginLeft: '5%' }}> ${this.state.total + 5}</Text>

                    </View>

                    <TouchableOpacity
                        style=
                        {{
                            width: '85%',
                            height: '7%',
                            backgroundColor: '#45b401',
                            borderRadius: 15,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 20,
                            alignSelf: 'center'
                        }}
                        onPress={() => {
                            this.data_fun()
                        }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>Buy</Text>
                    </TouchableOpacity>

                </View>
            </>
        )
    }
}
