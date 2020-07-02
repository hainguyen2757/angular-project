import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import {Items} from '../models/item';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<Items>;
	Items: Observable<Items[]>;

  firebaseID=''; 
  firebaseClass1='';
  firebaseName=''; 
  firebaseDoB='';
  firebaseMajor='';
  firebaseID1 = '';
  firebaseStatus ='';
  firebaseSearch='';

  // searchStudent = '';
   


  constructor(private readonly afs: AngularFirestore, private restrict:FormBuilder) {
    this.itemsCollection = afs.collection<Items>('Items');
    //this.items = this.itemsCollection.valueChanges(); 
    // .valueChanges() is simple. It just returns the 
    // JSON data without metadata. If you need the 
    // doc.id() in the value you must persist it your self
    // or use .snapshotChanges() instead. Only using for versions 7 and earlier
    this.Items = this.itemsCollection.valueChanges( { idField: 'id1' }); //chỉ sử dụng cho Angular 8,9
    //id1: ten field đại diện cho documnent id, lưu ý không 
    //được đặt trùng với tên field khai báo trong dữ liệu
  }


   addstudent: FormGroup;
  ngOnInit(): void {
    this.addstudent = this.restrict.group({
      id:['',Validators.required], 
      class1:['',Validators.required],
      name:['',Validators.required],
      major:['',Validators.required],
      status:['',Validators.required]}
      
    )
    }


  Delete (docId){
       this.itemsCollection.doc(docId).delete();
  }

  getID(event){
    this.firebaseID = event.target.value;
    
  }
  getClass1(event){
    this.firebaseClass1 = event.target.value;
   

  }
  getName(event){
    this.firebaseName = event.target.value;
  }
  getDoB(event){
    this.firebaseDoB = event.target.value;
  }
  getMajor(event){
    this.firebaseMajor = event.target.value;
    console.log(this.firebaseMajor);
  }
  getStatus(event){
    this.firebaseStatus = event.target.value;
    console.log(this.firebaseStatus);
    
  }
  // getSearch(event){
  //   this.firebaseSearch = event.target.value;
  //   this.StudentSearchFinal = this.productsFound();
  //   console.log(this.StudentSearchFinal)
  // }

  AddNew(
    id: string = this.firebaseID,
    class1: string = this.firebaseClass1,
    name: string = this.firebaseName,
    dob: string = this.firebaseDoB,
    major: string = this.firebaseMajor,
    status: string = this.firebaseStatus
  ) {
    const firebase: Items = {};
    const docId = this.afs.createId();
    firebase.id = id;
    firebase.class1 = class1;
    firebase.name = name;
    firebase.dob = dob;
    firebase.major = major;
    firebase.status = status;
    this.itemsCollection.add(firebase);
}

getData(
    code,
    id,
    class1,
    name,
    dob,
    major,
    status
){
  this.firebaseID1 = code;
  this.firebaseID = id;
  this.firebaseClass1 = class1;
  this.firebaseName = name;
  this.firebaseDoB = dob;
  this.firebaseMajor = major;
  this.firebaseStatus = status
  console.log(this.firebaseID1);
}
update(
  id: string = this.firebaseID,
  class1: string = this.firebaseClass1,
  name: string = this.firebaseName,
  dob: string = this.firebaseDoB,
  major: string = this.firebaseMajor,
  status: string = this.firebaseStatus
) {
  const docId = this.firebaseID1;
  const firebase: Items = {};
  firebase.id = id;
  firebase.class1 = class1;
  firebase.name = name;
  firebase.dob = dob;
  firebase.major = major;
  firebase.status = status;
  this.itemsCollection.doc(docId).update(firebase);
}

changeStatus(log){
  if (log == 'true'){
    return true;
  }
  else {
    return false;
  }
}



// itemFound =  () => {
//   return this.findProductBy(this.firebaseSearch, this.Items);
// } 
// productsFound = () => {
//   let itemTemp = this.itemFound()
//   return itemTemp.length === 1 && 
//   this.comp(this.firebaseSearch, itemTemp[0].name) ? [] : itemTemp
// }
// comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

// findProductBy(queryItem, items) {
//   if (queryItem === '') {
//       return [];
//   }
//   var regEscape = this.escapeRegExp(queryItem)
//   const regex = new RegExp(`${regEscape.trim()}`, 'i');
//   return items.filter(dataItem =>
//       dataItem.name.search(regex) >= 0);
// }
// escapeRegExp(str) {
//   return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
// }
}
