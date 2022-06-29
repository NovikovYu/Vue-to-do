"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

Vue.createApp({
  data: function data() {
    return {
      valueInput: "",
      needDoList: [],
      completeList: []
    };
  },
  methods: {
    handlyInput: function handlyInput(event) {
      this.valueInput = event.target.value;
    },
    addTask: function addTask() {
      if (this.valueInput === '') {
        return;
      }

      ;
      this.needDoList.push({
        title: this.valueInput,
        id: Math.random()
      });
      this.valueInput = '';
    },
    doCheck: function doCheck(index, type) {
      if (type === 'need') {
        var _this$completeList;

        var completeMask = this.needDoList.splice(index, 1);

        (_this$completeList = this.completeList).push.apply(_this$completeList, _toConsumableArray(completeMask));
      } else {
        var _this$needDoList;

        var noCompleteMask = this.completeList.splice(index, 1);

        (_this$needDoList = this.needDoList).push.apply(_this$needDoList, _toConsumableArray(noCompleteMask));
      }
    },
    removeMask: function removeMask(index, type) {
      var toDoList = type === 'need' ? this.needDoList : this.completeList;
      toDoList.splice(index, 1);
    }
  }
}).mount('#app');