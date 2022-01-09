let tablaLlena = [
    {
        fechaInicioLlamado: 'x',
        fechaTerminoLlamado: 'x',	
        usuario: 'x',
        nombreEjecutivo: 'x',
        idEjecutivo: 'x',
        idCliente: 'x',
        rutEjecutivo: 'x',	
        dvEjecutivo: 'x',
        celular: 'x',
        baseGestion: 'frio',
        producto: 'x',
        cruceSeguros: 0,
        tipoDeLlamado: 'ejecutivo',
        contacto: 'Cotiza',
        resultadoLlamado: 'x',
        detalleLlamado: 'x',
        comentarios: 'x'
    },

    {
        fechaInicioLlamado: 'y',
        fechaTerminoLlamado: 'y',	
        usuario: 'y',
        nombreEjecutivo: 'y',
        idEjecutivo: 'y',
        idCliente: 'y',
        rutEjecutivo: 'y',	
        dvEjecutivo: 'y',
        celular: 'y',
        baseGestion: 'caliente',
        producto: 'y',
        cruceSeguros: 1,
        tipoDeLlamado: 'ejecutivo',
        contacto: 'Lo pensara',
        resultadoLlamado: 'y',
        detalleLlamado: 'y',
        comentarios: 'y'
       
    },
    {
        fechaInicioLlamado: 'z',
        fechaTerminoLlamado: 'z',	
        usuario: 'z',
        nombreEjecutivo: 'z',
        idEjecutivo: 'z',
        idCliente: 'z',
        rutEjecutivo: 'z',	
        dvEjecutivo: 'z',
        celular: 'z',
        baseGestion: 'caliente',
        producto: 'z',
        cruceSeguros: 0,
        tipoDeLlamado: 'bot',
        contacto: 'BuysDialer',
        resultadoLlamado: 'z',
        detalleLlamado: 'z',
        comentarios: 'z'
    }

];

const basetipollamadodiscador = ['BuysDialer', 
                                    'NoAnswerDialer', 
                                    'CongestionDialer', 
                                    'AnswerAnsweringMachineDialer', 'AnswerQueueDialer', 'NoAnswerDialer' ];
//const baseid_cliente = 
const basetipollamado = ['ejecutivo', 'discador', 'bot'];
const basecontactoejecutivo = ['Cotiza','Lo pensara','Venta en línea /web/app',
            'Venta sucursal/call interno', 'Seguimiento','No Califica','Rechazo Cliente', 
            'Atendido por otro ejecutivo','Ya lo contrato','Solicita nuevo llamado',
            'Venta/ descarga fallida','Flujo arrojo error', 'Otros', 'Volver a llamar', 'No contesta', 
            'Contesta tercero', 'N° equivocado', 'fuera de servicio', 'cliente inubicable', 'Buzon de Voz',
            'Fallecido', 'otros'];
const basebasedegestion = ['frio', 'caliente'];
const basecruceseguros = [0,1];

let controles = {
    minimoRegistro: 0,
    maximoRegistro: 0
};

const tamano = tablaLlena.length;


//capturo el texto
document.querySelector('#minimo').addEventListener('input', function (e) {
    controles.minimoRegistro = e.target.value;
});
console.log(controles.minimoRegistro)

document.querySelector('#maximo').addEventListener('input', function (e) {
    controles.maximoRegistro = e.target.value;
});
console.log(controles.maximoRegistro)

//ejecuto
document.querySelector('#enviar').addEventListener('click', function (e) {

    e.preventDefault();
    let ibase, illamado = 0;
    let vcontacto = '';

    if (tamano < controles.minimoRegistro ){

        for ( index = tamano+1; index < controles.maximoRegistro; index++) {

            //let n = Math.round(Math.random() * (80))

            illamado <= basetipollamado.length ? tipoDeLlamado = illamado + 1 : illamado = 0;

            console.log(illamado);

            if (basetipollamado[illamado] === 'ejecutivo' && ibase <= basecontactoejecutivo.length) {
                vcontacto = basecontactoejecutivo[ibase]}
            else {vcontacto = basetipollamadodiscador[0]}
      

            if (basetipollamado[illamado] === 'discador' && ibase <= basecontactoejecutivo.length) {
                vcontacto = basetipollamadodiscado[ibase]}
            else {vcontacto = basetipollamadodiscador[0]}
    

            if (basetipollamado[illamado] === 'bot' && ibase <= basetipollamadodiscador.length) {
                vcontacto = basetipollamadodiscador[ibase]}
            else {vcontacto = basetipollamadodiscador[0]}

            tablaLlena.push({    
                    fechaInicioLlamado: 'zzzzz',
                    fechaTerminoLlamado: 'zzzzz',	
                    usuario: 'zzzzzzz',
                    nombreEjecutivo: 'zzzzzzz',
                    idEjecutivo: 'zzzzzz',
                    idCliente: 'zzzzzzz',
                    rutEjecutivo: 'zzzzzz',	
                    dvEjecutivo: 'zzzzz',
                    celular: 'zzzzz',
                    baseGestion: 'frio',
                    producto: 'AV/SAV',
                    cruceSeguros: 0,
                    tipoDeLlamado: basetipollamado[illamado],
                    contacto: vcontacto,
                    resultadoLlamado: 'zzzzzzz',
                    detalleLlamado: 'zzzzzz',
                    comentarios: 'zzzzzz'
            })
            
        }

        console.log(tablaLlena);
    };
  
});









  



