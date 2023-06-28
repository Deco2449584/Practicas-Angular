import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-store';
  name = 'Daniel';
  age = 25;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btn = true;
  person = {
    name: 'DanielOPbjeto',
    age: 25,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
  };
  fondo = 'gray';
  names: string[] = ['Daniel', 'Juan', 'Pedro'];
  newName: string = '';
  toggleBtn() {
    this.btn = !this.btn;
  }
  aumentar() {
    this.person.age = this.person.age + 1;
  }
  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }
  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
