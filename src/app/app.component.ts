
import { StarWarsService } from './app.service';
import { Component } from '@angular/core';
import { Film } from './film';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [StarWarsService]
})
export class AppComponent {
  title = 'Filmes Star Wars';
  films : Film[];
  expandedIndex = -1;

  constructor(private httpService : StarWarsService){}
  ngOnInit() {
    this.httpService.getFilms()
      .subscribe(
        data => this.films = data.results.sort((left, right): number => {
          if (left.episode_id < right.episode_id) return -1;
          if (left.episode_id > right.episode_id) return 1;
          return 0;
        }),
        error => alert(error)
      );
   }

  collaps(index: number) {  
    this.expandedIndex = index === this.expandedIndex ? -1 : index;
  }
}
