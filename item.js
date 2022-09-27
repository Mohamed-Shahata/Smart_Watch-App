import * as React from 'react';
import { Text, View, Image, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class Item extends React.Component {

    constructor(props) {
        super()
        this.state = {
            count: 1,
            descrip: false,
            image: '',
            name: '',
            price: '',
            total: '',
            favorites_arr: [],
        }
    }

    componentDidMount() {
        let image = this.props.navigation.getParam('image')
        let name = this.props.navigation.getParam('name')
        let price = this.props.navigation.getParam('price')
        let total = this.props.navigation.getParam('price')
        let favorites_arr = this.props.navigation.getParam('favorites_arr')

        this.setState({
            image,
            name,
            price,
            total,
            favorites_arr,
        })

    }

    plusFun() {
        this.setState({ count: this.state.count + 1 })
        let new_price = this.state.price
        let new_total = this.state.total + new_price
        this.setState({ total: new_total })
    }

    minusFun() {
        if (this.state.count > 1) {
            this.setState({ count: this.state.count - 1 })
            let new_price = this.state.price
            let new_total = this.state.total - new_price
            this.setState({ total: new_total })
        }

    }

    render() {
        return (
            <>

                <StatusBar barStyle='dark-content' backgroundColor={"#fff"}></StatusBar>

                <View style={{ flex: 1, backgroundColor: "#fff" }}>

                    <View
                        style=
                        {{
                            width: '85%',
                            height: '40%',
                            marginTop: '7%',
                            alignSelf: 'center',
                            borderRadius: 15
                        }}>

                        <Image
                            source={this.state.image}
                            resizeMode='stretch'
                            style={{ height: '100%', width: '100%', borderRadius: 10 }}
                        />
                    </View>

                    <Text
                        style={{ fontWeight: 'bold', fontSize: 20, marginTop: 50, color: '#000', marginLeft: 15 }}>
                        {this.state.name}
                    </Text>

                    <View
                        style=
                        {{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                    >

                        <View
                            style=
                            {{
                                width: 160,
                                height: 40,
                                backgroundColor: '#E8E8E2',
                                borderRadius: 15,
                                marginTop: 20,
                                justifyContent: 'center',
                                flexDirection: 'row',
                                marginLeft: 15
                            }}>

                            <TouchableOpacity
                                style=
                                {{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#0eff00',
                                    borderTopLeftRadius: 15,
                                    borderBottomLeftRadius: 15
                                }}
                                onPress={() => {
                                    this.minusFun()
                                }}
                            >
                                <Icon name='minus' size={15} color={'#000'} />
                            </TouchableOpacity>

                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 17, fontWeight: 'bold', color: "#000" }}> {this.state.count} </Text>
                            </View>

                            <TouchableOpacity
                                style=
                                {{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#0eff00',
                                    borderTopRightRadius: 15,
                                    borderBottomRightRadius: 15
                                }}
                                onPress={() => {
                                    this.plusFun()
                                }}
                            >
                                <Icon name='plus' size={15} color={'#000'} />
                            </TouchableOpacity>

                        </View>

                        <Text
                            style={{ fontWeight: 'bold', fontSize: 25, marginTop: 10, color: '#000', marginRight: 15 }}>
                            ${this.state.total}
                        </Text>

                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            this.setState({ descrip: !this.state.descrip })
                        }}
                    >
                        <Text
                            style={{ fontSize: 17, marginTop: 20, color: '#606058', marginLeft: 15 }}>
                            Description
                            <Icon name='chevron-down' />
                        </Text>
                    </TouchableOpacity>

                    <Text
                        style={{ color: '#000', marginLeft: 15, marginTop: '3%' }}>

                        {this.state.descrip ?
                            "Text messages are used for personal,"
                            + " use text messaging for communication between colleagues."
                            :
                            ''
                        }
                    </Text>

                    <TouchableOpacity
                        style=
                        {{
                            width: '85%',
                            height: 50,
                            backgroundColor: '#0eff00',
                            borderRadius: 30,
                            marginTop: 60,
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            flexDirection: 'row'
                        }}
                        activeOpacity={.5}
                        onPress={() => {
                            this.props.navigation.navigate("Cart")
                        }}
                    >
                        <Icon name='shopping-cart' size={20} color={"#000"} />
                        <Text style={{ fontSize: 17, color: '#000' }}>   Add to cart</Text>
                    </TouchableOpacity>

                </View>

                <View
                    style={{
                        width: '100%',
                        height: 60,
                        backgroundColor: '#fff',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        paddingHorizontal: 20,
                    }}>

                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate("Home")
                        }}
                    >
                        <MaterialCommunityIcons name='home' size={30} color={'#000'} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate("Cart", {
                                favorites_arr: this.state.favorites_arr,
                            })
                        }}
                        style=
                        {{
                            backgroundColor: '#45b401',
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: -40,
                            marginHorizontal: 20
                        }}
                    >
                        <MaterialCommunityIcons name='shopping-outline' size={25} color={'#fff'} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate("Favorites", {
                                favorites_arr: this.state.favorites_arr
                            })
                        }}
                    >
                        <AntDesign name='hearto' size={25} color={'#000'} />
                    </TouchableOpacity>

                </View>

            </>
        )
    }
}
