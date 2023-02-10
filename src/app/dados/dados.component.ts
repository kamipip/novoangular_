import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit{
  dados: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.adviceslip.com/advice').subscribe(dados => {
      this.dados = dados;
    });
  }


}
