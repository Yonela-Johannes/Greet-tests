let languageGreet = ['english', 'xhosa', 'zulu']
let selected = false
languageGreetSelect = false


const GreetTest = () => {
    let usernames = []
    let username = ''
    let counter = 0;


    const checkRadio = () => {
        for (let i = 0; i < languageGreetSelect.length; i++) {
            languageGreetSelect[i].checked ? selected = true : selected
        }
    }
     
    const setLanguage = () => {
        for (let i = 0; i < languageGreetSelect.length; i++) {
            language = languageGreetSelect[i].value
        }
    }
    const getLanguage = () => language

    const setName = name => typeof name == 'string' ? (usernames.includes(name) ? (counter, usernames) : (selected ? (usernames.push(username = name), counter++) : ('select language!'))) : ('Invalid input!')
   
    const getName = () => username
    const getNames = () => usernames
    const count = () => counter


    return {
        setName,
        getName,

        getNames,
        checkRadio,
        count,
        setLanguage,
        getLanguage,
    }

}