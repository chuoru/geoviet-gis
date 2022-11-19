import SearchResult from "../../components/SearchResult/SearchResult.vue";
import Multiselect from "vue-multiselect";

export default {
  name: "InformationRetrieval",
  components: {
    Multiselect,
    SearchResult,
  },
  data() {
    return {
      /* ↓↓↓ Bellow is SideBar variable ↓↓↓ */
      oneInThreeTypeOfSearchPicked: [],
      
      // Cap De selection
      dikeLevelselected: null,
      dikeLevelOptions: [
        { value: null, text: "--All--" },
        { value: ">3", text: "Class III or higher" },
        { value: "<3", text: "Bellow class III" },
        { value: "groynes", text: "Groynes" },
      ],

      // provinces data
      selectedProvinces: [],
      ProvincesOptions: [
        { text: "Ha Noi" },
        { text: "Nam Dinh" },
        { text: "Da Nang" },
        { text: "Hue" },
        { text: "Binh Phuoc" },
        { text: "Sai Gon" },
      ],
    };
  },
};
