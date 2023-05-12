import { get } from "http";
import { assert } from "chai"

let url = 'http://server:8080'

describe('Tests', function () {
    describe('Successful', function () {
      it('Should be successful @run', function () {
        console.log(url);
        let temporaryData = '';
        get(url, res => {
            res.on('data', nextData => {
                temporaryData += nextData
            })
            res.on('end', () => {
            assert.equal(JSON.parse(temporaryData).message, 'HelloWorld');
            })
        });
      });
      it('Should be failed @run', function () {
        get(url, res => {
            res.on('data', nextData => {
                temporaryData += nextData
            })
            res.on('end', () => {
            assert.equal(JSON.parse(temporaryData).message, 'BuyWorld');
            })
        });
      });
    });
  });
