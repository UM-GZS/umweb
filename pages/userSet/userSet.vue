<template>
	<view class="body">
		<block v-for="(item,index) in list" :key="index">
			<home-nav-list :item="item" :index="index"></home-nav-list>
		</block>
		<button class="suerset-button" type="primary">退出登录</button>
	</view>
</template>

<script>
	import homeNavList from '../../components/home-nav-list/home-nav-list.vue'
	export default {
		data() {
			return {
				list: [
					{icon: "",name: "账号与安全",clickType: "navigateTo",url: "../restpassword/restpassword"},
					{icon: "",name: "绑定邮箱",clickType: "navigateTo",url: "../restemail/restemail"},
					{icon: "",name: "资料编辑",clickType: "navigateTo",url: "../restinfo/restinfo"},
					{icon: "",name: "小纸条",clickType: "",url: ""},
					{icon: "",name: "清除缓存",clickType: "clear",url: ""},
					{icon: "",name: "意见反馈",clickType: "navigateTo",url: "../resthelp/resthelp"},
					{icon: "",name: "关于我们",clickType: "navigateTo",url: "../restabout/restabout"}
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
.suerset-button{
	width: 100%;
	margin: 20upx 0upx;
	background: #FFE933!important;
	border: 0upx!important;
	color: #333333!important;
}
</style>
