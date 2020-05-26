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
		<view class="more-share-model"></view>
		<view class="more-share">
			<view class="more-share-title u-f-ajc">分享到</view>
			<scroll-view scroll-x class="more-share-body">
				<view class="more-share-item" hover-class="more-share-hover">
					<view class="icon iconfont icon-gerenzhongxin u-f-ajc more-share-01"></view>
					<view>微信</view>
				</view>
				<view class="more-share-item" hover-class="more-share-hover">
					<view class="icon iconfont icon-gerenzhongxin u-f-ajc more-share-02"></view>
					<view>微信</view>
				</view>
				<view class="more-share-item" hover-class="more-share-hover">
					<view class="icon iconfont icon-gerenzhongxin u-f-ajc more-share-03"></view>
					<view>微信</view>
				</view>
				<view class="more-share-item" hover-class="more-share-hover">
					<view class="icon iconfont icon-gerenzhongxin u-f-ajc more-share-04"></view>
					<view>微信</view>
				</view>
				<view class="more-share-item" hover-class="more-share-hover">
					<view class="icon iconfont icon-gerenzhongxin u-f-ajc more-share-04"></view>
					<view>微信</view>
				</view>
			</scroll-view>
			<view class="more-share-bottom u-f-ajc" hover-class="more-share-hover">取消</view>
		</view>
	</view>
</template>

<script>
	import detailList from '../../components/detail-list/detail-list.vue'
	import parsetTime from '../../common/parsetTime.js'
	import detailComment from '../../components/detail-comment/detail-comment.vue'
	import userChatBottom from '../../components/user-chat-bottom/user-chat-bottom.vue'
	export default {
		data() {
			return {
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
				console.log(e.index)
			}
		},
		methods: {
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
			userChatBottom
		}
	}
</script>

<style>
	.more-share-model{ 
		background: rgba(51,51,51,0.49);
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: 100;
	}
	.more-share{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: #FFFFFF;
		z-index: 101;
	}
	.more-share-hover{
		background: #EEEEEE;
	}
	.more-share-body{
		white-space: normal;
		width: 100%;
		height: 200upx;
		border-bottom: 1upx solid #EEEEEE;
		line-height: 200upx;
	}
	.more-share-item{
		width: 25%;
		height: 100%;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		font-size: 55upx;
	}
	.more-share-01{
		background: #2AD198;
	}
	.more-share-02{
		background: #514D4C;
	}
	.more-share-03{
		background: #EE5E5E;
	}
	.more-share-04{
		background: #4A73BA;
	}
	.more-share-item>view:first-child{
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
		color: #FFFFFF;
	}
	.more-share-item>view:last-child{
		color: #7A7A7A;
	}
	.more-share-title,.more-share-bottom{
		font-size: 32upx;
		padding: 25upx;
	}
	.u-comment {
		padding: 0upx 20upx;
	}

	.u-comment-title {
		padding: 20upx;
		font-size: 30upx;
		font-weight: bold;
	}
</style>
