<template>
	<view class="content">
		<view class="contentBg"></view>
		<!-- <view class="text-area">
			<button type="default" @click="clickShowPopup"> Click弹出层</button>
		</view> -->
		<view class="custom">
			<view class="customLeft" @click="clickShowPopupWSS()">
				<image class="" src="../../static/icon-logo.png" mode="widthFix"></image>
				<view class="tipsPoint">
					<view :class="tipsPoint?'greenPoint':'redPoint'"></view>
				</view>
			</view>
			<view class="customMid">
				<image class="" src="../../static/icon-title.png" mode="widthFix"></image>
			</view>
			<view class="customRight" @click="clickShowPopup()">
				<view class="optinoPoint"> </view>
				<image class="" src="../../static/icon-option.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="main">
			<!-- {{WSSUrl}} -->
			<view class="chat">
				<view class="userPart" v-show="showUserPart">
					<!-- <view class="text">
						{{userMsg}}
					</view>
					<view class="triangle"></view>
					<view class="headimg">
						<image src="../../static/icon-headimg.png" mode=""></image>
					</view> -->
					<view class="userPartList" v-show="isAsring">
						<view class="text">
							{{userMsg}}
						</view>
						<view class="triangle"></view>
						<view class="headimg">
							<image src="../../static/icon-headimg.png" mode=""></image>
						</view>
					</view>
					<view class="userPartList" v-show="!isAsring">
						<view class="asring">
							<image  v-show="!isInvalidAsk" src="../../static/thinking.gif" mode="widthFix"></image>
						</view>
						<view class="triangle"></view>
						<view class="headimg">
							<image src="../../static/icon-headimg.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="robotPart" v-show="showRobotPart">
					<view v-show="isInvalidAsk" class="robotPartList">
						<view class="headimg">
							<image src="../../static/icon-robot2.jpg" mode=""></image>
						</view>
						<view class="triangle"></view>
						<view class="text">
							Sorry，Can you say that again?
						</view>
					</view>
					<view v-show="isNetworkError" class="robotPartList">
						<view class="headimg">
							<image src="../../static/icon-robot2.jpg" mode=""></image>
						</view>
						<view class="triangle"></view>
						<view class="text">
							I'm sorry, my network seems to be affected. Please try again later
						</view>
					</view>
					<view v-show="isThinking" class="robotPartList">
						<view class="headimg">
							<image src="../../static/icon-robot2.jpg" mode=""></image>
						</view>
						<view class="triangle"></view>
						<view class="thinking">
							<image src="../../static/thinking.gif" mode="widthFix"></image>
						</view>
					</view>
					
					<view v-show="!isThinking" class="robotPartList" v-for="(item,index) in robotMsgList" :key="index">
						<view class="headimg">
							<image src="../../static/icon-robot2.jpg" mode=""></image>
						</view>
						<view class="triangle"></view>
						<view v-for="(item,index) in item.split('>MZsplit<').reverse()" :key="index"  :class="index==1?'sort':'text'">
							{{item}}
						</view>
					</view>
				</view>
			</view>
			<view class="inputWav">
				<view class="inputTipsSlide" v-show="recording">
					<view class="slideMain">
						Slide up Clear
						<image src="../../static/icon-arrow.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="inputBox">

					<view :class="recording ? 'inputBtnRecording':'inputBtnDefault'" @longtap="langTap"
						@touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
						<view :class="cancelRecord?'inputIconBox':'inputIconBoxCannel'">
							<image v-if="recording&&(recordStatus==2)" class="inputIcon" src="../../static/icon-mic.png" mode="widthFix"></image>
							<image v-if="recording&&(recordStatus==1)" class="inputIcon" src="../../static/icon-mic1.png" mode="widthFix"></image>
							<image v-if="!recording&&(recordStatus==0)" class="inputIcon" src="../../static/icon-mic1.png" mode="widthFix"></image>
						</view>

					</view>
					<view class="inputTipsHold" v-show="!recording">
						Hold to Talk
					</view>
					<view class="inputTipsRelease" v-show="recording">
						Release and Send
					</view>
				</view>
			</view>
		</view>

		<uni-popup ref="popup" type="bottom" mask-background-color=rgba(0,0,0,0.7)>
			<view class="optionBtn">
				<button type="default" data-index="7" @click="clickPlayVideo">Focus To Face</button>
				<view class="_line" style="width: 100%;height: 1px;background-color: #3a3a3a;"></view>
				<button type="default" data-index="8" @click="clickPlayVideo">Focus To Body</button>
				<view class="_line" style="width: 100%;height: 1px;background-color: #3a3a3a;"></view>
<!-- 				<button type="default" data-index="9" @click="clickPlayVideo">Focus To Bust</button>
				<view class="_line" style="width: 100%;height: 1px;background-color: #3a3a3a;"></view> -->
				<button type="default" data-index="1" @click="clickPlayVideo">Play Video1</button>
				<view class="_line" style="width: 100%;height: 1px;background-color: #3a3a3a;"></view>
				<button type="default" data-index="2" @click="clickPlayVideo">Play Video2</button>
				<view class="_line" style="width: 100%;height: 1px;background-color: #3a3a3a;"></view>
				<!-- 				<button type="default" data-index="3" @click="clickPlayVideo">Play Video3</button>
				<view class="_line" style="width: 100%;height: 1px;background-color: #3a3a3a;"></view> -->
				<!-- 				<button type="default" data-index="4" @click="clickPlayVideo">Play Background</button>
				<view class="_line" style="width: 100%;height: 1px;background-color: #3a3a3a;"></view> -->
				<button type="default" data-index="3" @click="clickPlayVideo">Play Background</button>
				<view class="_line" style="width: 100%;height: 1px;background-color: #3a3a3a;"></view>
				<button type="default" @click="clickLinkServices">Reset Background</button>
			</view>
			<view class="cannelBtn">
				<button type="default" @click="clickHidePopup">Cancel</button>
			</view>
		</uni-popup>
		<uni-popup ref="popupWSS" type="center" mask-background-color=rgba(0,0,0,0.7)>
			<view class="popupWSSMain">
				<input type="text" name="" id="" @input="inputWSS" :value="WSSUrl" placeholder="wss://**.**.***.**">
				<button type="warn" plain="true" @click="disconnectWSS">disconnect</button>
				<button type="default" plain="true" @click="clickHidePopupWSS">cancel</button>
				<button type="primary" plain="true" @click="connectWSS">connect</button>
				<view style="margin-top: 20rpx;">
					<text style="margin-right: 20rpx;">CN/EN</text>  <switch :checked="language" @change="languageSwitch" />
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import {
		initWebSocketPotassium,
		sendDataPotassium,
		websocketOnmessagePotassium,
		closeWebsocketPotassium
	} from '../../Utils/ws.js';

	import axios from 'axios'

	const recorderManager = uni.getRecorderManager();
	export default {
		data() {
			return {
				clientX: 0,
				clientY: 0,
				recording: false, //在录音中
				cancelRecord: false, //取消录制
				recordStatus: 0, //录音状态 0=默认 1=录音中 2=上滑取消录音
				userMsg: '', //
				robotMsg: '', //
				robotMsgList:[],
				tipsPoint:false,
				socketOpen:false,

				recorder: null,
				innerAudioContext: '',

				showUserPart: false,
				showRobotPart: false,

				isLangTap: false,
				isThinking:false,
				isInvalidAsk:false,
				isNetworkError:false,
				isAsring:false,
				// WSSUrl:'wss://i7u3629729.goho.co',
				// WSSUrl:'wss://i25817465a.imdo.co',
				// WSSUrl:'wss://yjwpv79rnsupshsh3.neiwangyun.net',
				// WSSUrl:'ws://10.10.10.247:3000',
				WSSUrl:'ws://192.168.0.250:3000',
				// WSSUrl:'wss://i25817465a.imdo.co',
				// WSSUrl:'wss://54774dq657.zicp.fun',
				
				options : {
					duration:60000,
					sampleRate:16000,
					format: "mp3"
				},
				
				language:true,
				// langugeType:'recognition'
				langugeType:'en-US'
			}
		},
		onLoad() {
			let that = this;
			uni.getStorage({
				key: 'WSSURL',
				success: function (res) {
					console.log(res);
					that.WSSUrl = res.data;
				},
				fail:function(res) {
					console.log(res);
				}
			});
			// try {
			// 	const res = uni.getStorageInfoSync();
			// 	console.log(res.keys);
			// 	console.log(res.currentSize);
			// 	console.log(res.limitSize);
			// } catch (e) {
			// 	// error
			// 	console.log("load没取到？")
			// }
			// try {
			// 	const value = uni.getStorageSync('WSSURL');
			// 	if (value) {
			// 		console.log(value);
			// 		that.WSSUrl = WSSURL;
			// 	}else{
			// 		console.log("未连接其他WS",value);
			// 		uni.setStorageSync('WSSURL', that.WSSURL);
			// 	}
			// } catch (e) {
			// 	// error
			// 	uni.setStorageSync('WSSURL', that.WSSURL);
			// 	console.log("本地未存储WS  使用默认WS");
			// }

		},
		mounted() {
			let that = this;
			
			that.innerAudioContext = uni.createInnerAudioContext();
			that.innerAudioContext.autoplay = true;
			// this.innerAudioContext.src = 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';
			that.innerAudioContext.onPlay(() => {
				console.log('开始播放');
			});
			that.innerAudioContext.onError((res) => {
				console.log(res.errMsg);
				console.log(res.errCode);
			});
			
			
			that.recorder = uni.getRecorderManager();
			that.recorder.onStop(function(res) {
				// console.log('recorder stop' + JSON.stringify(res.tempFilePath));
				that.Path = res.tempFilePath;
				// console.log(that.Path,that.langugeType)
				// console.log(res.tempFilePath);
				uni.saveFile({
				  tempFilePath: that.Path,
				  success: function (res) {
					  // console.log(res.savedFilePath);
						var savedFilePath = res.savedFilePath;
					console.log(savedFilePath,that.langugeType);
						uni.uploadFile({  
							url: "https://share-test.metazen-tech.com/meta-tts/speech/recognitionMp3",  
							// url: "https://aigc.metazen-tech.com/meta-tts/speech/recognitionMp3",  
							// url: "http://10.10.110.245:8058/tts/speech/recognitionMp3",  
							// filePath: that.Path,
							filePath: savedFilePath,  
							timeout: 60000,
							formData: {
								// "language": "zh-CN"
								"language": that.langugeType
							},
							name: 'multipartFile',   
							success: (res)=>{
								let _data = JSON.parse(res.data);
								console.log(res,_data);
								// console.log(_data,_data.data,_data.data.length,_data.data!=="")
								if(res.statusCode == 200){
									
									// if(_data.data||_data.data.length>0||_data.data!==""){
									if(_data.data){
										console.log("ASR READY")
										that.userMsg = _data.data;
										that.showUserPart = true;
										that.isAsring = true;
										that.showRobotPart = true;
										that.isThinking = true;
										that.isInvalidAsk = false;
										uni.showLoading({
											title: 'Wait a moment'
										})
										// console.log(that.userMsg,JSON.parse(res.data),"----------");
										that.sendSocketMessage(JSON.stringify({ ask: _data.data}));
									}else{
										console.log("ASR ERROR")
										// that.showUserPart = false;
										// that.isAsring = false;
										
										// uni.showToast({
										// 	title: 'please say again?',
										// 	icon: 'error',
										// 	duration: 2000
										// });
										that.showRobotPart = true;
										that.isInvalidAsk = true;
										// that.isThinking = true;
										
									}
								}else{
									that.showRobotPart = true;
									that.isNetworkError = true;
									// console.log("statusCode "+res.statusCode)
								}

							},
							fail:(res)=> {
								console.log(res);
							}
						})
					
				  }
				});
			});
			// 创建 WebSocket 连接
			uni.connectSocket({
			  url: that.WSSUrl
			});
			// 监听 WebSocket 打开
			uni.onSocketOpen(function (res) {
			  console.log('WebSocket连接已打开！---------------');
				that.tipsPoint = true;
				that.socketOpen = true;
				let socktTimer = setInterval(function(){
					console.log('ping');
					that.sendSocketMessage(JSON.stringify({ talk_data: 'ping' }))
				},10000)
			});
			// 监听 WebSocket 错误
			uni.onSocketError(function (res) {
			  console.log('WebSocket连接打开失败，请检查！--------------');
				that.tipsPoint = false;
				that.socketOpen = false;
			});
			
			// 发送 WebSocket 消息
			// uni.sendSocketMessage(function(){
				
			// })
			// 接受 WebSocket 消息
			uni.onSocketMessage(function(res){
				console.log('收到服务器内容：' + res.data);
				var _msg = JSON.parse(res.data);
				if (_msg.answer) {
					console.log(_msg.answer);
					that.showRobotPart = true;
					that.isThinking = false;
					that.isInvalidAsk = false;
					uni.hideLoading();
					// that.robotMsg = that.robotMsg + _msg.answer ;
					
					// let rich_text = "<div>"+_msg.answer+"</div>"
					// that.robotMsgList = that.robotMsgList+rich_text;
					
					let answerList = new Array;
					answerList.unshift(_msg.answer);
					that.robotMsgList = that.robotMsgList.concat(answerList);
				}
			})


		},
		beforeDestroy() {
			// closeWebsocketPotassium();
			
			// 监听 WebSocket 关闭
			uni.onSocketClose(function(){
				that.tipsPoint = false;
			})
		},
		methods: {
			clickShowPopupWSS(){
				this.$refs.popupWSS.open();
			},
			clickHidePopupWSS(){
				this.$refs.popupWSS.close();
				uni.clearStorage();
			},
			inputWSS(e){
				// console.log(e.detail.value);
				this.WSSUrl = e.detail.value;
			},
			disconnectWSS(){
				let that = this;
				setTimeout(()=>{
					that.tipsPoint = false;
				},1000)
				// closeWebsocketPotassium();
				// 监听 WebSocket 关闭
				uni.closeSocket({
					success: function(res){
						that.tipsPoint = false;
					}
				})
			},
			connectWSS(){
				let that = this;
				if(that.WSSUrl.length>0&&that.WSSUrl!=""){
					// closeWebsocketPotassium();
					//  WebSocket 关闭
					uni.closeSocket({
						success: function(res){
							console.log("closeSocket",res)
							that.tipsPoint = false;
							
								uni.connectSocket({
								  url: that.WSSUrl,
								  success: (res)=> {
									  that.tipsPoint = true;
									  console.log("connectSocket",res)
									  uni.setStorage({
									  	key: 'WSSURL',
									  	data: that.WSSUrl,
									  	success: function (res) {
									  		console.log('success',res);
									  	},
									  	fail:function(){
									  		console.log('fail',res);
									  	}
									  });
									  
								  },
								  fail:function(res){
								  	console.log("connectSocket fail",res)
								  }
								});
								
						},
						fail:function(res){
							console.log("closeSocket",res);
							uni.connectSocket({
							  url: that.WSSUrl,
							  success: (res)=> {
								  that.tipsPoint = true;
								  console.log("connectSocket",res)
								  uni.setStorage({
								  	key: 'WSSURL',
								  	data: that.WSSUrl,
								  	success: function (res) {
								  		console.log('success',res);
								  	},
								  	fail:function(){
								  		console.log('fail',res);
								  	}
								  });
								  
							  },
							  fail:function(res){
							  	console.log("connectSocket fail",res)
							  }
							});
						}
					})

					
					that.clickHidePopupWSS();
				}else{
					uni.showToast({
						icon:'error',
						title:'Url  Is  Empty！'
					})
				}
			},
			languageSwitch(e){
				console.log(e.detail.value)
				if(e.detail.value){
					this.language = e.detail.value;
					// this.langugeType='recognition';
					this.langugeType='en-US';
				}else if(!e.detail.value){
					this.language = e.detail.value
					// this.langugeType='recognitionCN';
					this.langugeType='zh-CN';
				}
			},
			clickShowPopup() {
				// console.log("clickShowPopup")
				this.$refs.popup.open();
			},
			clickHidePopup() {
				// console.log("clickHidePopup")
				this.$refs.popup.close();
			},
			clickLinkServices() {
				// console.log("clickLinkServices");
				this.clickHidePopup();
				this.sendSocketMessage(JSON.stringify({close: 'close'}));
				this.sendSocketMessage(JSON.stringify({ sence: '4'}));
			},
			clickPlayVideo(e) {
				// console.log(e.currentTarget.dataset.index);
				this.clickHidePopup();

				if(e.currentTarget.dataset.index == 7||e.currentTarget.dataset.index ==8){
					this.sendSocketMessage(JSON.stringify({sence: e.currentTarget.dataset.index}));
				}else{
					this.sendSocketMessage(JSON.stringify({close: 'close'}));
					this.sendSocketMessage(JSON.stringify({sence: e.currentTarget.dataset.index}));
				}
			},
			clickPlayAudio(e) {
				// console.log(e.currentTarget.dataset.index);
				this.clickHidePopup();
				this.sendSocketMessage(JSON.stringify({close: 'close'}));
				this.sendSocketMessage(JSON.stringify({audio: e.currentTarget.dataset.index}));
			},
			langTap() {
				let that = this;
				if(!that.tipsPoint){
					uni.showToast({
						icon:'error',
						title:"WS offline"
					})
					return false;
				}
				clearTimeout(langtaptimeout);
				let langtaptimeout = setTimeout(() => {
					console.log('langTap');
					// this.recorder.start();
					that.recorder.start(that.options);
					that.showUserPart = false;
					that.showRobotPart = false;
					that.isLangTap = true;
					that.isThinking = false;
					that.isInvalidAsk = false;
					uni.hideLoading();
					that.userMsg = '';
					that.robotMsg = '';
					that.robotMsgList = [];
					that.recording = true;
					that.recordStatus = 2;
					that.sendSocketMessage(JSON.stringify({ close: 'close'}));
					that.sendSocketMessage(JSON.stringify({ sence: '3'}));
				}, 200)
			},
			touchStart(e) {
				let that = this;

				// that.clientX = e.changedTouches[0].clientX; //手指按下时的X坐标
				// that.clientY = e.changedTouches[0].clientY; //手指按下时的Y坐标
				// if(that.isLangTap){
				// navigator.getUserMedia({
				// 	audio: true
				// }, function(stream) {
				// 	that.recorder = new HZRecorder(stream)
				// 	console.log('初始化完成');
				// }, function(e) {
				// 	console.log('No live audio input: ' + e);
				// });
				// }

			},
			touchMove(e) {
				let touchData = e.touches[0];
				let moveX = touchData.clientX - this.clientX;
				let moveY = touchData.clientY - this.clientY;
				if (moveY < -50) {
					// 向上滑动
					this.cancelRecord = true;
					this.recordStatus = 1;
					// console.log("向上滑动");
				} else {
					// 向下滑动
					this.cancelRecord = false;
					this.recordStatus = 2;
					// console.log("向下滑动");
				}
			},
			touchEnd() {
				let that = this;
				if (!that.cancelRecord&&that.isLangTap == true) {
					// 完成录音
					that.recorder.stop();
					that.showUserPart = true;
					that.isAsring = false;
					// console.info('进来了？？？');
					that.isLangTap = false;
				} else {
					// 此时松手后响应的是取消录音
					console.info('取消录音');
				}

				that.recordStatus = 0;
				that.recording = false;
				that.cancelRecord = false;
				// that.isLangTap = false;


			},
			playVoice() {
				console.log('播放录音');
	
				if (this.voicePath) {
					this.innerAudioContext.src = this.voicePath;
					this.innerAudioContext.play();
				}
			},
			sendSocketMessage(msg){
				let that = this;
			  if (that.socketOpen) {
				uni.sendSocketMessage({
				  data: msg
				});
			  }else{
				console.log("error",msg)
			  }
			},
			


		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		position: relative;
		/* align-items: center;
		justify-content: center; */
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.01) 100%);
		/* background-color: ; */
	}

	image {
		pointer-events: none !important;
	}

	.contentBg {
		width: 100vw;
		height: 100vh;
		background: url('../../static/contentbg.jpg') no-repeat;
		background-size: 100% 100%;
		position: absolute;
		z-index: -1;
	}

	.custom {
		width: 100vw;
		height: 100rpx;
		overflow: hidden;
		background-color: rgba(255, 255, 255, 0.8);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding-top: 4vh;
	}

	.customLeft {
		height: 100%;
		display: flex;
		align-items: center;
	}

	.customMid {
		height: 100%;
		display: flex;
		align-items: center;
	}

	.customRight {
		height: 100%;
		display: flex;
		align-items: center;
	}

	.customLeft>image {
		width: 62rpx;
		height: 32rpx;
		margin-left: 32rpx;
	}

	.customMid>image {
		width: 176rpx;
		height: 36rpx;
	}

	.customRight>image {
		width: 40rpx;
		height: 40rpx;
		margin-right: 32rpx;
	}
	.tipsPoint{
		width: 20rpx;
		height: 20rpx;
		background-color: #fff;
		border-radius: 50%;
		margin-left: 20rpx;
	}
	.redPoint{
		width: 20rpx;
		height: 20rpx;
		background-color: red;
		border-radius: 50%;
	}
	.greenPoint{
		width: 20rpx;
		height: 20rpx;
		background-color: #17BA4D;
		border-radius: 50%;
	}
	.optinoPoint{
		width: 20rpx;
		height: 20rpx;
		border-radius: 50%;
		margin-right: 20rpx;
	}
	.optionBtn {
		width: 96vw;
		height: auto;
		overflow: hidden;
		background-color: #202020;
		border-radius: 20rpx;
		margin: 0 auto 16rpx;
	}

	.optionBtn>button {
		background-color: #202020;
		font-size: 36rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		margin-top: 2rpx;
	}

	.cannelBtn {
		width: 96vw;
		height: auto;
		overflow: hidden;
		background-color: #202020;
		border-radius: 20rpx;
		margin: 0 auto 40rpx;
	}

	.cannelBtn>button {
		background-color: #202020;
		font-size: 36rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #007AFF;
		margin-bottom: 10rpx;
	}


	.main {
		width: 100vw;
		height: 90vh;
		overflow: hidden;
	}

	.inputWav {
		width: 100vw;
		height: 20vh;
		/* background-color: rgba(0,0,0,0.7); */
		position: absolute;
		bottom: 0;
		left: 0;
		color: #efefef;
		text-align: center;
	}

	.inputBox {
		width: 100vw;
		height: 100vh;
	}

	.inputTipsSlide {
		/* display: none; */
		width: 100vw;
		height: 200rpx;
		position: absolute;
		top: -180rpx;
		/* left: 50%; */
		/* transform: translateX(-50%) translateY(-50%); */
		text-align: center;
		font-size: 31rpx;
		font-family: San Francisco Display;
		font-weight: bold;
		color: #FFFFFF;
	}

	.slideMain {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.slideMain>image {
		width: 40rpx;
		height: 72rpx;
		position: absolute;
		top: 20rpx;
		/*left: 50%;
		transform: translateX(-50%); */
	}

	.inputBtnDefault {
		width: 180rpx;
		height: 180rpx;
		background: linear-gradient(135deg, #B54FE6, #439CFD);
		border-radius: 50%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.inputBtnRecording {
		width: 180rpx;
		height: 180rpx;
		background: #282828;
		border-radius: 50%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.inputIconBoxCannel {
		width: 180rpx;
		height: 180rpx;
		background: none;
		border-radius: 50%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.inputIconBox {
		width: 180rpx;
		height: 180rpx;
		background: #FB496F;
		border-radius: 50%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.inputIcon {
		width: 55rpx;
		height: 75rpx;
	}

	.inputTipsHold {
		width: 100vw;
		height: 46rpx;
		font-size: 31rpx;
		font-family: San Francisco Display;
		font-weight: bold;
		color: #EFEFEF;
		line-height: 74rpx;
		pointer-events:none
	}

	.inputTipsRelease {
		width: 100vw;
		height: 46rpx;
		font-size: 25rpx;
		font-family: San Francisco Display;
		font-weight: 400;
		color: #A0A0A8;
		line-height: 74rpx;
	}

	.chat {
		width: 90vw;
		height: 68vh;
		overflow: scroll;
		margin: 20rpx auto 120rpx;
	}

	.userPart {
		width: 90vw;
		min-height: 80rpx;
		height: auto;
		overflow: hidden;
	}
	.userPart .userPartList{
		width: 90vw;
		min-height: 80rpx;
		margin-top: 20rpx;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}
	.userPartList .asring {
		width: 178rpx;
		height: 92rpx;
		/* border-radius: 10rpx; */
		overflow: hidden;
		padding:0 20rpx;
		background-color: #303030;
		font-size: 15px;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 40rpx;
		/* word-break: break-all; */
	}
	.userPartList .asring>image{
		display: block;
		width: 100%;
	}

	.userPartList .headimg {
		width: 80rpx;
		height: 80rpx;
		background-color: #6A6A6A;
		border-radius: 50%;
	}

	.userPartList .headimg>image {
		width: 70rpx;
		height: 70rpx;
		margin-top: 10rpx;
		margin-left: 5rpx;
	}

	.userPartList .triangle {
		border: 10px solid transparent;
		border-left-color: #303030;
		width: 0;
		height: 0;
		margin-top: 20rpx;
	}

	.userPartList .text {
		width: 400rpx;
		/* min-height: 80rpx; */
		overflow: hidden;
		padding: 25rpx;
		background-color: #303030;
		color: #fff;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 40rpx;
		/* word-break: break-all; */
	}

	.robotPart {
		width: 90vw;
		min-height: 150rpx;
		height: auto;
		margin-top: 20rpx;
		overflow: hidden;
	}

	.robotPart .robotPartList{
		width: 90vw;
		min-height: 80rpx;
		margin-top: 20rpx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}
	
	.robotPartList .headimg {
		width: 80rpx;
		height: 80rpx;
		background-color: #000;
		border-radius: 50%;
	}
	
	.robotPartList .headimg>image {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
	/* 	margin-top: 15rpx;
		margin-left: 10rpx; */
	}
	
	.robotPartList .triangle {
		border: 10px solid transparent;
		border-right-color: #000;
		width: 0;
		height: 0;
		margin-top: 20rpx;
	}
	.robotPartList .thinking {
		width: 178rpx;
		height: 92rpx;
		/* border-radius: 10rpx; */
		overflow: hidden;
		padding:0 20rpx;
		background-color: #000;
		font-size: 15px;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 40rpx;
		/* word-break: break-all; */
	}
	.robotPartList .thinking>image{
		display: block;
		width: 100%;
	}
	.robotPartList .text {
		width: auto;
		max-width: 400rpx;
		/* min-height: 80rpx; */
		/* border-radius: 10rpx; */
		overflow: hidden;
		padding: 26rpx;
		background-color: #000;
		font-size: 15px;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 40rpx;
		/* word-break: break-all; */
	}
	.robotPartList .sort {
		width: 96rpx;
		height: 92rpx;
		/* border-radius: 10rpx; */
		overflow: hidden;
		/* padding: 32rpx; */
		background-color: #202020;
		font-size: 15px;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		text-align: center;
		line-height: 92rpx;
		/* word-break: break-all; */
	}
	.popupWSSMain{
		width: 90vw;
		height: 40vh;
		background-color: #fff;
		border-radius: 20rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.popupWSSMain>input{
		width: 80vw;
		height: 80rpx;
		margin: 0 auto;
		border: 1px solid #000;
		border-radius: 10rpx;
		padding: 5rpx;
		margin: 20rpx;
	}
	.popupWSSMain>button{
		width: 80vw;
		margin: 10rpx;
	}

	
</style>