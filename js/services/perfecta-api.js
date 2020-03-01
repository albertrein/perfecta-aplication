class PerfectaApi{
	urlBase = "https://perfecta-api-node-firebase.herokuapp.com";
	JSONheaders = {
		'Accept': 'application/json',
       	'Content-Type': 'application/json'
	}
	constructor(){}

	getCategories = () => new Promise((resolve, reject) => {
		//Set headers
		let header = new Headers(this.JSONheaders);
		
		//Make send options
		let options = {
			method: 'GET',
			headers: header
		}

		fetch(this.urlBase+'/categorys', options).then((response) => {
			console.log(response);
			response.json().then(dataCategories => {
				resolve(dataCategories);
			});
		}).catch((error) => {
			console.log('error:',error);
		});


	});

	getJobsByCategorie = categorie => new Promise((resolve, reject) => {
		//Set headers
		let header = new Headers(this.JSONheaders);
		
		//Make send options
		let options = {
			method: 'GET',
			headers: header
		}

		fetch(this.urlBase+'/category/jobs/'+categorie, options).then((response) => {
			/*console.log(response);
			response.json().then(dataCategories => {
				resolve(dataCategories);
			});*/
			resolve(response.json());
		}).catch((error) => {
			console.log('error:',error);
		});
	});

	testConnection(){
		fetch(this.urlBase).then((response) => {
			console.log('Perfecta-',response);
		}).catch((error) => {
			console.error('Perfecta responding:',error);
		});
	}

}