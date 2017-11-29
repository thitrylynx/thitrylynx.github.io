'use strict';

var firstList = document.querySelector('.calc__first-column');
var secondList = document.querySelector('.calc__second-column');
var thirdList = document.querySelector('.calc__third-column');
var calculat = document.querySelector('.calc__calculate');
var calcAdd = document.querySelector('.calc-add');
var calcRemove = document.querySelector('.calc-remove');
var calcDefault = document.querySelector('.calc-default');
var columnCount = document.querySelector('.column-count');

var firstColumnList = [];
var secondColumnList = [];
var thirdColumnList = [];

var roundFunction = function(numberValue) {
  var indexNumber = numberValue;
  return Math.round(indexNumber * 10000) / 10000;
};

// скользящая средняя
var calculateAverege = function(indexS, firstValueS, secondValueS, thirdValueS) {
  var totalValueS = (firstValueS * 1 + secondValueS * 1 + thirdValueS * 1) / 3;
  secondColumnList[indexS].value = roundFunction(totalValueS);
};
// ошибка
var calculateError = function(indexE, firstValueE, secondValueE) {
  var totalValueE = (firstValueE * 1 - secondValueE * 1) / firstValueE * 1 * 100;
  thirdColumnList[indexE].value = roundFunction(Math.abs(totalValueE));
};

var calculater = function() {
  firstColumnList = firstList.querySelectorAll('.first-column');
  secondColumnList = secondList.querySelectorAll('.second-column');
  thirdColumnList = thirdList.querySelectorAll('.third-column');

  for (var i = 1; i < firstColumnList.length - 1; i++) {
    calculateAverege(
      i,
      firstColumnList[i - 1].value,
      firstColumnList[i].value,
      firstColumnList[i + 1].value
    );
  }

  secondColumnList[0].value = '-';
  secondColumnList[firstColumnList.length - 1].value = '-';

  for (var k = 1; k < firstColumnList.length - 1; k++) {
    calculateError(k, firstColumnList[k].value, secondColumnList[k].value);
  }
  thirdColumnList[0].value = '-';
  thirdColumnList[firstColumnList.length - 1].value = '-';
};

// удаление, добавление новой строки
var addNewLine = function() {
  var newLi = document.createElement('li');
  var firstInput = document.createElement('input');
  firstInput.className = 'first-column';
  var secondInput = document.createElement('input');
  secondInput.className = 'second-column';
  var thirdInput = document.createElement('input');
  thirdInput.className = 'third-column';

  columnCount.appendChild(newLi);
  firstList.appendChild(firstInput);
  secondList.appendChild(secondInput);
  thirdList.appendChild(thirdInput);
};

var removeLine = function() {
  columnCount.removeChild(columnCount.lastChild);
  firstList.removeChild(firstList.lastChild);
  secondList.removeChild(secondList.lastChild);
  thirdList.removeChild(thirdList.lastChild);
};

// сброс данных
var setDefaultSettings = function() {
  var form = document.querySelector('.calc');
  form.reset();
};

calculat.addEventListener('click', calculater);
calcAdd.addEventListener('click', addNewLine);
calcRemove.addEventListener('click', removeLine);
calcDefault.addEventListener('click', setDefaultSettings);
