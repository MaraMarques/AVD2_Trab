import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from "react-native";
import { styles } from './styles';
import { useState } from 'react';
import { Cadastro } from "../../storage/Cadastro";
import { TransactionExpenses } from "../../components/TransactionExpenses";

export default function DashBoard() {

    //Usetate para fazer a integração
    const [name, setName] = useState('');
    const [cpf, setCPF] = useState('');
    const [dateBirth, setDateBirth] = useState('');
    const [codeTax, setCodeTax] = useState('');
    const [valueTax, setValueTax] = useState('');
    const [states, setStates] = useState('');
    const [provider, setProvider] = useState('');
    const [invoice, setInvoice] = useState<Cadastro[]>([]);


    function handleAdd() {

        //Filtro do código
        if (codeTax != '1234' && codeTax != '6789' && codeTax != '1708' && codeTax != '5952') {
            return Alert.alert('Código da Nota Fiscal', 'Código inválido!!')
        }
        //Filtro dos Estados
        if (states.toLocaleLowerCase() != 'rj' && states.toLocaleLowerCase() != 'sp' && states.toLocaleLowerCase() != 'mg') {
            return Alert.alert('Estado inválido!', 'Permitidos: RJ, SP e MG.')
        }
        //Filtro Fornecedores
        if (provider.toLocaleLowerCase() != 'totvs' && provider.toLocaleLowerCase() != 'microsoft') {
            return Alert.alert('Fornecedor', 'Fornecedor inválido!!')
        }

        //Integração com o Cadastro
        const data = {
            id: String(new Date().getTime()),
            name,
            cpf,
            codeTax,
            dateBirth,
            valueTax: parseFloat(valueTax),
            states,
            provider,
        }

        //Limpeza
        setInvoice([...invoice, data]);
        setName('')
        setCPF('')
        setCodeTax('')
        setDateBirth('')
        setValueTax('')
        setStates('')
        setProvider('')
    }

    function handleTotals() {
        console.log('Total:')
        const provedores = ['totvs', 'microsoft']
        provedores.map(provedor => {
            const totalProvider = invoice
                .filter(dat => dat.provider.toLocaleLowerCase() === provedor)
                .reduce((total, n) => total + n.valueTax, 0)

            if (totalProvider > 0) {
                const dataObjetct = {
                    provedor,
                    totalProvider
                }
                console.log(dataObjetct)
            }
        })
    }

    return (
        //Interface Input
        <View style={styles.containerMain}
        >
            {/* Titulo */}
            <View style={styles.headerBox}>
                <Text style={styles.titleHeader}> Cadastro de Nota Fiscal </Text>
            </View>

            {/* Dados de Entrada */}
            <View style={styles.centerBox}>
                <View style={styles.contentFix}
                >
                    <Text style={styles.textBox}> DADOS </Text>
                    <Text style={styles.fontText}> Nome Completo: </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="  Nome  "
                        value={name}
                        onChangeText={value => setName(value)}
                    />
                    <View style={styles.divCenter1}>
                        {/* Mesma div */}
                        <Text style={styles.fontText}> CPF: </Text>
                        <Text style={styles.fontText}> Data de Nascimento: </Text>
                    </View>

                    <View style={styles.divCenter2}>
                        {/* Mesma div */}
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            placeholder="  CPF  "
                            value={cpf}
                            onChangeText={value => setCPF(value)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="  Nascimento  "
                            value={dateBirth}
                            onChangeText={value => setDateBirth(value)}
                        />
                    </View>

                    <Text style={styles.fontText}> Código do Imposto: </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="  Código"
                        value={codeTax}
                        onChangeText={value => setCodeTax(value)}
                    />
                    <Text style={styles.fontText}> Fornecedor: </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="  Provedor"
                        value={provider}
                        onChangeText={value => setProvider(value)}
                    />

                    <View style={styles.divCenter1}>
                        {/* Mesma div */}
                        <Text style={styles.fontText}> Estado: </Text>
                        <Text style={styles.fontText}> Valor da Nota:</Text>
                    </View>
                    <View style={styles.divCenter2}>
                        {/* Mesma div */}
                        <TextInput
                            style={styles.input}
                            placeholder="    Estado    "

                            value={states}
                            onChangeText={value => setStates(value)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="     R$     "

                            value={valueTax}
                            onChangeText={value => setValueTax(value)}
                        />
                    </View>
                </View>
            </View>
            {/* Botões */}
            <View style={styles.boxBotton}>
                <TouchableOpacity style={styles.buttons}
                    onPress={handleAdd}>
                    <Text style={styles.textButton}> INCLUIR </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}
                    onPress={handleTotals}>
                    <Text style={styles.textButton}> TOTAIS</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.boxFlat}>
                <FlatList
                    // Fazer o retorno
                    data={invoice}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TransactionExpenses data={item} />
                    )}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

        </View >
    )
}

