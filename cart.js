import * as React from 'react'
import { Text, View, Image, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class Cart extends React.Component {

    constructor(props) {
        super()
        this.state = {
            arr: [
                {
                    name: 'watch',
                    price: 100,
                    count: 1,
                    image: require('./img/7.png')
                },
                {
                    name: 'watch',
                    price: 200,
                    count: 1,
                    image: require('./img/14.png')
                },
                {
                    name: 'watch ',
                    price: 300,
                    count: 1,
                    image: require('./img/12.png')
                },

            ],
            use_index: 0,
            total: 0,
            price: 7,
            favorites_arr: []
        }
    }

    delete_item(index) {
        var new_arr = this.state.arr

        new_arr.splice(index, 1)

        this.setState({ arr: new_arr })

    }

    sum() {
        let new_arr = this.state.arr
        let sum_price = this.state.total

        for (let i = 0; i < new_arr.length; i++) {
            sum_price += new_arr[i].price
        }

        this.setState({ total: sum_price })

    }

    new_sum() {
        let new_arr = this.state.arr
        let sum_price = 0

        for (let i = 0; i < new_arr.length; i++) {
            sum_price += (new_arr[i].price * new_arr[i].count)
        }

        this.setState({ total: sum_price })

    }

    componentDidMount() {
        let favorites_arr = this.props.navigation.getParam('favorites_arr')

        this.setState({ favorites_arr, })

        this.sum()
    }

    plusFun(index) {
        let my_arr = this.state.arr
        let new_index = index
        let edit_item = my_arr[new_index]
        let new_total = this.state.total

        edit_item.count = edit_item.count + 1
        new_total = new_total + edit_item.price

        my_arr[new_index] = edit_item

        this.setState({
            arr: my_arr,
            total: new_total,
        })
    }

    minusFun(index) {

        let my_arr = this.state.arr
        let new_index = index
        let edit_item = my_arr[new_index]
        let new_total = this.state.total

        if (edit_item.count > 1) {

            edit_item.count = edit_item.count - 1
            new_total = new_total - edit_item.price

            my_arr[new_index] = edit_item

            this.setState({
                arr: my_arr,
                total: new_total,
            })
        }

    }


    render() {
        return (
            <>
                <StatusBar barStyle='dark-content' backgroundColor={"#d8f1c7"} />

                <View style={{ flex: 1, backgroundColor: "#d8f1c7" }}>

                    <View
                        style=
                        {{
                            height: '10%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >

                        <Text
                            style={{ fontSize: 25, fontWeight: 'bold', color: '#000' }}>
                            Cart
                        </Text>

                    </View>

                    <ScrollView >

                        {this.state.arr.map((item, index) => {

                            return (

                                <View
                                    key={index}
                                    style={{
                                        backgroundColor: "#fff",
                                        width: '95%',
                                        height: 100,
                                        marginTop: "5%",
                                        borderRadius: 10,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        padding: 10,
                                        alignSelf: 'center',
                                    }}>

                                    <Image
                                        source={item.image}
                                        style={{ height: 90, width: 90, borderRadius: 5 }}
                                    />

                                    <View
                                        style=
                                        {{
                                            marginLeft: 5,
                                            marginTop: '2%',
                                            height: '100%',
                                        }}>
                                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: "#000", marginTop: 10 }}>
                                            {item.name}
                                        </Text>
                                        <Text style={{ fontSize: 17, color: "#000", marginTop: 10 }}>
                                            ${item.price}
                                        </Text>

                                    </View>


                                    <View
                                        style=
                                        {{
                                            width: 100,
                                            height: 40,
                                            backgroundColor: '#E8E8E2',
                                            borderRadius: 30,
                                            marginTop: 10,
                                            justifyContent: 'center',
                                            flexDirection: 'row',
                                            marginLeft: 40
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
                                                this.minusFun(index)
                                            }}
                                        >
                                            <Icon name='minus' size={15} color={'#000'} />
                                        </TouchableOpacity>

                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: "#000" }}> {item.count} </Text>
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
                                                this.plusFun(index)
                                            }}
                                        >
                                            <Icon name='plus' size={15} color={'#000'} />
                                        </TouchableOpacity>

                                    </View>

                                    <TouchableOpacity
                                        style=
                                        {{
                                            position: 'absolute',
                                            right: 15,
                                            top: 10,
                                        }}
                                        onPress={() => {
                                            this.delete_item(index)
                                            this.new_sum()
                                        }}
                                    >
                                        <AntDesign
                                            name='delete'
                                            size={18}
                                            color={"#f00"}
                                        />
                                    </TouchableOpacity>

                                </View>
                            )
                        })}

                    </ScrollView>

                    <View
                        style=
                        {{
                            width: '90%',
                            height: '7%',
                            alignSelf: 'center',
                            marginBottom: '2%',
                            paddingHorizontal: '3%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            backgroundColor: '#fff',

                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.20,
                            shadowRadius: 1.41,

                            elevation: 2,
                        }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>Total price:</Text>

                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000', marginLeft: '5%' }}>${this.state.total}</Text>

                    </View>

                    <TouchableOpacity
                        style=
                        {{
                            width: '90%',
                            height: '6%',
                            backgroundColor: '#45b401',
                            alignSelf: 'center',
                            marginBottom: '7%',
                            borderRadius: 15,
                            alignItems: 'center',
                            justifyContent: 'center',

                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.20,
                            shadowRadius: 1.41,

                            elevation: 2,
                        }}
                        onPress={() => {
                            this.props.navigation.navigate("Delivery", {
                                total: this.state.total
                            })
                        }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>Check out</Text>
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
                            this.setState({ total: 0 })
                        }}
                    >
                        <MaterialCommunityIcons name='home' size={30} color={'#000'} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate("Cart")
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
                            this.setState({ total: 0 })
                        }}
                    >
                        <AntDesign name='hearto' size={25} color={'#000'} />
                    </TouchableOpacity>

                </View>
            </>
        )
    }
}