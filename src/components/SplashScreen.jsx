import React from "react";
import { Pressable, Text, View } from "react-native";
import estilo from "../style/estilo";

export default props => {
    return (
        <View style={estilo.view}>
            
            <View style={{flex:1, marginTop:64}}>
                <Text style={estilo.TitleLarge}>Welcome</Text>
                <Text style={estilo.TitleLarge}>to GeekBox</Text>
                <Text style={estilo.fontSmall}>
                    Transforme sua imaginação em realidade com nossa coleção de action figures</Text>
            </View>

            <Pressable style={estilo.buttonConfig} onPress={("")}>
                <Text style={estilo.buttonText}>Continuar</Text>
            </Pressable>
        </View>
    )
}