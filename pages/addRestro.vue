<template>
    <HorizontalRule />
    <div class="container mt-4">
        <h1>Registration Form</h1>
        <form action="" class="mt-4 needs-validation" novalidate>
            <div class="row g-3">
            <div class="mb-3 col-md-6 d-inline-block">
                <label for="restroID" class="form-label">Restaurant ID</label>
                <input type="" v-model="bodyObj.RestaurantID" class="form-control" id="restroID" placeholder="xxxxxx">
            </div>
            <div class="mb-3 col-md-6 d-inline-block">
                <label for="restroName" class="form-label">Restaurant Name</label>
                <input type="text" v-model="bodyObj.RestaurantName" class="form-control" id="restroName" placeholder="Restaurant Name">
            </div>
            <div class="mb-3 h-50">
                <label for="address" class="form-label">Address</label>
                <textarea class="form-control" v-model="bodyObj.Address" id="address" rows="4"></textarea>
            </div>
            <div class="mb-3 col-md-6">
                <label for="locality" class="form-label">Locality</label>
                <input type="text" v-model="bodyObj.Locality" class="form-control" id="locality" placeholder="Locality">
            </div>
            <div class="mb-3 col-md-3">
                <label for="city" class="form-label">City</label>
                <input type="text" v-model="bodyObj.City" class="form-control" id="city" placeholder="City">
            </div>
            <div class="mb-3 col-md-3">
                <label for="countryCode" class="form-label">Country Code</label>
                <input type="" v-model="bodyObj.CountryCode" class="form-control" id="countryCode" placeholder="xxxx">
            </div>
            <div class="mb-3 col-md-6">
                <label for="verbose" class="form-label">Verbose</label>
                <input type="text" v-model="bodyObj.Verbose" class="form-control" id="verbose" placeholder="Verbose">
            </div>
            <div class="mb-3 col-md-3">
                <label for="latitude" class="form-label">Latitude</label>
                <input type="" v-model="bodyObj.Latitude" class="form-control" id="latitude" placeholder="Latitude">
            </div>
            <div class="mb-3 col-md-3">
                <label for="longitude" class="form-label">Longitude</label>
                <input type="" v-model="bodyObj.Longitude" class="form-control" id="longitude" placeholder="Longitude">
            </div>
            <div class="mb-3">
                <label for="cuisines" class="form-label">Cuisines</label>
                <input type="text" v-model="bodyObj.Cuisines" class="form-control" id="cuisines" placeholder="Cuisines">
            </div>
            <div class="mb-3 col-md-6">
                <label for="currency" class="form-label">Currency</label>
                <input type="text" v-model="bodyObj.Currency" class="form-control" id="currency" placeholder="Currency">
            </div>
            <div class="mb-3 col-md-6">
                <label for="averageCost" class="form-label">Average Cost</label>
                <input type="" v-model="bodyObj.AverageCost" class="form-control" id="averageCost" placeholder="Average Cost">
            </div>
            
            <div class="mb-3 col-md-6">
                <label for="" class="form-label col-7">Does your restaurant have Table Booking?</label>
                <div class="form-check col-md-1 form-check-inline">
                    <input class="form-check-input" @click="changeHasTableBooking" type="radio" value="Yes" name="hasTableBooking" id="hasTableBooking-Yes">
                    <label class="form-check-label" for="hasTableBooking">
                        Yes
                    </label>
                </div>
                <div class="form-check col-md-1 form-check-inline">
                    <input class="form-check-input" @click="changeHasTableBooking" type="radio" value="No" name="hasTableBooking" id="hasTableBooking-No">
                    <label class="form-check-label" for="hasTableBooking">
                        No
                    </label>
                </div>
            </div>

            <div class="mb-3 col-md-6">
                <label for="" class="form-label col-7">Does your restaurant have Home Delivery Service?</label>
                <div class="form-check col-md-1 form-check-inline">
                    <input class="form-check-input" @click="changeHasOnlineDelivery" type="radio" value="Yes" name="hasOnlineDelivery" id="hasOnlineDelivery-Yes">
                    <label class="form-check-label" for="hasOnlineDelivery">
                        Yes
                    </label>
                </div>
                <div class="form-check col-md-1 form-check-inline">
                    <input class="form-check-input" @click="changeHasOnlineDelivery" type="radio" value="No" name="hasOnlineDelivery" id="hasOnlineDelivery">
                    <label class="form-check-label" for="hasOnlineDelivery">
                        No
                    </label>
                </div>
            </div>
            <div class="mb-3 col-md-6">
                <label for="" class="form-label col-7">Is your restaurant available for Delivery Everyday?</label>
                <div class="form-check col-md-1 form-check-inline">
                    <input class="form-check-input" @change="changeIsDeliveringNow" type="radio" value="Yes" name="isDeliveringNow" id="isDeliveringNow-Yes">
                    <label class="form-check-label" for="isDeliveringNow">
                        Yes
                    </label>
                </div>
                <div class="form-check col-md-1 form-check-inline">
                    <input class="form-check-input" @change="changeIsDeliveringNow" type="radio" value="No" name="isDeliveringNow" id="isDeliveringNow-No">
                    <label class="form-check-label" for="isDeliveringNow">
                        No
                    </label>
                </div>
            </div>
            
            <div class="mb-3 col-md-6">
                <label for="" class="form-label col-7">Does your restaurant have Switch To Order Menu?</label>
                <div class="form-check col-md-1 form-check-inline">
                    <input class="form-check-input" @change="changeSwitchToOrderMenu" type="radio" value="Yes" name="switchToOrderMenu" id="switchToOrderMenu-Yes">
                    <label class="form-check-label" for="switchToOrderMenu">
                        Yes
                    </label>
                </div>
                <div class="form-check col-md-1 form-check-inline">
                    <input class="form-check-input" @change="changeSwitchToOrderMenu" type="radio" value="No" name="switchToOrderMenu" id="switchToOrderMenu">
                    <label class="form-check-label" for="switchToOrderMenu">
                        No
                    </label>
                </div>
            </div>
            <label for="" class="form-label">Price Range</label>
            <div class="row">
                <div class="w-25">
                    <label for="minPrice" class="form-label">Lowest Price</label>
                    <div class="pe-0">
                        <input type="" v-model="minPrice" class="form-control w-md-50 w-75" id="minPrice" placeholder="e.g. 100">
                    </div>
                </div>
                <div class="w-25">
                    <label for="maxPrice" class="form-label">Highest Price</label>
                    <div class="pe-0">
                        <input type="" v-model="maxPrice" class="form-control w-md-50 w-75" id="maxPrice" placeholder="e.g. 500">
                    </div>
                </div>
            </div>
            <button type="button" @click="apiAddRestaurant" href="/" class="btn btn-success col-4 col-md-3 col-lg-2 fs-5 mb-3 ms-2">Submit Form</button>
        </div>
        </form>
    </div>
</template>


<script setup>

let maxPrice = ref(0);
let minPrice = ref(0);

let bodyObj = ref({
    RestaurantID : "",
    RestaurantName : "",
    CountryCode : "",
    City: "",
    Address : "",
    Locality : "",
    Verbose : "",
    Longitude : "",
    Latitude : "",
    Cuisines : "",
    AverageCost : "",
    Currency : "",
    HasTableBooking : "",
    HasOnlineDelivery : "",
    IsDeliveringNow : "",
    SwitchToOrderMenu : "",
    PriceRange : minPrice.value.toString() + "-" + maxPrice.value.toString(),
    AggregateRating : "4.2",
    RatingColor : "green",
    RatingText : "good",
    Votes : "500"
})

function changeIsDeliveringNow(){
    if (document.getElementById('isDeliveringNow-Yes').checked){
        bodyObj.value.IsDeliveringNow = 'Yes';
    }
    else{
        bodyObj.value.IsDeliveringNow = 'No';
    }
}

function changeHasTableBooking(){
    if (document.getElementById('hasTableBooking-Yes').checked){
        bodyObj.value.HasTableBooking = 'Yes';
    }
    else{
        bodyObj.value.HasTableBooking = 'No';
    }
}

function changeHasOnlineDelivery(){
    if (document.getElementById('hasOnlineDelivery-Yes').checked){
        bodyObj.value.HasOnlineDelivery = 'Yes';
    }
    else{
        bodyObj.value.HasOnlineDelivery = 'No';
    }
}

function changeSwitchToOrderMenu(){
    if (document.getElementById('switchToOrderMenu-Yes').checked){
        bodyObj.value.SwitchToOrderMenu = 'Yes';
    }
    else{
        bodyObj.value.SwitchToOrderMenu = 'No';
    }
}

function apiAddRestaurant(){
    bodyObj.value.PriceRange = minPrice.value.toString() + "-" + maxPrice.value.toString();

    useFetch("http://127.0.0.1:5500/restro", { method: 'POST', body: JSON.stringify(bodyObj.value), headers: {'Content-Type': 'application/json'}})
}
</script>
