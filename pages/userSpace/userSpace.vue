<template>
	<view>
		<user-space-head :userInfo="userInfo"></user-space-head>
		<view class="user-space-data">
			<home-data :homedata="spacedata"></home-data>
		</view>
		<view class="user-space-line"></view>
		<view class="user-space-body">
			<swiper-header-box :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap" scrollItemStyle="width: 33.33%;"
			 scrollStyle="border-bottom: 0;"></swiper-header-box>
			<block v-for="(item,index) in tablist" :key="index">
				<template v-if="tabIndex == 0">
					<user-space-info :userInfo="userInfo"></user-space-info>
				</template>
				<template v-else-if="tabIndex == index">
					<block v-for="(list,listindex) in item.list" :key="listindex">
						<comon-list :item="list" :index="listindex"></comon-list>
					</block>
					<load-more :loadtext="item.loadtxt"></load-more>
				</template>
			</block>
		</view>
	</view>
</template>

<script>
	import userSpaceHead from '../../components/user-space-head/user-space-head.vue'
	import homeData from '../../components/home-data/home-data.vue'
	import swiperHeaderBox from "../../components/swiper-header-box/swiper-header-box.vue"
	import comonList from "../../components/comon-list/comon-list.vue"
	import loadMore from "../../components/load-more/load-more.vue"
	import userSpaceInfo from "../../components/user-space-info/user-space-info.vue"
	export default {
		data() {
			return {
				tabIndex: 0,
				tabBars: [{
						name: "主页",
						id: "zhuye"
					},
					{
						name: "最新",
						id: "zuixin"
					},
					{
						name: "动态",
						id: "dongtai"
					}
				],
				userInfo: {
					username: "kolboy",
					sex: 0,
					ages: 20,
					isguanzhu: false,
					bgImage: 1,
					changeUsImg: "../../static/image/user.jpg",
					regtime: "2019-08-10",
					id: 201830621104,
					age: "1998-01-10",
					work: "学生",
					address: "广东省",
					qg: "未婚"
				},
				spacedata: [{
						name: "获赞",
						num: "10k"
					},
					{
						name: "关注",
						num: 10
					},
					{
						name: "粉丝",
						num: 20
					}
				],
				tablist: [{},
					{
						loadtext: "上拉加载更多",
						list: [{
								userpic: "../../static/image/user.jpg",
								username: "kolboy",
								sex: 0, //0 男 1 女
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
								sex: 1, //0 男 1 女
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
								sex: 0, //0 男 1 女
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
								sex: 1, //0 男 1 女
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
					{
						loadtext: "上拉加载更多",
						list: [{
								userpic: "../../static/image/user.jpg",
								username: "kolboy",
								sex: 0, //0 男 1 女
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
								sex: 1, //0 男 1 女
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
								sex: 0, //0 男 1 女
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
								sex: 1, //0 男 1 女
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
					}
				]
			}
		},
		
		onReachBottom() {
			this.loadmore();
		},
		methods: {
			tabtap(index) {
				this.tabIndex = index;
			},
			loadmore() {
				if (this.tablist[this.tabIndex].loadtext != "上拉加载更多") {
					return;
				}
				this.tablist[this.tabIndex].loadtext = "加载中...";
				setTimeout(() => {
					let obj = {
						userpic: "../../static/image/user.jpg",
						username: "oooo",
						sex: 0, //0 男 1 女
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
					};
					this.tablist[this.tabIndex].list.push(obj);
					this.tablist[this.tabIndex].loadtext = "上拉加载更多";
				}, 2000);
			}
		},
		components: {
			userSpaceHead,
			homeData,
			swiperHeaderBox,
			comonList,
			loadMore,
			userSpaceInfo
		}
	}
</script>

<style>
	.user-space-data {
		background: #FFFFFF;
		position: relative;
		z-index: 10;
		border-top-right-radius: 25upx;
		border-top-left-radius: 25upx;
		top: -55upx;
	}

	.user-space-line {
		position: relative;
		top: -50upx;
		height: 5upx;
		background: #F4F4F4;
	}

	.user-space-body {
		position: relative;
		top: -50upx;
	}

	
</style>
