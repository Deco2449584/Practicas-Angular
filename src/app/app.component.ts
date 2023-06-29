import { Component } from '@angular/core';
import { Products } from './product.model';
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
  register = {
    name: '',
    email: '',
    password: '',
  };
  box = {
    width: 100,
    height: 100,
    background: 'red',
  };
  person = {
    name: 'DanielOPbjeto',
    age: 25,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
  };
  fondo = 'gray';
  names: string[] = ['Daniel', 'Juan', 'Pedro'];
  newName: string = '';
  products: Products[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image:
        'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image:
        'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/bike.jpg',
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image:
        'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/album.jpg',
    },
    {
      name: 'Mis libros',
      price: 23,
      image:
        'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/books.jpg',
    },
    {
      name: 'Casa para perro',
      price: 34,
      image:
        'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/house.jpg',
    },
    {
      name: 'Gafas',
      price: 3434,
      image:
        'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/glasses.jpg',
    },
  ];
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
  onRegister() {
    console.log(this.register);
  }
}
