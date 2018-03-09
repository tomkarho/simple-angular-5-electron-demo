import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ElectronService} from 'ngx-electron';
import {IRepository} from './Repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  username: string;
  repositories: IRepository[];
  error: {};

  constructor(private http: HttpClient, private electron: ElectronService) {

  }


  getRepos() {
    this.repositories = null;
    this.error = null;

    console.log('Getting repos for user', this.username);
    this.http.get(`https://api.github.com/users/${this.username}/repos`).subscribe((response: IRepository[]) => {
      this.repositories = response;
    }, (response) => {
      this.error = {
        message: response.error.message,
        status: response.status
      };
    });
  }
}
