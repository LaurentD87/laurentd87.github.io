//verb_url = 'http://127.0.0.1:8887/verbs_list.json'


verb_url = './verbs_list.json'

function arrayChoice(arr) {
    return arr[Math.floor(Math.random()*arr.length)]
}

class RandomParadigm {
    constructor() {
        const paradigms = ['pres', 'past', 'cond', 
                    'pres-passive', 'past-passive', 'cond-passive', 'imp', 'part', 'inf']
        this.paradigms = paradigms
        this.weights = new Array(paradigms.length).fill(1.0 / paradigms.length)
    }
    getRandomParadigm() {
        x = Math.random()
        s = 0
        i = -1
        while (s < x) { 
            i += 1
            s += this.weights[i]
        }
        paradigm = this.paradigms[i]
        if (['pres', 'past', 'cond'].includes(paradigm)) {
            return [
                paradigm, arrayChoice(['1','2','3']) + arrayChoice(['s','p'])
            ]
        }
        if (['pres-passive', 'past-passive', 'cond-passive'].includes(paradigm)) {
            return [
                paradigm.slice(0,4), arrayChoice(['passive_pos', 'passive_neg'])
            ]
        }
        if (paradigm == 'imp') {
            return ['imp', arrayChoice(['2p', '2s'])]
        }
        if (paradigm == 'part') {
            part = arrayChoice(['pres','past','agent']) 
            if (part != 'agent') {
                return [
                    'part', part, arrayChoice(['active','passive'])
                ]
            } else {
                return [
                    'part', 'agent', arrayChoice(['positive', 'negative'])
                ]
            }
        }
        if (paradigm == 'inf') {
            return [
                'inf', arrayChoice(['ine', 'ela', 'ill', 'ade', 'abe', 'nom'])
            ]
        }
    }
    normalizeWeights() {
        s = this.weights.reduce((a,b) => a+b)
        for (i=0; i < this.paradigms.length; i++) {
            this.weights[i] = this.weights[i] / s
        }
    }
    decreaseWeight(paradigm) {
        i = this.paradigms.findIndex(p => p == paradigm)
        this.weights[i] *= 0.95
        this.normalizeWeights()
    }

}



fetch(verb_url).then(function (response) { 
    return response.json()
}).then(function (verbs) {
    function getRandomVerb() {
        return arrayChoice(verbs)
    }

    function SubmitVerb(verb, verb_data) {
        requiredVerbSpan = document.getElementById("required-verb")
        requiredVerbSpan.firstChild.nodeValue = verb


        

        answerVerb = document.getElementById("answer-verb")
        answerVerb.addEventListener("keyup", function (event) {
            if (event.keyCode == 13) {
                event.preventDefault()
                answer = answerVerb.value 

            }
        })
    }

})

