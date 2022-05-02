mocha.setup('bdd');
let assert = chai.assert;
let expect = chai.expect
mocha.checkLeaks();
mocha.run();

describe('Greetings function Test', () => {
    const greet = GreetTest()
    it('should accept name as a string', () => {
        // greet.setName('Yonela')
        // expect('Yonela').to.be.eq(greet.getName())
    });
    it('should accept alphanumeric only as name', () => {
        // const greet = GreetTest()
        // greet.setName(1452115)
        // assert.equal('invalid input', greet.getName())
    });
    it('should not count if name is not entered', () => {
        const greet = GreetTest()
        greet.count()
        greet.count()
        expect(0).to.be.eq(greet.count())
    });
    it('should not add name if  name had already been entered', () => {
        const greet = GreetTest()
        greet.setName('yonela')
        greet.setName('yonela')
        greet.setName('niello')
        greet.setName('codex')
        // console.log(greet.getName())
        console.log(greet.getName())
        console.log(greet.getNames())
        console.log(greet.count())
        console.log(greet.count())
    });
    it('should count if name is entered', () => {
        const greet = GreetTest()
        greet.setName('codeX')
        greet.count()
        greet.count()
        greet.count()
        greet.count()
        greet.count()
        // assert.equal(5, greet.count())

    })
    it('should stop count when name was already entered', () => {
        const greet = GreetTest()
        greet.setName('Yonela')
        greet.setName('Yonela')
        greet.setName('codeX')
        // console.log(greet.getName())
        // console.log(greet.usernames)
        // console.log(greet.storedNames())
    });
    it('should be greater than 4 alphabetical characters', () => {

    })
    it('should return error when no radio button is pressed', () => {

    });
    it('should retrurn hello in given language and name', () => {

    })
})