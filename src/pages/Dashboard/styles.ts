import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    containerMain: {
        flex: 1,
        backgroundColor:"#FFFFFF",
        justifyContent: 'center',
        alignContent: 'center',
        
    },

    // Titulo
    headerBox:{
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 25
    },
    titleHeader: {
        color: "#4974BA",
        fontSize: 30,
        fontWeight: "bold",
    },

    //Dados
    centerBox:{
        flex: 4,
        backgroundColor:"#9FCCFC",
        padding: 10,
        borderRadius: 15,
    },
    contentFix:{
        padding: 10,
        justifyContent:"space-evenly",
    },
    textBox:{
        color:"#000",
        fontSize: 23,
        fontWeight:"bold",
        marginLeft: 10,
        padding: 5,
        marginBottom: 2,
        marginTop: 2

    },
    fontText:{
        color:"#000",
        fontSize: 18,
        marginLeft: 10,
        marginBottom: 10

    },
    divCenter1:{
        flexDirection:"row",
        gap: 15,
        marginRight: 10,

        
    },
    divCenter2:{
        flexDirection:"row",
        marginRight: 20,
        gap: 20

    },
    input:{
        borderColor: "#FFF",
        borderRadius: 10,
        fontSize: 18,
        marginRight: 10,
        borderWidth: 1,
        marginBottom: 15,
    },

    //Botão
    boxBotton:{
        flex: 0.3,
        flexDirection:"row",
        justifyContent: "center",
        gap: 50, //Separar os botões
        padding: 10,
    },
    buttons:{
        backgroundColor:"#4974BA",
        width: 160,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    textButton:{
        color:"#FFF",
        fontWeight:"bold",
        fontSize:15,
    },

    //FlatList
    boxFlat:{
        flex: 3.3,
        justifyContent: "center",
        marginLeft: 20,
        marginRight: 20

    }
})