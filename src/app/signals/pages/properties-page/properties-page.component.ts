import { Component, computed, effect, signal } from '@angular/core';
import { User } from './../../interfaces/user-request.interface';
@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css'],
})
export class PropertiesPageComponent {
  public user = signal<User>({
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
  });

  public counter = signal(10);

  public fullName = computed(
    () => `${this.user().first_name} ${this.user().last_name}`
  );

  public userChangeEffect = effect(() => {
    console.log(`${this.user().first_name} - ${this.counter()}`);
  });

  onFieldUpdate(field: keyof User, value: string) {
    this.user.mutate((current) => {
      switch (field) {
        case 'email':
          current.email = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
        case 'id':
          current.id = Number(value);
          break;
      }
    });
  }

  increaseBy(value: number) {
    this.counter.update((current) => current + value);
  }
}
