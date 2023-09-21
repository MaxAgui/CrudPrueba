import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sb-update-user',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

    user = {
        nombre: '',
        correo: '',
        sector: '',
        rol: '',
      };

  constructor(private userService: UserService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  onSubmit() {
    const id = this.route.snapshot.params.id;
    console.log(id)
    console.log('hola',this.user)
    this.userService.updateUser(this.user,id).subscribe(response => {
      console.log('Usuario actualizado:', response);
    });


    this.router.navigateByUrl('/tables');
    // window.location.href = 'http://localhost:4200/tables';


  }

}
