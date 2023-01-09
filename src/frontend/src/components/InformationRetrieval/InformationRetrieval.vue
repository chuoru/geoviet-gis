<template>
  <div>
    <div class="row m-1">
      <div class="input-group">
        <input 
          type="text" 
          class="form-control" 
          aria-describedby="addon-wrapping"
        >
        <button type="button" class="btn btn-primary"> 
          <font-awesome-icon icon="fa fa-search"/>
        </button>
      </div>
    </div>
    <div class="row m-1">
      <div class="col">
        <div class="row">
          <b>Loại quan trắc:</b>
        </div>
        <div class="row">
          <b-dropdown
            split
            split-variant="outline-primary"
            variant="primary"
            text="Tất cả"
            class="m-2"
          >
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here...</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <b>Huyện/Tp:</b>
        </div>
        <div class="row">
          <b-dropdown
            split
            split-variant="outline-primary"
            variant="primary"
            text="Tất cả"
            class="m-2"
          >
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here...</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <b>Xã/Phường:</b>
        </div>
        <div class="row">
          <b-dropdown
            split
            split-variant="outline-primary"
            variant="primary"
            text="Tất cả"
            class="m-2"
          >
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here...</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </div>
    <div class="row m-2">
      <div class="search-summary">Tìm thấy {{ searchSummary }} kết quả.</div>
    </div>
    <div class="row m-2">
      <div id="separator"></div>
    </div>
    <div class="row m-1">
      <b-table
        striped
        hover
        bordered
        :items="resultTableData"
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
        :sort-by.sync="sortBy"
        responsive="sm"
      ></b-table>
    </div>
  </div>
  <!-- <b-container fluid>
    
    <SearchResult/>
  </b-container> -->
</template>
<script src="./InformationRetrieval.js"></script>
<style src="./InformationRetrieval.css" scope></style>
