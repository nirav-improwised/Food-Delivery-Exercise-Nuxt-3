<template>
<main class="mt-0 mb-1 pt-1">
    <section class="bgSPImage">
    <div class="container-lg">
        <div class="mt-4 pt-4 w-50 text-white">
            <h1>Discover Best Restaurants Delevering near you</h1>
        </div>
        <div class="row d-flex h3 mt-lg-5 mt-sm-2 pt-md-5 pt-sm-3 ms-1">
                <div class="col-md-2 col-3 p-0 d-inline-block">

                <select class="form-select" v-model="search.City" id="select_city" name="location">
                    <option v-for="(city, index) in cityList" :key="index" :value="city">{{city}}</option>
                </select>

                </div>
                <div class="col-md-4 col-3 p-0 d-inline-block">
                    <input type="text" placeholder="Search Restaurant here" v-model="search.RestaurantName" class="form-control" id="search" name="searchRestro">
                </div>
                <div class="col-1 p-0 d-inline-block">
                    <button type="submit" @click="pushSearchToQuery" class="btn btn-danger ms-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                </div>
        </div>
    </div>
</section>
</main>
</template>

<style>
.bgSPImage{ 
    background: linear-gradient(rgba(25, 25, 25, 0.7),
                    rgba(25, 25, 25, 0.7)), url("../assets/background.jpg")no-repeat center center/cover;
    height: 50vh;
}
</style>

<script setup>

const router = useRouter();

let search = ref({
    City: "",
    RestaurantName: ""
})

function pushSearchToQuery(){
    router.push({
    path: '/',
    query: { city: search.value.City, RestaurantName: search.value.RestaurantName },
    });
}

const props = defineProps({
data: Array
});

let duplicatedCityList, cityList;
duplicatedCityList = await getCityArr(props.data);
cityList = await removeDuplicates(duplicatedCityList);

function getCityArr(data){
let promise = new Promise(function(resolve, reject){
let restroArr=[];
data.forEach(restro => {
    restroArr.push(restro.City);
});
resolve(restroArr);
})
return promise
}

function removeDuplicates(data) {
    let uniQ = data.filter((item,
        index) => data.indexOf(item) === index);
    return uniQ
}
</script>
