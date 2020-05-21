<template>
	<view>
		<swiper-header-box :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></swiper-header-box>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height: swiperheight+'px'}" :current="tabIndex" @change="tabChange" id="tabbb">
				<swiper-item v-for="(items,index) in newslist" :key="index">
					<scroll-view scroll-y="true" class="list" @scrolltolower="loadmore(index)">
						<template v-if="items.list.length > 0">
							<block v-for="(item,index1) in items.list" :key="index1">
								<index-list :item="item" :key="index"></index-list>
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
	import indexList from "../../components/index-list/index-list.vue";
	import swiperHeaderBox from "../../components/swiper-header-box/swiper-header-box.vue"
	import loadMore from "../../components/load-more/load-more.vue";
	import noThing from "../../components/no-thing/no-thing.vue";
	export default {
		data() {
			return {
				ph: 0,
				swiperheight: 0,
				newslist: [{
						loadtext: "上拉加载更多",
						list: [{
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
					},
					{
						loadtext: "上拉加载更多",
						list: []
					},
					{
						loadtext: "上拉加载更多",
						list: [{
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
					},
					{
						loadtext: "上拉加载更多",
						list: [{
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
						}]
					}
				],
				tabIndex: 0,
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
		onLoad() {

		},
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
			    url: '../search/search',
			});
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
				if(this.newslist[index].loadtext != "上拉加载更多"){
					return ;
				}
				this.newslist[index].loadtext = "加载中...";
				setTimeout(()=> {
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
					this.newslist[index].list.push(obj);
					this.newslist[index].loadtext = "上拉加载更多";
				},1000);
			}
		},
		components: {
			indexList,
			swiperHeaderBox,
			loadMore,
			noThing
		},
		onNavigationBarButtonTap(e) {
			switch(e.index){
				case 1:
				uni.navigateTo({
					url: '../public/public'
				})
			}
		},
	}
</script>

<style>
	
</style>
