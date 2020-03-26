verb_url = 'http://127.0.0.1:8887/verbs_list.json'




fetch(verb_url).then(function (response) { 
    return response.json()
}).then(function (verbs) {
    function getRandomVerb() {
        return verbs[Math.floor(Math.random() * verbs.length)]
    }

    function SubmitVerb(verb, verb_data) {
        requiredVerbSpan = document.getElementById("required-verb")
        requiredVerbSpan.firstChild.nodeValue = verb


        

        answerVerb = document.getElementById("answer-verb")
        answerVerb.addEventListener("keyup", function (event) {
            if (event.keyCode == 13) {
                event.preventDefault()
                answer = answerVerb.value 
                if answer == 
            }
        })
    }

})

