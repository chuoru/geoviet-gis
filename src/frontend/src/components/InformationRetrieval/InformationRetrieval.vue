<template>
  <b-container fluid>
    <!-- chose one in 3 types of search -->
    <div class="type-of-search">
      <input
        type="radio"
        id="dedieu"
        value="DeDieu"
        v-model="oneInThreeTypeOfSearchPicked"
      />
      <label for="one">Dikes</label>
      <br />
      <input
        type="radio"
        id="xoilo"
        value="XoiLo"
        v-model="oneInThreeTypeOfSearchPicked"
      />
      <label for="two">Beach erosion</label>
      <br />
      <input
        type="radio"
        id="xamnhapman"
        value="XamNhapMan"
        v-model="oneInThreeTypeOfSearchPicked"
      />
      <label for="three">Saltwater intrusion.</label>
      <br />
    </div>

    <!-- selectable multi provinces -->
    <!-- <div class="d-flex p-2" id="chose-provinces">
      <span class="w-30 p-3">Chọn tỉnh</span>
      <multiselect
        class="w-70 p-3"
        v-model="selectedProvinces"
        :options="provinces"
        :multiple="true"
        :close-on-select="false"
        :clear-on-select="false"
        :preserve-search="true"
        placeholder="Pick some"
        label="name"
        track-by="name"
        :preselect-first="true"
      >
        <template slot="selection" slot-scope="{ values, isOpen }">
          <span
            class="multiselect__single"
            v-if="values.length &amp;&amp; !isOpen"
          >
            {{ values.length }} options selected
          </span>
        </template>
      </multiselect>
    </div> -->

    <b-row>
      <!-- selectable multi provinces (done functionality but having weird layout, display ) -->
      <b-col lg="12" class="my-1">
        <b-form-group
          label="Select Provinces"
          label-for="sort-by-select"
          label-cols-sm="4"
          class="mb-0 d-flex"
          v-slot="{ ariaDescribedby }"
        >
          <b-input-group size="sm" class="h-100">
            <b-form-select
              id="sort-by-select"
              v-model="selectedProvinces"
              :options="ProvincesOptions"
              :aria-describedby="ariaDescribedby"
              class="w-100"
            >
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col lg="12" class="my-1">
        <b-form-group
          label="Dike Level"
          label-for="sort-by-select"
          label-cols-sm="4"
          class="mb-0 d-flex"
          v-slot="{ ariaDescribedby }"
        >
          <b-input-group size="sm" class="h-100">
            <b-form-select
              id="sort-by-select"
              v-model="dikeLevelselected"
              :options="dikeLevelOptions"
              :aria-describedby="ariaDescribedby"
              class="w-100"
            >
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>
      
      <!-- searching key input -->
      <b-col lg="12" class="my-1">
        <b-form-group
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
              class="p-2"
            ></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <SearchResult/>
  </b-container>
</template>
<script src="./InformationRetrieval.js"></script>
<style src="./InformationRetrieval.css" scope></style>
