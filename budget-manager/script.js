// import { Observable } from 'node_modules/object-observer/dist/object-observer.min.js';


let totalSpent = document.getElementById("total")
let limit = document.getElementById("limit")
let inputAmount = document.getElementById("amount")
let submitBtn = document.getElementById("submit_btn")



class BudgetManagement {
    constructor (limit) {
        this.limit = limit ? limit : 0
        // this.limit = 
    }

    addLimit (amount) {
        this.limit = this.limit + amount
    }

    subLimit (amount) {
        this.limit = this.limit - amount
    }

    get getLimit () {
        return this.limit
    }
}


const bd = new BudgetManagement(1200)


limit.innerText = bd.limit


submitBtn.addEventListener("click", (e) => {
    alert(e);
})

inputAmount.addEventListener("change", (e) => {

    bd.limit = e.target.value
    limit.innerText = e.target.value
    
})