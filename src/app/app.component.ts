import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  title = 'ProfileStats';
  private follower: number;

  constructor(private http: HttpClient) {  this.follower = 0;}

  getInfo(user: string){
    this.http.get(this.getUrlForProfile(user)).subscribe(data => {
      this.follower = data['graphql']['user']['edge_followed_by']['count']     
    })
  }

  private getUrlForProfile(user: string): string {
    return `https://www.instagram.com/${user}/?__a=1`
  }
}
