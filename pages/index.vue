<template>
    <div>
        <SearchPanel />
        <Filters :data="restros"/>
        <List :data="restros" />
    </div>
</template>

<script setup>
import { ref } from "vue";
const { data: restros } = await useFetch('http://127.0.0.1:5500/restro', { mode: 'no-cors'});
</script>
