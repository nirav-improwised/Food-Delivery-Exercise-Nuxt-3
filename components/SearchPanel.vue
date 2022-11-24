<template>
<main class="mt-0 mb-1 pt-1">
    <div class="container-lg">
        <div class="position-relative top-25 w-50 text-white">
            <h1>Discover Best Restaurants Delevering near you</h1>
        </div>
        <div class="container-lg h3 mt-5 pt-3">
          <div class="row d-flex justify-content-between">
             <form id="search-form">
                <div class="row">
                    <div class="col-7">
                        <div class="row no-gutters">
                            <div class="col-lg-3 col-md-3 col-sm-12 p-0">
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
                            <div class="col-lg-6 col-md-6 col-sm-12 p-0">
                                <input type="text" placeholder="Search Cuisine" class="form-control" id="search" name="cuisine">
                            </div>
                            <div class="col-lg-1 col-md-3 col-sm-12 p-0">
                                <button type="submit" class="btn btn-danger ms-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</main>
</template>

<style>
giveWhiteBG{

    background: white;
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

.search-body {
  margin-bottom: 1.5rem;
}

.search-body .search-filters .filter-list {
  margin-bottom: 1.3rem;
}

.search-body .search-filters .filter-list .title {
  color: #3c4142;
  margin-bottom: 1rem;
}

.search-body .search-filters .filter-list .filter-text {
  color: #727686;
}

.search-body .search-result .result-header {
  margin-bottom: 2rem;
}

.search-body .search-result .result-header .records {
  color: #3c4142;
}

.search-body .search-result .result-header .result-actions {
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search-body .search-result .result-header .result-actions .result-sorting {
  display: flex;
  align-items: center;
}

.search-body .search-result .result-header .result-actions .result-sorting span {
  flex-shrink: 0;
  font-size: 0.8125rem;
}

.search-body .search-result .result-header .result-actions .result-sorting select {
  color: #68CBD7;
}

.search-body .search-result .result-header .result-actions .result-sorting select option {
  color: #3c4142;
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .search-body .search-filters {
    display: flex;
  }
  .search-body .search-filters .filter-list {
    margin-right: 1rem;
  }
}

.card-margin {
    margin-bottom: 1.875rem;
}

@media (min-width: 992px){
.col-lg-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
}
}

.card-margin {
    margin-bottom: 1.875rem;
}
.card {
    border: 0;
    box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);
    -moz-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);
    -ms-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);
}
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #ffffff;
    background-clip: border-box;
    border: 1px solid #e6e4e9;
    border-radius: 8px;
}
</style>