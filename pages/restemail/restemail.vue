<template>
	<view class="body">
		<input type="text" class="uni-input common-input" placeholder="输入邮箱" v-model="email" />
		<input type="text" password class="uni-input common-input" placeholder="输入密码" v-model="password" />
		<button class="suerset-button" :loading="loading" :class="{'suerset-button-disable': disabled}" type="primary" @tap="submit">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				email: "",
				password: "",
				loading: false,
				disabled: true
			}
		},
		watch: {
			email(val) {
				this.change();
			},
			password(val) {
				this.change();
			}
		},
		methods: {
			change() {
				if (this.email && this.password) {
					this.disabled = false;
					return;
				}
				this.disabled = true;
			},
			check() {
				if (!this.email || this.email == "") {
					uni.showToast({
						title: '邮箱不能为空',
						icon: 'none'
					})
					return false;
				}
				let ePattern = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
				if (!ePattern.test(this.email)) {
					uni.showToast({
						title: '请输入正确邮箱',
						icon: 'none'
					})
					return false;
				}
				if (!this.password || this.password == "") {
					uni.showToast({
						title: '密码不能为空',
						icon: 'none'
					})
					return false;
				}
				return true;
			},
			submit() {
				this.loading = true;
				this.disabled = true;
				if (!this.check()) {
					this.loading = false;
					this.disabled = true;
					return;
				}
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

	.suerset-button-disable {
		background: #F4F4F4 !important;
		border: 1upx solid #EEEEEE !important;
		color: #909099 !important;
	}

	.common-input {
		border-bottom: 1upx solid #F4F4F4;
		font-size: 30upx;
	}
</style>
