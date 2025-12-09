// Rules to remember callback hell:
// function instagramSeDataLaoo(username, cb){
//     setTimeout(()=>{
//         cb({id: 1, username: username});
//     }, 3000);
// }

// function metadataLaoo(uniquenumber, cb){
//     setTimeout(()=>{
//         cb(["img1", "img2", "img3"]);
//     }, 4000);
// }

// instagramSeDataLaoo("soumi", function(data){
//     metadataLaoo(data.uniquenumber, function(images){
//         console.log("Images: ", images);
//     });
// });

// EXERCISE 1
// function afterDelay(time, cb){
//     setTimeout(() =>{
//         cb();
//     }, time);
// }

// afterDelay(3000, function(){
//     console.log("Callback executed");
// });

// EXERCISE 2
// function getUser(username, cb){
//     setTimeout(()=>{
//         cb({id: 1, username: username});
//     }, 1000);
// }

// function getUserPosts(userId, cb){
//     setTimeout(()=>{
//         cb([{id: 1, title: "post1"}, {id: 2, title: "post2"}]);
//     }, 1000);
// }

// getUser("Soumi", function(user) {
//     console.log("Username:", user.username);

//     getUserPosts(user.id, function(posts) {
//         console.log("Posts:", posts);
//     });
// });

// EXERCISE 3
// function loginUser(username, cb) {
//     console.log("login user...");
//     setTimeout(() => {
//         cb({ id: 1212, username: "soumi" });
//     }, 1000);
// }

// function fetchPermissions(id, cb) {
//     console.log("fetching permissions...");
//     setTimeout(() => {
//         cb(["read", "write", "delete"]);
//     }, 2000);
// }

// function loadDashboard(username, cb) {
//     console.log("loading dashboard...");
//     setTimeout(() => {
//         cb();
//     }, 1000);
// }

// loginUser("soumi", function(userdata){
//     fetchPermissions(userdata.id, function(permissions){
//         loadDashboard(permissions, function(){
//             console.log("Dashboard loaded");
//         });
//     });
// });

// EXERCISE 4
// function getProduct(id, callback){
//     setTimeout(() => {
//         callback({id: id, name: "Laptop"});
//     }, 1000);
// }
// function getPrice(productId, callback){
//     setTimeout(() => {
//         callback(1000);
//     }, 1000);
// }
// function applyDiscount(price, callback){
//     setTimeout(() =>{
//         callback(price * 0.9);
//     }, 1000);
// }

// getProduct(1, function(product){
//     console.log("Product: ", product.name);
//     getPrice(product.id, function(price){
//         console.log("Price: ", price);
//     applyDiscount(price, function(discountedPrice){
//         console.log("Discounted Price: ", discountedPrice);
//     });
//     });
// });



