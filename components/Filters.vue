<template>
<section class="container-lg mt-3 mb-4 pt-1">
<div id="filters" class="fs-3 row d-flex justify-content-between mt-1">

    <div class="col-xxl-2 col-sm-11 text-dark fw-bold"> Apply Filters</div>

    <div class="col-xxl-9 col-lg-8 col-sm-12 ms-auto">
        
        <input type="checkbox" class="btn-check" id="delivering" name="Has Online Delivery">
        <label for="delivering" class="btn btn-danger me-2">Delivering</label>

        <input type="checkbox" class="btn-check" id="reservations" name="Has Table booking">
        <label for="reservations" class="btn btn-danger me-2">Advanced Bookings</label>

        <button class="btn btn-danger dropdown-toggle me-2" type="button" name="Cuisines" data-bs-toggle="dropdown" aria-expanded="false">
            Cuisine
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Indian</a></li>
            <li><a class="dropdown-item" href="#">Thai</a></li>
            <li><a class="dropdown-item" href="#">Japanese</a></li>
        </ul>

        <button class="btn btn-danger dropdown-toggle me-2" type="button" name="Currency" data-bs-toggle="dropdown" aria-expanded="false">
            Currency
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">INR</a></li>
            <li><a class="dropdown-item" href="#">USD</a></li>
            <li><a class="dropdown-item" href="#">RUB</a></li>
        </ul>

        <button class="btn btn-danger dropdown-toggles" type="button" name="Aggregate rating" data-bs-toggle="dropdown" aria-expanded="false">
            Ratings
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">4+</a></li>
            <li><a class="dropdown-item" href="#">3+</a></li>
            <li><a class="dropdown-item" href="#">2+</a></li>
            <li><a class="dropdown-item" href="#">1+</a></li>
        </ul>
        
    </div>

</div>
</section>
</template>