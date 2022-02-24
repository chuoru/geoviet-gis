<template>
  <div>
    <l-map
      style="height: calc(100vh - 40px);; width: 100%"
      :zoom="zoom"
      :center="center"
      :options="{ boxZoom: true }"
    >
      <l-tile-layer 
        :url="getUrl()" 
        :attribution="attribution"
       />

      <l-control>
        <div v-on:click="toggleMap()" class="toggle-button">
          <i class="fa-solid fa-map fa-xl"></i> 
        </div>
        <div v-b-toggle.collapse-2 class="toggle-button">
          <i class="fa-solid fa-layer-group fa-xl"></i> 
        </div>
        <b-collapse id="collapse-2" class="toggle-menu">
          <b-card>I am collapsible content!</b-card>
        </b-collapse>
      </l-control>

    </l-map>
  </div>
</template>

<script src="./Map.js"></script>
<style src="./Map.css" scope></style>
