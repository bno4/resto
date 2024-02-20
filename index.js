let today = new Date().toISOString().split("T")[0];
console.log(today);
document.getElementsByName("setTodaysDate")[0].setAttribute("min", today);
