const DateTime = luxon.DateTime;
//console.log(DateTime);

// Creo una nueva fecha (en el momento que se invoca la función)
//const dt = DateTime.local();
// Crear una fecha a partir de parámetros
/* const dt = DateTime.local(2022, 12, 25, 20, 30, 15); 
console.log(dt.toISO()); */

// Crear una fecha a partir de un objeto
/* const dt = DateTime.fromObject(
    {day:7, hour:12, month:3, year:2017},
    {zone:'America/Buenos_Aires', numberingSystem:'beng'}
) 
console.log(dt.toISO()); */

// Crear una fecha a partir de un formato ISO
/* const dt = DateTime.fromISO("2016-05-23T09:15");
console.log(dt.toISO()); */

// Creo una fecha
/* const dt = DateTime.now();
console.log("Año: " + dt.year);
console.log("Mes: " + dt.month);
console.log("Día: " + dt.day); */

// Formateo de Fecha
/* const dt = DateTime.now();
console.log(dt.toLocaleString(DateTime.DATE_SHORT));
console.log(dt.toLocaleString(DateTime.DATE_MED));
console.log(dt.toLocaleString(DateTime.DATETIME_SHORT)); */

// Transformación
/* const dt = DateTime.now();
// Agrego tiempo
const dt_plus = dt.plus({hour:2});
console.log(dt_plus.toISO());
// Quito tiempo
const dt_minus = dt.minus({minutes:15});
console.log(dt_minus.toISO()); */

// Duración
// Defino una duración
/* const Duration = luxon.Duration;
const dt = DateTime.now();
const dur = Duration.fromObject({hour:1, minutes:10});
const dt_plus = dt.plus(dur);
console.log(dt_plus.toISO()); */

// Intervalos
const Interval = luxon.Interval;
const dt = DateTime.now();
const dt_destino = DateTime.local(2024, 2, 29);
const intervalo = Interval.fromDateTimes(dt, dt_destino);
console.log(intervalo);
console.log("Mateo, faltan " + Math.ceil(intervalo.length('days')) + " días para tu cumpleaños!");


