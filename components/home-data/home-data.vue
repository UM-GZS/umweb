<template>
	<view class="home-data u-f-ac">
		<block v-for="(item,index) in homedata" :key="index">
			<view class="u-f1 u-f-ajc u-f-column"><view>{{item.num}}</view>{{item.name}}</view>
		</block>
	</view>
</template>

<script>
	export default {
		props: {
			homedata: Array
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.home-data{
	padding: 20upx 40upx;
}
.home-data>view{
	color: #989898;
}
.home-data>view>view{
	color: #333333;
	font-size: 30upx;
}
</style>
