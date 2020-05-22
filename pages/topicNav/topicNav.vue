<template>
	<view>
		<swiper-header-box :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></swiper-header-box>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height: swiperheight+'px'}" :current="tabIndex" @change="tabChange" id="tabbb">
				<swiper-item v-for="(items,index) in newslist" :key="index">
					<scroll-view scroll-y="true" class="list" @scrolltolower="loadmore(index)">
						<template v-if="items.list.length > 0">
							<view class="topic-view">
								<block v-for="(item,index1) in items.list" :key="index1">
									<topic-list :item="item" :index="index1"></topic-list>
								</block>
							</view>
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
	import noThing from "../../components/no-thing/no-thing.vue"
	import loadMore from "../../components/load-more/load-more.vue"
	import topicList from "../../components/topic-list/topic-list.vue"
	export default {
		data() {
			return {
				ph: 0,
				swiperheight: 0,
				tabIndex: 0,
				newslist: [{
						loadtext: "上拉加载更多",
						list: [

							{
								titlepic: "../../static/image/user.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								newnum: 10
							},
							{
								titlepic: "../../static/image/user.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								newnum: 10
							},
							{
								titlepic: "../../static/image/user.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								newnum: 10
							},
							{
								titlepic: "../../static/image/user.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								newnum: 10
							},
							{
								titlepic: "../../static/image/user.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								newnum: 10
							},
							{
								titlepic: "../../static/image/user.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								newnum: 10
							},
							{
								titlepic: "../../static/image/user.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								newnum: 10
							},
							{
								titlepic: "../../static/image/user.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								newnum: 10
							}

						],
					},
					{
						loadtext: "上拉加载更多",
						list: [

							{
								titlepic: "../../static/image/user.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								newnum: 10
							},
							{
								titlepic: "../../static/image/user.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								newnum: 10
							},
							{
								titlepic: "../../static/image/user.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								newnum: 10
							},
							{
								titlepic: "../../static/image/user.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								newnum: 10
							},
							{
								titlepic: "../../static/image/user.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								newnum: 10
							},
							{
								titlepic: "../../static/image/user.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								newnum: 10
							}

						]
					},
					{
						loadtext: "上拉加载更多",
						list: [

							{
								titlepic: "../../static/image/user.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								newnum: 10
							},
							{
								titlepic: "../../static/image/user.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								newnum: 10
							},
							{
								titlepic: "../../static/image/user.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								newnum: 10
							},
							{
								titlepic: "../../static/image/user.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								newnum: 10
							}

						]
					},
					{
						loadtext: "上拉加载更多",
						list: [

							{
								titlepic: "../../static/image/user.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								newnum: 10
							},
							{
								titlepic: "../../static/image/user.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								newnum: 10
							},
							{
								titlepic: "../../static/image/user.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								newnum: 10
							},
							{
								titlepic: "../../static/image/user.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								newnum: 10
							}

						]
					}
				],
				tabBars: [{
						name: "关注",
						id: "guanzhu"
					},
					{
						name: "推荐",
						id: "tuijian"
					},
					{
						name: "热门",
						id: "remen"
					},
					{
						name: "最新",
						id: "zuixin"
					}
				]
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
				this.tabIndex = index
			},
			tabChange(e) {
				this.tabIndex = e.detail.current;
			},
			loadmore(index) {
				if (this.newslist[index].loadtext != "上拉加载更多") {
					return;
				}
				this.newslist[index].loadtext = "加载中...";
				setTimeout(() => {
					let obj = {
								titlepic: "../../static/image/user.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalnum: 50,
								newnum: 10
							};
					this.newslist[index].list.push(obj);
					this.newslist[index].loadtext = "上拉加载更多";
				}, 1000);
			}
		},
		components: {
			swiperHeaderBox,
			noThing,
			loadMore,
			topicList
		}
	}
</script>

<style>
.topic-view{
	padding: 0upx 20upx;
}
</style>
