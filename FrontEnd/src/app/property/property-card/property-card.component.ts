import { Component } from "@angular/core";
@Component  ({
selector:'app-property-card',
//template:``,
templateUrl:'property-card.component.html',
styleUrls :['property-card.component.css']

})
export class PropertyCardComponent{
Property:any={
"id":"1",
"Name":"House",

"type":"House",
"price":"12000"

}


}