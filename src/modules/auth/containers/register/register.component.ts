import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'sb-register',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './register.component.html',
    styleUrls: ['register.component.scss'],
})
export class RegisterComponent implements OnInit {
    user = {
        nombre: '',
        correo: ''
      };
    constructor(private userService: UserService,private router: Router) {}
    ngOnInit() {}

    onSubmit() {
        console.log('hola',this.user)
        this.userService.createUser(this.user).subscribe(response => {
          console.log('Usuario creado:', response);
        });


        this.router.navigateByUrl('/tables');

      }

}
