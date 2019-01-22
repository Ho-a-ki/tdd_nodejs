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

## 11. Test Setup and Teardown

Mocha Hook.

+ Before and After Hooks.
+ BeforeEach and AfterEach


using like these.

```js
describe('test_suite', function() {
    before(function() {
        console.log('before test')
    })
    it('return true' ,function() {
        expect(call().to.equal(true))
    })
    after(function(){
        console.log('after test')
    })

    
})
```

### Root-Level Hooks.
루트 레벨에서도 before, after 사용 가능.

setup code와 tear down 코드
테스트를 실행하기 전에 setup하고.
테스트 끝난 후 모든 코드 해체하는 작업.

각 테스트들도 each를 사용해 이를 가능하게 함.

nest하게 짜서 root에서 비포, 애프터하고
descirbe (suite 레벨) 에서 비포 , 애프터하고
beforeEach, afterEach 가능.


## 12. Chai Assert Library

Chai is js assertion library.

what is assertion library?

https://stackoverflow.com/questions/25678063/whats-the-difference-between-assertion-library-testing-framework-and-testing-e

링크참고
if 문 안짜고 쉽게 해줄 수 있게 하는 라이브러리

Additional Assert Api Calls.

https://www.chaijs.com/api/assert/

BDD api.

* Language Chains.


## 13. Testing Asychronous code 비동기 코드 다루기

callback or promise

* timer.
* http
* db operation

done()

```js
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
```

## 14. OverView!
Hands on TDD Coding session.

* Checkout Class that maintains a list of items that are being checked out

* Checkout Class provides interfaces for
    * setting the price of individual items
    * adding individual items to the check out.
    * the current total cost for all the items added.
    * add an apply discounts on select items when N number are purchased.

Test Cases !
이런 식으로 예상하는 테스트 케이스를 작성해야 한다.

* Can create an instance of the Checkout class
* Can add an item price
* Can add an item
* Can calculate the current total
* Can add multiple items and get correct total
* Can add discount rules
* Can apply discount rules to the total
* Exception is Thrown for Item Added without Price

## 15. Practice

## 16. Practice 2

## 17. Practice 3
여기서 객체 지향 코드 나옴!
익숙해져야 함!

OOP!

## 18. 


