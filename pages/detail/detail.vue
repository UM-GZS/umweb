<template>
	<view>
		<detail-list :item="detail"></detail-list>
	</view>
</template>

<script>
	import detailList from '../../components/detail-list/detail-list.vue'
	export default {
		data() {
			return {
				detail: {
					userpic: "../../static/image/user.jpg",
					username: "kolboy",
					sex: 1, //0 男 1 女
					age: 25,
					isguanzhu: false,
					title: "我是标题",
					titlepic: "../../static/image/index01.jpg",
					morepic: ["../../static/image/index01.jpg","../../static/image/user.jpg"],
					video: false,
					share: false,
					path: "深圳 龙岗",
					sharenum: 20,
					commentnum: 30,
					goodnum: 20
				}
			}
		},
		onLoad(e) {
			this.initdata(JSON.parse(e.detailId))
		},
		onNavigationBarButtonTap(e) {
			if (e.index == 0) {
				console.log(e.index)
			}
		},
		methods: {
			initdata(obj) {
				uni.setNavigationBarTitle({
					title: obj.title
				})
			}
		},
		components: {
			detailList
		}
	}
</script>

<style>

</style>
