<template>
	<view>
		sss
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onNavigationBarButtonTap(e) {
			if(e.index == 0) {
				uni.navigateBack({
					data: 1
				})
			}
		},
		onNavigationBarSearchInputChanged(e) {
			console.log('changed is :'+e.text)
		},
		onNavigationBarSearchInputConfirmed(e) {
			console.log('post is :'+e.text)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
