<template>
	<view class="user-body">
		<swiper-header-box :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap" scrollItemStyle="width: 33.3%;"
		 scrollStyle="border-bottom: 0;"></swiper-header-box>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height: swiperheight+'px'}" :current="tabIndex" @change="tabChange" id="tabbb">
				<swiper-item v-for="(items,index) in newslist" :key="index">
					<scroll-view scroll-y="true" class="list" @scrolltolower="loadmore(index)">
						<template v-if="items.list.length > 0">
							<block v-for="(item,index1) in items.list" :key="index1">
								<user-list :item="item" :index="index1"></user-list>
							</block>
							<load-more :loadtext="items.loadtext"></load-more>
						</template>
						<template v-else>
							<no-thing></no-thing>
						</template>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import swiperHeaderBox from "../../components/swiper-header-box/swiper-header-box.vue"
	import userList from "../../components/user-list/user-list.vue"
	import loadMore from "../../components/load-more/load-more.vue"
	import noThing from "../../components/no-thing/no-thing.vue"
	export default {
		data() {
			return {
				ph: 0,
				swiperheight: 0,
				tabIndex: 0,
				tabBars: [{
						name: "互关",
						id: "huguan",
						num: 10
					},
					{
						name: "关注",
						id: "guanzhu",
						num: 20
					},
					{
						name: "粉丝",
						id: "fensi",
						num: 30
					}
				],
				
				newslist: [{
						loadtext: "上拉加载更多",
						list: [
							{
								userpic: "../../static/image/user.jpg",
								username: "kolboy",
								age: 20,
								sex: 0,
								isguanzhu: false
							},
							{
								userpic: "../../static/image/user.jpg",
								username: "kolboy",
								age: 20,
								sex: 0,
								isguanzhu: true
							},
							{
								userpic: "../../static/image/user.jpg",
								username: "kolboy",
								age: 20,
								sex: 0,
								isguanzhu: true
							},
							{
								userpic: "../../static/image/user.jpg",
								username: "kolboy",
								age: 20,
								sex: 0,
								isguanzhu: false
							},
							{
								userpic: "../../static/image/user.jpg",
								username: "kolboy",
								age: 20,
								sex: 0,
								isguanzhu: false
							},
							{
								userpic: "../../static/image/user.jpg",
								username: "kolboy",
								age: 20,
								sex: 0,
								isguanzhu: false
							},
							{
								userpic: "../../static/image/user.jpg",
								username: "kolboy",
								age: 20,
								sex: 0,
								isguanzhu: false
							},
							{
								userpic: "../../static/image/user.jpg",
								username: "kolboy",
								age: 20,
								sex: 0,
								isguanzhu: false
							}
						]
					},
					{
						loadtext: "上拉加载更多",
						list: []
					},
					{
						loadtext: "上拉加载更多",
						list: [
							{
								userpic: "../../static/image/user.jpg",
								username: "kolboy",
								age: 20,
								sex: 0,
								isguanzhu: false
							},
							{
								userpic: "../../static/image/user.jpg",
								username: "kolboy",
								age: 20,
								sex: 0,
								isguanzhu: true
							},
							{
								userpic: "../../static/image/user.jpg",
								username: "kolboy",
								age: 20,
								sex: 0,
								isguanzhu: true
							},
							{
								userpic: "../../static/image/user.jpg",
								username: "kolboy",
								age: 20,
								sex: 0,
								isguanzhu: false
							}
						]
					}
				]
			}
		},
		onNavigationBarButtonTap(e) {
			if (e.index == 0) {
				uni.navigateBack({
					delta: 1
				})
			}
		},
		onReady() {
			let that = this;
			uni.getSystemInfo({ //调用uni-app接口获取屏幕高度
				success(res) { //成功回调函数
					that._data.pH = res.windowHeight //windoHeight为窗口高度，主要使用的是这个
					let titleH = uni.createSelectorQuery().select("#tabbb"); //想要获取高度的元素名（class/id）
					titleH.boundingClientRect(data => {
						let pH = that._data.pH;
						that._data.swiperheight = pH - data.top
						//计算高度：元素高度=窗口高度-元素距离顶部的距离（data.top）
					}).exec()
				}
			})
		},
		methods: {
			tabtap(index) {
				this.tabIndex = index;
			},
			tabChange(e) {
				this.tabIndex = e.detail.current;
			},
			loadmore(index) {
				if(this.newslist[index].loadtext != "上拉加载更多"){
					return ;
				}
				this.newslist[index].loadtext = "加载中...";
				setTimeout(()=> {
					let obj = {
								userpic: "../../static/image/user.jpg",
								username: "kolman",
								age: 40,
								sex: 1,
								isguanzhu: false
							};
					this.newslist[index].list.push(obj);
					this.newslist[index].loadtext = "上拉加载更多";
				},1000);
			}
		},
		components: {
			swiperHeaderBox,
			userList,
			loadMore,
			noThing
		}
	}
</script>

<style>
	.user-body {
		
	}
</style>
