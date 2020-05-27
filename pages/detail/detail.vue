<template>
	<view>
		<detail-list :item="detail"></detail-list>
		<view class="u-comment-title">最新评论 {{comment.count}}</view>
		<view class="uni-comment u-comment">
			<block v-for="(item,index) in comment.list" :key="index">
				<detail-comment :item="item" :index="index"></detail-comment>
			</block>
		</view>
		<view style="height: 120upx;"></view>
		<user-chat-bottom @submit="submit"></user-chat-bottom>
		<more-share :showShare="showShare" @togle="togle"></more-share>
	</view>
</template>

<script>
	import detailList from '../../components/detail-list/detail-list.vue'
	import parsetTime from '../../common/parsetTime.js'
	import detailComment from '../../components/detail-comment/detail-comment.vue'
	import userChatBottom from '../../components/user-chat-bottom/user-chat-bottom.vue'
	import moreShare from '../../components/more-share/more-share.vue'
	export default {
		data() {
			return {
				showShare: false,
				comment: {
					count: 20,
					list: []
				},
				detail: {
					userpic: "../../static/image/user.jpg",
					username: "kolboy",
					sex: 1, //0 男 1 女
					age: 25,
					isguanzhu: false,
					title: "我是标题",
					titlepic: "../../static/image/index01.jpg",
					morepic: ["../../static/image/index01.jpg", "../../static/image/user.jpg"],
					video: false,
					share: false,
					path: "深圳 龙岗",
					sharenum: 20,
					commentnum: 30,
					goodnum: 20
				}
			}
		},
		onLoad(e) {
			this.initdata(JSON.parse(e.detailId))
			this.getData();
		},
		onNavigationBarButtonTap(e) {
			if (e.index == 0) {
				this.showShare = true;
			}
		},
		methods: {
			togle() {
				this.showShare = false;
			},
			initdata(obj) {
				uni.setNavigationBarTitle({
					title: obj.title
				})
			},
			submit(data) {
				let obj = {
					id: 5,
					fid: 1,
					userpic: "../../static/image/user.jpg",
					username: "boxman",
					time: parsetTime.parsetime(new Date().getTime()),
					data: data,
				}
				this.comment.list.push(obj);
			},
			getData() {
				let arr = [

					{
						id: 1,
						fid: 0,
						userpic: "../../static/image/user.jpg",
						username: "kolboy",
						time: "1590494906",
						data: "我是评论",

					},
					{
						id: 2,
						fid: 1,
						userpic: "../../static/image/user.jpg",
						username: "kolman",
						time: "1590419306",
						data: "我是评论111",

					},
					{
						id: 3,
						fid: 1,
						userpic: "../../static/image/user.jpg",
						username: "kolman",
						time: "1590408506",
						data: "我是评论111",

					},
					{
						id: 4,
						fid: 0,
						userpic: "../../static/image/user.jpg",
						username: "kolman",
						time: "1590494906",
						data: "我是评论111",

					}

				]
				for (var i = 0; i < arr.length; i++) {
					arr[i].time = parsetTime.parsetime(arr[i].time)
				}
				this.comment.list = arr
			}
		},
		components: {
			detailList,
			detailComment,
			userChatBottom,
			moreShare
		}
	}
</script>

<style>
	.u-comment {
		padding: 0upx 20upx;
	}

	.u-comment-title {
		padding: 20upx;
		font-size: 30upx;
		font-weight: bold;
	}
</style>
