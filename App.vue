<script>
	export default {
		onLaunch: function() {
			console.log(this.config.webUrl)
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './common/uni.css';
	@import './common/animate.css';
	@import './common/iconfont.css';
	@import './common/listicon.css';
	@import './common/flexcom.css';
</style>
