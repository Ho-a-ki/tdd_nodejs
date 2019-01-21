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


## 10.