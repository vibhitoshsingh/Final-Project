import { Pipe, PipeTransform } from '@angular/core';
import {GetUsers} from '../../Model/GetUser';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(value: GetUsers[], searchText?: any): any {
    try {
    if(searchText!= undefined && searchText!= "") {
     return value.filter( x=> (x.first_name+" "+x.last_name).toLowerCase().includes(searchText.toLowerCase()))
    }
    else
    return value;
    }catch(e){}
  }

}
