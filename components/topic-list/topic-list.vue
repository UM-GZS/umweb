<template>
	<view class="topic-list u-f" @tap="goDatail">
		<image :src="item.titlepic" mode="widthFix" lazy-load></image>
		<view>
			<view>#{{item.title}}#</view>
			<view>{{item.desc}}</view>
			<view>动态 {{item.totalnum}} 今日 {{item.newnum}}</view>
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
				
			};
		},
		methods: {
			goDatail() {
				uni.navigateTo({
					url: '../../pages/topicDetail/topicDetail',
				})
			}
		}
	}
</script>

<style>
.topic-list{
		padding: 20upx 0upx;
		border-bottom: 1upx solid #EEEEEE;
	}
	.topic-list>view>view{
		color: #A4A4A4;
	}
	.topic-list>view>view:first-child{
		color: #333333;
		font-size: 30upx;
	}
	.topic-list image{
		width: 150upx;
		height: 150upx;
		border-radius: 10upx;
		margin-right: 20upx;
	}
</style>
