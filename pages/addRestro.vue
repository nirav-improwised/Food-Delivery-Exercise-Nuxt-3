<template>
    <HorizontalRule />
    <div class="container mt-4">
        <h1>Registration Form</h1>
        <form action="" class="mt-4 needs-validation" novalidate>
            <div class="row g-3">
            <div class="mb-3 col-md-6 d-inline-block">
                <label for="restroID" class="form-label">Restaurant ID</label>
                <input type="number" v-model="restroID" class="form-control" id="restroID" placeholder="xxxxxx">
            </div>
            <div class="mb-3 col-md-6 d-inline-block">
                <label for="restroName" class="form-label">Restaurant Name</label>
                <input type="text" v-model="restroName" class="form-control" id="restroName" placeholder="Restaurant Name">
            </div>
            <div class="mb-3 h-50">
                <label for="address" class="form-label">Address</label>
                <textarea class="form-control" v-model="address" id="address" rows="4"></textarea>
            </div>
            <div class="mb-3 col-md-6">
                <label for="locality" class="form-label">Locality</label>
                <input type="text" v-model="locality" class="form-control" id="locality" placeholder="Locality">
            </div>
            <div class="mb-3 col-md-3">
                <label for="city" class="form-label">City</label>
                <input type="text" v-model="city" class="form-control" id="city" placeholder="City">
            </div>
            <div class="mb-3 col-md-3">
                <label for="countryCode" class="form-label">Country Code</label>
                <input type="number" v-model="countryCode" class="form-control" id="countryCode" placeholder="xxxx">
            </div>
            <div class="mb-3 col-md-6">
                <label for="verbose" class="form-label">Verbose</label>
                <input type="text" v-model="verbose" class="form-control" id="verbose" placeholder="Verbose">
            </div>
            <div class="mb-3 col-md-3">
                <label for="latitude" class="form-label">Latitude</label>
                <input type="number" v-model="latitude" class="form-control" id="latitude" placeholder="Latitude">
            </div>
            <div class="mb-3 col-md-3">
                <label for="longitude" class="form-label">Longitude</label>
                <input type="number" v-model="longitude" class="form-control" id="longitude" placeholder="Longitude">
            </div>
            <div class="mb-3">
                <label for="cuisines" class="form-label">Cuisines</label>
                <input type="text" v-model="cuisines" class="form-control" id="cuisines" placeholder="Cuisines">
            </div>
            <div class="mb-3 col-md-6">
                <label for="currency" class="form-label">Currency</label>
                <input type="text" v-model="currency" class="form-control" id="currency" placeholder="Currency">
            </div>
            <div class="mb-3 col-md-6">
                <label for="averageCost" class="form-label">Average Cost</label>
                <input type="number" v-model="averageCost" class="form-control" id="averageCost" placeholder="Average Cost">
            </div>
            
            <div class="mb-3 col-md-6">
                <label for="" class="form-label col-7">Does your restaurant have Table Booking?</label>
                <div class="form-check col-md-1 form-check-inline">
                    <input class="form-check-input" type="radio" value="Yes" name="hasTableBooking" id="hasTableBooking">
                    <label class="form-check-label" for="hasTableBooking">
                        Yes
                    </label>
                </div>
                <div class="form-check col-md-1 form-check-inline">
                    <input class="form-check-input" type="radio" value="No" name="hasTableBooking" id="hasTableBooking">
                    <label class="form-check-label" for="hasTableBooking">
                        No
                    </label>
                </div>
            </div>

            <div class="mb-3 col-md-6">
                <label for="" class="form-label col-7">Does your restaurant have Home Delivery Service?</label>
                <div class="form-check col-md-1 form-check-inline">
                    <input class="form-check-input" type="radio" value="Yes" name="hasOnlineDelivery" id="hasOnlineDelivery">
                    <label class="form-check-label" for="hasOnlineDelivery">
                        Yes
                    </label>
                </div>
                <div class="form-check col-md-1 form-check-inline">
                    <input class="form-check-input" type="radio" value="No" name="hasOnlineDelivery" id="hasOnlineDelivery">
                    <label class="form-check-label" for="hasOnlineDelivery">
                        No
                    </label>
                </div>
            </div>
            <div class="mb-3 col-md-6">
                <label for="" class="form-label col-7">Is your restaurant available for Delivery Everyday?</label>
                <div class="form-check col-md-1 form-check-inline">
                    <input class="form-check-input" type="radio" value="Yes" name="isDeliveringNow" id="isDeliveringNow">
                    <label class="form-check-label" for="isDeliveringNow">
                        Yes
                    </label>
                </div>
                <div class="form-check col-md-1 form-check-inline">
                    <input class="form-check-input" type="radio" value="No" name="isDeliveringNow" id="isDeliveringNow">
                    <label class="form-check-label" for="isDeliveringNow">
                        No
                    </label>
                </div>
            </div>
            
            <div class="mb-3 col-md-6">
                <label for="" class="form-label col-7">Does your restaurant have Switch To Order Menu?</label>
                <div class="form-check col-md-1 form-check-inline">
                    <input class="form-check-input" type="radio" value="Yes" name="switchToOrderMenu" id="switchToOrderMenu">
                    <label class="form-check-label" for="switchToOrderMenu">
                        Yes
                    </label>
                </div>
                <div class="form-check col-md-1 form-check-inline">
                    <input class="form-check-input" type="radio" value="No" name="switchToOrderMenu" id="switchToOrderMenu">
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
                        <input type="number" class="form-control w-md-50 w-75" id="minPrice" placeholder="e.g. 100">
                    </div>
                </div>
                <div class="w-25">
                    <label for="maxPrice" class="form-label">Highest Price</label>
                    <div class="pe-0">
                        <input type="number" class="form-control w-md-50 w-75" id="maxPrice" placeholder="e.g. 500">
                    </div>
                </div>
            </div>
            <button type="submit" href="/" class="btn btn-success col-4 col-md-3 col-lg-2 fs-5 mb-3 ms-2">Submit Form</button>
        </div>
        </form>
    </div>
</template>


<script>
let restroName, address, locality, city, verbose, cuisines = ref('');
let restroID, countryCode, latitude, longitude, averageCost = ref(0);
</script>