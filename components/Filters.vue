<template>
<section class="container-lg mt-3 mb-4 pt-1">
<div id="filters" class="fs-3 row d-flex mt-1">
        <div class="text-danger mb-1">
            Help Us Select Your Preferences
        </div>
    
        <div class="justify-content-between mt-2">
            <input type="checkbox" class="btn-check mt-1" id="delivering" name="Has Online Delivery">
            <label for="delivering" class="btn btn-danger me-2">Delivering</label>
    
            <input type="checkbox" class="btn-check mt-1" id="reservations" name="Has Table booking">
            <label for="reservations" class="btn btn-danger me-2">Advanced Bookings</label>

            <select class="btn btn-danger dropdown-toggle me-2 mt-1" placeholder="Cuisine" type="button" name="Cuisines" data-bs-toggle="dropdown" aria-expanded="false">
                <option selected value="not_selected">Cuisine</option>
                <option>Indian</option>
                <option>Thai</option>
                <option>Japanese</option>
            </select>
    
            <select class="btn btn-danger dropdown-toggle me-2 mt-1" placeholder="Currency" type="button" name="Currency" data-bs-toggle="dropdown" aria-expanded="false">
                <option selected value="not_selected">Currency</option>
                <option>INR</option>
                <option>USD</option>
                <option>RUB</option>
            </select>
    
            <select class="btn btn-danger dropdown-toggle me-2 mt-1" placeholder="Ratings" type="button" name="Ratings" data-bs-toggle="dropdown" aria-expanded="false">
                <option selected value="not_selected">Ratings</option>
                <option>4+</option>
                <option>3+</option>
                <option>2+</option>
                <option>1+</option>
            </select>  
        </div>
</div>
</section>
</template>