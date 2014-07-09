/*

Video data: paella.VideoLoader

Extend paella.VideoLoader and implement the loadVideo method:

*/


var DualMP4VideoLoader = Class.create(paella.VideoLoader, {
	loadVideo:function(videoId, onSuccess) {
		var url = videoId;
		
		if (url) {
			// Setup the video stream data
			var stream = examplePresenterSources;
			for(var i = 0; i<stream.sources.mp4.length; i++){
				stream.sources.mp4[i].src = url + stream.sources.mp4[i].src;
			}
			stream.preview = url + stream.preview;
			this.streams.push(stream);

			stream = exampleSlidesSources;
			for(var i = 0; i<stream.sources.mp4.length; i++){
				stream.sources.mp4[i].src = url + stream.sources.mp4[i].src;
			}
			stream.preview = url + stream.preview;
			for (var key in stream.sources.image.frames) {
				stream.sources.image.frames[key] = url + stream.sources.image.frames[key];
			}
			this.streams.push(stream);
			
			
			// Setup the video thumbnails:
			this.frameList = exampleFrameList;
			for (var key in this.frameList) {
				this.frameList[key].url = url + this.frameList[key].url;
				this.frameList[key].thumb = url + this.frameList[key].thumb;
			}
		}

		// Set this.loadStatus = true if all went Ok and call onSuccess()
		this.loadStatus = true;
		onSuccess();
	}
});