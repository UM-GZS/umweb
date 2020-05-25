<template>
	<view>
			<block v-for="(item,index) in list" :key="index">
				<view class="user-chat-time u-f-ajc">{{item.getTime}}</view>
				<view class="user-chat-list u-f" :class="{'user-chat-me':item.isme}">
					<image v-if="!item.isme" :src="item.userpic" mode="widthFix" lazy-load></image>
					<view class="user-chat-list-body">
						<text v-if="item.type == 'text'">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</text>
						<image v-if="item.type == 'img'" :src="item.userpic" mode="widthFix" lazy-load></image>
					</view>
					<image v-if="item.isme" :src="item.userpic" mode="widthFix" lazy-load></image>
				</view>
			</block>
		<user-chat-bottom @submit="submit"></user-chat-bottom>
	</view>
</template>

<script>
	import userChatBottom from '../../components/user-chat-bottom/user-chat-bottom.vue'
	export default {
		data() {
			return {
				list: []
			}
		},
		onLoad() {
			this.getData();
			let op = "1590420446";
			this.submit(44)
		},
		methods: {
			submit(data) {
				console.log(data);
			},
			getData() {
				let arr = [
					{
						isme: false,
						userpic: "../../static/image/user.jpg",
						type: "img",
						data: "../../static/image/index01.jpg",
						time: "1590413613",
						getTime: "",
					},
					{
						isme: true,
						userpic: "../../static/image/user.jpg",
						type: "text",
						data: "哈哈哈",
						time: "1590413613",
						getTime: "",
					},
					{
						isme: false,
						userpic: "../../static/image/user.jpg",
						type: "text",
						data: "哈哈哈",
						time: "1590415252",
						getTime: "",
					},
					{
						isme: true,
						userpic: "../../static/image/user.jpg",
						type: "img",
						data: "../../static/image/index01.jpg",
						time: "1590413613",
						getTime: "",
					}
				]
				for(var i = 0;i<arr.length;i++) {
					arr[i].getTime = arr[i].time;
				}
				this.list = arr
			},
			parseTime(time) {
				var str = '';
				var curDate = new Date();
				var date = new Date(time);
				var curTimestamp = new Date().getTime();
				if (curTimestamp - time < 86400000) { // 24小时
					if (curDate.getDay() !== date.getDay()) str += '昨天 ';
					str += mainJs.parseHMS(date);
					return str;
				} else if (curTimestamp - time < 604800000) { // 一星期
					var a = ["日", "一", "二", "三", "四", "五", "六"];
					str += '星期' + a[date.getDay()] + ' ' + mainJs.parseHMS(date);
					return str;
				} else {
					str += date.getFullYear() + '年' + mainJs.addZero(date.getMonth() + 1) + '月' + mainJs.addZero(date.getDate()) + '日 ' +
						mainJs.parseHMS(date);
					return str;
				}
				// return new Date(time).Format("yyyy年MM月dd日 hh:mm:ss");
			}
		},
		components: {
			userChatBottom
		}
	}
</script>

<style>
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
		right: -30upx;
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
		left: -30upx;
		right: 0;
		top: 10upx;
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
