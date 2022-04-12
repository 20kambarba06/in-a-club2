let club = [1,2,3,4,5,6,7,8]
 let totalPlace = 10
 let freePlace = totalPlace - club.length

 let ask = prompt()

 if(ask <= freePlace) {
     console.log('welcome');
 } else {
     console.log('go home');
 }
