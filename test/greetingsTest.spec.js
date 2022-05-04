import { Greet } from '../app.js'
mocha.setup('bdd');
let assert = chai.assert;
mocha.checkLeaks();
mocha.run();

describe('Greetings function Test', () => {
    describe("Name Factory Function Test", () => {
        it('should not be empty', () => {
            const greet = Greet()
            greet.setName('')
            assert.equal('enter name!', greet.getName())
        });
        it('should remove all numbers in alphanumeric string and return name', () => {
            const greet = Greet()
            greet.setName('56Z56e56zeth565u565')
            assert.equal('Zezethu', greet.getName())
        });
        it('should remove all spaces in alphanumeric string and return name', () => {
            const greet = Greet()
            greet.setName('   2yo3ne5235564la   ')
            assert.equal('Yonela', greet.getName())
        });
        it('should accept alphanumeric only as name', () => {
            const greet = Greet()
            greet.setName(12322)
            assert.equal('name should be alphabets only!', greet.getName())
        });
        it('should display/return names in list', () => {
            const greet = Greet()
            greet.setName('Yanga')
            greet.getNames()
            greet.setName('Anthony')
            greet.getNames()
            greet.setName('Lukhanyo')
            greet.getNames()
            assert.deepEqual(['Yanga', 'Anthony', 'Lukhanyo'], greet.getStoredNames())
        });
        it('should not store and display duplicated names', () => {
            const greet = Greet()
            greet.setName('Yanga')
            greet.getNames()
            greet.setName('Anthony')
            greet.getNames()
            greet.setName('Lukhanyo')
            greet.getNames()
            greet.setName('Yanga')
            greet.getNames()
            greet.setName('Yanga')
            greet.getNames()       
            assert.deepEqual(['Yanga', 'Anthony', 'Lukhanyo'], greet.getStoredNames())
        });
    });
    describe("Radio button selection test", () => {
        it('should false if language not checked/selected', () => {
            const greet = Greet()
            let languages = [{
                language: "English",
                checked: false,
                greeting: "Hello"
            },
            {
                language: "Afrikaans",
                checked: false,
                greeting: "Hallo"
            }, {
                language: "isiXhosa",
                checked: false,
                greeting: "Molo"
            }, {
                language: "isiZulu",
                checked: false,
                greeting: "Sawubona"
            }, {
                language: "seSotho",
                checked: false,
                greeting: "Lumela"
            }
            ]
            greet.selectLanguage(languages)
            assert.equal(false, greet.getLanguage())
        });
        it('should true if language is selected', () => {
            const greet = Greet()
            let languages = [{
                language: "English",
                checked: false,
                greeting: "Hello"
            },
            {
                language: "Afrikaans",
                checked: true,
                greeting: "Hallo"
            }, {
                language: "isiXhosa",
                checked: false,
                greeting: "Molo"
            }, {
                language: "isiZulu",
                checked: false,
                greeting: "Sawubona"
            }, {
                language: "seSotho",
                checked: false,
                greeting: "Lumela"
            }
            ]
            greet.selectLanguage(languages)
            assert.equal(true, greet.getCheckLang())
        });
        it('should display "Sawubona" if "isiZulu" selected', () => {
            const greet = Greet()
            let languages = [{
                language: "English",
                checked: false,
                greeting: "Hello"
            },
            {
                language: "Afrikaans",
                checked: false,
                greeting: "Hallo"
            }, {
                language: "isiXhosa",
                checked: false,
                greeting: "Molo"
            }, {
                language: "isiZulu",
                checked: true,
                greeting: "Sawubona"
            }, {
                language: "seSotho",
                checked: false,
                greeting: "Lumela"
            }
            ]
            greet.selectLanguage(languages)
            assert.equal("Sawubona", greet.getGreeting())
        });
        it('should display "Lumela" if "Sesotho" selected', () => {
            const greet = Greet()
            let languages = [{
                language: "English",
                checked: false,
                greeting: "Hello"
            },
            {
                language: "Afrikaans",
                checked: false,
                greeting: "Hallo"
            }, {
                language: "isiXhosa",
                checked: false,
                greeting: "Molo"
            }, {
                language: "isiZulu",
                checked: false,
                greeting: "Sawubona"
            }, {
                language: "Sesotho",
                checked: true,
                greeting: "Lumela"
            }
            ]
            greet.selectLanguage(languages)
            assert.equal("Lumela", greet.getGreeting())
        });
        it('should display isiXhosa if its checked/selected', () => {
            const greet = Greet()
            let languages = [{
                language: "English",
                checked: false,
                greeting: "Hello"
            },
            {
                language: "Afrikaans",
                checked: false,
                greeting: "Hallo"
            }, {
                language: "isiXhosa",
                checked: true,
                greeting: "Molo"
            }, {
                language: "isiZulu",
                checked: false,
                greeting: "Sawubona"
            }, {
                language: "seSotho",
                checked: false,
                greeting: "Lumela"
            }
            ]
            greet.selectLanguage(languages)
            assert.equal("isiXhosa", greet.getLanguage())
        });
        it('should display English if its checked/selected', () => {
            const greet = Greet()
            let languages = [{
                language: "English",
                checked: true,
                greeting: "Hello"
            },
            {
                language: "Afrikaans",
                checked: false,
                greeting: "Hallo"
            }, {
                language: "isiXhosa",
                checked: false,
                greeting: "Molo"
            }, {
                language: "isiZulu",
                checked: false,
                greeting: "Sawubona"
            }, {
                language: "seSotho",
                checked: false,
                greeting: "Lumela"
            }
            ]
            greet.selectLanguage(languages)
            assert.equal("English", greet.getLanguage())
        });

    });
    describe('Count', () => {
        it('should not count if username already exist in list', () => {
            const greet = Greet()
            greet.setName('Yanga')
            greet.getNames()
            greet.setName('Anthony')
            greet.getNames()
            greet.setName('Lukhanyo')
            greet.getNames()
            greet.setName('Lukhanyo')
            greet.getNames()
            greet.setName('Lukhanyo')
            greet.getNames()
            greet.setName('Lukhanyo')
            greet.getNames()
            greet.setName('Yonela')
            greet.getNames()
            greet.setCount()
            assert.deepEqual(4, greet.getCount())
        });
        it('should count if username do not exist in stored list', () => {
            const greet = Greet()
            greet.setName('Yanga')
            greet.getNames()
            greet.setName('Anthony')
            greet.getNames()
            greet.setName('Lukhanyo')
            greet.getNames()
            greet.setName('Yonela')
            greet.getNames()
            greet.setName('Zezethu')
            greet.getNames()
            greet.setName('Sapho')
            greet.getNames()
            greet.setCount()
            assert.deepEqual(6, greet.getCount())
        })
    })
})