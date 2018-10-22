// "use strict";

// class addressBook {
//     constructor() {
//         this.contactListArray = [];
//     }
//     add(info){
//         console.log(this.contactListArray);
//         console.log(this.contactListArray);
//         this.contactListArray.push(info);
//         console.log(this.contactListArray);
//     }
//     deleteAt(deletePosition) {
//         console.log(this.contactListArray);
//         this.contactListArray.splice(deletePosition,1);
//         console.log(this.contactListArray);

//     }
//     print() {

//         for (let contact of this.contactListArray) {
//             console.log(contact);

//         }
//     }

// }

// class contact {
//     constructor(name,email,phone,relation) {
//         this.name = name;
//         this.phone = phone;
//         this.email = email;
//         this.relation = relation;
//     }

// }

// let myAddressBook = new addressBook();
// console.log(myAddressBook.contactListArray);


// while(true) {
//     let Choice= prompt("would you like to add, delete print or quit?")

//     if (Choice === "add") {
//         let name = prompt ("enter a name");
//         let email = prompt ("enter email");
//         let phone = prompt ("enter a phone");
//         let relation = prompt ("enter a relation");
//         myAddressBook.add(new contact(name,email,phone,relation));

//     } else if (Choice === "delete") { 
//         let indexPositionToDelete = prompt("enter a position to delete");
//         myAddressBook.deleteAt(indexPositionToDelete);

//     } else if (Choice === "print") {
//         // let indexPostionToPrint= prompt("enter a position to print");
//         myAddressBook.print();

//     } else if (Choice === "quit") {
//         break;
//     } else {
//         break; //Choice= prompt("would you like to add, delete print or quit?")
//     }
// }