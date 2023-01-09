
import SearchResult from '../SearchResult/SearchResult';

<template>
  <div>
    <l-map
      ref="map"
      style="height: 96vh; width: 100%"
      :zoom="zoom"
      :center="center"
    >
      <l-tile-layer 
        :url="getUrl()" 
        :attribution="attribution"
        :visible="osmVisible"
       />

      <l-control position="topleft">
        <b-button id="menubtn" v-b-toggle.sidebar activate="active-bar" variant="light" aria-pressed="flase" class="mr-2" >
          <i class="fa-solid fa-bars"></i>
        </b-button>
      </l-control>

      <l-marker v-for="position in positions" :key="position.id"
					:lat-lng="position.position"
			>
        <l-popup>
          <b-card 
          no-body 
          footer-tag="footer" 
          class="p-3"
          style="width: 300px;"
          >
            <div class="row"><b>Mã:</b></div>
            <div class="row"><p><b>Tên điểm quan trắc:</b>	Điểm quan trắc Xã Vân Tùng</p></div>
            <div class="row"><p><b>Kiểu quan trắc:</b>qtdken</p></div>
            <div class="row"><p><b>Huyện:</b>062</p></div>
            <div class="row"><p><b>Xã:</b>Xã Vân Tùng</p></div>
            <template #footer>
              <em><a href="#" v-b-modal.searched-result-modal class="d-flex flex-row-reverse">Xem chi tiết</a></em>
            </template>
          </b-card>
        </l-popup>
        <SearchResult/>
      </l-marker>

      <l-wms-tile-layer
        v-for="layer in layers"
        :key="layer.name"
        :base-url="baseUrl"
        :layers="layer.layers"
        :visible="layer.visible"
        :transparent="layer.transparent"
        :opacity="layer.opacity"
        :name="layer.name"
      />
      <l-control>
        <div class="btn-group-vertical">
          <div v-b-toggle.collapse-2 class="toggle-button m-2">
            <i class="fa-solid fa-layer-group fa-xl"></i> 
          </div>
          <div v-on:click="toggleMap()" class="toggle-button m-2">
            <i class="fa-solid fa-info fa-xl"></i> 
          </div>
          <div v-b-toggle.collapse-2 class="toggle-button m-2">
            <i class="fa-solid fa-magnifying-glass-plus fa-xl"></i> 
          </div>
          <div v-b-toggle.collapse-2 class="toggle-button m-2">
            <i class="fa-solid fa-magnifying-glass-minus fa-xl"></i> 
          </div>
          <div v-b-toggle.collapse-2 class="toggle-button m-2">
            <i class="fa-solid fa-draw-polygon fa-xl"></i> 
          </div>
          <div v-b-toggle.collapse-2 class="toggle-button m-2">
            <i class="fa-solid fa-ruler-horizontal fa-xl"></i> 
          </div>
          <div v-b-toggle.collapse-2 class="toggle-button m-2">
            <i class="fa-solid fa-print fa-xl"></i> 
          </div>
        </div>
        
        <b-collapse id="collapse-2" class="toggle-menu">
          <b-list-group>
            <b-list-group-item @click="onModifyTileLayer('osm')">Bản đồ nền OpenStreetMap</b-list-group-item>
            <b-list-group-item @click="onModifyTileLayer('geoviet')">Bản đồ nền GeoVietMap</b-list-group-item>
          </b-list-group>
        </b-collapse>
      </l-control>
    </l-map>
  </div>
</template>

<script src="./Map.js"></script>
<style src="./Map.css" scope></style>
