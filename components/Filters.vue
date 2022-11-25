<template>
    <section class="container-lg mt-3 mb-4 pt-1">
    <div id="filters" class="fs-3 row d-flex mt-1">
    
        <div class="text-danger mb-1">Help Us Select Your Preferences</div>
        <HorizontalRule />
    
        <div class="col-6 d-flex justify-content-between mt-3">
            
            <input type="checkbox" class="btn-check" id="delivering" name="Has Online Delivery">
            <label for="delivering" class="btn btn-danger me-2">Delivering</label>
    
            <input type="checkbox" class="btn-check" id="reservations" name="Has Table booking">
            <label for="reservations" class="btn btn-danger me-2">Advanced Bookings</label>
    
 <!-- <select placeholder="City" class="form-control" id="exampleFormControlSelect1" name="city"> -->
                      <!-- <option>Nirav</option> -->
                      <!-- <option selected>London</option>
                      <option>Boston</option>
                      <option>Mumbai</option>
                      <option>New York</option>
                      <option>Toronto</option>
                      <option>Paris</option> -->
                  <!-- </select> -->

            <select class="btn btn-danger dropdown-toggle me-2" placeholder="Cuisine" type="button" name="Cuisines" data-bs-toggle="dropdown" aria-expanded="false">
                <!-- <option>Cuisine</option> -->
                <option>Indian</option>
                <option>Thai</option>
                <option>Japanese</option>
            </select>
    
            <select class="btn btn-danger dropdown-toggle me-2" placeholder="Currency" type="button" name="Currency" data-bs-toggle="dropdown" aria-expanded="false">
                <!-- <option>Currency</option> -->
                <option>INR</option>
                <option>USD</option>
                <option>RUB</option>
            </select>
    
            <select class="btn btn-danger dropdown-toggle me-2" placeholder="Ratings" type="button" name="Ratings" data-bs-toggle="dropdown" aria-expanded="false">
                <!-- <option>Ratings</option> -->
                <option>4+</option>
                <option>3+</option>
                <option>2+</option>
                <option>1+</option>
            </select>
            
        </div>
    
    </div>
    </section>
    </template>