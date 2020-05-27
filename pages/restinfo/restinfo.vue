<template>
	<view class="body">
		<view class="user-set-info-list u-f-ac u-f-jcsb">
			<view>头像</view>
			<view class="u-f-ac" @tap="changeImg">
				<image :src="userpic" mode="widthFix" lazy-load></image>
				<view class="icon iconfont icon-fabiaoanli-"></view>
			</view>
		</view>
		<view class="user-set-info-list u-f-ac u-f-jcsb">
			<view>昵称</view>
			<view class="u-f-ac">
				<view>kolboy</view>
				<view class="icon iconfont icon-fabiaoanli-"></view>
			</view>
		</view>
		<view class="user-set-info-list u-f-ac u-f-jcsb">
			<view>性别</view>
			<view class="u-f-ac">
				<view>男</view>
				<view class="icon iconfont icon-fabiaoanli-"></view>
			</view>
		</view>
		<view class="user-set-info-list u-f-ac u-f-jcsb">
			<view>生日</view>
			<view class="u-f-ac">
				<view>1998-01-10</view>
				<view class="icon iconfont icon-fabiaoanli-"></view>
			</view>
		</view>
		<view class="user-set-info-list u-f-ac u-f-jcsb">
			<view>情感</view>
			<view class="u-f-ac">
				<view>单身</view>
				<view class="icon iconfont icon-fabiaoanli-"></view>
			</view>
		</view>
		<view class="user-set-info-list u-f-ac u-f-jcsb">
			<view>职业</view>
			<view class="u-f-ac">
				<view>IT</view>
				<view class="icon iconfont icon-fabiaoanli-"></view>
			</view>
		</view>
		<view class="user-set-info-list u-f-ac u-f-jcsb">
			<view>家乡</view>
			<view class="u-f-ac">
				<view>中国广东</view>
				<view class="icon iconfont icon-fabiaoanli-"></view>
			</view>
		</view>
		<button class="suerset-button" type="primary" @tap="submit">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userpic: "../../static/image/user.jpg"
			}
		},
		methods: {
			changeImg() { 
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					success:(res) => {
						this.userpic = res.tempFilePaths;
					}
				})
			},
			submit() {
					
			}
		}
	}
</script>

<style>
	.body{
		padding: 0upx 20upx;
	}
	.user-set-info-list {
		padding: 20upx;
		border-bottom: 1upx solid #F4F4F4;
	}
	.user-set-info-list>view:first-child{
		font-size: 30upx;
		font-weight: bold;
		color: #9B9B9B;
	}
	.user-set-info-list>view:last-child>view:last-child{
		color: #9B9B9B;
		margin-left: 20upx;
	}
	.user-set-info-list>view:last-child>image{
		width: 80upx;
		height: 80upx;
		border-radius: 100%;
	}
	.suerset-button {
		width: 100%;
		margin: 20upx 0upx;
		background: #FFE933 !important;
		border: 0upx !important;
		color: #333333 !important;
	}
</style>
