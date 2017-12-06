'Use strict';
(function() {
  var firstTaskColumnCount = document.querySelector('.calc-first__column-count');
  var firstTaskFirst = document.querySelector('.calc-first__first-column');
  var firstTaskSecond = document.querySelector('.calc-first__second-column');
  var firstTaskThird = document.querySelector('.calc-first__third-column');
  var firstTaskFourth = document.querySelector('.calc-first__fourth-column');
  var firstTaskFifth = document.querySelector('.calc-first__fifth-column');
  var firstTaskSixth = document.querySelector('.calc-first__sixth-column');

  var firstCalculate = document.querySelector('.calc-first__calculate');
  var firstRemove = document.querySelector('.calc-first__remove');
  var firstAdd = document.querySelector('.calc-first__add');
  var firstDefault = document.querySelector('.calc-first__default');

  var firstDecisionFormula3 = document.querySelector('.first__decision-formula3');
  var firstDecisionFormula4 = document.querySelector('.first__decision-formula4');

  var firstDecisionEY = document.querySelector('.first__decision-EY');
  var firstDecisionEX = document.querySelector('.first__decision-EX');
  var firstDecisionEYX = document.querySelector('.first__decision-EYX');
  var firstDecisionEXX = document.querySelector('.first__decision-EXX');
  var firstDecisionA = document.querySelector('.first__decision-a');
  var firstDecisionB = document.querySelector('.first__decision-b');
  var firstDecisionY11 = document.querySelector('.first__decision-Y11');
  var firstDecisionY12 = document.querySelector('.first__decision-Y12');
  var firstDecisionE = document.querySelector('.first__decision-E');

  var firstTaskFirstList = [];
  var firstTaskSecondList = [];
  var firstTaskThirdList = [];
  var firstTaskFourthList = [];
  var firstTaskFifthList = [];

  var calculateFirstTask = function() {
    var firstTaskTotalY = 0;
    var firstTaskTotalX = 0;
    var firstTaskTotalYX = 0;
    var firstTaskTotalXX = 0;

    var firstTaskTotalA = 0;
    var firstTaskTotalUpA = 0;
    var firstTaskTotalUpAA = 0;
    var firstTaskTotalDownA = 0;
    var firstTaskTotalDownAA = 0;

    var firstTaskTotalB = 0;
    var firstTaskTotalBB = 0;
    var firstTaskTotalBBB = 0;

    var firstTaskY11 = 0;
    var firstTaskY12 = 0;

    var firstTaskTotalM = 0;

    var firstTaskE = 0;

    firstTaskFirstList = firstTaskFirst.querySelectorAll('.calc-first__first');
    firstTaskSecondList = firstTaskSecond.querySelectorAll('.calc-first__second');
    firstTaskThirdList = firstTaskThird.querySelectorAll('.calc-first__third');
    firstTaskFourthList = firstTaskFourth.querySelectorAll('.calc-first__fourth');
    firstTaskFifthList = firstTaskFifth.querySelectorAll('.calc-first__fifth');
    firstTaskSixthList = firstTaskSixth.querySelectorAll('.calc-first__sixth');

    var indexMounth = firstTaskFirstList.length;

    for (var m = 0; m < firstTaskSecondList.length; m++) {
      firstTaskSecondList[m].value = m + 1;
      firstTaskThirdList[m].value = firstTaskFirstList[m].value * firstTaskSecondList[m].value;
      firstTaskFourthList[m].value = firstTaskSecondList[m].value * firstTaskSecondList[m].value;

      firstTaskTotalY = +firstTaskTotalY + +firstTaskFirstList[m].value;
      firstTaskTotalX = +firstTaskTotalX + +firstTaskSecondList[m].value;
      firstTaskTotalYX = +firstTaskTotalYX + +firstTaskThirdList[m].value;
      firstTaskTotalXX = +firstTaskTotalXX + +firstTaskFourthList[m].value;
    }

    firstTaskTotalUpA = +firstTaskTotalX * +firstTaskTotalY / indexMounth;
    firstTaskTotalUpAA = +firstTaskTotalYX - +firstTaskTotalUpA;
    firstTaskTotalDownA = +firstTaskTotalX * +firstTaskTotalX / indexMounth;
    firstTaskTotalDownAA = +firstTaskTotalXX - +firstTaskTotalDownA;
    firstTaskTotalA = +firstTaskTotalUpAA / +firstTaskTotalDownAA;

    firstTaskTotalB = +firstTaskTotalY / indexMounth;
    firstTaskTotalBB = +firstTaskTotalA * +firstTaskTotalX / indexMounth;
    firstTaskTotalBBB = +firstTaskTotalB - +firstTaskTotalBB;

    for (var n = 0; n < firstTaskSecondList.length; n++) {
      firstTaskFifthList[n].value = +firstTaskTotalA * (n + 1) + +firstTaskTotalBBB;
      firstTaskSixthList[n].value =
        Math.abs(+firstTaskFirstList[n].value - +firstTaskFifthList[n].value) /
        +firstTaskFirstList[n].value *
        100;
      firstTaskTotalM = +firstTaskTotalM + +firstTaskSixthList[n].value;
    }

    firstTaskE = +firstTaskTotalM / indexMounth;

    firstTaskY11 = +firstTaskTotalA * (+indexMounth + 1) + firstTaskTotalBBB;
    firstTaskY12 = +firstTaskTotalA * (+indexMounth + 2) + firstTaskTotalBBB;

    firstDecisionEY.textContent = 'ΣY = ' + firstTaskTotalY;
    firstDecisionEX.textContent = 'ΣX = ' + firstTaskTotalX;
    firstDecisionEYX.textContent = 'ΣYX = ' + firstTaskTotalYX;
    firstDecisionEXX.textContent = 'ΣX² = ' + firstTaskTotalXX;
    firstDecisionEXX.textContent = 'Σ(ошибка) = ' + firstTaskTotalM;

    firstDecisionFormula3.classList.remove('hidden');
    firstDecisionFormula4.classList.remove('hidden');

    firstDecisionA.textContent =
      'a = ' +
      '[' +
      firstTaskTotalYX +
      ' − ' +
      '(' +
      firstTaskTotalX +
      ' * ' +
      firstTaskTotalY +
      ') ' +
      '/ ' +
      indexMounth +
      ']' +
      ' / ' +
      firstTaskTotalXX +
      ' − ' +
      '(' +
      firstTaskTotalX +
      ' * ' +
      firstTaskTotalX +
      ')' +
      ' / ' +
      indexMounth +
      ' = ' +
      '(' +
      firstTaskTotalYX +
      ' − ' +
      firstTaskTotalUpA +
      ')' +
      ' / ' +
      '(' +
      firstTaskTotalXX +
      ' − ' +
      firstTaskTotalDownA +
      ')' +
      ' = ' +
      firstTaskTotalA;

    firstDecisionB.textContent =
      'b = (' +
      firstTaskTotalY +
      ' / ' +
      indexMounth +
      ')' +
      ' − ' +
      '(' +
      firstTaskTotalA +
      ' * ' +
      firstTaskTotalX +
      ' / ' +
      indexMounth +
      ')' +
      ' = ' +
      firstTaskTotalB +
      ' − ' +
      firstTaskTotalBB +
      ' = ' +
      firstTaskTotalBBB;

    firstDecisionY11.textContent = 'Y11 = ' + firstTaskY11;
    firstDecisionY12.textContent = 'Y12 = ' + firstTaskY12;
    firstDecisionE.textContent =
      'ε = ' + firstTaskTotalM + ' / ' + indexMounth + ' = ' + firstTaskE + '%';
  };

  // удаление, добавление новой строки

  var firstTaskaddNewLine = function() {
    var firstTaskNewLi = document.createElement('li');
    var firstTaskFirstInput = document.createElement('input');
    firstTaskFirstInput.className = 'calc-first__first';
    var firstTaskSecondInput = document.createElement('input');
    firstTaskSecondInput.className = 'calc-first__second';
    var firstTaskThirdInput = document.createElement('input');
    firstTaskThirdInput.className = 'calc-first__third';
    var firstTaskFourthInput = document.createElement('input');
    firstTaskFourthInput.className = 'calc-first__fourth';
    var firstTaskFifthInput = document.createElement('input');
    firstTaskFifthInput.className = 'calc-first__fifth';
    var firstTaskSixthInput = document.createElement('input');
    firstTaskSixthInput.className = 'calc-first__sixth';

    firstTaskColumnCount.appendChild(firstTaskNewLi);
    firstTaskFirst.appendChild(firstTaskFirstInput);
    firstTaskSecond.appendChild(firstTaskSecondInput);
    firstTaskThird.appendChild(firstTaskThirdInput);
    firstTaskFourth.appendChild(firstTaskFourthInput);
    firstTaskFifth.appendChild(firstTaskFifthInput);
    firstTaskSixth.appendChild(firstTaskSixthInput);
  };

  var firstTaskRemoveLine = function() {
    firstTaskColumnCount.removeChild(firstTaskColumnCount.lastChild);
    firstTaskFirst.removeChild(firstTaskFirst.lastChild);
    firstTaskSecond.removeChild(firstTaskSecond.lastChild);
    firstTaskThird.removeChild(firstTaskThird.lastChild);
    firstTaskFourth.removeChild(firstTaskFourth.lastChild);
    firstTaskFifth.removeChild(firstTaskFifth.lastChild);
    firstTaskSixth.removeChild(firstTaskSixth.lastChild);
  };

  //сброс
  var firstTaskSetDefaultSettings = function() {
    var firstForm = document.querySelector('.calc-first');
    firstForm.reset();

    firstDecisionFormula3.classList.add('hidden');
    firstDecisionFormula4.classList.add('hidden');

    firstDecisionEY.textContent = '';
    firstDecisionEX.textContent = '';
    firstDecisionEYX.textContent = '';
    firstDecisionEXX.textContent = '';
    firstDecisionA.textContent = '';
    firstDecisionB.textContent = '';
    firstDecisionY11.textContent = '';
    firstDecisionY12.textContent = '';
    firstDecisionE.textContent = '';
  };

  firstCalculate.addEventListener('click', calculateFirstTask);
  firstAdd.addEventListener('click', firstTaskaddNewLine);
  firstRemove.addEventListener('click', firstTaskRemoveLine);
  firstDefault.addEventListener('click', firstTaskSetDefaultSettings);
})();
