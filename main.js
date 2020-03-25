//import verbs_json from './verbs.json'

//var verb_url = "https://github.com/LaurentD87/laurentd87.github.io/blob/master/verbs.json"
verb_url = './verbs.json'
fetch(verb_url).then(function (response) { 
    verbs = response.json()
    console.log(verbs["puhua"])
    

    
})

