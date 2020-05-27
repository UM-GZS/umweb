<template>
	<view>
		<uni-nav-bar left-icon="back" @clickLeft="back" :statusBar="true" rightText="发布" @clickRight="submitpublic">
			<view class="uni-navbar__header-container uni-navbar__content_view">
				<view class="uni-navbar__header-container-inner uni-navbar__content_view">
					<text class="uni-nav-bar-text" @tap="textchange">{{textchanges}}</text>
				</view>
			</view>
		</uni-nav-bar>
		<view class="uni-textarea">
			<textarea placeholder="说一句话把~" v-model="textinput"></textarea>
		</view>
		<upload-img @uploadimg="uploadimg"></upload-img>
		<uni-popup ref="showpopup" :type="type">
			<view class="popup-content">
				<view class="popup-view">
					<view>禁止发布以下内容:</view>
					<view>1.涉及黄色,政治,广告及骚扰信息</view>
					<view>2.涉及人身攻击</view>
					<view>3.留联系方式,透露他人隐私</view>
					<view>一经核实将被封禁,情节严重永久封禁</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	let itemLists = ['所有人可见', '仅自己可见'];
	import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue"
	import uploadImg from "../../components/upload-img/upload-img.vue"
	import uniPopup from "../../components/uni-popup/uni-popup.vue"
	export default {
		data() {
			return {
				textchanges: "所有人可见",
				textinput: "",
				imageList: [],
				type: '',
				content: 'open',
				istext: false
			}
		},
		onLoad() {
			this.togglePopup('center','popup')
		},
		methods: {
			togglePopup(type,open) {
				this.type = type
				this.$nextTick(() => {
					this.$refs['show' + open].open()
				})
			},
			back() {
				uni.navigateBack({
					data: 1
				})
			},
			submitpublic() {
				console.log("submit")
			},
			textchange() {
				uni.showActionSheet({
					itemList: itemLists,
					success: (res) => {
						console.log(itemLists[res.tapIndex])
						this.textchanges = itemLists[res.tapIndex];
					},
					fail: (res) => {
						console.log(res.errMsg);
					}
				});
			},
			uploadimg(arr) {
				this.imageList = arr
				console.log(this.imageList)
			},
			baocun() {
				uni.showModal({
					content: '是否保存为草稿？',
					cancelText: '不保存',
					confirmText: '保存',
					success:res => {
						if(res.confirm) {
							console.log('保存')
						}else{
							console.log('不保存')
						}
						this.istext =true;
						uni.navigateBack({
							delta: 1
						})
					}
				});
			}
		},
		onBackPress() {
			if(!this.textinput && this.imageList.length<1) {
				return;
			}
			if(!this.istext) {
				this.baocun();
				return true;
			}
			this.$refs['showpopup'].close()
		},
		change(e) {
			console.log('是否打开:' + e.show)
		},
		components: {
			uniNavBar,
			uploadImg,
			uniPopup
		}
	}
</script>

<style>
	.uni-navbar__header-container {
		flex: 1;
	}

	.uni-navbar__header-container-inner {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		align-items: center;
		justify-content: center;
		font-size: 28rpx;
	}

	.uni-navbar__content_view {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		align-items: center;
		flex-direction: row;
		/* background-color: #FFFFFF;
	*/
	}

	.uni-nav-bar-text {
		/* #ifdef APP-PLUS */
		font-size: 34rpx;
		/* #endif */
		/* #ifndef APP-PLUS */
		font-size: 32rpx;
		/* #endif */
	}

	.uni-textarea {
		border: 1upx solid #EEEEEE;
	}
	.popup-content {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		background-color: #fff;
		padding: 15px;
		font-size: 14px;
	}
	.popup-view{
		padding: 15upx 10upx;
	}
	.popup-view>view:first-child{
		font-size: 35upx;
		margin-bottom: 20upx;
	}
</style>
