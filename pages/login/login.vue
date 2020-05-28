<template>
	<view>
		<view class="login-head u-f-ajc">
			<view class="login-head-logo">
				<image src="../../static/image/logo.png" mode="widthFix" lazy-load></image>
			</view>
		</view>
		<template v-if="codeLogin == 0">
			<view class="login-body">
				<view class="login-body-title u-f-ajc">用户登录</view>
				<view class="login-body-input">
					<input type="text" class="uni-input common-input" placeholder="昵称/手机号/邮箱" v-model="username"/>
					<view class="login-body-input-box">
						<input type="text" password class="uni-input common-input forget-input" placeholder="请输入密码" v-model="password"/><strong></strong>
						<view class="login-body-input-box-forget u-f-ajc">忘记密码？</view>
					</view>
					<button class="suerset-button" :loading="loading" :class="{'suerset-button-disable': disabled}" type="primary" @tap="submit">登录</button>
				</view>
				<view class="u-f-ajc" @tap="changeLogin(1)">验证码登录</view>
			</view>
		</template>
		<template v-if="codeLogin == 1">
			<view class="login-body">
				<view class="login-body-title u-f-ajc">用户登录</view>
				<view class="login-body-input">
					<view class="login-body-input-box">
						<view class="login-body-input-box-phone u-f-ajc">+86</view>
						<input type="text" class="uni-input common-input phone-input" placeholder="请输入手机号" v-model="phone"/>
					</view>
					<view class="login-body-input-box">
						<input type="text" class="uni-input common-input forget-input" placeholder="请输入验证码" v-model="checknum"/><strong></strong>
						<view class="login-body-input-box-forget u-f-ajc" style="background: #EEEEEE;" @tap="getCodeNum">{{!codeNum?'获取验证码':codeNum+'s'}}</view>
					</view>
					<button class="suerset-button" :loading="loading" :class="{'suerset-button-disable': disabled}" type="primary" @tap="submit">登录</button>
				</view>
				<view class="u-f-ajc" @tap="changeLogin(0)">账号密码登录</view>
			</view>
		</template>
		<view class="login-bottom">
			<view class="u-f-ajc">第三方登录</view>
			<other-login></other-login>
			<view class="u-f-ajc">注册即代表您同意<text style="color: #0A98D5;">《用户使用协议》</text></view>
		</view> 
	</view>
</template>

<script>
	import otherLogin from '../../components/other-login/other-login.vue'
	export default {
		data() {
			return {
				disabled: true,
				loading: false,
				codeLogin: 0,//0 账号密码登录 1 手机号码登录
				username: "",
				password: "",
				phone: "",
				checknum: "",
				codeNum: 0
			}
		},
		onNavigationBarButtonTap(e) {
			if (e.index == 0) {
				uni.navigateBack({
					delta: 1
				})
			}
		},
		watch: {
			username() {
				this.onBtnChange();
			},
			password() {
				this.onBtnChange();
			},
			phone() {
				this.onBtnChange();
			},
			checknum() {
				this.onBtnChange();
			}
		},
		methods: {
			checkPhone() {
				let mPattern = /^1[3456789]\d{9}$/;
				return mPattern.test(this.phone);
			},
			getCodeNum() {
				if(this.codeNum > 0) {
					uni.showToast({
					title: "不能重复获取",
					icon: "none"
				}) 
				return;
				}
				if(!this.checkPhone()) {
					uni.showToast({
						title: '请输入正确的手机号码',
						icon: 'none'
					})
					return;
				}
				this.codeNum = 10;
				let timer = setInterval(()=>{
					this.codeNum--;
					if(this.codeNum < 1) {
						clearInterval(timer);
						this.codeNum = 0;
					}
				},1000);
			},
			onBtnChange() {
				if((this.username && this.password) || (this.phone && this.checknum)) {
					this.disabled = false;
					return;
				}
				this.disabled = true;
			},
			submit() {
				if(this.codeLogin == 0) {
					return;
				}
				if(!this.checkPhone()) {
					uni.showToast({
						title: '请输入正确的手机号码',
						icon: 'none'
					});
					return;
				}
				console.log('ok')
			},
			changeLogin(val) {
				switch (val) {
					case 0:
					this.codeLogin = val;
					this.phone = "";
					this.checknum = "";
					break;
					case 1:
					this.codeLogin = val;
					this.username = "";
					this.password = "";
					break;
				}
			}
		},
		components: {
			otherLogin
		}
	}
</script>

<style>
	.login-head { 
		width: 100%;
		height: 150upx;
		background: #FFE933;
		border-radius: 0 0 100% 100%;
	}

	.login-head-logo {
		position: relative;
		top: 70upx;
	}

	.login-head-logo>image {
		width: 100upx;
		height: 100upx;
	}

	.login-body {
		padding: 0upx 20upx;
		margin-top: 80upx;
	}
	.login-body-input{
		margin-top: 50upx;
	}
	.login-body-input-box{
		position: relative;
	}
	.forget-input{
		padding-right: 160upx;
	}
	.phone-input{
		padding-left: 80upx;
	}
	.login-body-input-box-phone{
		position: absolute;
		top: 0;
		left: 20upx;
		height: 100%;
		font-size: 25upx;
		color: #333333;
		z-index: 100;
		font-weight: bold;
	}
	.login-body-input-box-forget{
		position: absolute;
		width: 150upx;
		top: 0;
		right: 0;
		height: 100%;
		font-size: 25upx;
		color: #CCCCCC;
		z-index: 100;
		
	}
	.login-body-title {
		color: #CCCCCC;
		font-size: 30upx;
	}
	.login-bottom{
		position: relative;
		margin-top: 50upx;
	}
	.login-bottom>view:first-child:before,.login-bottom>view:first-child:after{
		position: absolute;
		background: #CCCCCC;
		height: 1upx;
		width: 100upx;
		content: '';
		top: 20upx;
	}
	.login-bottom>view:first-child:before{
		left: 25%;
	}
	.login-bottom>view:first-child:after{
		right: 25%;
	}
	.login-bottom>view{
		font-size: 25upx;
		color: #CCCCCC;
	}
	.login-bottom>view:last-child{
		margin-top: 50upx;
	}
	.suerset-button {
		width: 100%;
		margin: 40upx 0upx;
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
