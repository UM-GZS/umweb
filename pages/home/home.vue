<template>
	<view>
		<template v-if="!isLogin">
			<view class="u-f-ajc">登录账号，体验更多功能</view>
			<other-login></other-login>
			<view class="u-f-ajc" @tap="goLogin">账号密码登录</view>
			
		</template>
		<template v-if="isLogin">
			<user-info :userInfo="userInfo" @goUser="goUser"></user-info>
		</template>
		<home-data :homedata="homedata"></home-data>
		<view class="home-ad u-f-ajc">
			<image src="../../static/image/index01.jpg" mode="widthFix" lazy-load></image>
		</view>
		<view class="home-nav-list">
			<block v-for="(item,index) in list" :key="index">
				<home-nav-list :item="item" :index="index"></home-nav-list>
			</block>
		</view>
	</view>
</template>

<script>
	import homeNavList from '../../components/home-nav-list/home-nav-list.vue'
	import userInfo from '../../components/user-info/user-info.vue'
	import otherLogin from '../../components/other-login/other-login.vue'
	import homeData from '../../components/home-data/home-data.vue'
	export default {
		data() {
			return {
				isLogin: true,
				homedata: [
					{name: "最新", num: 20},
					{name: "动态", num: 10},
					{name: "评论", num: 20},
					{name: "收藏", num: 10}
				],
				userInfo: {
					username: "kolboy",
					userpic: "../../static/image/user.jpg",
					totalnum: 0,
					todaynum: 0
				},
				list: [
					{icon: "tixing",name: "浏览历史",clickType: "",url: ""},
					{icon: "tixing",name: "审核认证",clickType: "",url: ""},
					{icon: "tixing",name: "设置中心",clickType: "",url: ""}
				]
			}
		},
		onNavigationBarButtonTap(e) {
			if(e.index == 0) {
				uni.navigateTo({
					url: '../userSet/userSet'
				})
			}
		},
		methods: {
			goLogin() {
				uni.navigateTo({
					url: '../login/login'
				})
			},
			goUser() {
				uni.navigateTo({
					url: '../userSpace/userSpace'
				})
			}
		},
		components: {
			homeNavList,
			userInfo,
			otherLogin,
			homeData
		}
	}
</script>

<style>

.home-ad{
	padding: 20upx;
}
.home-ad>image{
	width: 100%;
	max-height: 200upx;
	border-radius: 20upx;
}
.home-nav-list{
	padding: 20upx;
}

</style>
