https://www.udemy.com/unit-testing-and-test-driven-development-in-nodejs/learn/v4/overview

## 2. What is Unit Testing?

by catching any bugs in the software before they get to the field.

* unit testing.

* component testing. (collection of the function.)

* system testing.

* performance testing.

Unit tests => tests individual functions.

A simple Example.

```javascript

# Production Code

function str_len( theStr ) {
    return theStr.length;
}

# A Unit Test

it('returns length of the string' ,
function() {
    testStr = "1";
    result = str_len(testStr);
    expect(result).to.equal(1);
});

```

SETUP > ACTION > ASSERT.



## 3. What is Test Driven Development

TDD Work Flow : Red, Green, Refactor.

Uncle Bob's 3 Laws of TDD

1. You may not write any production code until you have written a failing unit test.

2. You may not write more of a unit test than is sufficient to fail, and not compiling is failing.

3. You may not write more production code than is sufficient to pass the currently failing unit test.

## 4. Quick Example TDD Session

## 5. Setting up Mocha Test Runner in WebStorm

## 6. Running Mocha from the command line

## 8. Mocha and Chai OverView

Chai : assertion library.

## 9. Test Discovery.

npm test 하면 자동적으로 test 폴더 안에 있는 것들을 테스트 합니다. 파일 여러개도 알아서 함.


## 10. Test Suites.

how to organize your unit tests in a test suites with mocha

test suites allow you to group similar unit tests together.

about grouping test!
suite가 하나의 그룹이 되어서 그 안에 Nest 하게 넣어서 만들 수 있다.

## 10. Test Setup and Teardown

Mocha 'Before' and 'After' Hooks.

```js

describe('test_suite', function() {
    before(function() {
        console.log('Before Tests')
    })
    it(function() {
        expect(call().to.equal(true));
    })
    after(function() {
        console.log('After Tests')
    })
})

```

beforeEach 랑 afterEach 코드도 있다.
can specify muliple and can be placed anywhere in the describe block!

