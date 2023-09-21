import { Country } from '../models';

let COUNTRIES: Country[];

fetch('http://localhost:8080/api/usuarios')
  .then(response => response.json())
  .then(data => {
    console.log('Usuarios:', data);
    COUNTRIES = data;
    console.log('Usuarios:', COUNTRIES);
  })
  .catch(error => {
    console.error('Error al hacer la solicitud:', error);
  });

export { COUNTRIES };

// export const COUNTRIES: Country[] = [
//     {
//         id: 1,
//         nombre: 'Manuel Agui',
//         correo: "manie@gmail.com",
//         rol: "Admin",
//         sector: "Optimizacion",
//         flag: 'f/f3/Flag_of_Russia.svg'
//     },
//     {
//         id: 2,
//         nombre: 'Mercedes Benz',
//         correo: "ads@gmail.com",
//         rol: 'PlanUser',
//         sector: "Planificacion",
//         flag: 'c/c3/Flag_of_France.svg'
//     },

// ];
