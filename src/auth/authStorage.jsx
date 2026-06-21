

// "Ye ek localStorage utility/helper module hai jo authentication data ko 
// browser ke localStorage mein store, retrieve aur remove karne ke 
// liye helper functions provide karta hai. Object ko store karne
//  ke liye JSON.stringify() aur retrieve karne ke liye JSON.parse()
//   use kiya gaya hai."
// Ye code browser ke localStorage mein data save, read aur remove karne 
// ke liye helper functions bana raha hai.
const storeAuth = (val) => {
    localStorage.setItem("Remindars", JSON.stringify(val));
}

const getAuth = () => {

    let data = localStorage.getItem("Remindars");
    let obj = JSON.parse(data)
    return obj
}

const clearAuth = () => {
    localStorage.clear("Remindars");
}
export { storeAuth, getAuth, clearAuth }
