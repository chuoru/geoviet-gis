import { latLng } from "leaflet";
import {
  LMap,
  LTileLayer,
  LCircle,
  LRectangle,
  LPolygon,
  LPolyline,
  LControl,
  LControlZoom,
} from "vue2-leaflet";

import LFreeDraw from "vue2-leaflet-freedraw";
import { NONE, ALL } from "leaflet-freedraw";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LCircle,
    LRectangle,
    LPolygon,
    LPolyline,
    LControl,
    LFreeDraw,
    LControlZoom,
  },
  data() {
    return {
      initialCoordinates: latLng(21.022597436866693, 105.83672255501389),
      isActive: false,
      zoom: 14,
      center: [21.022597436866693, 105.83672255501389],
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    };
  },
  computed: {
    mode() {
      return this.isActive ? ALL : NONE;
    },
  },
  watch: {
    polygons(newPolygons) {
      // Using v-model to watch polygons
      console.log(newPolygons);
    },
  },
  methods: {
    getUrl() {
      // var tile = 'mapbox/satellite-v9';
      // var accessToken = 'pk.eyJ1IjoiY2h1b3J1IiwiYSI6ImNrenRpMXo1cDQxMTcybnFyeGFhdDhnNGIifQ.rRBwxWqZo3l3PRVHLg61VQ';
      // var url = `https://api.mapbox.com/styles/v1/${tile}/tiles/{z}/{x}/{y}?access_token=${accessToken}` 
      var url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      return url;
    },
    flipActive() {
      this.isActive = !this.isActive;
    },
    markerHandler(event) {
      // using the native markers event directly
      console.log(event);
    },
  },
};