verbs_url = "https://github.com/LaurentD87/finngram/blob/master/verbs.json"
verbs = fetch(verbs_url).then(function (response) { return reponse.json() })
console.log(verbs["puhua"])
