// EXERCISE 1
// function afterDelay(time, cb){
//     setTimeout(function(){
//         cb();
//     }, time);
// }

// afterDelay(3000, function(){
//     console.log("callback executed");
// })

// EXERCISE 2
// function getUser(username, cb){
//     setTimeout(() => {
//         cb({id: 1, username: "soumi"});
//     }, 1000);
// }

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

// promises





