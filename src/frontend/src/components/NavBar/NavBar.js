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
		}
	}
}