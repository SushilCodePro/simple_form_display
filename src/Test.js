// function check( a){

//     if(typeof (a)!=object){
//         return;
//     }
//     let cnt=0;
//     for(let i=0; i<a.length-1; i++){
//         cnt=cnt+1;
//     }
//     return cnt;



// }

// const object = {
//     company: {
//       name: "Tech Innovators Inc.",
//       address: {
//         street: "1234 Silicon Valley Blvd",
//         city: "San Francisco",
//         state: "CA",
//         zipCode: "94107",
//         country: {
//           name: "United States",
//           code: "US",
//           continent: {
//             name: "North America",
//             area: "24.71 million km²",
//           },


// const {city}=object.company.address;

const object = {
    company: {
      name: "Tech Innovators Inc.",
      address: {
        street: "1234 Silicon Valley Blvd",
        city: "San Francisco",
        state: "CA",
        zipCode: "94107",
        country: {
          name: "United States",
          code: "US",
          continent: {
            name: "North America",
            area: "24.71 million km²",
          },
        },
      },
    },
  };

for(let key in object){
  if(object[key]==='object' && object!==null){
    print(object[key]);
  }
  else{
    console.log(`${key}: ${object[key]}`);
  }
}
function print(obj){
  console.log(`${key}: ${object[key]}`);
}
