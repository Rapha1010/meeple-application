import { Component, OnInit } from '@angular/core';
import { MatchModel } from '../../models/MatchModel';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-betting',
  templateUrl: './create-betting.component.html',
  styleUrls: ['./create-betting.component.scss']
})
export class CreateBettingComponent implements OnInit {

  matchModel: MatchModel = new MatchModel();

  teamGroups = [{id:1, name:'A'}, {id:2, name:'B'}, {id:3,name:'C'}, {id:4,name:'D'}, {id:5,name:'E'}, {id:6,name:'F'}]

  matchList = [
    {
      id: 1,
      team1_name: 'Senegal',
      team2_name: 'Holanda',
      team1_value: 2,
      team2_value: 3,
      group_id: 1
    },
    {
      id: 2,
      team1_name: 'Catar',
      team2_name: 'Equador',
      team1_value: 1,
      team2_value: 1,
      group_id: 1
    },
    {
      id: 3,
      team1_name: 'Inglaterra',
      team2_name: 'Irã',
      team1_value: 3,
      team2_value: 4,
      group_id: 2
    },
    {
      id: 4,
      team1_name: 'EUA',
      team2_name: 'País de Gales',
      team1_value: 1,
      team2_value: 2,
      group_id: 2
    },
    {
      id: 3,
      team1_name: 'Argentina',
      team2_name: 'Arábia Saudita',
      team1_value: 3,
      team2_value: 4,
      group_id: 3
    },
    {
      id: 4,
      team1_name: 'México',
      team2_name: 'Polônia',
      team1_value: 1,
      team2_value: 2,
      group_id: 3
    }
    ,
    {
      id: 3,
      team1_name: 'Dinamarca',
      team2_name: 'Tunísia',
      team1_value: 3,
      team2_value: 4,
      group_id: 4
    },
    {
      id: 4,
      team1_name: 'França',
      team2_name: 'Austrália',
      team1_value: 1,
      team2_value: 2,
      group_id: 4
    }
    ,
    {
      id: 3,
      team1_name: 'Alemanha',
      team2_name: 'Japão',
      team1_value: 3,
      team2_value: 4,
      group_id: 5
    },
    {
      id: 4,
      team1_name: 'Espanha',
      team2_name: 'Costa Rica',
      team1_value: 1,
      team2_value: 2,
      group_id: 5
    }
    ,
    {
      id: 4,
      team1_name: 'Marrocos',
      team2_name: 'Croácia',
      team1_value: 1,
      team2_value: 2,
      group_id: 6
    },
    {
      id: 4,
      team1_name: 'Bélgica',
      team2_name: 'Canadá',
      team1_value: 1,
      team2_value: 2,
      group_id: 6
    }
  ];

  constructor() { 
  }

  ngOnInit(): void {
  }

  onClickSubmit(data:any): void {
    console.log(data);
  }

}


