import React, { useState } from "react"
import { Image, Text, TextInput, View, Pressable, StyleSheet } from "react-native";
import estilo from "../style/estilo";
import Icon from 'react-native-vector-icons/Ionicons';

export default props => {
    const [search, setSearch] = useState("")
    return (
        <View style={estilo.view}>

            {/* Header */}
            <View>
                <View style={style.ConteinerHeader}>
                    <View>
                        <Text style={style.fontWelcomeHeader}>Welcome Back!</Text>
                        <Text style={style.fontNameUserHeader}>Nami</Text>
                    </View>
                    <Image source={require('../image/UserIcon.png')} />
                </View>
            </View>

            <Image
                style={{ marginTop: 14, justifyContent: "center", alignItems: "center", width: "100%" }}
                source={require('../image/image.png')} />

            {/* Categoria */}
            <View style={{ flex: 1 }}>

                <Text style={{ fontSize: 18, marginTop: 8 }}>Categoria</Text>
                <View style={style.ConteinerNavCategoria}>
                    <Pressable style={style.buttonNavCategoria} onPress={("")}>
                        <Text style={{ color: "#000" }}>Action Figure</Text>
                    </Pressable>
                    <Pressable style={style.buttonNavCategoria} onPress={("")}>
                        <Text style={{ color: "#000" }}>Funko Pop</Text>
                    </Pressable>
                    <Pressable style={style.buttonNavCategoria} onPress={("")}>
                        <Text style={{ color: "#000" }}>Lego</Text>
                    </Pressable>
                    <Pressable style={style.buttonNavCategoria} onPress={("")}>
                        <Text style={{ color: "#000" }}>Lançamentos</Text>
                    </Pressable>
                </View>

                <View style={{ marginTop: 32, marginBottom: 8, }}>
                    <Text style={estilo.Title}>Mais Vendidos</Text>
                </View>

                <View style={style.ConteinerCardProd} >
                    <View style={style.ConteinerCard}>
                        <Pressable style={{ flexDirection: "row", width: "100%" }} onPress={("")}>
                            <Image style={style.produtoImage}
                                source={require('../image/CapitaoAmerica.png')} />

                            <View style={style.cardProduto}>
                                <Text style={{ fontSize: 14, fontWeight: "bold" }}>CAPTAIN AMERICA - 1/6 SCALE LIMITED </Text>
                                <Text style={estilo.fontSmall}>Capitão América Future Revolution</Text>
                                <Text>R$ 5,500,00</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>

                <View style={{ marginTop: 32, marginBottom: 8, }}>
                    <Text style={estilo.Title}>Adicionado Recentemente </Text>
                </View>

                <View style={style.ConteinerCardProd} >
                    <View style={style.ConteinerCard}>
                        <Pressable style={{ flexDirection: "row", width: "100%" }} onPress={("")}>
                            <Image style={style.produtoImage}
                                source={require('../image/Logan.png')} />

                            <View style={style.cardProduto}>
                                <Text style={{ fontSize: 14, fontWeight: "bold" }}>OLD MAN LOGAN WOLVERINE </Text>
                                <Text style={estilo.fontSmall}>Marca: Play Arts Kai (Square Enix)</Text>
                                <Text>R$ 500,00</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>

                <View style={style.ConteinerCardProd} >
                    <View style={style.ConteinerCard}>
                        <Pressable style={{ flexDirection: "row", width: "100%" }} onPress={("")}>
                            <Image style={style.produtoImage}
                                source={require('../image/batman.png')} />

                            <View style={style.cardProduto}>
                                <Text style={{ fontSize: 14, fontWeight: "bold" }}>BATMAN: GOTHAM BY GASLIGHT</Text>
                                <Text style={estilo.fontSmall}>Estátua do personagem Batman dos quadrinhos da DC Comics...</Text>
                                <Text>R$ 10.500,00</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>

            </View>


        </View>
    )
}

const style = StyleSheet.create(
    {
        ConteinerHeader: {
            alignItems: "center",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
        },

        ConteinerNavCategoria: {
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
        },

        ConteinerCardProd: {
            width: "100%",
            color: "#000"
        },

        ConteinerCard: {
            padding: 16,
            backgroundColor: "#f1f1f1",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
            marginBottom: 10
        },

        fontWelcomeHeader: {
            fontSize: 18,
            color: "#000",
            fontWeight: "bold",
        },

        fontNameUserHeader: {
            fontSize: 14,
            color: "#5A5364",
            fontWeight: "normal",
        },

        buttonNavCategoria: {
            marginTop: 16,
            borderWidth: 1,
            borderRadius: 8,
            padding: 8,
        },

        cardProduto: {
            marginLeft: 10,
        },

        produtoImage: {
            borderRadius: 5,
            width: 80,
            height: 80
        }

    }
)
