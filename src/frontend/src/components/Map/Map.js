import { latLng } from "leaflet";
import {
  LMap,
  LTileLayer,
  LCircle,
  LRectangle,
  LPolygon,
  LPolyline,
  LControl,
  LMarker,
  LWMSTileLayer,
  LControlZoom,
  LPopup
} from "vue2-leaflet";

import LFreeDraw from "vue2-leaflet-freedraw";
import { NONE, ALL } from "leaflet-freedraw";
import LRuler from "vue2-leaflet-ruler";
import LDraw from 'leaflet-draw';
import LDrawToolbar from 'vue2-leaflet-draw-toolbar';
import SearchResult from '../../components/SearchResult/SearchResult.vue'

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
    "l-wms-tile-layer": LWMSTileLayer,
    LMarker,
    LRuler,
    LDraw,
    LDrawToolbar,
    LPopup,
    SearchResult
  },
  data() {
    return {
      initialCoordinates: latLng(21.022597436866693, 105.83672255501389),
      isActive: false,
      zoom: 7,
      positions: [{position: [21.022597436866693, 105.83672255501389]}],
      center: [21.022597436866693, 105.83672255501389],
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      rectangle: {
        bounds: [[21.022597436866693, 105.83672255501389], [23.022597436866693, 107.83672255501389]],
        style: { color: 'red', weight: 3 }
      },

      options: {
        drawControl: false
      },
      baseUrl: 'http://geovietmap.com:8282/geoserver/luuvucsonghong/wms',
      layers: [
        {
          name: 'Base',
          visible: true,
          format: 'image/png',
          layers: 'luuvucsonghong:nen_diaphantinh',
          transparent: false,
          opacity: 1.0,
          attribution: "Weather data © 2012 IEM Nexrad"
        },
        {
          name: 'Rivers',
          visible: true,
          format: 'image/png',
          layers: '	luuvucsonghong:mangdongchay',
          transparent: false,
          opacity: 0.5,
          attribution: "Weather data © 2012 IEM Nexrad"
        },
        {
          name: 'Base#2',
          visible: true,
          format: 'image/png',
          layers: 'luuvucsonghong:ranhgioitieuluuvuc',
          transparent: false,
          opacity: 0.2,
          attribution: "Weather data © 2012 IEM Nexrad"
        },
      ],
      osmVisible: false
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
    onModifyTileLayer(mode) {
      if (mode === "osm") {
        this.osmVisible = true;
        this.layers[0].visible = false;
        this.layers[1].visible = true;
      } else if (mode == "geoviet") {
        this.osmVisible = false;
        this.layers[0].visible = true;
        this.layers[1].visible = true;
      }
    },
    onDetailLinkClick() {

    },
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

  });
  },
};
