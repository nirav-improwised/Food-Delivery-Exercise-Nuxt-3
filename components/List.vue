<template>
<section class="container-lg mb-4">
    <div class="row row-cols-lg-4 row-cols-md-3 row-cols-xs-2 row-cols-1">
        <div v-for="restro, index in filteredList" :key="index" class="col">
            <div class="card shadow mt-4 border border-white">
                <img src="../assets/card-1-image.png" alt="" class="card-img-top">
                <div class="card-body p-1 pt-2 mb-2 position-relative">
                    <div class="h6 w-75">{{restro.RestaurantName}}</div>
                    <span class="card-text bg bg-success d-inine px-1 py-1 rounded-1 text-white position-absolute top-0 end-0 me-1 mt-2 fs-6">
                        &#9733; {{restro.AggregateRating}}
                    </span>
                    <ul class="list-unstyled">
                        <li class="card-text">{{restro.Cuisines}}</li>
                        <li class="card-text">Delivering Now: {{restro.IsDeliveringNow}}</li>
                    </ul>
                    <a href="#" class="btn btn-danger p-1">
                        Order
                    </a>
                    <span class="card-text text-muted ms-3 position-absolute bottom-0 fs-5 end-0 me-1">
                        {{restro.AverageCost}} FOR TWO
                    </span>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script setup>
const props = defineProps({
    data: Array,
});
let filteredList = ref(props.data.slice(0, 8));
let route = useRoute();

watch(() => route.query, async (newV, oldV) => {
    let temp = [];
    if(route.query['city'] !=="" || route.query['RestaurantName'] !==""){
        props.data.forEach(restro => {
        if (restro.City.includes(route.query['city']) && restro.RestaurantName.includes(route.query['RestaurantName'])){
            temp.push(restro);
        }
    });
    filteredList.value = temp;
    console.log("filteredList", filteredList.value);
}
});
</script>
