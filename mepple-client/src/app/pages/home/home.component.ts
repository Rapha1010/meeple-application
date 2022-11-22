import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/CardModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  page = 1;
  pageSize = 4;

  filterTerm!: string;
  cardList: CardModel[] = [];
  cardArray: Array<any> = [
    { id: 1, name: 'Serrated Scorpion', color: 'black', type: 'control' },
    { id: 2, name: 'Crypt Rats', color: 'green', type: 'aggro' },
    { id: 3, name: 'Bump in the Night', color: 'blue', type: 'control' },
    { id: 4, name: 'Sovereign\'s Bite', color: 'white', type: 'aggro' },
    { id: 5, name: 'Trespasser\'s Curse', color: 'red', type: 'aggro' },
    { id: 1, name: 'Serrated Scorpion', color: 'black', type: 'control' },
    { id: 2, name: 'Serrated Scorpion', color: 'green', type: 'aggro' },
    { id: 3, name: 'Serrated Scorpion', color: 'blue', type: 'control' },
    { id: 4, name: 'Serrated Scorpion', color: 'white', type: 'aggro' },
    { id: 5, name: 'Serrated Scorpion', color: 'red', type: 'aggro' },
    { id: 1, name: 'Serrated Scorpion', color: 'black', type: 'control' },
    { id: 2, name: 'Serrated Scorpion', color: 'green', type: 'aggro' },
    { id: 3, name: 'Serrated Scorpion', color: 'blue', type: 'control' },
    { id: 4, name: 'Serrated Scorpion', color: 'white', type: 'aggro' },
    { id: 5, name: 'Serrated Scorpion', color: 'red', type: 'aggro' },
  ];

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    this.cardArray.forEach(element => {
      this.cardList.push(element);
    });
  }

  addCard(id: number): void {
    console.log("add card : ", id);
  }

}
