const expect    = require("chai").expect;
const assert    = require("chai").assert;

import divide from '../divide.js';
import add from '../add.js';
import sum from '../sum.js';
import multiply from '../multiply.js';
import toString from '../toString.js';
import repeat from '../repeat.js';
import toFinite from '../toFinite.js';
import sortedIndex from '../sortedIndex.js';
import replace from '../replace.js';
import xor from '../xor.js';
import round from '../round.js';
import isEmpty from '../isEmpty.js';
import map from '../map.js';

describe("Mathematical functions", function() {

  describe("divisions", function() {

    it("Should divide two numbers", function() {
      let division   = divide(8, 4);
      expect(division).to.equal(2);
    });

    it("Should not crash when dividing by 0", function() {
      let division   = divide(8, 0);
      expect(division).to.equal(Infinity);
    });

    it("Should yield same results as normal operators", function() {
      const result = divide(8, 4);
      const expectedResult = 8 / 4;
      expect(result).to.equal(expectedResult);
    });
  });

  describe("additions", function() {
    it("Should add two numbers", function() {
      let sum   = add(8, 4);
      expect(sum).to.equal(12);
    });

    it("Should return an integer", function() {
      let sum   = add(20, 45);
      assert.isNotNaN(sum);
    });

    it("Should return the same value as its inverse", function() {
      let result = add(20, 45);
      let expectedResult = 85-20;
      expect(result).to.equal(expectedResult);
    });

    it("Should return sum of all numbers in array", function() {
      let numbers = [23, 4, 12, 36, 7, 41];
      let total = sum(numbers);
      expect(total).to.equal(123);
    });
  });

  describe("Multiplying", function() {
    it("Should multiply two numbers", function() {
      let product   = multiply(8, 4);
      expect(product).to.equal(32);
    });

    it("Should return negative values when multiplying", function() {
      let product = multiply(-1, 45);
      expect(product).to.equal(-45);
    });

  });
});

describe("Elementtype functions", function() {

  describe("toString", function() {
    it("Should return stringified number", function() {
      let number = 5;
      let result = toString(number);
      expect(result).to.be.a('string');
    });

    it("Should return empty string for undefined", () => {
      expect(toString(undefined)).to.equal("")
    });

    it("Should return empty string for null", function() {
      expect(toString(null)).to.equal("")
    });

    it("Should return '-0' for the value -0", function() {
      expect(toString(-0)).to.equal("-0")
    });

    it("Should turn object into a string", function() {
      const object = {a: 1, b: 2}
      const expectedResult = "[object Object]"
      expect(toString(object)).to.equal(expectedResult)
    });

    it("Should turn array into a string", function() {
      const array = [1, 2, 3]
      const expectedResult = "1,2,3";
      expect(toString(array)).to.equal(expectedResult)
    });


    it("Should repeat string x amount of times", function() {
      let repeatAmount = 5;
      let originalString = "abc";
      let result = repeat(originalString, repeatAmount);
      expect(result).to.equal('abcabcabcabcabc');
    });
  });

    describe("isEmpty", function() {
      it("Should return true for empty strings", function() {
        expect(isEmpty('')).to.equal(true);
      });
      it("Should return true for empty arrays", function() {
        expect(isEmpty([])).to.equal(true);
      });
      it("Should return false for strings", function() {
        expect(isEmpty('Hello')).to.equal(false);
      });
      it("Should return false for arrays", function() {
        expect(isEmpty([1,2,3])).to.equal(false);
      });
    });


  describe("Array functions", function() {
    it("Should return index of where to insert number in sorted array", function() {
      let number = 14;
      let sortedArray = [2,3,7,12,34];
      let result = sortedIndex(sortedArray, number);
      expect(result).to.equal(4);
    });

    it("Should return an array with the unique elements of two arrays", function() {
      let firstArray = [2,3,7,12,34];
      let secondArray = [2,3,8,12,35];
      let result = xor(firstArray, secondArray);
      let expectedResult = [7,34,8,35];
      assert.deepEqual(result, expectedResult);
    });

    it("Should return an array with all elements squared", function() {
      const Array = [2,3,4,5];
      const expectedResult = [4,9,16,25];
      const square = (n) => {
        return n * n;
      };
      assert.deepEqual(map(Array, square), expectedResult);
    });
  });




  describe("Rounding off", function() {
    it("Should round off to 3 decimals", function() {
      let number = 1.358910;
      let result = round(number, 3);

      expect(result).to.equal(1.359);
    });

    it("Should round off to closest hundred", function() {
      let number = 2851;
      let result = round(number, -2);
      expect(result).to.equal(2900);
    });

    it("Should not round off strings", function() {
      let string = "Hello";
      let result = round(string);

      assert.isNotOk(result);
    });

  });
});
