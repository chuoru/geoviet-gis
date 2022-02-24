export default {
	name: 'NavBar',
	data() {
		return {
			active: ''
		}
	},
	methods: {
		makeActive: function(item){
			// When a model is changed, the view will be automatically updated.
			this.active = item;
		},
		onToggleSideBar: function () {
            // $('#sidebar').toggleClass('active');
            var target = document.getElementById("sidebar");
            // target.classList.toggleClass('active');
            let classes = target.classList;
            const result = classes.toggle('active');
            console.log(result);
        }
	}
}