import { Plotly } from 'vue-plotly';

export default {
    name: "SearchResult",
    components: {
      Plotly
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
          { key: 'Mã QT', sortable: true },
          { key: 'Ngày QT', sortable: true },
          { key: 'Đợt QT', sortable: true },
          { key: 'Cảm quan', sortable: true },
          { key: 'Nhiệt độ', sortable: true },
          { key: 'Độ đục', sortable: true },
        ],
        // table output data
        resultTableData: [
          { 'Mã QT': 'NMNS-1', 'Ngày QT': '01/09/2018', 'Đợt QT': 'q3', 'Cảm quan': '', 'Nhiệt độ': 26.3, 'Độ đục': 21 },
          { 'Mã QT': 'NMNS-1', 'Ngày QT': '01/06/2018', 'Đợt QT': 'q2', 'Cảm quan': '', 'Nhiệt độ': 26.1, 'Độ đục': 21 },
          { 'Mã QT': 'NMNS-1', 'Ngày QT': '01/01/2018', 'Đợt QT': 'q1', 'Cảm quan': '', 'Nhiệt độ': 26.8, 'Độ đục': 18 },
          { 'Mã QT': 'NMNS-1', 'Ngày QT': '01/06/2017', 'Đợt QT': 'q2', 'Cảm quan': '', 'Nhiệt độ': 26.8, 'Độ đục': 18 },
        ],

        // result table variable
        perPage: 5,
        currentPage: 1,
        totalRows: 1,
        singleModeGraphLayout: {
          title: {
              text: 'Theo dõi nhiệt độ điểm quan trắc NMNS-1 ',
              font: {
                  family: 'Courier New, monospace',
                  size: 24,
                  color: '#000000'
              },
          },
          xaxis: {
              title: {
                  text: 'Ngày QT',
                  font: {
                      family: 'Courier New, monospace',
                      size: 18,
                      color: '#000000'
                  }
              },
          },
          yaxis: {
              title: {
                  text: 'Nhiệt độ',
                  font: {
                      family: 'Courier New, monospace',
                      size: 18,
                      color: '#000000'
                  }
              },
          },
        },
        singleModeGraphData: [ 
          {
              x: ['01/09/2018', '01/06/2018', '01/01/2018', '01/06/2017'],
              y: [26.3, 26.1, 26.8, 26.8],
              type: 'scatter'
          }
        ]
      };
    },
    mounted() {
        // Set the initial number of items
        this.totalRows = this.resultTableData.length;
        
    },
  };