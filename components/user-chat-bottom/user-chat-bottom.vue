<template>
	<view class="user-chat-bottom u-f-ac">
		<input type="text" placeholder="文明发言" v-model="text"/>
		<view class="icon iconfont icon-tixing u-f-ajc" @tap="submit"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: ""
			};
		},
		methods: {
			submit() {
				this.$emit('submit',this.text)
				this.text = "";
			}
		}
	}
</script>

<style scoped>
.user-chat-bottom{
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 120upx;
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
