<template>
	<view class="user-list u-f-ac">
		<image :src="item.userpic" mode="widthFix" lazy-load></image>
		<view>
			<view>{{item.username}}</view>
			<view style="display: inline-block;">
				<tag-sex-age :age="item.age" :sex="item.sex"></tag-sex-age>
			</view>
		</view>
		<view class="icon iconfont u-f-ajc" :class="[item.isguanzhu?'icon-pinglun':'icon-fenxiang']"></view>
	</view>
</template>

<script>
	import tagSexAge from "../../components/tag-sex-age/tag-sex-age.vue"
	export default {
		props: {
			item: Object,
			index: Number
		},
		data() {
			return {
				
			};
		},
		components: {
			tagSexAge
		} 
	}
</script>

<style scoped>
	.user-list {
		margin: 0upx 20upx;
		padding: 20upx 0upx;
		border-bottom: 1upx solid #EEEEEE;
	}

	.user-list>image {
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		margin-right: 20upx;
		flex-shrink: 0;
	}

	.user-list>view:first-of-type {
		flex: 1;
	}
	
	.user-list>view:first-of-type>view:first-child {
		font-size: 30upx;
	}
	
	.user-list>view:last-of-type {
		width: 80upx;
		color: #CCCCCC;
	}
	.icon-fenxiang{
		color: #F87918!important;
	}
</style>
