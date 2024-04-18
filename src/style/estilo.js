import { StyleSheet } from "react-native";

const estilo = StyleSheet.create(
    {
        view:{
            flex:1,
            padding: 16,
            backgroundColor: "#f5f5f7"
        },

        Title:{
            paddingTop: 5,
            fontSize: 24,
        },

        TitleLarge:{
            paddingTop: 5,
            fontSize: 32,
            fontWeight:"500",
        },

        fontSmall:{
            paddingTop: 5,
            fontSize: 16,
        },

        fontSmallCenter:{
            paddingTop: 5,
            fontSize: 14,
            textAlign:"center"
        },

        fontDefault:{
            paddingTop: 5,
            fontSize: 18,
        },

        fontDefaultCenter:{
            paddingTop: 5,
            fontSize: 18,
            textAlign:"center"
        },

        buttonConfig:{
            alignItems:"center",
            width: "100%",
            borderRadius: 8,
            backgroundColor: "#0E46A3",
            padding: 16,
            marginBottom:16
        },

        buttonText:{
            fontSize: 16,
            fontWeight: "600", 
            color:"#fff",
        }

    }

)

export default estilo