<template>
    <div>
        <SearchPanel :data="restros" @selectedCity="(tempCity)=>filterByCity(tempCity)"/>
        <Filters />
        <List :data="filteredRestros" />
    </div>
</template>

<script setup>

import { ref } from "vue";
let { data: restros } = await useFetch('http://127.0.0.1:5500/restro', { mode: 'no-cors'});
let filteredRestros = ref();
filteredRestros = restros.value.slice(0,20);

function filterByCity(city){
let temp=[];
restros.value.forEach(restro => {
    if (restro.City.includes(city)){
        temp.push(restro);
    }
});
filteredRestros = temp;
console.log('temp index 26', filteredRestros);
}

</script>
