<template>
	<view class="topic-nav">
		<view class="u-f-ajc u-f-jcsb">
			<view>热门分类</view>
			<view class="u-f-ac" @tap="gonews">更多</view>
		</view>
		<view class="u-f-ac">
			<block v-for="(item,index) in nav" :key="index">
				<view class="u-f-ajc">{{item.name}}</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			nav: Array
		},
		data() {
			return {
				
			};
		},
		methods: {
			gonews() {
				uni.navigateTo({
					url: '../../pages/topicNav/topicNav'
				})
			}
		}
	}
</script>

<style scoped>
.topic-nav{
		border-bottom: 1upx solid #EEEEEE;
		border-top: 1upx solid #EEEEEE;
		padding: 20upx;
	}
	.topic-nav>view:first-child{
		margin-bottom: 10upx;
	}
	.topic-nav>view:first-child view{
		color: #9E9E9E;
	}
	.topic-nav>view:first-child>view:first-child{
		color: #333333;
		font-size: 30upx;
	}
	.topic-nav>view:last-child>view{
		flex: 1;
		background: #DDDDDD;
		color: #9E9E9E;
		border-radius: 10upx;
		margin: 0upx 10upx;
	}
</style>
