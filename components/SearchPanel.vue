<template>
<main class="mt-0 mb-1 pt-1">
  <section class="bgSPImage">
    <div class="container-lg">
        <div class="position-relative top-25 w-50 text-white">
            <h1>Discover Best Restaurants Delevering near you</h1>
        </div>
          <div class="row d-flex justify-content-between h3 mt-lg-5 mt-sm-2 pt-md-5 pt-sm3">
             <form id="search-form">
                <div class="col-lg-2 col-md-3 col-sm-3 col-xs-3 p-0 d-inline-block">
                  <select class="form-control" id="exampleFormControlSelect1" name="city">
                      <option>Location</option>
                      <option selected>London</option>
                      <option>Boston</option>
                      <option>Mumbai</option>
                      <option>New York</option>
                      <option>Toronto</option>
                      <option>Paris</option>
                  </select>
                </div>
                <div class="col-lg-4 col-md-3 col-sm-3 col-xs-3 p-0 d-inline-block">
                    <input type="text" placeholder="Search Cuisine" class="form-control" id="search" name="cuisine">
                </div>
                <div class="col-lg-1 col-md-3 col-sm-3 col-xs-2 p-0 d-inline-block">
                    <button type="submit" class="btn btn-danger ms-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                </div>
            </form>
        </div>
    </div>
</section>
</main>
</template>

<style>
.bgSPImage{ 
    background: linear-gradient(rgba(25, 25, 25, 0.7),
                    rgba(25, 25, 25, 0.7)), url("../assets/background.jpg")no-repeat center center/cover;
    height: 50vh;
}
.search-form {
  width: 80%;
  margin: 0 auto;
  margin-top: 1rem;
}

.search-form input {
  height: 100%;
  background: transparent;
  border: 0;
  display: block;
  width: 100%;
  padding: 1rem;
  height: 100%;
  font-size: 1rem;
}

.search-form select {
  background: transparent;
  border: 0;
  padding: 1rem;
  height: 100%;
  font-size: 1rem;
}

.search-form select:focus {
  border: 0;
}

.search-form button {
  height: 100%;
  width: 100%;
  font-size: 1rem;
}

.search-form button svg {
  width: 24px;
  height: 24px;
}

</style>