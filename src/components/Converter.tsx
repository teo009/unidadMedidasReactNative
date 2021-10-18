import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button, } from 'react-native';


//milimetros, centimetros, metros, kilometros

function Converter() {

    //Variables de estado
    const [origen, setOrigen] = useState('')
    const [destino, setDestino] = useState('')
    const [convertir, setConvertir] = useState(0)
    const [resultado, setResultado] = useState(0)

    const handleChangeOrigen = (texto: string) => {
        setOrigen(texto)
    }
    const handleChangeDestino = (texto: string) => {
        setDestino(texto)
    }
    const handleChangeConvertir = (texto: string) => {
        //Convertir el string a numero, porque los inputs
        //siempre devuelven strings
        const number = parseFloat(texto)
        setConvertir(number)
    }

    const handleCalcular = () => {

        if (origen === 'cm' && destino === 'mt') {
            const result = convertir / 100
            setResultado(result)
        } else if (origen === 'cm' && destino === 'mm') {
            const result = convertir / 0.10000
            setResultado(result)
        } else if (origen == 'cm' && destino === 'km') {
            const result = convertir / 100000
            setResultado(result)
        } else if(origen === 'mm' && destino === 'cm') {
            const result = convertir / 10.000
            setResultado(result)
        } else if (origen === 'mm' && destino === 'mt') {
            const result = convertir / 1000.0
            setResultado(result)
        } else if (origen === 'mm' && destino === 'km') {
            const result = convertir / 1000000
            setResultado(result)
        } else if (origen === 'mt' && destino === 'mm') {
            const result = convertir  / 0.0010000
            setResultado(result)
        } else if (origen === 'mt' && destino === 'cm') {
            const result = convertir / 0.010000
            setResultado(result)
        } else if (origen === 'mt' && destino === 'km') {
            const result = convertir / 1000.0
            setResultado(result)
        } else if (origen === 'km' && destino === 'mm') {
            const result = convertir / 0.0000010000
            setResultado(result)
        } else if (origen === 'km' && destino === 'cm') {
            const result = convertir / 0.000010000
            setResultado(result)
        } else if (origen === 'km' && destino === 'mt') {
            const result = convertir / 0.0010000
            setResultado(result)
        }
    }

    return (
        <View>

            <Text
                style={{
                    fontSize: 25,
                    paddingVertical: 60,
                }}
            >
                Convertidor Mamalon :u
            </Text>

            <Text>Origen:</Text>
            <TextInput 
                style={styles.input}
                defaultValue={origen}
                maxLength={2}
                onChangeText={(text) => handleChangeOrigen(text)}
            />

            <Text>Destino:</Text>
            <TextInput 
                style={styles.input}
                defaultValue={destino}
                maxLength={2}
                onChangeText={(text) => handleChangeDestino(text)}
            />

            <Text>Convertir:</Text>
            <TextInput 
                style={styles.input}
                defaultValue={convertir.toString()}
                maxLength={9}
                onChangeText={
                    (text) => handleChangeConvertir(text)
                }
            />

            <Text>Resultado:</Text>
            <TextInput 
                style={styles.inputError}
                defaultValue={resultado.toString()}
            />

            <View style={styles.button}>
            <Button 
                title="Calcular"
                onPress={handleCalcular}           
            />
            </View>

        </View>
    )

}

export default Converter

const styles = StyleSheet.create({
    input: {
        borderColor: 'white',
        borderWidth: 3,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        textAlign: 'center',
    },
    inputError: {
        borderColor: 'red',
        borderWidth: 3,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    button: {
        paddingVertical: 40,
    }
})