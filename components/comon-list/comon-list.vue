<template>
	<view class="common-list u-f">
		<view class="common-list-l">
			<image :src="item.userpic" mode="widthFix" lazy-load></image>
		</view>
		<view class="common-list-r">
			<view class="u-f-ac u-f-jcsb">
				<view class="u-f-ac">{{item.username}}
					<view class="tag-sex" :class="[item.sex == 0 ? 'sexB' : 'sexG']">{{item.age}}</view>
				</view>
				<view v-show="!isguanzhu" @tap="guanzhu">关注</view>
			</view>
			<view>{{item.title}}</view>
			<view class="u-f-ajc">
				<!-- 图片 -->
				<image v-if="item.titlepic" :src="item.titlepic" mode="widthFix" lazy-load></image>
				<!-- 视频 -->
				<template v-if="item.video">
					<view class="common-list-play icon iconfont icon-bofang"></view>
					<view class="common-list-playinfo">
						{{item.video.looknum}} 次播放 {{item.video.long}}
					</view>
				</template>
				<!-- 分享 -->
				<view class="common-list-share u-f-ac" v-if="item.share">
					<image :src="item.share.titlepic" mode="widthFix" lazy-load></image>
					<view>{{item.share.title}}</view>
				</view>
			</view>
			<view class="u-f-ac u-f-jcsb">
				<view>{{item.path}}</view>
				<view class="u-f-ac">
					<view>分享:{{item.sharenum}}</view>
					<view>评论:{{item.commentnum}}</view>
					<view>点赞:{{item.goodnum}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		},
		data() {
			return {
					isguanzhu: this.item.isguanzhu
			};
		},
		methods: {
			guanzhu() {
				this.isguanzhu = true;
				uni.showToast({
					title: '关注成功',
					icon: 'success'
				})
			}
		}
	}
</script>

<style scopeds>
	.common-list {
		padding: 20upx;
	}

	.common-list-l {
		flex-shrink: 0;
	}

	.common-list-l image {
		width: 90upx;
		height: 90upx;
		border-radius: 100%;
	}

	.common-list-r {
		flex: 1;
		margin-left: 15upx;
		border-bottom: 1upx solid #EEEEEE;
		margin-bottom: 10upx;
	}

	.common-list-r>view:nth-child(1)>view:first-child {
		color: #999999;
		font-size: 32upx;
	}

	.common-list-r>view:nth-child(1)>view:last-child {
		background: #EEEEEE;
		padding: 0 10upx;
		font-size: 26upx;
	}

	.tag-sex {
		color: #FFFFFF;
		font-size: 23upx;
		padding: 5upx 10upx;
		line-height: 25upx;
		margin-left: 10upx;
		border-radius: 20upx;
	}

	.sexB {
		background: #007AFF;
	}

	.sexG {
		background: #FF9999;
	}

	.common-list-r>view:nth-child(2) {
		font-size: 32upx;
		padding: 12upx 0;
	}

	.common-list-r>view:nth-child(3) {
		position: relative;
		margin-bottom: 10upx;
	}

	.common-list-share {
		background: #EEEEEE;
		width: 100%;
		padding: 10upx;
		border-radius: 10upx;
	}

	.common-list-share>image {
		width: 200upx;
		height: 150upx;
		margin-right: 10upx;
	}

	.common-list-play,
	.common-list-playinfo {
		position: absolute;
		color: #FFFFFF;
	}

	.common-list-play {
		font-size: 80upx;
	}

	.common-list-playinfo {
		right: 10upx;
		bottom: 10upx;
		background: rgba(51, 51, 51, 0.75);
		border-radius: 20upx;
		padding: 0 20upx;
		font-size: 26upx;
	}

	.common-list-r>view:nth-child(4)>view {
		color: #AAAAAA;
	}

	.common-list-r>view:nth-child(4)>view:nth-child(2)>view {
		margin-right: 10upx;
		padding-left: 5upx;
		font-size: 20upx;
	}

	.common-list-r>view:nth-child(3)>image {
		width: 100%;
		border-radius: 10upx;
	}
</style>
