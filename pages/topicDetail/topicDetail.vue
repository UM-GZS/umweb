<template>
	<view>
		<topic-info :item="topicInfo"></topic-info>
		<swiper-header-box :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap" scrollItemStyle="width: 50%;" scrollStyle="border-bottom: 0;"></swiper-header-box>
		<view class="topic-detail-list">
			<block v-for="(item,index) in tablist" :key="index">
				<template v-if="tabIndex == index">
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
	import topicInfo from '../../components/topic-info/topic-info.vue'
	import swiperHeaderBox from "../../components/swiper-header-box/swiper-header-box.vue"
	import comonList from "../../components/comon-list/comon-list.vue"
	import loadMore from "../../components/load-more/load-more.vue"
	export default {
		data() {
			return {
				tabIndex: 0,
				tabBars: [{
						name: "默认",
						id: "moren"
					},
					{
						name: "最新",
						id: "zuixin"
					}
				],
				topicInfo: {
					titlepic: "../../static/image/user.jpg",
					title: "忆往事，敬余生",
					desc: "我是描述",
					totalnum: 100,
					newnum: 100
				},
				tablist: [{
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
								username: "kolman",
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
		onLoad() {

		},
		onReachBottom() {
			this.loadmore();
		},
		onPullDownRefresh() {
			this.pullrefresh();
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
			},
			pullrefresh() {
				setTimeout(() => {
					let arr = [{
							userpic: "../../static/image/user.jpg",
							username: "dsadsads",
							sex: 0, //0 男 1 女
							age: 25,
							isguanzhu: false,
							title: "我是标题ss",
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
					this.tablist[this.tabIndex].list = arr
					uni.stopPullDownRefresh();
				}, 2000);
			}
		},
		components: {
			topicInfo,
			swiperHeaderBox,
			comonList,
			loadMore
		}
	}
</script>

<style>

</style>
