<template>
	<view class="home-nav-list-item u-f-ac u-f-jcsb" hover-class="home-nav-hover">
		<view class="u-f-ac"><view class="icon iconfont" :class="['icon-'+item.icon]"></view>{{item.name}}</view>
		<view class="icon iconfont icon-fenxiang"></view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
.home-nav-hover{
	background: #F4F4F4;
}
.home-nav-list-item{
	padding: 20upx;
	border-top: 1upx solid #F4F4F4;
	border-bottom: 1upx solid #F4F4F4;
}
.home-nav-list-item>view:first-child{
	color: #333333;
}
.home-nav-list-item>view:first-child>view{
	margin-right: 10upx;
}
.home-nav-list-item>view:last-child{
	color: #CCCCCC;
}
</style>
