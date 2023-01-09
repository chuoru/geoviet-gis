export default {
  name: "InformationRetrieval",
  components: {
  },
  data() {
    return {
      sortBy: 'No.',
        fields: [
          { key: 'No.', sortable: true },
          { key: 'Tên', sortable: true },
          { key: 'Địa chỉ', sortable: true },
        ],
        // table output data
        resultTableData: [{ 'No.': 1, 'Tên': '	Điểm quan trắc Xã Vân Tùng', 'Địa chỉ': 'Xã Vân Tùng'},
        { 'No.': 2, 'Tên': 'Điểm quan trắc Thị trấn Bằng Lũng', 'Địa chỉ': 'Thị trấn Bằng Lũng'},
        { 'No.': 3, 'Tên': 'Điểm quan trắc Xã Bằng Vân', 'Địa chỉ': 'Xã Bằng Vân'}], 
        perPage: 5,
        currentPage: 1,
        searchSummary: 0,
        totalRows: 0
      };
  },
  mounted() {
    this.searchSummary = Array.from(this.resultTableData).length;
    this.totalRows =  Array.from(this.resultTableData).length;
  }
};
