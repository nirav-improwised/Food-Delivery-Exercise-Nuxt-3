<template>
    <div>
        <SearchPanel />
        <Filters />
        <List :data="restros"/>
    </div>
</template>

<script setup>
const { data: restros } = await useFetch('http://127.0.0.1:5500/restro', { mode: 'no-cors'});
</script>
