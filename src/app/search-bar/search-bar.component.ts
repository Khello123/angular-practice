import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  
})
export class SearchBarComponent {

@Output() searchClick=new EventEmitter<string> ()
searchedCountry :string="" 

search(){
  alert(this.searchedCountry)
  this.searchClick.emit(this.searchedCountry)
}


}
