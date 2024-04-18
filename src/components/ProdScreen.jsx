import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import estilo from "../style/estilo";
import Icon from 'react-native-vector-icons/Ionicons';

export default props => {
    return (
        <View style={estilo.view}>

            <View style={{
                flexDirection: "row",
                alignItems: "center"
            }}>
                <Icon name="arrow-back-outline" size={24} color="black" />
                <Text>Voltar</Text>
            </View>

            <View style={
                {
                    justifyContent: "center",
                    width: "100%",
                    alignItems: "center"
                }
            }>
                <Image style={style.produtoImage}
                    source={require('../image/CapitaoAmerica.png')} />
            </View>

            <Text style={estilo.Title}>CAPTAIN AMERICA - 1/6 SCALE LIMITED </Text>
            <Text style={{fontSize:24, marginBottom:8, fontWeight:"bold", color:"#000"}}>R$ 5,999.00</Text>
            <View style={{
                flexDirection: "row",
                alignItems: "center"
            }}>
                <Text style={{fontSize:18, fontWeight:"bold"}}>4,9</Text>
                <Icon name="star" size={24} color="orange" />
            </View>

            <View style={style.ConteinerNavCategoria}>
                <View style={style.buttonNavCategoria} onPress={("")}>
                    <Icon name="layers-outline" size={24} color="black" />
                    <Text style={{ color: "blue" }}>Material</Text>
                    <Text style={{ color: "#000" }}>Polystone</Text>
                </View>
                <View style={style.buttonNavCategoria} onPress={("")}>
                    <Icon name="expand-outline" size={24} color="black" />
                    <Text style={{ color: "blue" }}>Escala</Text>
                    <Text style={{ color: "#000" }}>1/6</Text>
                </View>
                <View style={style.buttonNavCategoria} onPress={("")}>
                    <Icon name="resize-outline" size={24} color="black" />
                    <Text style={{ color: "blue" }}>Altura </Text>
                    <Text style={{ color: "#000" }}>38cm</Text>
                </View>
            </View>

            <Text style={{marginTop:10, marginBottom:18}}>Estátua do personagem Capitão América do jogo Marvel Future Revolution
            </Text>

            <Pressable style={style.buttonConfig} onPress={("")}>
                <Text style={style.buttonText}>Comprar</Text>
            </Pressable>

        </View>
    )
}

const style = StyleSheet.create(
    {
        produtoImage: {
            borderRadius: 5,
            width: 300,
            height: 300,
        },

        ConteinerNavCategoria: {
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
        },

        buttonNavCategoria: {
            width:"30%",
            justifyContent:"center",
            alignItems:"center",
            marginTop: 16,
            borderWidth: 1,
            borderRadius: 8,
            padding: 8,
        },

        buttonConfig:{
            alignItems:"center",
            width: "100%",
            borderRadius: 8,
            backgroundColor: "blue",
            padding: 16,
        },

        buttonText:{
            fontSize: 16,
            fontWeight: "600", 
            color:"#fff"
        }
    }
)
