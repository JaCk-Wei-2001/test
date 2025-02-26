import { Router, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-createtable',
  imports: [RouterOutlet],
  templateUrl: './createtable.component.html',
  styleUrl: './createtable.component.scss'
})
export class CreatetableComponent {
  constructor(private router: Router) {};

  newqt(){
    this.router.navigateByUrl('/createtable/newqt')
  }
  newchart(){
    this.router.navigateByUrl('/createtable/newchart')
  }
  backadminpage(){
    this.router.navigateByUrl('/adminstartpage')
  }
}
