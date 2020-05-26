<template>
	<view>
		<scroll-view id="scrollView" scroll-y :scroll-top="scrollTop" :scroll-with-animation="true" :style="{height: style.contentH+'px'}">
			<block v-for="(item,index) in list" :key="index">
				<user-chat :item="item" :index="index"></user-chat>
			</block>
		</scroll-view>
		<user-chat-bottom @submit="submit"></user-chat-bottom>
	</view>
</template>

<script>
	import userChatBottom from '../../components/user-chat-bottom/user-chat-bottom.vue'
	import parsetTime from '../../common/parsetTime.js'
	import userChat from '../../components/user-chat/user-chat.vue'
	export default {
		data() {
			return {
				list: [],
				scrollTop: 0,
				style: {
					contentH: 0,
					itemH: 0
				}
			}
		},
		onLoad() {
			this.getData();
			this.initData();
		},
		onReady() {
			this.pageToBottom();
		},
		methods: {
			initData() {
				try {
					const res = uni.getSystemInfoSync();
					this.style.contentH = res.windowHeight - uni.upx2px(120);
				}catch (e) {
					console.log(e)
				}
			},
			pageToBottom() {
				let q = uni.createSelectorQuery();
				q.select('#scrollView').boundingClientRect();
				q.selectAll('.chat-body').boundingClientRect();
				q.exec((res)=>{
					res[1].forEach((ret)=>{
						this.style.itemH += ret.height
					})
				})
				if(this.style.itemH > this.style.contentH) {
					this.scrollTop = this.style.itemH
				}
			},
			submit(data) {
				let now = new Date().getTime();
				let obj = {
					isme: true,
					userpic: "../../static/image/user.jpg",
					type: "text",
					data: data,
					time: now,
					getTime: parsetTime.parsetime(now),
				}
				this.list.push(obj);
				this.pageToBottom();
			},
			getData() {
				let arr = [{
						isme: false,
						userpic: "../../static/image/user.jpg",
						type: "img",
						data: "../../static/image/index01.jpg",
						time: "1590367384",
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
						time: "1587775384",
						getTime: "",
					},
					{
						isme: true,
						userpic: "../../static/image/user.jpg",
						type: "img",
						data: "../../static/image/index01.jpg",
						time: "1590458109",
						getTime: "",
					}
				]
				for (var i = 0; i < arr.length; i++) {
					arr[i].getTime = parsetTime.parsetime(arr[i].time);
				}
				this.list = arr
			}
		},
		components: {
			userChatBottom,
			userChat
		}
	}
</script>

<style>
	
</style>
