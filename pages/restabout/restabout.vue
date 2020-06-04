<template>
	<view class="body">
		<view class="user-set-about u-f-ajc u-f-column">
			<image src="../../static/image/logo.png" mode="widthFix" lazy-load></image>
			<view>version 1.0.0</view>
		</view>
		<block v-for="(item,index) in list" :key="index">
			<home-nav-list :item="item"></home-nav-list>
		</block>
	</view>
</template>

<script>
	import homeNavList from '../../components/home-nav-list/home-nav-list.vue'
	export default {
		data() {
			return {
				list: [
					{icon: "",name: "新版本检测",clickType: "",url: ""},
					{icon: "",name: "用户使用协议",clickType: "",url: ""},
				]
			}
		},
		methods: {

		},
		components: {
			homeNavList
		}
	}
</script>

<style>
	.body{
		padding: 0upx 20upx;
	}
	.user-set-about {
		padding: 40upx 0upx;
	}
	
	.user-set-about>view{
		color: #CCCCCC;
	}
	
	.user-set-about>image {
		margin-top: 50upx;
		width: 40%;
		margin-bottom: 30upx;
	}
</style>
