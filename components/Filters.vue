<template>
<section class="container-lg mt-3 mb-4 pt-1">
<div id="filters" class="fs-3 row d-flex mt-1">

    <div class="text-danger mb-1">Help Us Select Your Preferences</div>

    <div class="justify-content-between mt-2">
        
        <input type="checkbox" v-model="filters.hasOnlineDelivery" class="btn-check mt-1" id="delivering" name="Has Online Delivery">
        <label for="delivering" class="btn btn-danger me-2">Home Delivery</label>

        <input type="checkbox" v-model="filters.hasTableBooking" class="btn-check mt-1" id="reservations" name="Has Table booking">
        <label for="reservations" class="btn btn-danger me-2">Advanced Bookings</label>

        <select class="btn btn-danger dropdown-toggle me-2 mt-1 pt-1" v-model="filters.cuisine" placeholder="Cuisine" type="button" name="Cuisines" data-bs-toggle="dropdown" aria-expanded="false">
            <option class="bg bg-light text-dark" v-for="cuisine, index in uniQcuisines" :key="index" :value="cuisine" :selected="cuisine=='Indian'">{{cuisine}}</option>
        </select>

        <select class="btn btn-danger dropdown-toggle me-2 mt-1 pt-1" v-model="filters.currency" placeholder="Currency" type="button" name="Currency" data-bs-toggle="dropdown" aria-expanded="false">
            <option class="bg bg-light text-dark" v-for="currency, index in uniQcurrencies" :key="index" :value="currency" :selected="currency=='Indian Rupee'">{{currency}}</option>
        </select>

        <select class="btn btn-danger dropdown-toggle me-2 mt-1 pt-1" v-model="filters.rating" placeholder="Ratings" type="button" name="Rating" data-bs-toggle="dropdown" aria-expanded="false">
            <option class="bg bg-light text-dark" v-for="i, index in 4" :key="index" :value="i" :selected="i==3">{{i}}+</option>
        </select>
        
    </div>

</div>
</section>
</template>

<script setup>

const props = defineProps({
    data: Array
})

let router = useRouter();

let filters = ref({
    hasOnlineDelivery: "",
    hasTableBooking: "",
    cuisine: "",
    currency:"",
    rating: ""
});

watch(filters.value, ()=>{
    router.push({
    path: '/',
    query: { HasOnlineDelivery: filters.value.hasOnlineDelivery, HasTableBooking: filters.value.hasTableBooking, Cuisines: filters.value.cuisine, Currency: filters.value.currency, AggregateRating: filters.value.rating},
    });
});

let duplicated_cuisines, uniQcuisines;
duplicated_cuisines = await getCuisineArray(props.data)
uniQcuisines = removeDuplicates(duplicated_cuisines);

let duplicated_currency, uniQcurrencies;
duplicated_currency = await getCurrencyArray(props.data)
uniQcurrencies = removeDuplicates(duplicated_currency);

function getCuisineArray(data){
    let promise = new Promise(function(resolve, reject){
    let cuisineArr = [];
    let restroCuisines = [];
    data.forEach(restro => {
        restroCuisines = restro.Cuisines.split(',');
        restroCuisines.forEach(cuisine=>{
            cuisine = cuisine.trim()
            cuisineArr.push(cuisine);
        })
    });
    resolve(cuisineArr)
    })
    return promise
}

function getCurrencyArray(data){
    let promise = new Promise(function(resolve, reject){
    let currencyArr = [];
    let restroCurrency = [];
    data.forEach(restro => {
        restroCurrency = restro.Currency.split(',');
        restroCurrency.forEach(currency=>{
            currency = currency.trim()
            currencyArr.push(currency);
        })
    });
    resolve(currencyArr)
    })
    return promise
}

function removeDuplicates(data) {
let uniQ = data.filter((item,
    index) => data.indexOf(item) === index);
return uniQ
}
</script>
