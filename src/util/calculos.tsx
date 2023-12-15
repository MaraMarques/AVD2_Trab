export function Imposto(valueTax: number, codeTax: string,states: string) {
    let imposto = 0
    if ((codeTax === '1234' || codeTax === '6789') && (states === 'rj')) {
        imposto = valueTax * 0.01
    } else if ((codeTax === '1234' || codeTax === '6789') && (states === 'sp')) {
        imposto = valueTax * 0.02
    } else if  ((codeTax === '1234' || codeTax === '6789') && (states === 'mg')) {
        imposto = valueTax * 0.03
    }
    else {
        imposto = valueTax * 0.04
    }
    return imposto
}