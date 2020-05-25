<template>
	<view class="tag-sex" :class="[sex == 0 ? 'sexB' : 'sexG']">{{age}}</view>
</template>

<script>
	export default {
		props: {
			sex: Number,
			age: Number
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
.tag-sex {
		color: #FFFFFF;
		font-size: 23upx;
		padding: 5upx 10upx;
		line-height: 25upx;
		margin-left: 10upx;
		border-radius: 20upx;
	}

	.sexB { 
		background: #007AFF;
	}

	.sexG {
		background: #FF9999;
	}
</style>
