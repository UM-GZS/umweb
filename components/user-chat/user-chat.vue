<template>
	<view class="chat-body">
		<view class="user-chat-time u-f-ajc" v-if="item.getTime">{{item.getTime}}</view>
		<view class="user-chat-list u-f" :class="{'user-chat-me':item.isme}">
			<image v-if="!item.isme" :src="item.userpic" mode="widthFix" lazy-load></image>
			<view class="user-chat-list-body">
				<text v-if="item.type == 'text'">{{item.data}}</text>
				<image v-if="item.type == 'img'" :src="item.userpic" mode="widthFix" lazy-load></image>
			</view>
			<image v-if="item.isme" :src="item.userpic" mode="widthFix" lazy-load></image>
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
		}
	}
</script>

<style scoped>
	.chat-body {
		padding: 0upx 10upx;
	}

	.user-chat-list {
		padding: 10upx 0upx;
	}

	.user-chat-list>image {
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
		flex-shrink: 0;
	}

	.user-chat-me {
		justify-content: flex-end;
	}

	.user-chat-me .user-chat-list-body {
		margin-right: 20upx;
		margin-left: 100upx;
	}

	.user-chat-me .user-chat-list-body::after {
		left: auto;
		right: -28upx;
		border-color: transparent transparent transparent #F4F4F4;
	}

	.user-chat-list-body {
		position: relative;
		background: #F4F4F4;
		padding: 25upx;
		margin-left: 30upx;
		border-radius: 20upx;
		margin-right: 100upx;
	}

	.user-chat-time {
		padding: 50upx 0upx;
		color: #A2A2A2;
		font-size: 24upx;
	}

	.user-chat-list-body::after {
		position: absolute;
		left: -28upx;
		right: 0;
		top: 20upx;
		content: '';
		width: 0;
		height: 0;
		border: 16upx solid #F4F4F4;
		border-color: transparent #F4F4F4 transparent transparent;
	}

	.user-chat-list-body>image {
		max-width: 250upx;
		max-height: 300upx;
	}
</style>
