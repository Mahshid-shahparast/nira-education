import { Component, OnInit } from '@angular/core';
import {
  cloneDeep,
  each,
  filter,
  find,
  includes,
  map,
  reject,
  remove,
  without,
} from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'lodash';

  ngOnInit(): void {
    /////////////////////////////////each Method For Array////////////////////////////////////////
    // let myArray = [1, 2, 3];
    // const jsMethodResult = myArray.forEach((item) => {
    //   console.log('js:', item);
    // });
    // const lodashMethodResult = each(myArray, (item) => {
    //   console.log('lodash', item);
    // });
    /////////////////////////////////each Method For Object////////////////////////////////////////
    // console.log(
    //   ' jsMethodResult:',
    //   jsMethodResult,
    //   'lodashMethodResult:',
    //   lodashMethodResult
    // );
    // let myFavoriteTastesObject = {
    //   Id1: { name: 'chocolate' },
    //   Id2: { name: 'coffee' },
    // };
    //myFavoriteTastesObject.forEach();
    // let myFavoriteTastesArray: any[] = [];
    // each(myFavoriteTastesObject, (item, index) => {
    //   console.log(item, index);
    //   myFavoriteTastesArray.push(item);
    // });
    // console.log('myFavoriteTastesArray:', myFavoriteTastesArray);
    /////////////////////////////////mapp Method for Object Array////////////////////////////////////////
    // let myArray = [
    //   { id: 'THR', cityName: 'Tehran' },
    //   { id: 'AWZ', cityName: 'Ahwaz' },
    // ];
    // let lodashCityArray = map(myArray,(item)=>{
    //   return item.cityName
    // })
    // let lodashCityArray = map(myArray, 'cityName');
    // console.log('lodashCityArray:', lodashCityArray);
    /////////////////////////////////mapp Method for Object////////////////////////////////////////
    // let myObject = {
    //   1: { character: { name: 'Jack', hairColor: 'blond' } },
    //   2: { character: { name: 'Rose', hairColor: 'ginger' } },
    // };
    // let lodashIdArray = map(myObject, (item) => {
    //   return item;
    // });
    // let lodashCharacterArray = map(myObject, (item) => {
    //   return item.character;
    // });
    // let LodashNameArray = map(myObject, (item) => {
    //   return item.character.name;
    // });
    // console.log(
    //   'lodashIdArray:',
    //   lodashIdArray,
    //   'LodashNameArray:',
    //   LodashNameArray,
    //   'lodashCharacterArray:',
    //   lodashCharacterArray
    // );
    ///////////////////////An Example For "map" Method///////////////////////
    // let users = [
    //   {
    //     id: 1,
    //     first_name: 'Hansel',
    //     status: 'active',
    //   },
    //   {
    //     id: 2,
    //     first_name: 'Gretel',
    //     status: 'inActive',
    //   },
    // ];
    //////////////goal/////////////
    // let normalizedUsers = [
    //   {
    //     id: 1,
    //     firstName: 'Hansel',
    //     isActive:true,
    //   },
    //   {
    //     id: 2,
    //     firstName: 'Gretel',
    //     isActive:false,
    //   },
    // ];
    //////////////answer/////////////
    // function normalizeUsers(users: any) {
    //   return map(users, (item) => {
    //     return {
    //       id: item.id,
    //       firstName: item.first_name,
    //       isActive: item.status === 'active',
    //     };
    //   });
    // }
    // const normalizedUsers = normalizeUsers(users);
    // console.log('normalizedUsers:', normalizedUsers);
    /////////////////////////////filter method/////////////////////
    // let comedianCharacters = [
    //   { id: 1, name: 'Lauren', body: 'thin', IQStatus: 'stupid' },
    //   { id: 2, name: 'Hardy', body: 'fat', IQStatus: 'silly' },
    // ];
    // let lodashFilterArray = filter(comedianCharacters, (item) => {
    //   return item.body === 'fat';
    // });
    ///////////////////////filter result are allways array/////////////////
    // let lodashFilterArray = filter(comedianCharacters, (item) => {
    //   return item.IQStatus === 'smart';
    // });
    // console.log('lodashFilterArray', lodashFilterArray);
    // let comedianCharactersObject = {
    //   1: { name: 'Lauren', body: 'thin', IQStatus: 'stupid' },
    //   2: { name: 'Hardy', body: 'fat', IQStatus: 'silly' },
    // };
    // let lodashFilterArray = filter(comedianCharacters, (item) => {
    //   return item.body === 'fat';
    // });
    //   let lodashFilterArray = filter(comedianCharacters, { name: 'Hardy' });
    //   console.log('lodashFilterArray:', lodashFilterArray);
    ///////////////////////////// example for filter method /////////////////////
    // let products = [
    //   { id: 1, name: 'milk', price: '1$' },
    //   { id: 2, name: 'bread', price: '2$' },
    //   { id: 3, name: 'meat', price: '3$' },
    // ];
    // function searchProducts(products: any[], searchedValue: string) {
    //   return filter(products, (item) => {
    // return item.name.includs(searchedValue);
    //     return includes(item.name, 'm');
    //   });
    // }
    // const searchProductsResult = searchProducts(products, 'm');
    // console.log('searchProductsResult:', searchProductsResult);
    ////////////////////////////////////  find method  ///////////////////////////////////////

    // let flowers = [
    //   { id: 1, name: 'Narcissus', color: 'white' },
    //   { id: 1, name: 'Sunflower', color: 'yellow' },
    // ];
    // const winterFlower = find(flowers, (item) => {
    //   return item.color === 'white';
    // });
    // const winterFlower = find(flowers, (item) => {
    //   return item.color === 'red';
    // });
    // const winterFlower = find(flowers, { color: 'white' });
    // console.log('winterFlower:', winterFlower);
    /////////////////////////// without method /////////////////////////
    //داده ی اولیه را تغییر نمی دهد
    // let initialArray = [1, 2, 3];
    // const lodashWithoutArray = without(initialArray, 2, 3);
    // console.log(
    //   'initialArray:',
    //   initialArray,
    //   'lodashWithoutArray:',
    //   lodashWithoutArray
    // );

    /////////////////////////// remove method /////////////////////////

    // آیتم ها را از آرایه ی اولیه حذف می کند و نتیجه ی آن هم آرایه ای از آبجکت های  حذف شده است
    // let initialAbilities = [
    //   { id: 1, name: 'running', isActive: false },
    //   { id: 2, name: 'climbing', isActive: true },
    //   { id: 3, name: 'imagination', isActive: true },
    // ];
    // const lodashRemovedAbilities = remove(initialAbilities, (item) => {
    //   return !item.isActive
    // });
    // console.log(
    //   'initialAbilities',
    //   initialAbilities,
    //   'lodashRemovedAbilities',
    //   lodashRemovedAbilities
    // );
    ///////////////////////////// reject method //////////////////////////////
    //داده ی اولیه را تغییر نمی دهد و به عنوان نتیجه آرایه ای می دهد که آیتمی که شرط مورد نظرش را دارد حذف میکند.
    // const lodashRejectedAbilities = reject(initialAbilities, (item) => {
    //   return !item.isActive;
    // });
    // console.log(
    //   'initialAbilities',
    //   initialAbilities,
    //   'lodashRemovedAbilities',
    //   lodashRejectedAbilities
    // );
    
    // میتوان برای حذف از فیلتر هم با شرط معکوس استفاده کرد ولی  استفاده از ریجکت خوانا تر و کلین تر است.
  }
}
