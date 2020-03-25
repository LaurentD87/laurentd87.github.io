//import verbs_json from './verbs.json'

//var verb_url = "https://github.com/LaurentD87/laurentd87.github.io/blob/master/verbs.json"
verb_url = './verbs.json'
const verbs = fetch(verb_url).then(function (response) { return reponse.json() })

//verbs = JSON.parse(verbs_json)
console.log(verbs["puhua"])
