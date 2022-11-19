export default {
    name: "SearchResult",
    components: {
    },
    props: [],
    data() {
      return {
        /* ↓↓↓ Bellow is b-modal variable ↓↓↓ */
        sortBy: 'age',
        fromLine: 0,
        toLine: 0,

        // row per page selection
        pageOptions: [5, 10, 15, 20],

        // table colums name
        fields: [
          { key: 'location', sortable: true },
          { key: 'dike_code', sortable: true },
          { key: 'dike_name', sortable: true },
          { key: 'dike_level', sortable: true },
          { key: 'dike_type', sortable: true },
          { key: 'length', sortable: true },
        ],
        // table output data
        resultTableData: [
          { location: '', dike_code: 40, dike_name: 'DE 40', dike_level: 'Cấp IV', dike_type:'Đê sông', length:'123' },
          { location: '', dike_code: 50, dike_name: '', dike_level: 'Cấp IV', dike_type:'Đê biển', length:'4132' },
          { location: '', dike_code: 60, dike_name: '', dike_level: '', dike_type:'Đê biển', length:'8757' },
          { location: '', dike_code: 70, dike_name: 'DE 70', dike_level: '', dike_type:'Đê sông', length:'76' },
          { location: '', dike_code: 80, dike_name: '', dike_level: '', dike_type:'Đê biển', length:'356' },
          { location: '', dike_code: 'A', dike_name: 'DE 80', dike_level: 'Cấp V', dike_type:'Đê biển', length:'6' },
          { location: '', dike_code: 'B', dike_name: '', dike_level: '', dike_type:'Đê sông', length:'7654' },
          { location: '', dike_code: 'C', dike_name: '', dike_level: '', dike_type:'Đê biển', length:'254' },
          { location: '', dike_code: 'D', dike_name: '', dike_level: 'Cấp IV', dike_type:'Đê sông', length:'365' },
          { location: '', dike_code: 'E', dike_name: '', dike_level: '', dike_type:'Đê sông', length:'356' },
          { location: '', dike_code: 'F', dike_name: 'DE F', dike_level: 'Cấp IV', dike_type:'Đê biển', length:'322' },
          { location: '', dike_code: 'G', dike_name: '', dike_level: 'Cấp III', dike_type:'Đê biển', length:'123' },
          { location: '', dike_code: 'H', dike_name: '', dike_level: 'Cấp III', dike_type:'Đê biển', length:'54' },
          { location: '', dike_code: 'L', dike_name: '', dike_level: 'Cấp II', dike_type:'Đê sông', length:'6' },
          { location: '', dike_code: 'M', dike_name: 'DE M', dike_level: 'Cấp IV', dike_type:'Đê biển', length:'432' },
          { location: '', dike_code: 'N', dike_name: '', dike_level: 'Cấp I', dike_type:'Đê sông', length:'1432' },
        ],

        // result table variable
        perPage: 5,
        currentPage: 1,
        totalRows: 1,
      };
    },
    mounted() {
        // Set the initial number of items
        this.totalRows = this.resultTableData.length;
        
    },
  };