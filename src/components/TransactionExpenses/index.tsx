import { Cadastro } from "../../storage/Cadastro"
import { styles } from "./styles"
import { View, Text} from "react-native"
import { Imposto } from "../../util/calculos"

type Props ={
    data: Cadastro
}
export function TransactionExpenses({data} : Props) {
    return (
        //Interface Return
        <View style={styles.containerMain}>
                <Text style={styles.textBox}> Nome Completo: </Text>
                <Text style={styles.fontText}>{data.name}</Text>

                <Text style={styles.textBox}> CPF: </Text>
                <Text style={styles.fontText}>{data.cpf}</Text>

                <Text style={styles.textBox}> Data de Nascimento: </Text>
                <Text style={styles.fontText}>{data.dateBirth}</Text>

                <Text style={styles.textBox}> Código do Imposto: </Text>
                <Text style={styles.fontText}>{data.codeTax}</Text>

                <Text style={styles.textBox}> Estado: </Text>
                <Text style={styles.fontText}>{data.states}</Text>

                <Text style={styles.textBox}> Fornecedor: </Text>
                <Text style={styles.fontText}>{data.provider}</Text>

                <Text style={styles.textBox}> Valor da Nota: </Text>
                <Text style={styles.fontText}>R${data.valueTax}</Text>
                
                <Text style={styles.textBox}> Valor do Imposto: </Text>
                <Text style={styles.fontText}>R${Imposto((data.valueTax),(data.codeTax),(data.states))}</Text>

        </View>
    )
}