<template>
	<view>
		<template v-if="list.length > 0">
			<block v-for="(item,index) in list" :key="index">
				<index-list :item="item" :index="index"></index-list>
			</block>
			<load-more :loadtext="loadtext"></load-more>
		</template>
		<template v-else-if="issearch && list.length < 1">
			<no-thing></no-thing>
		</template>
	</view>
</template>

<script>
	import indexList from "../../components/index-list/index-list.vue"
	import noThing from "../../components/no-thing/no-thing.vue"
	import loadMore from "../../components/load-more/load-more.vue"
	export default {
		data() {
			return {
				issearch: false,
				loadtext: "上拉加载更多",
				list: [],
				searchtext: ""
			}
		},
		onNavigationBarButtonTap(e) {
			if (e.index == 0) {
				uni.navigateBack({
					data: 1
				})
			}
		},
		onNavigationBarSearchInputChanged(e) {
			this.searchtext = e.text;
		},
		onNavigationBarSearchInputConfirmed(e) {
			if(e.text) {
				this.getData();
			}
		},
		onReachBottom() {
			this.loadmore();
		},
		onPullDownRefresh() {
			this.getData();
			uni.stopPullDownRefresh();
		},
		methods: {
			getData() {
				uni.showLoading();
				setTimeout(()=>{
					let arr = [{
							userpic: "../../static/image/user.jpg",
							username: "一条小鱼",
							isguanzhu: true,
							title: "这是标题",
							type: "img", //img图文，video视频
							titlepic: "../../static/image/index01.jpg",
							infonum: {
								index: 1, //0没有操作，1点赞，2踩
								zan: 11,
								cai: 11,
							},
							commentnum: 10,
							sharenum: 10,
						},
						{
							userpic: "../../static/image/user.jpg",
							username: "一条小鱼",
							isguanzhu: false,
							title: "这是标题",
							type: "video", //img图文，video视频
							titlepic: "../../static/image/index01.jpg",
							playnum: "20W",
							playtime: "2:40",
							infonum: {
								index: 1, //0没有操作，1点赞，2踩
								zan: 11,
								cai: 11,
							},
							commentnum: 10,
							sharenum: 10,
						}
					]
					this.list = arr;
					this.issearch = true
					uni.hideLoading();
				},1000)
			},
			loadmore() {
				if (this.loadtext != "上拉加载更多") {
					return;
				}
				this.loadtext = "加载中...";
				setTimeout(() => {
					let obj = {
						userpic: "../../static/image/user.jpg",
						username: "一条小鱼",
						isguanzhu: true,
						title: "这是标题",
						type: "img", //img图文，video视频
						titlepic: "../../static/image/index01.jpg",
						infonum: {
							index: 1, //0没有操作，1点赞，2踩
							zan: 11,
							cai: 11,
						},
						commentnum: 10,
						sharenum: 10,
					};
					this.list.push(obj);
					this.loadtext = "上拉加载更多";
				}, 1000);

			}
		},
		components: {
			indexList,
			noThing,
			loadMore
		}
	}
</script>

<style>

</style>
