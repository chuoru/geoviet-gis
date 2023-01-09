<template>
  <div>
    <!-- searched result modal -->
    <b-modal
      hide-footer
      id="searched-result-modal"
      title="NMNS-1 - Điểm quan trắc Nước suối xã Vân Tùng"
      size="lg"
      header-class="header-class"
      header-close-variant="grey"
    >
      <b-tabs>
        <b-tab title="DỮ LIỆU" active>
          <b-row>
            <!-- number of line displayed in result table -->
            <b-col class="d-flex justify-content-start align-items-center p-2">
              Display
              <b-form-group class="mb-0 m-1">
                <b-form-select
                  id="per-page-select"
                  v-model="perPage"
                  :options="pageOptions"
                  size="sm"
                ></b-form-select>
              </b-form-group>
              per page
            </b-col>

            <!-- search filter in result table (haven't done functionality) -->
            <b-col class="d-flex justify-content-end align-items-center p-2"
              ><input
                type="text"
                id="filterInput"
                onkeyup="filterFunction()"
                placeholder="Search.."
            /></b-col>
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
            <b-col>Displaying {{fromLine}}-{{toLine}} / All of {{ totalRows }} record</b-col>

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
        </b-tab>
        <b-tab title="BẢNG BIỂU">
          <Plotly 
              :data="singleModeGraphData" 
              :layout="singleModeGraphLayout"
              :display-mode-bar="false"
              id="plot-container" 
          >
          </Plotly>
        </b-tab>
      </b-tabs>
      
    </b-modal>
  </div>
</template>
<script src="./SearchResult.js"></script>
<style src="./SearchResult.css" scope></style>
