import { Component, Input } from '@angular/core';

export interface ICountry{
  countryName:string;
  countryUrl:string;
  population:number;
}
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  
})

export class CountryComponent implements ICountry {

  @Input() countryName: string="";
  @Input() countryUrl: string="";
  @Input() population: number=0;

  

}
