import { Component, OnInit } from '@angular/core';
import { ICountry } from '../country/country.component';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
})
export class CountriesComponent implements OnInit {
  countries: ICountry[] = [];
  async ngOnInit() {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();

    data.forEach((country: any) => {
      this.countries.push({
        countryName: country.name.common,
        population: country.population,
        countryUrl: country.flags.png,
      });
    });
  }
}
