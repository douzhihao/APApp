<template>
	<view class="content">
		<view>
			<button @tap="startRecord">开始录音</button>
			<button @tap="endRecord">停止录音</button>
			<button @tap="playVoice">播放录音</button>
			<view class="text">
				内容是：{{text_data}}
			</view>
		</view>
	</view>
</template>

<script>
	import axios from 'axios'
	// import vconsole from "../../common/vconsole/vconsole.min.js"

	const recorderManager = uni.getRecorderManager();
	const innerAudioContext = uni.createInnerAudioContext();

	innerAudioContext.autoplay = true;
	export default {
		data() {
			return {
				voicePath: '',
				Path:null,
				text_data:"",
				options : {
					duration:60000,
					sampleRate:16000,
					format: "mp3"
				}
			}
		},
		onLoad() {
			// new vconsole;
			
			let that = this;
			recorderManager.onStop(function(res) {
				// console.log('recorder stop' + JSON.stringify(res.tempFilePath));
				that.Path = res.tempFilePath
				console.log(res.tempFilePath)
				that.voicePath = res.tempFilePath;
			});
		},
		methods: {
			startRecord() {
				console.log('开始录音');
				recorderManager.start(this.options);
			},
			endRecord() {
				console.log('录音结束');
				recorderManager.stop();
			},
			playVoice() {
				// console.log('播放录音');
				let that = this;
				if (that.voicePath) {
					innerAudioContext.src = that.voicePath;
					innerAudioContext.play();
				}
				
				
				// 保存文件
				uni.saveFile({
				  tempFilePath: that.Path,
				  success: function (res) {
					  console.log(res.savedFilePath);
				    var savedFilePath = res.savedFilePath;
					
						uni.uploadFile({  
							// url: "https://aigc.metazen-tech.com/meta-tts/speech/recognitionCN",  
							url: "https://aigc.metazen-tech.com/meta-tts/speech/recognitionMp3",  
							// url: "http://10.10.110.245:8058/tts/speech/recognitionCN",  
							filePath: that.Path,  
							// filePath: savedFilePath,  
							timeout: 60000,
							formData: {
								// "language": "zh-CN"
								"language": "en-US"
							},
							name: 'multipartFile',   
							success: (res)=>{
								console.log(res,JSON.parse(res.data));  
								let _data = JSON.parse(res.data);
								that.text_data = _data.data;
							},
							fail:(res)=> {
								console.log(res);
							}
						})
							
					
				  }
				});
				
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>