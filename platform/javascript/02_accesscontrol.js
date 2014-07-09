/*

User login, data and permissions: paella.AccessControl

Extend paella.AccessControl and implement the checkAccess method:

*/


var MyAccessControl = Class.create(paella.AccessControl,{
	checkAccess:function(onSuccess) {
		/*
		   Fill-in the this.permissions object, specifying the privileges that the current user have.		
		   You can get this data asynchronously if you want, because Paella Player will be waiting until you call the onSuccess callback.
		   There are two objects that you must to fill-in: permissions and userData
		*/
		this.permissions.canRead = true;
		this.permissions.canWrite = true;
		this.permissions.canContribute = true;
		this.permissions.loadError = false;
		this.permissions.isAnonymous = true;
		
		this.userData.login = 'anonymous';
		this.userData.name = 'Anonymous';
		this.userData.avatar = 'resources/images/default_avatar.png';
		
		/*
		   Call onSuccess when you end loading all the data
		*/
		onSuccess(this.permissions);
	}
});

