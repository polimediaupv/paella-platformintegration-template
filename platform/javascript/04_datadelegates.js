
paella.dataDelegates.UserDataDelegate = Class.create(paella.DataDelegate,{
    initialize:function() {
    },

    read:function(context, params, onSuccess) {
    	var value = {
			userName:"userName",
			name: "Name",
			lastname: "Lastname",
			avatar:"plugins/silhouette32.png"
		};

        if (typeof(onSuccess)=='function') { onSuccess(value,true); }
    }

});