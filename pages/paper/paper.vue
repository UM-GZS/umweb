<template>
	<view class="paper-body">
		<view class="paper-left-popup">
			<view>
				<view class=""></view>加好友
			</view>
			<view>
				<view></view>清理缓存
			</view>
		</view>
		<block v-for="(item,index) in list" :key="index">
			<paper-list :item="item" :index="index"></paper-list>
		</block>
		<load-more :loadtext="loadtext"></load-more>
	</view>
</template>

<script>
	import paperList from '../../components/paper-list/paper-list.vue'
	import loadMore from "../../components/load-more/load-more.vue"
	export default {
		data() {
			return {
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
		}
	},
	components: {
		paperList,
		loadMore
	}
	}
</script>

<style>
	.paper-body {
		padding: 0upx 20upx;
	}
</style>
