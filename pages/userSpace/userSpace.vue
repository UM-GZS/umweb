<template>
	<view>
		<view class="user-space-head u-f-ajc">
			<image :src="bgImage" mode="widthFix" lazy-load @tap="changeBgImg"></image>
			<view class="user-space-head-info u-f-ajc u-f-column">
				<image :src="changeUsImg" mode="aspectFill" lazy-load  @tap="changeUserImg"></image>
				<view class="uesr-space-margin u-f-ac">kolboy
				<tag-sex-age :sex="sex" :age="age"></tag-sex-age>
				</view>
				<view class="user-space-head-btn" :class="{'active':isguanzhu}" @tap="guanzhu">{{isguanzhu?'已关注':'关注'}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tagSexAge from '../../components/tag-sex-age/tag-sex-age.vue'
	export default {
		data() {
			return {
				 sex: 0,
				 age: 20,
				 isguanzhu: false,
				 bgImage: "../../static/image/index01.jpg",
				 changeUsImg: "../../static/image/user.jpg"
			}
		},
		methods: {
			guanzhu() {
				this.isguanzhu = true;
			},
			changeBgImg() {
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success:(res)=> {
						this.bgImage = res.tempFilePaths;
				    }
				});
			},
			changeUserImg() {
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success:(res)=> {
						this.changeUsImg = res.tempFilePaths;
				    }
				});
			}
		},
		components: {
			tagSexAge
		}
	}
</script>

<style>
.uesr-space-margin{
	margin: 15upx 0upx;
}
.user-space-head{
	position: relative;
	height: 500upx;
	overflow: hidden;
}
.user-space-head>image{
	width: 100%;
}
.user-space-head-info{
	position: absolute;
	top: 150upx;
}
.user-space-head-info>view:first-of-type{
	color: #FFFFFF;
	font-size: 30upx;
	font-weight: bold;
	text-shadow: 2upx 2upx 10upx #333333;
}
.user-space-head-info>image{
	width: 150upx;
	height: 150upx;
	border-radius: 100%;
}
.user-space-head-btn{
	font-size: 25upx;
	background: #FFE933;
	color: #333333;
	border: 1upx solid #FFE933;
	padding: 0upx 15upx;
	border-radius: 10upx;
}
.active{
	background: none;
	color: #FFFFFF;
	border: 1upx solid #FFFFFF;
}
</style>
