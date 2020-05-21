<template>
	<view>
<<<<<<< HEAD
		
=======
		<news-nav-tab :tabBars="tabBars" :tabIndex="tabIndex" @changeTab="changeTab"></news-nav-tab>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height: swiperheight+'px'}" :current="tabIndex" @change="tabChange" id="tabbb">
				<!-- 关注 -->
				<swiper-item>
					<scroll-view scroll-y="true" class="list" @scrolltolower="loadmore()">
						<block v-for="(item,index) in guanzhus.list" :key="index">
							<comon-list :item="item" :index="index"></comon-list>
						</block>
						<!-- 上拉加载 -->
						<load-more :loadtext="guanzhus.loadtext"></load-more>
					</scroll-view>
				</swiper-item>
				<!-- 话题 -->
				<swiper-item>
					<scroll-view scroll-y="true" class="list">
						<!-- 搜索框 -->
						<view class="search-input">
							<input class="uni-input" placeholder-class="topic-search" placeholder="搜索内容"/>
						</view>
						<!-- 轮播图 -->
						<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
							<swiper-item>
								<view class="swiper-item"></view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item"></view>
							</swiper-item>
						</swiper>
						<!-- 热门分类 -->
						<!-- 最新更新 -->
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
>>>>>>> 65fad5a... updata v1.0
	</view>
</template>

<script>
<<<<<<< HEAD
	export default {
		data() {
			return {
=======
	import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue"
	import comonList from "../../components/comon-list/comon-list.vue"
	import newsNavTab from "../../components/news-nav-tab/news-nav-tab.vue"
	import loadMore from "../../components/load-more/load-more.vue";
	export default {
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
		data() {
			return {
				swiperheight: 500,
				tabIndex: 1,
				tabBars: [{
						name: "关注",
						id: "guanzhu"
					},
					{
						name: "话题",
						id: "huati"
					}
				],
				guanzhus: {
					loadtext: "上拉加载更多",
					list: [
						//文字
						{
							userpic: "../../static/image/user.jpg",
							username: "kolboy",
							sex: 0,//0 男 1 女
							age: 25,
							isguanzhu: false,
							title: "我是标题",
							titlepic: "",
							video: false,
							share: false,
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						},
						//图文
						{
							userpic: "../../static/image/user.jpg",
							username: "kolboy",
							sex: 1,//0 男 1 女
							age: 25,
							isguanzhu: false,
							title: "我是标题",
							titlepic: "../../static/image/index01.jpg",
							video: false,
							share: false,
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						},
						//视频
						{
							userpic: "../../static/image/user.jpg",
							username: "kolboy",
							sex: 0,//0 男 1 女
							age: 25,
							isguanzhu: false,
							title: "我是标题",
							titlepic: "../../static/image/index01.jpg",
							video: {
								looknum: "28w",
								long: "2:47"
							},
							share: false,
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						},
						//分享
						{
							userpic: "../../static/image/user.jpg",
							username: "kolboy",
							sex: 1,//0 男 1 女
							age: 25,
							isguanzhu: false,
							title: "我是标题",
							titlepic: "",
							video: false,
							share: {
								title: "我是分享标题",
								titlepic: "../../static/image/index01.jpg"
							},
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						}
					]
				},
>>>>>>> 65fad5a... updata v1.0
				
			}
		},
		methods: {
<<<<<<< HEAD
			
=======
			changeTab(index) {
				this.tabIndex = index
			},
			tabChange(e) {
				this.tabIndex = e.detail.current;
			},
			loadmore(index) {
				if(this.guanzhus.loadtext != "上拉加载更多"){
					return ;
				}
				this.guanzhus.loadtext = "加载中...";
				setTimeout(()=> {
					let obj = {
							userpic: "../../static/image/user.jpg",
							username: "kolboy",
							sex: 1,//0 男 1 女
							age: 25,
							isguanzhu: false,
							title: "我是标题",
							titlepic: "../../static/image/index01.jpg",
							video: false,
							share: false,
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						};
					this.guanzhus.list.push(obj);
					this.guanzhus.loadtext = "上拉加载更多";
				},1000);
			}
		},
		components: {
			uniNavBar,
			comonList,
			newsNavTab,
			loadMore
>>>>>>> 65fad5a... updata v1.0
		}
	}
</script>

<style>
<<<<<<< HEAD

=======
	.search-input{
		padding: 20upx;
	}
	.search-input>input{
		background: #F7F7F7;
		border-radius: 10upx;
	},
	.topic-search{
		text-align: center;
	}
>>>>>>> 65fad5a... updata v1.0
</style>
