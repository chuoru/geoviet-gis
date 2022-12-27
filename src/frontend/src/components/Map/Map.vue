<template>
  <div>
    <l-map
      style="height: 96vh; width: 100%"
      :zoom="zoom"
      :center="center"
      :options="{ boxZoom: true, zoomControl: false }"
    >
      <l-tile-layer 
        :url="getUrl()" 
        :attribution="attribution"
       />

      <l-control position="topleft">
        <b-button id="menubtn" v-b-toggle.sidebar activate="active-bar" variant="light" aria-pressed="flase" class="mr-2" >
          <i class="fa-solid fa-bars"></i>
        </b-button>
      </l-control>

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
      <l-control position="topright">
        <div class="btn-group-vertical">
          <button type="button" class="btn btn-light toggle-menu btn-hover"> <font-awesome-icon icon="fa-solid fa-expand" /></button>
          <button type="button" class="btn btn-light toggle-menu btn-hover"><font-awesome-icon icon="fa-solid fa-circle-info" /></button>
          <button type="button" class="btn btn-light toggle-menu btn-hover"><font-awesome-icon icon="fa-solid fa-hand" /></button>
          <button type="button" class="btn btn-light toggle-menu btn-hover"><font-awesome-icon icon="fa-solid fa-magnifying-glass-minus" /></button>
          <button type="button" class="btn btn-light toggle-menu btn-hover"><font-awesome-icon icon="fa-solid fa-magnifying-glass-plus" /></button>
          <button type="button" class="btn btn-light toggle-menu btn-hover"><font-awesome-icon icon="fa-solid fa-draw-polygon" /></button>
          <button type="button" class="btn btn-light toggle-menu btn-hover" @click="handleDistanceBtn"><font-awesome-icon icon="fa-solid fa-ruler-horizontal" /></button>
          <button type="button" class="btn btn-light toggle-menu btn-hover"><font-awesome-icon icon="fa-solid fa-print" /></button>
          <button type="button" class="btn btn-light toggle-menu btn-hover"><font-awesome-icon icon="fa-solid fa-book" /></button>
          <button type="button" class="btn btn-light toggle-menu btn-hover"><font-awesome-icon icon="fa-solid fa-trash-can" /></button>
        </div>
      </l-control>

      <l-control-zoom position="bottomright">
      </l-control-zoom>

      <l-ruler :options="rulerOptions" />
    </l-map>
  </div>
</template>

<script src="./Map.js"></script>
<style src="./Map.css" scope></style>
