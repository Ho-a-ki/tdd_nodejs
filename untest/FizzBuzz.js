var expect = require('chai').expect;

function fizzBuzz(value) {
    if (value % 3 == 0) {
        if (value % 5 == 0) {
            result = 'fizzbuzz'
        } else {
            result = 'fizz'
        }
    } else if (value % 5 == 0) {
        result = 'buzz'
    } else {
        result = value.toString()
    }
    return result
}

function CheckfizzBuzz(value , expectRe) {
    var result = fizzBuzz(value)
    expect(result).to.equal(result)
}

it('if i pass 1, get 1', function () {
    CheckfizzBuzz(1, '1')
})

it('if i pass 2, get 2', function () {
    CheckfizzBuzz(2, '2')
})

it('if i pass 3, return fizz', function () {
    CheckfizzBuzz(3, 'fizz')
})

it('if i pass 5, return fizz', function () {
    CheckfizzBuzz(5, 'buzz')
})


it('if i pass 15, return fizzbuzz', function() {
    CheckfizzBuzz(15, 'fizzbuzz')
})

describe('test_suite', function() {
    before(function() {
        console.log('setup test')
    })
    it('if i pass 5, fizzbuzz return buzz' ,function() {
        CheckfizzBuzz(5, 'buzz')
    })
    after(function(){
        console.log('teardown test')
    })

    beforeEach('setup for each test', function() {
        console.log('setup code for each test!')
    })

    afterEach('setup for each test', function() {
        console.log('teardown code for each test!')
    })

    it('test1 이 실행됩니다.' ,function() {
        console.log('test1');
        expect(true).to.equal(true)
    })

    it('test2 이 실행됩니다.' ,function() {
        console.log('test2');
        expect(true).to.equal(true)
    })
})

/*
red > green > refactor > red > ...

X - fizzbuzz(1) > 1
X - fizzbuzz(2) > 2
X - fizzbuzz(3) > fizz
fizzbuzz(5) > buzz
fizzbuzz(15) > fizzbuzz

*/