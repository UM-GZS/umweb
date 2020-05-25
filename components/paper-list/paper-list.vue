<template>
	<view class="paper-list u-f-ac" @tap="goDatail">
		<image :src="item.userpic" mode="widthFix" lazy-load></image>
		<view>
			<view class="u-f-ac u-f-jcsb">{{item.username}} <view>{{item.time}}</view></view>
			<view class="u-f-ac u-f-jcsb">{{item.data}} 
			<template v-if="item.nornum > 0">
			<uni-badge class="uni-badge-left-margin" :text="item.nornum" type="error" />
			</template>
			</view>
		</view>
	</view>
</template>

<script>
	import uniBadge from '../../components/uni-badge/uni-badge.vue'
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
					url: '../../pages/userChat/userChat',
				})
			}
		},
		components: {
			uniBadge
		}
	}
</script>

<style>
.paper-list{
	border-bottom: 1upx solid #EEEEEE;
	padding: 20upx 0upx;
}
.paper-list>image{
	width: 100upx;
	height: 100upx;
	border-radius: 50%;
	margin-right: 20upx;
	flex-shrink: 0;
}
.paper-list>view{
	flex: 1;
}
.paper-list>view>view:first-child{
	font-size: 35upx;
}
.paper-list>view>view:first-child>view{ 
	color: #CBCBCB;
}.paper-list>view>view:last-child{
	color: #999999;
}
</style>
