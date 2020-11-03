var dental = [
    {hora: "8:30", especialista: "ANDREA ZUÑIGA", paciente: "MARCELA RETAMAL", rut: "11123425-6", prevision: "ISAPRE"},
    {hora: "11:00", especialista: "MARIA PIA ZAÑARTU", paciente: "ANGEL MUÑOZ", rut: "9878789-2", prevision: "ISAPRE"},
    {hora: "11:30", especialista: "SCARLETT WITTING", paciente: "MARIO KAST", rut: "7998789-5", prevision: "FONASA"},
    {hora: "13:00", especialista: "FRANCISCO VON TEUBER", paciente: "KARIN FERNANDEZ", rut: "18887662-K", prevision: "FONASA"},
    {hora: "13:30", especialista: "EDUARDO VIÑUELA", paciente: "HUGO SANCHEZ", rut: "17665461-4", prevision: "FONASA"},
    {hora: "14:00", especialista: "RAQUEL VILLASECA", paciente: "ANA SEPULVEDA", rut: "14441281-0", prevision: "ISAPRE"},
];

var radiologia = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' },
];

var traumatologia = [
    { hora: '08:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '09:00', especialista: 'RENE POBLETE', paciente: 'ANA GELLONA', rut: '13123329-', prevision: 'ISAPRE' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' },
];


// mostrando primera y ultima atencion de paciente de cada tabla, nombre, prevision (Primera atención: Juan Pérez - Fonasa | Última atención: Ana Gálvez - Isapre.)

document.write("<div class='container bg-light'>");

document.write("<h3>Atenciones dentales</h3>");
document.write(`<p><i class="fas fa-arrow-right"></i> Primero atención: ${dental[0].paciente} - ${dental[0].prevision} | Última antención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}</p>`);

document.write("<h3>Atenciones radiologia</h3>");
document.write(`<p><i class="fas fa-arrow-right"></i> Primero atención: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última antención: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}</p>`);

document.write("<h3>Atenciones traumatologia</h3>");
document.write(`<p><i class="fas fa-arrow-right"></i> Primero atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última antención: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}</p>`);

document.write("</div>");

document.write("<div class='container'>");
document.write("<h3 class='mt-4'>Tabla de Dental</h3>");
document.write(`
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Hora</th>
                    <th>Especialista</th>
                    <th>Paciente</th>
                    <th>Rut</th>
                    <th>Previsión</th>
                </tr>
            </thead>
        <tbody>
`);

dental.forEach(function (elemento,index) {
    document.write(`
        <tr>
            <td>${index+1}</td>
            <td>${elemento.hora}</td>
            <td>${elemento.especialista}</td>
            <td>${elemento.paciente}</td>
            <td>${elemento.rut}</td>
            <td>${elemento.prevision}</td>
        </tr>
    `)
});

document.write(`
        </tbody>
     </table>
`);

document.write("</div>");

radiologia.pop();
radiologia.shift();

document.write("<div class='container'>");
document.write("<h3 class='mt-4'>Tabla de Radiologia</h3>");

document.write(`
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Hora</th>
                    <th>Especialista</th>
                    <th>Paciente</th>
                    <th>Rut</th>
                    <th>Previsión</th>
                </tr>
            </thead>
        <tbody>
`);

radiologia.forEach(function (elemento,index) {
    document.write(`
        <tr>
            <td>${index+1}</td>
            <td>${elemento.hora}</td>
            <td>${elemento.especialista}</td>
            <td>${elemento.paciente}</td>
            <td>${elemento.rut}</td>
            <td>${elemento.prevision}</td>
        </tr>
    `)
});

document.write(`
        </tbody>
     </table>
`);

document.write("</div>");


traumatologia.push(
{ hora: '09:00', especialista: 'RENE POBLETE', paciente: 'ANA GELLONA', rut: '13123329-', prevision: 'ISAPRE' },
{ hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA' },
{ hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE' },
{ hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE' },
{ hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA' });

traumatologia = traumatologia.sort(function(a, b) {
    if (a.hora > b.hora) {
      return 1;
    }
    if (a.hora < b.hora) {
      return -1;
    }
    return 0;
});

document.write("<div class='container'>");
document.write("<h3 class='mt-4'>Tabla de Traumatologia</h3>");

document.write(`
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Hora</th>
                    <th>Especialista</th>
                    <th>Paciente</th>
                    <th>Rut</th>
                    <th>Previsión</th>
                </tr>
            </thead>
        <tbody>
`);

traumatologia.forEach(function (elemento,index) {
    document.write(`
        <tr>
            <td>${index+1}</td>
            <td>${elemento.hora}</td>
            <td>${elemento.especialista}</td>
            <td>${elemento.paciente}</td>
            <td>${elemento.rut}</td>
            <td>${elemento.prevision}</td>
        </tr>
    `)
});

document.write(`
        </tbody>
     </table>
`);

document.write("</div>");

var numero = ["1","54",-7,23,5,-4,2,24,-43];
console.log(numero.sort(function (a,b) {  
    return b - a;
}));

document.write("<div class='container'>");
document.write("<br>");
dental.forEach(function (elemento){
    document.write(`<p><i class="fas fa-arrow-right"></i> ${elemento.hora} - ${elemento.especialista} - ${elemento.paciente} - ${elemento.rut} - ${elemento.prevision}</p>`);
});
document.write("</div>");

document.write("<div class='container'>");
for (let index = 0; index < dental.length; index++) {
    datosDental = Object.values(dental[index]);
    document.write(`<p><i class="fas fa-arrow-right"></i>  ${datosDental.join(" - ")}</p>`);
};
document.write("</div>");

document.write("<div class='container'>");
var arregloTotal = dental.concat(traumatologia, radiologia);
arregloTotal.forEach(function (elemento) {
    document.write(`<p><i class="fas fa-syringe"></i>  ${elemento.paciente}</p>`);
});

document.write("</div>");

document.write("<div class='container mt-5 border boder-dark'>");
dental.forEach(function (elemento) {
    document.write(`<p><i class="fas fa-syringe"></i>  ${elemento.paciente}</p>`);
});
traumatologia.forEach(function (elemento) {
    document.write(`<p><i class="fas fa-syringe"></i>  ${elemento.paciente}</p>`);
});
radiologia.forEach(function (elemento) {
    document.write(`<p><i class="fas fa-syringe"></i>  ${elemento.paciente}</p>`);
});

document.write("</div>");

document.write("<div class='container mt-5 border boder-dark'>");
var previsonesDental = dental.filter(function (seguro){
    return seguro.prevision == "ISAPRE"
});

previsonesDental.forEach(function (elemento){
    document.write(`<p><i class="fas fa-hand-holding-medical"></i></i>  ${elemento.paciente} -  ${elemento.prevision}</p>`);
});
document.write("</div>");