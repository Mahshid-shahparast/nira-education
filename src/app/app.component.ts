import { Component, OnInit } from '@angular/core';
import {
  cloneDeep,
  each,
  every,
  filter,
  find,
  includes,
  map,
  orderBy,
  reject,
  remove,
  some,
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
    //   { id: 1, name: 'Narcissus', color: 'white', season: 'winter' },
    //   { id: 2, name: 'Sunflower', color: 'yellow', season: 'summer' },
    //   { id: 3, name: 'Rose', color: 'Red', season: 'summer' },
    // ];
    //ظرز کار
    // const winterFlower = find(flowers, (item) => {
    //   return item.season === 'winter';
    // });
    // فقظ اولین آیتمی که با شرط برابر باشد را برمگرداند ی
    // const summerFlowers = find(flowers, (item) => {
    //   return (item.season === 'summer');
    // });
    //اگر شرط برقرار نباشد undefind برمیگرداند
    // console.log('summerFlowers:', summerFlowers);
    // const autumnFlower = find(flowers, (item) => {
    //   return item.season === 'autumn';
    // });
    // const winterFlower = find(flowers, { color: 'white' });
    // console.log('winterFlower:', winterFlower);
    // console.log('autumnFlower:',autumnFlower)
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
    // دراصل از آرایه ی اصلی مواردی که درون شرط متود صدق کند  را حذف می کند
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
    // ///////////////////////////// reject method //////////////////////////////
    //داده ی اولیه را تغییر نمی دهد و به عنوان نتیجه آرایه ای می دهد که آیتمی که شرط مورد نظرش را دارد حذف میکند.
    // const lodashRejectedAbilities = reject(initialAbilities, (item) => {
    //   return item.id == 1;
    // });
    // console.log(
    //   'initialAbilities',
    //   initialAbilities,
    //   'lodashRejectedAbilities',
    //   lodashRejectedAbilities
    // );
    // میتوان برای حذف از فیلتر هم با شرط معکوس استفاده کرد ولی  استفاده از ریجکت خوانا تر و کلین تر است.
    ///////////////////////////////////////////   every method //////////////////////////////////////////////
    //برای چک  کردن یک شرط بین تمام المان های یک آرایه به کار می رود و خروجی آن از نوع boolean است
    // const classUserA = [
    //   {
    //     id: 1,
    //     name: 'Hoda',
    //     isActive: true,
    //   },
    //   {
    //     id: 2,
    //     name: 'Niloo',
    //     isActive: true,
    //   },
    //   {
    //     id: 3,
    //     name: 'Shila',
    //     isActive: true,
    //   },
    // ];
    // const lodashEveryCheckClassA = every(classUserA, (item) => {
    //   return item.isActive === true;
    // });

    // console.log('lodashEveryCheckClassA:', lodashEveryCheckClassA);

    // const classUserB = [
    //   {
    //     id: 1,
    //     name: 'Shahla',
    //     isActive: true,
    //   },
    //   {
    //     id: 1,
    //     name: 'Shahla',
    //     isActive: true,
    //   },
    //   {
    //     id: 2,
    //     name: 'Shirin',
    //     isActive: false,
    //   },
    //   {
    //     id: 3,
    //     name: 'Diba',
    //     isActive: true,
    //   },
    // ];
    // const lodashEveryCheckClassB = every(classUserB, (item) => {
    //   return item.isActive === true;
    // });
    // const lodashEveryCheckClassB = every(classUserB, { isActive: true });
    // console.log('lodashEveryCheckClassB:', lodashEveryCheckClassB);
    ///////////////////  some method/////////////////////////////////////
    // اگر بخواهیم بین آیتم های یک آرایه چک کنیم که آیا حداقل یک آیتم در شرط مورد نظرمان صدق میکند یا نه . و خروجی آن یک boolean است.
    // const lodashSomeCheckClassB = some(classUserB, (item) => {
    //   return item.isActive === true;
    // });
    //   const lodashSomeCheckClassB = some(classUserB, {
    //     isActive: true,
    //   });
    //   console.log('lodashSomeCheckClassB:', lodashSomeCheckClassB);

    ////////////////////////////////////// orderBy method /////////////////////////////////////
    // const users = [
    //   {
    //     name: 'Alex',
    //     likes: 200,
    //   },
    //   {
    //     name: 'John',
    //     likes: 120,
    //   },
    //   {
    //     name: 'LiLi',
    //     likes: 210,
    //   },
    // ];

    //   const sortedUsers = users.sort((userA, userB) => {
    //     return userA.likes > userB.likes ? -1 : 1;
    //   });
    //   console.log("sortedUsers:", sortedUsers)
    // }

    // const sortedUsers = users.sort((userA, userB) => {
    //   return userA.likes < userB.likes ? -1 : 1;
    // });
    // console.log("sortedUsers:", sortedUsers)
    // const lodashOrderBy = orderBy(users, ['like']);
    // console.log("lodashOrderBy", lodashOrderBy)

    // const lodashOrderBy = orderBy(users, ['like'],['desc']);
    // console.log("lodashOrderBy", lodashOrderBy)

    const users = [
      {
        name: 'Alex',
        likes: 200,
      },
      {
        name: 'John',
        likes: 120,
      },
      {
        name: 'Jack',
        likes: 120,
      },
      {
        name: 'LiLi',
        likes: 210,
      },
    ];
    const lodashOrderBy = orderBy(users, ['like','name'], ['desc','asc']);
    console.log('lodashOrderBy', lodashOrderBy);
  }
}
