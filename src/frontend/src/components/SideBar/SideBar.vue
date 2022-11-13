<template>
  <div>
    <b-sidebar 
		id="sidebar" 
		title="Sidebar" 
		shadow
    visible
    width="340px"
	>
      <div>
        <b-tabs>

          <!-- first tab of sidebar  -->
          <b-tab title="LỚP BẢN ĐỒ">
          </b-tab>

          <!-- second tab of sidebar -->
          <b-tab title="TRA CỨU THÔNG TIN">

            <!-- chose one in 3 types of search -->
            <div class="type-of-search">
              <input type="radio" id="dedieu" value="DeDieu" v-model="oneInThreeTypeOfSearchPicked">
              <label for="one">Đê điều</label>
              <br>
              <input type="radio" id="xoilo" value="XoiLo" v-model="oneInThreeTypeOfSearchPicked">
              <label for="two">Xói lở bờ biển</label>
              <br>
              <input type="radio" id="xamnhapman" value="XamNhapMan" v-model="oneInThreeTypeOfSearchPicked">
              <label for="three">Xâm nhập mặn</label>
              <br>
            </div>

            <!-- selectable multi provinces (done functionality but having weird layout, display ) -->
            <div class="d-flex p-2" id="chose-provinces">
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
                  <template 
                    slot="selection" 
                    slot-scope="{ values, search, isOpen }"
                  >
                    <span 
                      class="multiselect__single" 
                      v-if="values.length &amp;&amp; !isOpen"
                    >
                      {{ values.length }} options selected
                    </span>
                  </template>
              </multiselect>
            </div>
     
            <!-- select Cap De -->
            <b-row>
              <b-col cols="4" class="d-flex justify-content-center">Cấp đê</b-col>
              <b-col class="d-flex justify-content-center">
                <b-form-select cols="10" class="p-2" v-model="capDeSelected" :options="capDe">
                </b-form-select>                </b-col> 
            </b-row>

             <!-- searching key input -->
            <div class="d-flex justify-content-center p-3">
              <form class="example d-flex justify-content-center" action="action_page.php">
                <input type="text" placeholder="Nhập từ khóa tìm kiếm " name="search" class="w-100 p-3">
              </form>
            </div>

            <!-- search button -->
            <div class="p-2">
              <button v-b-modal.searched-result-modal id="btnSearch-DeDieu" class="btn btn-success"><i class="fa fa-search"></i> Tìm kiếm</button>
            </div>


            <!-- searched result modal -->
            <b-modal
              hide-footer 
              id="searched-result-modal" 
              title="Kết quả tìm kiếm"
              size="lg"
              header-class="header-class"
              header-close-variant="grey"
            >
              <b-row>

                <!-- number of line displayed in result table -->
                <b-col class="d-flex justify-content-start align-items-center p-2">
                  Hiển thị
                    <b-form-group
                      class="mb-0"
                    >
                      <b-form-select
                        id="per-page-select"
                        v-model="perPage"
                        :options="pageOptions"
                        size="sm"
                      ></b-form-select>
                    </b-form-group>
                  dòng
                </b-col>

                <!-- search filter in result table (haven't done functionality) -->
                <b-col class="d-flex justify-content-end align-items-center p-2"><input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search.."></b-col>
              </b-row>

              <!-- result table -->
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

              <!-- result table footer -->
              <b-row>
                <b-col>Hiển thị 0-0 / Tổng số {{totalRows}} bản ghi</b-col>

                <!-- changing page number in result table -->
                <b-col>
                  <b-pagination
                    v-model="currentPage"
                    :total-rows="totalRows"
                    :per-page="perPage"
                    align="fill"
                    size="sm"
                    class="my-0"
                    hide-goto-end-buttons
                  ></b-pagination>
                </b-col>

              </b-row>
            </b-modal>
          </b-tab>
        </b-tabs>
      </div>
    </b-sidebar>
  </div>
</template>

<script src="./SideBar.js"></script>
<style src="./SideBar.css" scope></style>
<style src="vue-multiselect/dist/vue-multiselect.min.css" scope></style>