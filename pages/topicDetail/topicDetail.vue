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
				</template>
			</block>
		</view>
	</view>
</template>

<script>
	import topicInfo from '../../components/topic-info/topic-info.vue'
	import swiperHeaderBox from "../../components/swiper-header-box/swiper-header-box.vue"
	import comonList from "../../components/comon-list/comon-list.vue"
	export default {
		data() {
			return {
				tabIndex: 0,
				tabBars: [
					{
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
						loadtxt: "上拉加载更多",
						list: [
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
					{
						loadtxt: "上拉加载更多",
						list: [
							{
								userpic: "../../static/image/user.jpg",
								username: "kolman",
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
					}
				]
			}
		},
		onLoad() {
			
		},
		methods: {
			tabtap(index) {
				this.tabIndex = index;
			}
		},
		components: {
			topicInfo,
			swiperHeaderBox,
			comonList
		}
	}
</script>

<style>

</style>
