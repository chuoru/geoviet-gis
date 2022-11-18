<template>
  <div>
    <b-sidebar 
		id="sidebar"
    no-header 
		shadow
    visible
    width="382px"
	>
      <div>
        <b-tabs>
          <!-- first tab of sidebar  -->
          <b-tab title="MAP LAYER">
            <MapLayer/>
          </b-tab>

          <!-- second tab of sidebar -->
          <b-tab title="INFORMATION RETRIEVAL">
            <InformationRetrieval/>
          </b-tab>
          <template #tabs-end>
            <button type="button" class="btn-close m-2" aria-label="Close" @click="$refs.closeBtn.click()"></button>
          </template>
        </b-tabs>
      </div>
      <template #footer="{ hide }">
        <b-button style="display: none" @click="hide" ref="closeBtn">Close</b-button>
      </template>
    </b-sidebar>
  </div>
</template>

<script src="./SideBar.js"></script>
<style src="./SideBar.css" scope></style>
<style src="vue-multiselect/dist/vue-multiselect.min.css" scope></style>