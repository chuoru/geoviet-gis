import Multiselect from 'vue-multiselect'
import VJstree from 'vue-jstree'

export default {
    name: "SideBar",
    components: {
        Multiselect,
        VJstree
    },
    data() {
      return {

        /* ↓↓↓ Bellow is SideBar variable ↓↓↓ */

        oneInThreeTypeOfSearchPicked: [],
        selectedProvinces: [],

        // Cap De selection
        capDeSelected: null,
        capDe: [
          { value: null, text: '--Tất cả--' },
          { value: '>3', text: 'Đê cấp III trở lên' },
          { value: '<3', text: 'Đê dưới cấp III' },
          { value: 'sea', text: 'Đê biển' },
        ],

        // provinces data
        provinces: [
            { name: 'Ha Noi' },
            { name: 'Nam Dinh' },
            { name: 'Da Nang' },
            { name: 'Hue' },
            { name: 'Binh Phuoc' },
            { name: 'Sai Gon' }
        ],


        /* ↓↓↓ Bellow is b-modal variable ↓↓↓ */
        sortBy: 'age',

        // row per page selection
        pageOptions: [5, 10, 15, 20],

        // table colums name
        fields: [
          { key: 'vi_tri', sortable: true },
          { key: 'ma_tuyen_de', sortable: true },
          { key: 'ten_tuyen_de', sortable: true },
          { key: 'cap_de', sortable: true },
          { key: 'loai_de', sortable: true },
          { key: 'chieu_dai_m', sortable: true },
        ],
        // table output data
        resultTableData: [
          { vi_tri: '', ma_tuyen_de: 40, ten_tuyen_de: 'DE 40', cap_de: 'Cấp IV', loai_de:'Đê sông', chieu_dai_m:'123' },
          { vi_tri: '', ma_tuyen_de: 50, ten_tuyen_de: '', cap_de: 'Cấp IV', loai_de:'Đê biển', chieu_dai_m:'4132' },
          { vi_tri: '', ma_tuyen_de: 60, ten_tuyen_de: '', cap_de: '', loai_de:'Đê biển', chieu_dai_m:'8757' },
          { vi_tri: '', ma_tuyen_de: 70, ten_tuyen_de: 'DE 70', cap_de: '', loai_de:'Đê sông', chieu_dai_m:'76' },
          { vi_tri: '', ma_tuyen_de: 80, ten_tuyen_de: '', cap_de: '', loai_de:'Đê biển', chieu_dai_m:'356' },
          { vi_tri: '', ma_tuyen_de: 'A', ten_tuyen_de: 'DE 80', cap_de: 'Cấp V', loai_de:'Đê biển', chieu_dai_m:'6' },
          { vi_tri: '', ma_tuyen_de: 'B', ten_tuyen_de: '', cap_de: '', loai_de:'Đê sông', chieu_dai_m:'7654' },
          { vi_tri: '', ma_tuyen_de: 'C', ten_tuyen_de: '', cap_de: '', loai_de:'Đê biển', chieu_dai_m:'254' },
          { vi_tri: '', ma_tuyen_de: 'D', ten_tuyen_de: '', cap_de: 'Cấp IV', loai_de:'Đê sông', chieu_dai_m:'365' },
          { vi_tri: '', ma_tuyen_de: 'E', ten_tuyen_de: '', cap_de: '', loai_de:'Đê sông', chieu_dai_m:'356' },
          { vi_tri: '', ma_tuyen_de: 'F', ten_tuyen_de: 'DE F', cap_de: 'Cấp IV', loai_de:'Đê biển', chieu_dai_m:'322' },
          { vi_tri: '', ma_tuyen_de: 'G', ten_tuyen_de: '', cap_de: 'Cấp III', loai_de:'Đê biển', chieu_dai_m:'123' },
          { vi_tri: '', ma_tuyen_de: 'H', ten_tuyen_de: '', cap_de: 'Cấp III', loai_de:'Đê biển', chieu_dai_m:'54' },
          { vi_tri: '', ma_tuyen_de: 'L', ten_tuyen_de: '', cap_de: 'Cấp II', loai_de:'Đê sông', chieu_dai_m:'6' },
          { vi_tri: '', ma_tuyen_de: 'M', ten_tuyen_de: 'DE M', cap_de: 'Cấp IV', loai_de:'Đê biển', chieu_dai_m:'432' },
          { vi_tri: '', ma_tuyen_de: 'N', ten_tuyen_de: '', cap_de: 'Cấp I', loai_de:'Đê sông', chieu_dai_m:'1432' },
        ],

        // result table variable
        perPage: 5,
        currentPage: 1,
        totalRows: 1,
        items: [
            {
              "text": "Same but with checkboxes",
              "children": [
                {
                  "text": "initially selected",
                  "selected": true
                },
                {
                  "text": "custom icon",
                  "icon": "fa fa-warning icon-state-danger"
                },
                {
                  "text": "initially open",
                  "icon": "fa fa-folder icon-state-default",
                  "opened": true,
                  "children": [
                    {
                      "text": "Another node"
                    }
                  ]
                },
                {
                  "text": "custom icon",
                  "icon": "fa fa-warning icon-state-warning"
                },
                {
                  "text": "disabled node",
                  "icon": "fa fa-check icon-state-success",
                  "disabled": true
                }
              ]
            },
            {
              "text": "Same but with checkboxes",
              "opened": true,
              "children": [
                {
                  "text": "initially selected",
                  "selected": true
                },
                {
                  "text": "custom icon",
                  "icon": "fa fa-warning icon-state-danger"
                },
                {
                  "text": "initially open",
                  "icon": "fa fa-folder icon-state-default",
                  "opened": true,
                  "children": [
                    {
                      "text": "Another node"
                    }
                  ]
                },
                {
                  "text": "custom icon",
                  "icon": "fa fa-warning icon-state-warning"
                },
                {
                  "text": "disabled node",
                  "icon": "fa fa-check icon-state-success",
                  "disabled": true
                }
              ]
            },
            {
              "text": "And wholerow selection"
            }
          ]
      } 
    },
    mounted() {
      // Set the initial number of items
      this.totalRows = this.resultTableData.length
    },
    methods: {
        itemClick (node) {
            console.log(node.model.text + ' clicked !')
        }
    }
  };