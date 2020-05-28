<template>
	<view class="other-login u-f-ac">
		<view class="u-f-ajc u-f1"><view class="icon iconfont icon-weixin u-f-ajc other-login-01"></view></view>
		<view class="u-f-ajc u-f1"><view class="icon iconfont icon-qq u-f-ajc other-login-02"></view></view>
		<view class="u-f-ajc u-f1"><view class="icon iconfont icon-weibo u-f-ajc other-login-03"></view></view>
	</view>
</template>

<script>
	export default { 
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
.other-login{
	padding: 20upx 80upx;
}
.other-login>view>view{
	width: 80upx;
	height: 80upx;
	border-radius: 100%;
	font-size: 35upx;
	color: #FFFFFF;
}
.other-login-01{
	background: #2CAEFC;
}
.other-login-02{
	background: #2BD19B;
}
.other-login-03{
	background: #FC7729;
}
</style>
