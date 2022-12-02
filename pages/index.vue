<template>
    <div>
        <SearchPanel :data="restros" @search="(search)=>searchFilter(search)"/>
        <!-- <SearchPanel :data="restros" @searchCity="(searchCity)=>filterByCity(searchCity)" @searchRestro="(searchRestro)=>filterByRestaurantName(searchRestro)"/> -->
        <Filters />
        <List :data="filteredRestros" />
    </div>
</template>

<script setup>

import { ref } from "vue";
let { data: restros } = await useFetch('http://127.0.0.1:5500/restro', { mode: 'no-cors'});
let filteredRestros = ref();
filteredRestros = restros.value.slice(0,20);

function searchFilter(searchObject){
    let temp = [];
    if(searchObject.City !=="" || searchObject.RestaurantName !==""){
        restros.value.forEach(restro => {
        if (restro.City.includes(searchObject.City) && restro.RestaurantName.includes(searchObject.RestaurantName)){
            temp.push(restro);
        }
    });
    filteredRestros = temp;
    }
}

// function filterByCity(city){
//     let temp=[];
//     // alert(city)
//     if(city !== ""){
//     restros.value.forEach(restro => {
//         if (restro.City.includes(city)){
//             temp.push(restro);
//         }
//     });
//     filteredRestros = temp;
//     }
//     console.log('temp index 26', filteredRestros);
// }

// function filterByRestaurantName(restroName){
//     let temp=[];
//     alert(restroName);
//     restros.value.forEach(restro => {
//         if (restro.City.includes(restroName)){
//             temp.push(restro);
//         }
//     });
//     filteredRestros = temp;
// }

</script>
