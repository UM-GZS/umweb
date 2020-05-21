<template>
	<view>
		<uni-nav-bar :fixed="true" :statusBar="true" @clickRight="openpublic" :border="false">
			<block slot="left">
				<view class="nav-left">
					<view>签到</view>
				</view>
			</block>
			<view class="nav-tab-bar u-f-ajc">
				<block v-for="(tab,index) in tabBars" :key="tab.id">
					<view class="u-f-ajc" :class="{'active':tabIndex == index}" @tap="changeTab(index)">
						{{tab.name}}
						<view v-if="tabIndex == index" class="nav-tab-bar-line"></view>
					</view>
				</block>
			</view>
			<block slot="right">
				<view class="nav-right u-f-ajc">
					<view>发布</view>
				</view>
			</block>
		</uni-nav-bar>
	</view>
</template>

<script>
	export default {
		props: {
			tabBars: Array,
			tabIndex: Number
		},
		data() {
			return {

			};
		},
		methods: {
			changeTab(index) {
				this.$emit('changeTab',index);
			},
			openpublic() {
				uni.navigateTo({
					url: '../public/public'
				})
			}
		}
	}
</script>

<style scoped>
	.nav-left,
	.nav-right {
		border: 1upx solid;
	}

	.nav-left {
		margin-left: 16upx;
	}

	.nav-right {
		width: 100%;
	}

	.nav-tab-bar {
		width: 100%;
		margin-left: -20upx;
		position: relative;
	}

	.nav-tab-bar>view {
		font-weight: bold;
		color: #969696;
		font-size: 32upx;
		padding: 0 15upx;
	}

	.active {
		color: #333333 !important;
	}

	.nav-tab-bar-line {
		border-bottom: 5upx solid #FEDE33;
		border-top: 5upx solid #FEDE33;
		width: 70upx;
		border-radius: 20upx;
		position: absolute;
	}
</style>
