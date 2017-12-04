'use strict';

var firstList = document.querySelector('.calc__first-column');
var secondList = document.querySelector('.calc__second-column');
var thirdList = document.querySelector('.calc__third-column');
var calculat = document.querySelector('.calc__calculate');
var calcAdd = document.querySelector('.calc-add');
var calcRemove = document.querySelector('.calc-remove');
var calcDefault = document.querySelector('.calc-default');
var columnCount = document.querySelector('.column-count');
var decision = document.querySelector('.decision');
var decisionAnswer = decision.querySelector('.decision__answer');
var decisionFormula = decision.querySelector('.decision__formula');
var decisionFormula2 = decision.querySelector('.decision__formula2');
var decisionPredict = document.querySelector('.decision__predict');
var decisionPiece = document.querySelector('.decision__piece');

var firstColumnList = [];
var secondColumnList = [];
var thirdColumnList = [];

var roundFunction = function(numberValue, countIndex) {
  var indexNumber = numberValue;
  return Math.round(indexNumber * countIndex) / countIndex;
};

// скользящая средняя
var calculateAverege = function(indexS, firstValueS, secondValueS, thirdValueS) {
  var totalValueS = (firstValueS * 1 + secondValueS * 1 + thirdValueS * 1) / 3;
  secondColumnList[indexS].value = roundFunction(totalValueS, 10000);
};
// ошибка
var calculateError = function(indexE, firstValueE, secondValueE) {
  var totalValueE = (firstValueE * 1 - secondValueE * 1) / firstValueE * 1 * 100;
  thirdColumnList[indexE].value = roundFunction(Math.abs(totalValueE), 1000000);
};

var calculater = function() {
  firstColumnList = firstList.querySelectorAll('.first-column');
  secondColumnList = secondList.querySelectorAll('.second-column');
  thirdColumnList = thirdList.querySelectorAll('.third-column');

  var countList = columnCount.children;
  var fourthColumn = document.querySelector('.fourth-column');
  var totalAveregeValueE = 0;

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

  decisionFormula.classList.remove('hidden');
  decisionFormula2.classList.remove('hidden');
  decisionPredict.classList.remove('hidden');
  decisionPiece.classList.remove('hidden');

  for (var l = 1; l < thirdColumnList.length - 1; l++) {
    totalAveregeValueE = totalAveregeValueE + Math.abs(thirdColumnList[l].value);
    var indexELenght = thirdColumnList.length - 2;

    decisionAnswer.textContent =
      'ε = ' +
      roundFunction(totalAveregeValueE, 100000) +
      ' / ' +
      indexELenght +
      ' = ' +
      roundFunction(totalAveregeValueE / indexELenght, 100000) +
      ' %';
  }

  var predictAnswerFirst = secondColumnList[secondColumnList.length - 2].value;
  var predictAnswerSecond =
    firstColumnList[firstColumnList.length - 1].value -
    firstColumnList[firstColumnList.length - 2].value;
  var predictAnswer = predictAnswerFirst * 1 + roundFunction(predictAnswerSecond * 1 / 3, 10000);

  decisionPredict.textContent =
    'Y' +
    (countList.length + 1) +
    ' = ' +
    secondColumnList[secondColumnList.length - 2].value +
    ' + ' +
    ' 1/3 * ' +
    '(' +
    firstColumnList[firstColumnList.length - 1].value +
    ' - ' +
    firstColumnList[firstColumnList.length - 2].value +
    ')' +
    ' = ' +
    secondColumnList[secondColumnList.length - 2].value +
    ' + ' +
    roundFunction(
      (firstColumnList[firstColumnList.length - 1].value -
        firstColumnList[firstColumnList.length - 2].value) /
        3,
      10000
    ) +
    ' = ' +
    predictAnswer;

  decisionPiece.textContent =
    '[' +
    Math.abs(predictAnswer - roundFunction(totalAveregeValueE / indexELenght, 100000)) +
    ';' +
    Math.abs(predictAnswer + roundFunction(totalAveregeValueE / indexELenght, 100000)) +
    ']';

  fourthColumn.value = roundFunction(totalAveregeValueE, 100000);
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
  decisionAnswer.textContent = '';
  decisionFormula.classList.add('hidden');
  decisionFormula2.classList.add('hidden');
  decisionPredict.classList.add('hidden');
  decisionPiece.classList.add('hidden');
};

calculat.addEventListener('click', calculater);
calcAdd.addEventListener('click', addNewLine);
calcRemove.addEventListener('click', removeLine);
calcDefault.addEventListener('click', setDefaultSettings);
