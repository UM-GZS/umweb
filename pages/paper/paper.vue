<template>
	<view class="paper-body">
		<paper-popup-nav :navShow="navShow" @hidepopup="hidepopup" @addf="addf" @clear="clear"></paper-popup-nav>
		<block v-for="(item,index) in list" :key="index">
			<paper-list :item="item" :index="index"></paper-list>
		</block>
		<load-more :loadtext="loadtext"></load-more>
	</view>
</template>

<script>
	import paperList from '../../components/paper-list/paper-list.vue'
	import loadMore from "../../components/load-more/load-more.vue"
	import paperPopupNav from "../../components/paper-popup-nav/paper-popup-nav.vue"
	export default {
		data() {
			return {
				navShow: false,
				loadtext: "上拉加载更多",
				list: [{
						userpic: "../../static/image/user.jpg",
						username: "kolboy",
						time: "10:45",
						data: "我是信息",
						nornum: "12"
					},
					{
						userpic: "../../static/image/user.jpg",
						username: "kolboy",
						time: "10:45",
						data: "我是信息",
						nornum: "0"
					},
					{
						userpic: "../../static/image/user.jpg",
						username: "kolboy",
						time: "10:45",
						data: "我是信息",
						nornum: "12"
					},
					{
						userpic: "../../static/image/user.jpg",
						username: "kolboy",
						time: "10:45",
						data: "我是信息",
						nornum: "12"
					},
					{
						userpic: "../../static/image/user.jpg",
						username: "kolboy",
						time: "10:45",
						data: "我是信息",
						nornum: "12"
					},
					{
						userpic: "../../static/image/user.jpg",
						username: "kolboy",
						time: "10:45",
						data: "我是信息",
						nornum: "12"
					},
					{
						userpic: "../../static/image/user.jpg",
						username: "kolboy",
						time: "10:45",
						data: "我是信息",
						nornum: "12"
					},
					{
						userpic: "../../static/image/user.jpg",
						username: "kolboy",
						time: "10:45",
						data: "我是信息",
						nornum: "12"
					}
				]
			}
		},
		onReachBottom() {
			this.loadData();
		},
		onPullDownRefresh() {
			this.PullRefresh();
		},
		onNavigationBarButtonTap(e) {
			switch (e.index) {
				case 0:
				uni.navigateTo({
					url: '../userList/userList'
				});
				this.hidepopup();
				break;
				case 1:
				this.showpopup();
				break;
			}
		},
		methods: {
			PullRefresh() {
				setTimeout(() => {

					let arr = [

						{
							userpic: "../../static/image/user.jpg",
							username: "kolman",
							time: "10:45",
							data: "我是信息",
							nornum: "12"
						},
						{
							userpic: "../../static/image/user.jpg",
							username: "boxk",
							time: "10:45",
							data: "我是信息",
							nornum: "0"
						},
						{
							userpic: "../../static/image/user.jpg",
							username: "kolboy",
							time: "10:45",
							data: "我是信息",
							nornum: "12"
						}
					];
					this.list = arr;
					uni.stopPullDownRefresh();
				}, 2000)
			},
			loadData() {
				if (this.loadtext != "上拉加载更多") {
					return;
				}
				this.loadtext = "加载中...";
			setTimeout(() => {
				let obj = {
					userpic: "../../static/image/user.jpg",
					username: "openbox",
					time: "10:45",
					data: "我是信息",
					nornum: "12"
				};
				this.list.push(obj);
				this.loadtext = "上拉加载更多";
			}, 2000);
		},
		addf() {
			this.hidepopup();
		},
		clear() {
			this.hidepopup();
		},
		hidepopup() {
			this.navShow = false
		},
		showpopup() {
			this.navShow = true
		}
	},
	components: {
		paperList,
		loadMore,
		paperPopupNav
	}
	}
</script>

<style>
	.paper-body {
		padding: 0upx 20upx;
	}
	
</style>
