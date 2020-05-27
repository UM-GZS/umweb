<template>
	<view class="body">
		<input type="text" password class="uni-input common-input" placeholder="输入旧密码" v-model="oldpw"/>
		<input type="text" password class="uni-input common-input" placeholder="输入新密码" v-model="newpw"/>
		<input type="text"password class="uni-input common-input" placeholder="输入确认密码" v-model="qrpw"/>
		<button class="suerset-button" :loading="loading" :class="{'suerset-button-disable': disabled}" type="primary" @tap="submit">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldpw: "",
				newpw: "",
				qrpw: "",
				disabled: true,
				loading: false
			}
		},
		watch: {
			oldpw(val) {
				this.change();
			},
			newpw(val) {
				this.change();
			},
			qrpw(val) {
				this.change();
			}
		},
		methods: {
			change() {
				if(this.oldpw && this.newpw && this.qrpw) {
					this.disabled = false;
					return ;
				}
				this.disabled = true;
			},
			check() {
				if(!this.oldpw || this.oldpw == "") {
					uni.showToast({
						title: '旧密码不能为空',
						icon: 'none'
					})
					return false;
				}
				if(!this.newpw || this.newpw == "") {
					uni.showToast({
						title: '新密码不能为空',
						icon: 'none'
					})
					return false;
				}
				if(!this.qrpw || this.qrpw == "") {
					uni.showToast({
						title: '确认密码不能为空',
						icon: 'none'
					})
					return false;
				}
				if(this.newpw !== this.qrpw) {
					uni.showToast({
						title: '确认密码和新密码不一致',
						icon: 'none'
					})
					return false;
				}
				return true;
			},
			submit() {
				this.loading = true;
				this.disabled = true;
				if(!this.check()) {this.loading = false;this.disabled = true;return;}
				uni.showToast({
					title: '验证通过',
					mask: false,
					duration: 1500
				})
				this.loading = false;
				this.disabled = false;
			}
		}
	}
</script>

<style>
	.body {
		padding: 0upx 20upx;
	}

	.suerset-button {
		width: 100%;
		margin: 20upx 0upx;
		background: #FFE933 !important;
		border: 0upx !important;
		color: #333333 !important;
	}
	.suerset-button-disable{
		background: #F4F4F4!important;
		border: 1upx solid #EEEEEE!important;
		color: #909099!important;
	}
	.common-input{
		border-bottom: 1upx solid #F4F4F4;
		font-size: 30upx;
	}
</style>
