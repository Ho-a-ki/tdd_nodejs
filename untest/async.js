var expect = require('chai').expect;

function promiseFunc() {
    return new Promise(
        (resolve, reject) => {
            setTimeout( () => {
                resolve('blah')
            }, 100);
        }
    )
}

it("promise test", function() {
    return promiseFunc().then( res => {
        expect(res).to.equal('blah')
    })
})

it('await test', async () => {
    let res = await promiseFunc();
    expect(res).to.equal('blah')
})