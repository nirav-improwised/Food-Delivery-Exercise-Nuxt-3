<template>
<section class="container-lg mt-1 mb-4 pt-1">
    <div class="row row-cols-lg-4 row-cols-sm-3 row-cols-xs-2 row-cols-1">
        <div v-for="i, index in 20" :key="index" class="col">
            <div class="card mt-4 border border-white">
                <img src="../assets/card-1-image.png" alt="" class="card-img-top">
                <div class="card-body p-1 pt-2 mb-2 position-relative">
                        <div class="h6 w-75">{{data[i].RestaurantName}}</div>
                        <span class="card-text bg bg-success d-inine px-1 py-1 rounded-1 text-white position-absolute top-0 end-0 me-1 mt-2 fs-6">&#9733; {{data[i].AggregateRating}}</span>
                    <ul class="list-unstyled">
                        <li class="card-text">{{data[i].Cuisines}}</li>
                    </ul>
                    <a href="#" class="btn btn-danger p-1">Order</a>
                    <span class="card-text text-muted ms-3 position-absolute bottom-0 fs-5 end-0 me-1">{{data[i].AverageCost}} FOR TWO</span>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script setup>
const props = defineProps({
    data: Array
})
</script>