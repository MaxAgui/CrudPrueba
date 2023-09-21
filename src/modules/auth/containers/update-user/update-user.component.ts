import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sb-update-user',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
    user = {
        nombre: '',
        correo: ''
      };

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('hola',this.user)
    this.userService.updateUser(this.user).subscribe(response => {
      console.log('Usuario actualizado:', response);
    });


    this.router.navigateByUrl('/tables');

  }

}
