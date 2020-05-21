<template>
	<view class="index-list">
		<view class="index-list1 u-f-ac u-f-jcsb">
			<view class="u-f-ac">
				<image :src="item.userpic" mode="widthFix" lazy-load></image>
				{{item.username}}
			</view>
			<view class="u-f-ac" v-show="!item.isguanzhu" @tap="guanzhu(item.isguanzhu)">
				<image src="../../static/image/gz.png" mode="widthFix" class="index-ico"></image>
				关注
			</view>
			<view class="u-f-ac" v-show="item.isguanzhu" @tap="guanzhu(item.isguanzhu)">已关注</view>
		</view>
		<view class="index-list2" @tap="godetail">{{item.title}}</view>
		<view class="index-list3 u-f-ajc" @tap="godetail">
			<image :src="item.titlepic" mode="widthFix" lazy-load></image>
		<template v-if="item.type == 'video'">
			<view class="index-list-play icon iconfont icon-bofang"></view>
			<view class="index-list-playinfo">
				{{item.playnum}}播放 {{item.playtime}}
			</view>
		</template>
		</view>
		<view class="index-list4 u-f-ac u-f-jcsb">
			<view class="u-f-ac">
				<view class="u-f-ac" :class="{'active':item.infonum.index == 1}" @tap="caozuo('zan')">
					<view class="icon iconfont icon-dianzan-copy">{{item.infonum.zan}}</view>
				</view>
				<view class="u-f-ac" :class="{'active':item.infonum.index == 2}" @tap="caozuo('cai')">
					<view class="icon iconfont icon-unpraise">{{item.infonum.cai}}</view>
				</view>
			</view>
			<view class="u-f-ac">
				<view class="u-f-ac">
					<view class="icon iconfont icon-pinglun">{{item.commentnum}}</view>
				</view>
				<view class="u-f-ac">
					<view class="icon iconfont icon-fenxiang">{{item.sharenum}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index:Number
		},
		data() {
			return {
				
			}
		},
		methods: {
			guanzhu(gzhun) {
				if(gzhun == true) {
					uni.showModal({
						title: '提示',
						content: '确定取消关注吗？',
						success: res => {
							if(res.confirm) {
								this.item.isguanzhu = this.item.isguanzhu = false;
							}
							else if(res.cancel) {
								console.log('ok')
							}
						},
					});
				}
				else {
					this.item.isguanzhu = true;
					uni.showToast({
						title: '已关注成功',
						icon: 'success'
					});
				}
			},
		caozuo(type) {
			switch(type) {
				case "zan": 
				if(this.item.infonum.index == 1){
					uni.showToast({
						title: '你已点赞'
					});
					return;
				}
				this.item.infonum.zan++;
				if(this.item.infonum.index == 2){
					this.item.infonum.cai--;
				}
				this.item.infonum.index = 1;
					break;
				case "cai":
				if(this.item.infonum.index == 2){
					uni.showToast({
						title: '你已点赞'
					});
					return;
				}
				this.item.infonum.cai++;
				if(this.item.infonum.index == 1){
					this.item.infonum.zan--;
				}
				this.item.infonum.index = 2;
					break;
			}
		},
		godetail() {
			console.log("进入详情页")
		}
		}
	}
</script>

<style scoped>
	
	.index-list{
		padding: 20upx;
		border-bottom: 1upx solid #D6D5D6;
	}
	.index-ico{
		width: 30upx;
		height: 30upx;
	}
	.index-list1{
		color: #D6D5D6;
	}
	.index-list1>view:first-child image{
		width: 70upx;
		height: 70upx;
		border-radius: 100%;
		margin-right: 10upx;
	}
	.index-list2{
		padding-top: 15upx;
		font-size: 32upx;
	}
	.index-list3{
		position: relative;
		padding-top: 15upx;
	}
	.index-list3 image{
		width: 100%;
		border-radius: 20upx;
	}
	.index-list4{
		padding: 10upx 0;
		color: #D6D5D6;
	}
	.index-list4>view>view:last-child{
		margin-left: 25upx;
	}
	.index-list-play{
		position: absolute;
		font-size: 100upx;
		color: #FFFFFF;
	}
	.index-list-playinfo{
		position: absolute;
		background: rgba(51,51,51,0.52);
		color: #FFFFFF;
		bottom: 10upx;
		right: 10upx;
		font-size: 20upx;
		border-radius: 40upx;
		padding: 10upx 15upx;
	}
	.index-list4 .active,.index-list4 .active>view{
		color: #FFDF34;
	}
	.index-list4>view>view>view{
		font-size: 30upx;
	}
</style>
