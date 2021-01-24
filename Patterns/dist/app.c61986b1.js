// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"ts/factory.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Block = /*#__PURE__*/function () {
  function Block() {
    _classCallCheck(this, Block);
  }

  _createClass(Block, [{
    key: "print",
    value: function print() {}
  }]);

  return Block;
}();

var Grass = /*#__PURE__*/function (_Block) {
  _inherits(Grass, _Block);

  var _super = _createSuper(Grass);

  function Grass() {
    _classCallCheck(this, Grass);

    return _super.call(this);
  }

  _createClass(Grass, [{
    key: "print",
    value: function print() {
      console.log("Grass");
    }
  }]);

  return Grass;
}(Block);

var Dirt = /*#__PURE__*/function (_Block2) {
  _inherits(Dirt, _Block2);

  var _super2 = _createSuper(Dirt);

  function Dirt() {
    _classCallCheck(this, Dirt);

    return _super2.call(this);
  }

  _createClass(Dirt, [{
    key: "print",
    value: function print() {
      console.log("Dirt");
    }
  }]);

  return Dirt;
}(Block);

var Water = /*#__PURE__*/function (_Block3) {
  _inherits(Water, _Block3);

  var _super3 = _createSuper(Water);

  function Water() {
    _classCallCheck(this, Water);

    return _super3.call(this);
  }

  _createClass(Water, [{
    key: "print",
    value: function print() {
      console.log("Water");
    }
  }]);

  return Water;
}(Block);

var BlockFactory = /*#__PURE__*/function () {
  function BlockFactory() {
    _classCallCheck(this, BlockFactory);
  }

  _createClass(BlockFactory, [{
    key: "create",
    value: function create(blockType) {
      switch (blockType) {
        case "grass":
          return new Grass();

        case "dirt":
          return new Dirt();

        case "water":
          return new Water();

        default:
          throw new Error('Unknown message block type: ' + blockType);
      }
    }
  }]);

  return BlockFactory;
}();

exports.BlockFactory = BlockFactory;

function random_block() {
  var list = ["grass", "dirt", "water"];
  var index = Math.floor(Math.random() * Math.floor(list.length));
  return list[index];
}

exports.random_block = random_block;
},{}],"ts/singleton.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Singleton = /*#__PURE__*/function () {
  function Singleton() {
    _classCallCheck(this, Singleton);

    this.print();
  }

  _createClass(Singleton, [{
    key: "print",
    value: function print() {
      console.log("Singleton created!");
    }
  }], [{
    key: "get_instance",
    value: function get_instance() {
      if (!this.instance) {
        this.instance = new Singleton();
      }

      return this.instance;
    }
  }]);

  return Singleton;
}();

function test_singleton() {
  console.log("\nTesting Singleton!");
  var s1 = Singleton.get_instance();
  var s2 = Singleton.get_instance();

  if (s1 == s2) {
    console.log('Singleton works');
  } else {
    console.log('Singleton failed');
  }
}

exports.test_singleton = test_singleton;
},{}],"ts/state.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var StateMachine = /*#__PURE__*/function () {
  function StateMachine(state) {
    _classCallCheck(this, StateMachine);

    this.set_state(state);
  }

  _createClass(StateMachine, [{
    key: "set_state",
    value: function set_state(state) {
      console.log("StateMachine: Transition to " + state.constructor.name);
      this.state = state;
      this.state.set_machine(this);
    }
  }, {
    key: "current_state",
    value: function current_state() {
      return this.state.constructor.name;
    }
  }, {
    key: "request_display",
    value: function request_display() {
      this.state.display();
    }
  }, {
    key: "request_event",
    value: function request_event() {
      this.state.event();
    }
  }]);

  return StateMachine;
}();

exports.StateMachine = StateMachine;

var State = /*#__PURE__*/function () {
  function State() {
    _classCallCheck(this, State);
  }

  _createClass(State, [{
    key: "set_machine",
    value: function set_machine(stateMachine) {
      this.stateMachine = stateMachine;
    }
  }]);

  return State;
}();

var GameState = /*#__PURE__*/function (_State) {
  _inherits(GameState, _State);

  var _super = _createSuper(GameState);

  function GameState() {
    _classCallCheck(this, GameState);

    return _super.apply(this, arguments);
  }

  _createClass(GameState, [{
    key: "display",
    value: function display() {
      console.log('Display the game');
      this.stateMachine.set_state(new PauseState());
    }
  }, {
    key: "event",
    value: function event() {
      console.log('Handle events in game state');
      this.stateMachine.set_state(new PauseState());
    }
  }]);

  return GameState;
}(State);

exports.GameState = GameState;

var PauseState = /*#__PURE__*/function (_State2) {
  _inherits(PauseState, _State2);

  var _super2 = _createSuper(PauseState);

  function PauseState() {
    _classCallCheck(this, PauseState);

    return _super2.apply(this, arguments);
  }

  _createClass(PauseState, [{
    key: "display",
    value: function display() {
      console.log('Display the pause menu');
      this.stateMachine.set_state(new GameState());
    }
  }, {
    key: "event",
    value: function event() {
      console.log('Handle events in pause state');
      this.stateMachine.set_state(new GameState());
    }
  }]);

  return PauseState;
}(State);

exports.PauseState = PauseState;
},{}],"ts/adapter.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Archer = /*#__PURE__*/function () {
  function Archer() {
    _classCallCheck(this, Archer);
  }

  _createClass(Archer, [{
    key: "shoot",
    value: function shoot() {
      return "Shooting!";
    }
  }]);

  return Archer;
}();

var EnemyAdapter = /*#__PURE__*/function () {
  function EnemyAdapter() {
    _classCallCheck(this, EnemyAdapter);

    this.archer = new Archer();
  }

  _createClass(EnemyAdapter, [{
    key: "attack",
    value: function attack() {
      return this.archer.shoot();
    }
  }]);

  return EnemyAdapter;
}();

function test_adapter() {
  console.log("\nTesting Adapter!");
  var enemy = new EnemyAdapter();
  console.log(enemy.attack());
}

exports.test_adapter = test_adapter;
},{}],"ts/strategy.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Context = /*#__PURE__*/function () {
  function Context(strategy) {
    _classCallCheck(this, Context);

    this.set_strategy(strategy);
  }

  _createClass(Context, [{
    key: "set_strategy",
    value: function set_strategy(strategy) {
      this.strategy = strategy;
    }
  }, {
    key: "execute_algorithm",
    value: function execute_algorithm() {
      console.log("Sorting array");
      var result = this.strategy.algorithm(['a', 'b', 'c', 'd', 'e']);
      console.log(result.join(','));
    }
  }]);

  return Context;
}();

var Sort = /*#__PURE__*/function () {
  function Sort() {
    _classCallCheck(this, Sort);
  }

  _createClass(Sort, [{
    key: "algorithm",
    value: function algorithm(data) {
      return data.sort();
    }
  }]);

  return Sort;
}();

var Reverse = /*#__PURE__*/function () {
  function Reverse() {
    _classCallCheck(this, Reverse);
  }

  _createClass(Reverse, [{
    key: "algorithm",
    value: function algorithm(data) {
      return data.reverse();
    }
  }]);

  return Reverse;
}();

function test_strategy() {
  console.log("");
  var context = new Context(new Sort());
  console.log('Strategy: Normal sort');
  context.execute_algorithm();
  console.log('Strategy: Reverse sort');
  context.set_strategy(new Reverse());
  context.execute_algorithm();
}

exports.test_strategy = test_strategy;
},{}],"ts/facade.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Scoreboard = /*#__PURE__*/function () {
  function Scoreboard() {
    var scoreInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var score = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, Scoreboard);

    this.scoreInput = scoreInput || new ScoreInput();
    this.score = score || new Score();
  }

  _createClass(Scoreboard, [{
    key: "operation",
    value: function operation() {
      var result = 'Scoreboard:\n';
      result += this.scoreInput.input_score();
      result += this.score.get_score();
      return result;
    }
  }]);

  return Scoreboard;
}();

var ScoreInput = /*#__PURE__*/function () {
  function ScoreInput() {
    _classCallCheck(this, ScoreInput);
  }

  _createClass(ScoreInput, [{
    key: "input_score",
    value: function input_score() {
      return 'Input!\n';
    }
  }]);

  return ScoreInput;
}();

var Score = /*#__PURE__*/function () {
  function Score() {
    _classCallCheck(this, Score);
  }

  _createClass(Score, [{
    key: "get_score",
    value: function get_score() {
      return 'Score is ...\n';
    }
  }]);

  return Score;
}();

function test_facade() {
  var scoreInput = new ScoreInput();
  var score = new Score();
  var scoreboard = new Scoreboard(scoreInput, score);
  console.log("\n" + scoreboard.operation());
}

exports.test_facade = test_facade;
},{}],"ts/builder.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var HouseBuilder = /*#__PURE__*/function () {
  function HouseBuilder() {
    _classCallCheck(this, HouseBuilder);

    this.reset();
  }

  _createClass(HouseBuilder, [{
    key: "reset",
    value: function reset() {
      this.product = new House();
    }
  }, {
    key: "produce_roof",
    value: function produce_roof() {
      this.product.parts.push("Roof");
    }
  }, {
    key: "produce_walls",
    value: function produce_walls() {
      this.product.parts.push("Walls");
    }
  }, {
    key: "produce_door",
    value: function produce_door() {
      this.product.parts.push("Door");
    }
  }, {
    key: "get_product",
    value: function get_product() {
      var result = this.product;
      this.reset();
      return result;
    }
  }]);

  return HouseBuilder;
}();

var House = /*#__PURE__*/function () {
  function House() {
    _classCallCheck(this, House);

    this.parts = [];
  }

  _createClass(House, [{
    key: "list_parts",
    value: function list_parts() {
      console.log("Product parts: " + this.parts.join(", ") + "\n");
    }
  }]);

  return House;
}();

var Director = /*#__PURE__*/function () {
  function Director() {
    _classCallCheck(this, Director);
  }

  _createClass(Director, [{
    key: "set_builder",
    value: function set_builder(builder) {
      this.builder = builder;
    }
  }, {
    key: "build_minimal",
    value: function build_minimal() {
      this.builder.produce_roof();
    }
  }, {
    key: "build_full",
    value: function build_full() {
      this.builder.produce_roof();
      this.builder.produce_walls();
      this.builder.produce_door();
    }
  }]);

  return Director;
}();

function test_builder() {
  var director = new Director();
  var builder = new HouseBuilder();
  director.set_builder(builder);
  console.log("\nCreate minimal house");
  director.build_minimal();
  builder.get_product().list_parts();
  console.log("Create full house");
  director.build_full();
  builder.get_product().list_parts();
  console.log("Create custom house");
  builder.produce_roof();
  builder.produce_door();
  builder.get_product().list_parts();
}

exports.test_builder = test_builder;
},{}],"ts/observer.ts":[function(require,module,exports) {
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Physics = /*#__PURE__*/function () {
  function Physics() {
    _classCallCheck(this, Physics);

    this.state = 0;
    this.observers = [];
  }

  _createClass(Physics, [{
    key: "attach",
    value: function attach(observer) {
      var isExist = this.observers.includes(observer);

      if (isExist) {
        return console.log("Subject: Observer has been attached already.");
      }

      console.log("Subject: Attached an observer.");
      this.observers.push(observer);
    }
  }, {
    key: "detach",
    value: function detach(observer) {
      var observerIndex = this.observers.indexOf(observer);

      if (observerIndex == -1) {
        return console.log("Subject: Nonexistent observer.");
      }

      this.observers.splice(observerIndex, 1);
      console.log("Subject: Detached an observer.");
    }
  }, {
    key: "notify",
    value: function notify() {
      console.log("Subject: Notifying observers...");

      var _iterator = _createForOfIteratorHelper(this.observers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var observer = _step.value;
          observer.update(this);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "jump",
    value: function jump() {
      console.log("Jumping");
      this.state = 1;
      this.notify();
    }
  }]);

  return Physics;
}();

var Achievement = /*#__PURE__*/function () {
  function Achievement() {
    _classCallCheck(this, Achievement);
  }

  _createClass(Achievement, [{
    key: "update",
    value: function update(subject) {
      if (subject instanceof Physics && subject.state == 1) {
        console.log("Achievement Unlocked!");
      }
    }
  }]);

  return Achievement;
}();

function test_observer() {
  console.log("");
  var subject = new Physics();
  var observer = new Achievement();
  subject.attach(observer);
  subject.jump();
  subject.detach(observer);
  subject.jump();
}

exports.test_observer = test_observer;
},{}],"ts/pool.ts":[function(require,module,exports) {
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Particle = /*#__PURE__*/function () {
  function Particle() {
    _classCallCheck(this, Particle);

    this.lifetime = 3;
  }

  _createClass(Particle, [{
    key: "is_used",
    value: function is_used() {
      return this.lifetime > 0;
    }
  }, {
    key: "print",
    value: function print() {
      console.log("Particle");
    }
  }]);

  return Particle;
}();

var ParticlePool = /*#__PURE__*/function () {
  function ParticlePool() {
    _classCallCheck(this, ParticlePool);

    this.poolSize = 10;
    this.particlePool = [];
  }

  _createClass(ParticlePool, [{
    key: "get_particle",
    value: function get_particle() {
      var _iterator = _createForOfIteratorHelper(this.particlePool),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var particle = _step.value;

          if (!particle.is_used()) {
            return particle;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (this.particlePool.length < this.poolSize) {
        var part = new Particle();
        this.particlePool.push(part);
        return part;
      }

      return;
    }
  }, {
    key: "update",
    value: function update(particles) {
      var _iterator2 = _createForOfIteratorHelper(particles),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var particle = _step2.value;

          if (!particle.is_used()) {
            particle.lifetime = 3;
            this.remove(particles, particle);
          } else {
            particle.print();
            particle.lifetime -= 1;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "remove",
    value: function remove(particles, particle) {
      var particleIndex = particles.indexOf(particle);

      if (particleIndex != -1) {
        particles.splice(particleIndex, 1);
      }
    }
  }]);

  return ParticlePool;
}();

function test_pool() {
  console.log("");
  var particles = [];
  var particlePool = new ParticlePool();
  particles.push(particlePool.get_particle());
  particlePool.update(particles);
  particlePool.update(particles);
  particlePool.update(particles);
  particlePool.update(particles);
  particlePool.update(particles);
}

exports.test_pool = test_pool;
},{}],"app.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var factory_ts_1 = require("./ts/factory.ts");

var singleton_ts_1 = require("./ts/singleton.ts");

var state_ts_1 = require("./ts/state.ts");

var adapter_ts_1 = require("./ts/adapter.ts");

var strategy_ts_1 = require("./ts/strategy.ts");

var facade_ts_1 = require("./ts/facade.ts");

var builder_ts_1 = require("./ts/builder.ts");

var observer_ts_1 = require("./ts/observer.ts");

var pool_ts_1 = require("./ts/pool.ts");

var blockBtn = document.getElementById("blockBtn");
var stateBtn1 = document.getElementById("stateBtn1");
var stateBtn2 = document.getElementById("stateBtn2");
var factory = new factory_ts_1.BlockFactory();
var machine = new state_ts_1.StateMachine(new state_ts_1.PauseState());
blockBtn.addEventListener("click", function () {
  var block = factory.create(factory_ts_1.random_block());
  block.print();
});
stateBtn1.addEventListener("click", function () {
  console.log("");
  var currState = machine.current_state();
  console.log(currState);
  machine.request_display();
});
stateBtn2.addEventListener("click", function () {
  console.log("");
  var currState = machine.current_state();
  console.log(currState);
  machine.request_event();
});
singleton_ts_1.test_singleton();
adapter_ts_1.test_adapter();
strategy_ts_1.test_strategy();
facade_ts_1.test_facade();
builder_ts_1.test_builder();
observer_ts_1.test_observer();
pool_ts_1.test_pool();
},{"./ts/factory.ts":"ts/factory.ts","./ts/singleton.ts":"ts/singleton.ts","./ts/state.ts":"ts/state.ts","./ts/adapter.ts":"ts/adapter.ts","./ts/strategy.ts":"ts/strategy.ts","./ts/facade.ts":"ts/facade.ts","./ts/builder.ts":"ts/builder.ts","./ts/observer.ts":"ts/observer.ts","./ts/pool.ts":"ts/pool.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56970" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.ts"], null)
//# sourceMappingURL=/app.c61986b1.js.map