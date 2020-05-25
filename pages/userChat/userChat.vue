<template>
	<view>
		<view class="user-chat-bottom u-f-ac">
			<input type="text" placeholder="文明发言"/>
			<view class="icon iconfont icon-tixing u-f-ajc"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.user-chat-bottom{
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 100upx;
	padding: 0upx 20upx;
	background: #FFFFFF;
	border-top: 1upx solid #EEEEEE;
}
.user-chat-bottom>input{
	background: #F7F7F7;
	flex: 1;
	margin-right: 20upx;
	padding: 10upx;
	border-radius: 10upx;
}
.user-chat-bottom>view{
	width: 80upx;
	font-size: 30upx;
}
</style>
