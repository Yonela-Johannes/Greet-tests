let nameError = 'error-name'
let correctNameInput = 'correct-name'
let hide = 'hide'
let names = []
let username = ''
let lang = false
let language = false
let greeting;
let count = 0;

export function Greet() {

    const setName = (name) => username = typeof name == 'string' ? name == '' ? 'enter name!'
        : (name.trim().replace(/[^a-z, ^A-Z]/g, '').toLocaleLowerCase())
        : 'name should be alphabets only!'

    const getNames = () => names.includes(username) ? (names) : (names.push(username))
    const resetNames = () => names = []
    const getName = () => username
    const getStoredNames = () => names

    const selectLanguage = (languages) => {
        for (let i = 0; i < languages.length; i++) {
            languages[i].checked ? (lang = true, language = languages[i].language, greeting = languages[i].greeting) : (lang, language)
        }
    }
    const getCheckLang = () => lang
    const getLanguage = () => language
    const getGreeting = () => greeting
    const setCount = () => getLanguage() && getGreeting() && getStoredNames() ? count = getStoredNames().length : count
    const getCount = () => count

    const nameClassName = (nameState, error, nameInput) => (nameState.classList.add(nameError), error.classList.remove(hide), error.innerHTML = 'please enter name!', nameInput.classList.add(nameError), nameInput.length <= 4 && (error.innerHTML = 'name must be more than 4 characters!'))
    const correctNameClassName = (nameState, error, nameInput) => (nameState.classList.remove(nameError), error.classList.add(hide), error.innerHTML = '', nameInput.classList.remove(nameError), nameInput.classList.add(correctNameInput))

    return {
        setName,
        getName,
        getNames,
        resetNames,
        getStoredNames,
        selectLanguage,
        getCheckLang,
        getLanguage,
        getGreeting,
        setCount,
        getCount,
        nameClassName,
        correctNameClassName,
    }

}
