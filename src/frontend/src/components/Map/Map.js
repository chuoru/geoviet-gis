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
import LRuler from "vue2-leaflet-ruler";
import LDraw from 'leaflet-draw';
import LDrawToolbar from 'vue2-leaflet-draw-toolbar';

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
    LRuler,
    LDraw,
    LDrawToolbar,
  },
  data() {
    return {
      initialCoordinates: latLng(21.022597436866693, 105.83672255501389),
      isActive: false,
      zoom: 14,
      center: [21.022597436866693, 105.83672255501389],
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      rulerOptions: {
        position: "bottomright", // Leaflet control position option
        circleMarker: {
          // Leaflet circle marker options for points used in this plugin
          color: "#0099ff",
          radius: 2,
        },
        lineStyle: {
          // Leaflet polyline options for lines used in this plugin
          color: "#0099ff",
        },
        lengthUnit: {
          // You can use custom length units. Default unit is kilometers.
          display: "km", // This is the display value will be shown on the screen. Example: 'meters'
          decimal: 2, // Distance result will be fixed to this value.
          factor: null, // This value will be used to convert from kilometers. Example: 1000 (from kilometers to meters)
          label: "Distance:",
        },
        angleUnit: {
          display: "&deg;", // This is the display value will be shown on the screen. Example: 'Gradian'
          decimal: 2, // Bearing result will be fixed to this value.
          factor: null, // This option is required to customize angle unit. Specify solid angle value for angle unit. Example: 400 (for gradian).
          label: "Bearing:",
        },
      },
      rectangle: {
        bounds: [[21.022597436866693, 105.83672255501389], [23.022597436866693, 107.83672255501389]],
        style: { color: 'red', weight: 3 }
      },

      options: {
        drawControl: false
      }
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
  mounted() {
    this.$nextTick(() => {
    const map = this.$refs.map.mapObject;


    const zoomControl = new window.L.Control.boxzoom({
      position: 'topleft',
  //     draw: {
  //       polyline: {
  //         allowIntersection: false,
  //         showArea: true
  //       },
  //       polygon: false,
  //       rectangle: false,
  //       circle: false,
  //       marker: false
  //     }
    });

    map.addControl(zoomControl);

  //   const boxzoom = 
  });
  },
};
