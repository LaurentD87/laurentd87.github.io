//import verbs_json from './verbs.json'

const verbs = fetch("https://github.com/LaurentD87/finngram/blob/master/verbs.json").then(function (response) { return reponse.json() })

//verbs = JSON.parse(verbs_json)
console.log(verbs["puhua"])
