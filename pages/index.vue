<template>
    <div>
        <SearchPanel :data="restros" />
        <Filters :data="restros"/>
        <List :data="restros" />
    </div>
</template>

<script setup>
let { data: restros } = await useFetch('http://127.0.0.1:5500/restro', { mode: 'no-cors'});
</script>
