//1st Question
class restaurantManager {
    //part A
    restaurantList = [
        {
            id: 1,
            restaurantname: "Rins kitchen",
            address: "khantapara",
            city: "Balasore",
        },
        {
            id: 2,
            restaurantname: "Mayfair Lagoon",
            address: "Jayadev Bihar",
            city: "Bhadrak",
        },
        {
            id: 3,
            restaurantname: "Venus Inn Restaurant",
            address: "Bapuji nagar",
            city: "cuttack",
        },
        {
            id: 4,
            restaurantname: "Garam Masala",
            address: "Chandrasekherpur",
            city: "dhenkanal",
        },  
        {
            id: 5,
            restaurantname: "Hotel Swosti",
            address: "Jan Path",
            city: "Bhubneswar",
        },
    ];
    //part B
    printAllRestaurantNames = () => {
        return this.restaurantList.map((data) => {
            return data.restaurantname;
        });
    };
    //part c
 filterRestaurantByCity = (cityName) => {
    return this.restaurantList.filter((data) => {
        return data.city === cityName;
    });

 }
 
}
let restObj = new restaurantManager();

console.log(restObj.restaurantList);
console.log(restObj.printAllRestaurantNames())
console.log(restObj.filterRestaurantByCity())


//2nd question
var orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
    }; 

//Part A
let out = 0;
for(key in orderData) {
out += Number(orderData[key]);
}
 
//Part B

//20/199*100 = 10.050
//29/199*100 = 14.57
//30/199*100 = 15.07
//44/199*100 = 22.110
//76/199*100 = 38.19
function getPercent(orderData){
    let total = 0;
for(key in orderData) {
total += Number(orderData[key]);
}
  let output = [];
  let count = 0;
  for(key in orderData){
    let percentValue = ((orderData[key]/total)*100).toFixed(2);
    count = count + 1;
    let myObj = {};
    myObj.id = count;
    myObj.order = key;
    myObj.order_percentage = `${percentValue}%`;
    myObj.restaurant = "Punjabi Tadka";
    output.push(myObj);
  }
  return output;
}
console.log(getPercent(orderData));

    