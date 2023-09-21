import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

import { User } from '../models';
import { HttpClient } from '@angular/common/http';

const userSubject: ReplaySubject<User> = new ReplaySubject(1);

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {
        this.user = {
            id: '123',
            firstName: 'Start',
            lastName: 'Bootstrap',
            email: 'no-reply@startbootstrap.com',
        };
    }

    set user(user: User) {
        userSubject.next(user);
    }

    get user$(): Observable<User> {
        return userSubject.asObservable();
    }

    createUser(user: any): Observable<any> {
        console.log("messi",user)
        // URL de la API donde quieres hacer el POST
        const url = 'http://localhost:8080/api/usuarios';

        // Datos que quieres enviar en el cuerpo de la solicitud

        const data = {
            nombre: `${user.nombre}`,
            correo: `${user.correo}`,
            sector: `${user.sector}`,
            };


        // Configuración de la solicitud
        const opciones = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        };

        // Realizar la solicitud POST
        fetch(url, opciones)
        .then(response => {
            if (!response.ok) {
            throw new Error('Ocurrió un error al realizar la solicitud.');
            }
            return response.json();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data);
          })
        return this.http.post<any>('http://localhost:8080/api/usarios', user);
      }

    updateUser(user: any,id:any): Observable<any> {
        console.log("messi",user)
        // URL de la API donde quieres hacer el POST
        const url = `http://localhost:8080/api/usuarios/${id}`;

        // Datos que quieres enviar en el cuerpo de la solicitud
        interface UserData {
            nombre?: string;
            correo?: string;
            sector?: string;
            rol?: string;
          }

        const data:UserData = {};

        console.log('el NOMBRE',user.nombre)

        if (user.nombre !== null && user.nombre !== '') {
            data.nombre = user.nombre;
        }

        if (user.correo !== null && user.correo !== '') {
            data.correo = user.correo;
        }

        if (user.sector !== null && user.sector !== '') {
            data.sector = user.sector;
        }

        if (user.rol !== null && user.rol !== '') {
            data.rol = user.rol;
        }

        console.log('dataaaaaa',data)

        // Configuración de la solicitud
        const opciones = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        };

        // Realizar la solicitud POST
        fetch(url, opciones)
        .then(response => {
            if (!response.ok) {
            throw new Error('Ocurrió un error al realizar la solicitud.');
            }
            return response.json();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data);
          })

        return this.http.post<any>('http://localhost:8080/api/usarios', user);
      }


}
