

function loadPaella(containerId) {
	var initDelegate = new paella.InitDelegate({
		accessControl:new MyAccessControl(),
		videoLoader:new DualMP4VideoLoader()
	});

	initPaellaEngage(containerId, initDelegate);
}


function loadPaellaExtended(containerId) {
	var initDelegate = new paella.InitDelegate({
		accessControl:new MyAccessControl(),
		videoLoader:new DualMP4VideoLoader()
	});

	initPaellaExtended({containerId:containerId,initDelegate:initDelegate});
}
