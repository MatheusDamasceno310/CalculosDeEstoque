document.getElementById('demanda').addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});
document.getElementById('leadTime').addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});
document.getElementById('custoArmaz').addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9.]/g, '');
});
document.getElementById('precoCompra').addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9.]/g, '');
});
document.getElementById('custoPedido').addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9.]/g, '');
});
document.getElementById('fatorSeguranca').addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9.]/g, '');
});
document.getElementById('desvioDemanda').addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});
document.getElementById('desvioTempo').addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});

/** CALCULOS */

function calcularEstoqueMedio(demanda, opcoes) {
    
    if (demanda.trim() != "" && opcoes != "Opções") {
        
        if (opcoes == "mes") {
            let demandaMes = demanda/2;

            document.getElementById("estoqueMedioResul").innerText = `${Math.round(demandaMes)} Média Mensal`;

            return demandaMes;

        } else if (opcoes == "ano") {
            let demandaAno = demanda/2;

            document.getElementById("estoqueMedioResul").innerText = `${Math.round(demandaAno)} Média Anual`;

            return demandaAno;
        }
        
    }
    
}

function calcularMediaDiaria(demanda, opcoes, leadTime) {
    
    if (demanda.trim() != "" && opcoes != "Opções") {
        
        if (opcoes == "dia") {

            document.getElementById("demandaDiariaResul").innerText = `${demanda}`;
            
            return demanda;
            
        } else if (opcoes == "mes") {
            let demandaMes = demanda/30;

            document.getElementById("demandaDiariaResul").innerText = `${Math.round(demandaMes)}`;
            
            return demandaMes;

        } else if (opcoes == "ano") {
            let demandaAno = demanda/365;

            document.getElementById("demandaDiariaResul").innerText = `${Math.round(demandaAno)}`;
            
            return demandaAno;
        }
        
    }
        
}

function calcularEmin(demandaDiaria, leadTime) {
    
    let emin = demandaDiaria * leadTime;

    document.getElementById("estoqueMinimoResul").innerText = `${Math.round(emin)}`;

    return emin;
        
}

function calcularPontoDePedido(demandaDiaria, leadTime, emin) {
    
    let pp = (demandaDiaria * leadTime) + emin;

    document.getElementById("pontoDePedidoResul").innerText = `${Math.round(pp)}`;

    return pp;

}

function calcularLEC(demanda, custoArmaz, custoPedido, precoCompra) {
    
    const lec = Math.sqrt((2 * demanda * custoPedido) / (precoCompra * custoArmaz));

    document.getElementById("loteDeCompraResul").innerText = `${Math.round(lec)}`;

    return lec;
} 

function calcularEmax(emin, lec) {

    let emax = emin + lec;

    document.getElementById("estoqueMaximoResul").innerText = `${Math.round(emax)}`;

    return emax;

}

function calcularNumeroDePedidos(demanda, lec) {

    let np = demanda / lec;

    document.getElementById("numeroPedidosResul").innerText = `${np.toFixed(2)}`;

    return np;

}

function calcularCustoDePedido(custoPedido, np) {

    let cp = custoPedido * np;

    document.getElementById("custoDoPedidoResul").innerText = `${cp.toFixed(2)}`;

    return cp;

}

function calcularCustoDeArmazenagem(precoCompra, estoqueMedio, custoArmaz) {

    let ca = precoCompra * estoqueMedio * custoArmaz;

    document.getElementById("custoArmazenamentoResul").innerText = `${ca.toFixed(2)}`;

    return ca;

}

function calcularCustoTotalMantEstoque(ca, cp) {

    let ct = ca + cp;

    document.getElementById("custoManterEstoqueResul").innerText = `${ct.toFixed(2)}`;

    return ct;

}

function calcular() {
    const demanda = document.getElementById("demanda").value;
    const opcoes = document.getElementById("opcoes").value;
    const leadTime = document.getElementById("leadTime").value;
    const custoArmaz = document.getElementById("custoArmaz").value;
    const precoCompra = document.getElementById("precoCompra").value;
    const custoPedido = document.getElementById("custoPedido").value;
    const fatorSeguranca = document.getElementById("fatorSeguranca").value;
    const desvioDemanda = document.getElementById("desvioDemanda").value;
    const desvioTempo = document.getElementById("desvioTempo").value;
    
    calcularEstoqueMedio(demanda, opcoes);
    let estoqueMedio = calcularEstoqueMedio(demanda, opcoes);;

    calcularMediaDiaria(demanda, opcoes, leadTime);
    let demandaDiaria = calcularMediaDiaria(demanda, opcoes, leadTime);

    calcularEmin(demandaDiaria, leadTime);
    let emin = calcularEmin(demandaDiaria, leadTime);

    calcularPontoDePedido(demandaDiaria, leadTime, emin);
    let pp = calcularPontoDePedido(demandaDiaria, leadTime, emin);

    calcularLEC(demanda, custoPedido, precoCompra);
    let lec = calcularLEC(demanda, custoArmaz, custoPedido, precoCompra);

    calcularEmax(emin, lec);
    let emax = calcularEmax(emin, lec);

    calcularNumeroDePedidos(demanda, lec);
    let np = calcularNumeroDePedidos(demanda, lec);

    calcularCustoDePedido(custoPedido, np);
    let cp = calcularCustoDePedido(custoPedido, np);

    calcularCustoDeArmazenagem(precoCompra, estoqueMedio, custoArmaz);
    let ca = calcularCustoDeArmazenagem(precoCompra, estoqueMedio, custoArmaz);

    calcularCustoTotalMantEstoque(ca, cp);
    let ct = calcularCustoTotalMantEstoque(ca, cp);

}