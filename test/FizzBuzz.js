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

/*
red > green > refactor > red > ...

X - fizzbuzz(1) > 1
X - fizzbuzz(2) > 2
X - fizzbuzz(3) > fizz
fizzbuzz(5) > buzz
fizzbuzz(15) > fizzbuzz

*/