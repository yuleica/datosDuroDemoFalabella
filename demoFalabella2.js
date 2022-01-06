let tablaLlena = [
    {
        id_Contacto: 464033,
        id_llamada: 55265783,
        duracion: 26,
        id_Venta: 0,
        id_Ticket: 0,
        rut: 0,
        dv: 0,
        telefonoGestionado: 0961382047,
        base_de_datos: 9,
        Resolucion: 'BuysDialer',
        fecha_ts: '2022-01-03 15:29:20',
        usuario: '',
        comuna: '',
        id_lote: 1769,
        acepta: '',
        marcaVenta: 69,
        nombreEjecutivo: '',
        id_ejecutivo: 0
    },
    {
        id_Contacto: 477740,
        id_llamada: 55296486,
        duracion: 31,
        id_Venta: 0,
        id_Ticket: 0,
        rut: 0,
        dv: 0,
        telefonoGestionado: 0975555059,
        base_de_datos: 9,
        Resolucion: 'NoAnswerDialer',
        fecha_ts: '2022-01-04 16:05:37',
        usuario: '',
        comuna: '',
        id_lote: 2381,
        acepta: '',
        marcaVenta: 69,
        nombreEjecutivo: '',
        id_ejecutivo: 0
    },
    {
        id_Contacto: 523744,
        id_llamada: 55273314,
        duracion: 36,
        id_Venta: 0,
        id_Ticket: 0,
        rut: 0,
        dv: 0,
        telefonoGestionado: 0933496218,
        base_de_datos: 9,
        Resolucion: 'NoAnswerDialer',
        fecha_ts: '2022-01-03 18:02:26',
        usuario: '',
        comuna: '',
        id_lote: 2381,
        acepta: '',
        marcaVenta: 78,
        nombreEjecutivo: '',
        id_ejecutivo: 0
    }

];

const opcionesTelefonoGestionado = ['BuysDialer', 'NoAnswerDialer', 'CongestionDialer', 'AnswerAnsweringMachineDialer', 'AnswerQueueDialer', 'NoAnswerDialer' ]
const tamano = tablaLlena.length;


const completarTabla = (tamano, tablaLlena) => {
    
   if (tamano < 4 ){
       
        for ( index = tamano+1; index < 9; index++) {
            let n = Math.round(Math.random() * (80))
            tablaLlena.push({
                id_Contacto: 999999,
                id_llamada: 1,
                duracion: 1,
                id_Venta: 1,
                id_Ticket: 1,
                rut: 1,
                dv: 1,
                telefonoGestionado: 1,
                base_de_datos: 2,
                Resolucion: 'queue',
                fecha_ts: new Date(),
                usuario: 'xxxxx',
                comuna: 'xxxxx',
                id_lote: 1,
                acepta: 'xxxxxx',
                marcaVenta: 69,
                nombreEjecutivo: 'xxxxxxx',
                id_ejecutivo: n
            })
            console.log(tablaLlena)
        };
        console.log(tablaLlena.length)
    };
  
    return tablaLlena;
};

completarTabla(tamano, tablaLlena);
