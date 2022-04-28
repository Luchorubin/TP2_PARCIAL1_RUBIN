
const aRecibos = [
    {id: 1, numero: '00000002', importe : 1000, cliente:'R00001'},
    {id: 2, numero: '00000003', importe : 3000, cliente:'C00002'},
    {id: 3, numero: '00000004', importe : 2000, cliente:'R00002'},
    {id: 4, numero: '00000005', importe : 8000, cliente:'C00001'},
   ]
   
   
    console.log("Mostrar cliente e importe con ForEach:")
    console.log("");

    const recorrerConForEach = aRecibos.forEach(recibo => console.log("Cliente: " + recibo.cliente + " Importe: " + recibo.importe));
    
    console.log("");
    console.log("Ordenar por importe con Sort:")

    console.log(aRecibos.sort((a, b) => {
        if (a.recibo > b.recibo){
            return 1;
        }
        if(a.recibo < b.recibo){
            return -1;
        }
        return 0
    }));

    console.log("");
    console.log("Nuevo array con clientes que empizan con letra 'R' usando la funcion filter:")

    console.log(aRecibos.filter(recibo=> recibo.cliente.startsWith("R")))

    console.log("");
    console.log("Nuevo array con la misma estructura de aPagos, pero aumentando un 30% el importe")

    console.log(aRecibos.map(recibo => {return {id: recibo.id, numero: recibo.numero, importe: recibo.importe * 1.30, cliente: recibo.cliente}}))

    console.log("");
    console.log("Crear un mensaje con timer de 7 seg al comienzo del codigo")

    setTimeout(texto => console.log("pasaron 7 segundos"), 7000);

    