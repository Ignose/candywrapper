/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  main: () => (/* binding */ main)
});

;// CONCATENATED MODULE: external "kolmafia"
const external_kolmafia_namespaceObject = require("kolmafia");
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/args.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* eslint-disable @typescript-eslint/no-explicit-any */

var Args = /*#__PURE__*/function () {
  function Args() {
    _classCallCheck(this, Args);
  }
  _createClass(Args, null, [{
    key: "custom",
    value: function custom(spec, _parser, valueHelpName) {
      var _a, _b;
      var raw_options = (_a = spec.options) === null || _a === void 0 ? void 0 : _a.map(option => option[0]);
      // Check that the default value actually appears in the options.
      if ("default" in spec && raw_options) {
        if (!raw_options.includes(spec.default)) {
          throw "Invalid default value ".concat(spec.default);
        }
      }
      return _objectSpread(_objectSpread({}, spec), {}, {
        valueHelpName: valueHelpName,
        parser: value => {
          var parsed_value = _parser(value);
          if (parsed_value === undefined || parsed_value instanceof ParseError) return parsed_value;
          if (raw_options) {
            if (!raw_options.includes(parsed_value)) {
              return new ParseError("received ".concat(value, " which was not in the allowed options"));
            }
          }
          return parsed_value;
        },
        options: (_b = spec.options) === null || _b === void 0 ? void 0 : _b.map(a => ["".concat(a[0]), a[1]])
      });
    }
  }, {
    key: "arrayFromArg",
    value: function arrayFromArg(spec, argFromSpec) {
      var _a, _b, _c;
      // First, construct a non-array version of this argument.
      // We do this by calling argFromSpec in order to extract the parser and
      // valueHelpName (to make it easier to define the functions below).
      //
      // The default argument of an ArraySpec is of type T[], which causes
      // problems, so we must remove it.
      var spec_without_default = _objectSpread({}, spec); // Avoid "the operand of a 'delete' operator must be optional"
      if ("default" in spec_without_default) delete spec_without_default["default"];
      var arg = argFromSpec.call(this, spec_without_default);
      // Next, check that all default values actually appear in the options.
      var raw_options = (_a = spec.options) === null || _a === void 0 ? void 0 : _a.map(option => option[0]);
      if ("default" in spec && raw_options) {
        var _iterator = _createForOfIteratorHelper(spec.default),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var default_entry = _step.value;
            if (!raw_options.includes(default_entry)) throw "Invalid default value ".concat(spec.default);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      var separator = (_b = spec.separator) !== null && _b !== void 0 ? _b : ",";
      var arrayParser = value => {
        // Split the array
        var values = value.split(separator);
        if (!spec.noTrim) values = values.map(v => v.trim());
        // Parse all values, return the first error found if any
        var result = values.map(v => arg.parser(v));
        var error = result.find(v => v instanceof ParseError);
        if (error) return error;
        var failure_index = result.indexOf(undefined);
        if (failure_index !== -1) return new ParseError("components expected ".concat(arg.valueHelpName, " but could not parse ").concat(values[failure_index]));
        // Otherwise, all values are good
        return result;
      };
      return _objectSpread(_objectSpread({}, spec), {}, {
        valueHelpName: "".concat(arg.valueHelpName).concat(separator, " ").concat(arg.valueHelpName).concat(separator, " ..."),
        parser: arrayParser,
        options: (_c = spec.options) === null || _c === void 0 ? void 0 : _c.map(a => ["".concat(a[0]), a[1]])
      });
    }
  }, {
    key: "string",
    value: function string(spec) {
      return this.custom(spec, value => value, "TEXT");
    }
  }, {
    key: "strings",
    value: function strings(spec) {
      return this.arrayFromArg(spec, this.string);
    }
  }, {
    key: "number",
    value: function number(spec) {
      return this.custom(spec, value => isNaN(Number(value)) ? undefined : Number(value), "NUMBER");
    }
  }, {
    key: "numbers",
    value: function numbers(spec) {
      return this.arrayFromArg(spec, this.number);
    }
  }, {
    key: "boolean",
    value: function boolean(spec) {
      return this.custom(spec, value => {
        if (value.toLowerCase() === "true") return true;
        if (value.toLowerCase() === "false") return false;
        return undefined;
      }, "BOOLEAN");
    }
  }, {
    key: "booleans",
    value: function booleans(spec) {
      return this.arrayFromArg(spec, this.boolean);
    }
  }, {
    key: "flag",
    value: function flag(spec) {
      return this.custom(spec, value => {
        if (value.toLowerCase() === "true") return true;
        if (value.toLowerCase() === "false") return false;
        return undefined;
      }, "FLAG");
    }
  }, {
    key: "class",
    value: function _class(spec) {
      return this.custom(spec, value => {
        var match = external_kolmafia_namespaceObject.Class.get(value);
        // Class.get does fuzzy matching:
        //  e.g. Class.get("sc") returns disco bandit.
        // To avoid this foot-gun, only return exact matches or id lookups.
        if (match.toString().toUpperCase() === value.toString().toUpperCase()) return match;
        if (!isNaN(Number(value))) return match;
        return undefined;
      }, "CLASS");
    }
  }, {
    key: "classes",
    value: function classes(spec) {
      return this.arrayFromArg(spec, this.class);
    }
  }, {
    key: "effect",
    value: function effect(spec) {
      return this.custom(spec, external_kolmafia_namespaceObject.Effect.get, "EFFECT");
    }
  }, {
    key: "effects",
    value: function effects(spec) {
      return this.arrayFromArg(spec, this.effect);
    }
  }, {
    key: "familiar",
    value: function familiar(spec) {
      return this.custom(spec, external_kolmafia_namespaceObject.Familiar.get, "FAMILIAR");
    }
  }, {
    key: "familiars",
    value: function familiars(spec) {
      return this.arrayFromArg(spec, this.familiar);
    }
  }, {
    key: "item",
    value: function item(spec) {
      return this.custom(spec, external_kolmafia_namespaceObject.Item.get, "ITEM");
    }
  }, {
    key: "items",
    value: function items(spec) {
      return this.arrayFromArg(spec, this.item);
    }
  }, {
    key: "location",
    value: function location(spec) {
      return this.custom(spec, external_kolmafia_namespaceObject.Location.get, "LOCATION");
    }
  }, {
    key: "locations",
    value: function locations(spec) {
      return this.arrayFromArg(spec, this.location);
    }
  }, {
    key: "monster",
    value: function monster(spec) {
      return this.custom(spec, external_kolmafia_namespaceObject.Monster.get, "MONSTER");
    }
  }, {
    key: "monsters",
    value: function monsters(spec) {
      return this.arrayFromArg(spec, this.monster);
    }
  }, {
    key: "path",
    value: function path(spec) {
      return this.custom(spec, external_kolmafia_namespaceObject.Path.get, "PATH");
    }
  }, {
    key: "paths",
    value: function paths(spec) {
      return this.arrayFromArg(spec, this.path);
    }
  }, {
    key: "skill",
    value: function skill(spec) {
      return this.custom(spec, external_kolmafia_namespaceObject.Skill.get, "SKILL");
    }
  }, {
    key: "skills",
    value: function skills(spec) {
      return this.arrayFromArg(spec, this.skill);
    }
    /**
     * Create a group of arguments that will be printed separately in the help.
     *
     * Note that keys in the group must still be globally distinct.
     *
     * @param groupName The display name for the group in help.
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     */
  }, {
    key: "group",
    value: function group(groupName, args) {
      return {
        name: groupName,
        args: args
      };
    }
    /**
     * Create a set of input arguments for a script.
     * @param scriptName Prefix for property names; often the name of the script.
     * @param scriptHelp Brief description of this script, for the help message.
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     * @param options Config options for the args and arg parser.
     * @returns An object which can hold parsed argument values. The keys of this
     *    object are identical to the keys in 'args'.
     */
  }, {
    key: "create",
    value: function create(scriptName, scriptHelp, args, options) {
      var _objectSpread2;
      _traverse(args, (keySpec, key) => {
        if (key === "help" || keySpec.key === "help") throw "help is a reserved argument name";
      });
      var argsWithHelp = _objectSpread(_objectSpread({}, args), {}, {
        help: this.flag({
          help: "Show this message and exit.",
          setting: ""
        })
      });
      // Create an object to hold argument results, with a default value for
      // each argument.
      var res = _objectSpread(_objectSpread({}, _loadDefaultValues(argsWithHelp)), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, specSymbol, argsWithHelp), _defineProperty(_objectSpread2, scriptSymbol, scriptName), _defineProperty(_objectSpread2, scriptHelpSymbol, scriptHelp), _defineProperty(_objectSpread2, optionsSymbol, options !== null && options !== void 0 ? options : {}), _objectSpread2));
      if (options === null || options === void 0 ? void 0 : options.positionalArgs) {
        var keys = [];
        var metadata = Args.getMetadata(res);
        metadata.traverse((keySpec, key) => {
          var _a;
          keys.push((_a = keySpec.key) !== null && _a !== void 0 ? _a : key);
        });
        var _iterator2 = _createForOfIteratorHelper(options.positionalArgs),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var arg = _step2.value;
            if (!keys.includes(arg)) throw "Unknown key for positional arg: ".concat(arg);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return res;
    }
    /**
     * Parse the command line input into the provided script arguments.
     * @param args An object to hold the parsed argument values, from Args.create(*).
     * @param command The command line input.
     * @param includeSettings If true, parse values from settings as well.
     */
  }, {
    key: "fill",
    value: function fill(args, command) {
      var includeSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var _a;
      var metadata = Args.getMetadata(args);
      // Load the list of keys and flags from the arg spec
      var keys = new Set();
      var flags = new Set();
      metadata.traverse((keySpec, key) => {
        var _a;
        var name = (_a = keySpec.key) !== null && _a !== void 0 ? _a : key;
        if (flags.has(name) || keys.has(name)) throw "Duplicate arg key ".concat(name, " is not allowed");
        if (keySpec.valueHelpName === "FLAG") flags.add(name);else keys.add(name);
      });
      // Parse values from settings.
      if (includeSettings) {
        metadata.traverseAndMaybeSet(args, (keySpec, key) => {
          var _a, _b;
          var setting = (_a = keySpec.setting) !== null && _a !== void 0 ? _a : "".concat(metadata.scriptName, "_").concat((_b = keySpec.key) !== null && _b !== void 0 ? _b : key);
          if (setting === "") return undefined; // no setting
          var value_str = (0,external_kolmafia_namespaceObject.getProperty)(setting);
          if (value_str === "") return undefined; // no setting
          return parseAndValidate(keySpec, "Setting ".concat(setting), value_str);
        });
      }
      // Parse new argments from the command line
      if (command === undefined || command === "") return;
      var parsed = new CommandParser(command, keys, flags, (_a = metadata.options.positionalArgs) !== null && _a !== void 0 ? _a : []).parse();
      metadata.traverseAndMaybeSet(args, (keySpec, key) => {
        var _a;
        var argKey = (_a = keySpec.key) !== null && _a !== void 0 ? _a : key;
        var value_str = parsed.get(argKey);
        if (value_str === undefined) return undefined; // no setting
        return parseAndValidate(keySpec, "Argument ".concat(argKey), value_str);
      });
    }
    /**
     * Parse command line input into a new set of script arguments.
     * @param scriptName Prefix to use in property names; typically the name of the script.
     * @param scriptHelp Brief description of this script, for the help message.
     * @param spec An object specifying the script arguments.
     * @param command The command line input.
     * @param options Config options for the args and arg parser.
     */
  }, {
    key: "parse",
    value: function parse(scriptName, scriptHelp, spec, command, options) {
      var args = this.create(scriptName, scriptHelp, spec, options);
      this.fill(args, command);
      return args;
    }
    /**
     * Print a description of the script arguments to the CLI.
     *
     * First, all top-level argument descriptions are printed in the order they
     * were defined. Afterwards, descriptions for groups of arguments are printed
     * in the order they were defined.
     *
     * @param args An object of parsed arguments, from Args.create(*).
     * @param maxOptionsToDisplay If given, do not list more than this many options for each arg.
     */
  }, {
    key: "showHelp",
    value: function showHelp(args, maxOptionsToDisplay) {
      var _a;
      var metadata = Args.getMetadata(args);
      (0,external_kolmafia_namespaceObject.printHtml)("".concat(metadata.scriptHelp));
      (0,external_kolmafia_namespaceObject.printHtml)("");
      (0,external_kolmafia_namespaceObject.printHtml)("<b>".concat((_a = metadata.options.defaultGroupName) !== null && _a !== void 0 ? _a : "Options", ":</b>"));
      metadata.traverse((arg, key) => {
        var _a, _b, _c, _d, _e;
        if (arg.hidden) return;
        var nameText = "<font color='".concat((0,external_kolmafia_namespaceObject.isDarkMode)() ? "yellow" : "blue", "'>").concat((_a = arg.key) !== null && _a !== void 0 ? _a : key, "</font>");
        var valueText = arg.valueHelpName === "FLAG" ? "" : "<font color='purple'>".concat(arg.valueHelpName, "</font>");
        var helpText = (_b = arg.help) !== null && _b !== void 0 ? _b : "";
        var defaultText = "default" in arg ? "<font color='#888888'>[default: ".concat(arg.default, "]</font>") : "";
        var settingText = arg.setting === "" ? "" : "<font color='#888888'>[setting: ".concat((_c = arg.setting) !== null && _c !== void 0 ? _c : "".concat(metadata.scriptName, "_").concat((_d = arg.key) !== null && _d !== void 0 ? _d : key), "]</font>");
        (0,external_kolmafia_namespaceObject.printHtml)("&nbsp;&nbsp;".concat([nameText, valueText, "-", helpText, defaultText, settingText].join(" ")));
        var valueOptions = (_e = arg.options) !== null && _e !== void 0 ? _e : [];
        if (valueOptions.length < (maxOptionsToDisplay !== null && maxOptionsToDisplay !== void 0 ? maxOptionsToDisplay : Number.MAX_VALUE)) {
          var _iterator3 = _createForOfIteratorHelper(valueOptions),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var option = _step3.value;
              if (option.length === 1 || option[1] === undefined) {
                (0,external_kolmafia_namespaceObject.printHtml)("&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>".concat(nameText, "</font> ").concat(option[0]));
              } else {
                (0,external_kolmafia_namespaceObject.printHtml)("&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>".concat(nameText, "</font> ").concat(option[0], " - ").concat(option[1]));
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }, group => {
        (0,external_kolmafia_namespaceObject.printHtml)("");
        (0,external_kolmafia_namespaceObject.printHtml)("<b>".concat(group.name, ":</b>"));
      });
    }
    /**
     * Load the metadata information for a set of arguments. Only for advanced usage.
     *
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     * @returns A class containing metadata information.
     */
  }, {
    key: "getMetadata",
    value: function getMetadata(args) {
      return new WrappedArgMetadata(args);
    }
  }]);
  return Args;
}();
var ParseError = /*#__PURE__*/_createClass(function ParseError(message) {
  _classCallCheck(this, ParseError);
  this.message = message;
});
/**
 * Metadata for the parsed arguments.
 *
 * This information is hidden within the parsed argument object so that it
 * is invisible to the user but available to fill(*) and showHelp(*).
 */
var specSymbol = Symbol("spec");
var scriptSymbol = Symbol("script");
var scriptHelpSymbol = Symbol("scriptHelp");
var optionsSymbol = Symbol("options");
/**
 * Parse a string into a value for a given argument, throwing if the parsing fails.
 * @param arg An argument that takes values in T.
 * @param source A description of where this value came from, for the error message.
 * @param value The value to parse.
 * @returns the parsed value.
 */
function parseAndValidate(arg, source, value) {
  var parsed_value;
  try {
    parsed_value = arg.parser(value);
  } catch (_a) {
    parsed_value = undefined;
  }
  if (parsed_value === undefined) throw "".concat(source, " expected ").concat(arg.valueHelpName, " but could not parse ").concat(value);
  if (parsed_value instanceof ParseError) throw "".concat(source, " ").concat(parsed_value.message);
  return parsed_value;
}
/**
 * A class that reveals the hidden metadata and specs for arguments.
 *
 * Only for advanced usage.
 */
var WrappedArgMetadata = /*#__PURE__*/function () {
  function WrappedArgMetadata(args) {
    _classCallCheck(this, WrappedArgMetadata);
    this.spec = args[specSymbol];
    this.scriptName = args[scriptSymbol];
    this.scriptHelp = args[scriptHelpSymbol];
    this.options = args[optionsSymbol];
  }
  /**
   * Create a parsed args object from this spec using all default values.
   */
  _createClass(WrappedArgMetadata, [{
    key: "loadDefaultValues",
    value: function loadDefaultValues() {
      return _loadDefaultValues(this.spec);
    }
    /**
     * Traverse the spec and possibly generate a value for each argument.
     *
     * @param result The object to hold the resulting argument values, typically
     *    the result of loadDefaultValues().
     * @param setTo A function to generate an argument value from each arg spec.
     *    If this function returns undefined, then the argument value is unchanged.
     */
  }, {
    key: "traverseAndMaybeSet",
    value: function traverseAndMaybeSet(result, setTo) {
      return _traverseAndMaybeSet(this.spec, result, setTo);
    }
    /**
     * Traverse the spec and call a method for each argument.
     *
     * @param process A function to call at each arg spec.
     */
  }, {
    key: "traverse",
    value: function traverse(process, onGroup) {
      return _traverse(this.spec, process, onGroup);
    }
  }]);
  return WrappedArgMetadata;
}();
/**
 * Create a parsed args object from a spec using all default values.
 *
 * @param spec The spec for all arguments.
 */
function _loadDefaultValues(spec) {
  var result = {};
  for (var k in spec) {
    var argSpec = spec[k];
    if ("args" in argSpec) {
      result[k] = _loadDefaultValues(argSpec.args);
    } else {
      if ("default" in argSpec) result[k] = argSpec.default;else result[k] = undefined;
    }
  }
  return result;
}
/**
 * Traverse the spec and possibly generate a value for each argument.
 *
 * @param spec The spec for all arguments.
 * @param result The object to hold the resulting argument values.
 * @param setTo A function to generate an argument value from each arg spec.
 *    If this function returns undefined, then the argument value is unchanged.
 */
function _traverseAndMaybeSet(spec, result, setTo) {
  var groups = [];
  for (var k in spec) {
    var argSpec = spec[k];
    if ("args" in argSpec) {
      groups.push([argSpec, k]);
    } else {
      var value = setTo(argSpec, k);
      if (value === undefined) continue;
      result[k] = value;
    }
  }
  for (var _i = 0, _groups = groups; _i < _groups.length; _i++) {
    var group_and_key = _groups[_i];
    _traverseAndMaybeSet(group_and_key[0].args, result[group_and_key[1]], setTo);
  }
}
/**
 * Traverse the spec and possibly generate a value for each argument.
 *
 * @param spec The spec for all arguments.
 * @param process A function to call at each arg spec.
 */
function _traverse(spec, process, onGroup) {
  var groups = [];
  for (var k in spec) {
    var argSpec = spec[k];
    if ("args" in argSpec) {
      groups.push([argSpec, k]);
    } else {
      process(argSpec, k);
    }
  }
  for (var _i2 = 0, _groups2 = groups; _i2 < _groups2.length; _i2++) {
    var group_and_key = _groups2[_i2];
    onGroup === null || onGroup === void 0 ? void 0 : onGroup(group_and_key[0], group_and_key[1]);
    _traverse(group_and_key[0].args, process, onGroup);
  }
}
/**
 * A parser to extract key/value pairs from a command line input.
 * @member command The command line input.
 * @member keys The set of valid keys that can appear.
 * @member flags The set of valid flags that can appear.
 * @member index An internal marker for the progress of the parser over the input.
 */
var CommandParser = /*#__PURE__*/function () {
  function CommandParser(command, keys, flags, positionalArgs) {
    _classCallCheck(this, CommandParser);
    this.command = command;
    this.index = 0;
    this.keys = keys;
    this.flags = flags;
    this.positionalArgs = positionalArgs;
    this.positionalArgsParsed = 0;
  }
  /**
   * Perform the parsing of (key, value) pairs.
   * @returns The set of extracted (key, value) pairs.
   */
  _createClass(CommandParser, [{
    key: "parse",
    value: function parse() {
      var _a, _b, _c, _d;
      this.index = 0; // reset the parser
      var result = new Map();
      while (!this.finished()) {
        // A flag F may appear as !F to be parsed as false.
        var parsing_negative_flag = false;
        if (this.peek() === "!") {
          parsing_negative_flag = true;
          this.consume(["!"]);
        }
        var startIndex = this.index;
        var key = this.parseKey();
        if (result.has(key)) {
          throw "Duplicate key ".concat(key, " (first set to ").concat((_a = result.get(key)) !== null && _a !== void 0 ? _a : "", ")");
        }
        if (this.flags.has(key)) {
          // The key corresponds to a flag.
          // Parse [key] as true and ![key] as false.
          result.set(key, parsing_negative_flag ? "false" : "true");
          if (this.peek() === "=") throw "Flag ".concat(key, " cannot be assigned a value");
          if (!this.finished()) this.consume([" "]);
          this.prevUnquotedKey = undefined;
        } else if (this.keys.has(key)) {
          // Parse [key]=[value] or [key] [value]
          this.consume(["=", " "]);
          var value = this.parseValue();
          if (["'", '"'].includes((_b = this.prev()) !== null && _b !== void 0 ? _b : "")) this.prevUnquotedKey = undefined;else this.prevUnquotedKey = key;
          if (!this.finished()) this.consume([" "]);
          result.set(key, value);
        } else if (this.positionalArgsParsed < this.positionalArgs.length && this.peek() !== "=") {
          // Parse [value] as the next positional arg
          var positionalKey = this.positionalArgs[this.positionalArgsParsed];
          this.positionalArgsParsed++;
          this.index = startIndex; // back up to reparse the key as a value
          var _value = this.parseValue();
          if (["'", '"'].includes((_c = this.prev()) !== null && _c !== void 0 ? _c : "")) this.prevUnquotedKey = undefined;else this.prevUnquotedKey = key;
          if (!this.finished()) this.consume([" "]);
          if (result.has(positionalKey)) throw "Cannot assign ".concat(_value, " to ").concat(positionalKey, " (positionally) since ").concat(positionalKey, " was already set to ").concat((_d = result.get(positionalKey)) !== null && _d !== void 0 ? _d : "");
          result.set(positionalKey, _value);
        } else {
          // Key not found; include a better error message if it is possible for quotes to have been missed
          if (this.prevUnquotedKey && this.peek() !== "=") throw "Unknown argument: ".concat(key, " (if this should have been parsed as part of ").concat(this.prevUnquotedKey, ", you should surround the entire value in quotes)");else throw "Unknown argument: ".concat(key);
        }
      }
      return result;
    }
    /**
     * @returns True if the entire command has been parsed.
     */
  }, {
    key: "finished",
    value: function finished() {
      return this.index >= this.command.length;
    }
    /**
     * @returns The next character to parse, if it exists.
     */
  }, {
    key: "peek",
    value: function peek() {
      if (this.index >= this.command.length) return undefined;
      return this.command.charAt(this.index);
    }
    /**
     * @returns The character just parsed, if it exists.
     */
  }, {
    key: "prev",
    value: function prev() {
      if (this.index <= 0) return undefined;
      if (this.index >= this.command.length + 1) return undefined;
      return this.command.charAt(this.index - 1);
    }
    /**
     * Advance the internal marker over the next expected character.
     * Throws an error on unexpected characters.
     *
     * @param allowed Characters that are expected.
     */
  }, {
    key: "consume",
    value: function consume(allowed) {
      var _a;
      if (this.finished()) throw "Expected ".concat(allowed);
      if (allowed.includes((_a = this.peek()) !== null && _a !== void 0 ? _a : "")) {
        this.index += 1;
      }
    }
    /**
     * Find the next occurance of one of the provided characters, or the end of
     * the string if the characters never appear again.
     *
     * @param searchValue The characters to locate.
     */
  }, {
    key: "findNext",
    value: function findNext(searchValue) {
      var result = this.command.length;
      var _iterator4 = _createForOfIteratorHelper(searchValue),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var value = _step4.value;
          var index = this.command.indexOf(value, this.index);
          if (index !== -1 && index < result) result = index;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return result;
    }
    /**
     * Starting from the internal marker, parse a single key.
     * This also advances the internal marker.
     *
     * @returns The next key.
     */
  }, {
    key: "parseKey",
    value: function parseKey() {
      var keyEnd = this.findNext(["=", " "]);
      var key = this.command.substring(this.index, keyEnd);
      this.index = keyEnd;
      return key;
    }
    /**
     * Starting from the internal marker, parse a single value.
     * This also advances the internal marker.
     *
     * Values are a single word or enclosed in matching quotes, i.e. one of:
     *    "[^"]*"
     *    '[^']*"
     *    [^'"][^ ]*
     *
     * @returns The next value.
     */
  }, {
    key: "parseValue",
    value: function parseValue() {
      var _a, _b;
      var valueEnder = " ";
      var quotes = ["'", '"'];
      if (quotes.includes((_a = this.peek()) !== null && _a !== void 0 ? _a : "")) {
        valueEnder = (_b = this.peek()) !== null && _b !== void 0 ? _b : ""; // The value is everything until the next quote
        this.consume([valueEnder]); // Consume opening quote
      }

      var valueEnd = this.findNext([valueEnder]);
      var value = this.command.substring(this.index, valueEnd);
      if (valueEnder !== " " && valueEnd === this.command.length) {
        throw "No closing ".concat(valueEnder, " found for ").concat(valueEnder).concat(value);
      }
      // Consume the value (and closing quote)
      this.index = valueEnd;
      if (valueEnder !== " ") this.consume([valueEnder]);
      return value;
    }
  }]);
  return CommandParser;
}();
;// CONCATENATED MODULE: ./node_modules/libram/dist/logger.js
var _defaultHandlers;
function logger_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function logger_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, logger_toPropertyKey(descriptor.key), descriptor); } }
function logger_createClass(Constructor, protoProps, staticProps) { if (protoProps) logger_defineProperties(Constructor.prototype, protoProps); if (staticProps) logger_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function logger_defineProperty(obj, key, value) { key = logger_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function logger_toPropertyKey(arg) { var key = logger_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function logger_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var LogLevels;
(function (LogLevels) {
  LogLevels[LogLevels["NONE"] = 0] = "NONE";
  LogLevels[LogLevels["ERROR"] = 1] = "ERROR";
  LogLevels[LogLevels["WARNING"] = 2] = "WARNING";
  LogLevels[LogLevels["INFO"] = 3] = "INFO";
  LogLevels[LogLevels["DEBUG"] = 4] = "DEBUG";
})(LogLevels || (LogLevels = {}));
var defaultHandlers = (_defaultHandlers = {}, logger_defineProperty(_defaultHandlers, LogLevels.INFO, message => {
  (0,external_kolmafia_namespaceObject.printHtml)("<b>[Libram Info]</b> ".concat(message));
  (0,external_kolmafia_namespaceObject.logprint)("[Libram] ".concat(message));
  return;
}), logger_defineProperty(_defaultHandlers, LogLevels.WARNING, message => {
  (0,external_kolmafia_namespaceObject.printHtml)("<span style=\"background: orange; color: white;\"><b>[Libram Warning]</b> ".concat(message, "</span>"));
  (0,external_kolmafia_namespaceObject.logprint)("[Libram] ".concat(message));
  return;
}), logger_defineProperty(_defaultHandlers, LogLevels.ERROR, error => {
  (0,external_kolmafia_namespaceObject.printHtml)("<span style=\"background: red; color: white;\"><b>[Libram Error]</b> ".concat(error.toString(), "</span>"));
  (0,external_kolmafia_namespaceObject.logprint)("[Libram] ".concat(error));
  return;
}), logger_defineProperty(_defaultHandlers, LogLevels.DEBUG, message => {
  (0,external_kolmafia_namespaceObject.printHtml)("<span style=\"background: red; color: white;\"><b>[Libram Debug]</b> ".concat(message, "</span>"));
  (0,external_kolmafia_namespaceObject.logprint)("[Libram] ".concat(message));
  return;
}), _defaultHandlers);
var Logger = /*#__PURE__*/function () {
  function Logger() {
    logger_classCallCheck(this, Logger);
    logger_defineProperty(this, "handlers", defaultHandlers);
  }
  logger_createClass(Logger, [{
    key: "level",
    get: function get() {
      return Logger.currentLevel;
    }
  }, {
    key: "setLevel",
    value: function setLevel(level) {
      Logger.currentLevel = level;
    }
  }, {
    key: "setHandler",
    value: function setHandler(level, callback) {
      this.handlers[level] = callback;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {
    key: "log",
    value: function log(level, message) {
      if (this.level >= level) this.handlers[level](message);
    }
  }, {
    key: "info",
    value: function info(message) {
      this.log(LogLevels.INFO, message);
    }
  }, {
    key: "warning",
    value: function warning(message) {
      this.log(LogLevels.WARNING, message);
    }
  }, {
    key: "error",
    value: function error(message) {
      this.log(LogLevels.ERROR, message);
    }
  }, {
    key: "debug",
    value: function debug(message) {
      this.log(LogLevels.DEBUG, message);
    }
  }]);
  return Logger;
}();
logger_defineProperty(Logger, "currentLevel", LogLevels.ERROR);
/* harmony default export */ const dist_logger = (new Logger());
;// CONCATENATED MODULE: ./node_modules/libram/dist/utils.js
function utils_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = utils_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || utils_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || utils_unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function utils_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return utils_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return utils_arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return utils_arrayLikeToArray(arr); }
function utils_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Type guard against null value
 *
 * @param value Value that could be null
 * @returns Confirmation that the value is not null
 */
function utils_notNull(value) {
  return value !== null;
}
/**
 * Type guard against nullish value
 *
 * @param value Value that could be null or undefined
 * @returns Confirmation that the value is not null nor undefined
 */
function notNullish(value) {
  return utils_notNull(value) && value !== undefined;
}
/**
 * Parse string to number, stripping commas
 *
 * @param n Numberical string to parse
 * @returns Numerical value of string
 */
function parseNumber(n) {
  return Number.parseInt(n.replace(/,/g, ""));
}
/**
 * Clamp a number between lower and upper bounds.
 *
 * @param n Number to clamp.
 * @param min Lower bound.
 * @param max Upper bound.
 * @returns Clamped value
 */
function utils_clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
/**
 * Split an {@param array} into {@param chunkSize} sized chunks
 *
 * @param array Array to split
 * @param chunkSize Size of chunk
 * @returns Split array
 */
function utils_chunk(array, chunkSize) {
  var result = [];
  for (var i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}
/**
 * Count distinct values in an array
 *
 * @param array Array of values
 * @returns Map of distinct values to count
 */
function arrayToCountedMap(array) {
  if (!Array.isArray(array)) return array;
  var map = new Map();
  array.forEach(item => {
    map.set(item, (map.get(item) || 0) + 1);
  });
  return map;
}
/**
 * Turn map of distinct values to count into array of values
 *
 * @param map Map to turn into array
 * @returns Array of values
 */
function countedMapToArray(map) {
  var _ref;
  return (_ref = []).concat.apply(_ref, _toConsumableArray(_toConsumableArray(map).map(_ref2 => {
    var _ref3 = _slicedToArray(_ref2, 2),
      item = _ref3[0],
      quantity = _ref3[1];
    return Array(quantity).fill(item);
  })));
}
/**
 * Stringify a counted map
 *
 * @param map Map of counted values
 * @returns String representing map of counted values
 */
function countedMapToString(map) {
  return _toConsumableArray(map).map(_ref4 => {
    var _ref5 = _slicedToArray(_ref4, 2),
      item = _ref5[0],
      quantity = _ref5[1];
    return "".concat(quantity, " x ").concat(item);
  }).join(", ");
}
/**
 * Sum an array of numbers.
 *
 * @param addends Addends to sum.
 * @param x Property or mapping function of addends to sum
 * @returns Sum of numbers
 */
function sum(addends, x) {
  return addends.reduce((subtotal, element) => subtotal + (typeof x === "function" ? x(element) : element[x]), 0);
}
/**
 * Sum array of numbers
 *
 * @param addends Numbers to sum
 * @returns Sum of numbers
 */
function sumNumbers(addends) {
  return sum(addends, x => x);
}
/**
 * Checks if a given item is in a readonly array, acting as a typeguard.
 *
 * @param item Needle
 * @param array Readonly array haystack
 * @returns Whether the item is in the array, and narrows the type of the item.
 */
function utils_arrayContains(item, array) {
  return array.includes(item);
}
/**
 * Checks if two arrays contain the same elements in the same quantity.
 *
 * @param a First array for comparison
 * @param b Second array for comparison
 * @returns Whether the two arrays are equal, irrespective of order.
 */
function setEqual(a, b) {
  var sortedA = _toConsumableArray(a).sort();
  var sortedB = _toConsumableArray(b).sort();
  return a.length === b.length && sortedA.every((item, index) => item === sortedB[index]);
}
/**
 * Reverses keys and values for a given map
 *
 * @param map Map to invert
 * @returns Inverted map
 */
function invertMap(map) {
  var returnValue = new Map();
  var _iterator = utils_createForOfIteratorHelper(map),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        key = _step$value[0],
        value = _step$value[1];
      returnValue.set(value, key);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return returnValue;
}
/**
 * Splits a string by commas while also respecting escaping commas with a backslash
 *
 * @param str String to split
 * @returns List of tokens
 */
function splitByCommasWithEscapes(str) {
  var returnValue = [];
  var ignoreNext = false;
  var currentString = "";
  var _iterator2 = utils_createForOfIteratorHelper(str.split("")),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var char = _step2.value;
      if (char === "\\") {
        ignoreNext = true;
      } else {
        if (char == "," && !ignoreNext) {
          returnValue.push(currentString.trim());
          currentString = "";
        } else {
          currentString += char;
        }
        ignoreNext = false;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  returnValue.push(currentString.trim());
  return returnValue;
}
/**
 * Find the best element of an array, where "best" is defined by some given criteria.
 *
 * @param array The array to traverse and find the best element of.
 * @param optimizer Either a key on the objects we're looking at that corresponds to numerical values, or a function for mapping these objects to numbers. Essentially, some way of assigning value to the elements of the array.
 * @param reverse Make this true to find the worst element of the array, and false to find the best. Defaults to false.
 * @returns Best element by optimizer function
 */
function utils_maxBy(array, optimizer) {
  var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!array.length) throw new Error("Cannot call maxBy on an empty array!");
  if (typeof optimizer === "function") {
    return _toConsumableArray(array).reduce((_ref6, other) => {
      var value = _ref6.value,
        item = _ref6.item;
      var otherValue = optimizer(other);
      return value >= otherValue !== reverse ? {
        value,
        item
      } : {
        value: otherValue,
        item: other
      };
    }, {
      item: array[0],
      value: optimizer(array[0])
    }).item;
  } else {
    return array.reduce((a, b) => a[optimizer] >= b[optimizer] !== reverse ? a : b);
  }
}
/**
 * Let Typescript see that you're working with tuples!
 *
 * @param args A spread array to interpret as a tuple
 * @returns The given arg, its type now interpreted as a tuple
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function utils_tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args;
}
/**
 * Compare arrays shallowly
 *
 * @param left One array to compare
 * @param right The other array to compare
 * @returns Whether the two arrays are shallowly equal
 */
function arrayEquals(left, right) {
  if (left.length !== right.length) return false;
  return left.every((element, index) => element === right[index]);
}
/**
 * Used to collapse a Delayed<T, S> object into an entity of type "T" as represented by the object.
 *
 * @param delayedObject Object of type Delayed<T, S> that represents either a value of type T or a function returning a value of type T.
 * @param args The arguments to pass to the delay function
 * @returns The return value of the function, if delayedObject is a function. Otherwise, this returns the original element.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function undelay(delayedObject) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  return typeof delayedObject === "function" ? delayedObject.apply(void 0, args) : delayedObject;
}
/**
 * Makes a byX function, like byStat or byClass
 *
 * @param source A method for finding your stat, or class, or whatever X is in this context
 * @returns A function akin to byStat or byClass; it accepts an object that either is "complete" in the sense that it has a key for every conceivable value, or contains a `default` parameter. If an inappropriate input is provided, returns undefined.
 */
function makeByXFunction(source) {
  return function (options, alternateSource) {
    var _options$val;
    var val = undelay(alternateSource !== null && alternateSource !== void 0 ? alternateSource : source);
    if ("default" in options) return (_options$val = options[val]) !== null && _options$val !== void 0 ? _options$val : options.default;
    return options[val];
  };
}
/**
 * Flattens an array. Basically replacing Array.prototype.flat for which Rhino doesn't yet have an implementation
 * @deprecated KoLMafia now supports the `flat` and `flatMap` methods
 *
 * @param arr Array to flatten
 * @param depth Number of layers to flatten by; Infinity for a fully flat array
 * @returns Flattened array
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function flat(arr) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
  var flatArray = [];
  var _iterator3 = utils_createForOfIteratorHelper(arr),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var item = _step3.value;
      if (Array.isArray(item) && depth > 0) {
        var child = flat(item, depth - 1);
        flatArray = flatArray.concat(child);
      } else {
        flatArray.push(item);
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return flatArray;
}
/**
 * @param array Array to select from
 * @returns Random item from array
 */
function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}
/**
 * Title cases a single word
 *
 * @param word Word to transform
 * @returns Word in title case
 */
var tc = word => word.charAt(0).toUpperCase() + word.slice(1);
;// CONCATENATED MODULE: ./node_modules/libram/dist/template-string.js


var concatTemplateString = function concatTemplateString(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    placeholders[_key - 1] = arguments[_key];
  }
  return literals.raw.reduce((acc, literal, i) => {
    var _placeholders$i;
    return acc + literal + ((_placeholders$i = placeholders[i]) !== null && _placeholders$i !== void 0 ? _placeholders$i : "");
  }, "");
};
var handleTypeGetError = (Type, error) => {
  var message = "".concat(error);
  var match = message.match(RegExp("Bad ".concat(Type.name.toLowerCase(), " value: .*")));
  if (match) {
    (0,external_kolmafia_namespaceObject.print)("".concat(match[0], "; if you're certain that this ").concat(Type.name, " exists and is spelled correctly, please update KoLMafia"), "red");
  } else {
    (0,external_kolmafia_namespaceObject.print)(message);
  }
};
var createSingleConstant = (Type, converter) => {
  var tagFunction = function tagFunction(literals) {
    for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      placeholders[_key2 - 1] = arguments[_key2];
    }
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    try {
      return Type.get(input);
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    (0,external_kolmafia_namespaceObject.abort)();
  };
  tagFunction.cls = Type;
  tagFunction.none = Type.none;
  tagFunction.get = name => {
    var value = converter(name);
    return value === Type.none ? null : value;
  };
  return tagFunction;
};
var createPluralConstant = Type => {
  var tagFunction = function tagFunction(literals) {
    for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      placeholders[_key3 - 1] = arguments[_key3];
    }
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    if (input === "") {
      return Type.all();
    }
    try {
      return Type.get(splitByCommasWithEscapes(input));
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    (0,external_kolmafia_namespaceObject.abort)();
  };
  tagFunction.all = () => Type.all();
  return tagFunction;
};
/**
 * A Bounty specified by name.
 *
 * @category In-game constant
 */
var $bounty = createSingleConstant(external_kolmafia_namespaceObject.Bounty, external_kolmafia_namespaceObject.toBounty);
/**
 * A list of Bounties specified by a comma-separated list of names.
 * For a list of all possible Bounties, leave the template string blank.
 *
 * @category In-game constant
 */
var $bounties = createPluralConstant(external_kolmafia_namespaceObject.Bounty);
/**
 * A Class specified by name.
 *
 * @category In-game constant
 */
var $class = createSingleConstant(external_kolmafia_namespaceObject.Class, external_kolmafia_namespaceObject.toClass);
/**
 * A list of Classes specified by a comma-separated list of names.
 * For a list of all possible Classes, leave the template string blank.
 *
 * @category In-game constant
 */
var $classes = createPluralConstant(external_kolmafia_namespaceObject.Class);
/**
 * A Coinmaster specified by name.
 *
 * @category In-game constant
 */
var $coinmaster = createSingleConstant(external_kolmafia_namespaceObject.Coinmaster, external_kolmafia_namespaceObject.toCoinmaster);
/**
 * A list of Coinmasters specified by a comma-separated list of names.
 * For a list of all possible Coinmasters, leave the template string blank.
 *
 * @category In-game constant
 */
var $coinmasters = createPluralConstant(external_kolmafia_namespaceObject.Coinmaster);
/**
 * An Effect specified by name.
 *
 * @category In-game constant
 */
var template_string_$effect = createSingleConstant(external_kolmafia_namespaceObject.Effect, external_kolmafia_namespaceObject.toEffect);
/**
 * A list of Effects specified by a comma-separated list of names.
 * For a list of all possible Effects, leave the template string blank.
 *
 * @category In-game constant
 */
var $effects = createPluralConstant(external_kolmafia_namespaceObject.Effect);
/**
 * An Element specified by name.
 *
 * @category In-game constant
 */
var $element = createSingleConstant(external_kolmafia_namespaceObject.Element, external_kolmafia_namespaceObject.toElement);
/**
 * A list of Elements specified by a comma-separated list of names.
 * For a list of all possible Elements, leave the template string blank.
 *
 * @category In-game constant
 */
var $elements = createPluralConstant(external_kolmafia_namespaceObject.Element);
/**
 * A Familiar specified by name.
 *
 * @category In-game constant
 */
var template_string_$familiar = createSingleConstant(external_kolmafia_namespaceObject.Familiar, external_kolmafia_namespaceObject.toFamiliar);
/**
 * A list of Familiars specified by a comma-separated list of names.
 * For a list of all possible Familiars, leave the template string blank.
 *
 * @category In-game constant
 */
var template_string_$familiars = createPluralConstant(external_kolmafia_namespaceObject.Familiar);
/**
 * An Item specified by name.
 *
 * @category In-game constant
 */
var template_string_$item = createSingleConstant(external_kolmafia_namespaceObject.Item, external_kolmafia_namespaceObject.toItem);
/**
 * A list of Items specified by a comma-separated list of names.
 * For a list of all possible Items, leave the template string blank.
 *
 * @category In-game constant
 */
var template_string_$items = createPluralConstant(external_kolmafia_namespaceObject.Item);
/**
 * A Location specified by name.
 *
 * @category In-game constant
 */
var $location = createSingleConstant(external_kolmafia_namespaceObject.Location, external_kolmafia_namespaceObject.toLocation);
/**
 * A list of Locations specified by a comma-separated list of names.
 * For a list of all possible Locations, leave the template string blank.
 *
 * @category In-game constant
 */
var $locations = createPluralConstant(external_kolmafia_namespaceObject.Location);
/**
 * A Modifier specified by name.
 *
 * @category In-game constant
 */
var $modifier = createSingleConstant(external_kolmafia_namespaceObject.Modifier, external_kolmafia_namespaceObject.toModifier);
/**
 * A list of Modifiers specified by a comma-separated list of names.
 * For a list of all possible Modifiers, leave the template string blank.
 *
 * @category In-game constant
 */
var $modifiers = createPluralConstant(external_kolmafia_namespaceObject.Modifier);
/**
 * A Monster specified by name.
 *
 * @category In-game constant
 */
var $monster = createSingleConstant(external_kolmafia_namespaceObject.Monster, external_kolmafia_namespaceObject.toMonster);
/**
 * A list of Monsters specified by a comma-separated list of names.
 * For a list of all possible Monsters, leave the template string blank.
 *
 * @category In-game constant
 */
var $monsters = createPluralConstant(external_kolmafia_namespaceObject.Monster);
/**
 * A Path specified by name.
 *
 * @category In-game constant
 */
var $path = createSingleConstant(external_kolmafia_namespaceObject.Path, external_kolmafia_namespaceObject.toPath);
/**
 * A list of Paths specified by a comma-separated list of names.
 * For a list of all possible Paths, leave the template string blank.
 *
 * @category In-game constant
 */
var $paths = createPluralConstant(external_kolmafia_namespaceObject.Path);
/**
 * A Phylum specified by name.
 *
 * @category In-game constant
 */
var $phylum = createSingleConstant(external_kolmafia_namespaceObject.Phylum, external_kolmafia_namespaceObject.toPhylum);
/**
 * A list of Phyla specified by a comma-separated list of names.
 * For a list of all possible Phyla, leave the template string blank.
 *
 * @category In-game constant
 */
var $phyla = createPluralConstant(external_kolmafia_namespaceObject.Phylum);
/**
 * A Servant specified by name.
 *
 * @category In-game constant
 */
var $servant = createSingleConstant(external_kolmafia_namespaceObject.Servant, external_kolmafia_namespaceObject.toServant);
/**
 * A list of Servants specified by a comma-separated list of names.
 * For a list of all possible Servants, leave the template string blank.
 *
 * @category In-game constant
 */
var $servants = createPluralConstant(external_kolmafia_namespaceObject.Servant);
/**
 * A Skill specified by name.
 *
 * @category In-game constant
 */
var template_string_$skill = createSingleConstant(external_kolmafia_namespaceObject.Skill, external_kolmafia_namespaceObject.toSkill);
/**
 * A list of Skills specified by a comma-separated list of names.
 * For a list of all possible Skills, leave the template string blank.
 *
 * @category In-game constant
 */
var $skills = createPluralConstant(external_kolmafia_namespaceObject.Skill);
/**
 * A Slot specified by name.
 *
 * @category In-game constant
 */
var $slot = createSingleConstant(external_kolmafia_namespaceObject.Slot, external_kolmafia_namespaceObject.toSlot);
/**
 * A list of Slots specified by a comma-separated list of names.
 * For a list of all possible Slots, leave the template string blank.
 *
 * @category In-game constant
 */
var $slots = createPluralConstant(external_kolmafia_namespaceObject.Slot);
/**
 * A Stat specified by name.
 *
 * @category In-game constant
 */
var $stat = createSingleConstant(external_kolmafia_namespaceObject.Stat, external_kolmafia_namespaceObject.toStat);
/**
 * A list of Stats specified by a comma-separated list of names.
 * For a list of all possible Stats, leave the template string blank.
 *
 * @category In-game constant
 */
var $stats = createPluralConstant(external_kolmafia_namespaceObject.Stat);
/**
 * A Thrall specified by name.
 *
 * @category In-game constant
 */
var $thrall = createSingleConstant(external_kolmafia_namespaceObject.Thrall, external_kolmafia_namespaceObject.toThrall);
/**
 * A list of Thralls specified by a comma-separated list of names.
 * For a list of all possible Thralls, leave the template string blank.
 *
 * @category In-game constant
 */
var $thralls = createPluralConstant(external_kolmafia_namespaceObject.Thrall);
;// CONCATENATED MODULE: ./node_modules/libram/dist/lib.js
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55;
function lib_toConsumableArray(arr) { return lib_arrayWithoutHoles(arr) || lib_iterableToArray(arr) || lib_unsupportedIterableToArray(arr) || lib_nonIterableSpread(); }
function lib_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function lib_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function lib_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return lib_arrayLikeToArray(arr); }
function lib_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, lib_toPropertyKey(descriptor.key), descriptor); } }
function lib_createClass(Constructor, protoProps, staticProps) { if (protoProps) lib_defineProperties(Constructor.prototype, protoProps); if (staticProps) lib_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function lib_toPropertyKey(arg) { var key = lib_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function lib_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function lib_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function lib_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = lib_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function lib_slicedToArray(arr, i) { return lib_arrayWithHoles(arr) || lib_iterableToArrayLimit(arr, i) || lib_unsupportedIterableToArray(arr, i) || lib_nonIterableRest(); }
function lib_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function lib_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return lib_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return lib_arrayLikeToArray(o, minLen); }
function lib_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function lib_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function lib_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/** @module GeneralLibrary */





/**
 * Determines the current maximum Accordion Thief songs the player can have in their head
 *
 * @category General
 * @returns Maximum number of songs for player
 */
function getSongLimit() {
  return 3 + (booleanModifier("Four Songs") ? 1 : 0) + numericModifier("Additional Song");
}
/**
 * Determine whether the Skill or Effect provided is an Accordion Thief song
 *
 * @category General
 * @param skillOrEffect The Skill or Effect
 * @returns Whether it's a song
 */
function isSong(skillOrEffect) {
  if (skillOrEffect instanceof external_kolmafia_namespaceObject.Effect && skillOrEffect.attributes.includes("song")) {
    return true;
  } else {
    var skill = skillOrEffect instanceof external_kolmafia_namespaceObject.Effect ? (0,external_kolmafia_namespaceObject.toSkill)(skillOrEffect) : skillOrEffect;
    return skill.class === $class(_templateObject || (_templateObject = _taggedTemplateLiteral(["Accordion Thief"]))) && skill.buff;
  }
}
/**
 * List all active Effects
 *
 * @category General
 * @returns List of Effects
 */
function getActiveEffects() {
  return Object.keys(myEffects()).map(e => Effect.get(e));
}
/**
 * List currently active Accordion Thief songs
 *
 * @category General
 * @returns List of song Effects
 */
function getActiveSongs() {
  return getActiveEffects().filter(isSong);
}
/**
 * List number of active Accordion Thief songs
 *
 * @category General
 * @returns Number of songs
 */
function getSongCount() {
  return getActiveSongs().length;
}
/**
 * Determine whether player can remember another Accordion Thief song
 *
 * @category General
 * @param quantity Number of songs to test the space for
 * @returns Whether player can remember another song
 */
function canRememberSong() {
  var quantity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return getSongLimit() - getSongCount() >= quantity;
}
/**
 * Determine the locations in which the given monster can be encountered naturally
 *
 * @category General
 * @param monster Monster to find
 * @returns Locations for monster
 */
function getMonsterLocations(monster) {
  return Location.all().filter(location => monster.name in appearanceRates(location));
}
/**
 * Determine the player's remaining liver space
 *
 * @category General
 * @returns Remaining liver space
 */
function getRemainingLiver() {
  return inebrietyLimit() - myInebriety();
}
/**
 * Determine the player's remaining stomach space
 *
 * @category General
 * @returns Remaining stomach space
 */
function getRemainingStomach() {
  return fullnessLimit() - myFullness();
}
/**
 * Determine the player's remaining spleen space
 *
 * @category General
 * @returns Remaining spleen space
 */
function getRemainingSpleen() {
  return spleenLimit() - mySpleenUse();
}
/**
 * Determine whether the player "has" any entity which one could feasibly "have".
 *
 * @category General
 * @param thing Thing to check
 * @param quantity Minimum quantity the player must have to pass
 * @returns Whether the player meets the requirements of owning the supplied thing
 */
function lib_have(thing) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (thing instanceof external_kolmafia_namespaceObject.Effect) {
    return (0,external_kolmafia_namespaceObject.haveEffect)(thing) >= quantity;
  }
  if (thing instanceof external_kolmafia_namespaceObject.Familiar) {
    return (0,external_kolmafia_namespaceObject.haveFamiliar)(thing);
  }
  if (thing instanceof external_kolmafia_namespaceObject.Item) {
    return (0,external_kolmafia_namespaceObject.availableAmount)(thing) >= quantity;
  }
  if (thing instanceof external_kolmafia_namespaceObject.Servant) {
    return (0,external_kolmafia_namespaceObject.haveServant)(thing);
  }
  if (thing instanceof external_kolmafia_namespaceObject.Skill) {
    return (0,external_kolmafia_namespaceObject.haveSkill)(thing);
  }
  if (thing instanceof external_kolmafia_namespaceObject.Thrall) {
    var thrall = (0,external_kolmafia_namespaceObject.myThrall)();
    return thrall.id === thing.id && thrall.level >= quantity;
  }
  return false;
}
/**
 * Determine whether a given item is in the player's campground
 *
 * @category General
 * @param item The Item KoLmafia uses to represent the campground item
 * @returns Whether the item is in the campground
 */
function haveInCampground(item) {
  return Object.keys(getCampground()).map(i => Item.get(i)).includes(item);
}
var Wanderer;
(function (Wanderer) {
  Wanderer["Digitize"] = "Digitize Monster";
  Wanderer["Enamorang"] = "Enamorang Monster";
  Wanderer["Familiar"] = "Familiar";
  Wanderer["Holiday"] = "Holiday Monster";
  Wanderer["Kramco"] = "Kramco";
  Wanderer["Nemesis"] = "Nemesis Assassin";
  Wanderer["Portscan"] = "portscan.edu";
  Wanderer["Romantic"] = "Romantic Monster";
  Wanderer["Vote"] = "Vote Monster";
})(Wanderer || (Wanderer = {}));
var deterministicWanderers = [Wanderer.Digitize, Wanderer.Portscan];
/**
 * Determine whether the player has the specified counter
 *
 * @param counterName Name of the counter
 * @param minTurns Minimum turns the counter is set to
 * @param maxTurns Maximum turns the counter is set to
 * @category General
 * @returns Whether player has the counter
 */
function haveCounter(counterName) {
  var minTurns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var maxTurns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
  return getCounters(counterName, minTurns, maxTurns) === counterName;
}
/**
 * Determine whether the player has the specified wanderer's counter
 *
 * @param wanderer Wanderer to check
 * @category Wanderers
 * @returns Whether player has the wanderer counter
 */
function haveWandererCounter(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer);
  }
  var begin = wanderer + " window begin";
  var end = wanderer + " window end";
  return haveCounter(begin) || haveCounter(end);
}
/**
 * Determine whether the player will encounter a vote wanderer on the next turn,
 * providing an "I Voted!" sticker is equipped.
 *
 * @category Wanderers
 * @returns Whether the vote wanderer is due
 */
function isVoteWandererNow() {
  return totalTurnsPlayed() % 11 === 1 && get("lastVoteMonsterTurn") < totalTurnsPlayed();
}
/**
 * Tells us whether we can expect a given wanderer now. Behaves differently
 * for different types of wanderer.
 *
 * - For deterministic wanderers, return whether the player will encounter
 *   the queried wanderer on the next turn
 *
 * - For variable wanderers (window), return whether the player is within
 *   an encounter window for the queried wanderer
 *
 * - For variable wanderers (chance per turn), returns true unless the player
 *   has exhausted the number of wanderers possible
 *
 * @category Wanderers
 * @param wanderer Wanderer to check
 * @returns Whether the wanderer is due
 */
function isWandererNow(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer, 0, 0);
  }
  if (wanderer === Wanderer.Kramco) {
    return true;
  }
  if (wanderer === Wanderer.Vote) {
    return isVoteWandererNow();
  }
  if (wanderer === Wanderer.Familiar) {
    return get("_hipsterAdv") < 7;
  }
  var begin = wanderer + " window begin";
  var end = wanderer + " window end";
  return !haveCounter(begin, 1) && haveCounter(end);
}
/**
 * Determines the chance the player will encounter a sausage goblin on the
 * next turn, providing the Kramco Sausage-o-Matic is equipped.
 *
 * @category Wanderers
 * @returns Chance that the sausage goblin is due (as a number between 0 and 1)
 */
function getKramcoWandererChance() {
  var fights = get("_sausageFights");
  var lastFight = get("_lastSausageMonsterTurn");
  var totalTurns = totalTurnsPlayed();
  if (fights < 1) {
    return lastFight === totalTurns && myTurncount() < 1 ? 0.5 : 1.0;
  }
  var turnsSinceLastFight = totalTurns - lastFight;
  return Math.min(1.0, (turnsSinceLastFight + 1) / (5 + fights * 3 + Math.max(0, fights - 5) ** 3));
}
/**
 * Determines the chance the player will encounter an Artistic Goth Kid or
 * Mini-Hipster wanderer on the next turn, providing a familiar is equipped.
 *
 * NOTE: You must complete one combat with the Artistic Goth Kid before you
 * can encounter any wanderers. Consequently,ƒ the first combat with the
 * Artist Goth Kid is effectively 0% chance to encounter a wanderer.
 *
 * @category Wanderers
 * @returns Chance that the familiar wanderer is due (as a number between 0 and 1)
 */
function getFamiliarWandererChance() {
  var totalFights = get("_hipsterAdv");
  var probability = [0.5, 0.4, 0.3, 0.2];
  if (totalFights < 4) {
    return probability[totalFights];
  }
  return totalFights > 7 ? 0.0 : 0.1;
}
/**
 * Determines the chance the player will encounter the specified wanderer
 * on the next turn.
 *
 * @category Wanderers
 * @param wanderer Wanderer to check
 * @returns Chance that the specified wanderer is due (as a number between 0 and 1)
 */
function getWandererChance(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer, 0, 0) ? 1.0 : 0.0;
  }
  if (wanderer === Wanderer.Kramco) {
    getKramcoWandererChance();
  }
  if (wanderer === Wanderer.Vote) {
    return isVoteWandererNow() ? 1.0 : 0.0;
  }
  if (wanderer === Wanderer.Familiar) {
    getFamiliarWandererChance();
  }
  var begin = wanderer + " window begin";
  var end = wanderer + " window end";
  if (haveCounter(begin, 1, 100)) {
    return 0.0;
  }
  var counters = get("relayCounters");
  var re = new RegExp("(\\d+):" + end);
  var matches = counters.match(re);
  if (matches && matches.length === 2) {
    var window = Number.parseInt(matches[1]) - myTurncount();
    return 1.0 / window;
  }
  return 0.0;
}
/**
 * Determines whether the player's current familiar is equal to the one supplied
 *
 * @category General
 * @param familiar Familiar to check
 * @returns Whether it is the player's current familiar
 */
function isCurrentFamiliar(familiar) {
  return myFamiliar() === familiar;
}
var foldGroupCache = new Map();
/**
 * Determines the fold group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required fold group
 * @param cache Whether to query the fold group cache
 * @returns List of items in the fold group
 */
function getFoldGroup(item) {
  var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (cache) {
    var cached = foldGroupCache.get(item);
    if (cached !== undefined) return cached;
  }
  var result = Object.entries((0,external_kolmafia_namespaceObject.getRelated)(item, "fold")).sort((_ref, _ref2) => {
    var _ref3 = lib_slicedToArray(_ref, 2),
      a = _ref3[1];
    var _ref4 = lib_slicedToArray(_ref2, 2),
      b = _ref4[1];
    return a - b;
  }).map(_ref5 => {
    var _ref6 = lib_slicedToArray(_ref5, 1),
      i = _ref6[0];
    return external_kolmafia_namespaceObject.Item.get(i);
  });
  var _iterator = lib_createForOfIteratorHelper(result),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var fold = _step.value;
      foldGroupCache.set(fold, result);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return result;
}
/**
 * Determines the zap group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required zap group
 * @returns List of items in the zap group
 */
function getZapGroup(item) {
  return Object.keys(getRelated(item, "zap")).map(i => Item.get(i));
}
var banishSource = banisher => {
  switch (banisher.toLowerCase()) {
    case "saber force":
      return $skill(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Use the Force"])));
    case "nanorhino":
      return $skill(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Unleash Nanites"])));
    case "sea *dent":
      return $skill(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Sea *dent: Throw a Lightning Bolt"])));
  }
  var item = toItem(banisher);
  if ($items(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["none, training scroll:  Snokebomb, tomayohawk-style reflex hammer"]))).includes(item)) {
    return toSkill(banisher);
  }
  return item;
};
/**
 * Translate mafia's multi-dimensional array prefs into a multi-dimensional array
 * @param prop The name of the mafia string property to process
 * @param outerDelimiter The "outer" delimiter, which separates tuples from eachother
 * @param innerDelimiter The "inner" delimieter, which separates the elements of tuples from eachother
 * @param mappers An array of string => whatever mapping functions that turn this into the actual objects we want
 * @returns An array of typed tuples, based on the given inputs
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function multiSplit(prop, outerDelimiter, innerDelimiter, mappers) {
  var initialSplit = get(prop).split(outerDelimiter).filter(Boolean);
  var multiDimensionalArray = outerDelimiter === innerDelimiter ? chunk(initialSplit, mappers.length) : initialSplit.map(entry => entry.split(innerDelimiter));
  return multiDimensionalArray.map(tup => mappers.map((func, index) => func(tup[index])));
}
/**
 * Get a map of banished monsters keyed by what banished them
 *
 * @category General
 * @returns Map of banished monsters
 */
function lib_getBanishedMonsters() {
  return new Map(multiSplit("banishedMonsters", ":", ":", [toMonster, banishSource, Number]).map(_ref7 => {
    var _ref8 = lib_slicedToArray(_ref7, 2),
      monster = _ref8[0],
      source = _ref8[1];
    return [source, monster];
  }));
}
/**
 * Determines whether the item is usable
 *
 * This function will be an ongoing work in progress
 *
 * @param item Item to check
 * @returns Whether item is usable
 */
function canUse(item) {
  var path = myPath();
  if (path !== Path.get("Nuclear Autumn")) {
    if ($items(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Shrieking Weasel holo-record, Power-Guy 2000 holo-record, Lucky Strikes holo-record, EMD holo-record, Superdrifter holo-record, The Pigs holo-record, Drunk Uncles holo-record"]))).includes(item)) {
      return false;
    }
  }
  if (path === Path.get("G-Lover")) {
    if (!item.name.toLowerCase().includes("g")) return false;
  }
  if (path === Path.get("Bees Hate You")) {
    if (item.name.toLowerCase().includes("b")) return false;
  }
  return true;
}
/**
 * Turn KoLmafia `none`s to JavaScript `null`s
 *
 * @param thing Thing that can have a mafia "none" value
 * @returns The thing specified or `null`
 */
function noneToNull(thing) {
  var type = MafiaClasses.find(t => thing instanceof t);
  return type && thing === type.none ? null : thing;
}
/**
 * Parse the sort of range that KoLmafia encodes as a string
 * @param range KoLmafia-style range string
 * @returns Tuple of integers representing range
 */
function getRange(range) {
  var _range$match$slice$ma, _range$match;
  var _ref9 = (_range$match$slice$ma = (_range$match = range.match(/^(-?\d+)(?:-(-?\d+))?$/)) === null || _range$match === void 0 ? void 0 : _range$match.slice(1, 3).map(v => parseInt(v))) !== null && _range$match$slice$ma !== void 0 ? _range$match$slice$ma : [0],
    _ref10 = lib_slicedToArray(_ref9, 2),
    lower = _ref10[0],
    upper = _ref10[1];
  return [lower, Number.isNaN(upper) || upper === undefined ? lower : upper];
}
/**
 * Determine the average value from the sort of range that KoLmafia encodes as a string
 *
 * @param range KoLmafia-style range string
 * @returns Average value for range
 */
function getAverage(range) {
  var _getRange = getRange(range),
    _getRange2 = lib_slicedToArray(_getRange, 2),
    min = _getRange2[0],
    max = _getRange2[1];
  return (min + max) / 2;
}
/**
 * Deternube tge average adventures expected from consuming an Item
 *
 * If item is not a consumable, will just return "0".
 *
 * @param item Consumable item
 * @returns Average aventures from consumable
 */
function getAverageAdventures(item) {
  return getAverage(item.adventures);
}
/**
 * Remove an effect
 *
 * @category General
 * @param effect Effect to remove
 * @returns Success
 */
function uneffect(effect) {
  return (0,external_kolmafia_namespaceObject.cliExecute)("uneffect ".concat(effect.name));
}
/**
 * Get the player id from a player name (if it exists)
 * @param name the name of the player
 * @param onMissing Pass "throw" to throw an error if the player is not found, or "return-null" to return null
 * @returns the player id if the player exists, or handles according to onMissing
 */
function getPlayerIdFromName(name) {
  var onMissing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "throw";
  var playerId = getPlayerId(name);
  // KoLmafia returns the input when not found
  if (playerId === name) {
    if (onMissing === "throw") {
      throw new Error("Player not found: ".concat(name));
    }
    return null;
  }
  return parseInt(playerId);
}
/**
 * Get the player id from a player name (if it exists)
 * @param id the id of the player
 * @param onMissing Pass "throw" to throw an error if the player is not found, or "return-null" to return null
 * @returns the player id if the player exists, or handles according to onMissing
 */
function getPlayerNameFromId(id) {
  var onMissing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "throw";
  var playerName = getPlayerName(id);
  // KoLmafia returns the input when not found
  if (playerName === id.toString()) {
    if (onMissing === "throw") {
      throw new Error("Player not found: ".concat(playerName));
    }
    return null;
  }
  return playerName;
}
/**
 * Get both the name and id of a player from either their name or id
 *
 * @param idOrName Id or name of player
 * @param onMissing Pass "throw" to throw an error if the player is not found, or "return-null" to return null
 * @returns Object containing id and name of player if it exists, or handles according to onMissing
 */
function getPlayerFromIdOrName(idOrName) {
  var onMissing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "throw";
  if (typeof idOrName === "number") {
    var name = getPlayerNameFromId(idOrName, onMissing);
    if (name === null) return null;
    return {
      name,
      id: idOrName
    };
  } else {
    var id = getPlayerIdFromName(idOrName, onMissing);
    if (id === null) return null;
    // load from KoLmafia to get the right capitalization
    var _name = getPlayerName(id);
    return {
      name: _name,
      id
    };
  }
}
/**
 * Determine the step as a number for a given quest property.
 *
 * @param questName Name of quest property to check.
 * @returns Quest step
 */
function questStep(questName) {
  var stringStep = get(questName);
  if (stringStep === "unstarted") return -1;else if (stringStep === "started") return 0;else if (stringStep === "finished" || stringStep === "") return 999;else {
    if (stringStep.substring(0, 4) !== "step") {
      throw new Error("Quest state parsing error.");
    }
    return parseInt(stringStep.substring(4), 10);
  }
}
var EnsureError = /*#__PURE__*/function (_Error) {
  _inherits(EnsureError, _Error);
  var _super = _createSuper(EnsureError);
  function EnsureError(cause, reason) {
    var _this;
    lib_classCallCheck(this, EnsureError);
    _this = _super.call(this, "Failed to ensure ".concat(cause.name, "!").concat(reason ? " ".concat(reason) : ""));
    _this.name = "Ensure Error";
    return _this;
  }
  return lib_createClass(EnsureError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Tries to get an effect using the default method
 *
 * @param ef effect to try to get
 * @param turns turns to aim for; default of 1
 * @throws {EnsureError} Throws an error if the effect cannot be guaranteed
 */
function ensureEffect(ef) {
  var turns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if ((0,external_kolmafia_namespaceObject.haveEffect)(ef) < turns) {
    if (ef.default === null) {
      throw new EnsureError(ef, "No default action");
    }
    if (!(0,external_kolmafia_namespaceObject.cliExecute)(ef.default) || (0,external_kolmafia_namespaceObject.haveEffect)(ef) === 0) {
      throw new EnsureError(ef);
    }
  }
}
var valueMap = new Map();
var MALL_VALUE_MODIFIER = 0.9;
/**
 * Determiens the average value (based on mallprice and autosell) of a collection of items
 *
 * @param items items whose value you care about
 * @returns Average value of items
 */
function getSaleValue() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }
  return items.map(item => {
    if (valueMap.has(item)) return valueMap.get(item) || 0;
    if (item.discardable) {
      valueMap.set(item, (0,external_kolmafia_namespaceObject.mallPrice)(item) > Math.max(2 * (0,external_kolmafia_namespaceObject.autosellPrice)(item), 100) ? MALL_VALUE_MODIFIER * (0,external_kolmafia_namespaceObject.mallPrice)(item) : (0,external_kolmafia_namespaceObject.autosellPrice)(item));
    } else {
      valueMap.set(item, (0,external_kolmafia_namespaceObject.mallPrice)(item) > 100 ? MALL_VALUE_MODIFIER * (0,external_kolmafia_namespaceObject.mallPrice)(item) : 0);
    }
    return valueMap.get(item) || 0;
  }).reduce((s, price) => s + price, 0) / items.length;
}
var Environment = {
  Outdoor: "outdoor",
  Indoor: "indoor",
  Underground: "underground",
  Underwater: "underwater"
};
/**
 * Determines the weight-coefficient of any leprechaunning that this familiar may find itself doing
 * Assumes the familiar is nude and thus fails for hatrack & pantsrack
 * For the Mutant Cactus Bud, returns the efficacy-multiplier instead
 *
 * @param familiar The familiar whose leprechaun multiplier you're interested in
 * @returns Weight-coefficient
 */
function findLeprechaunMultiplier(familiar) {
  if (familiar === $familiar(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Mutant Cactus Bud"])))) {
    return numericModifier(familiar, "Leprechaun Effectiveness", 1, $item.none);
  }
  if (familiar === $familiar(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Reanimated Reanimator"])))) return 0;
  var meatBonus = numericModifier(familiar, "Meat Drop", 1, $item.none);
  if (meatBonus === 0) return 0;
  return Math.pow(Math.sqrt(meatBonus / 2 + 55 / 4 + 3) - Math.sqrt(55) / 2, 2);
}
/**
 * Determines the weight-coefficient of any baby gravy fairying that this familiar may find itself doing
 * Assumes the familiar is nude and thus fails for hatrack & pantsrack
 * For the Mutant Fire Ant, returns the efficacy-multiplier instead
 *
 * @param familiar The familiar whose fairy multiplier you're interested in
 * @returns Weight-coefficient
 */
function findFairyMultiplier(familiar) {
  if (familiar === $familiar(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Mutant Fire Ant"])))) {
    return numericModifier(familiar, "Fairy Effectiveness", 1, $item.none);
  }
  if (familiar === $familiar(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Reanimated Reanimator"])))) return 0;
  var itemBonus = numericModifier(familiar, "Item Drop", 1, $item.none);
  if (itemBonus === 0) return 0;
  // Assumes you're using LED candle; returns effective weight multiplier
  if (familiar === $familiar(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["Jill-of-All-Trades"])))) return 1.5;
  // Working out the multiplier based on the Item Drop at 1lb
  return Math.pow(Math.sqrt(itemBonus + 55 / 4 + 3) - Math.sqrt(55) / 2, 2);
}
var holidayWanderers = new Map([["El Dia De Los Muertos Borrachos", $monsters(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", $monsters(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", $monsters(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
/**
 * Get today's holiday wanderers
 *
 * @returns List of holiday wanderer Monsters
 */
function getTodaysHolidayWanderers() {
  return (0,external_kolmafia_namespaceObject.holiday)().split("/").flatMap(holiday => {
    var _holidayWanderers$get;
    return (_holidayWanderers$get = holidayWanderers.get(holiday)) !== null && _holidayWanderers$get !== void 0 ? _holidayWanderers$get : [];
  });
}
/**
 * Determines whether or not we can safely call visitUrl(), based on whether we're in a fight, multi-fight, choice, etc
 *
 * @returns Whether urls can be safely visited
 */
function canVisitUrl() {
  if (currentRound()) {
    logger.debug("Current round is ".concat(currentRound(), "; you're in combat."));
    return false;
  }
  if (inMultiFight()) {
    logger.debug("You're in a multifight.");
    return false;
  }
  if (choiceFollowsFight()) {
    logger.debug("A choice follows this fight.");
    return false;
  }
  if (handlingChoice()) {
    logger.debug("You're currently in a choice adventure");
    return false;
  }
  return true;
}
/**
 * Calculate damage taken from a specific element after factoring in resistance
 *
 * @param baseDamage Base damage
 * @param element Element
 * @returns damage after factoring in resistances
 */
function damageTakenByElement(baseDamage, element) {
  if (baseDamage < 0) return 1;
  var res = elementalResistance(element);
  return Math.max(1, Math.ceil(baseDamage - baseDamage * res / 100));
}
var telescopeStats = new Map([["standing around flexing their muscles and using grip exercisers", $stat(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["Muscle"])))], ["sitting around playing chess and solving complicated-looking logic puzzles", $stat(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["Mysticality"])))], ["all wearing sunglasses and dancing", $stat(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["Moxie"])))]]);
var telescopeElements = new Map([["people, all of whom appear to be on fire", $element(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["hot"])))], ["people, surrounded by a cloud of eldritch mist", $element(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["spooky"])))], ["greasy-looking people furtively skulking around", $element(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["sleaze"])))], ["people, surrounded by garbage and clouds of flies", $element(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["stench"])))], ["people, clustered around a group of igloos", $element(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap1 = new Map([["smoldering bushes on the outskirts of a hedge maze", $element(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["hot"])))], ["creepy-looking black bushes on the outskirts of a hedge maze", $element(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["spooky"])))], ["purplish, greasy-looking hedges", $element(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["sleaze"])))], ["nasty-looking, dripping green bushes on the outskirts of a hedge maze", $element(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["stench"])))], ["frost-rimed bushes on the outskirts of a hedge maze", $element(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap2 = new Map([["smoke rising from deeper within the maze", $element(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["hot"])))], ["a miasma of eldritch vapors rising from deeper within the maze", $element(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["spooky"])))], ["a greasy purple cloud hanging over the center of the maze", $element(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["sleaze"])))], ["a cloud of green gas hovering over the maze", $element(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["stench"])))], ["wintry mists rising from deeper within the maze", $element(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap3 = new Map([["with lava slowly oozing out of it", $element(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["hot"])))], ["surrounded by creepy black mist", $element(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["spooky"])))], ["that occasionally vomits out a greasy ball of hair", $element(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["sleaze"])))], ["disgorging a really surprising amount of sewage", $element(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["stench"])))], ["occasionally disgorging a bunch of ice cubes", $element(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["cold"])))]]);
/**
 * Get information from telescope
 *
 * @returns An object with all information the telescope gives you about the sorceress's contests and maze
 */
function telescope() {
  return Object.fromEntries(Object.entries({
    statContest: telescopeStats.get(get("telescope1")),
    elementContest: telescopeElements.get(get("telescope2")),
    hedge1: hedgeTrap1.get(get("telescope3")),
    hedge2: hedgeTrap2.get(get("telescope4")),
    hedge3: hedgeTrap3.get(get("telescope5"))
  }).filter(_ref11 => {
    var _ref12 = lib_slicedToArray(_ref11, 2),
      value = _ref12[1];
    return value;
  }));
}
/**
 * Visit the desc_x.php page for a given thing
 *
 * @param thing Thing to examine
 * @returns Contents of desc_x.php page
 */
function examine(thing) {
  var url = thing instanceof Item ? "desc_item.php?whichitem=".concat(thing.descid) : thing instanceof Familiar ? "desc_familiar.php?which=".concat(thing.id) : thing instanceof Effect ? "desc_effect.php?whicheffect=".concat(thing.descid) : "desc_skill.php?whichskill=".concat(thing.id);
  return visitUrl(url);
}
/**
 * Picks an option based on your primestat
 *
 * @param options An object keyed by stat; it must either contain all stats, or have a `default` parameter.
 * @param alternateSource An optional alternate way of determining which Stat to choose by.
 * @returns The option corresponding to your primestat.
 */
var byStat = makeByXFunction(() => (0,external_kolmafia_namespaceObject.myPrimestat)().toString());
/**
 * Picks an option based on your player class
 *
 * @param options An object keyed by player class; it must either contain all classes, or have a `default` parameter.
 * @param alternateSource An optional anternate way of determining which Class to choose by.
 * @returns The option corresponding to your player class.
 */
var byClass = makeByXFunction(() => (0,external_kolmafia_namespaceObject.myClass)().toString());
/**
 * Use an item with visitUrl instead of `use`; this is sometimes useful
 *
 * @param item The item you want to use
 * @returns The html of the resulting page
 */
function directlyUse(item) {
  return (0,external_kolmafia_namespaceObject.visitUrl)("inv_use.php?which=3&whichitem=".concat(item.id, "&pwd"));
}
/**
 * Empty a slot, or unequip all instances of a given equipped item
 *
 * @param thing The slot or item in question
 * @returns Whether we succeeded completely--`false` if we unequip some but not all instances of the item.
 */
function unequip(thing) {
  if (thing instanceof external_kolmafia_namespaceObject.Slot) return (0,external_kolmafia_namespaceObject.equip)(thing, template_string_$item.none);
  var failedSlots = external_kolmafia_namespaceObject.Slot.all().filter(s => {
    // Filter the slot out if it doesn't contain the relevant item
    if ((0,external_kolmafia_namespaceObject.equippedItem)(s) !== thing) return false;
    // Filter the slot out if we succeed at unequipping it
    return !unequip(s);
    // This leaves only slots that do contain the item but that we failed to unequip
  });

  if (failedSlots.length) dist_logger.debug("Failed to unequip ".concat(thing, " from slots ").concat(failedSlots.join(", ")));
  return failedSlots.length === 0;
}
/**
 * @returns a Date object corresponding to the current in-game day, at midnight
 */
function gameDay() {
  var _todayToString$match;
  var _map = ((_todayToString$match = (0,external_kolmafia_namespaceObject.todayToString)().match(/(\d{4})(\d{2})(\d{2})/)) !== null && _todayToString$match !== void 0 ? _todayToString$match : []).map(Number),
    _map2 = lib_slicedToArray(_map, 4),
    year = _map2[1],
    month = _map2[2],
    day = _map2[3];
  return new Date(year, month - 1, day, 0, 0, 0);
}
/**
 * @param [type="all"] the type of crafting to check for free crafts
 * @returns the number of free crafts available of that type
 */
function freeCrafts() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "all";
  var effectCrafts = effect => Math.floor(haveEffect(effect) / 5);
  var all = (lib_have($skill(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["Rapid Prototyping"])))) ? 5 - get("_rapidPrototypingUsed") : 0) + (lib_have($skill(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["Expert Corner-Cutter"])))) ? 5 - get("_expertCornerCutterUsed") : 0) + effectCrafts($effect(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["Inigo's Incantation of Inspiration"])))) + effectCrafts($effect(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["Craft Tea"])))) + effectCrafts($effect(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["Cooking Concentrate"]))));
  var food = type === "food" ? 5 - get("_cookbookbatCrafting") : 0;
  var smith = type === "smith" ? 5 - get("_thorsPliersCrafting") : 0;
  var booze = 0; // currently there is no booze specific free crafting skill
  return all + food + smith + booze;
}
var realmTypes = (/* unused pure expression or super */ null && (["spooky", "stench", "hot", "cold", "sleaze", "fantasy", "pirate", "cyber"]));
var todayOrAlways = x => get("_".concat(x, "Today")) || get("".concat(x, "Always"));
/**
 * @param identifier which realm to check for
 * @returns if that realm is available
 */
function realmAvailable(identifier) {
  switch (identifier) {
    case "fantasy":
      return todayOrAlways("fr");
    case "pirate":
      return todayOrAlways("pr");
    case "cyber":
      return todayOrAlways("cr");
    default:
      return todayOrAlways("".concat(identifier, "Airport"));
  }
}
/**
 * Compute the currently available Lucky Gold Ring Currencies
 * @param realm the realm type to consider
 * @returns The currency for the given zone
 */
function realmCurrency(realm) {
  switch (realm) {
    case "sleaze":
      return $item(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["Beach Buck"])));
    case "spooky":
      return $item(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["Coinspiracy"])));
    case "stench":
      return $item(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["FunFunds\u2122"])));
    case "cold":
      return $item(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["Wal-Mart gift certificate"])));
    case "hot":
      return $item(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["Volcoino"])));
    case "fantasy":
      return $item(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["Rubee\u2122"])));
    default:
      return null;
  }
}
/**
 * Compute which Lucky Gold Ring currencies are currently available
 * @returns a list of currently available currencies
 */
function lgrCurrencies() {
  return realmTypes.filter(realm => realmAvailable(realm) && !(realm === "hot" && get("_luckyGoldRingVolcoino"))).map(realmCurrency).filter(notNull);
}
var ACCOUNT_COMBAT_FLAGS = (/* unused pure expression or super */ null && (["aabosses", "wowbar", "bothcombatinterf", "compactmanuel", "eternalmrj", "disablelovebugs", "boringdarts"]));
/**
 * Get the current value of all of your account's combat setting flags
 * @param flags An array of the flags you want to get, defaults to all of them
 * @returns An array of objects that contain the flags and their values as booleans
 */
function getCombatFlags() {
  var flags = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [].concat(ACCOUNT_COMBAT_FLAGS);
  var accountPage = visitUrl("account.php?tab=combat");
  return flags.map(flag => ({
    flag,
    value: xpath(accountPage, "//*[@id=\"opt_flag_".concat(flag, "\"]/label/input[@type='checkbox']@checked"))[0] === "checked"
  }));
}
/**
 * Sets the given combat setting flags on your account
 *
 * @param flags A spread array of objects that contain a flag and its desired value; these look like the return value of `getCombatFlags`
 * @returns the result of the associated `visitUrl` call
 */
function setCombatFlags() {
  for (var _len2 = arguments.length, flags = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    flags[_key2] = arguments[_key2];
  }
  return visitUrl("account.php?".concat(([].concat(lib_toConsumableArray(flags.flatMap(_ref13 => {
    var flag = _ref13.flag,
      value = _ref13.value;
    return ["actions[]=flag_".concat(flag), "flag_".concat(flag, "=").concat(Number(value))];
  })), ["action=Update", "am=1", "ajax=1", "pwd"]).join("&"), true)));
}
/**
 * Perform a given action with certain combat setting flags set, returning them to their initial values if possible
 *
 * @param action The action you want to do with the given combat setting flags
 * @param flags A spread array of objects that contain a combat setting flag and its desired value; these look like the return value of `getCombatFlags`
 * @returns The result of the action
 */
function withCombatFlags(action) {
  for (var _len3 = arguments.length, flags = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    flags[_key3 - 1] = arguments[_key3];
  }
  var initialValues = getCombatFlags(flags.map(_ref14 => {
    var flag = _ref14.flag;
    return flag;
  }));
  try {
    return action();
  } finally {
    setCombatFlags.apply(void 0, lib_toConsumableArray(initialValues));
  }
}
/**
 * Determines whether you currently have an effect intrinsically
 * @param effect The effect in question
 * @returns Whether you have that effect as an intrinsic. Alternately you could just have over 2147483647 turns of that effect, but that seems unlikely.
 */
function haveIntrinsic(effect) {
  return haveEffect(effect) >= 2147483647;
}
/**
 * Extracts a map of gained items from a string, for example from the result
 * of a combat.
 *
 * NOTE: Make sure you trust the source of that text.
 *
 * @param text The text to extract items from
 * @returns A map of items and their quantities
 */
function extractItems(text) {
  return new Map(Object.entries((0,external_kolmafia_namespaceObject.extractItems)(text)).map(_ref15 => {
    var _ref16 = lib_slicedToArray(_ref15, 2),
      itemName = _ref16[0],
      quantity = _ref16[1];
    return [external_kolmafia_namespaceObject.Item.get(itemName), quantity];
  }));
}
function makeScalerCalcFunction(cache, pattern) {
  return function (monster) {
    var _find, _pattern$exec$slice, _pattern$exec;
    var current = cache.get(monster);
    if (current !== undefined) return (0,external_kolmafia_namespaceObject.monsterEval)(current);
    var result = (_find = ((_pattern$exec$slice = (_pattern$exec = pattern.exec(monster.attributes)) === null || _pattern$exec === void 0 ? void 0 : _pattern$exec.slice(1)) !== null && _pattern$exec$slice !== void 0 ? _pattern$exec$slice : []).find(m => m !== undefined)) !== null && _find !== void 0 ? _find : "0";
    cache.set(monster, result);
    return (0,external_kolmafia_namespaceObject.monsterEval)(result);
  };
}
var scalerRates = new Map();
var scalerCaps = new Map();
var SCALE_RATE_PATTERN = /Scale: (?:\[([^\]]*)\]|(\d*))/;
var SCALE_CAP_PATTERN = /Cap: (?:\[([^\]]*)\]|(\d*))/;
/**
 * Calculate & return the scaling rate of a monster--`0` for non-scalers.
 * @param monster The monster to check
 * @returns The current scaling rate of the monster, based on your current in-game state
 */
var getScalingRate = makeScalerCalcFunction(scalerRates, SCALE_RATE_PATTERN);
/**
 * Calculate & return the scaling cap of a monster--`0` for non-scalers.
 * @param monster The monster to check
 * @returns The current scaling cap of the monster, based on your current in-game state
 */
var getScalingCap = makeScalerCalcFunction(scalerCaps, SCALE_CAP_PATTERN);
/**
 * Wrap a specified action in mafia's `batchOpen` and `batchClose`
 *
 * @param action Action to perform while using mafia's batching feature
 * @returns The return value of the action
 */
function withBatch(action) {
  batchOpen();
  try {
    return action();
  } finally {
    batchClose();
  }
}
var makeBulkFunction = action => items => {
  (0,external_kolmafia_namespaceObject.batchOpen)();
  var _iterator2 = lib_createForOfIteratorHelper(items.entries()),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = lib_slicedToArray(_step2.value, 2),
        item = _step2$value[0],
        quantity = _step2$value[1];
      action(quantity, item);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return (0,external_kolmafia_namespaceObject.batchClose)();
};
/*
 * Autosell items in bulk
 */
var bulkAutosell = makeBulkFunction(external_kolmafia_namespaceObject.autosell);
/*
 * Closet items in bulk
 * Note: each item transfer will still consume one request
 */
var bulkPutCloset = makeBulkFunction(external_kolmafia_namespaceObject.putCloset);
/*
 * Display items in bulk
 */
var bulkPutDisplay = makeBulkFunction(external_kolmafia_namespaceObject.putDisplay);
/*
 * Deposit items into your clan stash in bulk
 */
var bulkPutStash = makeBulkFunction(external_kolmafia_namespaceObject.putStash);
/*
 * Remove items from your closet in bulk
 * Note: each item transfer will still consume one request
 */
var bulkTakeCloset = makeBulkFunction(external_kolmafia_namespaceObject.takeCloset);
/*
 * Remove items from your display case in bulk
 */
var bulkTakeDisplay = makeBulkFunction(external_kolmafia_namespaceObject.takeDisplay);
/*
 * Remove items from your shop in bulk
 */
var bulkTakeShop = makeBulkFunction(external_kolmafia_namespaceObject.takeShop);
/*
 * Withdraw items from your clan stash in bulk
 * Note: each item transfer will still consume one request
 */
var bulkTakeStash = makeBulkFunction(external_kolmafia_namespaceObject.takeStash);
/*
 * Remove items from your Hagnk's in bulk
 */
var bulkTakeStorage = makeBulkFunction(external_kolmafia_namespaceObject.takeStorage);
/*
 * Mallsell items in bulk
 */
var bulkPutShop = items => {
  batchOpen();
  var _iterator3 = lib_createForOfIteratorHelper(items.entries()),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _step3$value = lib_slicedToArray(_step3.value, 2),
        item = _step3$value[0],
        _step3$value$ = _step3$value[1],
        quantity = _step3$value$.quantity,
        limit = _step3$value$.limit,
        price = _step3$value$.price;
      if (quantity) {
        putShop(price, limit !== null && limit !== void 0 ? limit : 0, quantity, item);
      } else {
        putShop(price, limit !== null && limit !== void 0 ? limit : 0, item);
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return batchClose();
};
/*
 * Coinmaster-sell items to the same coinmaster in bulk
 */
var bulkSell = (coinmaster, items) => {
  batchOpen();
  var _iterator4 = lib_createForOfIteratorHelper(items.entries()),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _step4$value = lib_slicedToArray(_step4.value, 2),
        item = _step4$value[0],
        quantity = _step4$value[1];
      sell(coinmaster, quantity, item);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return batchClose();
};
/*
 * Reprice items in your mallstore in bulk
 */
var bulkRepriceShop = items => {
  batchOpen();
  var _iterator5 = lib_createForOfIteratorHelper(items.entries()),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var _step5$value = lib_slicedToArray(_step5.value, 2),
        item = _step5$value[0],
        _step5$value$ = _step5$value[1],
        limit = _step5$value$.limit,
        price = _step5$value$.price;
      if (limit) {
        repriceShop(price, limit, item);
      } else {
        repriceShop(price, item);
      }
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  return batchClose();
};
/**
 * Calculate the total weight of a given familiar, including soup & modifiers
 * @param familiar The familiar to use--defaults to your current one
 * @param considerAdjustment Whether to include your `weightAdjustment` in the calculation
 * @returns The total weight of the given familiar
 */
function totalFamiliarWeight() {
  var familiar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0,external_kolmafia_namespaceObject.myFamiliar)();
  var considerAdjustment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return utils_clamp(utils_clamp((0,external_kolmafia_namespaceObject.familiarWeight)(familiar), lib_have(template_string_$effect(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["Fidoxene"])))) ? 20 : 0, Infinity) + familiar.soupWeight + (considerAdjustment ? (0,external_kolmafia_namespaceObject.weightAdjustment)() : 0) + (familiar.feasted ? 10 : 0), 1, Infinity);
}
var regularFamiliarTags = Object.freeze(["animal", "insect", "haseyes", "haswings", "fast", "bite", "flies", "hashands", "wearsclothes", "organic", "vegetable", "hovers", "edible", "food", "sentient", "cute", "mineral", "polygonal", "object", "undead", "cantalk", "evil", "orb", "spooky", "sleaze", "aquatic", "swims", "isclothes", "phallic", "stench", "hot", "hasbeak", "haslegs", "robot", "technological", "hard", "cold", "hasbones", "hasclaws", "reallyevil", "good", "person", "humanoid", "animatedart", "software", "hasshell", "hasstinger"]);
var regularFamiliarTagSet = new Set(regularFamiliarTags);
var pokefamUltTags = Object.freeze(["ult_bearhug", "ult_sticktreats", "ult_owlstare", "ult_bloodbath", "ult_pepperscorn", "ult_rainbowstorm"]);
var SPECIAL_ULTS = new Map([[template_string_$familiar(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["Nursine"]))), ["ult_bearhug"]], [template_string_$familiar(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["Caramel"]))), ["ult_sticktreats"]], [template_string_$familiar(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["Smashmoth"]))), ["ult_owlstare"]], [template_string_$familiar(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["Slotter"]))), ["ult_bloodbath"]], [template_string_$familiar(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["Cornbeefadon"]))), ["ult_pepperscorn"]], [template_string_$familiar(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["Mu"]))), ["ult_rainbowstorm"]]]);
/**
 * Type guard function to determine if a tag is a regular familiar tag or a pokefam ult
 * @param tag The familiar tag to check
 * @returns Asserts that `tag` is a `RegularFamiliarTag`
 */
function isRegularFamiliarTag(tag) {
  return regularFamiliarTagSet.has(tag);
}
/**
 * Find the tags (used in mumming trunk, stillsuit, etc) for a given familiar, EXCLUDING special tags used for pokefam ults
 * @param familiar The familiar in question
 * @returns An array of the familiar's tags
 */
function getRegularFamiliarTags(familiar) {
  return familiar.attributes.split("; ").filter(isRegularFamiliarTag);
}
/**
 * Find the tags (used in mumming trunk, stillsuit, etc) for a given familiar, INCLUDING special tags used for pokefam ults
 * @param familiar The familiar in question
 * @returns An array of the familiar's tags
 */
function getAllFamiliarTags(familiar) {
  var _SPECIAL_ULTS$get;
  return [].concat(lib_toConsumableArray(getRegularFamiliarTags(familiar)), lib_toConsumableArray((_SPECIAL_ULTS$get = SPECIAL_ULTS.get(familiar)) !== null && _SPECIAL_ULTS$get !== void 0 ? _SPECIAL_ULTS$get : []));
}
/**
 * Determines the cost of acquiring an item taking into account your valueOfInventory preference
 *
 * @param item The item to check the price of
 * @param quantity the number of items to acquire
 * @returns The total value of the items
 */
function getAcquirePrice(item) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (quantity <= 0) return 0;
  var currentAmount = availableAmount(item);
  var amountNeeded = Math.max(0, quantity - currentAmount);
  var retrieveCost = retrievePrice(item, currentAmount + quantity) - retrievePrice(item, currentAmount);
  var mallMinPrice = Math.max(100, 2 * autosellPrice(item));
  // If it's easy to meatpaste, just rely on retrieveCost
  if (craftType(item) === "Meatpasting" && retrieveCost > 0) {
    return retrieveCost;
  }
  if (isNpcItem(item) && npcPrice(item) > 0 && npcPrice(item) < mallPrice(item)) {
    // If it's best handled through NPC shops, handle it through NPC shops
    return quantity * npcPrice(item);
  }
  if (item.tradeable) {
    if (mallPrice(item) === mallMinPrice) {
      // Value the ones you have at autosell, because that's what you'd sell them at
      // Value the ones you need to buy at the price you'd buy them at
      return clamp(currentAmount, 0, quantity) * autosellPrice(item) + amountNeeded * mallPrice(item);
    }
    if (mallPrice(item) > mallMinPrice) {
      // Value them all at mall price
      // regardless of whether you already owned them
      return quantity * mallPrice(item);
    }
    // The fallthrough case here is that the mallprice is somehow below mall min
    // That shouldn't really happen
    return quantity * autosellPrice(item);
  }
  if (item.discardable) {
    return lib_have(item, quantity) ? quantity * autosellPrice(item) : Infinity;
  }
  // If it can't be traded or discarded, and we're passing into this function, it's free
  // There might some day be specific items we don't want to value like this, because you receive only a limited number
  // We'll burn that bridge when we come to it.
  return 0;
}
/**
 * Perform an action while using a particular familiar
 * @param familiar The familiar you'd like to use
 * @param action A function that takes one argument--whether or not we successfully swapped to the requested familiar--and performs an action
 * @returns The return value of `action`
 */
function withFamiliar(familiar, action) {
  var initial = myFamiliar();
  try {
    return action(useFamiliar(familiar));
  } finally {
    useFamiliar(initial);
  }
}
/**
 *
 * @param target The place or Monster you expect to fight; accepts Monster, Location, or map of <Monster, number>
 * @returns A map of <Monster, number> defining for each Monster how many are present in target location
 */
function adventureTargetToWeightedMap(target) {
  if (target instanceof Monster) return new Map([[target, 1]]);
  if (target instanceof Location) {
    return new Map(Object.entries(appearanceRates(target, true)).map(_ref17 => {
      var _ref18 = lib_slicedToArray(_ref17, 2),
        monster = _ref18[0],
        rate = _ref18[1];
      return tuple(toMonster(monster), rate / 100);
    }));
  }
  return target;
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/overlappingNames.js
/** THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseItemSkillNames.ts for more information */
var overlappingItemNames = ["spider web", "really sticky spider web", "dictionary", "NG", "Cloaca-Cola", "yo-yo", "top", "ball", "kite", "yo", "red potion", "blue potion", "bowling ball", "adder", "red button", "tennis ball", "pile of sand", "mushroom", "deluxe mushroom", "spoon"];
var overlappingSkillNames = ["Lightning Bolt", "Shoot", "Thrust-Smack", "Headbutt", "Toss", "Knife in the Dark", "Sing", "Disarm", "LIGHT", "BURN", "Extract", "Meteor Shower", "Snipe", "Bite", "Kick", "Howl", "Cleave", "Boil", "Slice", "Rainbow", "Lightning Bolt"];
;// CONCATENATED MODULE: ./node_modules/libram/dist/propertyTypes.js
/** THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseDefaultProperties.ts for more information */
var booleanProperties = ["abortOnChoiceWhenNotInChoice", "addChatCommandLine", "addCreationQueue", "addStatusBarToFrames", "allowCloseableDesktopTabs", "allowNegativeTally", "allowNonMoodBurning", "allowSummonBurning", "autoHighlightOnFocus", "broadcastEvents", "cacheMallSearches", "chatBeep", "chatLinksUseRelay", "compactChessboard", "copyAsHTML", "customizedTabs", "debugBuy", "debugConsequences", "debugFoxtrotRemoval", "debugPathnames", "debugTopMenuStyle", "gapProtection", "gitInstallDependencies", "gitShowCommitMessages", "gitUpdateOnLogin", "greenScreenProtection", "guiUsesOneWindow", "hideServerDebugText", "logAcquiredItems", "logBattleAction", "logBrowserInteractions", "logChatMessages", "logChatRequests", "logCleanedHTML", "logDecoratedResponses", "logFamiliarActions", "logGainMessages", "logReadableHTML", "logPreferenceChange", "logMonsterHealth", "logReverseOrder", "logStatGains", "logStatusEffects", "logStatusOnLogin", "macroDebug", "macroLens", "mementoListActive", "mergeHobopolisChat", "pingLogin", "pingStealthyTimein", "printStackOnAbort", "proxySet", "relayAddSounds", "relayAddsCustomCombat", "relayAddsDiscoHelper", "relayAddsGraphicalCLI", "relayAddsQuickScripts", "relayAddsRestoreLinks", "relayAddsUpArrowLinks", "relayAddsUseLinks", "relayAddsWikiLinks", "relayAllowRemoteAccess", "relayBrowserOnly", "relayCacheUncacheable", "relayFormatsChatText", "relayHidesJunkMallItems", "relayMaintainsEffects", "relayMaintainsHealth", "relayMaintainsMana", "relayOverridesImages", "relayRunsAfterAdventureScript", "relayRunsBeforeBattleScript", "relayRunsBeforePVPScript", "relayScriptButtonFirst", "relayTextualizesEffects", "relayTrimsZapList", "relayUsesInlineLinks", "relayUsesIntegratedChat", "relayWarnOnRecoverFailure", "removeMalignantEffects", "saveSettingsOnSet", "sharePriceData", "showAllRequests", "showExceptionalRequests", "stealthLogin", "svnAlwaysAdd", "svnAlwaysOverwrite", "svnInstallDependencies", "svnShowCommitMessages", "svnUpdateOnLogin", "switchEquipmentForBuffs", "syncAfterSvnUpdate", "useChatToolbar", "useContactsFrame", "useDevServer", "useDockIconBadge", "useHugglerChannel", "useImageCache", "useLastUserAgent", "useSystemTrayIcon", "useTabbedChatFrame", "useToolbars", "useCachedVolcanoMaps", "useZoneComboBox", "verboseSpeakeasy", "verboseFloundry", "wrapLongLines", "_faxDataChanged", "_gitUpdated", "_svnRepoFileFetched", "_svnUpdated", "antagonisticSnowmanKitAvailable", "arcadeGameHints", "armoryUnlocked", "autoForbidIgnoringStores", "autoCraft", "autoQuest", "autoEntangle", "autoGarish", "autoManaRestore", "autoFillMayoMinder", "autoPinkyRing", "autoPlantHardcore", "autoPlantSoftcore", "autoPotionID", "autoRepairBoxServants", "autoSatisfyWithCloset", "autoSatisfyWithCoinmasters", "autoSatisfyWithMall", "autoSatisfyWithNPCs", "autoSatisfyWithStash", "autoSatisfyWithStorage", "autoSatisfyWithShop", "autoSetConditions", "autoSteal", "autoTuxedo", "backupCameraReverserEnabled", "badMoonEncounter01", "badMoonEncounter02", "badMoonEncounter03", "badMoonEncounter04", "badMoonEncounter05", "badMoonEncounter06", "badMoonEncounter07", "badMoonEncounter08", "badMoonEncounter09", "badMoonEncounter10", "badMoonEncounter11", "badMoonEncounter12", "badMoonEncounter13", "badMoonEncounter14", "badMoonEncounter15", "badMoonEncounter16", "badMoonEncounter17", "badMoonEncounter18", "badMoonEncounter19", "badMoonEncounter20", "badMoonEncounter21", "badMoonEncounter22", "badMoonEncounter23", "badMoonEncounter24", "badMoonEncounter25", "badMoonEncounter26", "badMoonEncounter27", "badMoonEncounter28", "badMoonEncounter29", "badMoonEncounter30", "badMoonEncounter31", "badMoonEncounter32", "badMoonEncounter33", "badMoonEncounter34", "badMoonEncounter35", "badMoonEncounter36", "badMoonEncounter37", "badMoonEncounter38", "badMoonEncounter39", "badMoonEncounter40", "badMoonEncounter41", "badMoonEncounter42", "badMoonEncounter43", "badMoonEncounter44", "badMoonEncounter45", "badMoonEncounter46", "badMoonEncounter47", "badMoonEncounter48", "barrelShrineUnlocked", "batWingsBatHoleEntrance", "batWingsBatratBurrow", "batWingsBeanbatChamber", "batWingsGuanoJunction", "bigBrotherRescued", "blackBartsBootyAvailable", "bondAdv", "bondBeach", "bondBeat", "bondBooze", "bondBridge", "bondDesert", "bondDR", "bondDrunk1", "bondDrunk2", "bondHoney", "bondHP", "bondInit", "bondItem1", "bondItem2", "bondItem3", "bondJetpack", "bondMartiniDelivery", "bondMartiniPlus", "bondMartiniTurn", "bondMeat", "bondMox1", "bondMox2", "bondMPregen", "bondMus1", "bondMus2", "bondMys1", "bondMys2", "bondSpleen", "bondStat", "bondStat2", "bondStealth", "bondStealth2", "bondSymbols", "bondWar", "bondWeapon2", "bondWpn", "bookOfIronyAvailable", "booPeakLit", "bootsCharged", "breakfastCompleted", "burlyBodyguardReceivedBonus", "burrowgrubHiveUsed", "calzoneOfLegendEaten", "candyCaneSwordApartmentBuilding", "candyCaneSwordBlackForest", "candyCaneSwordBowlingAlley", "candyCaneSwordCopperheadClub", "candyCaneSwordDailyDungeon", "candyCaneSwordDefiledCranny", "candyCaneSwordFunHouse", "candyCaneSwordShore", "candyCaneSwordWarFratRoom", "candyCaneSwordWarFratZetas", "candyCaneSwordWarHippyBait", "candyCaneSwordWarHippyLine", "canteenUnlocked", "chaosButterflyThrown", "chatbotScriptExecuted", "chateauAvailable", "chatLiterate", "chatServesUpdates", "checkJackassHardcore", "checkJackassSoftcore", "clanAttacksEnabled", "coldAirportAlways", "considerShadowNoodles", "controlRoomUnlock", "concertVisited", "controlPanel1", "controlPanel2", "controlPanel3", "controlPanel4", "controlPanel5", "controlPanel6", "controlPanel7", "controlPanel8", "controlPanel9", "corralUnlocked", "crAlways", "crimbo23ArmoryAtWar", "crimbo23BarAtWar", "crimbo23CafeAtWar", "crimbo23CottageAtWar", "crimbo23FoundryAtWar", "cyberDatastickCollected", "dailyDungeonDone", "dampOldBootPurchased", "daycareOpen", "deepDishOfLegendEaten", "demonSummoned", "dinseyAudienceEngagement", "dinseyGarbagePirate", "dinseyRapidPassEnabled", "dinseyRollercoasterNext", "dinseySafetyProtocolsLoose", "doghouseBoarded", "dontStopForCounters", "drippingHallUnlocked", "drippyShieldUnlocked", "edUsedLash", "eldritchFissureAvailable", "eldritchHorrorAvailable", "enqueueForConsumption", "errorOnAmbiguousFold", "essenceOfAnnoyanceAvailable", "essenceOfBearAvailable", "expressCardUsed", "falloutShelterChronoUsed", "falloutShelterCoolingTankUsed", "fireExtinguisherBatHoleUsed", "fireExtinguisherChasmUsed", "fireExtinguisherCyrptUsed", "fireExtinguisherDesertUsed", "fireExtinguisherHaremUsed", "fistTeachingsHaikuDungeon", "fistTeachingsPokerRoom", "fistTeachingsBarroomBrawl", "fistTeachingsConservatory", "fistTeachingsBatHole", "fistTeachingsFunHouse", "fistTeachingsMenagerie", "fistTeachingsSlums", "fistTeachingsFratHouse", "fistTeachingsRoad", "fistTeachingsNinjaSnowmen", "flickeringPixel1", "flickeringPixel2", "flickeringPixel3", "flickeringPixel4", "flickeringPixel5", "flickeringPixel6", "flickeringPixel7", "flickeringPixel8", "floristFriarAvailable", "floristFriarChecked", "frAlways", "frCemetaryUnlocked", "friarsBlessingReceived", "frMountainsUnlocked", "frSwampUnlocked", "frVillageUnlocked", "frWoodUnlocked", "getawayCampsiteUnlocked", "ghostPencil1", "ghostPencil2", "ghostPencil3", "ghostPencil4", "ghostPencil5", "ghostPencil6", "ghostPencil7", "ghostPencil8", "ghostPencil9", "gingerAdvanceClockUnlocked", "gingerBlackmailAccomplished", "gingerbreadCityAvailable", "gingerExtraAdventures", "gingerNegativesDropped", "gingerSewersUnlocked", "gingerSubwayLineUnlocked", "gingerRetailUnlocked", "glitchItemAvailable", "grabCloversHardcore", "grabCloversSoftcore", "grandpaUnlockedBlankPrescriptionSheet", "grandpaUnlockedEelSauce", "grandpaUnlockedFishyWand", "grandpaUnlockedGlowingSyringe", "grandpaUnlockedGroupieSpangles", "grandpaUnlockedHairOfTheFish", "grandpaUnlockedHalibut", "grandpaUnlockedHeavilyInvestedInPunFutures", "grandpaUnlockedJellyfishGel", "grandpaUnlockedMarineAquamarine", "grandpaUnlockedMidgetClownfish", "grandpaUnlockedSeaRadish", "grandpaUnlockedTrophyFish", "grandpaUnlockedWaterPoloCap", "grandpaUnlockedWaterPoloMitt", "guideToSafariAvailable", "guyMadeOfBeesDefeated", "hallowienerDefiledNook", "hallowienerGuanoJunction", "hallowienerKnollGym", "hallowienerMadnessBakery", "hallowienerMiddleChamber", "hallowienerOvergrownLot", "hallowienerSkeletonStore", "hallowienerSmutOrcs", "hallowienerSonofaBeach", "hallowienerVolcoino", "hardcorePVPWarning", "harvestBatteriesHardcore", "harvestBatteriesSoftcore", "hasAutumnaton", "hasBartender", "hasChef", "hasCocktailKit", "hasCosmicBowlingBall", "hasDetectiveSchool", "hasMaydayContract", "hasOven", "hasRange", "hasShaker", "hasShrunkenHead", "hasSushiMat", "hasTwinkleVision", "haveBoxingDaydreamHardcore", "haveBoxingDaydreamSoftcore", "hermitHax0red", "holidayHalsBookAvailable", "horseryAvailable", "hotAirportAlways", "intenseCurrents", "isMerkinGladiatorChampion", "isMerkinHighPriest", "itemBoughtPerAscension637", "itemBoughtPerAscension8266", "itemBoughtPerAscension10790", "itemBoughtPerAscension10794", "itemBoughtPerAscension10795", "itemBoughtPerCharacter6423", "itemBoughtPerCharacter6428", "itemBoughtPerCharacter6429", "kingLiberated", "lastPirateInsult1", "lastPirateInsult2", "lastPirateInsult3", "lastPirateInsult4", "lastPirateInsult5", "lastPirateInsult6", "lastPirateInsult7", "lastPirateInsult8", "lawOfAveragesAvailable", "leafletCompleted", "ledCandleDropped", "libraryCardUsed", "lockPicked", "logBastilleBattalionBattles", "loginRecoveryHardcore", "loginRecoverySoftcore", "lovebugsUnlocked", "loveTunnelAvailable", "lowerChamberUnlock", "madnessBakeryAvailable", "makeHandheldRadiosHardcore", "makeHandheldRadiosSoftcore", "makePocketWishesHardcore", "makePocketWishesSoftcore", "manualOfNumberologyAvailable", "mappingMonsters", "mapToAnemoneMinePurchased", "mapToKokomoAvailable", "mapToMadnessReefPurchased", "mapToTheDiveBarPurchased", "mapToTheMarinaraTrenchPurchased", "mapToTheSkateParkPurchased", "maraisBeaverUnlock", "maraisCorpseUnlock", "maraisDarkUnlock", "maraisVillageUnlock", "maraisWildlifeUnlock", "maraisWizardUnlock", "maximizerAlwaysCurrent", "maximizerCreateOnHand", "maximizerCurrentMallPrices", "maximizerFoldables", "maximizerIncludeAll", "maximizerNoAdventures", "maximizerUseScope", "merkinElementaryBathroomUnlock", "merkinElementaryJanitorUnlock", "merkinElementaryTeacherUnlock", "middleChamberUnlock", "milkOfMagnesiumActive", "moonTuned", "neverendingPartyAlways", "noncombatForcerActive", "oasisAvailable", "odeBuffbotCheck", "oilPeakLit", "oscusSodaUsed", "outrageousSombreroUsed", "overgrownLotAvailable", "ownsFloristFriar", "ownsSpeakeasy", "pathedSummonsHardcore", "pathedSummonsSoftcore", "pirateRealmUnlockedAnemometer", "pirateRealmUnlockedBlunderbuss", "pirateRealmUnlockedBreastplate", "pirateRealmUnlockedClipper", "pirateRealmUnlockedCrabsicle", "pirateRealmUnlockedFlag", "pirateRealmUnlockedFork", "pirateRealmUnlockedGoldRing", "pirateRealmUnlockedManOWar", "pirateRealmUnlockedPlushie", "pirateRealmUnlockedRadioRing", "pirateRealmUnlockedRhum", "pirateRealmUnlockedScurvySkillbook", "pirateRealmUnlockedShavingCream", "pirateRealmUnlockedSpyglass", "pirateRealmUnlockedTattoo", "pirateRealmUnlockedThirdCrewmate", "pirateRealmUnlockedTikiSkillbook", "pizzaOfLegendEaten", "popularTartUnlocked", "potatoAlarmClockUsed", "prAlways", "prayedForGlamour", "prayedForProtection", "prayedForVigor", "primaryLabCheerCoreGrabbed", "pumpkinSpiceWhorlUsed", "pyramidBombUsed", "rageGlandVented", "readManualHardcore", "readManualSoftcore", "relayDecorateJsCommands", "relayShowSpoilers", "relayShowWarnings", "rememberDesktopSize", "replicaChateauAvailable", "replicaNeverendingPartyAlways", "replicaWitchessSetAvailable", "requireBoxServants", "requireSewerTestItems", "restUsingCampAwayTent", "restUsingChateau", "ROMOfOptimalityAvailable", "safePickpocket", "schoolOfHardKnocksDiplomaAvailable", "scriptCascadingMenus", "serverAddsCustomCombat", "serverAddsBothCombat", "SHAWARMAInitiativeUnlocked", "showForbiddenStores", "showGainsPerUnit", "showIgnoringStorePrices", "showNoSummonOnly", "showTurnFreeOnly", "shubJigguwattDefeated", "skeletonStoreAvailable", "sleazeAirportAlways", "snojoAvailable", "sortByEffect", "sortByRoom", "spacegateAlways", "spacegateVaccine1", "spacegateVaccine2", "spacegateVaccine3", "spaceInvaderDefeated", "spelunkyHints", "spiceMelangeUsed", "spookyAirportAlways", "stenchAirportAlways", "stopForFixedWanderer", "stopForUltraRare", "styxPixieVisited", "superconductorDefeated", "suppressCyberRealmDarkMode", "suppressCyberRealmGreenImages", "suppressInappropriateNags", "suppressPowerPixellation", "suppressMallPriceCacheMessages", "telegraphOfficeAvailable", "telescopeLookedHigh", "timeTowerAvailable", "trackLightsOut", "uneffectWithHotTub", "universalSeasoningActive", "universalSeasoningAvailable", "useBookOfEverySkillHardcore", "useBookOfEverySkillSoftcore", "useCrimboToysHardcore", "useCrimboToysSoftcore", "verboseMaximizer", "visitLoungeHardcore", "visitLoungeSoftcore", "visitRumpusHardcore", "visitRumpusSoftcore", "voteAlways", "wildfireBarrelCaulked", "wildfireDusted", "wildfireFracked", "wildfirePumpGreased", "wildfireSprinkled", "yearbookCameraPending", "yogUrtDefeated", "youRobotScavenged", "_2002MrStoreCreditsCollected", "_affirmationCookieEaten", "_affirmationHateUsed", "_airFryerUsed", "_akgyxothUsed", "_alienAnimalMilkUsed", "_alienPlantPodUsed", "_allYearSucker", "_alliedRadioMaterielIntel", "_alliedRadioWildsunBoon", "_aprilShower", "_aprilShowerGlobsCollected", "_aprilShowerLungingThrustSmack", "_aprilShowerNorthernExplosion", "_aprilShowerSimmer", "_armyToddlerCast", "_aug1Cast", "_aug2Cast", "_aug3Cast", "_aug4Cast", "_aug5Cast", "_aug6Cast", "_aug7Cast", "_aug8Cast", "_aug9Cast", "_aug10Cast", "_aug11Cast", "_aug12Cast", "_aug13Cast", "_aug14Cast", "_aug15Cast", "_aug16Cast", "_aug17Cast", "_aug18Cast", "_aug19Cast", "_aug20Cast", "_aug21Cast", "_aug22Cast", "_aug23Cast", "_aug24Cast", "_aug25Cast", "_aug26Cast", "_aug27Cast", "_aug28Cast", "_aug29Cast", "_aug30Cast", "_aug31Cast", "_augTodayCast", "_authorsInkUsed", "_baconMachineUsed", "_bagOfCandy", "_bagOfCandyUsed", "_bagOTricksUsed", "_ballastTurtleUsed", "_ballInACupUsed", "_ballpit", "_barrelPrayer", "_bastilleLastBattleWon", "_beachCombing", "_bendHellUsed", "_blackMonolithUsed", "_blankoutUsed", "_bloodBagDoctorBag", "_bloodBagCloake", "_bloodBankIntimidated", "_bloodBankVisited", "_bonersSummoned", "_bookOfEverySkillUsed", "_borrowedTimeUsed", "_bowleggedSwaggerUsed", "_bowlFullOfJellyUsed", "_boxOfHammersUsed", "_brainPreservationFluidUsed", "_brassDreadFlaskUsed", "_cameraUsed", "_canSeekBirds", "_candyCaneSwordBackAlley", "_candyCaneSwordHauntedBedroom", "_candyCaneSwordHauntedLibrary", "_candyCaneSwordLyle", "_candyCaneSwordMadnessBakery", "_candyCaneSwordOvergrownLot", "_candyCaneSwordOvergrownShrine", "_candyCaneSwordPalindome", "_candyCaneSwordSouthOfTheBorder", "_candyCaneSwordSpookyForest", "_carboLoaded", "_cargoPocketEmptied", "_ceciHatUsed", "_chateauDeskHarvested", "_chateauMonsterFought", "_chibiChanged", "_chronerCrossUsed", "_chronerTriggerUsed", "_chubbyAndPlumpUsed", "_circadianRhythmsRecalled", "_circleDrumUsed", "_clanFortuneBuffUsed", "_claraBellUsed", "_coalPaperweightUsed", "_cocoaDispenserUsed", "_cocktailShakerUsed", "_coldAirportToday", "_coldOne", "_communismUsed", "_confusingLEDClockUsed", "_controlPanelUsed", "_cookbookbatRecipeDrops", "_coolerYetiAdventures", "_corruptedStardustUsed", "_cosmicSixPackConjured", "_crappyCameraUsed", "_creepyVoodooDollUsed", "_crimboPastDailySpecial", "_crimboPastMedicalGruel", "_crimboPastPrizeTurkey", "_crimboPastSmokingPope", "_crimboTraining", "_crimboTree", "_crToday", "_cursedKegUsed", "_cursedMicrowaveUsed", "_cyberTrashCollected", "_dailyDungeonMalwareUsed", "_darkChocolateHeart", "_daycareFights", "_daycareNap", "_daycareSpa", "_daycareToday", "_defectiveTokenChecked", "_defectiveTokenUsed", "_dinseyGarbageDisposed", "_discoKnife", "_distentionPillUsed", "_dnaHybrid", "_docClocksThymeCocktailDrunk", "_douseFoeSuccess", "_drippingHallDoor1", "_drippingHallDoor2", "_drippingHallDoor3", "_drippingHallDoor4", "_drippyCaviarUsed", "_drippyNuggetUsed", "_drippyPilsnerUsed", "_drippyPlumUsed", "_drippyWineUsed", "_eldritchHorrorEvoked", "_eldritchTentacleFought", "_emberingHulkFought", "_entauntaunedToday", "_envyfishEggUsed", "_epicMcTwistUsed", "_essentialTofuUsed", "_etchedHourglassUsed", "_eternalCarBatteryUsed", "_everfullGlassUsed", "_extraGreasySliderEaten", "_eyeAndATwistUsed", "_fancyChessSetUsed", "_falloutShelterSpaUsed", "_fancyHotDogEaten", "_farmerItemsCollected", "_favoriteBirdVisited", "_firedJokestersGun", "_fireExtinguisherRefilled", "_fireStartingKitUsed", "_fireworksShop", "_fireworksShopHatBought", "_fireworksShopEquipmentBought", "_fireworkUsed", "_fishyPipeUsed", "_flagellateFlagonUsed", "_floundryItemCreated", "_floundryItemUsed", "_freePillKeeperUsed", "_frToday", "_frostyMugUsed", "_fudgeSporkUsed", "_garbageItemChanged", "_gingerBiggerAlligators", "_gingerbreadCityToday", "_gingerbreadClockAdvanced", "_gingerbreadClockVisited", "_gingerbreadColumnDestroyed", "_gingerbreadMobHitUsed", "_glennGoldenDiceUsed", "_glitchItemImplemented", "_gnollEyeUsed", "_gnomePart", "_governmentPerDiemUsed", "_grimBuff", "_guildManualUsed", "_guzzlrQuestAbandoned", "_hardKnocksDiplomaUsed", "_hippyMeatCollected", "_hobbyHorseUsed", "_hodgmansBlanketDrunk", "_holidayFunUsed", "_holoWristCrystal", "_hotAirportToday", "_hungerSauceUsed", "_hyperinflatedSealLungUsed", "_iceHotelRoomsRaided", "_iceSculptureUsed", "_incredibleSelfEsteemCast", "_infernoDiscoVisited", "_infiniteJellyUsed", "_internetDailyDungeonMalwareBought", "_internetGallonOfMilkBought", "_internetPlusOneBought", "_internetPrintScreenButtonBought", "_internetViralVideoBought", "_interviewIsabella", "_interviewMasquerade", "_interviewVlad", "_inquisitorsUnidentifiableObjectUsed", "_ironicMoustache", "_jackassPlumberGame", "_jarlsCheeseSummoned", "_jarlsCreamSummoned", "_jarlsDoughSummoned", "_jarlsEggsSummoned", "_jarlsFruitSummoned", "_jarlsMeatSummoned", "_jarlsPotatoSummoned", "_jarlsVeggiesSummoned", "_jingleBellUsed", "_jukebox", "_kgbFlywheelCharged", "_kgbLeftDrawerUsed", "_kgbOpened", "_kgbRightDrawerUsed", "_kolConSixPackUsed", "_kolhsCutButNotDried", "_kolhsIsskayLikeAnAshtray", "_kolhsPoeticallyLicenced", "_kolhsSchoolSpirited", "_kudzuSaladEaten", "_lastCombatLost", "_lastCombatWon", "_latteBanishUsed", "_latteCopyUsed", "_latteDrinkUsed", "_leafAntEggCrafted", "_leafDayShortenerCrafted", "_leafTattooCrafted", "_leavesJumped", "_legendaryBeat", "_licenseToChillUsed", "_lodestoneUsed", "_lookingGlass", "_loveTunnelToday", "_loveTunnelUsed", "_luckyGoldRingVolcoino", "_lunchBreak", "_lupineHormonesUsed", "_lyleFavored", "_madLiquorDrunk", "_madTeaParty", "_mafiaMiddleFingerRingUsed", "_managerialManipulationUsed", "_mansquitoSerumUsed", "_mapToACandyRichBlockUsed", "_maydayDropped", "_mayoDeviceRented", "_mayoTankSoaked", "_meatballMachineUsed", "_meatifyMatterUsed", "_milkOfMagnesiumUsed", "_mimeArmyShotglassUsed", "_miniKiwiIntoxicatingSpiritsBought", "_miniKiwiTipiDrop", "_missGravesVermouthDrunk", "_missileLauncherUsed", "_molehillMountainUsed", "_momFoodReceived", "_mrBurnsgerEaten", "_muffinOrderedToday", "_mulliganStewEaten", "_mushroomGardenVisited", "_neverendingPartyToday", "_newYouQuestCompleted", "_olympicSwimmingPool", "_olympicSwimmingPoolItemFound", "_overflowingGiftBasketUsed", "_partyHard", "_pastaAdditive", "_perfectFreezeUsed", "_perfectlyFairCoinUsed", "_petePartyThrown", "_peteRiotIncited", "_photocopyUsed", "_pickyTweezersUsed", "_pickleJuiceDrunk", "_pingPongGame", "_pirateBellowUsed", "_pirateDinghyUsed", "_pirateForkUsed", "_pirateRealmSoldCompass", "_pirateRealmWindicleUsed", "_pixelOrbUsed", "_plumbersMushroomStewEaten", "_pneumaticityPotionUsed", "_portableSteamUnitUsed", "_pottedTeaTreeUsed", "_prToday", "_psychoJarFilled", "_psychoJarUsed", "_psychokineticHugUsed", "_punchingMirrorUsed", "_rainStickUsed", "_redwoodRainStickUsed", "_replicaSnowconeTomeUsed", "_replicaResolutionLibramUsed", "_replicaSmithsTomeUsed", "_requestSandwichSucceeded", "_rhinestonesAcquired", "_saladForkUsed", "_seadentWaveUsed", "_seaJellyHarvested", "_septEmberBalanceChecked", "_setOfJacksUsed", "_sewingKitUsed", "_sexChanged", "_shadowAffinityToday", "_shadowForestLooted", "_shrubDecorated", "_silverDreadFlaskUsed", "_sitCourseCompleted", "_skateBuff1", "_skateBuff2", "_skateBuff3", "_skateBuff4", "_skateBuff5", "_sleazeAirportToday", "_snowballFactoryUsed", "_sobrieTeaUsed", "_softwareGlitchTurnReceived", "_sotParcelReturned", "_spacegateMurderbot", "_spacegateRuins", "_spacegateSpant", "_spacegateToday", "_spacegateVaccine", "_spaghettiBreakfast", "_spaghettiBreakfastEaten", "_spinmasterLatheVisited", "_spinningWheel", "_spookyAirportToday", "_stabonicScrollUsed", "_steelyEyedSquintUsed", "_stenchAirportToday", "_stinkyCheeseBanisherUsed", "_strangeStalagmiteUsed", "_streamsCrossed", "_structuralEmberUsed", "_stuffedPocketwatchUsed", "_styxSprayUsed", "_summonAnnoyanceUsed", "_summonCarrotUsed", "_summonResortPassUsed", "_sweetToothUsed", "_syntheticDogHairPillUsed", "_tacoFlierUsed", "_takerSpaceSuppliesDelivered", "_telegraphOfficeToday", "_templeHiddenPower", "_tempuraAirUsed", "_thesisDelivered", "_tiedUpFlamingLeafletFought", "_tiedUpFlamingMonsteraFought", "_tiedUpLeaviathanFought", "_timeSpinnerReplicatorUsed", "_toastSummoned", "_tonicDjinn", "_treasuryEliteMeatCollected", "_treasuryHaremMeatCollected", "_trivialAvocationsGame", "_tryptophanDartUsed", "_turtlePowerCast", "_twelveNightEnergyUsed", "_ultraMegaSourBallUsed", "_unblemishedPearlAnemoneMine", "_unblemishedPearlDiveBar", "_unblemishedPearlMadnessReef", "_unblemishedPearlMarinaraTrench", "_unblemishedPearlTheBriniestDeepests", "_victorSpoilsUsed", "_villainLairCanLidUsed", "_villainLairColorChoiceUsed", "_villainLairDoorChoiceUsed", "_villainLairFirecrackerUsed", "_villainLairSymbologyChoiceUsed", "_villainLairWebUsed", "_vmaskBanisherUsed", "_voraciTeaUsed", "_volcanoItemRedeemed", "_volcanoSuperduperheatedMetal", "_voodooSnuffUsed", "_voteToday", "_VYKEACafeteriaRaided", "_VYKEALoungeRaided", "_walfordQuestStartedToday", "_warbearBankUsed", "_warbearBreakfastMachineUsed", "_warbearGyrocopterUsed", "_warbearSodaMachineUsed", "_wildfireBarrelHarvested", "_witchessBuff", "_workshedItemUsed", "_yamBatteryUsed", "_zombieClover", "_preventScurvy", "lockedItem4637", "lockedItem4638", "lockedItem4639", "lockedItem4646", "lockedItem4647", "unknownRecipe3542", "unknownRecipe3543", "unknownRecipe3544", "unknownRecipe3545", "unknownRecipe3546", "unknownRecipe3547", "unknownRecipe3548", "unknownRecipe3749", "unknownRecipe3751", "unknownRecipe4172", "unknownRecipe4173", "unknownRecipe4174", "unknownRecipe5060", "unknownRecipe5061", "unknownRecipe5062", "unknownRecipe5063", "unknownRecipe5064", "unknownRecipe5066", "unknownRecipe5067", "unknownRecipe5069", "unknownRecipe5070", "unknownRecipe5072", "unknownRecipe5073", "unknownRecipe5670", "unknownRecipe5671", "unknownRecipe6501", "unknownRecipe6564", "unknownRecipe6565", "unknownRecipe6566", "unknownRecipe6567", "unknownRecipe6568", "unknownRecipe6569", "unknownRecipe6570", "unknownRecipe6571", "unknownRecipe6572", "unknownRecipe6573", "unknownRecipe6574", "unknownRecipe6575", "unknownRecipe6576", "unknownRecipe6577", "unknownRecipe6578", "unknownRecipe7752", "unknownRecipe7753", "unknownRecipe7754", "unknownRecipe7755", "unknownRecipe7756", "unknownRecipe7757", "unknownRecipe7758", "unknownRecipe10970", "unknownRecipe10971", "unknownRecipe10972", "unknownRecipe10973", "unknownRecipe10974", "unknownRecipe10975", "unknownRecipe10976", "unknownRecipe10977", "unknownRecipe10978", "unknownRecipe10988", "unknownRecipe10989", "unknownRecipe10990", "unknownRecipe10991", "unknownRecipe10992", "unknownRecipe11000"];
var numericProperties = ["coinMasterIndex", "dailyDeedsVersion", "defaultDropdown1", "defaultDropdown2", "defaultDropdownSplit", "defaultLimit", "fixedThreadPoolSize", "itemManagerIndex", "lastBuffRequestType", "lastGlobalCounterDay", "lastImageCacheClear", "pingDefaultTestPings", "pingLoginCount", "pingLoginGoal", "pingLoginThreshold", "pingTestPings", "previousUpdateRevision", "relayDelayForSVN", "relaySkillButtonCount", "scriptButtonPosition", "statusDropdown", "svnThreadPoolSize", "toolbarPosition", "_beachTides", "_g9Effect", "8BitBonusTurns", "8BitScore", "addingScrolls", "affirmationCookiesEaten", "aminoAcidsUsed", "antagonisticSnowmanKitCost", "ascensionsToday", "asolDeferredPoints", "asolPointsPigSkinner", "asolPointsCheeseWizard", "asolPointsJazzAgent", "autoAbortThreshold", "autoAntidote", "autoBuyPriceLimit", "autopsyTweezersUsed", "autumnatonQuestTurn", "availableCandyCredits", "availableDimes", "availableFunPoints", "availableMrStore2002Credits", "availableQuarters", "availableSeptEmbers", "availableStoreCredits", "availableSwagger", "avantGuardPoints", "averageSwagger", "awolMedicine", "awolPointsBeanslinger", "awolPointsCowpuncher", "awolPointsSnakeoiler", "awolDeferredPointsBeanslinger", "awolDeferredPointsCowpuncher", "awolDeferredPointsSnakeoiler", "awolVenom", "bagOTricksCharges", "ballpitBonus", "bankedKarma", "bartenderTurnsUsed", "basementMallPrices", "basementSafetyMargin", "batmanFundsAvailable", "batmanBonusInitialFunds", "batmanTimeLeft", "bearSwagger", "beeCounter", "beGregariousCharges", "beGregariousFightsLeft", "birdformCold", "birdformHot", "birdformRoc", "birdformSleaze", "birdformSpooky", "birdformStench", "blackBartsBootyCost", "blackPuddingsDefeated", "blackForestProgress", "blankOutUsed", "bloodweiserDrunk", "bodyguardCharge", "bondPoints", "bondVillainsDefeated", "boneAbacusVictories", "bookOfFactsGummi", "bookOfFactsPinata", "bookOfIronyCost", "booPeakProgress", "borisPoints", "breakableHandling", "breakableHandling1964", "breakableHandling9691", "breakableHandling9692", "breakableHandling9699", "breathitinCharges", "brodenBacteria", "brodenSprinkles", "buffBotMessageDisposal", "buffBotPhilanthropyType", "buffJimmyIngredients", "burnoutsDefeated", "burrowgrubSummonsRemaining", "bwApronMealsEaten", "camelSpit", "camerasUsed", "campAwayDecoration", "candyWitchTurnsUsed", "candyWitchCandyTotal", "carboLoading", "catBurglarBankHeists", "cellarLayout", "charitableDonations", "chasmBridgeProgress", "chefTurnsUsed", "chessboardsCleared", "chibiAlignment", "chibiBirthday", "chibiFitness", "chibiIntelligence", "chibiLastVisit", "chibiSocialization", "chilledToTheBone", "cinchoSaltAndLime", "cinderellaMinutesToMidnight", "cinderellaScore", "cocktailSummons", "commerceGhostCombats", "cookbookbatIngredientsCharge", "controlPanelOmega", "cornucopiasOpened", "cosmicBowlingBallReturnCombats", "cozyCounter6332", "cozyCounter6333", "cozyCounter6334", "craftingClay", "craftingLeather", "craftingPlansCharges", "craftingStraw", "crimbo16BeardChakraCleanliness", "crimbo16BootsChakraCleanliness", "crimbo16BungChakraCleanliness", "crimbo16CrimboHatChakraCleanliness", "crimbo16GutsChakraCleanliness", "crimbo16HatChakraCleanliness", "crimbo16JellyChakraCleanliness", "crimbo16LiverChakraCleanliness", "crimbo16NippleChakraCleanliness", "crimbo16NoseChakraCleanliness", "crimbo16ReindeerChakraCleanliness", "crimbo16SackChakraCleanliness", "crimboTrainingSkill", "crimboTreeDays", "cubelingProgress", "cupidBowFights", "currentExtremity", "currentHedgeMazeRoom", "currentMojoFilters", "currentNunneryMeat", "currentPortalEnergy", "currentReplicaStoreYear", "cursedMagnifyingGlassCount", "cyrptAlcoveEvilness", "cyrptCrannyEvilness", "cyrptNicheEvilness", "cyrptNookEvilness", "cyrptTotalEvilness", "darkGyfftePoints", "dartsThrown", "daycareEquipment", "daycareInstructorItemQuantity", "daycareInstructors", "daycareLastScavenge", "daycareToddlers", "dbNemesisSkill1", "dbNemesisSkill2", "dbNemesisSkill3", "desertExploration", "desktopHeight", "desktopWidth", "dinseyFilthLevel", "dinseyFunProgress", "dinseyNastyBearsDefeated", "dinseySocialJusticeIProgress", "dinseySocialJusticeIIProgress", "dinseyTouristsFed", "dinseyToxicMultiplier", "doctorBagQuestLights", "doctorBagUpgrades", "dreadScroll1", "dreadScroll2", "dreadScroll3", "dreadScroll4", "dreadScroll5", "dreadScroll6", "dreadScroll7", "dreadScroll8", "dripAdventuresSinceAscension", "drippingHallAdventuresSinceAscension", "drippingTreesAdventuresSinceAscension", "drippyBatsUnlocked", "drippyJuice", "drippyOrbsClaimed", "droneSelfDestructChipsUsed", "drunkenSwagger", "edDefeatAbort", "edPoints", "eldritchTentaclesFought", "electricKoolAidEaten", "elfGratitude", "encountersUntilDMTChoice", "encountersUntilYachtzeeChoice", "encountersUntilNEPChoice", "encountersUntilSRChoice", "ensorceleeLevel", "entauntaunedColdRes", "essenceOfAnnoyanceCost", "essenceOfBearCost", "extraRolloverAdventures", "falloutShelterLevel", "familiarSweat", "fingernailsClipped", "fistSkillsKnown", "flyeredML", "fossilB", "fossilD", "fossilN", "fossilP", "fossilS", "fossilW", "fratboysDefeated", "frenchGuardTurtlesFreed", "funGuyMansionKills", "garbageChampagneCharge", "garbageFireProgress", "garbageShirtCharge", "garbageTreeCharge", "garlandUpgrades", "getsYouDrunkTurnsLeft", "ghostPepperTurnsLeft", "gingerDigCount", "gingerLawChoice", "gingerMuscleChoice", "gingerTrainScheduleStudies", "gladiatorBallMovesKnown", "gladiatorBladeMovesKnown", "gladiatorNetMovesKnown", "glitchItemCost", "glitchItemImplementationCount", "glitchItemImplementationLevel", "glitchSwagger", "gloverPoints", "gnasirProgress", "goldenMrAccessories", "gongPath", "gooseDronesRemaining", "goreCollected", "gourdItemCount", "greyYouPoints", "grimoire1Summons", "grimoire2Summons", "grimoire3Summons", "grimstoneCharge", "guardTurtlesFreed", "guideToSafariCost", "guyMadeOfBeesCount", "guzzlrBronzeDeliveries", "guzzlrDeliveryProgress", "guzzlrGoldDeliveries", "guzzlrPlatinumDeliveries", "haciendaLayout", "hallowiener8BitRealm", "hallowienerCoinspiracy", "hareMillisecondsSaved", "hareTurnsUsed", "heavyRainsStartingThunder", "heavyRainsStartingRain", "heavyRainsStartingLightning", "heroDonationBoris", "heroDonationJarlsberg", "heroDonationSneakyPete", "hiddenApartmentProgress", "hiddenBowlingAlleyProgress", "hiddenHospitalProgress", "hiddenOfficeProgress", "hiddenTavernUnlock", "highTopPumped", "hippiesDefeated", "holidayHalsBookCost", "holidaySwagger", "homemadeRobotUpgrades", "homebodylCharges", "hpAutoRecovery", "hpAutoRecoveryTarget", "iceSwagger", "ironicSwagger", "jarlsbergPoints", "juicyGarbageUsed", "jungCharge", "junglePuns", "knownAscensions", "kolhsTotalSchoolSpirited", "lassoTrainingCount", "lastAnticheeseDay", "lastArcadeAscension", "lastBadMoonReset", "lastBangPotionReset", "lastBattlefieldReset", "lastBeardBuff", "lastBreakfast", "lastCartographyBooPeak", "lastCartographyCastleTop", "lastCartographyDarkNeck", "lastCartographyDefiledNook", "lastCartographyFratHouse", "lastCartographyFratHouseVerge", "lastCartographyGuanoJunction", "lastCartographyHauntedBilliards", "lastCartographyHippyCampVerge", "lastCartographyZeppelinProtesters", "lastCastleGroundUnlock", "lastCastleTopUnlock", "lastCellarReset", "lastChanceThreshold", "lastChasmReset", "lastColosseumRoundWon", "lastCouncilVisit", "lastCounterDay", "lastDesertUnlock", "lastDispensaryOpen", "lastDMTDuplication", "lastDwarfFactoryReset", "lastEVHelmetValue", "lastEVHelmetReset", "lastEmptiedStorage", "lastFilthClearance", "lastGoofballBuy", "lastGuildStoreOpen", "lastGuyMadeOfBeesReset", "lastFratboyCall", "lastFriarCeremonyAscension", "lastFriarsElbowNC", "lastFriarsHeartNC", "lastFriarsNeckNC", "lastHippyCall", "lastIslandUnlock", "lastKeyotronUse", "lastKingLiberation", "lastLightsOutTurn", "lastMushroomPlot", "lastMiningReset", "lastNemesisReset", "lastPaperStripReset", "lastPirateEphemeraReset", "lastPirateInsultReset", "lastPlusSignUnlock", "lastQuartetAscension", "lastQuartetRequest", "lastSecondFloorUnlock", "lastShadowForgeUnlockAdventure", "lastKOLHSArtClassUnlockAdventure", "lastKOLHSChemClassUnlockAdventure", "lastKOLHSShopClassUnlockAdventure", "lastSkateParkReset", "lastStillBeatingSpleen", "lastTavernAscension", "lastTavernSquare", "lastTelescopeReset", "lastTempleAdventures", "lastTempleButtonsUnlock", "lastTempleUnlock", "lastThingWithNoNameDefeated", "lastTowelAscension", "lastTr4pz0rQuest", "lastTrainsetConfiguration", "lastVioletFogMap", "lastVoteMonsterTurn", "lastWartDinseyDefeated", "lastWuTangDefeated", "lastYearbookCameraAscension", "lastZapperWand", "lastZapperWandExplosionDay", "lawOfAveragesCost", "legacyPoints", "leprecondoLastNeedChange", "libramSummons", "lightsOutAutomation", "louvreDesiredGoal", "louvreGoal", "lovebugsAridDesert", "lovebugsBeachBuck", "lovebugsBooze", "lovebugsChroner", "lovebugsCoinspiracy", "lovebugsCyrpt", "lovebugsFreddy", "lovebugsFunFunds", "lovebugsHoboNickel", "lovebugsItemDrop", "lovebugsMeat", "lovebugsMeatDrop", "lovebugsMoxie", "lovebugsMuscle", "lovebugsMysticality", "lovebugsOilPeak", "lovebugsOrcChasm", "lovebugsPowder", "lovebugsWalmart", "lttQuestDifficulty", "lttQuestStageCount", "manaBurnSummonThreshold", "manaBurningThreshold", "manaBurningTrigger", "manorDrawerCount", "manualOfNumberologyCost", "mapToKokomoCost", "markYourTerritoryCharges", "masksUnlocked", "maximizerMRUSize", "maximizerCombinationLimit", "maximizerEquipmentLevel", "maximizerEquipmentScope", "maximizerMaxPrice", "maximizerPriceLevel", "maxManaBurn", "mayflyExperience", "mayoLevel", "meansuckerPrice", "merkinVocabularyMastery", "miniAdvClass", "miniKiwiAiolisUsed", "miniMartinisDrunk", "mixedBerryJellyUses", "moleTunnelLevel", "momSeaMonkeeProgress", "mothershipProgress", "mpAutoRecovery", "mpAutoRecoveryTarget", "munchiesPillsUsed", "mushroomGardenCropLevel", "nanopolymerSpiderWebsUsed", "nextAprilBandTurn", "nextParanormalActivity", "nextQuantumFamiliarOwnerId", "nextQuantumFamiliarTurn", "noobPoints", "noobDeferredPoints", "noodleSummons", "nsContestants1", "nsContestants2", "nsContestants3", "nuclearAutumnPoints", "numericSwagger", "nunsVisits", "oilPeakProgress", "optimalSwagger", "optimisticCandleProgress", "palindomeDudesDefeated", "parasolUsed", "peaceTurkeyIndex", "pendingMapReflections", "phosphorTracesUses", "pingpongSkill", "pirateRealmPlasticPiratesDefeated", "pirateRealmShipsDestroyed", "pirateRealmStormsEscaped", "pirateSwagger", "plantingDay", "plumberBadgeCost", "plumberCostumeCost", "plumberPoints", "pokefamPoints", "poolSharkCount", "poolSkill", "powerPillProgress", "preworkoutPowderUses", "primaryLabGooIntensity", "prismaticSummons", "procrastinatorLanguageFluency", "promptAboutCrafting", "puzzleChampBonus", "pyramidPosition", "quantumPoints", "reagentSummons", "reanimatorArms", "reanimatorLegs", "reanimatorSkulls", "reanimatorWeirdParts", "reanimatorWings", "recentLocations", "redSnapperProgress", "relayPort", "relocatePygmyJanitor", "relocatePygmyLawyer", "rockinRobinProgress", "romanCandelabraRedCasts", "romanCandelabraBlueCasts", "romanCandelabraYellowCasts", "romanCandelabraGreenCasts", "romanCandelabraPurpleCasts", "ROMOfOptimalityCost", "rumpelstiltskinKidsRescued", "rumpelstiltskinTurnsUsed", "rwbMonsterCount", "safariSwagger", "sausageGrinderUnits", "schoolOfHardKnocksDiplomaCost", "schoolSwagger", "scrapbookCharges", "screechCombats", "scriptMRULength", "seadentConstructKills", "seadentLevel", "seaodesFound", "seaPoints", "SeasoningSwagger", "sexChanges", "shenInitiationDay", "shockingLickCharges", "shrunkenHeadZombieHP", "singleFamiliarRun", "skillBurn3", "skillBurn90", "skillBurn153", "skillBurn154", "skillBurn155", "skillBurn236", "skillBurn237", "skillBurn1019", "skillBurn5017", "skillBurn6014", "skillBurn6015", "skillBurn6016", "skillBurn6020", "skillBurn6021", "skillBurn6022", "skillBurn6023", "skillBurn6024", "skillBurn6026", "skillBurn6028", "skillBurn7323", "skillBurn14008", "skillBurn14028", "skillBurn14038", "skillBurn15011", "skillBurn15028", "skillBurn17005", "skillBurn22034", "skillBurn22035", "skillBurn23301", "skillBurn23302", "skillBurn23303", "skillBurn23304", "skillBurn23305", "skillBurn23306", "skillLevel46", "skillLevel47", "skillLevel48", "skillLevel117", "skillLevel118", "skillLevel121", "skillLevel128", "skillLevel134", "skillLevel135", "skillLevel144", "skillLevel180", "skillLevel188", "skillLevel227", "skillLevel245", "skillLevel7254", "slimelingFullness", "slimelingStacksDropped", "slimelingStacksDue", "smoresEaten", "smutOrcNoncombatProgress", "sneakyPetePoints", "snojoMoxieWins", "snojoMuscleWins", "snojoMysticalityWins", "sourceAgentsDefeated", "sourceEnlightenment", "sourceInterval", "sourcePoints", "sourceTerminalGram", "sourceTerminalPram", "sourceTerminalSpam", "spaceBabyLanguageFluency", "spacePirateLanguageFluency", "spelunkyNextNoncombat", "spelunkySacrifices", "spelunkyWinCount", "spookyPuttyCopiesMade", "spookyVHSTapeMonsterTurn", "statbotUses", "stockCertificateTurn", "sugarCounter4178", "sugarCounter4179", "sugarCounter4180", "sugarCounter4181", "sugarCounter4182", "sugarCounter4183", "sugarCounter4191", "summonAnnoyanceCost", "sweat", "tacoDanCocktailSauce", "tacoDanFishMeat", "takerSpaceAnchor", "takerSpaceGold", "takerSpaceMast", "takerSpaceRum", "takerSpaceSilk", "takerSpaceSpice", "tavernLayout", "telescopeUpgrades", "tempuraSummons", "timeposedTopHats", "timeSpinnerMedals", "timesRested", "tomeSummons", "totalCharitableDonations", "trainsetPosition", "turtleBlessingTurns", "twinPeakProgress", "twoCRSPoints", "unicornHornInflation", "universalSeasoningCost", "usable1HWeapons", "usable1xAccs", "usable2HWeapons", "usable3HWeapons", "usableAccessories", "usableHats", "usableOffhands", "usableOther", "usablePants", "usableShirts", "valueOfAdventure", "valueOfInventory", "valueOfStill", "valueOfTome", "vintnerCharge", "vintnerWineLevel", "violetFogGoal", "walfordBucketProgress", "warehouseProgress", "welcomeBackAdv", "wereProfessorBite", "wereProfessorKick", "wereProfessorLiver", "wereProfessorPoints", "wereProfessorRend", "wereProfessorResearchPoints", "wereProfessorStomach", "wereProfessorTransformTurns", "whetstonesUsed", "wolfPigsEvicted", "wolfTurnsUsed", "writingDesksDefeated", "xoSkeleltonXProgress", "xoSkeleltonOProgress", "yearbookCameraAscensions", "yearbookCameraUpgrades", "youRobotBody", "youRobotBottom", "youRobotLeft", "youRobotPoints", "youRobotRight", "youRobotTop", "zeppelinProgress", "zeppelinProtestors", "zigguratLianas", "zombiePoints", "zootSpecimensPrepared", "zootomistPoints", "_absintheDrops", "_abstractionDropsCrown", "_aguaDrops", "_xenomorphCharge", "_alliedRadioDropsUsed", "_ancestralRecallCasts", "_antihangoverBonus", "_aprilShowerDiscoNap", "_aprilBandInstruments", "_aprilBandSaxophoneUses", "_aprilBandTomUses", "_aprilBandTubaUses", "_aprilBandStaffUses", "_aprilBandPiccoloUses", "_astralDrops", "_augSkillsCast", "_assertYourAuthorityCast", "_automatedFutureManufactures", "_autumnatonQuests", "_backUpUses", "_badlyRomanticArrows", "_badgerCharge", "_balefulHowlUses", "_banderRunaways", "_bastilleCheese", "_bastilleGames", "_bastilleGameTurn", "_bastilleLastCheese", "_batWingsCauldronUsed", "_batWingsFreeFights", "_batWingsRestUsed", "_batWingsSwoopUsed", "_bczBloodGeyserCasts", "_bczRefractedGazeCasts", "_bczSweatBulletsCasts", "_bczBloodBathCasts", "_bczDialitupCasts", "_bczSweatEquityCasts", "_bczBloodThinnerCasts", "_bczSpinalTapasCasts", "_bczPheromoneCocktailCasts", "_beanCannonUses", "_bearHugs", "_beerLensDrops", "_bellydancerPickpockets", "_benettonsCasts", "_beretBlastUses", "_beretBoastUses", "_beretBuskingUses", "_birdsSoughtToday", "_bookOfFactsWishes", "_bookOfFactsTatters", "_boomBoxFights", "_boomBoxSongsLeft", "_bootStomps", "_boxingGloveArrows", "_brickoEyeSummons", "_brickoFights", "_campAwayCloudBuffs", "_campAwaySmileBuffs", "_candyEggsDeviled", "_candySummons", "_captainHagnkUsed", "_carnieCandyDrops", "_carnivorousPottedPlantWins", "_carrotNoseDrops", "_catBurglarCharge", "_catBurglarHeistsComplete", "_cheerleaderSteam", "_chestXRayUsed", "_chibiAdventures", "_chipBags", "_chocolateCigarsUsed", "_chocolateCoveredPingPongBallsUsed", "_chocolateSculpturesUsed", "_chocolatesUsed", "_chronolithActivations", "_chronolithNextCost", "_cinchUsed", "_cinchoRests", "_circadianRhythmsAdventures", "_clanFortuneConsultUses", "_clipartSummons", "_clocksUsed", "_cloversPurchased", "_coldMedicineConsults", "_coldMedicineEquipmentTaken", "_companionshipCasts", "_concoctionDatabaseRefreshes", "_cookbookbatCrafting", "_cookbookbatCombatsUntilNewQuest", "_cosmicBowlingSkillsUsed", "_crimbo21ColdResistance", "_crimboPastDailySpecialPrice", "_cyberFreeFights", "_cyberZone1Turns", "_cyberZone2Turns", "_cyberZone3Turns", "_dailySpecialPrice", "_dartsLeft", "_daycareGymScavenges", "_daycareRecruits", "_deckCardsDrawn", "_deluxeKlawSummons", "_demandSandwich", "_detectiveCasesCompleted", "_disavowed", "_dnaPotionsMade", "_donhosCasts", "_douseFoeUses", "_dreamJarDrops", "_drunkPygmyBanishes", "_durableDolphinWhistleUsed", "_edDefeats", "_edLashCount", "_eldritchTentaclesFoughtToday", "_elfGuardCookingUsed", "_elronsCasts", "_enamorangs", "_energyCollected", "_expertCornerCutterUsed", "_extraTimeUsed", "_favorRareSummons", "_feastUsed", "_feelinTheRhythm", "_feelPrideUsed", "_feelExcitementUsed", "_feelHatredUsed", "_feelLonelyUsed", "_feelNervousUsed", "_feelEnvyUsed", "_feelDisappointedUsed", "_feelSuperiorUsed", "_feelLostUsed", "_feelNostalgicUsed", "_feelPeacefulUsed", "_fingertrapArrows", "_fireExtinguisherCharge", "_fragrantHerbsUsed", "_freeBeachWalksUsed", "_frButtonsPressed", "_fudgeWaspFights", "_gapBuffs", "_garbageFireDrops", "_garbageFireDropsCrown", "_generateIronyUsed", "_genieFightsUsed", "_genieWishesUsed", "_gibbererAdv", "_gibbererCharge", "_gingerbreadCityTurns", "_glarkCableUses", "_glitchMonsterFights", "_gnomeAdv", "_godLobsterFights", "_goldenMoneyCharge", "_gongDrops", "_gothKidCharge", "_gothKidFights", "_greyYouAdventures", "_grimBrotherCharge", "_grimFairyTaleDrops", "_grimFairyTaleDropsCrown", "_grimoireConfiscatorSummons", "_grimoireGeekySummons", "_grimstoneMaskDrops", "_grimstoneMaskDropsCrown", "_grooseCharge", "_grooseDrops", "_grubbyWoolDrops", "_guzzlrDeliveries", "_guzzlrGoldDeliveries", "_guzzlrPlatinumDeliveries", "_hareAdv", "_hareCharge", "_highTopPumps", "_hipsterAdv", "_hoardedCandyDropsCrown", "_hoboUnderlingSummons", "_holidayMultitaskingUsed", "_holoWristDrops", "_holoWristProgress", "_hotAshesDrops", "_hotJellyUses", "_hotTubSoaks", "_humanMuskUses", "_iceballUses", "_inigosCasts", "_ironTricornHeadbuttUsed", "_jerksHealthMagazinesUsed", "_jiggleCheese", "_jiggleCream", "_jiggleLife", "_jiggleSteak", "_jitbCharge", "_juneCleaverAdvs", "_juneCleaverFightsLeft", "_juneCleaverEncounters", "_juneCleaverStench", "_juneCleaverSpooky", "_juneCleaverSleaze", "_juneCleaverHot", "_juneCleaverCold", "_juneCleaverSkips", "_jungDrops", "_kgbClicksUsed", "_kgbDispenserUses", "_kgbTranquilizerDartUses", "_klawSummons", "_kloopCharge", "_kloopDrops", "_knuckleboneDrops", "_knuckleboneRests", "_kolhsAdventures", "_kolhsSavedByTheBell", "_lastDailyDungeonRoom", "_lastFitzsimmonsHatch", "_lastMobiusStripTurn", "_lastSausageMonsterTurn", "_lastZomboEye", "_latteRefillsUsed", "_lawOfAveragesUsed", "_leafblowerML", "_leafLassosCrafted", "_leafMonstersFought", "_leavesBurned", "_legionJackhammerCrafting", "_leprecondoRearrangements", "_leprecondoFurniture", "_llamaCharge", "_longConUsed", "_lovebugsBeachBuck", "_lovebugsChroner", "_lovebugsCoinspiracy", "_lovebugsFreddy", "_lovebugsFunFunds", "_lovebugsHoboNickel", "_lovebugsWalmart", "_loveChocolatesUsed", "_lynyrdSnareUses", "_machineTunnelsAdv", "_macrometeoriteUses", "_mafiaThumbRingAdvs", "_mapToACandyRichBlockDrops", "_mayamRests", "_mayflowerDrops", "_mayflySummons", "_mcHugeLargeAvalancheUses", "_mcHugeLargeSkiPlowUses", "_mcHugeLargeSlashUses", "_mediumSiphons", "_meteoriteAdesUsed", "_meteorShowerUses", "_micrometeoriteUses", "_mildEvilPerpetrated", "_mimicEggsDonated", "_mimicEggsObtained", "_miniKiwiDrops", "_miniMartiniDrops", "_mobiusStripEncounters", "_monkeyPawWishesUsed", "_monsterHabitatsFightsLeft", "_monsterHabitatsRecalled", "_monstersMapped", "_mushroomGardenFights", "_nanorhinoCharge", "_navelRunaways", "_neverendingPartyFreeTurns", "_newYouQuestSharpensDone", "_newYouQuestSharpensToDo", "_nextColdMedicineConsult", "_nextQuantumAlignment", "_nightmareFuelCharges", "_noobSkillCount", "_nuclearStockpileUsed", "_oilExtracted", "_oldSchoolCocktailCraftingUsed", "_olfactionsUsed", "_optimisticCandleDropsCrown", "_oreDropsCrown", "_otoscopeUsed", "_oysterEggsFound", "_pantsgivingBanish", "_pantsgivingCount", "_pantsgivingCrumbs", "_pantsgivingFullness", "_pasteDrops", "_perilsForeseen", "_peteJukeboxFixed", "_peteJumpedShark", "_petePeeledOut", "_photoBoothEffects", "_photoBoothEquipment", "_pieDrops", "_piePartsCount", "_pirateRealmGold", "_pirateRealmGlue", "_pirateRealmGrog", "_pirateRealmGrub", "_pirateRealmGuns", "_pirateRealmIslandMonstersDefeated", "_pirateRealmSailingTurns", "_pirateRealmShipSpeed", "_pixieCharge", "_pocketProfessorLectures", "_poisonArrows", "_pokeGrowFertilizerDrops", "_poolGames", "_powderedGoldDrops", "_powderedMadnessUses", "_powerfulGloveBatteryPowerUsed", "_powerPillDrops", "_powerPillUses", "_precisionCasts", "_questPartyFairItemsOpened", "_radlibSummons", "_raindohCopiesMade", "_rapidPrototypingUsed", "_raveStealCount", "_reflexHammerUsed", "_resolutionAdv", "_resolutionRareSummons", "_riftletAdv", "_robinEggDrops", "_roboDrops", "_rogueProgramCharge", "_romanticFightsLeft", "_saberForceMonsterCount", "_saberForceUses", "_saberMod", "_saltGrainsConsumed", "_sandwormCharge", "_saplingsPlanted", "_sausageFights", "_sausagesEaten", "_sausagesMade", "_seadentLightningUsed", "_sealFigurineUses", "_sealScreeches", "_sealsSummoned", "_shadowBricksUsed", "_shadowRiftCombats", "_shatteringPunchUsed", "_shortOrderCookCharge", "_shrubCharge", "_slimeVialsHarvested", "_sloppyDinerBeachBucks", "_smilesOfMrA", "_smithsnessSummons", "_smoochArmyHQCombats", "_snojoFreeFights", "_snojoParts", "_snokebombUsed", "_snowconeSummons", "_snowglobeDrops", "_snowmanHatPlaceUsed", "_snowSuitCount", "_sourceTerminalDigitizeMonsterCount", "_sourceTerminalDigitizeUses", "_sourceTerminalDuplicateUses", "_sourceTerminalEnhanceUses", "_sourceTerminalExtrudes", "_sourceTerminalPortscanUses", "_spaceFurDropsCrown", "_spacegatePlanetIndex", "_spacegateTurnsLeft", "_spaceJellyfishDrops", "_speakeasyDrinksDrunk", "_speakeasyFreeFights", "_spelunkerCharges", "_spelunkingTalesDrops", "_spikolodonSpikeUses", "_spiritOfTheMountainsAdvs", "_spookyJellyUses", "_stackLumpsUses", "_steamCardDrops", "_stickerSummons", "_stinkyCheeseCount", "_stressBallSqueezes", "_sugarSummons", "_summonResortPassesUsed", "_surprisinglySweetSlashUsed", "_surprisinglySweetStabUsed", "_sweatOutSomeBoozeUsed", "_taffyRareSummons", "_taffyYellowSummons", "_tearawayPantsAdvs", "_thanksgettingFoodsEaten", "_thingfinderCasts", "_thinknerdPackageDrops", "_thorsPliersCrafting", "_timeHelmetAdv", "_timeCopsFoughtToday", "_timeSpinnerMinutesUsed", "_tokenDrops", "_transponderDrops", "_turkeyBlastersUsed", "_turkeyBooze", "_turkeyMuscle", "_turkeyMyst", "_turkeyMoxie", "_unaccompaniedMinerUsed", "_unblemishedPearlAnemoneMineProgress", "_unblemishedPearlDiveBarProgress", "_unblemishedPearlMadnessReefProgress", "_unblemishedPearlMarinaraTrenchProgress", "_unblemishedPearlTheBriniestDeepestsProgress", "_unconsciousCollectiveCharge", "_universalSeasoningsUsed", "_universeCalculated", "_universeImploded", "_usedReplicaBatoomerang", "_vampyreCloakeFormUses", "_villainLairProgress", "_vitachocCapsulesUsed", "_vmaskAdv", "_voidFreeFights", "_volcanoItem1", "_volcanoItem2", "_volcanoItem3", "_volcanoItemCount1", "_volcanoItemCount2", "_volcanoItemCount3", "_voteFreeFights", "_VYKEACompanionLevel", "_warbearAutoAnvilCrafting", "_waxGlobDrops", "_whiteRiceDrops", "_witchessFights", "_xoHugsUsed", "_yellowPixelDropsCrown", "_zapCount", "_zombieSmashPocketsUsed", "lastNoncombat15", "lastNoncombat257", "lastNoncombat270", "lastNoncombat273", "lastNoncombat280", "lastNoncombat283", "lastNoncombat297", "lastNoncombat322", "lastNoncombat323", "lastNoncombat324", "lastNoncombat341", "lastNoncombat343", "lastNoncombat384", "lastNoncombat386", "lastNoncombat391", "lastNoncombat392", "lastNoncombat394", "lastNoncombat405", "lastNoncombat406", "lastNoncombat408", "lastNoncombat439", "lastNoncombat440", "lastNoncombat441", "lastNoncombat450", "lastNoncombat528", "lastNoncombat533", "lastNoncombat539", "lastNoncombat540", "lastNoncombat541", "lastNoncombat588", "lastNoncombat589", "lastNoncombat590", "lastNoncombat591", "lastNoncombat592"];
var monsterProperties = ["beGregariousMonster", "bodyguardChatMonster", "cameraMonster", "chateauMonster", "clumsinessGroveBoss", "crappyCameraMonster", "crudeMonster", "enamorangMonster", "envyfishMonster", "glacierOfJerksBoss", "holdHandsMonster", "iceSculptureMonster", "lastCopyableMonster", "longConMonster", "maelstromOfLoversBoss", "makeFriendsMonster", "merkinLockkeyMonster", "monkeyPointMonster", "motifMonster", "nosyNoseMonster", "olfactedMonster", "photocopyMonster", "rainDohMonster", "romanticTarget", "rufusDesiredEntity", "rwbMonster", "screencappedMonster", "shrunkenHeadZombieMonster", "spookyPuttyMonster", "spookyVHSTapeMonster", "stenchCursedMonster", "superficiallyInterestedMonster", "waxMonster", "yearbookCameraTarget", "_afterimageMonster", "_chainedRelativityMonster", "_chainedPurpleCandleMonster", "_chainedAfterimageMonster", "_cookbookbatQuestMonster", "_gallapagosMonster", "_jiggleCreamedMonster", "_latteMonster", "_monsterHabitatsMonster", "_nanorhinoBanishedMonster", "_newYouQuestMonster", "_prankCardMonster", "_relativityMonster", "_saberForceMonster", "_sourceTerminalDigitizeMonster", "_trickCoinMonster", "_voteMonster"];
var monsterNumericProperties = [];
var locationProperties = ["autumnatonQuestLocation", "currentJunkyardLocation", "doctorBagQuestLocation", "ghostLocation", "guzzlrQuestLocation", "holdHandsLocation", "lastAdventure", "nextAdventure", "nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "rwbLocation", "sourceOracleTarget", "_cookbookbatQuestLastLocation", "_floundryBassLocation", "_floundryCarpLocation", "_floundryCodLocation", "_floundryHatchetfishLocation", "_floundryTroutLocation", "_floundryTunaLocation", "_lastPirateRealmIsland", "_sotParcelLocation"];
var stringProperties = ["autoLogin", "browserBookmarks", "chatFontSize", "combatHotkey0", "combatHotkey1", "combatHotkey2", "combatHotkey3", "combatHotkey4", "combatHotkey5", "combatHotkey6", "combatHotkey7", "combatHotkey8", "combatHotkey9", "commandBufferGCLI", "commandBufferTabbedChat", "commandLineNamespace", "dailyDeedsOptions", "defaultBorderColor", "displayName", "externalEditor", "getBreakfast", "headerStates", "highlightList", "http.proxyHost", "http.proxyPassword", "http.proxyPort", "http.proxyUser", "https.proxyHost", "https.proxyPassword", "https.proxyPort", "https.proxyUser", "initialDesktop", "initialFrames", "lastRelayUpdate", "lastUserAgent", "lastUsername", "logPreferenceChangeFilter", "loginScript", "loginServerName", "loginWindowLogo", "logoutScript", "pingDefaultTestPage", "pingLatest", "pingLoginAbort", "pingLoginCheck", "pingLoginFail", "pingLongest", "pingShortest", "pingTestPage", "previousNotifyList", "previousUpdateVersion", "saveState", "saveStateActive", "scriptList", "swingLookAndFeel", "userAgent", "8BitColor", "afterAdventureScript", "antiScientificMethod", "autoOlfact", "autoPutty", "autumnatonUpgrades", "backupCameraMode", "banishedMonsters", "banishedPhyla", "banishingShoutMonsters", "batmanStats", "batmanZone", "batmanUpgrades", "battleAction", "beachHeadsUnlocked", "beastSkillsAvailable", "beastSkillsKnown", "beforePVPScript", "betweenBattleScript", "boomBoxSong", "breakfastAlways", "breakfastHardcore", "breakfastSoftcore", "buffBotCasting", "buyScript", "cargoPocketsEmptied", "cargoPocketScraps", "chatbotScript", "chatPlayerScript", "chibiName", "choiceAdventureScript", "chosenTrip", "clanFortuneReply1", "clanFortuneReply2", "clanFortuneReply3", "clanFortuneWord1", "clanFortuneWord2", "clanFortuneWord3", "coolerYetiMode", "counterScript", "copperheadClubHazard", "crimbo23ArmoryControl", "crimbo23BarControl", "crimbo23CafeControl", "crimbo23CottageControl", "crimbo23FoundryControl", "crimbotChassis", "crimbotArm", "crimbotPropulsion", "crystalBallPredictions", "csServicesPerformed", "currentAstralTrip", "currentDistillateMods", "currentEasyBountyItem", "currentHardBountyItem", "currentHippyStore", "currentJunkyardTool", "currentLlamaForm", "currentMood", "currentPVPSeason", "currentPvpVictories", "currentSpecialBountyItem", "currentSITSkill", "customCombatScript", "cyrusAdjectives", "defaultFlowerLossMessage", "defaultFlowerWinMessage", "demonName1", "demonName2", "demonName3", "demonName4", "demonName5", "demonName6", "demonName7", "demonName8", "demonName9", "demonName10", "demonName11", "demonName12", "demonName13", "demonName14", "demonName14Segments", "dinseyGatorStenchDamage", "dinseyRollercoasterStats", "dreadScrollGuesses", "duckAreasCleared", "duckAreasSelected", "edPiece", "enamorangMonsterTurn", "ensorcelee", "EVEDirections", "everfullDartPerks", "extraCosmeticModifiers", "familiarScript", "flagellateFlagonsActive", "forbiddenStores", "gameProBossSpecialPower", "gooseReprocessed", "grimoireSkillsHardcore", "grimoireSkillsSoftcore", "grimstoneMaskPath", "guzzlrQuestClient", "guzzlrQuestTier", "harvestGardenHardcore", "harvestGardenSoftcore", "holdHandsMonsterCount", "hpAutoRecoveryItems", "invalidBuffMessage", "jickSwordModifier", "juneCleaverQueue", "kingLiberatedScript", "lassoTraining", "lastAdventureContainer", "lastAdventureTrail", "lastBangPotion819", "lastBangPotion820", "lastBangPotion821", "lastBangPotion822", "lastBangPotion823", "lastBangPotion824", "lastBangPotion825", "lastBangPotion826", "lastBangPotion827", "lastChanceBurn", "lastChessboard", "lastCombatEnvironments", "lastDwarfDiceRolls", "lastDwarfDigitRunes", "lastDwarfEquipmentRunes", "lastDwarfFactoryItem118", "lastDwarfFactoryItem119", "lastDwarfFactoryItem120", "lastDwarfFactoryItem360", "lastDwarfFactoryItem361", "lastDwarfFactoryItem362", "lastDwarfFactoryItem363", "lastDwarfFactoryItem364", "lastDwarfFactoryItem365", "lastDwarfFactoryItem910", "lastDwarfFactoryItem3199", "lastDwarfOfficeItem3208", "lastDwarfOfficeItem3209", "lastDwarfOfficeItem3210", "lastDwarfOfficeItem3211", "lastDwarfOfficeItem3212", "lastDwarfOfficeItem3213", "lastDwarfOfficeItem3214", "lastDwarfOreRunes", "lastDwarfHopper1", "lastDwarfHopper2", "lastDwarfHopper3", "lastDwarfHopper4", "lastEncounter", "lastMacroError", "lastMessageId", "lastPaperStrip3144", "lastPaperStrip4138", "lastPaperStrip4139", "lastPaperStrip4140", "lastPaperStrip4141", "lastPaperStrip4142", "lastPaperStrip4143", "lastPaperStrip4144", "lastPirateEphemera", "lastPorkoBoard", "lastPorkoPayouts", "lastPorkoExpected", "lastSlimeVial3885", "lastSlimeVial3886", "lastSlimeVial3887", "lastSlimeVial3888", "lastSlimeVial3889", "lastSlimeVial3890", "lastSlimeVial3891", "lastSlimeVial3892", "lastSlimeVial3893", "lastSlimeVial3894", "lastSlimeVial3895", "lastSlimeVial3896", "lastSelectedFaxbot", "lastSuccessfulFaxbot", "latteIngredients", "latteModifier", "latteUnlocks", "ledCandleMode", "leprecondoCurrentNeed", "leprecondoDiscovered", "leprecondoInstalled", "leprecondoNeedOrder", "libramSkillsHardcore", "libramSkillsSoftcore", "louvreOverride", "lovePotion", "lttQuestName", "maximizerList", "maximizerMRUList", "maximizerLastFilters", "mayoInMouth", "mayoMinderSetting", "merkinCatalogChoices", "merkinQuestPath", "mimicEggMonsters", "mineLayout1", "mineLayout2", "mineLayout3", "mineLayout4", "mineLayout5", "mineLayout6", "mineState1", "mineState2", "mineState3", "mineState4", "mineState5", "mineState6", "mpAutoRecoveryItems", "nextDistillateMods", "nextQuantumFamiliarName", "nextQuantumFamiliarOwner", "noncombatForcers", "nsChallenge2", "nsChallenge3", "nsChallenge4", "nsChallenge5", "nsTowerDoorKeysUsed", "oceanAction", "oceanDestination", "parkaMode", "pastaThrall1", "pastaThrall2", "pastaThrall3", "pastaThrall4", "pastaThrall5", "pastaThrall6", "pastaThrall7", "pastaThrall8", "peteMotorbikeTires", "peteMotorbikeGasTank", "peteMotorbikeHeadlight", "peteMotorbikeCowling", "peteMotorbikeMuffler", "peteMotorbikeSeat", "pieStuffing", "plantingDate", "plantingLength", "plantingScript", "plumberCostumeWorn", "pokefamBoosts", "postAscensionScript", "preAscensionScript", "questClumsinessGrove", "questDoctorBag", "questECoBucket", "questESlAudit", "questESlBacteria", "questESlCheeseburger", "questESlCocktail", "questESlDebt", "questESlFish", "questESlMushStash", "questESlSalt", "questESlSprinkles", "questESpClipper", "questESpEVE", "questESpFakeMedium", "questESpGore", "questESpJunglePun", "questESpOutOfOrder", "questESpSerum", "questESpSmokes", "questEStFishTrash", "questEStGiveMeFuel", "questEStNastyBears", "questEStSocialJusticeI", "questEStSocialJusticeII", "questEStSuperLuber", "questEStWorkWithFood", "questEStZippityDooDah", "questEUNewYou", "questF01Primordial", "questF02Hyboria", "questF03Future", "questF04Elves", "questF05Clancy", "questG01Meatcar", "questG02Whitecastle", "questG03Ego", "questG04Nemesis", "questG05Dark", "questG06Delivery", "questG07Myst", "questG08Moxie", "questG09Muscle", "questGlacierOfJerks", "questGuzzlr", "questI01Scapegoat", "questI02Beat", "questL02Larva", "questL03Rat", "questL04Bat", "questL05Goblin", "questL06Friar", "questL07Cyrptic", "questL08Trapper", "questL09Topping", "questL10Garbage", "questL11Black", "questL11Business", "questL11Curses", "questL11Desert", "questL11Doctor", "questL11MacGuffin", "questL11Manor", "questL11Palindome", "questL11Pyramid", "questL11Ron", "questL11Shen", "questL11Spare", "questL11Worship", "questL12HippyFrat", "questL12War", "questL13Final", "questL13Warehouse", "questLTTQuestByWire", "questM01Untinker", "questM02Artist", "questM03Bugbear", "questM05Toot", "questM06Gourd", "questM07Hammer", "questM08Baker", "questM09Rocks", "questM10Azazel", "questM11Postal", "questM12Pirate", "questM13Escape", "questM14Bounty", "questM15Lol", "questM16Temple", "questM17Babies", "questM18Swamp", "questM19Hippy", "questM20Necklace", "questM21Dance", "questM22Shirt", "questM23Meatsmith", "questM24Doc", "questM25Armorer", "questM26Oracle", "questMaelstromOfLovers", "questPAGhost", "questRufus", "questS01OldGuy", "questS02Monkees", "raveCombo1", "raveCombo2", "raveCombo3", "raveCombo4", "raveCombo5", "raveCombo6", "recoveryScript", "relayChatCLITrigger", "relayCounters", "retroCapeSuperhero", "retroCapeWashingInstructions", "royalty", "rufusQuestTarget", "rufusQuestType", "scriptMRUList", "seahorseName", "shadowLabyrinthGoal", "shadowRiftIngress", "shrubGarland", "shrubGifts", "shrubLights", "shrubTopper", "shrunkenHeadZombieAbilities", "sideDefeated", "sidequestArenaCompleted", "sidequestFarmCompleted", "sidequestJunkyardCompleted", "sidequestLighthouseCompleted", "sidequestNunsCompleted", "sidequestOrchardCompleted", "skateParkStatus", "snowsuit", "sourceTerminalChips", "sourceTerminalEducate1", "sourceTerminalEducate2", "sourceTerminalEnquiry", "sourceTerminalEducateKnown", "sourceTerminalEnhanceKnown", "sourceTerminalEnquiryKnown", "sourceTerminalExtrudeKnown", "spadingData", "spadingScript", "speakeasyName", "spelunkyStatus", "spelunkyUpgrades", "spookyravenRecipeUsed", "stationaryButton1", "stationaryButton2", "stationaryButton3", "stationaryButton4", "stationaryButton5", "streamCrossDefaultTarget", "sweetSynthesisBlacklist", "telescope1", "telescope2", "telescope3", "telescope4", "telescope5", "testudinalTeachings", "textColors", "thanksMessage", "tomeSkillsHardcore", "tomeSkillsSoftcore", "trackVoteMonster", "trackedMonsters", "trackedPhyla", "trainsetConfiguration", "umbrellaState", "umdLastObtained", "vintnerWineEffect", "vintnerWineName", "vintnerWineType", "violetFogLayout", "volcanoMaze1", "volcanoMaze2", "volcanoMaze3", "volcanoMaze4", "volcanoMaze5", "warProgress", "watchedPreferences", "wereProfessorAdvancedResearch", "workteaClue", "yourFavoriteBird", "yourFavoriteBirdMods", "youRobotCPUUpgrades", "zootGraftedMods", "zootMilkCrueltyMods", "zootMilkKindnessMods", "_automatedFutureSide", "_bastilleBoosts", "_bastilleChoice1", "_bastilleChoice2", "_bastilleChoice3", "_bastilleCurrentStyles", "_bastilleEnemyCastle", "_bastilleEnemyName", "_bastilleLastBattleResults", "_bastilleLastEncounter", "_bastilleStats", "_beachHeadsUsed", "_beachLayout", "_beachMinutes", "_birdOfTheDay", "_birdOfTheDayMods", "_bittycar", "_campAwaySmileBuffSign", "_citizenZone", "_citizenZoneMods", "_cloudTalkMessage", "_cloudTalkSmoker", "_coatOfPaintModifier", "_cupidBowFamiliars", "_currentDartboard", "_cyberZone1Defense", "_cyberZone1Hacker", "_cyberZone1Owner", "_cyberZone2Defense", "_cyberZone2Hacker", "_cyberZone2Owner", "_cyberZone3Defense", "_cyberZone3Hacker", "_cyberZone3Owner", "_deckCardsSeen", "_feastedFamiliars", "_floristPlantsUsed", "_frAreasUnlocked", "_frHoursLeft", "_frMonstersKilled", "_futuristicCollarModifier", "_futuristicHatModifier", "_futuristicShirtModifier", "_horsery", "_horseryCrazyMox", "_horseryCrazyMus", "_horseryCrazyMys", "_horseryCrazyName", "_horseryCurrentName", "_horseryDarkName", "_horseryNormalName", "_horseryPaleName", "_jickJarAvailable", "_jiggleCheesedMonsters", "_lastCombatActions", "_lastCombatStarted", "_locketMonstersFought", "_mayamSymbolsUsed", "_mummeryMods", "_mummeryUses", "_newYouQuestSkill", "_noHatModifier", "_pantogramModifier", "_perilLocations", "_pirateRealmCrewmate", "_pirateRealmCrewmate1", "_pirateRealmCrewmate2", "_pirateRealmCrewmate3", "_pirateRealmShip", "_pottedPowerPlant", "_questESp", "_questPartyFair", "_questPartyFairProgress", "_questPartyFairQuest", "_questPirateRealm", "_roboDrinks", "_roninStoragePulls", "_savageBeastMods", "_seadentWaveZone", "_spacegateAnimalLife", "_spacegateCoordinates", "_spacegateGear", "_spacegateHazards", "_spacegateIntelligentLife", "_spacegatePlanetName", "_spacegatePlantLife", "_stolenAccordions", "_tempRelayCounters", "_timeSpinnerFoodAvailable", "_trickOrTreatBlock", "_unknownEasyBountyItem", "_unknownHardBountyItem", "_unknownSpecialBountyItem", "_untakenEasyBountyItem", "_untakenHardBountyItem", "_untakenSpecialBountyItem", "_userMods", "_villainLairColor", "_villainLairKey", "_voteLocal1", "_voteLocal2", "_voteLocal3", "_voteLocal4", "_voteMonster1", "_voteMonster2", "_voteModifier", "_VYKEACompanionType", "_VYKEACompanionRune", "_VYKEACompanionName"];
var numericOrStringProperties = ["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing", "choiceAdventure2", "choiceAdventure3", "choiceAdventure4", "choiceAdventure5", "choiceAdventure6", "choiceAdventure7", "choiceAdventure8", "choiceAdventure9", "choiceAdventure10", "choiceAdventure11", "choiceAdventure12", "choiceAdventure14", "choiceAdventure15", "choiceAdventure16", "choiceAdventure17", "choiceAdventure18", "choiceAdventure19", "choiceAdventure20", "choiceAdventure21", "choiceAdventure22", "choiceAdventure23", "choiceAdventure24", "choiceAdventure25", "choiceAdventure26", "choiceAdventure27", "choiceAdventure28", "choiceAdventure29", "choiceAdventure40", "choiceAdventure41", "choiceAdventure42", "choiceAdventure45", "choiceAdventure46", "choiceAdventure47", "choiceAdventure71", "choiceAdventure72", "choiceAdventure73", "choiceAdventure74", "choiceAdventure75", "choiceAdventure76", "choiceAdventure77", "choiceAdventure86", "choiceAdventure87", "choiceAdventure88", "choiceAdventure89", "choiceAdventure90", "choiceAdventure91", "choiceAdventure105", "choiceAdventure106", "choiceAdventure107", "choiceAdventure108", "choiceAdventure109", "choiceAdventure110", "choiceAdventure111", "choiceAdventure112", "choiceAdventure113", "choiceAdventure114", "choiceAdventure115", "choiceAdventure116", "choiceAdventure117", "choiceAdventure118", "choiceAdventure120", "choiceAdventure123", "choiceAdventure125", "choiceAdventure126", "choiceAdventure127", "choiceAdventure129", "choiceAdventure131", "choiceAdventure132", "choiceAdventure135", "choiceAdventure136", "choiceAdventure137", "choiceAdventure138", "choiceAdventure139", "choiceAdventure140", "choiceAdventure141", "choiceAdventure142", "choiceAdventure143", "choiceAdventure144", "choiceAdventure145", "choiceAdventure146", "choiceAdventure147", "choiceAdventure148", "choiceAdventure149", "choiceAdventure151", "choiceAdventure152", "choiceAdventure153", "choiceAdventure154", "choiceAdventure155", "choiceAdventure156", "choiceAdventure157", "choiceAdventure158", "choiceAdventure159", "choiceAdventure160", "choiceAdventure161", "choiceAdventure162", "choiceAdventure163", "choiceAdventure164", "choiceAdventure165", "choiceAdventure166", "choiceAdventure167", "choiceAdventure168", "choiceAdventure169", "choiceAdventure170", "choiceAdventure171", "choiceAdventure172", "choiceAdventure177", "choiceAdventure178", "choiceAdventure180", "choiceAdventure181", "choiceAdventure182", "choiceAdventure184", "choiceAdventure185", "choiceAdventure186", "choiceAdventure187", "choiceAdventure188", "choiceAdventure189", "choiceAdventure191", "choiceAdventure197", "choiceAdventure198", "choiceAdventure199", "choiceAdventure200", "choiceAdventure201", "choiceAdventure202", "choiceAdventure203", "choiceAdventure204", "choiceAdventure205", "choiceAdventure206", "choiceAdventure207", "choiceAdventure208", "choiceAdventure211", "choiceAdventure212", "choiceAdventure213", "choiceAdventure214", "choiceAdventure215", "choiceAdventure216", "choiceAdventure217", "choiceAdventure218", "choiceAdventure219", "choiceAdventure220", "choiceAdventure221", "choiceAdventure222", "choiceAdventure223", "choiceAdventure224", "choiceAdventure225", "choiceAdventure230", "choiceAdventure272", "choiceAdventure273", "choiceAdventure276", "choiceAdventure277", "choiceAdventure278", "choiceAdventure279", "choiceAdventure280", "choiceAdventure281", "choiceAdventure282", "choiceAdventure283", "choiceAdventure284", "choiceAdventure285", "choiceAdventure286", "choiceAdventure287", "choiceAdventure288", "choiceAdventure289", "choiceAdventure290", "choiceAdventure291", "choiceAdventure292", "choiceAdventure293", "choiceAdventure294", "choiceAdventure295", "choiceAdventure296", "choiceAdventure297", "choiceAdventure298", "choiceAdventure299", "choiceAdventure302", "choiceAdventure303", "choiceAdventure304", "choiceAdventure305", "choiceAdventure306", "choiceAdventure307", "choiceAdventure308", "choiceAdventure309", "choiceAdventure310", "choiceAdventure311", "choiceAdventure317", "choiceAdventure318", "choiceAdventure319", "choiceAdventure320", "choiceAdventure321", "choiceAdventure322", "choiceAdventure326", "choiceAdventure327", "choiceAdventure328", "choiceAdventure329", "choiceAdventure330", "choiceAdventure331", "choiceAdventure332", "choiceAdventure333", "choiceAdventure334", "choiceAdventure335", "choiceAdventure336", "choiceAdventure337", "choiceAdventure338", "choiceAdventure339", "choiceAdventure340", "choiceAdventure341", "choiceAdventure342", "choiceAdventure343", "choiceAdventure344", "choiceAdventure345", "choiceAdventure346", "choiceAdventure347", "choiceAdventure348", "choiceAdventure349", "choiceAdventure350", "choiceAdventure351", "choiceAdventure352", "choiceAdventure353", "choiceAdventure354", "choiceAdventure355", "choiceAdventure356", "choiceAdventure357", "choiceAdventure358", "choiceAdventure360", "choiceAdventure361", "choiceAdventure362", "choiceAdventure363", "choiceAdventure364", "choiceAdventure365", "choiceAdventure366", "choiceAdventure367", "choiceAdventure372", "choiceAdventure376", "choiceAdventure387", "choiceAdventure388", "choiceAdventure389", "choiceAdventure390", "choiceAdventure391", "choiceAdventure392", "choiceAdventure393", "choiceAdventure395", "choiceAdventure396", "choiceAdventure397", "choiceAdventure398", "choiceAdventure399", "choiceAdventure400", "choiceAdventure401", "choiceAdventure402", "choiceAdventure403", "choiceAdventure423", "choiceAdventure424", "choiceAdventure425", "choiceAdventure426", "choiceAdventure427", "choiceAdventure428", "choiceAdventure429", "choiceAdventure430", "choiceAdventure431", "choiceAdventure432", "choiceAdventure433", "choiceAdventure435", "choiceAdventure438", "choiceAdventure439", "choiceAdventure442", "choiceAdventure444", "choiceAdventure445", "choiceAdventure446", "choiceAdventure447", "choiceAdventure448", "choiceAdventure449", "choiceAdventure451", "choiceAdventure452", "choiceAdventure453", "choiceAdventure454", "choiceAdventure455", "choiceAdventure456", "choiceAdventure457", "choiceAdventure458", "choiceAdventure460", "choiceAdventure461", "choiceAdventure462", "choiceAdventure463", "choiceAdventure464", "choiceAdventure465", "choiceAdventure467", "choiceAdventure468", "choiceAdventure469", "choiceAdventure470", "choiceAdventure471", "choiceAdventure472", "choiceAdventure473", "choiceAdventure474", "choiceAdventure475", "choiceAdventure477", "choiceAdventure478", "choiceAdventure480", "choiceAdventure483", "choiceAdventure484", "choiceAdventure485", "choiceAdventure486", "choiceAdventure488", "choiceAdventure489", "choiceAdventure490", "choiceAdventure491", "choiceAdventure496", "choiceAdventure497", "choiceAdventure502", "choiceAdventure503", "choiceAdventure504", "choiceAdventure505", "choiceAdventure506", "choiceAdventure507", "choiceAdventure509", "choiceAdventure510", "choiceAdventure511", "choiceAdventure512", "choiceAdventure513", "choiceAdventure514", "choiceAdventure515", "choiceAdventure517", "choiceAdventure518", "choiceAdventure519", "choiceAdventure521", "choiceAdventure522", "choiceAdventure523", "choiceAdventure527", "choiceAdventure528", "choiceAdventure529", "choiceAdventure530", "choiceAdventure531", "choiceAdventure532", "choiceAdventure533", "choiceAdventure534", "choiceAdventure535", "choiceAdventure536", "choiceAdventure538", "choiceAdventure539", "choiceAdventure542", "choiceAdventure543", "choiceAdventure544", "choiceAdventure546", "choiceAdventure548", "choiceAdventure549", "choiceAdventure550", "choiceAdventure551", "choiceAdventure552", "choiceAdventure553", "choiceAdventure554", "choiceAdventure556", "choiceAdventure557", "choiceAdventure558", "choiceAdventure559", "choiceAdventure560", "choiceAdventure561", "choiceAdventure562", "choiceAdventure563", "choiceAdventure564", "choiceAdventure565", "choiceAdventure566", "choiceAdventure567", "choiceAdventure568", "choiceAdventure569", "choiceAdventure571", "choiceAdventure572", "choiceAdventure573", "choiceAdventure574", "choiceAdventure575", "choiceAdventure576", "choiceAdventure577", "choiceAdventure578", "choiceAdventure579", "choiceAdventure581", "choiceAdventure582", "choiceAdventure583", "choiceAdventure584", "choiceAdventure594", "choiceAdventure595", "choiceAdventure596", "choiceAdventure597", "choiceAdventure598", "choiceAdventure599", "choiceAdventure600", "choiceAdventure603", "choiceAdventure604", "choiceAdventure616", "choiceAdventure634", "choiceAdventure640", "choiceAdventure654", "choiceAdventure655", "choiceAdventure656", "choiceAdventure657", "choiceAdventure658", "choiceAdventure664", "choiceAdventure669", "choiceAdventure670", "choiceAdventure671", "choiceAdventure672", "choiceAdventure673", "choiceAdventure674", "choiceAdventure675", "choiceAdventure676", "choiceAdventure677", "choiceAdventure678", "choiceAdventure679", "choiceAdventure681", "choiceAdventure683", "choiceAdventure684", "choiceAdventure685", "choiceAdventure686", "choiceAdventure687", "choiceAdventure688", "choiceAdventure689", "choiceAdventure690", "choiceAdventure691", "choiceAdventure692", "choiceAdventure693", "choiceAdventure694", "choiceAdventure695", "choiceAdventure696", "choiceAdventure697", "choiceAdventure698", "choiceAdventure700", "choiceAdventure701", "choiceAdventure705", "choiceAdventure706", "choiceAdventure707", "choiceAdventure708", "choiceAdventure709", "choiceAdventure710", "choiceAdventure711", "choiceAdventure712", "choiceAdventure713", "choiceAdventure714", "choiceAdventure715", "choiceAdventure716", "choiceAdventure717", "choiceAdventure721", "choiceAdventure725", "choiceAdventure729", "choiceAdventure733", "choiceAdventure737", "choiceAdventure741", "choiceAdventure745", "choiceAdventure749", "choiceAdventure753", "choiceAdventure771", "choiceAdventure778", "choiceAdventure780", "choiceAdventure781", "choiceAdventure783", "choiceAdventure784", "choiceAdventure785", "choiceAdventure786", "choiceAdventure787", "choiceAdventure788", "choiceAdventure789", "choiceAdventure791", "choiceAdventure793", "choiceAdventure794", "choiceAdventure795", "choiceAdventure796", "choiceAdventure797", "choiceAdventure803", "choiceAdventure805", "choiceAdventure808", "choiceAdventure809", "choiceAdventure813", "choiceAdventure815", "choiceAdventure830", "choiceAdventure832", "choiceAdventure833", "choiceAdventure834", "choiceAdventure835", "choiceAdventure837", "choiceAdventure838", "choiceAdventure839", "choiceAdventure840", "choiceAdventure841", "choiceAdventure842", "choiceAdventure851", "choiceAdventure852", "choiceAdventure853", "choiceAdventure854", "choiceAdventure855", "choiceAdventure856", "choiceAdventure857", "choiceAdventure858", "choiceAdventure866", "choiceAdventure873", "choiceAdventure875", "choiceAdventure876", "choiceAdventure877", "choiceAdventure878", "choiceAdventure879", "choiceAdventure880", "choiceAdventure881", "choiceAdventure882", "choiceAdventure888", "choiceAdventure889", "choiceAdventure918", "choiceAdventure919", "choiceAdventure920", "choiceAdventure921", "choiceAdventure923", "choiceAdventure924", "choiceAdventure925", "choiceAdventure926", "choiceAdventure927", "choiceAdventure928", "choiceAdventure929", "choiceAdventure930", "choiceAdventure931", "choiceAdventure932", "choiceAdventure940", "choiceAdventure941", "choiceAdventure942", "choiceAdventure943", "choiceAdventure944", "choiceAdventure945", "choiceAdventure946", "choiceAdventure950", "choiceAdventure955", "choiceAdventure957", "choiceAdventure958", "choiceAdventure959", "choiceAdventure960", "choiceAdventure961", "choiceAdventure962", "choiceAdventure963", "choiceAdventure964", "choiceAdventure965", "choiceAdventure966", "choiceAdventure970", "choiceAdventure973", "choiceAdventure974", "choiceAdventure975", "choiceAdventure976", "choiceAdventure977", "choiceAdventure979", "choiceAdventure980", "choiceAdventure981", "choiceAdventure982", "choiceAdventure983", "choiceAdventure988", "choiceAdventure989", "choiceAdventure993", "choiceAdventure998", "choiceAdventure1000", "choiceAdventure1003", "choiceAdventure1005", "choiceAdventure1006", "choiceAdventure1007", "choiceAdventure1008", "choiceAdventure1009", "choiceAdventure1010", "choiceAdventure1011", "choiceAdventure1012", "choiceAdventure1013", "choiceAdventure1015", "choiceAdventure1016", "choiceAdventure1017", "choiceAdventure1018", "choiceAdventure1019", "choiceAdventure1020", "choiceAdventure1021", "choiceAdventure1022", "choiceAdventure1023", "choiceAdventure1026", "choiceAdventure1027", "choiceAdventure1028", "choiceAdventure1029", "choiceAdventure1030", "choiceAdventure1031", "choiceAdventure1032", "choiceAdventure1033", "choiceAdventure1034", "choiceAdventure1035", "choiceAdventure1036", "choiceAdventure1037", "choiceAdventure1038", "choiceAdventure1039", "choiceAdventure1040", "choiceAdventure1041", "choiceAdventure1042", "choiceAdventure1044", "choiceAdventure1045", "choiceAdventure1046", "choiceAdventure1048", "choiceAdventure1051", "choiceAdventure1052", "choiceAdventure1053", "choiceAdventure1054", "choiceAdventure1055", "choiceAdventure1056", "choiceAdventure1057", "choiceAdventure1059", "choiceAdventure1060", "choiceAdventure1061", "choiceAdventure1062", "choiceAdventure1065", "choiceAdventure1067", "choiceAdventure1068", "choiceAdventure1069", "choiceAdventure1070", "choiceAdventure1071", "choiceAdventure1073", "choiceAdventure1077", "choiceAdventure1080", "choiceAdventure1081", "choiceAdventure1082", "choiceAdventure1083", "choiceAdventure1084", "choiceAdventure1085", "choiceAdventure1091", "choiceAdventure1094", "choiceAdventure1095", "choiceAdventure1096", "choiceAdventure1097", "choiceAdventure1102", "choiceAdventure1106", "choiceAdventure1107", "choiceAdventure1108", "choiceAdventure1110", "choiceAdventure1114", "choiceAdventure1115", "choiceAdventure1116", "choiceAdventure1118", "choiceAdventure1119", "choiceAdventure1120", "choiceAdventure1121", "choiceAdventure1122", "choiceAdventure1123", "choiceAdventure1171", "choiceAdventure1172", "choiceAdventure1173", "choiceAdventure1174", "choiceAdventure1175", "choiceAdventure1193", "choiceAdventure1195", "choiceAdventure1196", "choiceAdventure1197", "choiceAdventure1198", "choiceAdventure1199", "choiceAdventure1202", "choiceAdventure1203", "choiceAdventure1204", "choiceAdventure1205", "choiceAdventure1206", "choiceAdventure1207", "choiceAdventure1208", "choiceAdventure1209", "choiceAdventure1210", "choiceAdventure1211", "choiceAdventure1212", "choiceAdventure1213", "choiceAdventure1214", "choiceAdventure1215", "choiceAdventure1219", "choiceAdventure1222", "choiceAdventure1223", "choiceAdventure1224", "choiceAdventure1225", "choiceAdventure1226", "choiceAdventure1227", "choiceAdventure1228", "choiceAdventure1229", "choiceAdventure1236", "choiceAdventure1237", "choiceAdventure1238", "choiceAdventure1239", "choiceAdventure1240", "choiceAdventure1241", "choiceAdventure1242", "choiceAdventure1243", "choiceAdventure1244", "choiceAdventure1245", "choiceAdventure1246", "choiceAdventure1247", "choiceAdventure1248", "choiceAdventure1249", "choiceAdventure1250", "choiceAdventure1251", "choiceAdventure1252", "choiceAdventure1253", "choiceAdventure1254", "choiceAdventure1255", "choiceAdventure1256", "choiceAdventure1266", "choiceAdventure1280", "choiceAdventure1281", "choiceAdventure1282", "choiceAdventure1283", "choiceAdventure1284", "choiceAdventure1285", "choiceAdventure1286", "choiceAdventure1287", "choiceAdventure1288", "choiceAdventure1289", "choiceAdventure1290", "choiceAdventure1291", "choiceAdventure1292", "choiceAdventure1293", "choiceAdventure1294", "choiceAdventure1295", "choiceAdventure1296", "choiceAdventure1297", "choiceAdventure1298", "choiceAdventure1299", "choiceAdventure1300", "choiceAdventure1301", "choiceAdventure1302", "choiceAdventure1303", "choiceAdventure1304", "choiceAdventure1305", "choiceAdventure1307", "choiceAdventure1310", "choiceAdventure1312", "choiceAdventure1313", "choiceAdventure1314", "choiceAdventure1315", "choiceAdventure1316", "choiceAdventure1317", "choiceAdventure1318", "choiceAdventure1319", "choiceAdventure1321", "choiceAdventure1322", "choiceAdventure1323", "choiceAdventure1324", "choiceAdventure1325", "choiceAdventure1326", "choiceAdventure1327", "choiceAdventure1328", "choiceAdventure1332", "choiceAdventure1333", "choiceAdventure1335", "choiceAdventure1340", "choiceAdventure1341", "choiceAdventure1345", "choiceAdventure1389", "choiceAdventure1392", "choiceAdventure1397", "choiceAdventure1399", "choiceAdventure1405", "choiceAdventure1411", "choiceAdventure1415", "choiceAdventure1427", "choiceAdventure1428", "choiceAdventure1429", "choiceAdventure1430", "choiceAdventure1431", "choiceAdventure1432", "choiceAdventure1433", "choiceAdventure1434", "choiceAdventure1436", "choiceAdventure1460", "choiceAdventure1461", "choiceAdventure1467", "choiceAdventure1468", "choiceAdventure1469", "choiceAdventure1470", "choiceAdventure1471", "choiceAdventure1472", "choiceAdventure1473", "choiceAdventure1474", "choiceAdventure1475", "choiceAdventure1486", "choiceAdventure1487", "choiceAdventure1488", "choiceAdventure1489", "choiceAdventure1491", "choiceAdventure1494", "choiceAdventure1505", "choiceAdventure1528", "choiceAdventure1534", "choiceAdventure1538", "choiceAdventure1539", "choiceAdventure1540", "choiceAdventure1541", "choiceAdventure1542", "choiceAdventure1545", "choiceAdventure1546", "choiceAdventure1547", "choiceAdventure1548", "choiceAdventure1549", "choiceAdventure1550"];
var familiarProperties = ["commaFamiliar", "cupidBowLastFamiliar", "nextQuantumFamiliar", "stillsuitFamiliar", "zootGraftedButtCheekLeftFamiliar", "zootGraftedButtCheekRightFamiliar", "zootGraftedFootLeftFamiliar", "zootGraftedFootRightFamiliar", "zootGraftedHandLeftFamiliar", "zootGraftedHandRightFamiliar", "zootGraftedHeadFamiliar", "zootGraftedNippleLeftFamiliar", "zootGraftedNippleRightFamiliar", "zootGraftedShoulderLeftFamiliar", "zootGraftedShoulderRightFamiliar"];
var familiarNumericProperties = ["cupidBowLastFamiliar", "zootGraftedButtCheekLeftFamiliar", "zootGraftedButtCheekRightFamiliar", "zootGraftedFootLeftFamiliar", "zootGraftedFootRightFamiliar", "zootGraftedHandLeftFamiliar", "zootGraftedHandRightFamiliar", "zootGraftedHeadFamiliar", "zootGraftedNippleLeftFamiliar", "zootGraftedNippleRightFamiliar", "zootGraftedShoulderLeftFamiliar", "zootGraftedShoulderRightFamiliar"];
var statProperties = ["nsChallenge1", "snojoSetting"];
var phylumProperties = ["dnaSyringe", "locketPhylum", "redSnapperPhylum", "_circadianRhythmsPhylum"];
var itemProperties = ["commerceGhostItem", "daycareInstructorItem", "doctorBagQuestItem", "dolphinItem", "eweItem", "guzzlrQuestBooze", "implementGlitchItem", "muffinOnOrder", "rufusDesiredArtifact", "rufusDesiredItems", "shenQuestItem", "trapperOre", "walfordBucketItem", "_cookbookbatQuestIngredient", "_crimboPastDailySpecialItem", "_dailySpecial", "_pirateRealmCurio"];
var itemNumericProperties = ["daycareInstructorItem", "_crimboPastDailySpecialItem"];
;// CONCATENATED MODULE: ./node_modules/libram/dist/propertyTyping.js

var booleanPropertiesSet = new Set(booleanProperties);
var numericPropertiesSet = new Set(numericProperties);
var numericOrStringPropertiesSet = new Set(numericOrStringProperties);
var stringPropertiesSet = new Set(stringProperties);
var locationPropertiesSet = new Set(locationProperties);
var monsterPropertiesSet = new Set(monsterProperties);
var familiarPropertiesSet = new Set(familiarProperties);
var statPropertiesSet = new Set(statProperties);
var phylumPropertiesSet = new Set(phylumProperties);
var itemPropertiesSet = new Set(itemProperties);
/**
 * Determine whether a property has a boolean value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a boolean value
 */
function isBooleanProperty(property) {
  return booleanPropertiesSet.has(property);
}
/**
 * Determine whether a property has a numeric value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a numeric value
 */
function propertyTyping_isNumericProperty(property) {
  return numericPropertiesSet.has(property);
}
/**
 * Determine whether a property has a numeric or string value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a numeric or string value
 */
function isNumericOrStringProperty(property) {
  return numericOrStringPropertiesSet.has(property);
}
/**
 * Determine whether a property has a string value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a string value
 */
function isStringProperty(property) {
  return stringPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Location value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Location value
 */
function isLocationProperty(property) {
  return locationPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Monster value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Monster value
 */
function isMonsterProperty(property) {
  return monsterPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Familiar value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Familiar value
 */
function isFamiliarProperty(property) {
  return familiarPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Stat value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Stat value
 */
function isStatProperty(property) {
  return statPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Phylum value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Phylum value
 */
function isPhylumProperty(property) {
  return phylumPropertiesSet.has(property);
}
/**
 * Determine whether a property has an Item value
 *
 * @param property Property to check
 * @returns Whether the supplied property has an Item value
 */
function isItemProperty(property) {
  return itemPropertiesSet.has(property);
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/property.js
function property_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function property_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? property_ownKeys(Object(source), !0).forEach(function (key) { property_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : property_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function property_toConsumableArray(arr) { return property_arrayWithoutHoles(arr) || property_iterableToArray(arr) || property_unsupportedIterableToArray(arr) || property_nonIterableSpread(); }
function property_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function property_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function property_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return property_arrayLikeToArray(arr); }
function property_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function property_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, property_toPropertyKey(descriptor.key), descriptor); } }
function property_createClass(Constructor, protoProps, staticProps) { if (protoProps) property_defineProperties(Constructor.prototype, protoProps); if (staticProps) property_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function property_defineProperty(obj, key, value) { key = property_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function property_toPropertyKey(arg) { var key = property_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function property_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function property_slicedToArray(arr, i) { return property_arrayWithHoles(arr) || property_iterableToArrayLimit(arr, i) || property_unsupportedIterableToArray(arr, i) || property_nonIterableRest(); }
function property_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function property_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return property_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return property_arrayLikeToArray(o, minLen); }
function property_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function property_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function property_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/* eslint-disable jsdoc/require-param */
/* eslint-disable jsdoc/require-returns */



var createPropertyGetter = transform => (property, default_) => {
  var value = (0,external_kolmafia_namespaceObject.getProperty)(property);
  if (default_ !== undefined && value === "") {
    return default_;
  }
  return transform(value, property);
};
function createMafiaClassPropertyGetter(Type,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
toType) {
  var numericPropertyNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return createPropertyGetter((value, property) => {
    if (value === "") return null;
    var v = numericPropertyNames.includes(property) ? value.match(/^[0-9]+$/) ? toType(parseInt(value)) : null : toType(value);
    return v === Type.none ? null : v;
  });
}
var getString = createPropertyGetter(value => value);
var getCommaSeparated = createPropertyGetter(value => value.split(/, ?/));
var getBoolean = createPropertyGetter(value => value === "true");
var getNumber = createPropertyGetter(value => Number(value));
var getBounty = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Bounty, external_kolmafia_namespaceObject.toBounty);
var getClass = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Class, external_kolmafia_namespaceObject.toClass);
var getCoinmaster = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Coinmaster, external_kolmafia_namespaceObject.toCoinmaster);
var getEffect = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Effect, external_kolmafia_namespaceObject.toEffect);
var getElement = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Element, external_kolmafia_namespaceObject.toElement);
var getFamiliar = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Familiar, external_kolmafia_namespaceObject.toFamiliar, familiarNumericProperties);
var getItem = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Item, external_kolmafia_namespaceObject.toItem, itemNumericProperties);
var getLocation = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Location, external_kolmafia_namespaceObject.toLocation);
var getMonster = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Monster, external_kolmafia_namespaceObject.toMonster, monsterNumericProperties);
var getPhylum = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Phylum, external_kolmafia_namespaceObject.toPhylum);
var getServant = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Servant, external_kolmafia_namespaceObject.toServant);
var getSkill = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Skill, external_kolmafia_namespaceObject.toSkill);
var getSlot = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Slot, external_kolmafia_namespaceObject.toSlot);
var getStat = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Stat, external_kolmafia_namespaceObject.toStat);
var getThrall = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Thrall, external_kolmafia_namespaceObject.toThrall);
/**
 * Gets the value of a mafia property, either built in or custom
 *
 * @param property Name of the property
 * @param _default Default value for the property to take if not set
 * @returns Value of the mafia property
 */
function property_get(property, _default) {
  var value = getString(property);
  // Handle known properties.
  if (isBooleanProperty(property)) {
    var _getBoolean;
    return (_getBoolean = getBoolean(property, _default)) !== null && _getBoolean !== void 0 ? _getBoolean : false;
  } else if (propertyTyping_isNumericProperty(property)) {
    var _getNumber;
    return (_getNumber = getNumber(property, _default)) !== null && _getNumber !== void 0 ? _getNumber : 0;
  } else if (isNumericOrStringProperty(property)) {
    return value.match(/^\d+$/) ? parseInt(value) : value;
  } else if (isLocationProperty(property)) {
    return getLocation(property, _default);
  } else if (isMonsterProperty(property)) {
    return getMonster(property, _default);
  } else if (isFamiliarProperty(property)) {
    return getFamiliar(property, _default);
  } else if (isStatProperty(property)) {
    return getStat(property, _default);
  } else if (isPhylumProperty(property)) {
    return getPhylum(property, _default);
  } else if (isItemProperty(property)) {
    return getItem(property, _default);
  } else if (isStringProperty(property)) {
    return value === "" && _default !== undefined ? _default : value;
  }
  // Not a KnownProperty from here on out.
  if (_default instanceof external_kolmafia_namespaceObject.Location) {
    return getLocation(property, _default);
  } else if (_default instanceof external_kolmafia_namespaceObject.Monster) {
    return getMonster(property, _default);
  } else if (_default instanceof external_kolmafia_namespaceObject.Familiar) {
    return getFamiliar(property, _default);
  } else if (_default instanceof external_kolmafia_namespaceObject.Stat) {
    return getStat(property, _default);
  } else if (_default instanceof external_kolmafia_namespaceObject.Phylum) {
    return getPhylum(property, _default);
  } else if (_default instanceof external_kolmafia_namespaceObject.Item) {
    return getItem(property, _default);
  } else if (typeof _default === "boolean") {
    return value === "true" ? true : value === "false" ? false : _default;
  } else if (typeof _default === "number") {
    return value === "" ? _default : parseInt(value);
  } else if (value === "") {
    return _default === undefined ? "" : _default;
  } else {
    return value;
  }
}
/**
 * Sets the value of a mafia property, either built in or custom
 *
 * @param property Name of the property
 * @param value Value to give the property
 * @returns Value that was set
 */
function _set(property, value) {
  var stringValue = value === null ? "" : value.toString();
  (0,external_kolmafia_namespaceObject.setProperty)(property, stringValue);
  return value;
}
/**
 * Increment a property
 *
 * @param property Numeric property to increment
 * @param delta Number by which to increment
 * @param max Maximum value to set
 * @returns New value
 */

function increment(property) {
  var delta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;
  var value = property_get(property);
  if (!isNumericProperty(property)) return value;
  var nextValue = Math.min(max, value + delta);
  return _set(property, nextValue);
}
/**
 * Decrement a property
 *
 * @param property Numeric property to decrement
 * @param delta Number by which to decrement
 * @param min Maximum value to set
 * @returns New value
 */
function decrement(property) {
  var delta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var min = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;
  var value = property_get(property);
  if (!isNumericProperty(property)) return value;
  var nextValue = Math.max(min, value - delta);
  return _set(property, nextValue);
}
/**
 * Sets the value of a set of mafia properties
 *
 * @param properties Set of properties
 */
function setProperties(properties) {
  for (var _i = 0, _Object$entries = Object.entries(properties); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = property_slicedToArray(_Object$entries[_i], 2),
      prop = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    _set(prop, value);
  }
}
/**
 * Carries out a callback during which a set of properties will be set as supplied
 *
 * @param properties Properties to set during callback
 * @param callback Callback to execute with set properties
 * @returns Return value of the supplied callback
 */
function withProperties(properties, callback) {
  var propertiesBackup = Object.fromEntries(Object.entries(properties).map(_ref => {
    var _ref2 = property_slicedToArray(_ref, 1),
      prop = _ref2[0];
    return [prop, property_get(prop)];
  }));
  setProperties(properties);
  try {
    return callback();
  } finally {
    setProperties(propertiesBackup);
  }
}
/**
 * Carries out a callback during which a property will be set as supplied
 *
 * @param property Property to set during callback
 * @param value Value to set property during callback
 * @param callback Callback to execute with set properties
 * @returns Return value of the supplied callback
 */
function withProperty(property, value, callback) {
  return withProperties(property_defineProperty({}, property, value), callback);
}
/**
 * Carries out a callback during which a set of choices will be handled as supplied
 *
 * @param choices Choices to set during callback
 * @param callback Callback to execute with set choices
 * @returns Return value of the supplied callback
 */
function withChoices(choices, callback) {
  var properties = Object.fromEntries(Object.entries(choices).map(_ref3 => {
    var _ref4 = property_slicedToArray(_ref3, 2),
      choice = _ref4[0],
      option = _ref4[1];
    return ["choiceAdventure".concat(choice), option];
  }));
  return withProperties(properties, callback);
}
/**
 * Carries out a callback during which a choice will be handled as supplied
 *
 * @param choice Choice to set during callback
 * @param value How to handle choice during callback
 * @param callback Callback to execute with set properties
 * @returns Return value of the supplied callback
 */
function withChoice(choice, value, callback) {
  return withChoices(property_defineProperty({}, choice, value), callback);
}
var PropertiesManager = /*#__PURE__*/function () {
  function PropertiesManager() {
    property_classCallCheck(this, PropertiesManager);
    property_defineProperty(this, "properties", {});
  }
  property_createClass(PropertiesManager, [{
    key: "storedValues",
    get: function get() {
      return this.properties;
    }
    /**
     * Sets a collection of properties to the given values, storing the old values.
     *
     * @param propertiesToSet A Properties object, keyed by property name.
     */
  }, {
    key: "set",
    value: function set(propertiesToSet) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(propertiesToSet); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = property_slicedToArray(_Object$entries2[_i2], 2),
          propertyName = _Object$entries2$_i[0],
          propertyValue = _Object$entries2$_i[1];
        if (!(propertyName in this.properties)) {
          this.properties[propertyName] = (0,external_kolmafia_namespaceObject.propertyExists)(propertyName) ? property_get(propertyName) : PropertiesManager.EMPTY_PREFERENCE;
        }
        _set(propertyName, propertyValue);
      }
    }
    /**
     * Sets a collection of choice adventure properties to the given values, storing the old values.
     *
     * @param choicesToSet An object keyed by choice adventure number.
     */
  }, {
    key: "setChoices",
    value: function setChoices(choicesToSet) {
      this.set(Object.fromEntries(Object.entries(choicesToSet).map(_ref5 => {
        var _ref6 = property_slicedToArray(_ref5, 2),
          choiceNumber = _ref6[0],
          choiceValue = _ref6[1];
        return ["choiceAdventure".concat(choiceNumber), choiceValue];
      })));
    }
    /**
     * Sets a single choice adventure property to the given value, storing the old value.
     *
     * @param choiceToSet The number of the choice adventure to set the property for.
     * @param value The value to assign to that choice adventure.
     */
  }, {
    key: "setChoice",
    value: function setChoice(choiceToSet, value) {
      this.setChoices(property_defineProperty({}, choiceToSet, value));
    }
    /**
     * Resets the given properties to their original stored value. Does not delete entries from the manager.
     *
     * @param properties Collection of properties to reset.
     */
  }, {
    key: "reset",
    value: function reset() {
      for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
        properties[_key] = arguments[_key];
      }
      for (var _i3 = 0, _properties = properties; _i3 < _properties.length; _i3++) {
        var property = _properties[_i3];
        if (!(property in this.properties)) continue;
        var value = this.properties[property];
        if (value === PropertiesManager.EMPTY_PREFERENCE) {
          (0,external_kolmafia_namespaceObject.removeProperty)(property);
        } else {
          _set(property, value);
        }
      }
    }
    /**
     * Iterates over all stored values, setting each property back to its original stored value. Does not delete entries from the manager.
     */
  }, {
    key: "resetAll",
    value: function resetAll() {
      this.reset.apply(this, property_toConsumableArray(Object.keys(this.properties)));
    }
    /**
     * Stops storing the original values of inputted properties.
     *
     * @param properties Properties for the manager to forget.
     */
  }, {
    key: "clear",
    value: function clear() {
      for (var _len2 = arguments.length, properties = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        properties[_key2] = arguments[_key2];
      }
      for (var _i4 = 0, _properties2 = properties; _i4 < _properties2.length; _i4++) {
        var property = _properties2[_i4];
        if (this.properties[property]) {
          delete this.properties[property];
        }
      }
    }
    /**
     * Clears all properties.
     */
  }, {
    key: "clearAll",
    value: function clearAll() {
      this.properties = {};
    }
    /**
     * Increases a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially raise.
     * @param value The minimum value we want that property to have.
     * @returns Whether we needed to change the property.
     */
  }, {
    key: "setMinimumValue",
    value: function setMinimumValue(property, value) {
      if (property_get(property, 0) < value) {
        this.set(property_defineProperty({}, property, value));
        return true;
      }
      return false;
    }
    /**
     * Decrease a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially lower.
     * @param value The maximum value we want that property to have.
     * @returns Whether we needed to change the property.
     */
  }, {
    key: "setMaximumValue",
    value: function setMaximumValue(property, value) {
      if (property_get(property, 0) > value) {
        this.set(property_defineProperty({}, property, value));
        return true;
      }
      return false;
    }
    /**
     * Creates a new PropertiesManager with identical stored values to this one.
     *
     * @returns A new PropertiesManager, with identical stored values to this one.
     */
  }, {
    key: "clone",
    value: function clone() {
      var newGuy = new PropertiesManager();
      newGuy.properties = this.storedValues;
      return newGuy;
    }
    /**
     * Clamps a numeric property, modulating it up or down to fit within a specified range
     *
     * @param property The numeric property to clamp
     * @param min The lower bound for what we want the property to be allowed to be.
     * @param max The upper bound for what we want the property to be allowed to be.
     * @returns Whether we ended up changing the property or not.
     */
  }, {
    key: "clamp",
    value: function clamp(property, min, max) {
      if (max < min) return false;
      var start = property_get(property);
      this.setMinimumValue(property, min);
      this.setMaximumValue(property, max);
      return start !== property_get(property);
    }
    /**
     * Determines whether this PropertiesManager has identical stored values to another.
     *
     * @param other The PropertiesManager to compare to this one.
     * @returns Whether their StoredValues are identical.
     */
  }, {
    key: "equals",
    value: function equals(other) {
      var thisProps = Object.entries(this.storedValues);
      var otherProps = new Map(Object.entries(other.storedValues));
      if (thisProps.length !== otherProps.size) return false;
      for (var _i5 = 0, _thisProps = thisProps; _i5 < _thisProps.length; _i5++) {
        var _thisProps$_i = property_slicedToArray(_thisProps[_i5], 2),
          propertyName = _thisProps$_i[0],
          propertyValue = _thisProps$_i[1];
        if (otherProps.get(propertyName) === propertyValue) return false;
      }
      return true;
    }
    /**
     * Merges a PropertiesManager onto this one, letting the input win in the event that both PropertiesManagers have a value stored.
     *
     * @param other The PropertiesManager to be merged onto this one.
     * @returns A new PropertiesManager with stored values from both its parents.
     */
  }, {
    key: "merge",
    value: function merge(other) {
      var newGuy = new PropertiesManager();
      newGuy.properties = property_objectSpread(property_objectSpread({}, this.properties), other.properties);
      return newGuy;
    }
    /**
     * Merges an arbitrary collection of PropertiesManagers, letting the rightmost PropertiesManager win in the event of verlap.
     *
     * @param mergees The PropertiesManagers to merge together.
     * @returns A PropertiesManager that is just an amalgam of all the constituents.
     */
  }], [{
    key: "merge",
    value: function merge() {
      for (var _len3 = arguments.length, mergees = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        mergees[_key3] = arguments[_key3];
      }
      if (mergees.length === 0) return new PropertiesManager();
      return mergees.reduce((a, b) => a.merge(b));
    }
  }]);
  return PropertiesManager;
}();
property_defineProperty(PropertiesManager, "EMPTY_PREFERENCE", Symbol("empty preference"));
;// CONCATENATED MODULE: ./node_modules/libram/dist/combat.js
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = combat_getPrototypeOf(object); if (object === null) break; } return object; }
function combat_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = combat_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function combat_toConsumableArray(arr) { return combat_arrayWithoutHoles(arr) || combat_iterableToArray(arr) || combat_unsupportedIterableToArray(arr) || combat_nonIterableSpread(); }
function combat_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function combat_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return combat_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return combat_arrayLikeToArray(o, minLen); }
function combat_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function combat_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return combat_arrayLikeToArray(arr); }
function combat_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function combat_defineProperty(obj, key, value) { key = combat_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function combat_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, combat_toPropertyKey(descriptor.key), descriptor); } }
function combat_createClass(Constructor, protoProps, staticProps) { if (protoProps) combat_defineProperties(Constructor.prototype, protoProps); if (staticProps) combat_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function combat_toPropertyKey(arg) { var key = combat_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function combat_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function combat_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function combat_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) combat_setPrototypeOf(subClass, superClass); }
function combat_createSuper(Derived) { var hasNativeReflectConstruct = combat_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = combat_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = combat_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return combat_possibleConstructorReturn(this, result); }; }
function combat_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return combat_assertThisInitialized(self); }
function combat_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function combat_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; combat_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !combat_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return combat_construct(Class, arguments, combat_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return combat_setPrototypeOf(Wrapper, Class); }; return combat_wrapNativeSuper(Class); }
function combat_construct(Parent, args, Class) { if (combat_isNativeReflectConstruct()) { combat_construct = Reflect.construct.bind(); } else { combat_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) combat_setPrototypeOf(instance, Class.prototype); return instance; }; } return combat_construct.apply(null, arguments); }
function combat_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function combat_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function combat_setPrototypeOf(o, p) { combat_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return combat_setPrototypeOf(o, p); }
function combat_getPrototypeOf(o) { combat_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return combat_getPrototypeOf(o); }




var MACRO_NAME = "Script Autoattack Macro";
/**
 * Get the KoL native ID of the macro with name name.
 *
 * @param name Name of the macro
 * @category Combat
 * @returns {number} The macro ID.
 */
function getMacroId() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MACRO_NAME;
  var query = "//select[@name=\"macroid\"]/option[text()=\"".concat(name, "\"]/@value");
  var macroText = (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php");
  var macroMatches = (0,external_kolmafia_namespaceObject.xpath)(macroText, query);
  if (macroMatches.length === 0) {
    (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php?action=new");
    var newMacroText = (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php?macroid=0&name=".concat(name, "&macrotext=abort&action=save"));
    macroMatches = (0,external_kolmafia_namespaceObject.xpath)(newMacroText, query);
  }
  if (macroMatches.length === 0) {
    // We may have hit the macro cap
    if ((0,external_kolmafia_namespaceObject.xpath)(macroText, '//select[@name="macroid"]/option').length >= 100) {
      throw new InvalidMacroError("Please delete at least one existing macro to make some space for Libram");
    }
    // Otherwise who knows why it failed
    throw new InvalidMacroError("Could not find or create macro ".concat(name));
  }
  return parseInt(macroMatches[0], 10);
}
/**
 * Converts an item name to a Item, or passes through an existing instance of Item
 *
 * @param itemOrName Item name or Item instance
 * @returns KoLmafia Item instance
 */
function itemOrNameToItem(itemOrName) {
  return typeof itemOrName === "string" ? external_kolmafia_namespaceObject.Item.get(itemOrName) : itemOrName;
}
/**
 * Create a string of the item or items provided that is compatible with BALLS syntax and is non-ambiguous
 *
 * @param itemOrItems Item name, item instance, or 2-tuple of item name or item instance
 * @returns BALLS macro-compatible value for item or items provided
 */
function itemOrItemsBallsMacroName(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroName).join(", ");
  } else {
    var item = itemOrNameToItem(itemOrItems);
    return !overlappingItemNames.includes(item.name) ? item.name : item.id.toFixed(0);
  }
}
/**
 * Generate a BALLS macro condition to check wither the player has either a single or a 2-tuple of combat items
 *
 * @param itemOrItems Single or 2-tuple of combat items
 * @returns BALLS macro condition
 */
function itemOrItemsBallsMacroPredicate(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    if (itemOrItems[0] === itemOrItems[1]) return "hastwocombatitems ".concat(itemOrItemsBallsMacroName(itemOrItems[0]));
    return itemOrItems.map(itemOrItemsBallsMacroPredicate).join(" && ");
  } else {
    return "hascombatitem ".concat(itemOrItemsBallsMacroName(itemOrItems));
  }
}
/**
 * Converts a skill name to a Skill, or passes through an existing instance of Skill
 *
 * @param skillOrName Skill name or Skill instance
 * @returns KoLmafia Skill instance
 */
function skillOrNameToSkill(skillOrName) {
  if (typeof skillOrName === "string") {
    return external_kolmafia_namespaceObject.Skill.get(skillOrName);
  } else {
    return skillOrName;
  }
}
/**
 * Get a skill name in a form that is appropriate for BALLS macros
 *
 * @param skillOrName Skill name or Skill instance
 * @returns BALLS macro-suitable skill name
 */
function skillBallsMacroName(skillOrName) {
  var skill = skillOrNameToSkill(skillOrName);
  return skill.name.match(/^[A-Za-z ]+$/) && !overlappingSkillNames.includes(skill.name) ? skill.name : skill.id;
}
/**
 * Reduces a list of items into pairs to funksling.
 *
 * @param items - The items to be reduced.
 * @returns The reduced list of items or item pairs.
 */
function funkslingReduce() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }
  return items.reduce((acc, item, i, arr) => i % 2 === 0 ? acc.concat(i + 1 < arr.length ? [[item, arr[i + 1]]] : [item]) : acc, []);
}
var InvalidMacroError = /*#__PURE__*/function (_Error) {
  combat_inherits(InvalidMacroError, _Error);
  var _super = combat_createSuper(InvalidMacroError);
  function InvalidMacroError() {
    combat_classCallCheck(this, InvalidMacroError);
    return _super.apply(this, arguments);
  }
  return combat_createClass(InvalidMacroError);
}( /*#__PURE__*/combat_wrapNativeSuper(Error));
/**
 * BALLS macro builder for direct submission to KoL.
 * Create a new macro with `new Macro()` and add steps using the instance methods.
 * Uses a fluent interface, so each step returns the object for easy chaining of steps.
 * Each method is also defined as a static method that creates a new Macro with only that step.
 * For example, you can do `Macro.skill('Saucestorm').attack()`.
 */
var Macro = /*#__PURE__*/function () {
  function Macro() {
    combat_classCallCheck(this, Macro);
    combat_defineProperty(this, "components", []);
    combat_defineProperty(this, "name", MACRO_NAME);
  }
  combat_createClass(Macro, [{
    key: "toString",
    value:
    /**
     * Convert macro to string.
     *
     * @returns BALLS macro
     */
    function toString() {
      return (this.components.join(";") + ";").replace(/;;+/g, ";");
    }
    /**
     * Gives your macro a new name to be used when saving an autoattack.
     *
     * @param name The name to be used when saving as an autoattack.
     * @returns The macro in question
     */
  }, {
    key: "rename",
    value: function rename(name) {
      this.name = name;
      return this;
    }
    /**
     * Creates a new Macro with a name other than the default name.
     *
     * @param name The name to assign this macro.
     * @returns A new Macro with the assigned name.
     */
  }, {
    key: "save",
    value:
    /**
     * Save a macro to a Mafia property for use in a consult script.
     */
    function save() {
      _set(Macro.SAVED_MACRO_PROPERTY, this.toString());
    }
    /**
     * Load a saved macro from the Mafia property.
     *
     * @returns Loaded macro text
     */
  }, {
    key: "step",
    value:
    /**
     * Statefully add one or several steps to a macro.
     *
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */
    function step() {
      var _ref, _this$components;
      for (var _len2 = arguments.length, nextSteps = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nextSteps[_key2] = arguments[_key2];
      }
      var nextStepsStrings = (_ref = []).concat.apply(_ref, combat_toConsumableArray(nextSteps.map(x => x instanceof Macro ? x.components : [x])));
      (_this$components = this.components).push.apply(_this$components, combat_toConsumableArray(nextStepsStrings.filter(Boolean)));
      return this;
    }
    /**
     * Statefully add one or several steps to a macro.
     *
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "submit",
    value:
    /**
     * Submit the built macro to KoL. Only works inside combat.
     *
     * @returns Contents of the fight page after macro submission
     */
    function submit() {
      var final = this.toString();
      return (0,external_kolmafia_namespaceObject.visitUrl)("fight.php?action=macro&macrotext=".concat((0,external_kolmafia_namespaceObject.urlEncode)(final)), true, true);
    }
    /**
     * Set this macro as a KoL native autoattack.
     */
  }, {
    key: "setAutoAttack",
    value: function setAutoAttack() {
      var id = Macro.cachedMacroIds.get(this.name);
      if (id === undefined) {
        id = getMacroId(this.name);
        Macro.cachedMacroIds.set(this.name, id);
      }
      if ((0,external_kolmafia_namespaceObject.getAutoAttack)() === 99000000 + id && this.toString() === Macro.cachedAutoAttacks.get(this.name)) {
        // This macro is already set. Don"t make the server request.
        return;
      }
      (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&name=").concat((0,external_kolmafia_namespaceObject.urlEncode)(this.name), "&macrotext=").concat((0,external_kolmafia_namespaceObject.urlEncode)(this.toString()), "&action=save"), true, true);
      (0,external_kolmafia_namespaceObject.visitUrl)("account.php?am=1&action=autoattack&value=".concat(99000000 + id, "&ajax=1"));
      Macro.cachedAutoAttacks.set(this.name, this.toString());
    }
    /**
     * Renames the macro, then sets it as an autoattack.
     *
     * @param name The name to save the macro under as an autoattack.
     */
  }, {
    key: "setAutoAttackAs",
    value: function setAutoAttackAs(name) {
      this.name = name;
      this.setAutoAttack();
    }
    /**
     * Clear all cached autoattacks, and delete all stored macros server-side.
     */
  }, {
    key: "abort",
    value:
    /**
     * Add an "abort" step to this macro.
     *
     * @returns {Macro} This object itself.
     */
    function abort() {
      return this.step("abort");
    }
    /**
     * Create a new macro with an "abort" step.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "abortWithWarning",
    value:
    /**
     * Adds an "abort" step to this macro, with a warning message to print
     *
     * @param warning The warning message to print
     * @returns  {Macro} This object itself.
     */
    function abortWithWarning(warning) {
      return this.step("abort \"".concat(warning, "\""));
    }
    /**
     * Create a new macro with an "abort" step to this macro, with a warning message to print
     *
     * @param warning The warning message to print
     * @returns {Macro} This object itself.
     */
  }, {
    key: "runaway",
    value:
    /**
     * Add a "runaway" step to this macro.
     *
     * @returns {Macro} This object itself.
     */
    function runaway() {
      return this.step("runaway");
    }
    /**
     * Create a new macro with an "runaway" step.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "if_",
    value:
    /**
     * Add an "if" statement to this macro.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
    function if_(condition, ifTrue) {
      return this.step("if ".concat(Macro.makeBALLSPredicate(condition))).step(ifTrue).step("endif");
    }
    /**
     * Create a new macro with an "if" statement.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "ifNot",
    value:
    /**
     * Add an "if" statement to this macro, inverting the condition.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
    function ifNot(condition, ifTrue) {
      return this.if_("!".concat(Macro.makeBALLSPredicate(condition)), ifTrue);
    }
    /**
     * Create a new macro with an "if" statement, inverting the condition.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "while_",
    value:
    /**
     * Add a "while" statement to this macro.
     *
     * @param condition The BALLS condition for the while statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */
    function while_(condition, contents) {
      return this.step("while ".concat(Macro.makeBALLSPredicate(condition))).step(contents).step("endwhile");
    }
    /**
     * Create a new macro with a "while" statement.
     *
     * @param condition The BALLS condition for the while statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "externalIf",
    value:
    /**
     * Conditionally add a step to a macro based on a condition evaluated at the time of building the macro.
     *
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @param ifFalse Optional input to turn this into an if...else statement.
     * @returns {Macro} This object itself.
     */
    function externalIf(condition, ifTrue, ifFalse) {
      if (condition) return this.step(ifTrue);else if (ifFalse) return this.step(ifFalse);else return this;
    }
    /**
     * Create a new macro with a condition evaluated at the time of building the macro.
     *
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @param ifFalse Optional input to turn this into an if...else statement.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "repeat",
    value:
    /**
     * Add a repeat step to the macro.
     *
     * @param condition The BALLS condition for the repeat statement, optional.
     * @returns {Macro} This object itself.
     */
    function repeat(condition) {
      return condition === undefined ? this.step("repeat") : this.step("repeat ".concat(Macro.makeBALLSPredicate(condition)));
    }
    /**
     * Add one or more skill cast steps to the macro.
     *
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "skill",
    value: function skill() {
      for (var _len3 = arguments.length, skills = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        skills[_key3] = arguments[_key3];
      }
      return this.step.apply(this, combat_toConsumableArray(skills.map(skill => {
        return "skill ".concat(skillBallsMacroName(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill cast steps.
     *
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "trySkill",
    value:
    /**
     * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
     *
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */
    function trySkill() {
      for (var _len4 = arguments.length, skills = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        skills[_key4] = arguments[_key4];
      }
      return this.step.apply(this, combat_toConsumableArray(skills.map(skillOrName => skillOrNameToSkill(skillOrName)).map(skill => {
        return Macro.if_(Macro.makeBALLSPredicate(skill), Macro.skill(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "trySkillRepeat",
    value:
    /**
     * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
     *
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */
    function trySkillRepeat() {
      for (var _len5 = arguments.length, skills = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        skills[_key5] = arguments[_key5];
      }
      return this.step.apply(this, combat_toConsumableArray(skills.map(skillOrName => skillOrNameToSkill(skillOrName)).map(skill => {
        return Macro.if_(Macro.makeBALLSPredicate(skill), Macro.skill(skill).repeat(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "item",
    value:
    /**
     * Add one or more item steps to the macro.
     *
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
    function item() {
      for (var _len6 = arguments.length, items = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        items[_key6] = arguments[_key6];
      }
      return this.step.apply(this, combat_toConsumableArray(items.map(itemOrItems => {
        return "use ".concat(itemOrItemsBallsMacroName(itemOrItems));
      })));
    }
    /**
     * Create a new macro with one or more item steps.
     *
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "tryItem",
    value:
    /**
     * Add one or more item steps to the macro, where each step checks to see if you have the item first.
     *
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
    function tryItem() {
      for (var _len7 = arguments.length, items = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        items[_key7] = arguments[_key7];
      }
      return this.step.apply(this, combat_toConsumableArray(items.map(item => {
        return Macro.if_(itemOrItemsBallsMacroPredicate(item), Macro.item(item));
      })));
    }
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
     *
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "funkslingItem",
    value:
    /**
     * Add one or more item steps to the macro, and automatically attempting to funksling as many of the items as possible.
     * This function does not check if you can funksling or not.
     *
     * @param items Items to use.
     * @returns {Macro} This object itself.
     */
    function funkslingItem() {
      return this.item.apply(this, combat_toConsumableArray(funkslingReduce.apply(void 0, arguments)));
    }
    /**
     * Create a new macro with one or more item steps, and automatically attempting to funksling as many of the items as possible.
     * This function does not check if you can funksling or not.
     *
     * @param items Items to use.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "tryFunkslingItem",
    value:
    /**
     * Add one or more item steps to the macro, where each step checks to see if you have the item first,
     * and automatically attempting to funksling as many of the items as possible.
     * This function does not check if you can funksling or not.
     *
     * @param items Items to use.
     * @returns {Macro} This object itself.
     */
    function tryFunkslingItem() {
      return this.tryItem.apply(this, combat_toConsumableArray(funkslingReduce.apply(void 0, arguments)));
    }
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first,
     * and automatically attempting to funksling as many of the items as possible.
     * This function does not check if you can funksling or not.
     *
     * @param items Items to use.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "attack",
    value:
    /**
     * Add an attack step to the macro.
     *
     * @returns {Macro} This object itself.
     */
    function attack() {
      return this.step("attack");
    }
    /**
     * Create a new macro with an attack step.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "ifHolidayWanderer",
    value:
    /**
     * Create an if_ statement based on what holiday of loathing it currently is. On non-holidays, returns the original macro, unmutated.
     *
     * @param macro The macro to place in the if_ statement
     * @returns This macro with supplied macro wapped in if statement matching holiday wanderers
     */
    function ifHolidayWanderer(macro) {
      var todaysWanderers = getTodaysHolidayWanderers();
      if (todaysWanderers.length === 0) return this;
      return this.if_(todaysWanderers.map(monster => "monsterid ".concat(monster.id)).join(" || "), macro);
    }
    /**
     * Create a new macro starting with an ifHolidayWanderer step.
     *
     * @param macro The macro to place inside the if_ statement
     * @returns New macro with supplied macro wrapped in if statement matching holiday wanderers
     */
  }, {
    key: "ifNotHolidayWanderer",
    value:
    /**
     * Create an if_ statement based on what holiday of loathing it currently is. On non-holidays, returns the original macro, with the input macro appended.
     *
     * @param macro The macro to place in the if_ statement.
     * @returns This macro with supplied macro wrapped in if statement matching monsters that are not holiday wanderers
     */
    function ifNotHolidayWanderer(macro) {
      var todaysWanderers = getTodaysHolidayWanderers();
      if (todaysWanderers.length === 0) return this.step(macro);
      return this.if_(todaysWanderers.map(monster => "!monsterid ".concat(monster.id)).join(" && "), macro);
    }
    /**
     * Create a new macro starting with an ifNotHolidayWanderer step.
     *
     * @param macro The macro to place inside the if_ statement
     * @returns New macro with supplied macro wrapped in if statement matching monsters that are not holiday wanderers
     */
  }], [{
    key: "rename",
    value: function rename(name) {
      return new this().rename(name);
    }
  }, {
    key: "load",
    value: function load() {
      var _this;
      return (_this = new this()).step.apply(_this, combat_toConsumableArray(property_get(Macro.SAVED_MACRO_PROPERTY).split(";")));
    }
    /**
     * Clear the saved macro in the Mafia property.
     */
  }, {
    key: "clearSaved",
    value: function clearSaved() {
      (0,external_kolmafia_namespaceObject.removeProperty)(Macro.SAVED_MACRO_PROPERTY);
    }
  }, {
    key: "step",
    value: function step() {
      var _this2;
      return (_this2 = new this()).step.apply(_this2, arguments);
    }
  }, {
    key: "clearAutoAttackMacros",
    value: function clearAutoAttackMacros() {
      var _iterator = combat_createForOfIteratorHelper(Macro.cachedAutoAttacks.keys()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _Macro$cachedMacroIds;
          var name = _step.value;
          var id = (_Macro$cachedMacroIds = Macro.cachedMacroIds.get(name)) !== null && _Macro$cachedMacroIds !== void 0 ? _Macro$cachedMacroIds : getMacroId(name);
          (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&action=edit&what=Delete&confirm=1"));
          Macro.cachedAutoAttacks.delete(name);
          Macro.cachedMacroIds.delete(name);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "abort",
    value: function abort() {
      return new this().abort();
    }
  }, {
    key: "abortWithWarning",
    value: function abortWithWarning(warning) {
      return new this().abortWithWarning(warning);
    }
  }, {
    key: "runaway",
    value: function runaway() {
      return new this().runaway();
    }
    /**
     *
     * @param condition The BALLS condition or a type to make a condition for (Monster, Item, Skill, etc.)
     * @returns {string} The BALLS condition string
     */
  }, {
    key: "makeBALLSPredicate",
    value: function makeBALLSPredicate(condition) {
      if (condition instanceof external_kolmafia_namespaceObject.Monster) {
        return "monsterid ".concat(condition.id);
      } else if (condition instanceof Array) {
        if (condition[0] instanceof external_kolmafia_namespaceObject.Item) return itemOrItemsBallsMacroPredicate(condition);
        return "(".concat(condition.map(entry => Macro.makeBALLSPredicate(entry)).join(" || "), ")");
      } else if (condition instanceof external_kolmafia_namespaceObject.Effect) {
        return "haseffect ".concat(condition.id);
      } else if (condition instanceof external_kolmafia_namespaceObject.Skill) {
        return condition.combat ? "hasskill ".concat(skillBallsMacroName(condition)) : "knowsskill ".concat(condition.id);
      } else if (condition instanceof external_kolmafia_namespaceObject.Item) {
        if (!condition.combat) {
          throw new InvalidMacroError("Item ".concat(condition, " cannot be made a valid BALLS predicate (it is not combat-usable)"));
        }
        return "hascombatitem ".concat(itemOrItemsBallsMacroName(condition));
      } else if (condition instanceof external_kolmafia_namespaceObject.Location) {
        var snarfblat = condition.id;
        if (snarfblat < 1) {
          throw new InvalidMacroError("Location ".concat(condition, " cannot be made a valid BALLS predicate (it has no location id)"));
        }
        return "snarfblat ".concat(snarfblat);
      } else if (condition instanceof external_kolmafia_namespaceObject.Class) {
        if (condition.id > 6) {
          throw new InvalidMacroError("Class ".concat(condition, " cannot be made a valid BALLS predicate (it is not a standard class)"));
        }
        return condition.toString().replaceAll(" ", "").toLowerCase();
      } else if (condition instanceof external_kolmafia_namespaceObject.Stat) {
        return "".concat(condition.toString().toLowerCase(), "class");
      } else if (condition instanceof external_kolmafia_namespaceObject.Phylum) {
        return "monsterphylum ".concat(condition);
      } else if (condition instanceof external_kolmafia_namespaceObject.Element) {
        return "monsterelement ".concat(condition);
      }
      return condition;
    }
  }, {
    key: "if_",
    value: function if_(condition, ifTrue) {
      return new this().if_(condition, ifTrue);
    }
  }, {
    key: "ifNot",
    value: function ifNot(condition, ifTrue) {
      return new this().ifNot(condition, ifTrue);
    }
  }, {
    key: "while_",
    value: function while_(condition, contents) {
      return new this().while_(condition, contents);
    }
  }, {
    key: "externalIf",
    value: function externalIf(condition, ifTrue, ifFalse) {
      return new this().externalIf(condition, ifTrue, ifFalse);
    }
  }, {
    key: "skill",
    value: function skill() {
      var _this3;
      return (_this3 = new this()).skill.apply(_this3, arguments);
    }
  }, {
    key: "trySkill",
    value: function trySkill() {
      var _this4;
      return (_this4 = new this()).trySkill.apply(_this4, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function trySkillRepeat() {
      var _this5;
      return (_this5 = new this()).trySkillRepeat.apply(_this5, arguments);
    }
  }, {
    key: "item",
    value: function item() {
      var _this6;
      return (_this6 = new this()).item.apply(_this6, arguments);
    }
  }, {
    key: "tryItem",
    value: function tryItem() {
      var _this7;
      return (_this7 = new this()).tryItem.apply(_this7, arguments);
    }
  }, {
    key: "funkslingItem",
    value: function funkslingItem() {
      var _this8;
      return (_this8 = new this()).funkslingItem.apply(_this8, arguments);
    }
  }, {
    key: "tryFunkslingItem",
    value: function tryFunkslingItem() {
      var _this9;
      return (_this9 = new this()).tryFunkslingItem.apply(_this9, arguments);
    }
  }, {
    key: "attack",
    value: function attack() {
      return new this().attack();
    }
  }, {
    key: "ifHolidayWanderer",
    value: function ifHolidayWanderer(macro) {
      return new this().ifHolidayWanderer(macro);
    }
  }, {
    key: "ifNotHolidayWanderer",
    value: function ifNotHolidayWanderer(macro) {
      return new this().ifNotHolidayWanderer(macro);
    }
  }]);
  return Macro;
}();
/**
 * Adventure in a location and handle all combats with a given macro.
 * To use this function you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 *
 * @category Combat
 * @param loc Location to adventure in.
 * @param macro Macro to execute.
 */
combat_defineProperty(Macro, "SAVED_MACRO_PROPERTY", "libram_savedMacro");
combat_defineProperty(Macro, "cachedMacroIds", new Map());
combat_defineProperty(Macro, "cachedAutoAttacks", new Map());
function adventureMacro(loc, macro) {
  macro.save();
  setAutoAttack(0);
  try {
    adv1(loc, 0, "");
    while (inMultiFight()) runCombat();
    if (choiceFollowsFight()) visitUrl("choice.php");
  } finally {
    Macro.clearSaved();
  }
}
/**
 * Adventure in a location and handle all combats with a given autoattack and manual macro.
 * To use the nextMacro parameter you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 *
 * @category Combat
 * @param loc Location to adventure in.
 * @param autoMacro Macro to execute via KoL autoattack.
 * @param nextMacro Macro to execute manually after autoattack completes.
 */
function adventureMacroAuto(loc, autoMacro) {
  var _nextMacro;
  var nextMacro = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  nextMacro = (_nextMacro = nextMacro) !== null && _nextMacro !== void 0 ? _nextMacro : Macro.abort();
  autoMacro.setAutoAttack();
  nextMacro.save();
  try {
    adv1(loc, 0, "");
    while (inMultiFight()) runCombat();
    if (choiceFollowsFight()) visitUrl("choice.php");
  } finally {
    Macro.clearSaved();
  }
}
var StrictMacro = /*#__PURE__*/(/* unused pure expression or super */ null && (function (_Macro) {
  combat_inherits(StrictMacro, _Macro);
  var _super2 = combat_createSuper(StrictMacro);
  function StrictMacro() {
    combat_classCallCheck(this, StrictMacro);
    return _super2.apply(this, arguments);
  }
  combat_createClass(StrictMacro, [{
    key: "skill",
    value:
    /**
     * Add one or more skill cast steps to the macro.
     *
     * @param skills Skills to cast.
     * @returns {StrictMacro} This object itself.
     */
    function skill() {
      var _get2;
      for (var _len8 = arguments.length, skills = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        skills[_key8] = arguments[_key8];
      }
      return (_get2 = _get(combat_getPrototypeOf(StrictMacro.prototype), "skill", this)).call.apply(_get2, [this].concat(skills));
    }
    /**
     * Create a new macro with one or more skill cast steps.
     *
     * @param skills Skills to cast.
     * @returns {StrictMacro} This object itself.
     */
  }, {
    key: "item",
    value:
    /**
     * Add one or more item steps to the macro.
     *
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */
    function item() {
      var _get3;
      for (var _len9 = arguments.length, items = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        items[_key9] = arguments[_key9];
      }
      return (_get3 = _get(combat_getPrototypeOf(StrictMacro.prototype), "item", this)).call.apply(_get3, [this].concat(items));
    }
    /**
     * Create a new macro with one or more item steps.
     *
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */
  }, {
    key: "trySkill",
    value:
    /**
     * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
     *
     * @param skills Skills to try casting.
     * @returns {StrictMacro} This object itself.
     */
    function trySkill() {
      var _get4;
      for (var _len10 = arguments.length, skills = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        skills[_key10] = arguments[_key10];
      }
      return (_get4 = _get(combat_getPrototypeOf(StrictMacro.prototype), "trySkill", this)).call.apply(_get4, [this].concat(skills));
    }
    /**
     * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try casting.
     * @returns {StrictMacro} This object itself.
     */
  }, {
    key: "tryItem",
    value:
    /**
     * Add one or more item steps to the macro, where each step checks to see if you have the item first.
     *
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */
    function tryItem() {
      var _get5;
      for (var _len11 = arguments.length, items = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        items[_key11] = arguments[_key11];
      }
      return (_get5 = _get(combat_getPrototypeOf(StrictMacro.prototype), "tryItem", this)).call.apply(_get5, [this].concat(items));
    }
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
     *
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */
  }, {
    key: "funkslingItem",
    value:
    /**
     * Add one or more item steps to the macro, and automatically attempting to funksling as many of the items as possible.
     * This function does not check if you can funksling or not.
     *
     * @param items Items to use.
     * @returns {StrictMacro} This object itself.
     */
    function funkslingItem() {
      var _get6;
      for (var _len12 = arguments.length, items = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
        items[_key12] = arguments[_key12];
      }
      return (_get6 = _get(combat_getPrototypeOf(StrictMacro.prototype), "funkslingItem", this)).call.apply(_get6, [this].concat(items));
    }
    /**
     * Create a new macro with one or more item steps, and automatically attempting to funksling as many of the items as possible.
     * This function does not check if you can funksling or not.
     *
     * @param items Items to use.
     * @returns {StrictMacro} This object itself.
     */
  }, {
    key: "tryFunkslingItem",
    value:
    /**
     * Add one or more item steps to the macro, where each step checks to see if you have the item first,
     * and automatically attempting to funksling as many of the items as possible.
     * This function does not check if you can funksling or not.
     *
     * @param items Items to use.
     * @returns {StrictMacro} This object itself.
     */
    function tryFunkslingItem() {
      var _get7;
      for (var _len13 = arguments.length, items = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
        items[_key13] = arguments[_key13];
      }
      return (_get7 = _get(combat_getPrototypeOf(StrictMacro.prototype), "tryFunkslingItem", this)).call.apply(_get7, [this].concat(items));
    }
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first,
     * and automatically attempting to funksling as many of the items as possible.
     * This function does not check if you can funksling or not.
     *
     * @param items Items to use.
     * @returns {StrictMacro} This object itself.
     */
  }, {
    key: "trySkillRepeat",
    value:
    /**
     * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
     *
     * @param skills Skills to try repeatedly casting.
     * @returns {StrictMacro} This object itself.
     */
    function trySkillRepeat() {
      var _get8;
      for (var _len14 = arguments.length, skills = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
        skills[_key14] = arguments[_key14];
      }
      return (_get8 = _get(combat_getPrototypeOf(StrictMacro.prototype), "trySkillRepeat", this)).call.apply(_get8, [this].concat(skills));
    }
    /**
     * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try repeatedly casting.
     * @returns {StrictMacro} This object itself.
     */
  }], [{
    key: "skill",
    value: function skill() {
      var _this10;
      return (_this10 = new this()).skill.apply(_this10, arguments);
    }
  }, {
    key: "item",
    value: function item() {
      var _this11;
      return (_this11 = new this()).item.apply(_this11, arguments);
    }
  }, {
    key: "trySkill",
    value: function trySkill() {
      var _this12;
      return (_this12 = new this()).trySkill.apply(_this12, arguments);
    }
  }, {
    key: "tryItem",
    value: function tryItem() {
      var _this13;
      return (_this13 = new this()).tryItem.apply(_this13, arguments);
    }
  }, {
    key: "funkslingItem",
    value: function funkslingItem() {
      var _this14;
      return (_this14 = new this()).funkslingItem.apply(_this14, arguments);
    }
  }, {
    key: "tryFunkslingItem",
    value: function tryFunkslingItem() {
      var _this15;
      return (_this15 = new this()).tryFunkslingItem.apply(_this15, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function trySkillRepeat() {
      var _this16;
      return (_this16 = new this()).trySkillRepeat.apply(_this16, arguments);
    }
  }]);
  return StrictMacro;
}(Macro)));
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/combat.js
function dist_combat_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) dist_combat_setPrototypeOf(subClass, superClass); }
function dist_combat_setPrototypeOf(o, p) { dist_combat_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return dist_combat_setPrototypeOf(o, p); }
function dist_combat_createSuper(Derived) { var hasNativeReflectConstruct = dist_combat_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = dist_combat_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = dist_combat_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return dist_combat_possibleConstructorReturn(this, result); }; }
function dist_combat_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return dist_combat_assertThisInitialized(self); }
function dist_combat_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function dist_combat_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function dist_combat_getPrototypeOf(o) { dist_combat_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return dist_combat_getPrototypeOf(o); }
function dist_combat_toConsumableArray(arr) { return dist_combat_arrayWithoutHoles(arr) || dist_combat_iterableToArray(arr) || dist_combat_unsupportedIterableToArray(arr) || dist_combat_nonIterableSpread(); }
function dist_combat_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function dist_combat_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function dist_combat_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return dist_combat_arrayLikeToArray(arr); }
function dist_combat_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = dist_combat_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function dist_combat_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return dist_combat_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dist_combat_arrayLikeToArray(o, minLen); }
function dist_combat_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function dist_combat_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function dist_combat_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, dist_combat_toPropertyKey(descriptor.key), descriptor); } }
function dist_combat_createClass(Constructor, protoProps, staticProps) { if (protoProps) dist_combat_defineProperties(Constructor.prototype, protoProps); if (staticProps) dist_combat_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function dist_combat_toPropertyKey(arg) { var key = dist_combat_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function dist_combat_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/**
 * The strategy to use for combat for a task, which indicates what to do
 * for each monster.
 *
 * There are two ways to specify in a task what to do for a given monster:
 *   1. Provide a macro directly through .macro(macro, ...monsters)
 *   2. Provide an action through .action(action, ...monsters)
 *
 * An action is a strategy for dealing with a monster that is not fully
 * defined in the task. The possible actions are set with the type parameter A.
 * Actions should typically end the fight.
 *
 * For example, a task may want to banish a monster but not necessarily know or
 * care which banisher is used. Instead, it is best for the engine to determine
 * which banisher to use on the monster. To facilitate this, "banish" can be
 * defined as an action, e.g. with CombatStrategy<"banish">;
 *
 * Each action can be resolved by the engine by:
 *   1. Providing a default macro for the action through ActionDefaults<A>,
 *      which can be done through combat_defaults in Engine options, or
 *   2. Providing a CombatResource for the action through CombatResources<A>.
 *      This is typically done in Engine.customize() by checking if a given
 *      action is requested by the task with combat.can(.), and then providing
 *      an appropriate resource with resources.provide(.).
 *
 * A monster may have both a macro and an action defined, and a macro or action
 * can be specified to be done on all monsters. The order of combat is then:
 * 1. The macro(s) given in .startingMacro().
 * 2. The monster-specific macro(s) from .macro().
 * 3. The general macro(s) from .macro().
 * 4. The monster-specific action from .action().
 * 5. The general action from .action().
 *
 * If an autoattack is set with .autoattack(), the order of the autoattack is:
 * 1. The monster-specific macro(s) from .autoattack().
 * 2. The general macro(s) from .autoattack().
 */
var CombatStrategy = /*#__PURE__*/function () {
  function CombatStrategy() {
    dist_combat_classCallCheck(this, CombatStrategy);
    this.macros = new Map();
    this.autoattacks = new Map();
    this.actions = new Map();
    this.ccs_entries = new Map();
  }
  /**
   * Add a macro to perform for this monster. If multiple macros are given
   * for the same monster, they are concatinated.
   *
   * @param macro The macro to perform.
   * @param monsters Which monsters to use the macro on. If not given, add the
   *  macro as a general macro.
   * @param prepend If true, add the macro before all previous macros for
   *    the same monster. If false, add after all previous macros.
   * @returns this
   */
  dist_combat_createClass(CombatStrategy, [{
    key: "macro",
    value: function macro(_macro, monsters, prepend) {
      var _a, _b;
      if (monsters === undefined) {
        if (this.default_macro === undefined) this.default_macro = [];
        if (prepend) this.default_macro.unshift(_macro);else this.default_macro.push(_macro);
      } else {
        if (monsters instanceof external_kolmafia_namespaceObject.Monster) monsters = [monsters];
        var _iterator = dist_combat_createForOfIteratorHelper(monsters),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var monster = _step.value;
            if (!this.macros.has(monster)) this.macros.set(monster, []);
            if (prepend) (_a = this.macros.get(monster)) === null || _a === void 0 ? void 0 : _a.unshift(_macro);else (_b = this.macros.get(monster)) === null || _b === void 0 ? void 0 : _b.push(_macro);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return this;
    }
    /**
     * Add a macro to perform as an autoattack for this monster. If multiple
     * macros are given for the same monster, they are concatinated.
     *
     * @param macro The macro to perform as autoattack.
     * @param monsters Which monsters to use the macro on. If not given, add the
     *  macro as a general macro.
     * @param prepend If true, add the macro before all previous autoattack
     *    macros for the same monster. If false, add after all previous macros.
     * @returns this
     */
  }, {
    key: "autoattack",
    value: function autoattack(macro, monsters, prepend) {
      var _a, _b;
      if (monsters === undefined) {
        if (this.default_autoattack === undefined) this.default_autoattack = [];
        if (prepend) this.default_autoattack.unshift(macro);else this.default_autoattack.push(macro);
      } else {
        if (monsters instanceof external_kolmafia_namespaceObject.Monster) monsters = [monsters];
        var _iterator2 = dist_combat_createForOfIteratorHelper(monsters),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var monster = _step2.value;
            if (!this.autoattacks.has(monster)) this.autoattacks.set(monster, []);
            if (prepend) (_a = this.autoattacks.get(monster)) === null || _a === void 0 ? void 0 : _a.unshift(macro);else (_b = this.autoattacks.get(monster)) === null || _b === void 0 ? void 0 : _b.push(macro);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return this;
    }
    /**
     * Add a macro to perform at the start of combat.
     * @param macro The macro to perform.
     * @param prepend If true, add the macro before all previous starting
     *    macros. If false, add after all previous starting macros.
     * @returns this
     */
  }, {
    key: "startingMacro",
    value: function startingMacro(macro, prepend) {
      if (this.starting_macro === undefined) this.starting_macro = [];
      if (prepend) this.starting_macro.unshift(macro);else this.starting_macro.push(macro);
      return this;
    }
    /**
     * Add an action to perform for this monster. Only one action can be set for
     * each monster; any previous actions are overwritten.
     *
     * @param action The action to perform.
     * @param monsters Which monsters to use the action on. If not given, set the
     *  action as the general action for all monsters.
     * @returns this
     */
  }, {
    key: "action",
    value: function action(_action, monsters) {
      if (monsters === undefined) {
        this.default_action = _action;
      } else if (monsters instanceof external_kolmafia_namespaceObject.Monster) {
        this.actions.set(monsters, _action);
      } else {
        var _iterator3 = dist_combat_createForOfIteratorHelper(monsters),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var monster = _step3.value;
            this.actions.set(monster, _action);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      return this;
    }
    /**
     * Add a separate entry in the grimoire-generated CCS file for the specified
     * monster. If multiple entries are given for the same monster, they are
     * concatinated.
     *
     * This should typically be only used rarely, on monsters for which KoL does
     * not support macros in combat (e.g. rampaging adding machine).
     *
     * @param entry The entry to add for the given monster.
     * @param monsters Which monsters to add the entry to.
     * @param prepend If true, add the entry before all previous entries. If
     *   false, add after all previous entries.
     */
  }, {
    key: "ccs",
    value: function ccs(entry, monsters, prepend) {
      var _a, _b;
      if (monsters instanceof external_kolmafia_namespaceObject.Monster) monsters = [monsters];
      var _iterator4 = dist_combat_createForOfIteratorHelper(monsters),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var monster = _step4.value;
          if (!this.ccs_entries.has(monster)) this.ccs_entries.set(monster, []);
          if (prepend) (_a = this.ccs_entries.get(monster)) === null || _a === void 0 ? void 0 : _a.unshift(entry);else (_b = this.ccs_entries.get(monster)) === null || _b === void 0 ? void 0 : _b.push(entry);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return this;
    }
    /**
     * Check if the provided action was requested for any monsters, or for the
     * general action.
     */
  }, {
    key: "can",
    value: function can(action) {
      if (action === this.default_action) return true;
      return Array.from(this.actions.values()).includes(action);
    }
    /**
     * Return the general action (if it exists).
     */
  }, {
    key: "getDefaultAction",
    value: function getDefaultAction() {
      return this.default_action;
    }
    /**
     * Return all monsters where the provided action was requested.
     */
  }, {
    key: "where",
    value: function where(action) {
      return Array.from(this.actions.keys()).filter(key => this.actions.get(key) === action);
    }
    /**
     * Return the requested action (if it exists) for the provided monster.
     */
  }, {
    key: "currentStrategy",
    value: function currentStrategy(monster) {
      var _a;
      return (_a = this.actions.get(monster)) !== null && _a !== void 0 ? _a : this.default_action;
    }
    /**
     * Perform a deep copy of this combat strategy.
     */
  }, {
    key: "clone",
    value: function clone() {
      var result = new CombatStrategy();
      if (this.starting_macro) result.starting_macro = dist_combat_toConsumableArray(this.starting_macro);
      if (this.default_macro) result.default_macro = dist_combat_toConsumableArray(this.default_macro);
      var _iterator5 = dist_combat_createForOfIteratorHelper(this.macros),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var pair = _step5.value;
          result.macros.set(pair[0], dist_combat_toConsumableArray(pair[1]));
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      if (this.default_autoattack) result.default_autoattack = dist_combat_toConsumableArray(this.default_autoattack);
      var _iterator6 = dist_combat_createForOfIteratorHelper(this.autoattacks),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _pair = _step6.value;
          result.autoattacks.set(_pair[0], dist_combat_toConsumableArray(_pair[1]));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      result.default_action = this.default_action;
      var _iterator7 = dist_combat_createForOfIteratorHelper(this.actions),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _pair2 = _step7.value;
          result.actions.set(_pair2[0], _pair2[1]);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      var _iterator8 = dist_combat_createForOfIteratorHelper(this.ccs_entries),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _pair3 = _step8.value;
          result.ccs_entries.set(_pair3[0], dist_combat_toConsumableArray(_pair3[1]));
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      return result;
    }
    /**
     * Compile this combat strategy into a complete macro.
     *
     * @param resources The resources to use to fulfil actions.
     * @param defaults Macros to perform for each action without a resource.
     * @param location The adventuring location, if known.
     * @returns The compiled macro.
     */
  }, {
    key: "compile",
    value: function compile(resources, defaults, location) {
      var _a, _b;
      var result = new Macro();
      // If there is macro precursor, do it now
      if (this.starting_macro) {
        result.step.apply(result, dist_combat_toConsumableArray(this.starting_macro.map(macro => undelay(macro))));
      }
      // Perform any monster-specific macros (these may or may not end the fight)
      var monster_macros = new CompressedMacro();
      this.macros.forEach((value, key) => {
        var _Macro;
        monster_macros.add(key, (_Macro = new Macro()).step.apply(_Macro, dist_combat_toConsumableArray(value.map(macro => undelay(macro)))));
      });
      result.step(monster_macros.compile());
      // Perform the non-monster specific macro
      if (this.default_macro) result.step.apply(result, dist_combat_toConsumableArray(this.default_macro.map(macro => undelay(macro))));
      // Perform any monster-specific actions (these should end the fight)
      var monster_actions = new CompressedMacro();
      this.actions.forEach((action, key) => {
        var _a, _b;
        var macro = (_a = resources.getMacro(action)) !== null && _a !== void 0 ? _a : (_b = defaults === null || defaults === void 0 ? void 0 : defaults[action]) === null || _b === void 0 ? void 0 : _b.call(defaults, key);
        if (macro) monster_actions.add(key, new Macro().step(macro));
      });
      result.step(monster_actions.compile());
      // Perform the non-monster specific action (these should end the fight)
      if (this.default_action) {
        var macro = (_a = resources.getMacro(this.default_action)) !== null && _a !== void 0 ? _a : (_b = defaults === null || defaults === void 0 ? void 0 : defaults[this.default_action]) === null || _b === void 0 ? void 0 : _b.call(defaults, location);
        if (macro) result.step(macro);
      }
      return result;
    }
    /**
     * Compile the autoattack of this combat strategy into a complete macro.
     *
     * @returns The compiled autoattack macro.
     */
  }, {
    key: "compileAutoattack",
    value: function compileAutoattack() {
      var result = new Macro();
      // Perform any monster-specific autoattacks (these may or may not end the fight)
      var monster_macros = new CompressedMacro();
      this.autoattacks.forEach((value, key) => {
        var _Macro2;
        monster_macros.add(key, (_Macro2 = new Macro()).step.apply(_Macro2, dist_combat_toConsumableArray(value.map(macro => undelay(macro)))));
      });
      result.step(monster_macros.compile());
      // Perform the non-monster specific macro
      if (this.default_autoattack) result.step.apply(result, dist_combat_toConsumableArray(this.default_autoattack.map(macro => undelay(macro))));
      return result;
    }
    /**
     * Compile the CCS entries of this combat strategy into a single array.
     *
     * @returns The lines of a CCS file, not including the [default] macro.
     */
  }, {
    key: "compileCcs",
    value: function compileCcs() {
      var result = [];
      var _iterator9 = dist_combat_createForOfIteratorHelper(this.ccs_entries),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var ccs_entry = _step9.value;
          result.push.apply(result, ["[".concat(ccs_entry[0].name, "]")].concat(dist_combat_toConsumableArray(ccs_entry[1])));
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      return result;
    }
    /**
     * For advanced users, this method will generate a fluent API for requesting
     * actions. That is, it allows you to do
     *   combat.banish(monster1).kill(monster2)
     * instead of
     *   combat.action("banish", monster1).action("kill", monster2)
     *
     * Example usage:
     *   const myActions = ["kill", "banish"] as const;
     *   class MyCombatStrategy extends CombatStrategy.withActions(myActions) {}
     *
     *   const foo: MyCombatStrategy = new MyCombatStrategy();
     *   const bar: MyCombatStrategy = foo.banish($monster`crate`).kill($monster`tumbleweed`);
     */
  }], [{
    key: "withActions",
    value: function withActions(actions) {
      var CombatStrategyWithActions = /*#__PURE__*/function (_this) {
        dist_combat_inherits(CombatStrategyWithActions, _this);
        var _super = dist_combat_createSuper(CombatStrategyWithActions);
        function CombatStrategyWithActions() {
          dist_combat_classCallCheck(this, CombatStrategyWithActions);
          return _super.apply(this, arguments);
        }
        return dist_combat_createClass(CombatStrategyWithActions);
      }(this); // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var proto = CombatStrategyWithActions.prototype;
      var _iterator10 = dist_combat_createForOfIteratorHelper(actions),
        _step10;
      try {
        var _loop = function _loop() {
          var action = _step10.value;
          proto[action] = function (monsters) {
            return this.action(action, monsters);
          };
        };
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          _loop();
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      return CombatStrategyWithActions;
    }
  }]);
  return CombatStrategy;
}();
/**
 * A class to build a macro that combines if statements (keyed on monster) with
 * identical body into a single if statement, to avoid the 37-action limit.
 * Ex: [if x; A; if y; B; if z; A;] will turn into [if x || z; A; if y; B]
 */
var CompressedMacro = /*#__PURE__*/function () {
  function CompressedMacro() {
    dist_combat_classCallCheck(this, CompressedMacro);
    this.components = new Map();
  }
  /**
   * Set the macro for a given monster (replacing any previous macros).
   */
  dist_combat_createClass(CompressedMacro, [{
    key: "add",
    value: function add(monster, macro) {
      var _a;
      var macro_text = macro.toString();
      if (macro_text.length === 0) return;
      if (!this.components.has(macro_text)) this.components.set(macro_text, [monster]);else (_a = this.components.get(macro_text)) === null || _a === void 0 ? void 0 : _a.push(monster);
    }
    /**
     * Compile the compressed form of the macro.
     */
  }, {
    key: "compile",
    value: function compile() {
      var result = new Macro();
      this.components.forEach((monsters, macro) => {
        var condition = monsters.map(mon => "monsterid ".concat(mon.id)).join(" || ");
        result.if_(condition, macro);
      });
      return result;
    }
  }]);
  return CompressedMacro;
}();
/**
 * A class for providing resources to fulfil combat actions.
 */
var CombatResources = /*#__PURE__*/function () {
  function CombatResources() {
    dist_combat_classCallCheck(this, CombatResources);
    this.resources = new Map();
  }
  /**
   * Use the provided resource to fulfil the provided action.
   * (If the resource is undefined, this does nothing).
   */
  dist_combat_createClass(CombatResources, [{
    key: "provide",
    value: function provide(action, resource) {
      if (resource === undefined) return;
      this.resources.set(action, resource);
    }
    /**
     * Return true if the provided action has a resource provided.
     */
  }, {
    key: "has",
    value: function has(action) {
      return this.resources.has(action);
    }
    /**
     * Return all provided combat resources.
     */
  }, {
    key: "all",
    value: function all() {
      return Array.from(this.resources.values());
    }
    /**
     * Get the macro provided by the resource for this action, or undefined if
     * no resource was provided.
     */
  }, {
    key: "getMacro",
    value: function getMacro(action) {
      var resource = this.resources.get(action);
      if (resource === undefined) return undefined;
      if (resource.do instanceof external_kolmafia_namespaceObject.Item) return new Macro().item(resource.do);
      if (resource.do instanceof external_kolmafia_namespaceObject.Skill) return new Macro().skill(resource.do);
      return undelay(resource.do);
    }
  }]);
  return CombatResources;
}();
;// CONCATENATED MODULE: ./node_modules/libram/dist/maximize.js
var maximize_templateObject, maximize_templateObject2, maximize_templateObject3, maximize_templateObject4, maximize_templateObject5, maximize_templateObject6, maximize_templateObject7, maximize_templateObject8, maximize_templateObject9, maximize_templateObject10, maximize_templateObject11, maximize_templateObject12, maximize_templateObject13, maximize_templateObject14, maximize_templateObject15, maximize_templateObject16, maximize_templateObject17, maximize_templateObject18, maximize_templateObject19, maximize_templateObject20, maximize_templateObject21, maximize_templateObject22, maximize_templateObject23, maximize_templateObject24, maximize_templateObject25, maximize_templateObject26, maximize_templateObject27, maximize_templateObject28, maximize_templateObject29, maximize_templateObject30, maximize_templateObject31, maximize_templateObject32, maximize_templateObject33, maximize_templateObject34, maximize_templateObject35, maximize_templateObject36, maximize_templateObject37, maximize_templateObject38, maximize_templateObject39, maximize_templateObject40, maximize_templateObject41, maximize_templateObject42, maximize_templateObject43, maximize_templateObject44, maximize_templateObject45, maximize_templateObject46, maximize_templateObject47, maximize_templateObject48, maximize_templateObject49, maximize_templateObject50;
function maximize_slicedToArray(arr, i) { return maximize_arrayWithHoles(arr) || maximize_iterableToArrayLimit(arr, i) || maximize_unsupportedIterableToArray(arr, i) || maximize_nonIterableRest(); }
function maximize_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function maximize_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function maximize_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function maximize_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, maximize_toPropertyKey(descriptor.key), descriptor); } }
function maximize_createClass(Constructor, protoProps, staticProps) { if (protoProps) maximize_defineProperties(Constructor.prototype, protoProps); if (staticProps) maximize_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function maximize_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function maximize_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = maximize_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function maximize_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function maximize_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function maximize_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? maximize_ownKeys(Object(source), !0).forEach(function (key) { maximize_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : maximize_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function maximize_defineProperty(obj, key, value) { key = maximize_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function maximize_toPropertyKey(arg) { var key = maximize_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function maximize_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function maximize_toConsumableArray(arr) { return maximize_arrayWithoutHoles(arr) || maximize_iterableToArray(arr) || maximize_unsupportedIterableToArray(arr) || maximize_nonIterableSpread(); }
function maximize_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function maximize_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return maximize_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return maximize_arrayLikeToArray(o, minLen); }
function maximize_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function maximize_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return maximize_arrayLikeToArray(arr); }
function maximize_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }





function toMaximizerName(_ref) {
  var name = _ref.name,
    id = _ref.id;
  return name.includes(";") ? "\xB6".concat(id) : name;
}
/**
 * Merges a partial set of maximizer options onto a full set maximizer options. We merge via overriding for all boolean properties and for onlySlot, and concat all other array properties.
 *
 * @param defaultOptions MaximizeOptions to use as a "base."
 * @param addendums Options to attempt to merge onto defaultOptions.
 * @returns Merged maximizer options
 */
function mergeMaximizeOptions(defaultOptions, addendums) {
  var _addendums$updateOnFa, _addendums$updateOnCa, _addendums$updateOnLo, _addendums$useOutfitC, _addendums$forceEquip, _addendums$preventEqu, _addendums$bonusEquip, _addendums$onlySlot, _addendums$preventSlo, _addendums$forceUpdat, _addendums$modes;
  return {
    updateOnFamiliarChange: (_addendums$updateOnFa = addendums.updateOnFamiliarChange) !== null && _addendums$updateOnFa !== void 0 ? _addendums$updateOnFa : defaultOptions.updateOnFamiliarChange,
    updateOnCanEquipChanged: (_addendums$updateOnCa = addendums.updateOnCanEquipChanged) !== null && _addendums$updateOnCa !== void 0 ? _addendums$updateOnCa : defaultOptions.updateOnCanEquipChanged,
    updateOnLocationChange: (_addendums$updateOnLo = addendums.updateOnLocationChange) !== null && _addendums$updateOnLo !== void 0 ? _addendums$updateOnLo : defaultOptions.updateOnLocationChange,
    useOutfitCaching: (_addendums$useOutfitC = addendums.useOutfitCaching) !== null && _addendums$useOutfitC !== void 0 ? _addendums$useOutfitC : defaultOptions.useOutfitCaching,
    forceEquip: [].concat(maximize_toConsumableArray(defaultOptions.forceEquip), maximize_toConsumableArray((_addendums$forceEquip = addendums.forceEquip) !== null && _addendums$forceEquip !== void 0 ? _addendums$forceEquip : [])),
    preventEquip: [].concat(maximize_toConsumableArray(defaultOptions.preventEquip), maximize_toConsumableArray((_addendums$preventEqu = addendums.preventEquip) !== null && _addendums$preventEqu !== void 0 ? _addendums$preventEqu : [])).filter(item => {
      var _addendums$forceEquip2;
      return !defaultOptions.forceEquip.includes(item) && !((_addendums$forceEquip2 = addendums.forceEquip) !== null && _addendums$forceEquip2 !== void 0 && _addendums$forceEquip2.includes(item));
    }),
    bonusEquip: new Map([].concat(maximize_toConsumableArray(defaultOptions.bonusEquip), maximize_toConsumableArray((_addendums$bonusEquip = addendums.bonusEquip) !== null && _addendums$bonusEquip !== void 0 ? _addendums$bonusEquip : []))),
    onlySlot: (_addendums$onlySlot = addendums.onlySlot) !== null && _addendums$onlySlot !== void 0 ? _addendums$onlySlot : defaultOptions.onlySlot,
    preventSlot: [].concat(maximize_toConsumableArray(defaultOptions.preventSlot), maximize_toConsumableArray((_addendums$preventSlo = addendums.preventSlot) !== null && _addendums$preventSlo !== void 0 ? _addendums$preventSlo : [])),
    forceUpdate: (_addendums$forceUpdat = addendums.forceUpdate) !== null && _addendums$forceUpdat !== void 0 ? _addendums$forceUpdat : defaultOptions.forceUpdate,
    modes: maximize_objectSpread(maximize_objectSpread({}, defaultOptions.modes), (_addendums$modes = addendums.modes) !== null && _addendums$modes !== void 0 ? _addendums$modes : {})
  };
}
var defaultMaximizeOptions = {
  updateOnFamiliarChange: true,
  updateOnCanEquipChanged: true,
  updateOnLocationChange: false,
  useOutfitCaching: true,
  forceEquip: [],
  preventEquip: [],
  bonusEquip: new Map(),
  onlySlot: [],
  preventSlot: [],
  forceUpdate: false,
  modes: {}
};
/**
 *
 * @param options Default options for each maximizer run.
 * @param options.updateOnFamiliarChange Re-run the maximizer if familiar has changed. Default true.
 * @param options.updateOnCanEquipChanged Re-run the maximizer if stats have changed what can be equipped. Default true.
 * @param options.forceEquip Equipment to force-equip ("equip X").
 * @param options.preventEquip Equipment to prevent equipping ("-equip X").
 * @param options.bonusEquip Equipment to apply a bonus to ("200 bonus X").
 */
function setDefaultMaximizeOptions(options) {
  Object.assign(defaultMaximizeOptions, options);
}
var modeableCommands = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka", "jillcandle"];
var modeableItems = {
  backupcamera: template_string_$item(maximize_templateObject || (maximize_templateObject = maximize_taggedTemplateLiteral(["backup camera"]))),
  umbrella: template_string_$item(maximize_templateObject2 || (maximize_templateObject2 = maximize_taggedTemplateLiteral(["unbreakable umbrella"]))),
  snowsuit: template_string_$item(maximize_templateObject3 || (maximize_templateObject3 = maximize_taggedTemplateLiteral(["Snow Suit"]))),
  edpiece: template_string_$item(maximize_templateObject4 || (maximize_templateObject4 = maximize_taggedTemplateLiteral(["The Crown of Ed the Undying"]))),
  retrocape: template_string_$item(maximize_templateObject5 || (maximize_templateObject5 = maximize_taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"]))),
  parka: template_string_$item(maximize_templateObject6 || (maximize_templateObject6 = maximize_taggedTemplateLiteral(["Jurassic Parka"]))),
  jillcandle: template_string_$item(maximize_templateObject7 || (maximize_templateObject7 = maximize_taggedTemplateLiteral(["LED candle"])))
};
var modeableState = {
  backupcamera: () => (0,external_kolmafia_namespaceObject.getProperty)("backupCameraMode"),
  umbrella: () => (0,external_kolmafia_namespaceObject.getProperty)("umbrellaState"),
  snowsuit: () => (0,external_kolmafia_namespaceObject.getProperty)("snowsuit"),
  edpiece: () => (0,external_kolmafia_namespaceObject.getProperty)("edPiece"),
  retrocape: () => (0,external_kolmafia_namespaceObject.getProperty)("retroCapeSuperhero") + " " + (0,external_kolmafia_namespaceObject.getProperty)("retroCapeWashingInstructions"),
  parka: () => (0,external_kolmafia_namespaceObject.getProperty)("parkaMode"),
  jillcandle: () => (0,external_kolmafia_namespaceObject.getProperty)("ledCandleMode")
};
/**
 * Get set of current modes for modeables
 *
 * @returns Set of modes
 */
function getCurrentModes() {
  var modes = {};
  var _iterator = maximize_createForOfIteratorHelper(modeableCommands),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      if ((0,external_kolmafia_namespaceObject.haveEquipped)(modeableItems[key])) {
        modes[key] = modeableState[key]();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return modes;
}
/**
 * Apply set of modes
 *
 * @param modes Modes to apply
 */
function applyModes(modes) {
  var _iterator2 = maximize_createForOfIteratorHelper(modeableCommands),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var command = _step2.value;
      if ((0,external_kolmafia_namespaceObject.haveEquipped)(modeableItems[command]) && modes[command] !== undefined) {
        if (modeableState[command]() !== modes[command]) {
          (0,external_kolmafia_namespaceObject.cliExecute)(command + " " + modes[command]);
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
// Subset of slots that are valid for caching.
var cachedSlots = $slots(maximize_templateObject8 || (maximize_templateObject8 = maximize_taggedTemplateLiteral(["hat, weapon, off-hand, back, shirt, pants, acc1, acc2, acc3, familiar"])));
var CacheEntry = /*#__PURE__*/maximize_createClass(function CacheEntry(equipment, rider, familiar, canEquipItemCount, modes) {
  maximize_classCallCheck(this, CacheEntry);
  maximize_defineProperty(this, "equipment", void 0);
  maximize_defineProperty(this, "rider", void 0);
  maximize_defineProperty(this, "familiar", void 0);
  maximize_defineProperty(this, "canEquipItemCount", void 0);
  maximize_defineProperty(this, "modes", void 0);
  this.equipment = equipment;
  this.rider = rider;
  this.familiar = familiar;
  this.canEquipItemCount = canEquipItemCount;
  this.modes = modes;
});
var _outfitSlots = /*#__PURE__*/new WeakMap();
var _useHistory = /*#__PURE__*/new WeakMap();
var _maxSize = /*#__PURE__*/new WeakMap();
var OutfitLRUCache = /*#__PURE__*/function () {
  function OutfitLRUCache(maxSize) {
    maximize_classCallCheck(this, OutfitLRUCache);
    // Current outfits allocated
    _classPrivateFieldInitSpec(this, _outfitSlots, {
      writable: true,
      value: []
    });
    // Array of indices into #outfitSlots in order of use. Most recent at the front.
    _classPrivateFieldInitSpec(this, _useHistory, {
      writable: true,
      value: []
    });
    _classPrivateFieldInitSpec(this, _maxSize, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _maxSize, maxSize);
  }
  maximize_createClass(OutfitLRUCache, [{
    key: "checkConsistent",
    value: function checkConsistent() {
      if (_classPrivateFieldGet(this, _useHistory).length !== _classPrivateFieldGet(this, _outfitSlots).length || !maximize_toConsumableArray(_classPrivateFieldGet(this, _useHistory)).sort().every((value, index) => value === index)) {
        throw new Error("Outfit cache consistency failed.");
      }
    }
  }, {
    key: "promote",
    value: function promote(index) {
      _classPrivateFieldSet(this, _useHistory, [index].concat(maximize_toConsumableArray(_classPrivateFieldGet(this, _useHistory).filter(i => i !== index))));
      this.checkConsistent();
    }
  }, {
    key: "get",
    value: function get(key) {
      var index = _classPrivateFieldGet(this, _outfitSlots).indexOf(key);
      if (index < 0) return undefined;
      this.promote(index);
      return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(index);
    }
  }, {
    key: "insert",
    value: function insert(key) {
      var lastUseIndex = undefined;
      if (_classPrivateFieldGet(this, _outfitSlots).length >= _classPrivateFieldGet(this, _maxSize)) {
        lastUseIndex = _classPrivateFieldGet(this, _useHistory).pop();
        if (lastUseIndex === undefined) {
          throw new Error("Outfit cache consistency failed.");
        }
        _classPrivateFieldGet(this, _useHistory).splice(0, 0, lastUseIndex);
        _classPrivateFieldGet(this, _outfitSlots)[lastUseIndex] = key;
        this.checkConsistent();
        return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(lastUseIndex);
      } else {
        var index = _classPrivateFieldGet(this, _outfitSlots).push(key) - 1;
        _classPrivateFieldGet(this, _useHistory).splice(0, 0, index);
        this.checkConsistent();
        return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(index);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      _classPrivateFieldSet(this, _outfitSlots, []);
      _classPrivateFieldSet(this, _useHistory, []);
    }
  }]);
  return OutfitLRUCache;
}();
/**
 * Save current equipment as KoL-native outfit.
 *
 * @param name Name of new outfit.
 */
maximize_defineProperty(OutfitLRUCache, "OUTFIT_PREFIX", "Script Outfit");
function saveOutfit(name) {
  (0,external_kolmafia_namespaceObject.cliExecute)("outfit save ".concat(name));
}
// Objective cache entries.
var cachedObjectives = {};
// Outfit cache entries. Keep 6 by default to avoid cluttering list.
var outfitCache = new OutfitLRUCache(6);
// Cache to prevent rescanning all items unnecessarily
var cachedStats = [0, 0, 0];
var cachedCanEquipItemCount = 0;
/**
 * Count the number of unique items that can be equipped.
 *
 * @returns The count of unique items.
 */
function canEquipItemCount() {
  var stats = $stats(maximize_templateObject9 || (maximize_templateObject9 = maximize_taggedTemplateLiteral(["Muscle, Mysticality, Moxie"]))).map(stat => Math.min((0,external_kolmafia_namespaceObject.myBasestat)(stat), 300));
  if (stats.every((value, index) => value === cachedStats[index])) {
    return cachedCanEquipItemCount;
  }
  cachedStats = stats;
  cachedCanEquipItemCount = external_kolmafia_namespaceObject.Item.all().filter(item => (0,external_kolmafia_namespaceObject.canEquip)(item)).length;
  return cachedCanEquipItemCount;
}
/**
 * Checks the objective cache for a valid entry.
 *
 * @param cacheKey The cache key to check.
 * @param options Set of maximizer options
 * @returns A valid CacheEntry or null.
 */
function checkCache(cacheKey, options) {
  var entry = cachedObjectives[cacheKey];
  if (!entry) {
    return null;
  }
  if (options.updateOnFamiliarChange && (0,external_kolmafia_namespaceObject.myFamiliar)() !== entry.familiar) {
    dist_logger.warning("Equipment found in maximize cache but familiar is different.");
    return null;
  }
  if (options.updateOnCanEquipChanged && entry.canEquipItemCount !== canEquipItemCount()) {
    dist_logger.warning("Equipment found in maximize cache but equippable item list is out of date.");
    return null;
  }
  return entry;
}
/**
 * Applies equipment that was found in the cache.
 *
 * @param entry The CacheEntry to apply
 * @param options Set of maximizer options
 */
function applyCached(entry, options) {
  var outfitName = options.useOutfitCaching ? outfitCache.get(entry) : undefined;
  if (outfitName) {
    if (!(0,external_kolmafia_namespaceObject.isWearingOutfit)(outfitName)) {
      (0,external_kolmafia_namespaceObject.outfit)(outfitName);
    }
    var familiarEquip = entry.equipment.get($slot(maximize_templateObject10 || (maximize_templateObject10 = maximize_taggedTemplateLiteral(["familiar"]))));
    if (familiarEquip) (0,external_kolmafia_namespaceObject.equip)($slot(maximize_templateObject11 || (maximize_templateObject11 = maximize_taggedTemplateLiteral(["familiar"]))), familiarEquip);
  } else {
    var _iterator3 = maximize_createForOfIteratorHelper(entry.equipment),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _step3$value = maximize_slicedToArray(_step3.value, 2),
          slot = _step3$value[0],
          item = _step3$value[1];
        if ((0,external_kolmafia_namespaceObject.equippedItem)(slot) !== item && (0,external_kolmafia_namespaceObject.availableAmount)(item) > 0) {
          (0,external_kolmafia_namespaceObject.equip)(slot, item);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (verifyCached(entry) && options.useOutfitCaching) {
      var _outfitName = outfitCache.insert(entry);
      dist_logger.info("Saving equipment to outfit ".concat(_outfitName, "."));
      saveOutfit(_outfitName);
    }
  }
  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject12 || (maximize_templateObject12 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) > 0 && entry.rider.get(template_string_$item(maximize_templateObject13 || (maximize_templateObject13 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))))) {
    (0,external_kolmafia_namespaceObject.enthroneFamiliar)(entry.rider.get(template_string_$item(maximize_templateObject14 || (maximize_templateObject14 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) || template_string_$familiar.none);
  }
  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject15 || (maximize_templateObject15 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) > 0 && entry.rider.get(template_string_$item(maximize_templateObject16 || (maximize_templateObject16 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))))) {
    (0,external_kolmafia_namespaceObject.bjornifyFamiliar)(entry.rider.get(template_string_$item(maximize_templateObject17 || (maximize_templateObject17 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) || template_string_$familiar.none);
  }
  applyModes(maximize_objectSpread(maximize_objectSpread({}, entry.modes), options.modes));
}
var slotStructure = [$slots(maximize_templateObject18 || (maximize_templateObject18 = maximize_taggedTemplateLiteral(["hat"]))), $slots(maximize_templateObject19 || (maximize_templateObject19 = maximize_taggedTemplateLiteral(["back"]))), $slots(maximize_templateObject20 || (maximize_templateObject20 = maximize_taggedTemplateLiteral(["shirt"]))), $slots(maximize_templateObject21 || (maximize_templateObject21 = maximize_taggedTemplateLiteral(["weapon, off-hand"]))), $slots(maximize_templateObject22 || (maximize_templateObject22 = maximize_taggedTemplateLiteral(["pants"]))), $slots(maximize_templateObject23 || (maximize_templateObject23 = maximize_taggedTemplateLiteral(["acc1, acc2, acc3"]))), $slots(maximize_templateObject24 || (maximize_templateObject24 = maximize_taggedTemplateLiteral(["familiar"])))];
/**
 * Verifies that a CacheEntry was applied successfully.
 *
 * @param entry The CacheEntry to verify
 * @param warn Whether to warn if the cache could not be applied
 * @returns If all desired equipment was appliedn in the correct slots.
 */
function verifyCached(entry) {
  var warn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var success = true;
  var _iterator4 = maximize_createForOfIteratorHelper(slotStructure),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var slotGroup = _step4.value;
      var desiredSlots = slotGroup.map(slot => {
        var _entry$equipment$get;
        return [slot, (_entry$equipment$get = entry.equipment.get(slot)) !== null && _entry$equipment$get !== void 0 ? _entry$equipment$get : null];
      }).filter(_ref2 => {
        var _ref3 = maximize_slicedToArray(_ref2, 2),
          item = _ref3[1];
        return item !== null;
      });
      var desiredSet = desiredSlots.map(_ref4 => {
        var _ref5 = maximize_slicedToArray(_ref4, 2),
          item = _ref5[1];
        return item;
      });
      var equippedSet = desiredSlots.map(_ref6 => {
        var _ref7 = maximize_slicedToArray(_ref6, 1),
          slot = _ref7[0];
        return (0,external_kolmafia_namespaceObject.equippedItem)(slot);
      });
      if (!setEqual(desiredSet, equippedSet)) {
        if (warn) {
          dist_logger.warning("Failed to apply cached ".concat(desiredSet.join(", "), " in ").concat(slotGroup.join(", "), "."));
        }
        success = false;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject25 || (maximize_templateObject25 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) > 0 && entry.rider.get(template_string_$item(maximize_templateObject26 || (maximize_templateObject26 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))))) {
    if (entry.rider.get(template_string_$item(maximize_templateObject27 || (maximize_templateObject27 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) !== (0,external_kolmafia_namespaceObject.myEnthronedFamiliar)()) {
      if (warn) {
        dist_logger.warning("Failed to apply ".concat(entry.rider.get(template_string_$item(maximize_templateObject28 || (maximize_templateObject28 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))), " in ").concat(template_string_$item(maximize_templateObject29 || (maximize_templateObject29 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))), "."));
      }
      success = false;
    }
  }
  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject30 || (maximize_templateObject30 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) > 0 && entry.rider.get(template_string_$item(maximize_templateObject31 || (maximize_templateObject31 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))))) {
    if (entry.rider.get(template_string_$item(maximize_templateObject32 || (maximize_templateObject32 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) !== (0,external_kolmafia_namespaceObject.myBjornedFamiliar)()) {
      if (warn) {
        dist_logger.warning("Failed to apply".concat(entry.rider.get(template_string_$item(maximize_templateObject33 || (maximize_templateObject33 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))), " in ").concat(template_string_$item(maximize_templateObject34 || (maximize_templateObject34 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))), "."));
      }
      success = false;
    }
  }
  return success;
}
/**
 * Save current equipment to the objective cache.
 *
 * @param cacheKey The cache key to save.
 * @param options Set of maximizer options
 */
function saveCached(cacheKey, options) {
  var equipment = new Map();
  var rider = new Map();
  var _iterator5 = maximize_createForOfIteratorHelper(cachedSlots),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var _slot2 = _step5.value;
      equipment.set(_slot2, (0,external_kolmafia_namespaceObject.equippedItem)(_slot2));
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject35 || (maximize_templateObject35 = maximize_taggedTemplateLiteral(["card sleeve"])))) > 0) {
    equipment.set($slot(maximize_templateObject36 || (maximize_templateObject36 = maximize_taggedTemplateLiteral(["card-sleeve"]))), (0,external_kolmafia_namespaceObject.equippedItem)($slot(maximize_templateObject37 || (maximize_templateObject37 = maximize_taggedTemplateLiteral(["card-sleeve"])))));
  }
  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject38 || (maximize_templateObject38 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) > 0) {
    rider.set(template_string_$item(maximize_templateObject39 || (maximize_templateObject39 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))), (0,external_kolmafia_namespaceObject.myEnthronedFamiliar)());
  }
  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject40 || (maximize_templateObject40 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) > 0) {
    rider.set(template_string_$item(maximize_templateObject41 || (maximize_templateObject41 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))), (0,external_kolmafia_namespaceObject.myBjornedFamiliar)());
  }
  if (options.preventSlot && options.preventSlot.length > 0) {
    var _iterator6 = maximize_createForOfIteratorHelper(options.preventSlot),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var slot = _step6.value;
        equipment.delete(slot);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    if (options.preventSlot.includes($slot(maximize_templateObject42 || (maximize_templateObject42 = maximize_taggedTemplateLiteral(["buddy-bjorn"]))))) {
      rider.delete(template_string_$item(maximize_templateObject43 || (maximize_templateObject43 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))));
    }
    if (options.preventSlot.includes($slot(maximize_templateObject44 || (maximize_templateObject44 = maximize_taggedTemplateLiteral(["crown-of-thrones"]))))) {
      rider.delete(template_string_$item(maximize_templateObject45 || (maximize_templateObject45 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))));
    }
  }
  if (options.onlySlot && options.onlySlot.length > 0) {
    var _iterator7 = maximize_createForOfIteratorHelper(external_kolmafia_namespaceObject.Slot.all()),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var _slot = _step7.value;
        if (!options.onlySlot.includes(_slot)) {
          equipment.delete(_slot);
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    if (!options.onlySlot.includes($slot(maximize_templateObject46 || (maximize_templateObject46 = maximize_taggedTemplateLiteral(["buddy-bjorn"]))))) {
      rider.delete(template_string_$item(maximize_templateObject47 || (maximize_templateObject47 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))));
    }
    if (!options.onlySlot.includes($slot(maximize_templateObject48 || (maximize_templateObject48 = maximize_taggedTemplateLiteral(["crown-of-thrones"]))))) {
      rider.delete(template_string_$item(maximize_templateObject49 || (maximize_templateObject49 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))));
    }
  }
  var entry = new CacheEntry(equipment, rider, (0,external_kolmafia_namespaceObject.myFamiliar)(), canEquipItemCount(), maximize_objectSpread(maximize_objectSpread({}, getCurrentModes()), options.modes));
  cachedObjectives[cacheKey] = entry;
  if (options.useOutfitCaching) {
    var outfitName = outfitCache.insert(entry);
    dist_logger.info("Saving equipment to outfit ".concat(outfitName, "."));
    saveOutfit(outfitName);
  }
}
/**
 * Run the maximizer, but only if the objective and certain pieces of game state haven't changed since it was last run.
 *
 * @param objectives Objectives to maximize for.
 * @param options Options for this run of the maximizer.
 * @param options.updateOnFamiliarChange Re-run the maximizer if familiar has changed. Default true.
 * @param options.updateOnCanEquipChanged Re-run the maximizer if stats have changed what can be equipped. Default true.
 * @param options.forceEquip Equipment to force-equip ("equip X").
 * @param options.preventEquip Equipment to prevent equipping ("-equip X").
 * @param options.bonusEquip Equipment to apply a bonus to ("200 bonus X").
 * @returns Whether the maximize call succeeded.
 */
function maximizeCached(objectives) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fullOptions = mergeMaximizeOptions(defaultMaximizeOptions, options);
  var forceEquip = fullOptions.forceEquip,
    preventEquip = fullOptions.preventEquip,
    bonusEquip = fullOptions.bonusEquip,
    onlySlot = fullOptions.onlySlot,
    preventSlot = fullOptions.preventSlot,
    forceUpdate = fullOptions.forceUpdate;
  // Sort each group in objective to ensure consistent ordering in string
  var objective = maximize_toConsumableArray(new Set([].concat(maximize_toConsumableArray(objectives.sort()), maximize_toConsumableArray(forceEquip.map(item => "\"equip ".concat(toMaximizerName(item), "\"")).sort()), maximize_toConsumableArray(preventEquip.map(item => "-\"equip ".concat(toMaximizerName(item), "\"")).sort()), maximize_toConsumableArray(onlySlot.map(slot => "".concat(slot)).sort()), maximize_toConsumableArray(preventSlot.map(slot => "-".concat(slot)).sort()), maximize_toConsumableArray(Array.from(bonusEquip.entries()).filter(_ref8 => {
    var _ref9 = maximize_slicedToArray(_ref8, 2),
      bonus = _ref9[1];
    return bonus !== 0;
  }).map(_ref10 => {
    var _ref11 = maximize_slicedToArray(_ref10, 2),
      item = _ref11[0],
      bonus = _ref11[1];
    return "".concat(Math.round(bonus * 100) / 100, " \"bonus ").concat(toMaximizerName(item), "\"");
  }).sort())))).join(", ");
  // Items equipped in slots not touched by the maximizer must be in the cache key
  var untouchedSlots = cachedSlots.filter(slot => preventSlot.includes(slot) || onlySlot.length > 0 && !onlySlot.includes(slot));
  var cacheKey = [objective].concat(maximize_toConsumableArray(untouchedSlots.map(slot => "".concat(slot, ":").concat((0,external_kolmafia_namespaceObject.equippedItem)(slot))).sort()), [lib_have(template_string_$effect(maximize_templateObject50 || (maximize_templateObject50 = maximize_taggedTemplateLiteral(["Offhand Remarkable"])))), options.updateOnLocationChange && (0,external_kolmafia_namespaceObject.myLocation)()]).join("; ");
  var cacheEntry = checkCache(cacheKey, fullOptions);
  if (cacheEntry && !forceUpdate) {
    if (verifyCached(cacheEntry, false)) return true;
    dist_logger.info("Equipment found in maximize cache, equipping...");
    applyCached(cacheEntry, fullOptions);
    if (verifyCached(cacheEntry)) {
      dist_logger.info("Equipped cached ".concat(cacheKey));
      return true;
    }
    dist_logger.warning("Maximize cache application failed, maximizing...");
  }
  var result = (0,external_kolmafia_namespaceObject.maximize)(objective, false);
  saveCached(cacheKey, fullOptions);
  return result;
}
function mergeOptionalOptions(optionsA, optionsB) {
  for (var _len = arguments.length, keys = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    keys[_key - 2] = arguments[_key];
  }
  return keys.reduce((current, key) => maximize_objectSpread(maximize_objectSpread({}, current), (optionsA[key] || optionsB[key]) === undefined ? {} : maximize_defineProperty({}, key, optionsA[key] || optionsB[key])), {});
}
var _maximizeParameters = /*#__PURE__*/new WeakMap();
var _maximizeOptions = /*#__PURE__*/new WeakMap();
var Requirement = /*#__PURE__*/function () {
  /**
   * A convenient way of combining maximization parameters and options
   *
   * @param maximizeParameters Parameters you're attempting to maximize
   * @param maximizeOptions Object potentially containing forceEquips, bonusEquips, preventEquips, and preventSlots
   */
  function Requirement(maximizeParameters, maximizeOptions) {
    maximize_classCallCheck(this, Requirement);
    _classPrivateFieldInitSpec(this, _maximizeParameters, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _maximizeOptions, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _maximizeParameters, maximizeParameters);
    _classPrivateFieldSet(this, _maximizeOptions, maximizeOptions);
  }
  maximize_createClass(Requirement, [{
    key: "maximizeParameters",
    get: function get() {
      return _classPrivateFieldGet(this, _maximizeParameters);
    }
  }, {
    key: "maximizeOptions",
    get: function get() {
      return _classPrivateFieldGet(this, _maximizeOptions);
    }
    /**
     * Merges two requirements, concanating relevant arrays. Typically used in static form.
     *
     * @param other Requirement to merge with.
     * @returns A new merged Requirement
     */
  }, {
    key: "merge",
    value: function merge(other) {
      var _optionsA$forceEquip, _other$maximizeOption, _optionsA$preventEqui, _other$maximizeOption3, _optionsA$bonusEquip$, _optionsA$bonusEquip, _optionsB$bonusEquip$, _optionsB$bonusEquip, _optionsA$onlySlot, _optionsB$onlySlot, _optionsA$preventSlot, _optionsB$preventSlot;
      var optionsA = this.maximizeOptions;
      var optionsB = other.maximizeOptions;
      var optionalBooleans = mergeOptionalOptions(optionsA, optionsB, "updateOnFamiliarChange", "updateOnCanEquipChanged", "updateOnLocationChange", "forceUpdate");
      return new Requirement([].concat(maximize_toConsumableArray(this.maximizeParameters), maximize_toConsumableArray(other.maximizeParameters)), maximize_objectSpread(maximize_objectSpread({}, optionalBooleans), {}, {
        forceEquip: [].concat(maximize_toConsumableArray((_optionsA$forceEquip = optionsA.forceEquip) !== null && _optionsA$forceEquip !== void 0 ? _optionsA$forceEquip : []), maximize_toConsumableArray((_other$maximizeOption = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption !== void 0 ? _other$maximizeOption : [])).filter(x => {
          var _other$maximizeOption2;
          return !((_other$maximizeOption2 = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption2 !== void 0 && _other$maximizeOption2.includes(x));
        }),
        preventEquip: [].concat(maximize_toConsumableArray((_optionsA$preventEqui = optionsA.preventEquip) !== null && _optionsA$preventEqui !== void 0 ? _optionsA$preventEqui : []), maximize_toConsumableArray((_other$maximizeOption3 = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption3 !== void 0 ? _other$maximizeOption3 : [])).filter(x => {
          var _other$maximizeOption4;
          return !((_other$maximizeOption4 = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption4 !== void 0 && _other$maximizeOption4.includes(x));
        }),
        bonusEquip: new Map([].concat(maximize_toConsumableArray((_optionsA$bonusEquip$ = (_optionsA$bonusEquip = optionsA.bonusEquip) === null || _optionsA$bonusEquip === void 0 ? void 0 : _optionsA$bonusEquip.entries()) !== null && _optionsA$bonusEquip$ !== void 0 ? _optionsA$bonusEquip$ : []), maximize_toConsumableArray((_optionsB$bonusEquip$ = (_optionsB$bonusEquip = optionsB.bonusEquip) === null || _optionsB$bonusEquip === void 0 ? void 0 : _optionsB$bonusEquip.entries()) !== null && _optionsB$bonusEquip$ !== void 0 ? _optionsB$bonusEquip$ : []))),
        onlySlot: [].concat(maximize_toConsumableArray((_optionsA$onlySlot = optionsA.onlySlot) !== null && _optionsA$onlySlot !== void 0 ? _optionsA$onlySlot : []), maximize_toConsumableArray((_optionsB$onlySlot = optionsB.onlySlot) !== null && _optionsB$onlySlot !== void 0 ? _optionsB$onlySlot : [])),
        preventSlot: [].concat(maximize_toConsumableArray((_optionsA$preventSlot = optionsA.preventSlot) !== null && _optionsA$preventSlot !== void 0 ? _optionsA$preventSlot : []), maximize_toConsumableArray((_optionsB$preventSlot = optionsB.preventSlot) !== null && _optionsB$preventSlot !== void 0 ? _optionsB$preventSlot : []))
      }));
    }
    /**
     * Merges a set of requirements together, starting with an empty requirement.
     *
     * @param allRequirements Requirements to merge
     * @returns Merged requirements
     */
  }, {
    key: "maximize",
    value:
    /**
     * Runs maximizeCached, using the maximizeParameters and maximizeOptions contained by this requirement.
     *
     * @returns Whether the maximize call succeeded.
     */
    function maximize() {
      return maximizeCached(this.maximizeParameters, this.maximizeOptions);
    }
    /**
     * Merges requirements, and then runs maximizeCached on the combined requirement.
     *
     * @param requirements Requirements to maximize on
     */
  }], [{
    key: "merge",
    value: function merge(allRequirements) {
      return allRequirements.reduce((x, y) => x.merge(y), new Requirement([], {}));
    }
  }, {
    key: "maximize",
    value: function maximize() {
      for (var _len2 = arguments.length, requirements = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        requirements[_key2] = arguments[_key2];
      }
      Requirement.merge(requirements).maximize();
    }
  }]);
  return Requirement;
}();
/**
 * Clear all outfits cached by the maximizer.
 */
function clearMaximizerCache() {
  outfitCache.clear();
  for (var member in cachedObjectives) delete cachedObjectives[member];
}
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/outfit.js
var outfit_templateObject, outfit_templateObject2, outfit_templateObject3, outfit_templateObject4, outfit_templateObject5, outfit_templateObject6, outfit_templateObject7, outfit_templateObject8, outfit_templateObject9, outfit_templateObject10, outfit_templateObject11, outfit_templateObject12, outfit_templateObject13, outfit_templateObject14, outfit_templateObject15, outfit_templateObject16, outfit_templateObject17, outfit_templateObject18, outfit_templateObject19, outfit_templateObject20, outfit_templateObject21, outfit_templateObject22, outfit_templateObject23, outfit_templateObject24, outfit_templateObject25, outfit_templateObject26, outfit_templateObject27, outfit_templateObject28, outfit_templateObject29, outfit_templateObject30, outfit_templateObject31, outfit_templateObject32, outfit_templateObject33, outfit_templateObject34, outfit_templateObject35, outfit_templateObject36, outfit_templateObject37, outfit_templateObject38, outfit_templateObject39, outfit_templateObject40, outfit_templateObject41, outfit_templateObject42, outfit_templateObject43, outfit_templateObject44, outfit_templateObject45, outfit_templateObject46, outfit_templateObject47, outfit_templateObject48, outfit_templateObject49, outfit_templateObject50, outfit_templateObject51, outfit_templateObject52, outfit_templateObject53, outfit_templateObject54, outfit_templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61;
function outfit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function outfit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? outfit_ownKeys(Object(source), !0).forEach(function (key) { outfit_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : outfit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function outfit_defineProperty(obj, key, value) { key = outfit_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function outfit_slicedToArray(arr, i) { return outfit_arrayWithHoles(arr) || outfit_iterableToArrayLimit(arr, i) || outfit_unsupportedIterableToArray(arr, i) || outfit_nonIterableRest(); }
function outfit_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function outfit_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function outfit_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function outfit_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = outfit_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function outfit_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function outfit_toConsumableArray(arr) { return outfit_arrayWithoutHoles(arr) || outfit_iterableToArray(arr) || outfit_unsupportedIterableToArray(arr) || outfit_nonIterableSpread(); }
function outfit_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function outfit_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return outfit_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return outfit_arrayLikeToArray(o, minLen); }
function outfit_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function outfit_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return outfit_arrayLikeToArray(arr); }
function outfit_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function outfit_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function outfit_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, outfit_toPropertyKey(descriptor.key), descriptor); } }
function outfit_createClass(Constructor, protoProps, staticProps) { if (protoProps) outfit_defineProperties(Constructor.prototype, protoProps); if (staticProps) outfit_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function outfit_toPropertyKey(arg) { var key = outfit_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function outfit_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var FORCE_REFRESH_REQUIREMENT = new Requirement([], {
  forceUpdate: true
});
var outfitSlots = ["hat", "back", "weapon", "offhand", "shirt", "pants", "acc1", "acc2", "acc3", "famequip"];
var riderSlots = (/* unused pure expression or super */ null && (["buddy-bjorn", "crown-of-thrones"]));
var weaponHands = i => i ? (0,external_kolmafia_namespaceObject.weaponHands)(i) : 0;
var outfit_modeableCommands = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka", "jillcandle"];
var Outfit = /*#__PURE__*/function () {
  function Outfit() {
    outfit_classCallCheck(this, Outfit);
    this.equips = new Map();
    this.riders = new Map();
    this.modes = {};
    this.skipDefaults = false;
    this.modifier = [];
    this.avoid = [];
    this.bonuses = new Map();
    this.postActions = [];
    this.preActions = [];
  }
  /**
   * Create an outfit from your current player state.
   */
  outfit_createClass(Outfit, [{
    key: "equippedAmount",
    value:
    /**
     * Check how many of an item is equipped on the outfit.
     */
    function equippedAmount(item) {
      return outfit_toConsumableArray(this.equips.values()).filter(i => i === item).length;
    }
  }, {
    key: "isAvailable",
    value: function isAvailable(item) {
      var _a;
      if ((_a = this.avoid) === null || _a === void 0 ? void 0 : _a.includes(item)) return false;
      if (!lib_have(item, this.equippedAmount(item) + 1)) return false;
      if ((0,external_kolmafia_namespaceObject.booleanModifier)(item, "Single Equip") && this.equippedAmount(item) > 0) return false;
      return true;
    }
    /**
     * Check whether an item is equipped on the outfit, optionally in a specific slot.
     */
  }, {
    key: "haveEquipped",
    value: function haveEquipped(item, slot) {
      if (slot === undefined) return this.equippedAmount(item) > 0;
      return this.equips.get(slot) === item;
    }
  }, {
    key: "equipItemNone",
    value: function equipItemNone(item, slot) {
      if (item !== template_string_$item.none) return false;
      if (slot === undefined) return true;
      if (this.equips.has(slot)) return false;
      this.equips.set(slot, item);
      return true;
    }
  }, {
    key: "equipNonAccessory",
    value: function equipNonAccessory(item, slot) {
      if ($slots(outfit_templateObject || (outfit_templateObject = outfit_taggedTemplateLiteral(["acc1, acc2, acc3"]))).includes((0,external_kolmafia_namespaceObject.toSlot)(item))) return false;
      if (slot !== undefined && slot !== (0,external_kolmafia_namespaceObject.toSlot)(item)) return false;
      if (this.equips.has((0,external_kolmafia_namespaceObject.toSlot)(item))) return false;
      switch ((0,external_kolmafia_namespaceObject.toSlot)(item)) {
        case $slot(outfit_templateObject2 || (outfit_templateObject2 = outfit_taggedTemplateLiteral(["off-hand"]))):
          if (this.equips.has($slot(outfit_templateObject3 || (outfit_templateObject3 = outfit_taggedTemplateLiteral(["weapon"])))) && weaponHands(this.equips.get($slot(outfit_templateObject4 || (outfit_templateObject4 = outfit_taggedTemplateLiteral(["weapon"]))))) !== 1) {
            return false;
          }
          break;
        case $slot(outfit_templateObject5 || (outfit_templateObject5 = outfit_taggedTemplateLiteral(["familiar"]))):
          if (this.familiar !== undefined && !(0,external_kolmafia_namespaceObject.canEquip)(this.familiar, item)) return false;
      }
      if ((0,external_kolmafia_namespaceObject.toSlot)(item) !== $slot(outfit_templateObject6 || (outfit_templateObject6 = outfit_taggedTemplateLiteral(["familiar"]))) && !(0,external_kolmafia_namespaceObject.canEquip)(item)) return false;
      this.equips.set((0,external_kolmafia_namespaceObject.toSlot)(item), item);
      return true;
    }
  }, {
    key: "equipAccessory",
    value: function equipAccessory(item, slot) {
      if (![undefined].concat(outfit_toConsumableArray($slots(outfit_templateObject7 || (outfit_templateObject7 = outfit_taggedTemplateLiteral(["acc1, acc2, acc3"]))))).includes(slot)) return false;
      if ((0,external_kolmafia_namespaceObject.toSlot)(item) !== $slot(outfit_templateObject8 || (outfit_templateObject8 = outfit_taggedTemplateLiteral(["acc1"])))) return false;
      if (!(0,external_kolmafia_namespaceObject.canEquip)(item)) return false;
      if (slot === undefined) {
        // We don't care which of the accessory slots we equip in
        var empty = $slots(outfit_templateObject9 || (outfit_templateObject9 = outfit_taggedTemplateLiteral(["acc1, acc2, acc3"]))).find(s => !this.equips.has(s));
        if (empty === undefined) return false;
        this.equips.set(empty, item);
      } else {
        if (this.equips.has(slot)) return false;
        this.equips.set(slot, item);
      }
      return true;
    }
  }, {
    key: "equipUsingDualWield",
    value: function equipUsingDualWield(item, slot) {
      if (![undefined, $slot(outfit_templateObject10 || (outfit_templateObject10 = outfit_taggedTemplateLiteral(["off-hand"])))].includes(slot)) return false;
      if ((0,external_kolmafia_namespaceObject.toSlot)(item) !== $slot(outfit_templateObject11 || (outfit_templateObject11 = outfit_taggedTemplateLiteral(["weapon"])))) return false;
      if (this.equips.has($slot(outfit_templateObject12 || (outfit_templateObject12 = outfit_taggedTemplateLiteral(["weapon"])))) && weaponHands(this.equips.get($slot(outfit_templateObject13 || (outfit_templateObject13 = outfit_taggedTemplateLiteral(["weapon"]))))) !== 1) {
        return false;
      }
      if (this.equips.has($slot(outfit_templateObject14 || (outfit_templateObject14 = outfit_taggedTemplateLiteral(["off-hand"]))))) return false;
      if (!lib_have(template_string_$skill(outfit_templateObject15 || (outfit_templateObject15 = outfit_taggedTemplateLiteral(["Double-Fisted Skull Smashing"]))))) return false;
      if (weaponHands(item) !== 1) return false;
      if (!(0,external_kolmafia_namespaceObject.canEquip)(item)) return false;
      this.equips.set($slot(outfit_templateObject16 || (outfit_templateObject16 = outfit_taggedTemplateLiteral(["off-hand"]))), item);
      return true;
    }
  }, {
    key: "getHoldingFamiliar",
    value: function getHoldingFamiliar(item) {
      switch ((0,external_kolmafia_namespaceObject.toSlot)(item)) {
        case $slot(outfit_templateObject17 || (outfit_templateObject17 = outfit_taggedTemplateLiteral(["weapon"]))):
          return template_string_$familiar(outfit_templateObject18 || (outfit_templateObject18 = outfit_taggedTemplateLiteral(["Disembodied Hand"])));
        case $slot(outfit_templateObject19 || (outfit_templateObject19 = outfit_taggedTemplateLiteral(["off-hand"]))):
          return template_string_$familiar(outfit_templateObject20 || (outfit_templateObject20 = outfit_taggedTemplateLiteral(["Left-Hand Man"])));
        default:
          return undefined;
      }
    }
    /**
     * Returns the bonus value associated with a given item.
     *
     * @param item The item to check the bonus of.
     * @returns The bonus assigned to that item.
     */
  }, {
    key: "getBonus",
    value: function getBonus(item) {
      var _a;
      return (_a = this.bonuses.get(item)) !== null && _a !== void 0 ? _a : 0;
    }
    /**
     * Applies a value to any existing bonus this item has, using a rule assigned by the `reducer` parameter
     *
     * @param item The item to try to apply a bonus to.
     * @param value The value to try to apply.
     * @param reducer Function that combines new and current bonus
     * @returns The total assigned bonus to that item.
     */
  }, {
    key: "applyBonus",
    value: function applyBonus(item, value, reducer) {
      var previous = this.getBonus(item);
      return this.setBonus(item, reducer(value, previous));
    }
    /**
     * Sets the bonus value of an item equal to a given value, overriding any current bonus assigned.
     *
     * @param item The item to try to apply a bonus to.
     * @param value The value to try to apply.
     * @returns The total assigned bonus to that item.
     */
  }, {
    key: "setBonus",
    value: function setBonus(item, value) {
      this.bonuses.set(item, value);
      return value;
    }
    /**
     * Adds a value to any existing bonus this item has
     *
     * @param item The item to try to add a bonus to.
     * @param value The value to try to add.
     * @returns The total assigned bonus to that item.
     */
  }, {
    key: "addBonus",
    value: function addBonus(item, value) {
      return this.applyBonus(item, value, (a, b) => a + b);
    }
    /**
     * Apply the given items' bonuses to the outfit, using a rule given by the reducer
     *
     * @param items A map containing items and their bonuses
     * @param reducer A way of combining new bonuses with existing bonuses
     */
  }, {
    key: "applyBonuses",
    value: function applyBonuses(items, reducer) {
      var _iterator = outfit_createForOfIteratorHelper(items),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = outfit_slicedToArray(_step.value, 2),
            item = _step$value[0],
            value = _step$value[1];
          this.applyBonus(item, value, reducer);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * Sets the bonuses of the given items, overriding existing bonuses
     *
     * @param items Map containing items and bonuses
     */
  }, {
    key: "setBonuses",
    value: function setBonuses(items) {
      this.applyBonuses(items, a => a);
    }
    /**
     * Adds the bonuses of the given items to any existing bonuses they ahave
     *
     * @param items Map containing items and bonuses
     */
  }, {
    key: "addBonuses",
    value: function addBonuses(items) {
      this.applyBonuses(items, (a, b) => a + b);
    }
  }, {
    key: "equipUsingFamiliar",
    value: function equipUsingFamiliar(item, slot) {
      if (![undefined, $slot(outfit_templateObject21 || (outfit_templateObject21 = outfit_taggedTemplateLiteral(["familiar"])))].includes(slot)) return false;
      if (this.equips.has($slot(outfit_templateObject22 || (outfit_templateObject22 = outfit_taggedTemplateLiteral(["familiar"]))))) return false;
      if ((0,external_kolmafia_namespaceObject.booleanModifier)(item, "Single Equip")) return false;
      var familiar = this.getHoldingFamiliar(item);
      if (familiar === undefined || !this.equip(familiar)) return false;
      this.equips.set($slot(outfit_templateObject23 || (outfit_templateObject23 = outfit_taggedTemplateLiteral(["familiar"]))), item);
      return true;
    }
  }, {
    key: "equipItem",
    value: function equipItem(item, slot) {
      return this.haveEquipped(item, slot) || this.equipItemNone(item, slot) || this.isAvailable(item) && (this.equipNonAccessory(item, slot) || this.equipAccessory(item, slot) || this.equipUsingDualWield(item, slot) || this.equipUsingFamiliar(item, slot));
    }
  }, {
    key: "equipFamiliar",
    value: function equipFamiliar(familiar) {
      if (familiar === this.familiar) return true;
      if (this.familiar !== undefined) return false;
      if (familiar !== template_string_$familiar.none) {
        if (!lib_have(familiar)) return false;
        if (Array.from(this.riders.values()).includes(familiar)) return false;
      }
      var item = this.equips.get($slot(outfit_templateObject24 || (outfit_templateObject24 = outfit_taggedTemplateLiteral(["familiar"]))));
      if (item !== undefined && item !== template_string_$item.none && !(0,external_kolmafia_namespaceObject.canEquip)(familiar, item)) return false;
      this.familiar = familiar;
      return true;
    }
  }, {
    key: "equipSpec",
    value: function equipSpec(spec) {
      var _this$avoid;
      var _a, _b, _c, _d, _e, _f;
      var succeeded = true;
      for (var _i2 = 0, _outfitSlots = outfitSlots; _i2 < _outfitSlots.length; _i2++) {
        var slotName = _outfitSlots[_i2];
        var slot = (_a = new Map([["famequip", $slot(outfit_templateObject25 || (outfit_templateObject25 = outfit_taggedTemplateLiteral(["familiar"])))], ["offhand", $slot(outfit_templateObject26 || (outfit_templateObject26 = outfit_taggedTemplateLiteral(["off-hand"])))]]).get(slotName)) !== null && _a !== void 0 ? _a : (0,external_kolmafia_namespaceObject.toSlot)(slotName);
        var itemOrItems = spec[slotName];
        if (itemOrItems !== undefined && !this.equip(itemOrItems, slot)) succeeded = false;
      }
      var _iterator2 = outfit_createForOfIteratorHelper((_b = spec === null || spec === void 0 ? void 0 : spec.equip) !== null && _b !== void 0 ? _b : []),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var item = _step2.value;
          if (!this.equip(item)) succeeded = false;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if ((spec === null || spec === void 0 ? void 0 : spec.familiar) !== undefined) {
        if (!this.equip(spec.familiar)) succeeded = false;
      }
      (_this$avoid = this.avoid).push.apply(_this$avoid, outfit_toConsumableArray((_c = spec === null || spec === void 0 ? void 0 : spec.avoid) !== null && _c !== void 0 ? _c : []));
      this.skipDefaults = this.skipDefaults || ((_d = spec.skipDefaults) !== null && _d !== void 0 ? _d : false);
      if (spec.modifier) {
        var _this$modifier;
        if (Array.isArray(spec.modifier)) (_this$modifier = this.modifier).push.apply(_this$modifier, outfit_toConsumableArray(spec.modifier));else this.modifier.push(spec.modifier);
      }
      if (spec.modes) {
        if (!this.setModes(spec.modes)) {
          succeeded = false;
        }
      }
      if (spec.riders) {
        if (spec.riders["buddy-bjorn"] && !this.bjornify(spec.riders["buddy-bjorn"])) succeeded = false;
        if (spec.riders["crown-of-thrones"] && !this.enthrone(spec.riders["crown-of-thrones"])) succeeded = false;
      }
      if (spec.bonuses) {
        this.addBonuses(spec.bonuses);
      }
      this.beforeDress.apply(this, outfit_toConsumableArray((_e = spec.beforeDress) !== null && _e !== void 0 ? _e : []));
      this.afterDress.apply(this, outfit_toConsumableArray((_f = spec.afterDress) !== null && _f !== void 0 ? _f : []));
      return succeeded;
    }
    /**
     * Equip the first thing that can be equipped to the outfit.
     *
     * @param things The things to equip.
     * @param slot The slot to equip them.
     * @returns True if one of the things is equipped, and false otherwise.
     */
  }, {
    key: "equipFirst",
    value: function equipFirst(things, slot) {
      // some() returns false on an empty array, yet every() returns true.
      // This keeps behavior consistent between slotful and slotless equipping.
      if (things.length === 0) return true;
      return things.some(val => this.equip(val, slot));
    }
    /**
     * Equip a thing to the outfit.
     *
     * If no slot is given, then the thing will be equipped wherever possible
     * (possibly using dual-wielding, any of the accessory slots, or as
     * familiar equipment). If it is impossible to add this thing anywhere to
     * the outfit, this function will return false.
     *
     * If a slot is given, the item will be equipped only in that slot. If the
     * slot is filled with a different item, this function will return false.
     *
     * If the thing is already equipped in the provided slot, or if no slot is
     * given and the thing is already equipped in any slot, this function will
     * return true and not change the outfit.
     *
     * @param thing The thing or things to equip.
     * @param slot The slot to equip them.
     * @returns True if the thing was sucessfully equipped, and false otherwise.
     */
  }, {
    key: "equip",
    value: function equip(thing, slot) {
      if (Array.isArray(thing)) {
        if (slot !== undefined) return this.equipFirst(thing, slot);
        return thing.every(val => this.equip(val));
      }
      if (thing instanceof external_kolmafia_namespaceObject.Item) return this.equipItem(thing, slot);
      if (thing instanceof external_kolmafia_namespaceObject.Familiar) return this.equipFamiliar(thing);
      if (thing instanceof Outfit) return this.equipSpec(thing.spec());
      return this.equipSpec(thing);
    }
  }, {
    key: "equipRider",
    value:
    /**
     * Add a rider to the outfit.
     *
     * This function does *not* equip the corresponding item; it must be equipped separately.
     *
     * If a familiar is already specified as the rider that is different from the provided target, this function will return false and not change the rider.
     * @param target The familiar to use as the rider, or a ranked list of familiars to try to use as the rider.
     * @returns True if we successfully set the slot to a valid rider.
     */
    function equipRider(target, slot) {
      var current = this.riders.get(slot);
      var targets = Array.isArray(target) ? target : [target];
      if (current) {
        return targets.includes(current);
      }
      // Gather the set of riders that are equipped in other rider slots.
      var otherRiders = outfit_toConsumableArray(this.riders.entries()).filter(_ref => {
        var _ref2 = outfit_slicedToArray(_ref, 1),
          key = _ref2[0];
        return slot !== key;
      }).map(_ref3 => {
        var _ref4 = outfit_slicedToArray(_ref3, 2),
          value = _ref4[1];
        return value;
      });
      var fam = targets.find(f => lib_have(f) && this.familiar !== f && !otherRiders.includes(f));
      if (fam) {
        this.riders.set(slot, fam);
        return true;
      }
      return false;
    }
    /**
     * Add a bjornified familiar to the outfit.
     *
     * This function does *not* equip the buddy bjorn itself; it must be equipped separately.
     *
     * If a familiar is already specified for the buddy bjorn that is different from the provided target, this function will return false and not change the buddy bjorn.
     * @param target The familiar to bjornify, or a ranked list of familiars to try to bjornify.
     * @returns True if we successfully set the bjorn to a valid target.
     */
  }, {
    key: "bjornify",
    value: function bjornify(target) {
      return this.equipRider(target, $slot(outfit_templateObject27 || (outfit_templateObject27 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))));
    }
    /**
     * Add anenthroned familiar to the outfit.
     *
     * This function does *not* equip the crown of thrones itself; it must be equipped separately.
     *
     * If a familiar is already specified for the crown of thrones that is different from the provided target, this function will return false and not change the crown of thrones.
     * @param target The familiar to enthrone, or a ranked list of familiars to try to enthrone.
     * @returns True if we successfully set the enthrone to a valid target.
     */
  }, {
    key: "enthrone",
    value: function enthrone(target) {
      return this.equipRider(target, $slot(outfit_templateObject28 || (outfit_templateObject28 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))));
    }
    /**
     * Set the provided modes for items that may be equipped in the outfit.
     *
     * This function does *not* equip items for the set modes; they must be
     * equipped separately.
     *
     * If a mode is already set for an item that is different from the provided
     * mode, this function will return false and not change the mode for that
     * item. (But other modes might still be changed if they are compatible.)
     *
     * Note that the superhero and instuctions of a retrocape can be set
     * independently (`undefined` is treated as "don't care").
     *
     * @param modes Modes to set in this outfit.
     * @returns True if all modes were sucessfully set, and false otherwise.
     */
  }, {
    key: "setModes",
    value: function setModes(modes) {
      var _a, _b;
      var compatible = true;
      // Check if the new modes are compatible with existing modes
      for (var _i3 = 0, _modeableCommands = outfit_modeableCommands; _i3 < _modeableCommands.length; _i3++) {
        var mode = _modeableCommands[_i3];
        if (mode === "retrocape") continue; // checked below
        if (this.modes[mode] && modes[mode] && this.modes[mode] !== modes[mode]) {
          compatible = false;
        }
      }
      // Check if retrocape modes are compatible
      // (Parts that are undefined are compatible with everything)
      if (this.modes["retrocape"] && modes["retrocape"]) {
        if (this.modes["retrocape"][0] && modes["retrocape"][0] && this.modes["retrocape"][0] !== modes["retrocape"][0]) {
          compatible = false;
        }
        if (this.modes["retrocape"][1] && modes["retrocape"][1] && this.modes["retrocape"][1] !== modes["retrocape"][1]) {
          compatible = false;
        }
        this.modes["retrocape"][0] = (_a = this.modes["retrocape"][0]) !== null && _a !== void 0 ? _a : modes["retrocape"][0];
        this.modes["retrocape"][1] = (_b = this.modes["retrocape"][1]) !== null && _b !== void 0 ? _b : modes["retrocape"][1];
      }
      this.modes = outfit_objectSpread(outfit_objectSpread({}, modes), this.modes);
      return compatible;
    }
    /**
     * Check if it is possible to equip a thing to this outfit using .equip().
     *
     * This does not change the current outfit.
     *
     * @param thing The thing to equip.
     * @param slot The slot to equip them.
     * @returns True if this thing can be equipped.
     */
  }, {
    key: "canEquip",
    value: function canEquip(thing, slot) {
      var outfit = this.clone();
      return outfit.equip(thing, slot);
    }
    /**
     * Check if it is possible to equip a thing to this outfit using .equip(); if it is, do so.
     *
     * This does change the current outfit.
     * @param thing The thing to equip.
     * @param slot The slot to equip them.
     * @returns True if this thing was successfully equipped.
     */
  }, {
    key: "tryEquip",
    value: function tryEquip(thing, slot) {
      return this.canEquip(thing, slot) && this.equip(thing, slot);
    }
  }, {
    key: "afterDress",
    value: function afterDress() {
      var _this$postActions;
      (_this$postActions = this.postActions).push.apply(_this$postActions, arguments);
    }
  }, {
    key: "beforeDress",
    value: function beforeDress() {
      var _this$preActions;
      (_this$preActions = this.preActions).push.apply(_this$preActions, arguments);
    }
    /**
     * Equip this outfit.
     */
  }, {
    key: "_dress",
    value: function _dress(refreshed) {
      if (this.familiar) (0,external_kolmafia_namespaceObject.useFamiliar)(this.familiar);
      var targetEquipment = Array.from(this.equips.values());
      var usedSlots = new Set();
      // First, we equip non-accessory equipment.
      var nonaccessorySlots = $slots(outfit_templateObject29 || (outfit_templateObject29 = outfit_taggedTemplateLiteral(["weapon, off-hand, hat, back, shirt, pants, familiar"])));
      var bjorn = this.riders.get($slot(outfit_templateObject30 || (outfit_templateObject30 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))));
      if (bjorn && (this.equips.get($slot(outfit_templateObject31 || (outfit_templateObject31 = outfit_taggedTemplateLiteral(["back"])))) === template_string_$item(outfit_templateObject32 || (outfit_templateObject32 = outfit_taggedTemplateLiteral(["Buddy Bjorn"]))) || this.getBonus(template_string_$item(outfit_templateObject33 || (outfit_templateObject33 = outfit_taggedTemplateLiteral(["Buddy Bjorn"])))))) {
        usedSlots.add($slot(outfit_templateObject34 || (outfit_templateObject34 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))));
        usedSlots.add($slot(outfit_templateObject35 || (outfit_templateObject35 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))));
      }
      var crown = this.riders.get($slot(outfit_templateObject36 || (outfit_templateObject36 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))));
      if (crown && (this.equips.get($slot(outfit_templateObject37 || (outfit_templateObject37 = outfit_taggedTemplateLiteral(["hat"])))) === template_string_$item(outfit_templateObject38 || (outfit_templateObject38 = outfit_taggedTemplateLiteral(["Crown of Thrones"]))) || this.getBonus(template_string_$item(outfit_templateObject39 || (outfit_templateObject39 = outfit_taggedTemplateLiteral(["Crown of Thrones"])))))) {
        usedSlots.add($slot(outfit_templateObject40 || (outfit_templateObject40 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))));
        usedSlots.add($slot(outfit_templateObject41 || (outfit_templateObject41 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))));
      }
      // We must manually remove equipment that we want to use in a different
      // slot than where it is currently equipped, to avoid a mafia issue.
      // Order is anchored here to prevent DFSS shenanigans
      var _iterator3 = outfit_createForOfIteratorHelper(nonaccessorySlots),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var slot = _step3.value;
          if (targetEquipment.includes((0,external_kolmafia_namespaceObject.equippedItem)(slot)) && this.equips.get(slot) !== (0,external_kolmafia_namespaceObject.equippedItem)(slot) || this.avoid.includes((0,external_kolmafia_namespaceObject.equippedItem)(slot)) || slot === $slot(outfit_templateObject49 || (outfit_templateObject49 = outfit_taggedTemplateLiteral(["weapon"]))) && weaponHands((0,external_kolmafia_namespaceObject.equippedItem)(slot)) !== 1 && this.equips.has($slot(outfit_templateObject50 || (outfit_templateObject50 = outfit_taggedTemplateLiteral(["offhand"])))) && !this.equips.has($slot(outfit_templateObject51 || (outfit_templateObject51 = outfit_taggedTemplateLiteral(["weapon"]))))) (0,external_kolmafia_namespaceObject.equip)(slot, template_string_$item.none);
        }
        // Then we equip all the non-accessory equipment.
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var _iterator4 = outfit_createForOfIteratorHelper(nonaccessorySlots),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _slot = _step4.value;
          var equipment = this.equips.get(_slot);
          if (equipment) {
            (0,external_kolmafia_namespaceObject.equip)(_slot, equipment);
            usedSlots.add(_slot);
          }
        }
        // Next, we equip accessories
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      var accessorySlots = $slots(outfit_templateObject42 || (outfit_templateObject42 = outfit_taggedTemplateLiteral(["acc1, acc2, acc3"])));
      var accessoryEquips = accessorySlots.map(slot => this.equips.get(slot)).filter(item => item !== undefined);
      // To plan how to equip accessories, first check which accessories are
      // already equipped in some accessory slot. There is no need to move them,
      // since KoL doesn't care what order accessories are equipped in.
      var missingAccessories = []; // accessories that are not already equipped
      var _iterator5 = outfit_createForOfIteratorHelper(accessoryEquips),
        _step5;
      try {
        var _loop = function _loop() {
          var accessory = _step5.value;
          var alreadyEquipped = accessorySlots.find(slot => !usedSlots.has(slot) && (0,external_kolmafia_namespaceObject.equippedItem)(slot) === accessory);
          if (alreadyEquipped) {
            usedSlots.add(alreadyEquipped);
          } else {
            missingAccessories.push(accessory);
          }
        };
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          _loop();
        }
        // Then, for all accessories that are not currently equipped, use the first
        // open slot to place them.
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      for (var _i4 = 0, _missingAccessories = missingAccessories; _i4 < _missingAccessories.length; _i4++) {
        var accessory = _missingAccessories[_i4];
        var unusedSlot = accessorySlots.find(slot => !usedSlots.has(slot));
        if (unusedSlot === undefined) {
          // This should only occur if there is a bug in .dress()
          throw "No accessory slots remaining";
        }
        (0,external_kolmafia_namespaceObject.equip)(unusedSlot, accessory);
        usedSlots.add(unusedSlot);
      }
      // Remaining slots are filled by the maximizer
      var modes = convertToLibramModes(this.modes);
      if (this.modifier.length > 0 || outfit_toConsumableArray(this.bonuses).filter(_ref5 => {
        var _ref6 = outfit_slicedToArray(_ref5, 2),
          value = _ref6[1];
        return value;
      }).length > 0) {
        var allRequirements = [new Requirement(this.modifier, {
          preventSlot: outfit_toConsumableArray(usedSlots),
          preventEquip: this.avoid,
          modes: modes,
          bonusEquip: this.bonuses
        })];
        if (refreshed) allRequirements.push(FORCE_REFRESH_REQUIREMENT);
        if (!Requirement.merge(allRequirements).maximize()) {
          if (!refreshed) {
            (0,external_kolmafia_namespaceObject.cliExecute)("refresh inventory");
            this._dress(true);
            return;
          } else throw new Error("Failed to maximize properly!");
        }
        (0,external_kolmafia_namespaceObject.logprint)("Maximize: ".concat(this.modifier));
      }
      // Set the modes of any equipped items.
      applyModes(modes);
      // Handle the rider slots next
      if (bjorn && (0,external_kolmafia_namespaceObject.haveEquipped)(template_string_$item(outfit_templateObject43 || (outfit_templateObject43 = outfit_taggedTemplateLiteral(["Buddy Bjorn"]))))) {
        if ((0,external_kolmafia_namespaceObject.myEnthronedFamiliar)() === bjorn) (0,external_kolmafia_namespaceObject.enthroneFamiliar)(template_string_$familiar.none);
        if ((0,external_kolmafia_namespaceObject.myBjornedFamiliar)() !== bjorn) (0,external_kolmafia_namespaceObject.bjornifyFamiliar)(bjorn);
      }
      if (crown && (0,external_kolmafia_namespaceObject.haveEquipped)(template_string_$item(outfit_templateObject44 || (outfit_templateObject44 = outfit_taggedTemplateLiteral(["Crown of Thrones"]))))) {
        if ((0,external_kolmafia_namespaceObject.myBjornedFamiliar)() === crown) (0,external_kolmafia_namespaceObject.bjornifyFamiliar)(template_string_$familiar.none);
        if ((0,external_kolmafia_namespaceObject.myEnthronedFamiliar)() !== crown) (0,external_kolmafia_namespaceObject.enthroneFamiliar)(crown);
      }
      // Verify that all equipment was indeed equipped
      if (this.familiar !== undefined && (0,external_kolmafia_namespaceObject.myFamiliar)() !== this.familiar) throw "Failed to fully dress (expected: familiar ".concat(this.familiar, ")");
      var _iterator6 = outfit_createForOfIteratorHelper(nonaccessorySlots),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _slot2 = _step6.value;
          if (this.equips.has(_slot2) && (0,external_kolmafia_namespaceObject.equippedItem)(_slot2) !== this.equips.get(_slot2)) {
            throw "Failed to fully dress (expected: ".concat(_slot2, " ").concat(this.equips.get(_slot2), ")");
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      var _iterator7 = outfit_createForOfIteratorHelper(accessoryEquips),
        _step7;
      try {
        var _loop2 = function _loop2() {
          var accessory = _step7.value;
          if ((0,external_kolmafia_namespaceObject.equippedAmount)(accessory) < accessoryEquips.filter(acc => acc === accessory).length) {
            throw "Failed to fully dress (expected: acc ".concat(accessory, ")");
          }
        };
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      for (var _i5 = 0, _arr2 = [[$slot(outfit_templateObject45 || (outfit_templateObject45 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))), template_string_$item(outfit_templateObject46 || (outfit_templateObject46 = outfit_taggedTemplateLiteral(["Buddy Bjorn"]))), external_kolmafia_namespaceObject.myBjornedFamiliar], [$slot(outfit_templateObject47 || (outfit_templateObject47 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))), template_string_$item(outfit_templateObject48 || (outfit_templateObject48 = outfit_taggedTemplateLiteral(["Crown of Thrones"]))), external_kolmafia_namespaceObject.myEnthronedFamiliar]]; _i5 < _arr2.length; _i5++) {
        var _arr2$_i = outfit_slicedToArray(_arr2[_i5], 3),
          rider = _arr2$_i[0],
          throne = _arr2$_i[1],
          checkingFunction = _arr2$_i[2];
        var wanted = this.riders.get(rider);
        if (outfit_toConsumableArray(this.equips.values()).includes(throne) && wanted && checkingFunction() !== wanted) {
          throw "Failed to fully dress: (expected ".concat(rider, " ").concat(wanted, ")");
        }
      }
    }
  }, {
    key: "dress",
    value: function dress() {
      var _iterator8 = outfit_createForOfIteratorHelper(this.preActions),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var action = _step8.value;
          action();
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      this._dress(false);
      var _iterator9 = outfit_createForOfIteratorHelper(this.postActions),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var _action = _step9.value;
          _action();
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }
    /**
     * Build an Outfit identical to this outfit.
     */
  }, {
    key: "clone",
    value: function clone() {
      var result = new Outfit();
      result.equips = new Map(this.equips);
      result.skipDefaults = this.skipDefaults;
      result.familiar = this.familiar;
      result.modifier = outfit_toConsumableArray(this.modifier);
      result.avoid = outfit_toConsumableArray(this.avoid);
      result.modes = outfit_objectSpread({}, this.modes);
      result.riders = new Map(this.riders);
      result.bonuses = new Map(this.bonuses);
      result.beforeDress.apply(result, outfit_toConsumableArray(this.preActions));
      result.afterDress.apply(result, outfit_toConsumableArray(this.postActions));
      return result;
    }
    /**
     * Build an OutfitSpec identical to this outfit.
     */
  }, {
    key: "spec",
    value: function spec() {
      var _a;
      var result = {
        modifier: outfit_toConsumableArray(this.modifier),
        avoid: outfit_toConsumableArray(this.avoid),
        skipDefaults: this.skipDefaults,
        modes: outfit_objectSpread({}, this.modes),
        bonuses: new Map(this.bonuses)
      };
      if (this.familiar) result.familiar = this.familiar;
      // Add all equipment forced in a particular slot
      for (var _i6 = 0, _outfitSlots2 = outfitSlots; _i6 < _outfitSlots2.length; _i6++) {
        var slotName = _outfitSlots2[_i6];
        var entry = this.equips.get((_a = new Map([["famequip", $slot(outfit_templateObject52 || (outfit_templateObject52 = outfit_taggedTemplateLiteral(["familiar"])))], ["offhand", $slot(outfit_templateObject53 || (outfit_templateObject53 = outfit_taggedTemplateLiteral(["off-hand"])))]]).get(slotName)) !== null && _a !== void 0 ? _a : (0,external_kolmafia_namespaceObject.toSlot)(slotName));
        if (entry) result[slotName] = entry;
      }
      // Include the riders
      var riders = {};
      var buddyRider = this.riders.get($slot(outfit_templateObject54 || (outfit_templateObject54 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))));
      if (buddyRider !== undefined) riders["buddy-bjorn"] = buddyRider;
      var throneRider = this.riders.get($slot(outfit_templateObject55 || (outfit_templateObject55 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))));
      if (throneRider !== undefined) riders["crown-of-thrones"] = throneRider;
      if (buddyRider !== undefined || throneRider !== undefined) result.riders = riders;
      if (this.preActions.length) result.beforeDress = this.preActions;
      if (this.postActions.length) result.afterDress = this.postActions;
      return result;
    }
  }], [{
    key: "current",
    value: function current() {
      var _a;
      var outfit = new Outfit();
      var familiar = (0,external_kolmafia_namespaceObject.myFamiliar)();
      if (outfit.equip(familiar)) {
        throw "Failed to create outfit from current state (expected: familiar ".concat(familiar, ")");
      }
      for (var _i7 = 0, _outfitSlots3 = outfitSlots; _i7 < _outfitSlots3.length; _i7++) {
        var slotName = _outfitSlots3[_i7];
        var slot = (_a = new Map([["famequip", $slot(_templateObject56 || (_templateObject56 = outfit_taggedTemplateLiteral(["familiar"])))], ["offhand", $slot(_templateObject57 || (_templateObject57 = outfit_taggedTemplateLiteral(["off-hand"])))]]).get(slotName)) !== null && _a !== void 0 ? _a : (0,external_kolmafia_namespaceObject.toSlot)(slotName);
        var item = (0,external_kolmafia_namespaceObject.equippedItem)(slot);
        if (!outfit.equip(item, slot)) {
          throw "Failed to create outfit from current state (expected: ".concat(slot, " ").concat(item, ")");
        }
      }
      if ((0,external_kolmafia_namespaceObject.haveEquipped)(template_string_$item(_templateObject58 || (_templateObject58 = outfit_taggedTemplateLiteral(["Crown of Thrones"]))))) outfit.riders.set($slot(_templateObject59 || (_templateObject59 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))), (0,external_kolmafia_namespaceObject.myEnthronedFamiliar)());
      if ((0,external_kolmafia_namespaceObject.haveEquipped)(template_string_$item(_templateObject60 || (_templateObject60 = outfit_taggedTemplateLiteral(["Buddy Bjorn"]))))) outfit.riders.set($slot(_templateObject61 || (_templateObject61 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))), (0,external_kolmafia_namespaceObject.myBjornedFamiliar)());
      outfit.setModes(outfit_getCurrentModes());
      return outfit;
    }
  }, {
    key: "from",
    value: function from(spec) {
      var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var _a;
      var outfit = new Outfit();
      if (spec instanceof Requirement) {
        var result = {};
        result.modifier = spec.maximizeParameters;
        if ((_a = spec.maximizeOptions.forceEquip) === null || _a === void 0 ? void 0 : _a.length) {
          result.equip = spec.maximizeOptions.forceEquip;
        }
        result.avoid = spec.maximizeOptions.preventEquip;
        result.bonuses = spec.maximizeOptions.bonusEquip;
        if (spec.maximizeOptions.modes) {
          result.modes = convertFromLibramModes(spec.maximizeOptions.modes);
        }
        // Not sure if this is necessary
        var cleanedResult = Object.fromEntries(outfit_toConsumableArray(Object.entries(result)).filter(_ref7 => {
          var _ref8 = outfit_slicedToArray(_ref7, 2),
            v = _ref8[1];
          return v !== undefined;
        }));
        return Outfit.from(cleanedResult);
      }
      var success = outfit.equip(spec);
      if (!success && error) throw error;
      return success ? outfit : null;
    }
  }]);
  return Outfit;
}();
/**
 * Get the modes of this outfit in a type compatible with Libram.
 *
 * This conversion is needed since we store the retrocape modes
 * internally as an array, but libram uses a string.
 *
 * @returns The modes equipped to this outfit.
 */
function convertToLibramModes(modes) {
  var _a;
  return {
    backupcamera: modes["backupcamera"],
    umbrella: modes["umbrella"],
    snowsuit: modes["snowsuit"],
    edpiece: modes["edpiece"],
    retrocape: (_a = modes["retrocape"]) === null || _a === void 0 ? void 0 : _a.filter(s => s !== undefined).join(" "),
    parka: modes["parka"],
    jillcandle: modes["jillcandle"]
  };
}
function convertFromLibramModes(modes) {
  return modes.retrocape ? outfit_objectSpread(outfit_objectSpread({}, modes), {}, {
    retrocape: modes.retrocape.split(" ")
  }) : modes;
}
/**
 * Get the current modes of all items.
 *
 * @returns The current mode settings for all items, equipped or not.
 */
function outfit_getCurrentModes() {
  return {
    backupcamera: getMode("backupCameraMode", ["ml", "meat", "init"]),
    umbrella: getMode("umbrellaState", ["broken", "forward-facing", "bucket style", "pitchfork style", "constantly twirling", "cocoon"]),
    snowsuit: getMode("snowsuit", ["eyebrows", "smirk", "nose", "goatee", "hat"]),
    edpiece: getMode("edPiece", ["bear", "owl", "puma", "hyena", "mouse", "weasel", "fish"]),
    retrocape: [getMode("retroCapeSuperhero", ["vampire", "heck", "robot"]), getMode("retroCapeWashingInstructions", ["hold", "thrill", "kiss", "kill"])],
    parka: getMode("parkaMode", ["kachungasaur", "dilophosaur", "ghostasaurus", "spikolodon", "pterodactyl"]),
    jillcandle: getMode("jillcandle", ["disco", "ultraviolet", "reading", "red"])
  };
}
/**
 * Get the current value for a mode in a type-safe way.
 *
 * @param property The mafia property for the mode.
 * @param options A typed list of options for the mode.
 * @returns The mode if the property value matched a valid option, or undefined.
 */
function getMode(property, options) {
  var val = property_get(property, "");
  return options.find(s => s === val); // .includes has type issues
}
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/engine.js
var engine_templateObject;
function engine_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function engine_toConsumableArray(arr) { return engine_arrayWithoutHoles(arr) || engine_iterableToArray(arr) || engine_unsupportedIterableToArray(arr) || engine_nonIterableSpread(); }
function engine_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function engine_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function engine_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return engine_arrayLikeToArray(arr); }
function engine_slicedToArray(arr, i) { return engine_arrayWithHoles(arr) || engine_iterableToArrayLimit(arr, i) || engine_unsupportedIterableToArray(arr, i) || engine_nonIterableRest(); }
function engine_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function engine_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function engine_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function engine_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = engine_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function engine_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return engine_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return engine_arrayLikeToArray(o, minLen); }
function engine_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function engine_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function engine_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? engine_ownKeys(Object(source), !0).forEach(function (key) { engine_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : engine_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function engine_defineProperty(obj, key, value) { key = engine_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function engine_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, engine_toPropertyKey(descriptor.key), descriptor); } }
function engine_createClass(Constructor, protoProps, staticProps) { if (protoProps) engine_defineProperties(Constructor.prototype, protoProps); if (staticProps) engine_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function engine_toPropertyKey(arg) { var key = engine_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function engine_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function engine_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var EngineOptions = /*#__PURE__*/(/* unused pure expression or super */ null && (engine_createClass(function EngineOptions() {
  engine_classCallCheck(this, EngineOptions);
})));
var grimoireCCS = "grimoire_macro";
var Engine = /*#__PURE__*/function () {
  /**
   * Create the engine.
   * @param tasks A list of tasks for looking up task dependencies.
   * @param options Basic configuration of the engine.
   */
  function Engine(tasks, options) {
    engine_classCallCheck(this, Engine);
    this.attempts = {};
    this.propertyManager = new PropertiesManager();
    this.tasks_by_name = new Map();
    this.cachedCcsContents = "";
    this.options = options !== null && options !== void 0 ? options : {};
    this.tasks = tasks.map(task => engine_objectSpread(engine_objectSpread({}, this.options.default_task_options), task));
    var _iterator = engine_createForOfIteratorHelper(this.tasks),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var task = _step.value;
        this.tasks_by_name.set(task.name, task);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    this.initPropertiesManager(this.propertyManager);
  }
  /**
   * Determine the next task to perform.
   * By default, this is the first task in the task list that is available.
   * @returns The next task to perform, or undefined if no tasks are available.
   */
  engine_createClass(Engine, [{
    key: "getNextTask",
    value: function getNextTask() {
      return this.tasks.find(task => this.available(task));
    }
    /**
     * Continually get the next task and execute it.
     * @param actions If given, only perform up to this many tasks.
     */
  }, {
    key: "run",
    value: function run(actions) {
      for (var i = 0; i < (actions !== null && actions !== void 0 ? actions : Infinity); i++) {
        var task = this.getNextTask();
        if (!task) return;
        this.execute(task);
      }
    }
    /**
     * Close the engine and reset all properties.
     * After this has been called, this object should not be used.
     */
  }, {
    key: "destruct",
    value: function destruct() {
      this.propertyManager.resetAll();
      (0,external_kolmafia_namespaceObject.setAutoAttack)(0);
    }
    /**
     * Check if the given task is available at this moment.
     * @returns true if all dependencies are complete and the task is ready.
     *  Note that dependencies are not checked transitively. That is, if
     *  A depends on B which depends on C, then A is ready if B is complete
     *  (regardless of if C is complete or not).
     */
  }, {
    key: "available",
    value: function available(task) {
      var _a, _b;
      if (((_a = task.limit) === null || _a === void 0 ? void 0 : _a.skip) !== undefined && this.attempts[task.name] >= task.limit.skip) return false;
      var _iterator2 = engine_createForOfIteratorHelper((_b = task.after) !== null && _b !== void 0 ? _b : []),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var after = _step2.value;
          var after_task = this.tasks_by_name.get(after);
          if (after_task === undefined) throw "Unknown task dependency ".concat(after, " on ").concat(task.name);
          if (!after_task.completed()) return false;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (task.ready && !task.ready()) return false;
      if (task.completed()) return false;
      return true;
    }
    /**
     * Perform all steps to execute the provided task.
     * This is the main entry point for the Engine.
     * @param task The current executing task.
     */
  }, {
    key: "execute",
    value: function execute(task) {
      var _a, _b, _c, _d, _e;
      this.printExecutingMessage(task);
      // Determine the proper postcondition for after the task executes.
      var postcondition = (_b = (_a = task.limit) === null || _a === void 0 ? void 0 : _a.guard) === null || _b === void 0 ? void 0 : _b.call(_a);
      // Acquire any items and effects first, possibly for later execution steps.
      this.acquireItems(task);
      this.acquireEffects(task);
      // Prepare the outfit, with resources.
      var task_combat = (_d = (_c = task.combat) === null || _c === void 0 ? void 0 : _c.clone()) !== null && _d !== void 0 ? _d : new CombatStrategy();
      var outfit = this.createOutfit(task);
      var task_resources = new CombatResources();
      this.customize(task, outfit, task_combat, task_resources);
      this.dress(task, outfit);
      // Prepare combat and choices
      this.setCombat(task, task_combat, task_resources);
      this.setChoices(task, this.propertyManager);
      // Actually perform the task
      var _iterator3 = engine_createForOfIteratorHelper(task_resources.all()),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var resource = _step3.value;
          (_e = resource.prepare) === null || _e === void 0 ? void 0 : _e.call(resource);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      this.prepare(task);
      this.do(task);
      while (this.shouldRepeatAdv(task)) {
        _set("lastEncounter", "");
        this.do(task);
      }
      this.post(task);
      // Mark that we tried the task, and apply limits
      this.markAttempt(task);
      this.checkLimits(task, postcondition);
    }
    /**
     * Print a message to indicate the task has begun.
     * @param task The current executing task.
     */
  }, {
    key: "printExecutingMessage",
    value: function printExecutingMessage(task) {
      (0,external_kolmafia_namespaceObject.print)("");
      (0,external_kolmafia_namespaceObject.print)("Executing ".concat(task.name), "blue");
    }
    /**
     * Acquire all items for the task.
     * @param task The current executing task.
     */
  }, {
    key: "acquireItems",
    value: function acquireItems(task) {
      var _a;
      var acquire = undelay(task.acquire);
      var _iterator4 = engine_createForOfIteratorHelper(acquire || []),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var to_get = _step4.value;
          var num_needed = (_a = to_get.num) !== null && _a !== void 0 ? _a : 1;
          var num_have = (0,external_kolmafia_namespaceObject.itemAmount)(to_get.item) + (0,external_kolmafia_namespaceObject.equippedAmount)(to_get.item);
          if (num_needed <= num_have) continue;
          if (to_get.useful !== undefined && !to_get.useful()) continue;
          if (to_get.get) {
            to_get.get();
          } else if (to_get.price !== undefined) {
            (0,external_kolmafia_namespaceObject.buy)(to_get.item, num_needed - num_have, to_get.price);
          } else if (Object.keys((0,external_kolmafia_namespaceObject.getRelated)(to_get.item, "fold")).length > 0) {
            (0,external_kolmafia_namespaceObject.cliExecute)("fold ".concat(to_get.item));
          } else {
            (0,external_kolmafia_namespaceObject.retrieveItem)(to_get.item, num_needed);
          }
          if ((0,external_kolmafia_namespaceObject.itemAmount)(to_get.item) + (0,external_kolmafia_namespaceObject.equippedAmount)(to_get.item) < num_needed && !to_get.optional) {
            throw "Task ".concat(task.name, " was unable to acquire ").concat(num_needed, " ").concat(to_get.item);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
    /**
     * Acquire all effects for the task.
     * @param task The current executing task.
     */
  }, {
    key: "acquireEffects",
    value: function acquireEffects(task) {
      var _a;
      var effects = (_a = undelay(task.effects)) !== null && _a !== void 0 ? _a : [];
      var songs = effects.filter(effect => isSong(effect));
      if (songs.length > maxSongs()) throw "Too many AT songs";
      var extraSongs = Object.keys((0,external_kolmafia_namespaceObject.myEffects)()).map(effectName => (0,external_kolmafia_namespaceObject.toEffect)(effectName)).filter(effect => isSong(effect) && !songs.includes(effect));
      while (songs.length + extraSongs.length > maxSongs()) {
        var toRemove = extraSongs.pop();
        if (toRemove === undefined) {
          break;
        } else {
          uneffect(toRemove);
        }
      }
      var _iterator5 = engine_createForOfIteratorHelper(effects),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var effect = _step5.value;
          ensureEffect(effect);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
    /**
     * Create an outfit for the task with all required equipment.
     * @param task The current executing task.
     */
  }, {
    key: "createOutfit",
    value: function createOutfit(task) {
      var spec = undelay(task.outfit);
      if (spec instanceof Outfit) return spec.clone();
      var outfit = new Outfit();
      if (spec !== undefined) {
        if (!outfit.equip(spec) && !this.options.allow_partial_outfits) {
          throw "Unable to equip all items for ".concat(task.name);
        }
      }
      return outfit;
    }
    /**
     * Equip the outfit for the task.
     * @param task The current executing task.
     * @param outfit The outfit for the task, possibly augmented by the engine.
     */
  }, {
    key: "dress",
    value: function dress(task, outfit) {
      if (task.do instanceof external_kolmafia_namespaceObject.Location) (0,external_kolmafia_namespaceObject.setLocation)(task.do);
      outfit.dress();
    }
    /* eslint-disable @typescript-eslint/no-unused-vars */
    /**
     * Perform any engine-specific customization for the outfit and combat plan.
     *
     * This is a natural method to override in order to:
     *   * Enable the use of any resources in the outfit or combat (e.g., allocate banishers).
     *   * Equip a default outfit.
     *   * Determine additional monster macros at a global level (e.g., use flyers).
     * @param task The current executing task.
     * @param outfit The outfit for the task.
     * @param combat The combat strategy so far for the task.
     * @param resources The combat resources assigned so far for the task.
     */
  }, {
    key: "customize",
    value: function customize(task, outfit, combat, resources) {
      // do nothing by default
    }
    /* eslint-enable @typescript-eslint/no-unused-vars */
    /**
     * Set the choice settings for the task.
     * @param task The current executing task.
     * @param manager The property manager to use.
     */
  }, {
    key: "setChoices",
    value: function setChoices(task, manager) {
      var _a;
      for (var _i = 0, _Object$entries = Object.entries(undelay((_a = task.choices) !== null && _a !== void 0 ? _a : {})); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = engine_slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        if (value === undefined) continue;
        manager.setChoice(parseInt(key), value);
      }
    }
    /**
     * Save the combat macro for this task.
     * @param task The current executing task.
     * @param task_combat The completed combat strategy far for the task.
     * @param task_resources The combat resources assigned for the task.
     */
  }, {
    key: "setCombat",
    value: function setCombat(task, task_combat, task_resources) {
      var _a;
      // Save regular combat macro
      var macro = task_combat.compile(task_resources, (_a = this.options) === null || _a === void 0 ? void 0 : _a.combat_defaults, task.do instanceof external_kolmafia_namespaceObject.Location ? task.do : undefined);
      macro.save();
      if (!this.options.ccs) {
        // Use the macro through a CCS file
        var otherCCSEntries = task_combat.compileCcs();
        var ccsContents = ["[default]", "\"".concat(macro.toString(), "\"")].concat(engine_toConsumableArray(otherCCSEntries)).join("\n");
        // Log Macro + other CCS
        (0,external_kolmafia_namespaceObject.logprint)("CCS: ".concat(ccsContents.replace("\n", "\\n ")));
        if (ccsContents !== this.cachedCcsContents) {
          (0,external_kolmafia_namespaceObject.writeCcs)(ccsContents, grimoireCCS);
          (0,external_kolmafia_namespaceObject.cliExecute)("ccs ".concat(grimoireCCS)); // force Mafia to reparse the ccs
          this.cachedCcsContents = ccsContents;
        }
      }
      // Save autoattack combat macro
      var autoattack = task_combat.compileAutoattack();
      if (autoattack.toString().length > 1) {
        (0,external_kolmafia_namespaceObject.logprint)("Autoattack macro: ".concat(autoattack.toString()));
        autoattack.setAutoAttack();
      } else {
        (0,external_kolmafia_namespaceObject.setAutoAttack)(0);
      }
    }
    /**
     * Do any task-specific preparation.
     * @param task The current executing task.
     */
  }, {
    key: "prepare",
    value: function prepare(task) {
      var _a;
      (_a = task.prepare) === null || _a === void 0 ? void 0 : _a.call(task);
    }
    /**
     * Actually perform the task.
     * @param task The current executing task.
     */
  }, {
    key: "do",
    value: function _do(task) {
      var result = typeof task.do === "function" ? task.do() : task.do;
      if (result instanceof external_kolmafia_namespaceObject.Location) (0,external_kolmafia_namespaceObject.adv1)(result, -1, "");
      (0,external_kolmafia_namespaceObject.runCombat)();
      while ((0,external_kolmafia_namespaceObject.inMultiFight)()) (0,external_kolmafia_namespaceObject.runCombat)();
      if ((0,external_kolmafia_namespaceObject.choiceFollowsFight)()) (0,external_kolmafia_namespaceObject.runChoice)(-1);
    }
    /**
     * Check if the task.do should be immediately repeated without any prep.
     *
     * By default, this is only used to repeat a task if we hit one of:
     *   1. Halloweener dog noncombats,
     *   2. June cleaver noncombats,
     *   3. Lil' Doctor™ bag noncombat, or
     *   4. Turtle taming noncombats.
     * @param task The current executing task.
     * @returns True if the task should be immediately repeated.
     */
  }, {
    key: "shouldRepeatAdv",
    value: function shouldRepeatAdv(task) {
      return task.do instanceof external_kolmafia_namespaceObject.Location && lastEncounterWasWanderingNC();
    }
    /**
     * Do any task-specific wrapup activities.
     * @param task The current executing task.
     */
  }, {
    key: "post",
    value: function post(task) {
      var _a;
      (_a = task.post) === null || _a === void 0 ? void 0 : _a.call(task);
    }
    /**
     * Mark that an attempt was made on the current task.
     * @param task The current executing task.
     */
  }, {
    key: "markAttempt",
    value: function markAttempt(task) {
      if (!(task.name in this.attempts)) this.attempts[task.name] = 0;
      this.attempts[task.name]++;
    }
    /**
     * Check if the task has passed any of its internal limits.
     * @param task The task to check.
     * @throws An error if any of the internal limits have been passed.
     */
  }, {
    key: "checkLimits",
    value: function checkLimits(task, postcondition) {
      var _a;
      if (!task.limit) return;
      var failureMessage = task.limit.message ? " ".concat(task.limit.message) : "";
      if (!task.completed()) {
        if (task.limit.tries && this.attempts[task.name] >= task.limit.tries) throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.tries, " attempts. Please check what went wrong.").concat(failureMessage);
        if (task.limit.soft && this.attempts[task.name] >= task.limit.soft) throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.soft, " attempts. Please check what went wrong (you may just be unlucky).").concat(failureMessage);
        if (task.limit.turns && task.do instanceof external_kolmafia_namespaceObject.Location && task.do.turnsSpent >= task.limit.turns) throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.turns, " turns. Please check what went wrong.").concat(failureMessage);
        if (task.limit.unready && ((_a = task.ready) === null || _a === void 0 ? void 0 : _a.call(task))) throw "Task ".concat(task.name, " is still ready, but it should not be. Please check what went wrong.").concat(failureMessage);
        if (task.limit.completed) throw "Task ".concat(task.name, " is not completed, but it should be. Please check what went wrong.").concat(failureMessage);
      }
      if (postcondition && !postcondition()) {
        throw "Task ".concat(task.name, " failed its guard. Please check what went wrong.").concat(failureMessage);
      }
    }
  }, {
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return this.constructor.defaultSettings;
    }
    /**
     * Initialize properties for the script.
     * @param manager The properties manager to use.
     */
  }, {
    key: "initPropertiesManager",
    value: function initPropertiesManager(manager) {
      var _a;
      // Properties adapted from garbo
      manager.set(this.getDefaultSettings());
      if (this.options.ccs !== "") {
        if (this.options.ccs === undefined && (0,external_kolmafia_namespaceObject.readCcs)(grimoireCCS) === "") {
          // Write a simple CCS so we can switch to it
          (0,external_kolmafia_namespaceObject.writeCcs)("[ default ]\nabort", grimoireCCS);
        }
        manager.set({
          customCombatScript: (_a = this.options.ccs) !== null && _a !== void 0 ? _a : grimoireCCS
        });
      }
    }
  }]);
  return Engine;
}();
Engine.defaultSettings = {
  logPreferenceChange: true,
  logPreferenceChangeFilter: engine_toConsumableArray(new Set([].concat(engine_toConsumableArray(property_get("logPreferenceChangeFilter").split(",")), ["libram_savedMacro", "maximizerMRUList", "testudinalTeachings", "_lastCombatStarted"]))).sort().filter(a => a).join(","),
  battleAction: "custom combat script",
  autoSatisfyWithMall: true,
  autoSatisfyWithNPCs: true,
  autoSatisfyWithCoinmasters: true,
  autoSatisfyWithStash: false,
  dontStopForCounters: true,
  maximizerFoldables: true,
  hpAutoRecovery: "-0.05",
  hpAutoRecoveryTarget: "0.0",
  mpAutoRecovery: "-0.05",
  mpAutoRecoveryTarget: "0.0",
  afterAdventureScript: "",
  betweenBattleScript: "",
  choiceAdventureScript: "",
  familiarScript: "",
  currentMood: "apathetic",
  autoTuxedo: true,
  autoPinkyRing: true,
  autoGarish: true,
  allowNonMoodBurning: false,
  allowSummonBurning: true,
  libramSkillsSoftcore: "none"
};
function maxSongs() {
  return lib_have(template_string_$skill(engine_templateObject || (engine_templateObject = engine_taggedTemplateLiteral(["Mariachi Memory"])))) ? 4 : 3;
}
var wanderingNCs = new Set([
// Halloweener dog noncombats
"Wooof! Wooooooof!", "Playing Fetch*",
// June cleaver noncombats
"Aunts not Ants", "Bath Time", "Beware of Aligator", "Delicious Sprouts", "Hypnotic Master", "Lost and Found", "Poetic Justice", "Summer Days", "Teacher's Pet",
// Lil' Doctor™ bag noncombat
"A Pound of Cure"]);
var environmentSpecificNCs = new Map([["Even Tamer Than Usual", "indoor"], ["Never Break the Chain", "indoor"], ["Close, but Yes Cigar", "indoor"], ["Armchair Quarterback", "indoor"], ["This Turtle Rocks!", "outdoor"], ["Really Sticking Her Neck Out", "outdoor"], ["It Came from Beneath the Sewer? Great!", "outdoor"], ["Don't Be Alarmed, Now", "outdoor"], ["Puttin' it on Wax", "underground"], ["More Like... Hurtle", "underground"], ["Musk! Musk! Musk!", "underground"], ["Silent Strolling", "underwater"]]);
var zoneSpecificNCs = new Map(Object.entries((0,external_kolmafia_namespaceObject.fileToBuffer)("data/encounters.txt").split("\n").reduce((obj, line) => {
  var _a;
  var _line$split = line.split("\t"),
    _line$split2 = engine_slicedToArray(_line$split, 3),
    location = _line$split2[0],
    type = _line$split2[1],
    name = _line$split2[2];
  if (type !== "TURTLE" || location === "*") return obj;
  return engine_objectSpread(engine_objectSpread({}, obj), {}, engine_defineProperty({}, name, [].concat(engine_toConsumableArray((_a = obj[name]) !== null && _a !== void 0 ? _a : []), [(0,external_kolmafia_namespaceObject.toLocation)(location)])));
}, {})));
/**
 * Return true if the last adv was one of:
 *   1. Halloweener dog noncombats,
 *   2. June cleaver noncombats,
 *   3. Lil' Doctor™ bag noncombat, or
 *   4. Turtle taming noncombats.
 */
function lastEncounterWasWanderingNC() {
  var _a, _b, _c;
  var last = property_get("lastEncounter");
  if (zoneSpecificNCs.has(last)) {
    // Handle NCs with a duplicated name
    var zones = (_a = zoneSpecificNCs.get(last)) !== null && _a !== void 0 ? _a : [];
    return zones.includes((_b = property_get("lastAdventure")) !== null && _b !== void 0 ? _b : $location.none);
  } else {
    var environment = environmentSpecificNCs.get(last);
    if (environment === ((_c = property_get("lastAdventure")) === null || _c === void 0 ? void 0 : _c.environment)) return true;
    return wanderingNCs.has(last);
  }
}
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/route.js
function route_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function route_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? route_ownKeys(Object(source), !0).forEach(function (key) { route_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : route_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function route_defineProperty(obj, key, value) { key = route_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function route_toPropertyKey(arg) { var key = route_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function route_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function route_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = route_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function route_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return route_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return route_arrayLikeToArray(o, minLen); }
function route_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Extract a list of tasks from the provided quests.
 *
 * Each task name is prepended with the quest name ("Quest Name/Task Name").
 * The quest-local names referred to in task.after are updated appropriately.
 * The task completion condition is updated to include the quest completion.
 *
 * Tasks are returned in-order: all tasks from the first quest, then all tasks
 * from the second quest, etc.
 *
 * @param quests The list of quests. This method does not modify the quest
 *    objects or their tasks.
 * @param implicitAfter If true, each task with task.after = undefined will
 *    have a dependency added on the previous task in the list.
 * @returns A list of tasks from the input quests (with updated properties).
 */
function getTasks(quests) {
  var implicitAfter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var verifyTaskDependencies = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var _a;
  var result = [];
  var _iterator = route_createForOfIteratorHelper(quests),
    _step;
  try {
    var _loop = function _loop() {
      var quest = _step.value;
      var questCompleted = quest.completed;
      var questReady = quest.ready;
      var _iterator2 = route_createForOfIteratorHelper(quest.tasks),
        _step2;
      try {
        var _loop2 = function _loop2() {
          var task = _step2.value;
          // Include quest name in task names and dependencies (unless dependency quest is given)
          var renamedTask = route_objectSpread({}, task);
          renamedTask.name = "".concat(quest.name, "/").concat(task.name);
          renamedTask.after = (_a = task.after) === null || _a === void 0 ? void 0 : _a.map(after => after.includes("/") ? after : "".concat(quest.name, "/").concat(after));
          // Include previous task as a dependency
          if (implicitAfter && task.after === undefined && result.length > 0) renamedTask.after = [result[result.length - 1].name];
          // Include quest completion in task completion
          if (questCompleted !== undefined) {
            var taskCompleted = task.completed;
            renamedTask.completed = () => questCompleted() || taskCompleted();
          }
          var taskReady = renamedTask.ready;
          if (questReady !== undefined && taskReady !== undefined) {
            renamedTask.ready = () => questReady() && taskReady();
          } else if (questReady !== undefined) {
            renamedTask.ready = () => questReady();
          }
          result.push(renamedTask);
        };
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (verifyTaskDependencies) verifyDependencies(result);
  return result;
}
function verifyDependencies(tasks) {
  var _a;
  // Verify the dependency names of all tasks
  var names = new Set();
  var _iterator3 = route_createForOfIteratorHelper(tasks),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var task = _step3.value;
      names.add(task.name);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  var _iterator4 = route_createForOfIteratorHelper(tasks),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _task = _step4.value;
      var _iterator5 = route_createForOfIteratorHelper((_a = _task.after) !== null && _a !== void 0 ? _a : []),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var after = _step5.value;
          if (!names.has(after)) {
            throw "Unknown task dependency ".concat(after, " of ").concat(_task.name);
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return tasks;
}
function orderByRoute(tasks, routing, ignore_missing_tasks) {
  var priorities = new Map();
  var _iterator6 = route_createForOfIteratorHelper(tasks),
    _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var task = _step6.value;
      priorities.set(task.name, [1000, task]);
    }
    // Prioritize the routing list of tasks first
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  function setPriorityRecursive(task, priority) {
    var _a;
    var old_priority = priorities.get(task);
    if (old_priority === undefined) {
      if (ignore_missing_tasks) return;
      throw "Unknown routing task ".concat(task);
    }
    if (old_priority[0] <= priority) return;
    priorities.set(task, [priority, old_priority[1]]);
    var _iterator7 = route_createForOfIteratorHelper((_a = old_priority[1].after) !== null && _a !== void 0 ? _a : []),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var requirement = _step7.value;
        setPriorityRecursive(requirement, priority - 0.01);
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
  }
  for (var i = 0; i < routing.length; i++) {
    setPriorityRecursive(routing[i], i);
  }
  // Sort all tasks by priority.
  // Since this sort is stable, we default to earlier tasks.
  var result = tasks.slice();
  result.sort((a, b) => (priorities.get(a.name) || [1000])[0] - (priorities.get(b.name) || [1000])[0]);
  return result;
}
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/task.js

/**
 * Returns the state of a quest as a numeric value as follows:
 *   "unstarted" => -1
 *   "started" => 0
 *   "stepNUM" => NUM
 *   "finished" => 999
 */
function step(questName) {
  var stringStep = property_get(questName);
  if (stringStep === "unstarted") return -1;else if (stringStep === "started") return 0;else if (stringStep === "finished") return 999;else {
    if (stringStep.substring(0, 4) !== "step") {
      throw "Quest state parsing error.";
    }
    return parseInt(stringStep.substring(4), 10);
  }
}
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/index.js







;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2019/Snapper.js
function Snapper_slicedToArray(arr, i) { return Snapper_arrayWithHoles(arr) || Snapper_iterableToArrayLimit(arr, i) || Snapper_unsupportedIterableToArray(arr, i) || Snapper_nonIterableRest(); }
function Snapper_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Snapper_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Snapper_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Snapper_toConsumableArray(arr) { return Snapper_arrayWithoutHoles(arr) || Snapper_iterableToArray(arr) || Snapper_unsupportedIterableToArray(arr) || Snapper_nonIterableSpread(); }
function Snapper_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Snapper_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Snapper_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Snapper_arrayLikeToArray(o, minLen); }
function Snapper_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function Snapper_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Snapper_arrayLikeToArray(arr); }
function Snapper_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


var familiar = external_kolmafia_namespaceObject.Familiar.get("Red-Nosed Snapper");
/**
 * Map of phylum to item that phylum drops.
 */
var phylumItem = new Map([[external_kolmafia_namespaceObject.Phylum.get("beast"), external_kolmafia_namespaceObject.Item.get("patch of extra-warm fur")], [external_kolmafia_namespaceObject.Phylum.get("bug"), external_kolmafia_namespaceObject.Item.get("a bug's lymph")], [external_kolmafia_namespaceObject.Phylum.get("constellation"), external_kolmafia_namespaceObject.Item.get("micronova")], [external_kolmafia_namespaceObject.Phylum.get("construct"), external_kolmafia_namespaceObject.Item.get("industrial lubricant")], [external_kolmafia_namespaceObject.Phylum.get("demon"), external_kolmafia_namespaceObject.Item.get("infernal snowball")], [external_kolmafia_namespaceObject.Phylum.get("dude"), external_kolmafia_namespaceObject.Item.get("human musk")], [external_kolmafia_namespaceObject.Phylum.get("elemental"), external_kolmafia_namespaceObject.Item.get("livid energy")], [external_kolmafia_namespaceObject.Phylum.get("elf"), external_kolmafia_namespaceObject.Item.get("peppermint syrup")], [external_kolmafia_namespaceObject.Phylum.get("fish"), external_kolmafia_namespaceObject.Item.get("fish sauce")], [external_kolmafia_namespaceObject.Phylum.get("goblin"), external_kolmafia_namespaceObject.Item.get("guffin")], [external_kolmafia_namespaceObject.Phylum.get("hippy"), external_kolmafia_namespaceObject.Item.get("organic potpourri")], [external_kolmafia_namespaceObject.Phylum.get("hobo"), external_kolmafia_namespaceObject.Item.get("beggin' cologne")], [external_kolmafia_namespaceObject.Phylum.get("horror"), external_kolmafia_namespaceObject.Item.get("powdered madness")], [external_kolmafia_namespaceObject.Phylum.get("humanoid"), external_kolmafia_namespaceObject.Item.get("vial of humanoid growth hormone")], [external_kolmafia_namespaceObject.Phylum.get("mer-kin"), external_kolmafia_namespaceObject.Item.get("Mer-kin eyedrops")], [external_kolmafia_namespaceObject.Phylum.get("orc"), external_kolmafia_namespaceObject.Item.get("boot flask")], [external_kolmafia_namespaceObject.Phylum.get("penguin"), external_kolmafia_namespaceObject.Item.get("envelope full of Meat")], [external_kolmafia_namespaceObject.Phylum.get("pirate"), external_kolmafia_namespaceObject.Item.get("Shantix™")], [external_kolmafia_namespaceObject.Phylum.get("plant"), external_kolmafia_namespaceObject.Item.get("goodberry")], [external_kolmafia_namespaceObject.Phylum.get("slime"), external_kolmafia_namespaceObject.Item.get("extra-strength goo")], [external_kolmafia_namespaceObject.Phylum.get("undead"), external_kolmafia_namespaceObject.Item.get("unfinished pleasure")], [external_kolmafia_namespaceObject.Phylum.get("weird"), external_kolmafia_namespaceObject.Item.get("non-Euclidean angle")]]);
/**
 * Map of drop item to phylum it drops from.
 */
var itemPhylum = new Map(Snapper_toConsumableArray(phylumItem).map(_ref => {
  var _ref2 = Snapper_slicedToArray(_ref, 2),
    phylum = _ref2[0],
    item = _ref2[1];
  return [item, phylum];
}));
/**
 * Return whether you have a Red-Nosed Snapper.
 *
 * @returns True if you have a Red-Nosed Snapper, false otherwise.
 */
function Snapper_have() {
  return haveFamiliar(familiar);
}
/**
 * Get the phylum currently being tracked by the snapper.
 *
 * @returns Tracked phylum, or null if no phylum tracked.
 */
function getTrackedPhylum() {
  return property_get("redSnapperPhylum");
}
/**
 * Set snapper tracking to a certain phylum.
 *
 * @param phylum Phylum to track.
 */
function trackPhylum(phylum) {
  var currentFamiliar = myFamiliar();
  try {
    useFamiliar(familiar);
    cliExecute("snapper ".concat(phylum));
  } finally {
    useFamiliar(currentFamiliar);
  }
}
/**
 * Get progress to next snapper drop.
 *
 * @returns Number of fights completed (out of 11) to reach next drop.
 */
function getProgress() {
  return get("redSnapperProgress");
}
;// CONCATENATED MODULE: ./node_modules/html-entities/dist/esm/named-references.js
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
// This file is autogenerated by tools/process-named-references.ts
var pairDivider = "~";
var blockDivider = "~~";
function generateNamedReferences(input, prev) {
  var entities = {};
  var characters = {};
  var blocks = input.split(blockDivider);
  var isOptionalBlock = false;
  for (var i = 0; blocks.length > i; i++) {
    var entries = blocks[i].split(pairDivider);
    for (var j = 0; j < entries.length; j += 2) {
      var entity = entries[j];
      var character = entries[j + 1];
      var fullEntity = '&' + entity + ';';
      entities[fullEntity] = character;
      if (isOptionalBlock) {
        entities['&' + entity] = character;
      }
      characters[character] = fullEntity;
    }
    isOptionalBlock = true;
  }
  return prev ? {
    entities: __assign(__assign({}, entities), prev.entities),
    characters: __assign(__assign({}, characters), prev.characters)
  } : {
    entities: entities,
    characters: characters
  };
}
var bodyRegExps = {
  xml: /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
  html4: /&notin;|&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
  html5: /&centerdot;|&copysr;|&divideontimes;|&gtcc;|&gtcir;|&gtdot;|&gtlPar;|&gtquest;|&gtrapprox;|&gtrarr;|&gtrdot;|&gtreqless;|&gtreqqless;|&gtrless;|&gtrsim;|&ltcc;|&ltcir;|&ltdot;|&lthree;|&ltimes;|&ltlarr;|&ltquest;|&ltrPar;|&ltri;|&ltrie;|&ltrif;|&notin;|&notinE;|&notindot;|&notinva;|&notinvb;|&notinvc;|&notni;|&notniva;|&notnivb;|&notnivc;|&parallel;|&timesb;|&timesbar;|&timesd;|&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g
};
var namedReferences = {};
namedReferences['xml'] = generateNamedReferences("lt~<~gt~>~quot~\"~apos~'~amp~&");
namedReferences['html4'] = generateNamedReferences("apos~'~OElig~Œ~oelig~œ~Scaron~Š~scaron~š~Yuml~Ÿ~circ~ˆ~tilde~˜~ensp~ ~emsp~ ~thinsp~ ~zwnj~‌~zwj~‍~lrm~‎~rlm~‏~ndash~–~mdash~—~lsquo~‘~rsquo~’~sbquo~‚~ldquo~“~rdquo~”~bdquo~„~dagger~†~Dagger~‡~permil~‰~lsaquo~‹~rsaquo~›~euro~€~fnof~ƒ~Alpha~Α~Beta~Β~Gamma~Γ~Delta~Δ~Epsilon~Ε~Zeta~Ζ~Eta~Η~Theta~Θ~Iota~Ι~Kappa~Κ~Lambda~Λ~Mu~Μ~Nu~Ν~Xi~Ξ~Omicron~Ο~Pi~Π~Rho~Ρ~Sigma~Σ~Tau~Τ~Upsilon~Υ~Phi~Φ~Chi~Χ~Psi~Ψ~Omega~Ω~alpha~α~beta~β~gamma~γ~delta~δ~epsilon~ε~zeta~ζ~eta~η~theta~θ~iota~ι~kappa~κ~lambda~λ~mu~μ~nu~ν~xi~ξ~omicron~ο~pi~π~rho~ρ~sigmaf~ς~sigma~σ~tau~τ~upsilon~υ~phi~φ~chi~χ~psi~ψ~omega~ω~thetasym~ϑ~upsih~ϒ~piv~ϖ~bull~•~hellip~…~prime~′~Prime~″~oline~‾~frasl~⁄~weierp~℘~image~ℑ~real~ℜ~trade~™~alefsym~ℵ~larr~←~uarr~↑~rarr~→~darr~↓~harr~↔~crarr~↵~lArr~⇐~uArr~⇑~rArr~⇒~dArr~⇓~hArr~⇔~forall~∀~part~∂~exist~∃~empty~∅~nabla~∇~isin~∈~notin~∉~ni~∋~prod~∏~sum~∑~minus~−~lowast~∗~radic~√~prop~∝~infin~∞~ang~∠~and~∧~or~∨~cap~∩~cup~∪~int~∫~there4~∴~sim~∼~cong~≅~asymp~≈~ne~≠~equiv~≡~le~≤~ge~≥~sub~⊂~sup~⊃~nsub~⊄~sube~⊆~supe~⊇~oplus~⊕~otimes~⊗~perp~⊥~sdot~⋅~lceil~⌈~rceil~⌉~lfloor~⌊~rfloor~⌋~lang~〈~rang~〉~loz~◊~spades~♠~clubs~♣~hearts~♥~diams~♦~~nbsp~ ~iexcl~¡~cent~¢~pound~£~curren~¤~yen~¥~brvbar~¦~sect~§~uml~¨~copy~©~ordf~ª~laquo~«~not~¬~shy~­~reg~®~macr~¯~deg~°~plusmn~±~sup2~²~sup3~³~acute~´~micro~µ~para~¶~middot~·~cedil~¸~sup1~¹~ordm~º~raquo~»~frac14~¼~frac12~½~frac34~¾~iquest~¿~Agrave~À~Aacute~Á~Acirc~Â~Atilde~Ã~Auml~Ä~Aring~Å~AElig~Æ~Ccedil~Ç~Egrave~È~Eacute~É~Ecirc~Ê~Euml~Ë~Igrave~Ì~Iacute~Í~Icirc~Î~Iuml~Ï~ETH~Ð~Ntilde~Ñ~Ograve~Ò~Oacute~Ó~Ocirc~Ô~Otilde~Õ~Ouml~Ö~times~×~Oslash~Ø~Ugrave~Ù~Uacute~Ú~Ucirc~Û~Uuml~Ü~Yacute~Ý~THORN~Þ~szlig~ß~agrave~à~aacute~á~acirc~â~atilde~ã~auml~ä~aring~å~aelig~æ~ccedil~ç~egrave~è~eacute~é~ecirc~ê~euml~ë~igrave~ì~iacute~í~icirc~î~iuml~ï~eth~ð~ntilde~ñ~ograve~ò~oacute~ó~ocirc~ô~otilde~õ~ouml~ö~divide~÷~oslash~ø~ugrave~ù~uacute~ú~ucirc~û~uuml~ü~yacute~ý~thorn~þ~yuml~ÿ~quot~\"~amp~&~lt~<~gt~>");
namedReferences['html5'] = generateNamedReferences("Abreve~Ă~Acy~А~Afr~𝔄~Amacr~Ā~And~⩓~Aogon~Ą~Aopf~𝔸~ApplyFunction~⁡~Ascr~𝒜~Assign~≔~Backslash~∖~Barv~⫧~Barwed~⌆~Bcy~Б~Because~∵~Bernoullis~ℬ~Bfr~𝔅~Bopf~𝔹~Breve~˘~Bscr~ℬ~Bumpeq~≎~CHcy~Ч~Cacute~Ć~Cap~⋒~CapitalDifferentialD~ⅅ~Cayleys~ℭ~Ccaron~Č~Ccirc~Ĉ~Cconint~∰~Cdot~Ċ~Cedilla~¸~CenterDot~·~Cfr~ℭ~CircleDot~⊙~CircleMinus~⊖~CirclePlus~⊕~CircleTimes~⊗~ClockwiseContourIntegral~∲~CloseCurlyDoubleQuote~”~CloseCurlyQuote~’~Colon~∷~Colone~⩴~Congruent~≡~Conint~∯~ContourIntegral~∮~Copf~ℂ~Coproduct~∐~CounterClockwiseContourIntegral~∳~Cross~⨯~Cscr~𝒞~Cup~⋓~CupCap~≍~DD~ⅅ~DDotrahd~⤑~DJcy~Ђ~DScy~Ѕ~DZcy~Џ~Darr~↡~Dashv~⫤~Dcaron~Ď~Dcy~Д~Del~∇~Dfr~𝔇~DiacriticalAcute~´~DiacriticalDot~˙~DiacriticalDoubleAcute~˝~DiacriticalGrave~`~DiacriticalTilde~˜~Diamond~⋄~DifferentialD~ⅆ~Dopf~𝔻~Dot~¨~DotDot~⃜~DotEqual~≐~DoubleContourIntegral~∯~DoubleDot~¨~DoubleDownArrow~⇓~DoubleLeftArrow~⇐~DoubleLeftRightArrow~⇔~DoubleLeftTee~⫤~DoubleLongLeftArrow~⟸~DoubleLongLeftRightArrow~⟺~DoubleLongRightArrow~⟹~DoubleRightArrow~⇒~DoubleRightTee~⊨~DoubleUpArrow~⇑~DoubleUpDownArrow~⇕~DoubleVerticalBar~∥~DownArrow~↓~DownArrowBar~⤓~DownArrowUpArrow~⇵~DownBreve~̑~DownLeftRightVector~⥐~DownLeftTeeVector~⥞~DownLeftVector~↽~DownLeftVectorBar~⥖~DownRightTeeVector~⥟~DownRightVector~⇁~DownRightVectorBar~⥗~DownTee~⊤~DownTeeArrow~↧~Downarrow~⇓~Dscr~𝒟~Dstrok~Đ~ENG~Ŋ~Ecaron~Ě~Ecy~Э~Edot~Ė~Efr~𝔈~Element~∈~Emacr~Ē~EmptySmallSquare~◻~EmptyVerySmallSquare~▫~Eogon~Ę~Eopf~𝔼~Equal~⩵~EqualTilde~≂~Equilibrium~⇌~Escr~ℰ~Esim~⩳~Exists~∃~ExponentialE~ⅇ~Fcy~Ф~Ffr~𝔉~FilledSmallSquare~◼~FilledVerySmallSquare~▪~Fopf~𝔽~ForAll~∀~Fouriertrf~ℱ~Fscr~ℱ~GJcy~Ѓ~Gammad~Ϝ~Gbreve~Ğ~Gcedil~Ģ~Gcirc~Ĝ~Gcy~Г~Gdot~Ġ~Gfr~𝔊~Gg~⋙~Gopf~𝔾~GreaterEqual~≥~GreaterEqualLess~⋛~GreaterFullEqual~≧~GreaterGreater~⪢~GreaterLess~≷~GreaterSlantEqual~⩾~GreaterTilde~≳~Gscr~𝒢~Gt~≫~HARDcy~Ъ~Hacek~ˇ~Hat~^~Hcirc~Ĥ~Hfr~ℌ~HilbertSpace~ℋ~Hopf~ℍ~HorizontalLine~─~Hscr~ℋ~Hstrok~Ħ~HumpDownHump~≎~HumpEqual~≏~IEcy~Е~IJlig~Ĳ~IOcy~Ё~Icy~И~Idot~İ~Ifr~ℑ~Im~ℑ~Imacr~Ī~ImaginaryI~ⅈ~Implies~⇒~Int~∬~Integral~∫~Intersection~⋂~InvisibleComma~⁣~InvisibleTimes~⁢~Iogon~Į~Iopf~𝕀~Iscr~ℐ~Itilde~Ĩ~Iukcy~І~Jcirc~Ĵ~Jcy~Й~Jfr~𝔍~Jopf~𝕁~Jscr~𝒥~Jsercy~Ј~Jukcy~Є~KHcy~Х~KJcy~Ќ~Kcedil~Ķ~Kcy~К~Kfr~𝔎~Kopf~𝕂~Kscr~𝒦~LJcy~Љ~Lacute~Ĺ~Lang~⟪~Laplacetrf~ℒ~Larr~↞~Lcaron~Ľ~Lcedil~Ļ~Lcy~Л~LeftAngleBracket~⟨~LeftArrow~←~LeftArrowBar~⇤~LeftArrowRightArrow~⇆~LeftCeiling~⌈~LeftDoubleBracket~⟦~LeftDownTeeVector~⥡~LeftDownVector~⇃~LeftDownVectorBar~⥙~LeftFloor~⌊~LeftRightArrow~↔~LeftRightVector~⥎~LeftTee~⊣~LeftTeeArrow~↤~LeftTeeVector~⥚~LeftTriangle~⊲~LeftTriangleBar~⧏~LeftTriangleEqual~⊴~LeftUpDownVector~⥑~LeftUpTeeVector~⥠~LeftUpVector~↿~LeftUpVectorBar~⥘~LeftVector~↼~LeftVectorBar~⥒~Leftarrow~⇐~Leftrightarrow~⇔~LessEqualGreater~⋚~LessFullEqual~≦~LessGreater~≶~LessLess~⪡~LessSlantEqual~⩽~LessTilde~≲~Lfr~𝔏~Ll~⋘~Lleftarrow~⇚~Lmidot~Ŀ~LongLeftArrow~⟵~LongLeftRightArrow~⟷~LongRightArrow~⟶~Longleftarrow~⟸~Longleftrightarrow~⟺~Longrightarrow~⟹~Lopf~𝕃~LowerLeftArrow~↙~LowerRightArrow~↘~Lscr~ℒ~Lsh~↰~Lstrok~Ł~Lt~≪~Map~⤅~Mcy~М~MediumSpace~ ~Mellintrf~ℳ~Mfr~𝔐~MinusPlus~∓~Mopf~𝕄~Mscr~ℳ~NJcy~Њ~Nacute~Ń~Ncaron~Ň~Ncedil~Ņ~Ncy~Н~NegativeMediumSpace~​~NegativeThickSpace~​~NegativeThinSpace~​~NegativeVeryThinSpace~​~NestedGreaterGreater~≫~NestedLessLess~≪~NewLine~\n~Nfr~𝔑~NoBreak~⁠~NonBreakingSpace~ ~Nopf~ℕ~Not~⫬~NotCongruent~≢~NotCupCap~≭~NotDoubleVerticalBar~∦~NotElement~∉~NotEqual~≠~NotEqualTilde~≂̸~NotExists~∄~NotGreater~≯~NotGreaterEqual~≱~NotGreaterFullEqual~≧̸~NotGreaterGreater~≫̸~NotGreaterLess~≹~NotGreaterSlantEqual~⩾̸~NotGreaterTilde~≵~NotHumpDownHump~≎̸~NotHumpEqual~≏̸~NotLeftTriangle~⋪~NotLeftTriangleBar~⧏̸~NotLeftTriangleEqual~⋬~NotLess~≮~NotLessEqual~≰~NotLessGreater~≸~NotLessLess~≪̸~NotLessSlantEqual~⩽̸~NotLessTilde~≴~NotNestedGreaterGreater~⪢̸~NotNestedLessLess~⪡̸~NotPrecedes~⊀~NotPrecedesEqual~⪯̸~NotPrecedesSlantEqual~⋠~NotReverseElement~∌~NotRightTriangle~⋫~NotRightTriangleBar~⧐̸~NotRightTriangleEqual~⋭~NotSquareSubset~⊏̸~NotSquareSubsetEqual~⋢~NotSquareSuperset~⊐̸~NotSquareSupersetEqual~⋣~NotSubset~⊂⃒~NotSubsetEqual~⊈~NotSucceeds~⊁~NotSucceedsEqual~⪰̸~NotSucceedsSlantEqual~⋡~NotSucceedsTilde~≿̸~NotSuperset~⊃⃒~NotSupersetEqual~⊉~NotTilde~≁~NotTildeEqual~≄~NotTildeFullEqual~≇~NotTildeTilde~≉~NotVerticalBar~∤~Nscr~𝒩~Ocy~О~Odblac~Ő~Ofr~𝔒~Omacr~Ō~Oopf~𝕆~OpenCurlyDoubleQuote~“~OpenCurlyQuote~‘~Or~⩔~Oscr~𝒪~Otimes~⨷~OverBar~‾~OverBrace~⏞~OverBracket~⎴~OverParenthesis~⏜~PartialD~∂~Pcy~П~Pfr~𝔓~PlusMinus~±~Poincareplane~ℌ~Popf~ℙ~Pr~⪻~Precedes~≺~PrecedesEqual~⪯~PrecedesSlantEqual~≼~PrecedesTilde~≾~Product~∏~Proportion~∷~Proportional~∝~Pscr~𝒫~Qfr~𝔔~Qopf~ℚ~Qscr~𝒬~RBarr~⤐~Racute~Ŕ~Rang~⟫~Rarr~↠~Rarrtl~⤖~Rcaron~Ř~Rcedil~Ŗ~Rcy~Р~Re~ℜ~ReverseElement~∋~ReverseEquilibrium~⇋~ReverseUpEquilibrium~⥯~Rfr~ℜ~RightAngleBracket~⟩~RightArrow~→~RightArrowBar~⇥~RightArrowLeftArrow~⇄~RightCeiling~⌉~RightDoubleBracket~⟧~RightDownTeeVector~⥝~RightDownVector~⇂~RightDownVectorBar~⥕~RightFloor~⌋~RightTee~⊢~RightTeeArrow~↦~RightTeeVector~⥛~RightTriangle~⊳~RightTriangleBar~⧐~RightTriangleEqual~⊵~RightUpDownVector~⥏~RightUpTeeVector~⥜~RightUpVector~↾~RightUpVectorBar~⥔~RightVector~⇀~RightVectorBar~⥓~Rightarrow~⇒~Ropf~ℝ~RoundImplies~⥰~Rrightarrow~⇛~Rscr~ℛ~Rsh~↱~RuleDelayed~⧴~SHCHcy~Щ~SHcy~Ш~SOFTcy~Ь~Sacute~Ś~Sc~⪼~Scedil~Ş~Scirc~Ŝ~Scy~С~Sfr~𝔖~ShortDownArrow~↓~ShortLeftArrow~←~ShortRightArrow~→~ShortUpArrow~↑~SmallCircle~∘~Sopf~𝕊~Sqrt~√~Square~□~SquareIntersection~⊓~SquareSubset~⊏~SquareSubsetEqual~⊑~SquareSuperset~⊐~SquareSupersetEqual~⊒~SquareUnion~⊔~Sscr~𝒮~Star~⋆~Sub~⋐~Subset~⋐~SubsetEqual~⊆~Succeeds~≻~SucceedsEqual~⪰~SucceedsSlantEqual~≽~SucceedsTilde~≿~SuchThat~∋~Sum~∑~Sup~⋑~Superset~⊃~SupersetEqual~⊇~Supset~⋑~TRADE~™~TSHcy~Ћ~TScy~Ц~Tab~\t~Tcaron~Ť~Tcedil~Ţ~Tcy~Т~Tfr~𝔗~Therefore~∴~ThickSpace~  ~ThinSpace~ ~Tilde~∼~TildeEqual~≃~TildeFullEqual~≅~TildeTilde~≈~Topf~𝕋~TripleDot~⃛~Tscr~𝒯~Tstrok~Ŧ~Uarr~↟~Uarrocir~⥉~Ubrcy~Ў~Ubreve~Ŭ~Ucy~У~Udblac~Ű~Ufr~𝔘~Umacr~Ū~UnderBar~_~UnderBrace~⏟~UnderBracket~⎵~UnderParenthesis~⏝~Union~⋃~UnionPlus~⊎~Uogon~Ų~Uopf~𝕌~UpArrow~↑~UpArrowBar~⤒~UpArrowDownArrow~⇅~UpDownArrow~↕~UpEquilibrium~⥮~UpTee~⊥~UpTeeArrow~↥~Uparrow~⇑~Updownarrow~⇕~UpperLeftArrow~↖~UpperRightArrow~↗~Upsi~ϒ~Uring~Ů~Uscr~𝒰~Utilde~Ũ~VDash~⊫~Vbar~⫫~Vcy~В~Vdash~⊩~Vdashl~⫦~Vee~⋁~Verbar~‖~Vert~‖~VerticalBar~∣~VerticalLine~|~VerticalSeparator~❘~VerticalTilde~≀~VeryThinSpace~ ~Vfr~𝔙~Vopf~𝕍~Vscr~𝒱~Vvdash~⊪~Wcirc~Ŵ~Wedge~⋀~Wfr~𝔚~Wopf~𝕎~Wscr~𝒲~Xfr~𝔛~Xopf~𝕏~Xscr~𝒳~YAcy~Я~YIcy~Ї~YUcy~Ю~Ycirc~Ŷ~Ycy~Ы~Yfr~𝔜~Yopf~𝕐~Yscr~𝒴~ZHcy~Ж~Zacute~Ź~Zcaron~Ž~Zcy~З~Zdot~Ż~ZeroWidthSpace~​~Zfr~ℨ~Zopf~ℤ~Zscr~𝒵~abreve~ă~ac~∾~acE~∾̳~acd~∿~acy~а~af~⁡~afr~𝔞~aleph~ℵ~amacr~ā~amalg~⨿~andand~⩕~andd~⩜~andslope~⩘~andv~⩚~ange~⦤~angle~∠~angmsd~∡~angmsdaa~⦨~angmsdab~⦩~angmsdac~⦪~angmsdad~⦫~angmsdae~⦬~angmsdaf~⦭~angmsdag~⦮~angmsdah~⦯~angrt~∟~angrtvb~⊾~angrtvbd~⦝~angsph~∢~angst~Å~angzarr~⍼~aogon~ą~aopf~𝕒~ap~≈~apE~⩰~apacir~⩯~ape~≊~apid~≋~approx~≈~approxeq~≊~ascr~𝒶~ast~*~asympeq~≍~awconint~∳~awint~⨑~bNot~⫭~backcong~≌~backepsilon~϶~backprime~‵~backsim~∽~backsimeq~⋍~barvee~⊽~barwed~⌅~barwedge~⌅~bbrk~⎵~bbrktbrk~⎶~bcong~≌~bcy~б~becaus~∵~because~∵~bemptyv~⦰~bepsi~϶~bernou~ℬ~beth~ℶ~between~≬~bfr~𝔟~bigcap~⋂~bigcirc~◯~bigcup~⋃~bigodot~⨀~bigoplus~⨁~bigotimes~⨂~bigsqcup~⨆~bigstar~★~bigtriangledown~▽~bigtriangleup~△~biguplus~⨄~bigvee~⋁~bigwedge~⋀~bkarow~⤍~blacklozenge~⧫~blacksquare~▪~blacktriangle~▴~blacktriangledown~▾~blacktriangleleft~◂~blacktriangleright~▸~blank~␣~blk12~▒~blk14~░~blk34~▓~block~█~bne~=⃥~bnequiv~≡⃥~bnot~⌐~bopf~𝕓~bot~⊥~bottom~⊥~bowtie~⋈~boxDL~╗~boxDR~╔~boxDl~╖~boxDr~╓~boxH~═~boxHD~╦~boxHU~╩~boxHd~╤~boxHu~╧~boxUL~╝~boxUR~╚~boxUl~╜~boxUr~╙~boxV~║~boxVH~╬~boxVL~╣~boxVR~╠~boxVh~╫~boxVl~╢~boxVr~╟~boxbox~⧉~boxdL~╕~boxdR~╒~boxdl~┐~boxdr~┌~boxh~─~boxhD~╥~boxhU~╨~boxhd~┬~boxhu~┴~boxminus~⊟~boxplus~⊞~boxtimes~⊠~boxuL~╛~boxuR~╘~boxul~┘~boxur~└~boxv~│~boxvH~╪~boxvL~╡~boxvR~╞~boxvh~┼~boxvl~┤~boxvr~├~bprime~‵~breve~˘~bscr~𝒷~bsemi~⁏~bsim~∽~bsime~⋍~bsol~\\~bsolb~⧅~bsolhsub~⟈~bullet~•~bump~≎~bumpE~⪮~bumpe~≏~bumpeq~≏~cacute~ć~capand~⩄~capbrcup~⩉~capcap~⩋~capcup~⩇~capdot~⩀~caps~∩︀~caret~⁁~caron~ˇ~ccaps~⩍~ccaron~č~ccirc~ĉ~ccups~⩌~ccupssm~⩐~cdot~ċ~cemptyv~⦲~centerdot~·~cfr~𝔠~chcy~ч~check~✓~checkmark~✓~cir~○~cirE~⧃~circeq~≗~circlearrowleft~↺~circlearrowright~↻~circledR~®~circledS~Ⓢ~circledast~⊛~circledcirc~⊚~circleddash~⊝~cire~≗~cirfnint~⨐~cirmid~⫯~cirscir~⧂~clubsuit~♣~colon~:~colone~≔~coloneq~≔~comma~,~commat~@~comp~∁~compfn~∘~complement~∁~complexes~ℂ~congdot~⩭~conint~∮~copf~𝕔~coprod~∐~copysr~℗~cross~✗~cscr~𝒸~csub~⫏~csube~⫑~csup~⫐~csupe~⫒~ctdot~⋯~cudarrl~⤸~cudarrr~⤵~cuepr~⋞~cuesc~⋟~cularr~↶~cularrp~⤽~cupbrcap~⩈~cupcap~⩆~cupcup~⩊~cupdot~⊍~cupor~⩅~cups~∪︀~curarr~↷~curarrm~⤼~curlyeqprec~⋞~curlyeqsucc~⋟~curlyvee~⋎~curlywedge~⋏~curvearrowleft~↶~curvearrowright~↷~cuvee~⋎~cuwed~⋏~cwconint~∲~cwint~∱~cylcty~⌭~dHar~⥥~daleth~ℸ~dash~‐~dashv~⊣~dbkarow~⤏~dblac~˝~dcaron~ď~dcy~д~dd~ⅆ~ddagger~‡~ddarr~⇊~ddotseq~⩷~demptyv~⦱~dfisht~⥿~dfr~𝔡~dharl~⇃~dharr~⇂~diam~⋄~diamond~⋄~diamondsuit~♦~die~¨~digamma~ϝ~disin~⋲~div~÷~divideontimes~⋇~divonx~⋇~djcy~ђ~dlcorn~⌞~dlcrop~⌍~dollar~$~dopf~𝕕~dot~˙~doteq~≐~doteqdot~≑~dotminus~∸~dotplus~∔~dotsquare~⊡~doublebarwedge~⌆~downarrow~↓~downdownarrows~⇊~downharpoonleft~⇃~downharpoonright~⇂~drbkarow~⤐~drcorn~⌟~drcrop~⌌~dscr~𝒹~dscy~ѕ~dsol~⧶~dstrok~đ~dtdot~⋱~dtri~▿~dtrif~▾~duarr~⇵~duhar~⥯~dwangle~⦦~dzcy~џ~dzigrarr~⟿~eDDot~⩷~eDot~≑~easter~⩮~ecaron~ě~ecir~≖~ecolon~≕~ecy~э~edot~ė~ee~ⅇ~efDot~≒~efr~𝔢~eg~⪚~egs~⪖~egsdot~⪘~el~⪙~elinters~⏧~ell~ℓ~els~⪕~elsdot~⪗~emacr~ē~emptyset~∅~emptyv~∅~emsp13~ ~emsp14~ ~eng~ŋ~eogon~ę~eopf~𝕖~epar~⋕~eparsl~⧣~eplus~⩱~epsi~ε~epsiv~ϵ~eqcirc~≖~eqcolon~≕~eqsim~≂~eqslantgtr~⪖~eqslantless~⪕~equals~=~equest~≟~equivDD~⩸~eqvparsl~⧥~erDot~≓~erarr~⥱~escr~ℯ~esdot~≐~esim~≂~excl~!~expectation~ℰ~exponentiale~ⅇ~fallingdotseq~≒~fcy~ф~female~♀~ffilig~ﬃ~fflig~ﬀ~ffllig~ﬄ~ffr~𝔣~filig~ﬁ~fjlig~fj~flat~♭~fllig~ﬂ~fltns~▱~fopf~𝕗~fork~⋔~forkv~⫙~fpartint~⨍~frac13~⅓~frac15~⅕~frac16~⅙~frac18~⅛~frac23~⅔~frac25~⅖~frac35~⅗~frac38~⅜~frac45~⅘~frac56~⅚~frac58~⅝~frac78~⅞~frown~⌢~fscr~𝒻~gE~≧~gEl~⪌~gacute~ǵ~gammad~ϝ~gap~⪆~gbreve~ğ~gcirc~ĝ~gcy~г~gdot~ġ~gel~⋛~geq~≥~geqq~≧~geqslant~⩾~ges~⩾~gescc~⪩~gesdot~⪀~gesdoto~⪂~gesdotol~⪄~gesl~⋛︀~gesles~⪔~gfr~𝔤~gg~≫~ggg~⋙~gimel~ℷ~gjcy~ѓ~gl~≷~glE~⪒~gla~⪥~glj~⪤~gnE~≩~gnap~⪊~gnapprox~⪊~gne~⪈~gneq~⪈~gneqq~≩~gnsim~⋧~gopf~𝕘~grave~`~gscr~ℊ~gsim~≳~gsime~⪎~gsiml~⪐~gtcc~⪧~gtcir~⩺~gtdot~⋗~gtlPar~⦕~gtquest~⩼~gtrapprox~⪆~gtrarr~⥸~gtrdot~⋗~gtreqless~⋛~gtreqqless~⪌~gtrless~≷~gtrsim~≳~gvertneqq~≩︀~gvnE~≩︀~hairsp~ ~half~½~hamilt~ℋ~hardcy~ъ~harrcir~⥈~harrw~↭~hbar~ℏ~hcirc~ĥ~heartsuit~♥~hercon~⊹~hfr~𝔥~hksearow~⤥~hkswarow~⤦~hoarr~⇿~homtht~∻~hookleftarrow~↩~hookrightarrow~↪~hopf~𝕙~horbar~―~hscr~𝒽~hslash~ℏ~hstrok~ħ~hybull~⁃~hyphen~‐~ic~⁣~icy~и~iecy~е~iff~⇔~ifr~𝔦~ii~ⅈ~iiiint~⨌~iiint~∭~iinfin~⧜~iiota~℩~ijlig~ĳ~imacr~ī~imagline~ℐ~imagpart~ℑ~imath~ı~imof~⊷~imped~Ƶ~in~∈~incare~℅~infintie~⧝~inodot~ı~intcal~⊺~integers~ℤ~intercal~⊺~intlarhk~⨗~intprod~⨼~iocy~ё~iogon~į~iopf~𝕚~iprod~⨼~iscr~𝒾~isinE~⋹~isindot~⋵~isins~⋴~isinsv~⋳~isinv~∈~it~⁢~itilde~ĩ~iukcy~і~jcirc~ĵ~jcy~й~jfr~𝔧~jmath~ȷ~jopf~𝕛~jscr~𝒿~jsercy~ј~jukcy~є~kappav~ϰ~kcedil~ķ~kcy~к~kfr~𝔨~kgreen~ĸ~khcy~х~kjcy~ќ~kopf~𝕜~kscr~𝓀~lAarr~⇚~lAtail~⤛~lBarr~⤎~lE~≦~lEg~⪋~lHar~⥢~lacute~ĺ~laemptyv~⦴~lagran~ℒ~langd~⦑~langle~⟨~lap~⪅~larrb~⇤~larrbfs~⤟~larrfs~⤝~larrhk~↩~larrlp~↫~larrpl~⤹~larrsim~⥳~larrtl~↢~lat~⪫~latail~⤙~late~⪭~lates~⪭︀~lbarr~⤌~lbbrk~❲~lbrace~{~lbrack~[~lbrke~⦋~lbrksld~⦏~lbrkslu~⦍~lcaron~ľ~lcedil~ļ~lcub~{~lcy~л~ldca~⤶~ldquor~„~ldrdhar~⥧~ldrushar~⥋~ldsh~↲~leftarrow~←~leftarrowtail~↢~leftharpoondown~↽~leftharpoonup~↼~leftleftarrows~⇇~leftrightarrow~↔~leftrightarrows~⇆~leftrightharpoons~⇋~leftrightsquigarrow~↭~leftthreetimes~⋋~leg~⋚~leq~≤~leqq~≦~leqslant~⩽~les~⩽~lescc~⪨~lesdot~⩿~lesdoto~⪁~lesdotor~⪃~lesg~⋚︀~lesges~⪓~lessapprox~⪅~lessdot~⋖~lesseqgtr~⋚~lesseqqgtr~⪋~lessgtr~≶~lesssim~≲~lfisht~⥼~lfr~𝔩~lg~≶~lgE~⪑~lhard~↽~lharu~↼~lharul~⥪~lhblk~▄~ljcy~љ~ll~≪~llarr~⇇~llcorner~⌞~llhard~⥫~lltri~◺~lmidot~ŀ~lmoust~⎰~lmoustache~⎰~lnE~≨~lnap~⪉~lnapprox~⪉~lne~⪇~lneq~⪇~lneqq~≨~lnsim~⋦~loang~⟬~loarr~⇽~lobrk~⟦~longleftarrow~⟵~longleftrightarrow~⟷~longmapsto~⟼~longrightarrow~⟶~looparrowleft~↫~looparrowright~↬~lopar~⦅~lopf~𝕝~loplus~⨭~lotimes~⨴~lowbar~_~lozenge~◊~lozf~⧫~lpar~(~lparlt~⦓~lrarr~⇆~lrcorner~⌟~lrhar~⇋~lrhard~⥭~lrtri~⊿~lscr~𝓁~lsh~↰~lsim~≲~lsime~⪍~lsimg~⪏~lsqb~[~lsquor~‚~lstrok~ł~ltcc~⪦~ltcir~⩹~ltdot~⋖~lthree~⋋~ltimes~⋉~ltlarr~⥶~ltquest~⩻~ltrPar~⦖~ltri~◃~ltrie~⊴~ltrif~◂~lurdshar~⥊~luruhar~⥦~lvertneqq~≨︀~lvnE~≨︀~mDDot~∺~male~♂~malt~✠~maltese~✠~map~↦~mapsto~↦~mapstodown~↧~mapstoleft~↤~mapstoup~↥~marker~▮~mcomma~⨩~mcy~м~measuredangle~∡~mfr~𝔪~mho~℧~mid~∣~midast~*~midcir~⫰~minusb~⊟~minusd~∸~minusdu~⨪~mlcp~⫛~mldr~…~mnplus~∓~models~⊧~mopf~𝕞~mp~∓~mscr~𝓂~mstpos~∾~multimap~⊸~mumap~⊸~nGg~⋙̸~nGt~≫⃒~nGtv~≫̸~nLeftarrow~⇍~nLeftrightarrow~⇎~nLl~⋘̸~nLt~≪⃒~nLtv~≪̸~nRightarrow~⇏~nVDash~⊯~nVdash~⊮~nacute~ń~nang~∠⃒~nap~≉~napE~⩰̸~napid~≋̸~napos~ŉ~napprox~≉~natur~♮~natural~♮~naturals~ℕ~nbump~≎̸~nbumpe~≏̸~ncap~⩃~ncaron~ň~ncedil~ņ~ncong~≇~ncongdot~⩭̸~ncup~⩂~ncy~н~neArr~⇗~nearhk~⤤~nearr~↗~nearrow~↗~nedot~≐̸~nequiv~≢~nesear~⤨~nesim~≂̸~nexist~∄~nexists~∄~nfr~𝔫~ngE~≧̸~nge~≱~ngeq~≱~ngeqq~≧̸~ngeqslant~⩾̸~nges~⩾̸~ngsim~≵~ngt~≯~ngtr~≯~nhArr~⇎~nharr~↮~nhpar~⫲~nis~⋼~nisd~⋺~niv~∋~njcy~њ~nlArr~⇍~nlE~≦̸~nlarr~↚~nldr~‥~nle~≰~nleftarrow~↚~nleftrightarrow~↮~nleq~≰~nleqq~≦̸~nleqslant~⩽̸~nles~⩽̸~nless~≮~nlsim~≴~nlt~≮~nltri~⋪~nltrie~⋬~nmid~∤~nopf~𝕟~notinE~⋹̸~notindot~⋵̸~notinva~∉~notinvb~⋷~notinvc~⋶~notni~∌~notniva~∌~notnivb~⋾~notnivc~⋽~npar~∦~nparallel~∦~nparsl~⫽⃥~npart~∂̸~npolint~⨔~npr~⊀~nprcue~⋠~npre~⪯̸~nprec~⊀~npreceq~⪯̸~nrArr~⇏~nrarr~↛~nrarrc~⤳̸~nrarrw~↝̸~nrightarrow~↛~nrtri~⋫~nrtrie~⋭~nsc~⊁~nsccue~⋡~nsce~⪰̸~nscr~𝓃~nshortmid~∤~nshortparallel~∦~nsim~≁~nsime~≄~nsimeq~≄~nsmid~∤~nspar~∦~nsqsube~⋢~nsqsupe~⋣~nsubE~⫅̸~nsube~⊈~nsubset~⊂⃒~nsubseteq~⊈~nsubseteqq~⫅̸~nsucc~⊁~nsucceq~⪰̸~nsup~⊅~nsupE~⫆̸~nsupe~⊉~nsupset~⊃⃒~nsupseteq~⊉~nsupseteqq~⫆̸~ntgl~≹~ntlg~≸~ntriangleleft~⋪~ntrianglelefteq~⋬~ntriangleright~⋫~ntrianglerighteq~⋭~num~#~numero~№~numsp~ ~nvDash~⊭~nvHarr~⤄~nvap~≍⃒~nvdash~⊬~nvge~≥⃒~nvgt~>⃒~nvinfin~⧞~nvlArr~⤂~nvle~≤⃒~nvlt~<⃒~nvltrie~⊴⃒~nvrArr~⤃~nvrtrie~⊵⃒~nvsim~∼⃒~nwArr~⇖~nwarhk~⤣~nwarr~↖~nwarrow~↖~nwnear~⤧~oS~Ⓢ~oast~⊛~ocir~⊚~ocy~о~odash~⊝~odblac~ő~odiv~⨸~odot~⊙~odsold~⦼~ofcir~⦿~ofr~𝔬~ogon~˛~ogt~⧁~ohbar~⦵~ohm~Ω~oint~∮~olarr~↺~olcir~⦾~olcross~⦻~olt~⧀~omacr~ō~omid~⦶~ominus~⊖~oopf~𝕠~opar~⦷~operp~⦹~orarr~↻~ord~⩝~order~ℴ~orderof~ℴ~origof~⊶~oror~⩖~orslope~⩗~orv~⩛~oscr~ℴ~osol~⊘~otimesas~⨶~ovbar~⌽~par~∥~parallel~∥~parsim~⫳~parsl~⫽~pcy~п~percnt~%~period~.~pertenk~‱~pfr~𝔭~phiv~ϕ~phmmat~ℳ~phone~☎~pitchfork~⋔~planck~ℏ~planckh~ℎ~plankv~ℏ~plus~+~plusacir~⨣~plusb~⊞~pluscir~⨢~plusdo~∔~plusdu~⨥~pluse~⩲~plussim~⨦~plustwo~⨧~pm~±~pointint~⨕~popf~𝕡~pr~≺~prE~⪳~prap~⪷~prcue~≼~pre~⪯~prec~≺~precapprox~⪷~preccurlyeq~≼~preceq~⪯~precnapprox~⪹~precneqq~⪵~precnsim~⋨~precsim~≾~primes~ℙ~prnE~⪵~prnap~⪹~prnsim~⋨~profalar~⌮~profline~⌒~profsurf~⌓~propto~∝~prsim~≾~prurel~⊰~pscr~𝓅~puncsp~ ~qfr~𝔮~qint~⨌~qopf~𝕢~qprime~⁗~qscr~𝓆~quaternions~ℍ~quatint~⨖~quest~?~questeq~≟~rAarr~⇛~rAtail~⤜~rBarr~⤏~rHar~⥤~race~∽̱~racute~ŕ~raemptyv~⦳~rangd~⦒~range~⦥~rangle~⟩~rarrap~⥵~rarrb~⇥~rarrbfs~⤠~rarrc~⤳~rarrfs~⤞~rarrhk~↪~rarrlp~↬~rarrpl~⥅~rarrsim~⥴~rarrtl~↣~rarrw~↝~ratail~⤚~ratio~∶~rationals~ℚ~rbarr~⤍~rbbrk~❳~rbrace~}~rbrack~]~rbrke~⦌~rbrksld~⦎~rbrkslu~⦐~rcaron~ř~rcedil~ŗ~rcub~}~rcy~р~rdca~⤷~rdldhar~⥩~rdquor~”~rdsh~↳~realine~ℛ~realpart~ℜ~reals~ℝ~rect~▭~rfisht~⥽~rfr~𝔯~rhard~⇁~rharu~⇀~rharul~⥬~rhov~ϱ~rightarrow~→~rightarrowtail~↣~rightharpoondown~⇁~rightharpoonup~⇀~rightleftarrows~⇄~rightleftharpoons~⇌~rightrightarrows~⇉~rightsquigarrow~↝~rightthreetimes~⋌~ring~˚~risingdotseq~≓~rlarr~⇄~rlhar~⇌~rmoust~⎱~rmoustache~⎱~rnmid~⫮~roang~⟭~roarr~⇾~robrk~⟧~ropar~⦆~ropf~𝕣~roplus~⨮~rotimes~⨵~rpar~)~rpargt~⦔~rppolint~⨒~rrarr~⇉~rscr~𝓇~rsh~↱~rsqb~]~rsquor~’~rthree~⋌~rtimes~⋊~rtri~▹~rtrie~⊵~rtrif~▸~rtriltri~⧎~ruluhar~⥨~rx~℞~sacute~ś~sc~≻~scE~⪴~scap~⪸~sccue~≽~sce~⪰~scedil~ş~scirc~ŝ~scnE~⪶~scnap~⪺~scnsim~⋩~scpolint~⨓~scsim~≿~scy~с~sdotb~⊡~sdote~⩦~seArr~⇘~searhk~⤥~searr~↘~searrow~↘~semi~;~seswar~⤩~setminus~∖~setmn~∖~sext~✶~sfr~𝔰~sfrown~⌢~sharp~♯~shchcy~щ~shcy~ш~shortmid~∣~shortparallel~∥~sigmav~ς~simdot~⩪~sime~≃~simeq~≃~simg~⪞~simgE~⪠~siml~⪝~simlE~⪟~simne~≆~simplus~⨤~simrarr~⥲~slarr~←~smallsetminus~∖~smashp~⨳~smeparsl~⧤~smid~∣~smile~⌣~smt~⪪~smte~⪬~smtes~⪬︀~softcy~ь~sol~/~solb~⧄~solbar~⌿~sopf~𝕤~spadesuit~♠~spar~∥~sqcap~⊓~sqcaps~⊓︀~sqcup~⊔~sqcups~⊔︀~sqsub~⊏~sqsube~⊑~sqsubset~⊏~sqsubseteq~⊑~sqsup~⊐~sqsupe~⊒~sqsupset~⊐~sqsupseteq~⊒~squ~□~square~□~squarf~▪~squf~▪~srarr~→~sscr~𝓈~ssetmn~∖~ssmile~⌣~sstarf~⋆~star~☆~starf~★~straightepsilon~ϵ~straightphi~ϕ~strns~¯~subE~⫅~subdot~⪽~subedot~⫃~submult~⫁~subnE~⫋~subne~⊊~subplus~⪿~subrarr~⥹~subset~⊂~subseteq~⊆~subseteqq~⫅~subsetneq~⊊~subsetneqq~⫋~subsim~⫇~subsub~⫕~subsup~⫓~succ~≻~succapprox~⪸~succcurlyeq~≽~succeq~⪰~succnapprox~⪺~succneqq~⪶~succnsim~⋩~succsim~≿~sung~♪~supE~⫆~supdot~⪾~supdsub~⫘~supedot~⫄~suphsol~⟉~suphsub~⫗~suplarr~⥻~supmult~⫂~supnE~⫌~supne~⊋~supplus~⫀~supset~⊃~supseteq~⊇~supseteqq~⫆~supsetneq~⊋~supsetneqq~⫌~supsim~⫈~supsub~⫔~supsup~⫖~swArr~⇙~swarhk~⤦~swarr~↙~swarrow~↙~swnwar~⤪~target~⌖~tbrk~⎴~tcaron~ť~tcedil~ţ~tcy~т~tdot~⃛~telrec~⌕~tfr~𝔱~therefore~∴~thetav~ϑ~thickapprox~≈~thicksim~∼~thkap~≈~thksim~∼~timesb~⊠~timesbar~⨱~timesd~⨰~tint~∭~toea~⤨~top~⊤~topbot~⌶~topcir~⫱~topf~𝕥~topfork~⫚~tosa~⤩~tprime~‴~triangle~▵~triangledown~▿~triangleleft~◃~trianglelefteq~⊴~triangleq~≜~triangleright~▹~trianglerighteq~⊵~tridot~◬~trie~≜~triminus~⨺~triplus~⨹~trisb~⧍~tritime~⨻~trpezium~⏢~tscr~𝓉~tscy~ц~tshcy~ћ~tstrok~ŧ~twixt~≬~twoheadleftarrow~↞~twoheadrightarrow~↠~uHar~⥣~ubrcy~ў~ubreve~ŭ~ucy~у~udarr~⇅~udblac~ű~udhar~⥮~ufisht~⥾~ufr~𝔲~uharl~↿~uharr~↾~uhblk~▀~ulcorn~⌜~ulcorner~⌜~ulcrop~⌏~ultri~◸~umacr~ū~uogon~ų~uopf~𝕦~uparrow~↑~updownarrow~↕~upharpoonleft~↿~upharpoonright~↾~uplus~⊎~upsi~υ~upuparrows~⇈~urcorn~⌝~urcorner~⌝~urcrop~⌎~uring~ů~urtri~◹~uscr~𝓊~utdot~⋰~utilde~ũ~utri~▵~utrif~▴~uuarr~⇈~uwangle~⦧~vArr~⇕~vBar~⫨~vBarv~⫩~vDash~⊨~vangrt~⦜~varepsilon~ϵ~varkappa~ϰ~varnothing~∅~varphi~ϕ~varpi~ϖ~varpropto~∝~varr~↕~varrho~ϱ~varsigma~ς~varsubsetneq~⊊︀~varsubsetneqq~⫋︀~varsupsetneq~⊋︀~varsupsetneqq~⫌︀~vartheta~ϑ~vartriangleleft~⊲~vartriangleright~⊳~vcy~в~vdash~⊢~vee~∨~veebar~⊻~veeeq~≚~vellip~⋮~verbar~|~vert~|~vfr~𝔳~vltri~⊲~vnsub~⊂⃒~vnsup~⊃⃒~vopf~𝕧~vprop~∝~vrtri~⊳~vscr~𝓋~vsubnE~⫋︀~vsubne~⊊︀~vsupnE~⫌︀~vsupne~⊋︀~vzigzag~⦚~wcirc~ŵ~wedbar~⩟~wedge~∧~wedgeq~≙~wfr~𝔴~wopf~𝕨~wp~℘~wr~≀~wreath~≀~wscr~𝓌~xcap~⋂~xcirc~◯~xcup~⋃~xdtri~▽~xfr~𝔵~xhArr~⟺~xharr~⟷~xlArr~⟸~xlarr~⟵~xmap~⟼~xnis~⋻~xodot~⨀~xopf~𝕩~xoplus~⨁~xotime~⨂~xrArr~⟹~xrarr~⟶~xscr~𝓍~xsqcup~⨆~xuplus~⨄~xutri~△~xvee~⋁~xwedge~⋀~yacy~я~ycirc~ŷ~ycy~ы~yfr~𝔶~yicy~ї~yopf~𝕪~yscr~𝓎~yucy~ю~zacute~ź~zcaron~ž~zcy~з~zdot~ż~zeetrf~ℨ~zfr~𝔷~zhcy~ж~zigrarr~⇝~zopf~𝕫~zscr~𝓏~~AMP~&~COPY~©~GT~>~LT~<~QUOT~\"~REG~®", namedReferences['html4']);
;// CONCATENATED MODULE: ./node_modules/html-entities/dist/esm/numeric-unicode-map.js
var numericUnicodeMap = {
  0: 65533,
  128: 8364,
  130: 8218,
  131: 402,
  132: 8222,
  133: 8230,
  134: 8224,
  135: 8225,
  136: 710,
  137: 8240,
  138: 352,
  139: 8249,
  140: 338,
  142: 381,
  145: 8216,
  146: 8217,
  147: 8220,
  148: 8221,
  149: 8226,
  150: 8211,
  151: 8212,
  152: 732,
  153: 8482,
  154: 353,
  155: 8250,
  156: 339,
  158: 382,
  159: 376
};
;// CONCATENATED MODULE: ./node_modules/html-entities/dist/esm/surrogate-pairs.js
var fromCodePoint = String.fromCodePoint || function (astralCodePoint) {
  return String.fromCharCode(Math.floor((astralCodePoint - 0x10000) / 0x400) + 0xd800, (astralCodePoint - 0x10000) % 0x400 + 0xdc00);
};
// @ts-expect-error - String.prototype.codePointAt might not exist in older node versions
var surrogate_pairs_getCodePoint = String.prototype.codePointAt ? function (input, position) {
  return input.codePointAt(position);
} : function (input, position) {
  return (input.charCodeAt(position) - 0xd800) * 0x400 + input.charCodeAt(position + 1) - 0xdc00 + 0x10000;
};
var highSurrogateFrom = 0xd800;
var highSurrogateTo = 0xdbff;
;// CONCATENATED MODULE: ./node_modules/html-entities/dist/esm/index.js
var esm_assign = undefined && undefined.__assign || function () {
  esm_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return esm_assign.apply(this, arguments);
};



var allNamedReferences = esm_assign(esm_assign({}, namedReferences), {
  all: namedReferences.html5
});
var encodeRegExps = {
  specialChars: /[<>'"&]/g,
  nonAscii: /[<>'"&\u0080-\uD7FF\uE000-\uFFFF\uDC00-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g,
  nonAsciiPrintable: /[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF\uDC00-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g,
  nonAsciiPrintableOnly: /[\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF\uDC00-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g,
  extensive: /[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF\uDC00-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g
};
var defaultEncodeOptions = {
  mode: 'specialChars',
  level: 'all',
  numeric: 'decimal'
};
/** Encodes all the necessary (specified by `level`) characters in the text */
function encode(text, _a) {
  var _b = _a === void 0 ? defaultEncodeOptions : _a,
    _c = _b.mode,
    mode = _c === void 0 ? 'specialChars' : _c,
    _d = _b.numeric,
    numeric = _d === void 0 ? 'decimal' : _d,
    _e = _b.level,
    level = _e === void 0 ? 'all' : _e;
  if (!text) {
    return '';
  }
  var encodeRegExp = encodeRegExps[mode];
  var references = allNamedReferences[level].characters;
  var isHex = numeric === 'hexadecimal';
  return String.prototype.replace.call(text, encodeRegExp, function (input) {
    var result = references[input];
    if (!result) {
      var code = input.length > 1 ? getCodePoint(input, 0) : input.charCodeAt(0);
      result = (isHex ? '&#x' + code.toString(16) : '&#' + code) + ';';
    }
    return result;
  });
}
var defaultDecodeOptions = {
  scope: 'body',
  level: 'all'
};
var strict = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;
var attribute = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;
var baseDecodeRegExps = {
  xml: {
    strict: strict,
    attribute: attribute,
    body: bodyRegExps.xml
  },
  html4: {
    strict: strict,
    attribute: attribute,
    body: bodyRegExps.html4
  },
  html5: {
    strict: strict,
    attribute: attribute,
    body: bodyRegExps.html5
  }
};
var decodeRegExps = esm_assign(esm_assign({}, baseDecodeRegExps), {
  all: baseDecodeRegExps.html5
});
var fromCharCode = String.fromCharCode;
var outOfBoundsChar = fromCharCode(65533);
var defaultDecodeEntityOptions = {
  level: 'all'
};
function getDecodedEntity(entity, references, isAttribute, isStrict) {
  var decodeResult = entity;
  var decodeEntityLastChar = entity[entity.length - 1];
  if (isAttribute && decodeEntityLastChar === '=') {
    decodeResult = entity;
  } else if (isStrict && decodeEntityLastChar !== ';') {
    decodeResult = entity;
  } else {
    var decodeResultByReference = references[entity];
    if (decodeResultByReference) {
      decodeResult = decodeResultByReference;
    } else if (entity[0] === '&' && entity[1] === '#') {
      var decodeSecondChar = entity[2];
      var decodeCode = decodeSecondChar == 'x' || decodeSecondChar == 'X' ? parseInt(entity.substr(3), 16) : parseInt(entity.substr(2));
      decodeResult = decodeCode >= 0x10ffff ? outOfBoundsChar : decodeCode > 65535 ? fromCodePoint(decodeCode) : fromCharCode(numericUnicodeMap[decodeCode] || decodeCode);
    }
  }
  return decodeResult;
}
/** Decodes a single entity */
function decodeEntity(entity, _a) {
  var _b = _a === void 0 ? defaultDecodeEntityOptions : _a,
    _c = _b.level,
    level = _c === void 0 ? 'all' : _c;
  if (!entity) {
    return '';
  }
  return getDecodedEntity(entity, allNamedReferences[level].entities, false, false);
}
/** Decodes all entities in the text */
function decode(text, _a) {
  var _b = _a === void 0 ? defaultDecodeOptions : _a,
    _c = _b.level,
    level = _c === void 0 ? 'all' : _c,
    _d = _b.scope,
    scope = _d === void 0 ? level === 'xml' ? 'strict' : 'body' : _d;
  if (!text) {
    return '';
  }
  var decodeRegExp = decodeRegExps[level][scope];
  var references = allNamedReferences[level].entities;
  var isAttribute = scope === 'attribute';
  var isStrict = scope === 'strict';
  return text.replace(decodeRegExp, function (entity) {
    return getDecodedEntity(entity, references, isAttribute, isStrict);
  });
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/url.js
function url_toConsumableArray(arr) { return url_arrayWithoutHoles(arr) || url_iterableToArray(arr) || url_unsupportedIterableToArray(arr) || url_nonIterableSpread(); }
function url_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function url_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function url_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return url_arrayLikeToArray(arr); }
function url_slicedToArray(arr, i) { return url_arrayWithHoles(arr) || url_iterableToArrayLimit(arr, i) || url_unsupportedIterableToArray(arr, i) || url_nonIterableRest(); }
function url_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function url_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function url_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function url_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = url_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function url_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return url_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return url_arrayLikeToArray(o, minLen); }
function url_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var EMPTY_VALUE = Symbol("empty");
/**
 * Fetches a URL and returns the response
 * @param path Path to resource, e.g. "clan_basement.php"
 * @param query Query parameters,
 *  either as an object, e.g. { action: "cleansewer" },
 *  or as a list of [key, value] pairs, e.g. [["action", "cleansewer"]]
 * @param options Additional options
 * @param options.method HTTP method to use, either "GET" or "POST", defaults to "POST"
 * @returns the response from visiting the URL
 */
function fetchUrl(path) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _options$method = options.method,
    method = _options$method === void 0 ? "POST" : _options$method;
  var url = buildUrl(path, query);
  return (0,external_kolmafia_namespaceObject.visitUrl)(url, method === "POST", true);
}
/**
 * Builds a URL from a path and query
 * @param path Path to resource, e.g. "clan_basement.php"
 * @param query Query parameters,
 *  either as an object, e.g. { action: "cleansewer" },
 *  or as a list of [key, value] pairs, e.g. [["action", "cleansewer"]]
 * @returns the constructed URL, e.g. "clan_basement.php?action=cleansewer"
 */
function buildUrl(path) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var urlParams = Array.isArray(query) ? query : Object.entries(query);
  if (urlParams.length === 0) {
    return path;
  }
  var chunks = [path];
  var sep = path.includes("?") ? "&" : "?";
  var _iterator = url_createForOfIteratorHelper(urlParams),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var param = _step.value;
      if (param.length !== 2) {
        throw new Error("Query parameter array may only contain pair elements");
      }
      var _param = url_slicedToArray(param, 2),
        key = _param[0],
        value = _param[1];
      chunks.push(sep);
      sep = "&";
      chunks.push(encodeURIComponent(key));
      if (value !== EMPTY_VALUE) {
        chunks.push("=");
        chunks.push(encodeURIComponent(value));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return chunks.join("");
}
/**
 * Combines a list of queries into a single query
 * @param queries a list of query objects and/or arrays, can be mixed
 * @returns a single query
 */
function combineQuery() {
  for (var _len = arguments.length, queries = new Array(_len), _key = 0; _key < _len; _key++) {
    queries[_key] = arguments[_key];
  }
  if (queries.length === 1) {
    return queries[0];
  }
  var result = [];
  for (var _i2 = 0, _queries = queries; _i2 < _queries.length; _i2++) {
    var query = _queries[_i2];
    if (Array.isArray(query)) {
      result.push.apply(result, url_toConsumableArray(query));
    } else {
      result.push.apply(result, url_toConsumableArray(Object.entries(query)));
    }
  }
  return result;
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/Kmail.js
function Kmail_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = Kmail_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function Kmail_toConsumableArray(arr) { return Kmail_arrayWithoutHoles(arr) || Kmail_iterableToArray(arr) || Kmail_unsupportedIterableToArray(arr) || Kmail_nonIterableSpread(); }
function Kmail_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Kmail_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function Kmail_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Kmail_arrayLikeToArray(arr); }
function Kmail_slicedToArray(arr, i) { return Kmail_arrayWithHoles(arr) || Kmail_iterableToArrayLimit(arr, i) || Kmail_unsupportedIterableToArray(arr, i) || Kmail_nonIterableRest(); }
function Kmail_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Kmail_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Kmail_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Kmail_arrayLikeToArray(o, minLen); }
function Kmail_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Kmail_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Kmail_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Kmail_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Kmail_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Kmail_toPropertyKey(descriptor.key), descriptor); } }
function Kmail_createClass(Constructor, protoProps, staticProps) { if (protoProps) Kmail_defineProperties(Constructor.prototype, protoProps); if (staticProps) Kmail_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Kmail_defineProperty(obj, key, value) { key = Kmail_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Kmail_toPropertyKey(arg) { var key = Kmail_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function Kmail_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var Kmail = /*#__PURE__*/function () {
  function Kmail(rawKmail) {
    Kmail_classCallCheck(this, Kmail);
    Kmail_defineProperty(this, "id", void 0);
    Kmail_defineProperty(this, "date", void 0);
    Kmail_defineProperty(this, "type", void 0);
    Kmail_defineProperty(this, "senderId", void 0);
    Kmail_defineProperty(this, "senderName", void 0);
    Kmail_defineProperty(this, "rawMessage", void 0);
    Kmail_defineProperty(this, "_parsedMessageParts", void 0);
    this.id = Number(rawKmail.id);
    this.date = new Date(Number(rawKmail.azunixtime) * 1000);
    this.type = rawKmail.type;
    this.senderId = Number(rawKmail.fromid);
    this.senderName = rawKmail.fromname;
    this.rawMessage = rawKmail.message;
  }
  /**
   * Delete the kmail
   *
   * @returns Whether the kmail was deleted
   */
  Kmail_createClass(Kmail, [{
    key: "delete",
    value: function _delete() {
      return Kmail.delete([this]) === 1;
    }
  }, {
    key: "_messageParts",
    get: function get() {
      var _this$_parsedMessageP;
      return (_this$_parsedMessageP = this._parsedMessageParts) !== null && _this$_parsedMessageP !== void 0 ? _this$_parsedMessageP : this._parsedMessageParts = this._parseMessageParts();
    }
  }, {
    key: "_parseMessageParts",
    value: function _parseMessageParts() {
      var text = this.rawMessage;
      var insideText;
      if (this.type === "normal") {
        // strip potential valentine
        if (text.startsWith("<center><table>")) {
          var endIdx = text.indexOf("</center>");
          text = text.slice(endIdx + 9);
        }
      } else if (this.type === "giftshop") {
        var _text$split = text.split("<p>Inside Note:<p>");
        var _text$split2 = Kmail_slicedToArray(_text$split, 2);
        text = _text$split2[0];
        insideText = _text$split2[1];
      }
      var split = s => {
        var idx = s.indexOf("<");
        if (idx === -1) return [s];
        return [s.slice(0, idx), s.slice(idx)];
      };
      var _split = split(text),
        _split2 = Kmail_slicedToArray(_split, 2),
        outsideNote = _split2[0],
        _split2$ = _split2[1],
        outsideAttachments = _split2$ === void 0 ? null : _split2$;
      var _ref = insideText !== undefined ? split(insideText) : [],
        _ref2 = Kmail_slicedToArray(_ref, 2),
        _ref2$ = _ref2[0],
        insideNote = _ref2$ === void 0 ? null : _ref2$,
        _ref2$2 = _ref2[1],
        insideAttachments = _ref2$2 === void 0 ? null : _ref2$2;
      return {
        outsideNote: decode(outsideNote),
        outsideAttachments,
        insideNote: insideNote && decode(insideNote),
        insideAttachments
      };
    }
    /**
     * Get message contents without any HTML from items or meat
     *
     * @returns Cleaned message contents
     */
  }, {
    key: "message",
    get: function get() {
      var _this$_messageParts = this._messageParts,
        outsideNote = _this$_messageParts.outsideNote,
        insideNote = _this$_messageParts.insideNote;
      if (insideNote !== null) {
        return "".concat(outsideNote, "\n\nInside Note:\n").concat(insideNote);
      }
      return outsideNote;
    }
    /**
     * Get the note on the outside of the gift. If the kmail is not a gift,
     * this will be the entire message.
     *
     * @returns Note on the outside of the gift, or the entire message for non-gifts
     */
  }, {
    key: "outsideNote",
    get: function get() {
      return this._messageParts.outsideNote;
    }
    /**
     * Get the note on the inside of the gift
     *
     * @returns Note on the inside of the gift
     */
  }, {
    key: "insideNote",
    get: function get() {
      return this._messageParts.insideNote;
    }
    /**
     * Get items attached to the kmail
     *
     * @returns Map of items attached to the kmail and their quantities
     */
  }, {
    key: "items",
    value: function items() {
      var _this$_messageParts2 = this._messageParts,
        outsideAttachments = _this$_messageParts2.outsideAttachments,
        insideAttachments = _this$_messageParts2.insideAttachments;
      return extractItems("".concat(outsideAttachments).concat(insideAttachments));
    }
    /**
     * Get items attached to the outside of the gift, which should be
     * just the gift wrapper for giftshop items, and all items for normal kmails
     *
     * @returns Map of items attached to the kmail and their quantities
     */
  }, {
    key: "outsideItems",
    value: function outsideItems() {
      var outsideAttachments = this._messageParts.outsideAttachments;
      if (!outsideAttachments) return new Map();
      return extractItems(outsideAttachments);
    }
    /**
     * Get items attached to the inside of the gift
     *
     * @returns Map of items attached to the kmail and their quantities
     */
  }, {
    key: "insideItems",
    value: function insideItems() {
      var insideAttachments = this._messageParts.insideAttachments;
      if (!insideAttachments) return new Map();
      return extractItems(insideAttachments);
    }
    /**
     * Get meat attached to the kmail
     *
     * @returns Meat attached to the kmail
     */
  }, {
    key: "meat",
    value: function meat() {
      var _this$_messageParts3 = this._messageParts,
        outsideAttachments = _this$_messageParts3.outsideAttachments,
        insideAttachments = _this$_messageParts3.insideAttachments;
      if (!outsideAttachments && !insideAttachments) return 0;
      return (0,external_kolmafia_namespaceObject.extractMeat)("".concat(outsideAttachments).concat(insideAttachments));
    }
    /**
     * Reply to kmail
     *
     * @param message Message with which to reply
     * @param items Items to send
     * @param meat Meat to send
     * @see Kmail.send
     * @returns True if the kmail was successfully sent
     */
  }, {
    key: "reply",
    value: function reply() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var meat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      return Kmail.send(this.senderId, message, items, meat);
    }
  }], [{
    key: "parse",
    value:
    /**
     * Parses a kmail from KoL's native format
     *
     * @param rawKmail Kmail in the format supplies by api.php
     * @returns Parsed kmail
     */
    function parse(rawKmail) {
      return new Kmail(rawKmail);
    }
    /**
     * Returns all of the player's kmails
     *
     * @param count Number of kmails to fetch
     * @returns Parsed kmails
     */
  }, {
    key: "inbox",
    value: function inbox() {
      var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
      return JSON.parse((0,external_kolmafia_namespaceObject.visitUrl)("api.php?what=kmail&for=libram&count=".concat(count))).map(Kmail.parse);
    }
    /**
     * Bulk delete kmails
     *
     * @param kmails Kmails to delete
     * @returns Number of kmails deleted
     */
  }, {
    key: "delete",
    value: function _delete(kmails) {
      var _results$match$, _results$match;
      var results = fetchUrl("messages.php", [["the_action", "delete"], ["box", "Inbox"], ["pwd", EMPTY_VALUE]].concat(Kmail_toConsumableArray(kmails.map(k => ["sel".concat(k.id), "on"]))));
      return Number((_results$match$ = (_results$match = results.match(/<td>(\d) messages? deleted.<\/td>/)) === null || _results$match === void 0 ? void 0 : _results$match[1]) !== null && _results$match$ !== void 0 ? _results$match$ : 0);
    }
  }, {
    key: "_genericSend",
    value: function _genericSend(to, message, items, meat, chunkSize, constructUrl, successString) {
      var m = meat;
      var sendableItems = Kmail_toConsumableArray(arrayToCountedMap(items).entries()).filter(_ref3 => {
        var _ref4 = Kmail_slicedToArray(_ref3, 1),
          item = _ref4[0];
        return (0,external_kolmafia_namespaceObject.isGiftable)(item);
      });
      var result = true;
      var chunks = utils_chunk(sendableItems, chunkSize);
      // Split the items to be sent into chunks of max 11 item types
      var _iterator = Kmail_createForOfIteratorHelper(chunks.length > 0 ? chunks : [null]),
        _step;
      try {
        var _loop = function _loop() {
          var _c$length;
          var c = _step.value;
          var itemsQuery = {};
          if (c !== null) {
            c.forEach((_ref5, i) => {
              var _ref6 = Kmail_slicedToArray(_ref5, 2),
                item = _ref6[0],
                quantity = _ref6[1];
              itemsQuery["whichitem".concat(i + 1)] = item.id;
              itemsQuery["howmany".concat(i + 1)] = quantity;
            });
          }
          var _constructUrl = constructUrl({
              meat: m,
              chunkSize: (_c$length = c === null || c === void 0 ? void 0 : c.length) !== null && _c$length !== void 0 ? _c$length : 0
            }),
            path = _constructUrl.path,
            query = _constructUrl.query;
          var r = fetchUrl(path, combineQuery(query, itemsQuery));
          if (r.includes("That player cannot receive Meat or items")) {
            return {
              v: Kmail.gift(to, message, items, meat)
            };
          }
          // Make sure we don't send the same batch of meat with every chunk
          m = 0;
          result && (result = r.includes(successString));
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ret = _loop();
          if (typeof _ret === "object") return _ret.v;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return result;
    }
    /**
     * Sends a kmail to a player
     *
     * Sends multiple kmails if more than 11 unique item types are attached.
     * Ignores any ungiftable items.
     * Sends a gift package to players in run
     *
     * @param to The player name or id to receive the kmail
     * @param message The text contents of the message
     * @param items The items to be attached
     * @param meat The quantity of meat to be attached
     * @returns True if the kmail was successfully sent
     */
  }, {
    key: "send",
    value: function send(to) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var items = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var meat = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      return Kmail._genericSend(to, message, items, meat, 11, _ref7 => {
        var meat = _ref7.meat;
        return {
          path: "sendmessage.php",
          query: {
            action: "send",
            pwd: EMPTY_VALUE,
            towho: to,
            message,
            sendmeat: meat
          }
        };
      }, ">Message sent.</");
    }
    /**
     * Sends a gift to a player
     *
     * Sends multiple kmails if more than 3 unique item types are attached.
     * Ignores any ungiftable items.
     *
     * @param to The player name or id to receive the gift
     * @param message Message to send
     * @param items The items to be attached
     * @param meat The quantity of meat to be attached
     * @param insideNote The note on the inside of the gift
     * @returns True if the gift was successfully sent
     */
  }, {
    key: "gift",
    value: function gift(to) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var items = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var meat = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var insideNote = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
      return Kmail._genericSend(to, message, items, meat, 3, _ref8 => {
        var meat = _ref8.meat,
          chunkSize = _ref8.chunkSize;
        return {
          path: "town_sendgift.php",
          query: {
            action: "Yep.",
            pwd: EMPTY_VALUE,
            fromwhere: 0,
            note: message,
            insidenote: insideNote,
            towho: to,
            whichpackage: chunkSize,
            sendmeat: meat
          }
        };
      }, ">Package sent.</");
    }
  }]);
  return Kmail;
}();

;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2017/Pantogram.js
var Pantogram_templateObject, Pantogram_templateObject2, _Alignment, _Element, Pantogram_templateObject3, Pantogram_templateObject4, Pantogram_templateObject5, Pantogram_templateObject6, Pantogram_templateObject7, Pantogram_templateObject8, Pantogram_templateObject9, _LeftSacrifice, Pantogram_templateObject10, Pantogram_templateObject11, Pantogram_templateObject12, Pantogram_templateObject13, Pantogram_templateObject14, Pantogram_templateObject15, Pantogram_templateObject16, Pantogram_templateObject17, Pantogram_templateObject18, _MiddleSacrifice, Pantogram_templateObject19, Pantogram_templateObject20, Pantogram_templateObject21, Pantogram_templateObject22, Pantogram_templateObject23, Pantogram_templateObject24, Pantogram_templateObject25, Pantogram_templateObject26, Pantogram_templateObject27, Pantogram_templateObject28, _RightSacrifice;
function Pantogram_slicedToArray(arr, i) { return Pantogram_arrayWithHoles(arr) || Pantogram_iterableToArrayLimit(arr, i) || Pantogram_unsupportedIterableToArray(arr, i) || Pantogram_nonIterableRest(); }
function Pantogram_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Pantogram_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Pantogram_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Pantogram_arrayLikeToArray(o, minLen); }
function Pantogram_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Pantogram_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Pantogram_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Pantogram_defineProperty(obj, key, value) { key = Pantogram_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Pantogram_toPropertyKey(arg) { var key = Pantogram_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function Pantogram_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Pantogram_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var pantogram = template_string_$item(Pantogram_templateObject || (Pantogram_templateObject = Pantogram_taggedTemplateLiteral(["portable pantogram"])));
var pants = template_string_$item(Pantogram_templateObject2 || (Pantogram_templateObject2 = Pantogram_taggedTemplateLiteral(["pantogram pants"])));
/**
 * @returns Do we `have` the Pantogram itself?
 */
function Pantogram_have() {
  return lib_have(pantogram);
}
/**
 * @returns Do we `have` pantogram pants?
 */
function havePants() {
  return lib_have(pants);
}
var Alignment = (_Alignment = {}, Pantogram_defineProperty(_Alignment, "Muscle", 1), Pantogram_defineProperty(_Alignment, "Mysticality", 2), Pantogram_defineProperty(_Alignment, "Moxie", 3), _Alignment);
var Element = (_Element = {}, Pantogram_defineProperty(_Element, "Hot Resistance: 2", 1), Pantogram_defineProperty(_Element, "Cold Resistance: 2", 2), Pantogram_defineProperty(_Element, "Spooky Resistance: 2", 3), Pantogram_defineProperty(_Element, "Sleaze Resistance: 2", 4), Pantogram_defineProperty(_Element, "Stench Resistance: 2", 5), _Element);
var LeftSacrifice = (_LeftSacrifice = {}, Pantogram_defineProperty(_LeftSacrifice, "Maximum HP: 40", [-1, 0]), Pantogram_defineProperty(_LeftSacrifice, "Maximum MP: 20", [-2, 0]), Pantogram_defineProperty(_LeftSacrifice, "HP Regen Max: 10", [template_string_$item(Pantogram_templateObject3 || (Pantogram_templateObject3 = Pantogram_taggedTemplateLiteral(["red pixel potion"]))), 1]), Pantogram_defineProperty(_LeftSacrifice, "HP Regen Max: 15", [template_string_$item(Pantogram_templateObject4 || (Pantogram_templateObject4 = Pantogram_taggedTemplateLiteral(["royal jelly"]))), 1]), Pantogram_defineProperty(_LeftSacrifice, "HP Regen Max: 20", [template_string_$item(Pantogram_templateObject5 || (Pantogram_templateObject5 = Pantogram_taggedTemplateLiteral(["scented massage oil"]))), 1]), Pantogram_defineProperty(_LeftSacrifice, "MP Regen Max: 10", [template_string_$item(Pantogram_templateObject6 || (Pantogram_templateObject6 = Pantogram_taggedTemplateLiteral(["Cherry Cloaca Cola"]))), 1]), Pantogram_defineProperty(_LeftSacrifice, "MP Regen Max: 15", [template_string_$item(Pantogram_templateObject7 || (Pantogram_templateObject7 = Pantogram_taggedTemplateLiteral(["bubblin' crude"]))), 1]), Pantogram_defineProperty(_LeftSacrifice, "MP Regen Max: 20", [template_string_$item(Pantogram_templateObject8 || (Pantogram_templateObject8 = Pantogram_taggedTemplateLiteral(["glowing New Age crystal"]))), 1]), Pantogram_defineProperty(_LeftSacrifice, "Mana Cost: -3", [template_string_$item(Pantogram_templateObject9 || (Pantogram_templateObject9 = Pantogram_taggedTemplateLiteral(["baconstone"]))), 1]), _LeftSacrifice);
/**
 * Internal function used for `makePants`
 *
 * @param mod Modifier to get from our Left sacrifice
 * @returns Item-tuple to use in our URL string
 */
function getLeftSacPair(mod) {
  return LeftSacrifice[mod];
}
var MiddleSacrifice = (_MiddleSacrifice = {}, Pantogram_defineProperty(_MiddleSacrifice, "Combat Rate: -5", [-1, 0]), Pantogram_defineProperty(_MiddleSacrifice, "Combat Rate: 5", [-2, 0]), Pantogram_defineProperty(_MiddleSacrifice, "Critical Hit Percent: 10", [template_string_$item(Pantogram_templateObject10 || (Pantogram_templateObject10 = Pantogram_taggedTemplateLiteral(["hamethyst"]))), 1]), Pantogram_defineProperty(_MiddleSacrifice, "Initiative: 50", [template_string_$item(Pantogram_templateObject11 || (Pantogram_templateObject11 = Pantogram_taggedTemplateLiteral(["bar skin"]))), 1]), Pantogram_defineProperty(_MiddleSacrifice, "Familiar Weight: 10", [template_string_$item(Pantogram_templateObject12 || (Pantogram_templateObject12 = Pantogram_taggedTemplateLiteral(["lead necklace"]))), 11]), Pantogram_defineProperty(_MiddleSacrifice, "Candy Drop: 100", [template_string_$item(Pantogram_templateObject13 || (Pantogram_templateObject13 = Pantogram_taggedTemplateLiteral(["huge bowl of candy"]))), 1]), Pantogram_defineProperty(_MiddleSacrifice, "Item Drop Penalty: -10", [template_string_$item(Pantogram_templateObject14 || (Pantogram_templateObject14 = Pantogram_taggedTemplateLiteral(["sea salt crystal"]))), 11]), Pantogram_defineProperty(_MiddleSacrifice, "Fishing Skill: 5", [template_string_$item(Pantogram_templateObject15 || (Pantogram_templateObject15 = Pantogram_taggedTemplateLiteral(["wriggling worm"]))), 1]), Pantogram_defineProperty(_MiddleSacrifice, "Pool Skill: 5", [template_string_$item(Pantogram_templateObject16 || (Pantogram_templateObject16 = Pantogram_taggedTemplateLiteral(["8-ball"]))), 15]), Pantogram_defineProperty(_MiddleSacrifice, "Avatar: Purple", [template_string_$item(Pantogram_templateObject17 || (Pantogram_templateObject17 = Pantogram_taggedTemplateLiteral(["moxie weed"]))), 99]), Pantogram_defineProperty(_MiddleSacrifice, "Drops Items: true", [template_string_$item(Pantogram_templateObject18 || (Pantogram_templateObject18 = Pantogram_taggedTemplateLiteral(["ten-leaf clover"]))), 1]), _MiddleSacrifice);
/**
 * Internal function used for `makePants`
 *
 * @param mod Modifier to get from our Middle sacrifice
 * @returns Item-tuple to use in our URL string
 */
function getMiddleSacPair(mod) {
  return MiddleSacrifice[mod];
}
var RightSacrifice = (_RightSacrifice = {}, Pantogram_defineProperty(_RightSacrifice, "Weapon Damage: 20", [-1, 0]), Pantogram_defineProperty(_RightSacrifice, "Spell Damage Percent: 20", [-2, 0]), Pantogram_defineProperty(_RightSacrifice, "Meat Drop: 30", [template_string_$item(Pantogram_templateObject19 || (Pantogram_templateObject19 = Pantogram_taggedTemplateLiteral(["taco shell"]))), 1]), Pantogram_defineProperty(_RightSacrifice, "Meat Drop: 60", [template_string_$item(Pantogram_templateObject20 || (Pantogram_templateObject20 = Pantogram_taggedTemplateLiteral(["porquoise"]))), 1]), Pantogram_defineProperty(_RightSacrifice, "Item Drop: 15", [template_string_$item(Pantogram_templateObject21 || (Pantogram_templateObject21 = Pantogram_taggedTemplateLiteral(["fairy gravy boat"]))), 1]), Pantogram_defineProperty(_RightSacrifice, "Item Drop: 30", [template_string_$item(Pantogram_templateObject22 || (Pantogram_templateObject22 = Pantogram_taggedTemplateLiteral(["tiny dancer"]))), 1]), Pantogram_defineProperty(_RightSacrifice, "Muscle Experience: 3", [template_string_$item(Pantogram_templateObject23 || (Pantogram_templateObject23 = Pantogram_taggedTemplateLiteral(["Knob Goblin firecracker"]))), 3]), Pantogram_defineProperty(_RightSacrifice, "Mysticality Experience: 3", [template_string_$item(Pantogram_templateObject24 || (Pantogram_templateObject24 = Pantogram_taggedTemplateLiteral(["razor-sharp can lid"]))), 3]), Pantogram_defineProperty(_RightSacrifice, "Moxie Experience: 3", [template_string_$item(Pantogram_templateObject25 || (Pantogram_templateObject25 = Pantogram_taggedTemplateLiteral(["spider web"]))), 3]), Pantogram_defineProperty(_RightSacrifice, "Muscle Experience Percent: 25", [template_string_$item(Pantogram_templateObject26 || (Pantogram_templateObject26 = Pantogram_taggedTemplateLiteral(["synthetic marrow"]))), 5]), Pantogram_defineProperty(_RightSacrifice, "Mysticality Experience Percent: 25", [template_string_$item(Pantogram_templateObject27 || (Pantogram_templateObject27 = Pantogram_taggedTemplateLiteral(["haunted battery"]))), 5]), Pantogram_defineProperty(_RightSacrifice, "Moxie Experience Percent: 25", [template_string_$item(Pantogram_templateObject28 || (Pantogram_templateObject28 = Pantogram_taggedTemplateLiteral(["the funk"]))), 5]), _RightSacrifice);
/**
 * Internal function used for `makePants`
 *
 * @param mod Modifier to get from our Right sacrifice
 * @returns Item-tuple to use in our URL string
 */
function getRightSacPair(mod) {
  return RightSacrifice[mod];
}
/**
 * Finds the item requirements for a particular pair of pants.
 *
 * @param modifiers An object consisting of the modifiers you want on your pants. For modifiers repeated across a particular sacrifice, use a tuple of that modifier and its value.
 * @returns A map of the items you need to make these pants and the quantities needed.
 */
function findRequirements(modifiers) {
  var leftSac = modifiers.leftSac,
    rightSac = modifiers.rightSac,
    middleSac = modifiers.middleSac;
  var returnValue = new Map();
  if (leftSac) {
    var _getLeftSacPair = getLeftSacPair(leftSac),
      _getLeftSacPair2 = Pantogram_slicedToArray(_getLeftSacPair, 2),
      sacrifice = _getLeftSacPair2[0],
      quantity = _getLeftSacPair2[1];
    if (sacrifice instanceof external_kolmafia_namespaceObject.Item) {
      returnValue.set(sacrifice, quantity);
    }
  }
  if (rightSac) {
    var _getRightSacPair = getRightSacPair(rightSac),
      _getRightSacPair2 = Pantogram_slicedToArray(_getRightSacPair, 2),
      _sacrifice = _getRightSacPair2[0],
      _quantity = _getRightSacPair2[1];
    if (_sacrifice instanceof external_kolmafia_namespaceObject.Item) {
      returnValue.set(_sacrifice, _quantity);
    }
  }
  if (middleSac) {
    var _getMiddleSacPair = getMiddleSacPair(middleSac),
      _getMiddleSacPair2 = Pantogram_slicedToArray(_getMiddleSacPair, 2),
      _sacrifice2 = _getMiddleSacPair2[0],
      _quantity2 = _getMiddleSacPair2[1];
    if (_sacrifice2 instanceof external_kolmafia_namespaceObject.Item) {
      returnValue.set(_sacrifice2, _quantity2);
    }
  }
  return returnValue;
}
/**
 * Internal function used in `makePants`
 *
 * @param pair Tuple consisting of an item or number and another number
 * @returns URL parameter associated with the tuple
 */
function sacrificePairToURL(pair) {
  var _pair = Pantogram_slicedToArray(pair, 2),
    rawSacrifice = _pair[0],
    quantity = _pair[1];
  var sacrifice = rawSacrifice instanceof external_kolmafia_namespaceObject.Item ? rawSacrifice.id : rawSacrifice;
  return "".concat(sacrifice, ",").concat(quantity);
}
/**
 * Makes a pair of pants with the given modifiers
 *
 * @param alignment The stat you'd like your pants to improve. Moxie, Mysticality, or Muscle
 * @param element The element you'd like your pants to provide resistance for
 * @param leftSac The modifier you'd like to get from your leftmost sacrifice in Pantagramming.
 * @param middleSac The modifier you'd like to get from your middle sacrifice in Pantagramming.
 * @param rightSac The modifier you'd like to get from your rightmost sacrifice in Pantagramming.
 * @returns Whether or not you successfully created a pair of pants. False if you don't own the pantogram or if you already have pantogram pants.
 */
function makePants(alignment, element, leftSac, middleSac, rightSac) {
  if (lib_have(pants) || !lib_have(pantogram)) return false;
  var requirements = findRequirements({
    alignment: alignment,
    element: element,
    leftSac: leftSac,
    rightSac: rightSac,
    middleSac: middleSac
  });
  if (Array.from(requirements.entries()).some(_ref => {
    var _ref2 = Pantogram_slicedToArray(_ref, 2),
      item = _ref2[0],
      quantity = _ref2[1];
    return !lib_have(item, quantity);
  })) {
    return false;
  }
  var s1 = sacrificePairToURL(getLeftSacPair(leftSac));
  var s2 = sacrificePairToURL(getRightSacPair(rightSac));
  var s3 = sacrificePairToURL(getMiddleSacPair(middleSac));
  var url = "choice.php?whichchoice=1270&pwd&option=1&m=".concat(Alignment[alignment], "&e=").concat(Element[element], "&s1=").concat(s1, "&s2=").concat(s2, "&s3=").concat(s3);
  directlyUse(pantogram);
  (0,external_kolmafia_namespaceObject.visitUrl)(url);
  return lib_have(pants);
}
/**
 * Creates a pair of pants from a Pants object.
 *
 * @param pants An object consisting of the modifiers you'd like the pants to give you.
 * @returns Whether or not you successfully created a pair of pants. False if you don't own the pantogram or if you already have pantogram pants.
 */
function makePantsFromObject(pants) {
  return makePants(pants.alignment, pants.element, pants.leftSac, pants.middleSac, pants.rightSac);
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/session.js
var session_templateObject, session_templateObject2, session_templateObject3, session_templateObject4, session_templateObject5, session_templateObject6, session_templateObject7, session_templateObject8, session_templateObject9, session_templateObject10, session_templateObject11, session_templateObject12, session_templateObject13, session_templateObject14, session_templateObject15, session_templateObject16, session_templateObject17, session_templateObject18, session_templateObject19, session_templateObject20, session_templateObject21, session_templateObject22, session_templateObject23, session_templateObject24, session_templateObject25, session_templateObject26, session_templateObject27, session_templateObject28, session_templateObject29, session_templateObject30, session_templateObject31, session_templateObject32, session_templateObject33;
function session_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function session_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, session_toPropertyKey(descriptor.key), descriptor); } }
function session_createClass(Constructor, protoProps, staticProps) { if (protoProps) session_defineProperties(Constructor.prototype, protoProps); if (staticProps) session_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function session_defineProperty(obj, key, value) { key = session_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function session_toPropertyKey(arg) { var key = session_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function session_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function session_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = session_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function session_slicedToArray(arr, i) { return session_arrayWithHoles(arr) || session_iterableToArrayLimit(arr, i) || session_unsupportedIterableToArray(arr, i) || session_nonIterableRest(); }
function session_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function session_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function session_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function session_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function session_toConsumableArray(arr) { return session_arrayWithoutHoles(arr) || session_iterableToArray(arr) || session_unsupportedIterableToArray(arr) || session_nonIterableSpread(); }
function session_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function session_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return session_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return session_arrayLikeToArray(o, minLen); }
function session_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function session_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return session_arrayLikeToArray(arr); }
function session_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




/**
 * Return a mapping of the session items, mapping foldable items to a single of their forms
 *
 * @param sessionOnly should closet, DC, and storage be ignored for the session calculation
 * @returns the item session results, with foldables mapped to a single of their folding forms
 */
function mySessionItemsWrapper() {
  var sessionOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var manyToOne = (primary, mapped) => mapped.map(target => [target, primary]);
  var foldable = item => manyToOne(item, getFoldGroup(item));
  var itemMappings = new Map([].concat(session_toConsumableArray(foldable(template_string_$item(session_templateObject || (session_templateObject = session_taggedTemplateLiteral(["liar's pants"]))))), session_toConsumableArray(foldable(template_string_$item(session_templateObject2 || (session_templateObject2 = session_taggedTemplateLiteral(["ice pick"]))))), session_toConsumableArray(manyToOne(template_string_$item(session_templateObject3 || (session_templateObject3 = session_taggedTemplateLiteral(["Spooky Putty sheet"]))), [template_string_$item(session_templateObject4 || (session_templateObject4 = session_taggedTemplateLiteral(["Spooky Putty monster"])))].concat(session_toConsumableArray(getFoldGroup(template_string_$item(session_templateObject5 || (session_templateObject5 = session_taggedTemplateLiteral(["Spooky Putty sheet"])))))))), session_toConsumableArray(foldable(template_string_$item(session_templateObject6 || (session_templateObject6 = session_taggedTemplateLiteral(["stinky cheese sword"]))))), session_toConsumableArray(foldable(template_string_$item(session_templateObject7 || (session_templateObject7 = session_taggedTemplateLiteral(["naughty paper shuriken"]))))), session_toConsumableArray(foldable(template_string_$item(session_templateObject8 || (session_templateObject8 = session_taggedTemplateLiteral(["Loathing Legion knife"]))))), session_toConsumableArray(foldable(template_string_$item(session_templateObject9 || (session_templateObject9 = session_taggedTemplateLiteral(["deceased crimbo tree"]))))), session_toConsumableArray(foldable(template_string_$item(session_templateObject10 || (session_templateObject10 = session_taggedTemplateLiteral(["makeshift turban"]))))), session_toConsumableArray(foldable(template_string_$item(session_templateObject11 || (session_templateObject11 = session_taggedTemplateLiteral(["turtle wax shield"]))))), session_toConsumableArray(foldable(template_string_$item(session_templateObject12 || (session_templateObject12 = session_taggedTemplateLiteral(["metallic foil bow"]))))), session_toConsumableArray(foldable(template_string_$item(session_templateObject13 || (session_templateObject13 = session_taggedTemplateLiteral(["ironic moustache"]))))), session_toConsumableArray(foldable(template_string_$item(session_templateObject14 || (session_templateObject14 = session_taggedTemplateLiteral(["bugged balaclava"]))))), session_toConsumableArray(foldable(template_string_$item(session_templateObject15 || (session_templateObject15 = session_taggedTemplateLiteral(["toggle switch (Bartend)"]))))), session_toConsumableArray(foldable(template_string_$item(session_templateObject16 || (session_templateObject16 = session_taggedTemplateLiteral(["mushroom cap"]))))), session_toConsumableArray(manyToOne(template_string_$item(session_templateObject17 || (session_templateObject17 = session_taggedTemplateLiteral(["can of Rain-Doh"]))), template_string_$items(session_templateObject18 || (session_templateObject18 = session_taggedTemplateLiteral(["empty Rain-Doh can"]))))), session_toConsumableArray(manyToOne(template_string_$item(session_templateObject19 || (session_templateObject19 = session_taggedTemplateLiteral(["meteorite fragment"]))), template_string_$items(session_templateObject20 || (session_templateObject20 = session_taggedTemplateLiteral(["meteorite earring, meteorite necklace, meteorite ring"]))))), session_toConsumableArray(manyToOne(template_string_$item(session_templateObject21 || (session_templateObject21 = session_taggedTemplateLiteral(["Sneaky Pete's leather jacket"]))), template_string_$items(session_templateObject22 || (session_templateObject22 = session_taggedTemplateLiteral(["Sneaky Pete's leather jacket (collar popped)"]))))), session_toConsumableArray(manyToOne(template_string_$item(session_templateObject23 || (session_templateObject23 = session_taggedTemplateLiteral(["Boris's Helm"]))), template_string_$items(session_templateObject24 || (session_templateObject24 = session_taggedTemplateLiteral(["Boris's Helm (askew)"]))))), session_toConsumableArray(manyToOne(template_string_$item(session_templateObject25 || (session_templateObject25 = session_taggedTemplateLiteral(["Jarlsberg's pan"]))), template_string_$items(session_templateObject26 || (session_templateObject26 = session_taggedTemplateLiteral(["Jarlsberg's pan (Cosmic portal mode)"]))))), session_toConsumableArray(manyToOne(template_string_$item(session_templateObject27 || (session_templateObject27 = session_taggedTemplateLiteral(["tiny plastic sword"]))), template_string_$items(session_templateObject28 || (session_templateObject28 = session_taggedTemplateLiteral(["grogtini, bodyslam, dirty martini, vesper, cherry bomb, sangria del diablo"]))))), session_toConsumableArray(manyToOne(template_string_$item(session_templateObject29 || (session_templateObject29 = session_taggedTemplateLiteral(["earthenware muffin tin"]))), template_string_$items(session_templateObject30 || (session_templateObject30 = session_taggedTemplateLiteral(["blueberry muffin, bran muffin, chocolate chip muffin"]))))), session_toConsumableArray(manyToOne(template_string_$item(session_templateObject31 || (session_templateObject31 = session_taggedTemplateLiteral(["ChibiBuddy\u2122 (on)"]))), template_string_$items(session_templateObject32 || (session_templateObject32 = session_taggedTemplateLiteral(["ChibiBuddy\u2122 (off)"])))))));
  var inventory = new Map();
  var invLocations = sessionOnly ? [external_kolmafia_namespaceObject.mySessionItems] : [external_kolmafia_namespaceObject.mySessionItems, external_kolmafia_namespaceObject.getCloset, external_kolmafia_namespaceObject.getDisplay, external_kolmafia_namespaceObject.getStorage];
  if (!sessionOnly) {
    for (var _i = 0, _Object$entries = Object.entries((0,external_kolmafia_namespaceObject.getCampground)()); _i < _Object$entries.length; _i++) {
      var _itemMappings$get, _inventory$get;
      var _Object$entries$_i = session_slicedToArray(_Object$entries[_i], 2),
        itemStr = _Object$entries$_i[0],
        quantity = _Object$entries$_i[1];
      if (!quantity) continue;
      var item = (0,external_kolmafia_namespaceObject.toItem)(itemStr);
      if (item === template_string_$item(session_templateObject33 || (session_templateObject33 = session_taggedTemplateLiteral(["big rock"])))) continue; // Used to represent an empty house slot
      var mappedItem = (_itemMappings$get = itemMappings.get(item)) !== null && _itemMappings$get !== void 0 ? _itemMappings$get : item;
      inventory.set(mappedItem, quantity + ((_inventory$get = inventory.get(mappedItem)) !== null && _inventory$get !== void 0 ? _inventory$get : 0));
    }
  }
  for (var _i2 = 0, _invLocations = invLocations; _i2 < _invLocations.length; _i2++) {
    var inventoryFunc = _invLocations[_i2];
    for (var _i3 = 0, _Object$entries2 = Object.entries(inventoryFunc()); _i3 < _Object$entries2.length; _i3++) {
      var _itemMappings$get2, _inventory$get2;
      var _Object$entries2$_i = session_slicedToArray(_Object$entries2[_i3], 2),
        _itemStr = _Object$entries2$_i[0],
        _quantity = _Object$entries2$_i[1];
      if (!_quantity) continue;
      var _item = (0,external_kolmafia_namespaceObject.toItem)(_itemStr);
      var _mappedItem = (_itemMappings$get2 = itemMappings.get(_item)) !== null && _itemMappings$get2 !== void 0 ? _itemMappings$get2 : _item;
      inventory.set(_mappedItem, _quantity + ((_inventory$get2 = inventory.get(_mappedItem)) !== null && _inventory$get2 !== void 0 ? _inventory$get2 : 0));
      if (inventory.get(_mappedItem) === 0) inventory.delete(_mappedItem);
    }
  }
  return inventory;
}
/**
 * Perform a binary element-wise operation on two inventories
 *
 * @param a The LHS inventory to perform the operation on
 * @param b The RHS inventory to perform the operation on
 * @param op an operator to compute between the sets
 * @returns a new map representing the combined inventories
 */
function inventoryOperation(a, b, op) {
  // return every entry that is in a and not in b
  var difference = new Map();
  var _iterator = session_createForOfIteratorHelper(new Set([].concat(session_toConsumableArray(a.keys()), session_toConsumableArray(b.keys())))),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _a$get, _b$get;
      var item = _step.value;
      difference.set(item, op((_a$get = a.get(item)) !== null && _a$get !== void 0 ? _a$get : 0, (_b$get = b.get(item)) !== null && _b$get !== void 0 ? _b$get : 0));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var diffEntries = session_toConsumableArray(difference.entries());
  return new Map(diffEntries.filter(_ref => {
    var _ref2 = session_slicedToArray(_ref, 2),
      value = _ref2[1];
    return value !== 0;
  }));
}
/**
 * A wrapper around tracking items and meat gained from this session
 * Smartly handles foldables being added/removed based on their state
 * Provides operations to add sessions and subtract Sessions so you can isolate the value of each Session using a baseline
 *
 * @member meat the raw meat associated with this Session
 * @member items a map representing the items gained/lost during this Session
 */
var Session = /*#__PURE__*/function () {
  /**
   * Construct a new session
   *
   * @param meat the amount of meat associated with this session
   * @param items the items associated with this session
   * @param totalTurns the number of turns associated with this session
   */
  function Session(meat, items, totalTurns) {
    session_classCallCheck(this, Session);
    session_defineProperty(this, "meat", void 0);
    session_defineProperty(this, "items", void 0);
    session_defineProperty(this, "totalTurns", void 0);
    this.meat = meat;
    this.items = items;
    this.totalTurns = totalTurns;
  }
  /**
   * Register session results that do not get tracked natively
   *
   * @param target either the Item or a string saying "meat" of what quantity to modify
   * @param quantity How much to modify the tracked amount by
   */
  session_createClass(Session, [{
    key: "register",
    value: function register(target, quantity) {
      if (target === "meat") {
        this.meat += quantity;
      } else {
        var _this$items$get;
        this.items.set(target, ((_this$items$get = this.items.get(target)) !== null && _this$items$get !== void 0 ? _this$items$get : 0) + quantity);
      }
    }
    /**
     * Value this session
     *
     * @param itemValue a function that, when given an item, will give a meat value of the item
     * @returns ItemResult with the full value of this session given the input function
     */
  }, {
    key: "value",
    value: function value(itemValue) {
      // TODO: add garbo specific pricing (sugar equipment for synth, etc.)
      var turns = this.totalTurns;
      var meat = Math.floor(this.meat);
      var itemDetails = session_toConsumableArray(this.items.entries()).map(_ref3 => {
        var _ref4 = session_slicedToArray(_ref3, 2),
          item = _ref4[0],
          quantity = _ref4[1];
        return {
          item,
          quantity,
          // only run itemValue if quantity is nonzero
          value: quantity ? itemValue(item) * quantity : 0
        };
      });
      var items = Math.floor(sum(itemDetails, "value"));
      return {
        meat,
        items,
        total: meat + items,
        itemDetails,
        turns
      };
    }
    /**
     * Subtract the contents of another session from this one, removing any items that have a resulting quantity of 0
     *  (this will ignore elements in b but not in a)
     *
     * @param other the session from which to pull values to remove from this session
     * @returns a new session representing the difference between this session and the other session
     */
  }, {
    key: "diff",
    value: function diff(other) {
      return new Session(this.meat - other.meat, inventoryOperation(this.items, other.items, (a, b) => a - b), this.totalTurns - other.totalTurns);
    }
    /**
     * Subtract the contents of snasphot b from session a, removing any items that have a resulting quantity of 0
     *  (this will ignore elements in b but not in a)
     *
     * @param a the session from which to subtract elements
     * @param b the session from which to add elements
     * @returns a new session representing the difference between a and b
     */
  }, {
    key: "add",
    value:
    /**
     * Generate a new session combining multiple sessions together
     *
     * @param other the session from which to add elements to this set
     * @returns a new session representing the addition of other to this
     */
    function add(other) {
      return new Session(this.meat + other.meat, inventoryOperation(this.items, other.items, (a, b) => a + b), this.totalTurns + other.totalTurns);
    }
    /**
     * Combine the contents of sessions
     *
     * @param sessions the set of sessions to combine together
     * @returns a new session representing the difference between a and b
     */
  }, {
    key: "toFile",
    value:
    /**
     * Export this session to a file in the data/ directory. Conventionally this file should end in ".json"
     *
     * @param filename The file into which to export
     */
    function toFile(filename) {
      var val = {
        meat: this.meat,
        items: Object.fromEntries(this.items),
        totalTurns: this.totalTurns
      };
      (0,external_kolmafia_namespaceObject.bufferToFile)(JSON.stringify(val), Session.getFilepath(filename));
    }
    /**
     * Import a session from a file in the data/ directory. Conventionally the file should end in ".json"
     *
     * @param filename The file from which to import
     * @returns the session represented by the file
     */
  }, {
    key: "computeMPA",
    value:
    /**
     * @param other the session to diff against this session when computing MPA
     * @param options options for computing MPA
     * @param options.value a function to compute the meat value of a given item
     * @param options.isOutlier a function to compute if an item is considered an outlier. By default, no items are outliers
     * @param options.excludeValue meat values to exclude when calculating specific portions of the MPA
     * @param options.excludeValue.meat how much meat to exclude when calculating the meat portion of MPA
     * @param options.excludeValue.item how much meat to exclude when calculating hte item portion of MPA
     * @returns an analysis of the effective MPA for the given session
     */
    function computeMPA(other, options) {
      return Session.computeMPA(this, other, options);
    }
  }], [{
    key: "diff",
    value: function diff(a, b) {
      return a.diff(b);
    }
  }, {
    key: "add",
    value: function add() {
      for (var _len = arguments.length, sessions = new Array(_len), _key = 0; _key < _len; _key++) {
        sessions[_key] = arguments[_key];
      }
      return sessions.reduce((previousSession, currentSession) => previousSession.add(currentSession));
    }
  }, {
    key: "getFilepath",
    value: function getFilepath(filename) {
      return filename.endsWith(".json") ? filename : "snapshots/".concat((0,external_kolmafia_namespaceObject.myName)(), "/").concat((0,external_kolmafia_namespaceObject.todayToString)(), "_").concat(filename, ".json");
    }
  }, {
    key: "fromFile",
    value: function fromFile(filename) {
      var fileValue = (0,external_kolmafia_namespaceObject.fileToBuffer)(Session.getFilepath(filename));
      // fileToBuffer returns empty string for files that don't exist
      if (fileValue.length > 0) {
        var _val$totalTurns;
        var val = JSON.parse(fileValue);
        var parsedItems = Object.entries(val.items).map(_ref5 => {
          var _ref6 = session_slicedToArray(_ref5, 2),
            itemStr = _ref6[0],
            quantity = _ref6[1];
          return [(0,external_kolmafia_namespaceObject.toItem)(itemStr), quantity];
        });
        return new Session(val.meat, new Map(parsedItems), (_val$totalTurns = val.totalTurns) !== null && _val$totalTurns !== void 0 ? _val$totalTurns : 0);
      } else {
        // if the file does not exist, return an empty session
        return new Session(0, new Map(), 0);
      }
    }
    /**
     * Return the meat and items for the current session
     *
     * @param sessionOnly should closet, DC, and storage be ignored for the session calculation
     * @returns current session
     */
  }, {
    key: "current",
    value: function current() {
      var sessionOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var meat = sessionOnly ? [external_kolmafia_namespaceObject.mySessionMeat] : [external_kolmafia_namespaceObject.mySessionMeat, external_kolmafia_namespaceObject.myClosetMeat, external_kolmafia_namespaceObject.myStorageMeat];
      return new Session(sum(meat, f => f()), mySessionItemsWrapper(sessionOnly), (0,external_kolmafia_namespaceObject.totalTurnsPlayed)());
    }
    /**
     * @param baseline the base session to use when computing MPA
     * @param full the full session to use when computing MPA
     * @param options options for computing MPA
     * @param options.value a function to compute the meat value of a given item
     * @param options.isOutlier a function to compute if an item is considered an outlier. By default, no items are outliers
     * @param options.excludeValue meat values to exclude when calculating specific portions of the MPA
     * @param options.excludeValue.meat how much meat to exclude when calculating the meat portion of MPA
     * @param options.excludeValue.item how much meat to exclude when calculating hte item portion of MPA
     * @returns an analysis of the effective MPA for the given session
     */
  }, {
    key: "computeMPA",
    value: function computeMPA(baseline, full, options) {
      var _options$excludeValue, _excludeValue$meat, _excludeValue$item;
      var value = options.value;
      var excludeValue = (_options$excludeValue = options.excludeValue) !== null && _options$excludeValue !== void 0 ? _options$excludeValue : {
        meat: 0,
        item: 0
      };
      var isOutlier = options.isOutlier;
      var result = full.diff(baseline).value(value);
      var meatValue = result.meat - ((_excludeValue$meat = excludeValue.meat) !== null && _excludeValue$meat !== void 0 ? _excludeValue$meat : 0);
      var outlierItems = isOutlier ? result.itemDetails.filter(isOutlier) : [];
      var outliersValue = sum(outlierItems, detail => detail.value);
      var itemValue = result.items - outliersValue - ((_excludeValue$item = excludeValue.item) !== null && _excludeValue$item !== void 0 ? _excludeValue$item : 0);
      var turns = result.turns;
      return {
        mpa: {
          effective: (meatValue + itemValue) / turns,
          total: (meatValue + itemValue + outliersValue) / turns,
          meat: meatValue / turns,
          items: itemValue / turns
        },
        values: {
          effective: meatValue + itemValue,
          total: meatValue + itemValue + outliersValue,
          meat: meatValue,
          items: itemValue
        },
        outlierItems: outlierItems,
        turns: turns
      };
    }
  }]);
  return Session;
}();
;// CONCATENATED MODULE: ./src/engine/profits.ts
var profits_templateObject, profits_templateObject2, profits_templateObject3, profits_templateObject4, profits_templateObject5, profits_templateObject6, profits_templateObject7, profits_templateObject8, profits_templateObject9, profits_templateObject10, profits_templateObject11, profits_templateObject12, profits_templateObject13, profits_templateObject14, profits_templateObject15, profits_templateObject16, profits_templateObject17, profits_templateObject18, profits_templateObject19, profits_templateObject20, profits_templateObject21, profits_templateObject22, profits_templateObject23, profits_templateObject24, profits_templateObject25, profits_templateObject26, profits_templateObject27, profits_templateObject28, profits_templateObject29, profits_templateObject30, profits_templateObject31, profits_templateObject32, profits_templateObject33, profits_templateObject34, profits_templateObject35, profits_templateObject36, profits_templateObject37, profits_templateObject38, profits_templateObject39, profits_templateObject40, profits_templateObject41, profits_templateObject42, profits_templateObject43, profits_templateObject44, profits_templateObject45, profits_templateObject46, profits_templateObject47, profits_templateObject48, profits_templateObject49, profits_templateObject50, profits_templateObject51, profits_templateObject52, profits_templateObject53, profits_templateObject54, profits_templateObject55, profits_templateObject56, profits_templateObject57, profits_templateObject58, profits_templateObject59, profits_templateObject60, profits_templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77;
function profits_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function profits_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, profits_toPropertyKey(descriptor.key), descriptor); } }
function profits_createClass(Constructor, protoProps, staticProps) { if (protoProps) profits_defineProperties(Constructor.prototype, protoProps); if (staticProps) profits_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function profits_defineProperty(obj, key, value) { key = profits_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function profits_toPropertyKey(arg) { var key = profits_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function profits_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function profits_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function profits_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = profits_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function profits_slicedToArray(arr, i) { return profits_arrayWithHoles(arr) || profits_iterableToArrayLimit(arr, i) || profits_unsupportedIterableToArray(arr, i) || profits_nonIterableRest(); }
function profits_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function profits_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function profits_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function profits_toConsumableArray(arr) { return profits_arrayWithoutHoles(arr) || profits_iterableToArray(arr) || profits_unsupportedIterableToArray(arr) || profits_nonIterableSpread(); }
function profits_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function profits_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return profits_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return profits_arrayLikeToArray(o, minLen); }
function profits_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function profits_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return profits_arrayLikeToArray(arr); }
function profits_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


function currency() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }
  var unitCost = items.map(i => {
    var coinmaster = external_kolmafia_namespaceObject.Coinmaster.all().find(c => (0,external_kolmafia_namespaceObject.sellPrice)(c, i) > 0);
    if (!coinmaster) {
      throw "Invalid coinmaster item ".concat(i);
    } else {
      return [i, (0,external_kolmafia_namespaceObject.sellPrice)(coinmaster, i)];
    }
  });
  return () => Math.max.apply(Math, profits_toConsumableArray(unitCost.map(_ref => {
    var _ref2 = profits_slicedToArray(_ref, 2),
      item = _ref2[0],
      cost = _ref2[1];
    return garboValue(item) / cost;
  })));
}
function complexCandy() {
  var candies = external_kolmafia_namespaceObject.Item.all().filter(i => i.candyType === "complex");
  var candyLookup = [[], [], [], [], []];
  var _iterator = profits_createForOfIteratorHelper(candies),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var candy = _step.value;
      var id = (0,external_kolmafia_namespaceObject.toInt)(candy) % 5;
      if (candy.tradeable) {
        candyLookup[id].push(candy);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var candyIdPrices = candies.filter(i => !i.tradeable).map(i => [i, () => Math.min.apply(Math, profits_toConsumableArray(candyLookup[(0,external_kolmafia_namespaceObject.toInt)(i) % 5].map(i => garboValue(i))))]);
  return candyIdPrices;
}
var specialValueLookup = new Map([[template_string_$item(profits_templateObject || (profits_templateObject = profits_taggedTemplateLiteral(["Freddy Kruegerand"]))), currency.apply(void 0, profits_toConsumableArray(template_string_$items(profits_templateObject2 || (profits_templateObject2 = profits_taggedTemplateLiteral(["bottle of Bloodweiser, electric Kool-Aid, Dreadsylvanian skeleton key"])))))], [template_string_$item(profits_templateObject3 || (profits_templateObject3 = profits_taggedTemplateLiteral(["Beach Buck"]))), currency(template_string_$item(profits_templateObject4 || (profits_templateObject4 = profits_taggedTemplateLiteral(["one-day ticket to Spring Break Beach"]))))], [template_string_$item(profits_templateObject5 || (profits_templateObject5 = profits_taggedTemplateLiteral(["Coinspiracy"]))), currency.apply(void 0, profits_toConsumableArray(template_string_$items(profits_templateObject6 || (profits_templateObject6 = profits_taggedTemplateLiteral(["Merc Core deployment orders, karma shawarma"])))))], [template_string_$item(profits_templateObject7 || (profits_templateObject7 = profits_taggedTemplateLiteral(["FunFunds\u2122"]))), currency(template_string_$item(profits_templateObject8 || (profits_templateObject8 = profits_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"]))))], [template_string_$item(profits_templateObject9 || (profits_templateObject9 = profits_taggedTemplateLiteral(["Volcoino"]))), currency(template_string_$item(profits_templateObject10 || (profits_templateObject10 = profits_taggedTemplateLiteral(["one-day ticket to That 70s Volcano"]))))], [template_string_$item(profits_templateObject11 || (profits_templateObject11 = profits_taggedTemplateLiteral(["Wal-Mart gift certificate"]))), currency(template_string_$item(profits_templateObject12 || (profits_templateObject12 = profits_taggedTemplateLiteral(["one-day ticket to The Glaciest"]))))], [template_string_$item(profits_templateObject13 || (profits_templateObject13 = profits_taggedTemplateLiteral(["Rubee\u2122"]))), currency(template_string_$item(profits_templateObject14 || (profits_templateObject14 = profits_taggedTemplateLiteral(["FantasyRealm guest pass"]))))], [template_string_$item(profits_templateObject15 || (profits_templateObject15 = profits_taggedTemplateLiteral(["Guzzlrbuck"]))), currency(template_string_$item(profits_templateObject16 || (profits_templateObject16 = profits_taggedTemplateLiteral(["Never Don't Stop Not Striving"]))))]].concat(profits_toConsumableArray(complexCandy()), [[template_string_$item(profits_templateObject17 || (profits_templateObject17 = profits_taggedTemplateLiteral(["Merc Core deployment orders"]))), () => garboValue(template_string_$item(profits_templateObject18 || (profits_templateObject18 = profits_taggedTemplateLiteral(["one-day ticket to Conspiracy Island"]))))], [template_string_$item(profits_templateObject19 || (profits_templateObject19 = profits_taggedTemplateLiteral(["free-range mushroom"]))), () => 3 * Math.max(garboValue(template_string_$item(profits_templateObject20 || (profits_templateObject20 = profits_taggedTemplateLiteral(["mushroom tea"])))) - garboValue(template_string_$item(profits_templateObject21 || (profits_templateObject21 = profits_taggedTemplateLiteral(["soda water"])))), garboValue(template_string_$item(profits_templateObject22 || (profits_templateObject22 = profits_taggedTemplateLiteral(["mushroom whiskey"])))) - garboValue(template_string_$item(profits_templateObject23 || (profits_templateObject23 = profits_taggedTemplateLiteral(["fermenting powder"])))), garboValue(template_string_$item(profits_templateObject24 || (profits_templateObject24 = profits_taggedTemplateLiteral(["mushroom filet"])))))], [template_string_$item(profits_templateObject25 || (profits_templateObject25 = profits_taggedTemplateLiteral(["little firkin"]))), () => garboAverageValue.apply(void 0, profits_toConsumableArray(template_string_$items(profits_templateObject26 || (profits_templateObject26 = profits_taggedTemplateLiteral(["martini, screwdriver, strawberry daiquiri, margarita, vodka martini, tequila sunrise, bottle of Amontillado, barrel-aged martini, barrel gun"])))))], [template_string_$item(profits_templateObject27 || (profits_templateObject27 = profits_taggedTemplateLiteral(["normal barrel"]))), () => garboAverageValue.apply(void 0, profits_toConsumableArray(template_string_$items(profits_templateObject28 || (profits_templateObject28 = profits_taggedTemplateLiteral(["a little sump'm sump'm, pink pony, rockin' wagon, roll in the hay, slip 'n' slide, slap and tickle"])))))], [template_string_$item(profits_templateObject29 || (profits_templateObject29 = profits_taggedTemplateLiteral(["big tun"]))), () => garboAverageValue.apply(void 0, profits_toConsumableArray(template_string_$items(profits_templateObject30 || (profits_templateObject30 = profits_taggedTemplateLiteral(["gibson, gin and tonic, mimosette, tequila sunset, vodka and tonic, zmobie"])))))], [template_string_$item(profits_templateObject31 || (profits_templateObject31 = profits_taggedTemplateLiteral(["weathered barrel"]))), () => garboAverageValue.apply(void 0, profits_toConsumableArray(template_string_$items(profits_templateObject32 || (profits_templateObject32 = profits_taggedTemplateLiteral(["bean burrito, enchanted bean burrito, jumping bean burrito"])))))], [template_string_$item(profits_templateObject33 || (profits_templateObject33 = profits_taggedTemplateLiteral(["dusty barrel"]))), () => garboAverageValue.apply(void 0, profits_toConsumableArray(template_string_$items(profits_templateObject34 || (profits_templateObject34 = profits_taggedTemplateLiteral(["spicy bean burrito, spicy enchanted bean burrito, spicy jumping bean burrito"])))))], [template_string_$item(profits_templateObject35 || (profits_templateObject35 = profits_taggedTemplateLiteral(["disintegrating barrel"]))), () => garboAverageValue.apply(void 0, profits_toConsumableArray(template_string_$items(profits_templateObject36 || (profits_templateObject36 = profits_taggedTemplateLiteral(["insanely spicy bean burrito, insanely spicy enchanted bean burrito, insanely spicy jumping bean burrito"])))))], [template_string_$item(profits_templateObject37 || (profits_templateObject37 = profits_taggedTemplateLiteral(["moist barrel"]))), () => garboAverageValue.apply(void 0, profits_toConsumableArray(template_string_$items(profits_templateObject38 || (profits_templateObject38 = profits_taggedTemplateLiteral(["cast, concentrated magicalness pill, enchanted barbell, giant moxie weed, Mountain Stream soda"])))))], [template_string_$item(profits_templateObject39 || (profits_templateObject39 = profits_taggedTemplateLiteral(["rotting barrel"]))), () => garboAverageValue.apply(void 0, profits_toConsumableArray(template_string_$items(profits_templateObject40 || (profits_templateObject40 = profits_taggedTemplateLiteral(["Doc Galaktik's Ailment Ointment, extra-strength strongness elixir, jug-o-magicalness, Marquis de Poivre soda, suntan lotion of moxiousness"])))))], [template_string_$item(profits_templateObject41 || (profits_templateObject41 = profits_taggedTemplateLiteral(["mouldering barrel"]))), () => garboAverageValue.apply(void 0, profits_toConsumableArray(template_string_$items(profits_templateObject42 || (profits_templateObject42 = profits_taggedTemplateLiteral(["creepy ginger ale, haunted battery, scroll of drastic healing, synthetic marrow, the funk"])))))], [template_string_$item(profits_templateObject43 || (profits_templateObject43 = profits_taggedTemplateLiteral(["barnacled barrel"]))), () => garboAverageValue.apply(void 0, profits_toConsumableArray(template_string_$items(profits_templateObject44 || (profits_templateObject44 = profits_taggedTemplateLiteral(["Alewife\u2122 Ale, bazookafish bubble gum, beefy fish meat, eel battery, glistening fish meat, ink bladder, pufferfish spine, shark cartilage, slick fish meat, slug of rum, slug of shochu, slug of vodka, temporary teardrop tattoo"])))))], [template_string_$item(profits_templateObject45 || (profits_templateObject45 = profits_taggedTemplateLiteral(["fake hand"]))), () => 50000], [template_string_$item(profits_templateObject46 || (profits_templateObject46 = profits_taggedTemplateLiteral(["envelope full of Meat"]))), () => 50_000], [template_string_$item(profits_templateObject47 || (profits_templateObject47 = profits_taggedTemplateLiteral(["potted tea tree"]))), () => 0]]));
function getHistoricalSaleValue(item) {
  if ((0,external_kolmafia_namespaceObject.historicalAge)(item) <= 7.0 && (0,external_kolmafia_namespaceObject.historicalPrice)(item) > 0) {
    var isMallMin = (0,external_kolmafia_namespaceObject.historicalPrice)(item) === Math.max(100, 2 * (0,external_kolmafia_namespaceObject.autosellPrice)(item));
    return isMallMin ? (0,external_kolmafia_namespaceObject.autosellPrice)(item) : 0.9 * (0,external_kolmafia_namespaceObject.historicalPrice)(item);
  }
  return getSaleValue(item);
}
var garboValueCache = new Map();
function garboValue(item) {
  var cachedValue = garboValueCache.get(item);
  if (cachedValue === undefined) {
    var specialValueCompute = specialValueLookup.get(item);
    var value = specialValueCompute ? specialValueCompute() : getHistoricalSaleValue(item);
    (0,external_kolmafia_namespaceObject.print)("Valuing ".concat(item.name, " @ ").concat(value));
    garboValueCache.set(item, value);
    return value;
  }
  return cachedValue;
}
function garboAverageValue() {
  for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    items[_key2] = arguments[_key2];
  }
  return sumNumbers(items.map(garboValue)) / items.length;
}
var DailySetting = /*#__PURE__*/function () {
  function DailySetting(key) {
    profits_classCallCheck(this, DailySetting);
    profits_defineProperty(this, "key", void 0);
    this.key = key;
  }
  profits_createClass(DailySetting, [{
    key: "get",
    value: function get(def) {
      var saved = property_get(this.key, "");
      if (saved === "") return def;
      var json = JSON.parse(saved);
      if ("day" in json && "value" in json && json["day"] === (0,external_kolmafia_namespaceObject.gamedayToInt)()) return json["value"];else return def;
    }
  }, {
    key: "set",
    value: function set(value) {
      _set(this.key, JSON.stringify({
        day: (0,external_kolmafia_namespaceObject.gamedayToInt)(),
        value: value
      }));
    }
  }]);
  return DailySetting;
}();
var ProfitTracker = /*#__PURE__*/function () {
  function ProfitTracker(key) {
    profits_classCallCheck(this, ProfitTracker);
    profits_defineProperty(this, "setting", void 0);
    profits_defineProperty(this, "records", void 0);
    profits_defineProperty(this, "session", void 0);
    profits_defineProperty(this, "turns", void 0);
    profits_defineProperty(this, "hours", void 0);
    profits_defineProperty(this, "pulled", void 0);
    profits_defineProperty(this, "ascensions", void 0);
    this.setting = new DailySetting(key);
    this.records = this.setting.get({});
    this.session = getCurrentSession();
    this.turns = (0,external_kolmafia_namespaceObject.myTurncount)();
    this.hours = (0,external_kolmafia_namespaceObject.gametimeToInt)() / (1000 * 60 * 60);
    this.ascensions = (0,external_kolmafia_namespaceObject.myAscensions)();
    this.pulled = new Set(property_get("_roninStoragePulls").split(",").map(id => parseInt(id)).filter(id => id > 0).map(id => external_kolmafia_namespaceObject.Item.get(id)));
  }
  profits_createClass(ProfitTracker, [{
    key: "reset",
    value: function reset() {
      this.session = getCurrentSession();
      this.turns = (0,external_kolmafia_namespaceObject.myTurncount)();
      this.hours = (0,external_kolmafia_namespaceObject.gametimeToInt)() / (1000 * 60 * 60);
      this.ascensions = (0,external_kolmafia_namespaceObject.myAscensions)();
      this.pulled = new Set(property_get("_roninStoragePulls").split(",").map(id => parseInt(id)).filter(id => id > 0).map(id => external_kolmafia_namespaceObject.Item.get(id)));
    }
  }, {
    key: "record",
    value: function record(tag) {
      if (this.ascensions < (0,external_kolmafia_namespaceObject.myAscensions)()) {
        // Session tracking is not accurate across ascensions
        this.reset();
        return;
      }
      // Fix for Leaves/Source/Witchess
      if (tag.includes("Ignore")) {
        this.reset();
        return;
      }

      // Pulled items are tracked oddly in the Session
      // (they are included in the Session diff by default)
      var newPulls = new Set(property_get("_roninStoragePulls").split(",").map(id => parseInt(id)).filter(id => id > 0).map(id => external_kolmafia_namespaceObject.Item.get(id)));
      var _iterator2 = profits_createForOfIteratorHelper(newPulls),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _this$session$items$g;
          var item = _step2.value;
          if (this.pulled.has(item)) continue;
          this.session.items.set(item, 1 + ((_this$session$items$g = this.session.items.get(item)) !== null && _this$session$items$g !== void 0 ? _this$session$items$g : 0));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var diff = getCurrentSession().diff(this.session);
      if (!(tag in this.records)) this.records[tag] = {
        meat: 0,
        items: 0,
        turns: 0,
        hours: 0
      };
      var value = diff.value(garboValue);
      this.records[tag].meat += value.meat;
      this.records[tag].items += value.items;
      this.records[tag].turns += (0,external_kolmafia_namespaceObject.myTurncount)() - this.turns;
      this.records[tag].hours += (0,external_kolmafia_namespaceObject.gametimeToInt)() / (1000 * 60 * 60) - this.hours;
      (0,external_kolmafia_namespaceObject.print)("Profit: ".concat(value.meat, ", ").concat(value.items, ", ").concat((0,external_kolmafia_namespaceObject.myTurncount)() - this.turns, ", ").concat((0,external_kolmafia_namespaceObject.gametimeToInt)() / (1000 * 60 * 60) - this.hours));
      this.reset();
    }
  }, {
    key: "all",
    value: function all() {
      return this.records;
    }
  }, {
    key: "save",
    value: function save() {
      this.setting.set(this.records);
    }
  }]);
  return ProfitTracker;
}();
function getCurrentSession() {
  /*
    Libram includes getStorage() in the generated session, since pulling an
    item in-ronin does indeed modify the underlying mafia session tracking,
    i.e., -1 from getStorage and +1 from mySessionItems.
     But pulling all items out of ronin does not modify the underling mafia
    session tracking, i.e., -1 from getStorage but +0 from mySessionItems.
     Since we already handle in-ronin pulls above (see ProfitTracker.pulled),
    we just ignore getStorage from the Session.
     This should be changed if libram/mafia changes how stored items are tracked.
    */

  var manyToOne = (primary, mapped) => mapped.map(target => [target, primary]);
  var foldable = item => manyToOne(item, getFoldGroup(item));
  var itemMappings = new Map([].concat(profits_toConsumableArray(foldable(template_string_$item(profits_templateObject48 || (profits_templateObject48 = profits_taggedTemplateLiteral(["liar's pants"]))))), profits_toConsumableArray(foldable(template_string_$item(profits_templateObject49 || (profits_templateObject49 = profits_taggedTemplateLiteral(["ice pick"]))))), profits_toConsumableArray(manyToOne(template_string_$item(profits_templateObject50 || (profits_templateObject50 = profits_taggedTemplateLiteral(["Spooky Putty sheet"]))), [template_string_$item(profits_templateObject51 || (profits_templateObject51 = profits_taggedTemplateLiteral(["Spooky Putty monster"])))].concat(profits_toConsumableArray(getFoldGroup(template_string_$item(profits_templateObject52 || (profits_templateObject52 = profits_taggedTemplateLiteral(["Spooky Putty sheet"])))))))), profits_toConsumableArray(foldable(template_string_$item(profits_templateObject53 || (profits_templateObject53 = profits_taggedTemplateLiteral(["stinky cheese sword"]))))), profits_toConsumableArray(foldable(template_string_$item(profits_templateObject54 || (profits_templateObject54 = profits_taggedTemplateLiteral(["naughty paper shuriken"]))))), profits_toConsumableArray(foldable(template_string_$item(profits_templateObject55 || (profits_templateObject55 = profits_taggedTemplateLiteral(["Loathing Legion knife"]))))), profits_toConsumableArray(foldable(template_string_$item(profits_templateObject56 || (profits_templateObject56 = profits_taggedTemplateLiteral(["deceased crimbo tree"]))))), profits_toConsumableArray(foldable(template_string_$item(profits_templateObject57 || (profits_templateObject57 = profits_taggedTemplateLiteral(["makeshift turban"]))))), profits_toConsumableArray(foldable(template_string_$item(profits_templateObject58 || (profits_templateObject58 = profits_taggedTemplateLiteral(["turtle wax shield"]))))), profits_toConsumableArray(foldable(template_string_$item(profits_templateObject59 || (profits_templateObject59 = profits_taggedTemplateLiteral(["metallic foil bow"]))))), profits_toConsumableArray(foldable(template_string_$item(profits_templateObject60 || (profits_templateObject60 = profits_taggedTemplateLiteral(["ironic moustache"]))))), profits_toConsumableArray(foldable(template_string_$item(profits_templateObject61 || (profits_templateObject61 = profits_taggedTemplateLiteral(["bugged balaclava"]))))), profits_toConsumableArray(foldable(template_string_$item(_templateObject62 || (_templateObject62 = profits_taggedTemplateLiteral(["toggle switch (Bartend)"]))))), profits_toConsumableArray(foldable(template_string_$item(_templateObject63 || (_templateObject63 = profits_taggedTemplateLiteral(["mushroom cap"]))))), profits_toConsumableArray(manyToOne(template_string_$item(_templateObject64 || (_templateObject64 = profits_taggedTemplateLiteral(["can of Rain-Doh"]))), template_string_$items(_templateObject65 || (_templateObject65 = profits_taggedTemplateLiteral(["empty Rain-Doh can"]))))), profits_toConsumableArray(manyToOne(template_string_$item(_templateObject66 || (_templateObject66 = profits_taggedTemplateLiteral(["meteorite fragment"]))), template_string_$items(_templateObject67 || (_templateObject67 = profits_taggedTemplateLiteral(["meteorite earring, meteorite necklace, meteorite ring"]))))), profits_toConsumableArray(manyToOne(template_string_$item(_templateObject68 || (_templateObject68 = profits_taggedTemplateLiteral(["Sneaky Pete's leather jacket"]))), template_string_$items(_templateObject69 || (_templateObject69 = profits_taggedTemplateLiteral(["Sneaky Pete's leather jacket (collar popped)"]))))), profits_toConsumableArray(manyToOne(template_string_$item(_templateObject70 || (_templateObject70 = profits_taggedTemplateLiteral(["Boris's Helm"]))), template_string_$items(_templateObject71 || (_templateObject71 = profits_taggedTemplateLiteral(["Boris's Helm (askew)"]))))), profits_toConsumableArray(manyToOne(template_string_$item(_templateObject72 || (_templateObject72 = profits_taggedTemplateLiteral(["Jarlsberg's pan"]))), template_string_$items(_templateObject73 || (_templateObject73 = profits_taggedTemplateLiteral(["Jarlsberg's pan (Cosmic portal mode)"]))))), profits_toConsumableArray(manyToOne(template_string_$item(_templateObject74 || (_templateObject74 = profits_taggedTemplateLiteral(["tiny plastic sword"]))), template_string_$items(_templateObject75 || (_templateObject75 = profits_taggedTemplateLiteral(["grogtini, bodyslam, dirty martini, vesper, cherry bomb, sangria del diablo"]))))), profits_toConsumableArray(manyToOne(template_string_$item(_templateObject76 || (_templateObject76 = profits_taggedTemplateLiteral(["earthenware muffin tin"]))), template_string_$items(_templateObject77 || (_templateObject77 = profits_taggedTemplateLiteral(["blueberry muffin, bran muffin, chocolate chip muffin"])))))));
  var result = Session.current();
  for (var _i2 = 0, _arr2 = [external_kolmafia_namespaceObject.getCloset, external_kolmafia_namespaceObject.getStorage]; _i2 < _arr2.length; _i2++) {
    var inventoryFunc = _arr2[_i2];
    for (var _i3 = 0, _Object$entries = Object.entries(inventoryFunc()); _i3 < _Object$entries.length; _i3++) {
      var _itemMappings$get;
      var _Object$entries$_i = profits_slicedToArray(_Object$entries[_i3], 2),
        itemStr = _Object$entries$_i[0],
        quantity = _Object$entries$_i[1];
      var item = (0,external_kolmafia_namespaceObject.toItem)(itemStr);
      var mappedItem = (_itemMappings$get = itemMappings.get(item)) !== null && _itemMappings$get !== void 0 ? _itemMappings$get : item;
      result.register(mappedItem, -1 * quantity);
    }
  }
  result.register("meat", -1 * (0,external_kolmafia_namespaceObject.myStorageMeat)());
  result.register("meat", -1 * (0,external_kolmafia_namespaceObject.myClosetMeat)());
  return result;
}
function profits_sum(record, where) {
  var included = [];
  for (var _key3 in record) {
    if (where(_key3)) included.push(record[_key3]);
  }
  return {
    meat: included.reduce((v, p) => v + p.meat, 0),
    items: included.reduce((v, p) => v + p.items, 0),
    turns: included.reduce((v, p) => v + p.turns, 0),
    hours: included.reduce((v, p) => v + p.hours, 0)
  };
}
function numberWithCommas(x) {
  var str = x.toString();
  if (str.includes(".")) return x.toFixed(2);
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function printProfitSegment(key, record, color) {
  if (record === undefined) return;
  (0,external_kolmafia_namespaceObject.print)("".concat(key, ": ").concat(numberWithCommas(record.meat), " meat + ").concat(numberWithCommas(record.items), " items (").concat(record.turns, " turns + ").concat(numberWithCommas(record.hours), " hours)"), color);
}
function printProfits(records) {
  (0,external_kolmafia_namespaceObject.print)("");
  (0,external_kolmafia_namespaceObject.print)("== Daily Loop Profit ==");
  printProfitSegment("Aftercore", profits_sum(records, key => key.startsWith("0")), "blue");
  for (var _key4 in records) {
    if (_key4.startsWith("0")) printProfitSegment("* ".concat(_key4.substring(2)), records[_key4], "green");
  }
  printProfitSegment("Run and Post-Run", profits_sum(records, key => key.startsWith("1")), "blue");
  for (var _key5 in records) {
    if (_key5.startsWith("1")) printProfitSegment("* ".concat(_key5.substring(2)), records[_key5], "green");
  }
  printProfitSegment("Total", profits_sum(records, () => true), "black");
}
;// CONCATENATED MODULE: ./src/tasks/utils.ts
var utils_templateObject, utils_templateObject2, utils_templateObject3, utils_templateObject4, utils_templateObject5, utils_templateObject6, utils_templateObject7, utils_templateObject8, utils_templateObject9, utils_templateObject10, utils_templateObject11, utils_templateObject12, utils_templateObject13, utils_templateObject14, utils_templateObject15, utils_templateObject16, utils_templateObject17, utils_templateObject18, utils_templateObject19, utils_templateObject20, utils_templateObject21, utils_templateObject22, utils_templateObject23, utils_templateObject24, utils_templateObject25, utils_templateObject26, utils_templateObject27, utils_templateObject28, utils_templateObject29, utils_templateObject30, utils_templateObject31, utils_templateObject32, utils_templateObject33, utils_templateObject34, utils_templateObject35, utils_templateObject36, utils_templateObject37, utils_templateObject38, utils_templateObject39, utils_templateObject40, utils_templateObject41, utils_templateObject42, utils_templateObject43, utils_templateObject44, utils_templateObject45, utils_templateObject46, utils_templateObject47, utils_templateObject48, utils_templateObject49, utils_templateObject50, utils_templateObject51, utils_templateObject52, utils_templateObject53, utils_templateObject54, utils_templateObject55, utils_templateObject56, utils_templateObject57, utils_templateObject58, utils_templateObject59, utils_templateObject60, utils_templateObject61, utils_templateObject62, utils_templateObject63, utils_templateObject64, utils_templateObject65, utils_templateObject66, utils_templateObject67, utils_templateObject68, utils_templateObject69, utils_templateObject70, utils_templateObject71, utils_templateObject72, utils_templateObject73, utils_templateObject74, utils_templateObject75, utils_templateObject76, utils_templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87;
function utils_slicedToArray(arr, i) { return utils_arrayWithHoles(arr) || utils_iterableToArrayLimit(arr, i) || tasks_utils_unsupportedIterableToArray(arr, i) || utils_nonIterableRest(); }
function utils_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function utils_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function utils_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function utils_toConsumableArray(arr) { return utils_arrayWithoutHoles(arr) || utils_iterableToArray(arr) || tasks_utils_unsupportedIterableToArray(arr) || utils_nonIterableSpread(); }
function utils_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function tasks_utils_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return tasks_utils_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return tasks_utils_arrayLikeToArray(o, minLen); }
function utils_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function utils_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return tasks_utils_arrayLikeToArray(arr); }
function tasks_utils_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function utils_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




function haveAll(its) {
  return its.reduce((a, it) => a && lib_have(it), true);
}
function haveAny(its) {
  return its.reduce((a, it) => a || have(it), false);
}
function toMoonSign(str) {
  if (typeof str === "string" && ["mongoose", "wallaby", "vole", "platypus", "opossum", "marmot", "wombat", "blender", "packrat", "gnomads", "knoll", "canadia"].includes(str)) return str;
  throw new Error("".concat(str, " is not a valid MoonSign"));
}
var minusMLItems = template_string_$items(utils_templateObject || (utils_templateObject = utils_taggedTemplateLiteral(["nasty rat mask, Drowsy Sword, HOA regulation book, pocketwatch on a chain, security flashlight, Space Trip safety headphones, pine cone necklace, red badge, mushroom badge, water wings for babies, white earbuds, discarded bowtie"])));
function noML() {
  return "-ml, ".concat(minusMLItems.filter(it => have(it)).map(it => "-equip ".concat(it.name)).join(", "));
}
function maxBase() {
  return "175 bonus June Cleaver, ".concat(garboValue(template_string_$item(utils_templateObject2 || (utils_templateObject2 = utils_taggedTemplateLiteral(["FunFunds\u2122"])))) / 20 + 5, " bonus lucky gold ring, 250 bonus Mr. Cheeng's spectacles, ").concat(0.4 * property_get("valueOfAdventure"), " bonus mafia thumb ring, ").concat(property_get("sweat") + property_get("_sweatOutSomeBoozeUsed") * 25 < 75 ? "250 bonus designer sweatpants," : "", " 100 bonus Pantsgiving, 10 bonus tiny stillsuit");
}
function famValue(fam, mob) {
  switch (fam) {
    case template_string_$familiar(utils_templateObject3 || (utils_templateObject3 = utils_taggedTemplateLiteral(["Red-Nosed Snapper"]))):
      if (mob && getTrackedPhylum() && mob.phylum === getTrackedPhylum()) return garboValue(phylumItem.get(getTrackedPhylum() || $phylum(utils_templateObject4 || (utils_templateObject4 = utils_taggedTemplateLiteral(["none"])))) || template_string_$item(utils_templateObject5 || (utils_templateObject5 = utils_taggedTemplateLiteral(["none"])))) / 11;
      return 0;
    case template_string_$familiar(utils_templateObject6 || (utils_templateObject6 = utils_taggedTemplateLiteral(["Cookbookbat"]))):
      return template_string_$items(utils_templateObject7 || (utils_templateObject7 = utils_taggedTemplateLiteral([""]))).find(it => it.name.indexOf("Recipe of Before Yore") >= 0 && lib_have(it)) ? garboAverageValue.apply(void 0, utils_toConsumableArray(template_string_$items(utils_templateObject8 || (utils_templateObject8 = utils_taggedTemplateLiteral(["Yeast of Boris, Vegetable of Jarlsberg, St. Sneaky Pete's Whey"]))))) * (3.0 / 11) : 5000;
    case template_string_$familiar(utils_templateObject9 || (utils_templateObject9 = utils_taggedTemplateLiteral(["Shorter-Order Cook"]))):
      return garboAverageValue.apply(void 0, utils_toConsumableArray(template_string_$items(utils_templateObject10 || (utils_templateObject10 = utils_taggedTemplateLiteral(["short white, short beer, short glass of water, short stack of pancakes, short stick of butter"]))))) / 11;
  }
  return 0;
}
function meatFam() {
  return $familiars(utils_templateObject11 || (utils_templateObject11 = utils_taggedTemplateLiteral(["Space Jellyfish, Robortender, Hobo Monkey, Cat Burglar"]))).find(fam => have(fam)) || $familiar(utils_templateObject12 || (utils_templateObject12 = utils_taggedTemplateLiteral(["Leprechaun"])));
}
function bestFam(mob) {
  var fams = template_string_$familiars(utils_templateObject13 || (utils_templateObject13 = utils_taggedTemplateLiteral(["Grey Goose, Red-Nosed Snapper, Cookbookbat, Shorter-Order Cook"]))).filter(fam => lib_have(fam)).sort((a, b) => famValue(b, mob) - famValue(a, mob));
  return fams.find(fam => lib_have(fam));
}
function nextCyberZone() {
  if ((0,external_kolmafia_namespaceObject.lastChoice)() === 1546) {
    _set("_cyberRealm1Done", true);
  }
  if ((0,external_kolmafia_namespaceObject.lastChoice)() === 1548) {
    _set("_cyberRealm2Done", true);
  }
  if ((0,external_kolmafia_namespaceObject.lastChoice)() === 1550) {
    _set("_cyberRealm3Done", true);
  }
  var realmChoice = () => !property_get("_cyberRealm1Done").includes("true") ? $location(utils_templateObject14 || (utils_templateObject14 = utils_taggedTemplateLiteral(["Cyberzone 1"]))) : !property_get("_cyberRealm2Done").includes("true") ? $location(utils_templateObject15 || (utils_templateObject15 = utils_taggedTemplateLiteral(["Cyberzone 2"]))) : !property_get("_cyberRealm3Done").includes("true") ? $location(utils_templateObject16 || (utils_templateObject16 = utils_taggedTemplateLiteral(["Cyberzone 3"]))) : $location(utils_templateObject17 || (utils_templateObject17 = utils_taggedTemplateLiteral(["none"])));
  (0,external_kolmafia_namespaceObject.print)("Choosing ".concat(realmChoice(), " because turns spent ").concat(realmChoice().turnsSpent - 19 * ((0,external_kolmafia_namespaceObject.myDaycount)() - 1)));
  return realmChoice();
}
function canDiet() {
  return (0,external_kolmafia_namespaceObject.myFullness)() < (0,external_kolmafia_namespaceObject.fullnessLimit)() || (0,external_kolmafia_namespaceObject.mySpleenUse)() < (0,external_kolmafia_namespaceObject.spleenLimit)() || (0,external_kolmafia_namespaceObject.myInebriety)() < (0,external_kolmafia_namespaceObject.inebrietyLimit)() || lib_have(template_string_$item(utils_templateObject18 || (utils_templateObject18 = utils_taggedTemplateLiteral(["distention pill"])))) && !property_get("_distentionPillUsed") || args.smol || lib_have(template_string_$item(utils_templateObject19 || (utils_templateObject19 = utils_taggedTemplateLiteral(["synthetic dog hair pill"])))) && !property_get("_syntheticDogHairPillUsed") || lib_have(template_string_$item(utils_templateObject20 || (utils_templateObject20 = utils_taggedTemplateLiteral(["designer sweatpants"])))) && property_get("_sweatOutSomeBoozeUsed") < 3 && property_get("sweat") >= 25 || lib_have(template_string_$item(utils_templateObject21 || (utils_templateObject21 = utils_taggedTemplateLiteral(["mime army shotglass"])))) && !property_get("_mimeArmyShotglassUsed") || property_get("currentMojoFilters") < 3 && (0,external_kolmafia_namespaceObject.mallPrice)(template_string_$item(utils_templateObject22 || (utils_templateObject22 = utils_taggedTemplateLiteral(["mojo filter"])))) + (0,external_kolmafia_namespaceObject.mallPrice)(template_string_$item(utils_templateObject23 || (utils_templateObject23 = utils_taggedTemplateLiteral(["transdermal smoke patch"])))) < 2.5 * property_get("valueOfAdventure");
}
function stooperDrunk() {
  return (0,external_kolmafia_namespaceObject.myInebriety)() > (0,external_kolmafia_namespaceObject.inebrietyLimit)() || (0,external_kolmafia_namespaceObject.myInebriety)() === (0,external_kolmafia_namespaceObject.inebrietyLimit)() && (0,external_kolmafia_namespaceObject.myFamiliar)() === template_string_$familiar(utils_templateObject24 || (utils_templateObject24 = utils_taggedTemplateLiteral(["Stooper"])));
}
function totallyDrunk() {
  return lib_have(template_string_$familiar(utils_templateObject25 || (utils_templateObject25 = utils_taggedTemplateLiteral(["Stooper"])))) && (0,external_kolmafia_namespaceObject.myFamiliar)() !== template_string_$familiar(utils_templateObject26 || (utils_templateObject26 = utils_taggedTemplateLiteral(["Stooper"]))) ? (0,external_kolmafia_namespaceObject.myInebriety)() > (0,external_kolmafia_namespaceObject.inebrietyLimit)() + 1 : (0,external_kolmafia_namespaceObject.myInebriety)() > (0,external_kolmafia_namespaceObject.inebrietyLimit)();
}
function doneAdventuring() {
  return !canDiet() && (0,external_kolmafia_namespaceObject.myAdventures)() === 0 || stooperDrunk();
}
var gardens = template_string_$items(utils_templateObject27 || (utils_templateObject27 = utils_taggedTemplateLiteral(["packet of pumpkin seeds, Peppermint Pip Packet, packet of dragon's teeth, packet of beer seeds, packet of winter seeds, packet of thanksgarden seeds, packet of tall grass seeds, packet of mushroom spores, packet of rock seeds"])));
function getGarden() {
  return gardens.find(it => it.name in (0,external_kolmafia_namespaceObject.getCampground)()) || template_string_$item(utils_templateObject28 || (utils_templateObject28 = utils_taggedTemplateLiteral(["none"])));
}
var banishes;
function nextUnusedBanishItem() {
  if (!banishes) banishes = $items(utils_templateObject29 || (utils_templateObject29 = utils_taggedTemplateLiteral(["human musk, tennis ball, Louder Than Bomb, divine champagne popper"]))).sort((a, b) => mallPrice(a) - mallPrice(b)); //sorted from cheapest to most expensive
  return banishes.find(it => !getBanishedMonsters().get(it)) || $item(utils_templateObject30 || (utils_templateObject30 = utils_taggedTemplateLiteral(["none"]))); //return the cheapest free banish not currently in use
}

function chewOrWish(it, ef) {
  if (mallPrice(it) + mallPrice($item(utils_templateObject31 || (utils_templateObject31 = utils_taggedTemplateLiteral(["mojo filter"])))) < mallPrice($item(utils_templateObject32 || (utils_templateObject32 = utils_taggedTemplateLiteral(["pocket wish"]))))) {
    if (mySpleenUse() === spleenLimit()) use(1, $item(utils_templateObject33 || (utils_templateObject33 = utils_taggedTemplateLiteral(["mojo filter"]))));
    chew(it);
  } else {
    retrieveItem($item(utils_templateObject34 || (utils_templateObject34 = utils_taggedTemplateLiteral(["pocket wish"]))));
    cliExecute("genie effect ".concat(ef.name));
  }
}
function isGoodGarboScript(scr) {
  // Returns true if scr includes "garbo", and doesn't include a semicolon
  return scr.includes("garbo") && !scr.includes(";");
}
function backstageItemsDone() {
  return (lib_have(template_string_$item(utils_templateObject35 || (utils_templateObject35 = utils_taggedTemplateLiteral(["giant marshmallow"])))) ? 1 : 0) + (lib_have(template_string_$item(utils_templateObject36 || (utils_templateObject36 = utils_taggedTemplateLiteral(["beer-scented teddy bear"])))) ? 1 : 0) + (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(utils_templateObject37 || (utils_templateObject37 = utils_taggedTemplateLiteral(["gin-soaked blotter paper"])))) >= 2 && (lib_have(template_string_$item(utils_templateObject38 || (utils_templateObject38 = utils_taggedTemplateLiteral(["booze-soaked cherry"])))) ? 1 : 0) + (lib_have(template_string_$item(utils_templateObject39 || (utils_templateObject39 = utils_taggedTemplateLiteral(["comfy pillow"])))) ? 1 : 0) + (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(utils_templateObject40 || (utils_templateObject40 = utils_taggedTemplateLiteral(["sponge cake"])))) >= 2;
}
function notifyVoters() {
  if (property_get("_kmailSentToday").includes("true")) return;
  var recipients = ["Datris", "ange1ade", "miroto1998", "tissen", "nannachi", "Mandoline", "Lucasyeo"];
  var message = "Voter Monster Today is ".concat(property_get("_voteMonster"));
  recipients.forEach(recipient => {
    Kmail.send(recipient, message);
  });
  _set("_kmailSentToday", true);
}
function getKmails() {
  var caller = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "GreyDay";
  var buffer = (0,external_kolmafia_namespaceObject.visitUrl)("api.php?pwd&what=kmail&count=100&for=".concat((0,external_kolmafia_namespaceObject.urlEncode)(caller)));
  var kmails = JSON.parse(buffer);
  kmails.forEach(mail => {
    mail.delete = () => {
      var del = "messages.php?the_action=delete&box=Inbox&pwd&sel".concat(mail.id, "=on");
      return (0,external_kolmafia_namespaceObject.visitUrl)(del).includes("1 message deleted.");
    };
  });
  return kmails.filter(k => k.type === "normal");
}
function isJunkKmail(kmail) {
  if (kmail.fromname === "Lady Spookyraven's Ghost" || kmail.fromname === "The Loathing Postal Service" && kmail.message.includes("telegram from Lady Spookyraven")) {
    return true;
  }
  if ((kmail.fromname.toLowerCase() === "cheesefax" || kmail.fromname.toLowerCase() === "averagechat" || kmail.fromname.toLowerCase() === "onlyfax") && kmail.message.includes("completed your relationship fortune test!")) {
    return true;
  }
  return false;
}
function deleteJunkKmails() {
  getKmails().forEach(mail => {
    if (!isJunkKmail(mail)) {
      return;
    }
    (0,external_kolmafia_namespaceObject.print)("Deleting junk kmail from ".concat(mail.fromname));
    var state = mail.delete();
    if (state) {
      return;
    }
    (0,external_kolmafia_namespaceObject.print)("Failed to delete kmail.", "red");
  });
}
var realMonth = gameDay().getMonth();
var realDay = gameDay().getDate();
var halloween = ((0,external_kolmafia_namespaceObject.gamedayToInt)() === 79 || realMonth === 10 && realDay === 31 || (0,external_kolmafia_namespaceObject.holiday)().includes("halloween")) && isHalloweenWorthDoing();
function pvpCloset(num) {
  var threshold = 10000;
  template_string_$items(utils_templateObject41 || (utils_templateObject41 = utils_taggedTemplateLiteral([""]))).filter(it => (0,external_kolmafia_namespaceObject.itemAmount)(it) > 0 && it.tradeable && it.discardable && !it.quest && !it.gift && (0,external_kolmafia_namespaceObject.mallPrice)(it) >= threshold).forEach(it => {
    (0,external_kolmafia_namespaceObject.putCloset)((0,external_kolmafia_namespaceObject.itemAmount)(it), it);
    (0,external_kolmafia_namespaceObject.print)("Closeting valuables (".concat((0,external_kolmafia_namespaceObject.mallPrice)(it), " meat): ").concat(it));
  });
  _set("_safetyCloset".concat(num), true);
}
function treatValue(outfit) {
  return sum(Object.entries((0,external_kolmafia_namespaceObject.outfitTreats)(outfit)), _ref => {
    var _ref2 = utils_slicedToArray(_ref, 2),
      candyName = _ref2[0],
      probability = _ref2[1];
    return probability * garboValue((0,external_kolmafia_namespaceObject.toItem)(candyName));
  });
}
function getTreatOutfit() {
  var outfit = property_get("freecandy_treatOutfit");
  var availableOutfits = (0,external_kolmafia_namespaceObject.getOutfits)().filter(name => (0,external_kolmafia_namespaceObject.outfitPieces)(name).every(piece => (0,external_kolmafia_namespaceObject.canEquip)(piece)));
  if (!availableOutfits.length) {
    return "seal-clubbing club";
  }
  outfit = utils_maxBy(availableOutfits, treatValue);
  return outfit;
}
var _baseAdventureValue;
function baseAdventureValue() {
  if (!_baseAdventureValue) {
    var outfitCandyValue = treatValue(getTreatOutfit());
    var totOutfitCandyMultiplier = lib_have(template_string_$familiar(utils_templateObject42 || (utils_templateObject42 = utils_taggedTemplateLiteral(["Trick-or-Treating Tot"])))) ? 1.6 : 1;
    var bowlValue = 1 / 5 * garboValue(template_string_$item(utils_templateObject43 || (utils_templateObject43 = utils_taggedTemplateLiteral(["huge bowl of candy"]))));
    var prunetsValue = lib_have(template_string_$familiar(utils_templateObject44 || (utils_templateObject44 = utils_taggedTemplateLiteral(["Trick-or-Treating Tot"])))) ? 4 * 0.2 * garboValue(template_string_$item(utils_templateObject45 || (utils_templateObject45 = utils_taggedTemplateLiteral(["Prunets"])))) : 0;
    var outfitCandyTotal = 3 * outfitCandyValue * totOutfitCandyMultiplier;
    _baseAdventureValue = 1 / 5 * (outfitCandyTotal + bowlValue + prunetsValue);
  }
  return _baseAdventureValue;
}
function isHalloweenWorthDoing() {
  var freeFightValue = lib_have(template_string_$familiar(utils_templateObject46 || (utils_templateObject46 = utils_taggedTemplateLiteral(["Red-Nosed Snapper"])))) ? 2000 : 1100;
  return baseAdventureValue() + freeFightValue > property_get("valueOfAdventure");
}
function shouldWeOverdrink() {
  var overdrinkValue = property_get("valueOfAdventure") * (110 - 5.5 * 5) + (0,external_kolmafia_namespaceObject.mallPrice)(template_string_$item(utils_templateObject47 || (utils_templateObject47 = utils_taggedTemplateLiteral(["Sacramento wine"])))) * 5;
  var numToCleanse = 5;
  var sweatpants = lib_have(template_string_$item(utils_templateObject48 || (utils_templateObject48 = utils_taggedTemplateLiteral(["designer sweatpants"])))) ? 3 : 0;
  var drinking = lib_have(template_string_$skill(utils_templateObject49 || (utils_templateObject49 = utils_taggedTemplateLiteral(["Drinking to Drink"])))) ? 1 : 0;
  var doghair = (0,external_kolmafia_namespaceObject.storageAmount)(template_string_$item(utils_templateObject50 || (utils_templateObject50 = utils_taggedTemplateLiteral(["synthetic dog hair pill"])))) >= 1 ? 1 : 0;
  var checkMelange = () => property_get("valueOfAdventure") * 45 > (0,external_kolmafia_namespaceObject.mallPrice)(template_string_$item(utils_templateObject51 || (utils_templateObject51 = utils_taggedTemplateLiteral(["spice melange"])))) && sweatpants < 3;
  var melange = checkMelange() ? 3 : 0;
  var melangeCost = () => checkMelange() ? (0,external_kolmafia_namespaceObject.mallPrice)(template_string_$item(utils_templateObject52 || (utils_templateObject52 = utils_taggedTemplateLiteral(["spice melange"])))) : 0;
  if (sweatpants + drinking + doghair + melange >= numToCleanse && overdrinkValue > 0) {
    return true;
  } else {
    var sobrie = 1;
    if (sweatpants + drinking + doghair + sobrie + melange >= numToCleanse && overdrinkValue - (0,external_kolmafia_namespaceObject.mallPrice)(template_string_$item(utils_templateObject53 || (utils_templateObject53 = utils_taggedTemplateLiteral(["cuppa Sobrie tea"])))) - melangeCost() > 0) {
      return true;
    } else return false;
  }
}
function pantogramReady() {
  if (!Pantogram_have() || havePants()) return false;
  var pantogramValue = 100 * (0,external_kolmafia_namespaceObject.myAdventures)();
  var cloverPrice = Math.min.apply(Math, utils_toConsumableArray(template_string_$items(utils_templateObject54 || (utils_templateObject54 = utils_taggedTemplateLiteral(["ten-leaf clover, disassembled clover"]))).map(item => (0,external_kolmafia_namespaceObject.mallPrice)(item))));
  if (cloverPrice + (0,external_kolmafia_namespaceObject.mallPrice)(template_string_$item(utils_templateObject55 || (utils_templateObject55 = utils_taggedTemplateLiteral(["porquoise"])))) > pantogramValue) {
    return false;
  }
  (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(utils_templateObject56 || (utils_templateObject56 = utils_taggedTemplateLiteral(["porquoise"]))), 1);
  if (!lib_have(template_string_$item(utils_templateObject57 || (utils_templateObject57 = utils_taggedTemplateLiteral(["porquoise"]))))) return false;
  return true;
}
function utils_pantogram() {
  if (!Pantogram_have() || havePants()) return true;
  (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(utils_templateObject58 || (utils_templateObject58 = utils_taggedTemplateLiteral(["ten-leaf clover"]))));
  (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(utils_templateObject59 || (utils_templateObject59 = utils_taggedTemplateLiteral(["bubblin' crude"]))));
  makePants((0,external_kolmafia_namespaceObject.myPrimestat)().toString(), "Sleaze Resistance: 2", "MP Regen Max: 15", "Drops Items: true", "Meat Drop: 60");
  return true;
}

/**
 * @returns Whether or not you have the blood cubic zirconia
 */
function utils_have_() {
  return lib_have(template_string_$item(utils_templateObject60 || (utils_templateObject60 = utils_taggedTemplateLiteral(["blood cubic zirconia"]))));
}

/**
 * @param skill The BCZ skill to check.
 * @returns The subtat cost to cast the skill.
 */
function skillCost(skill) {
  var castNumber = timesCast(skill);
  if (castNumber <= 11) {
    var cycle = Math.floor(castNumber / 3);
    var position = castNumber % 3;
    return [11, 23, 37][position] * 10 ** cycle;
  } else if (castNumber === 12) {
    return 420_000;
  } else {
    var _cycle = Math.floor((castNumber - 13) / 3);
    var _position = (castNumber + 2) % 3;
    return [11, 23, 37][_position] * 10 ** (_cycle + 5);
  }
}
var COSTS = new Map([[template_string_$skill(utils_templateObject61 || (utils_templateObject61 = utils_taggedTemplateLiteral(["BCZ: Blood Geyser"]))), $stat(utils_templateObject62 || (utils_templateObject62 = utils_taggedTemplateLiteral(["SubMuscle"])))], [template_string_$skill(utils_templateObject63 || (utils_templateObject63 = utils_taggedTemplateLiteral(["BCZ: Refracted Gaze"]))), $stat(utils_templateObject64 || (utils_templateObject64 = utils_taggedTemplateLiteral(["SubMysticality"])))], [template_string_$skill(utils_templateObject65 || (utils_templateObject65 = utils_taggedTemplateLiteral(["BCZ: Sweat Bullets"]))), $stat(utils_templateObject66 || (utils_templateObject66 = utils_taggedTemplateLiteral(["SubMoxie"])))], [template_string_$skill(utils_templateObject67 || (utils_templateObject67 = utils_taggedTemplateLiteral(["BCZ: Blood Bath"]))), $stat(utils_templateObject68 || (utils_templateObject68 = utils_taggedTemplateLiteral(["SubMuscle"])))], [template_string_$skill(utils_templateObject69 || (utils_templateObject69 = utils_taggedTemplateLiteral(["BCZ: Craft a Pheromone Cocktail"]))), $stat(utils_templateObject70 || (utils_templateObject70 = utils_taggedTemplateLiteral(["SubMoxie"])))], [template_string_$skill(utils_templateObject71 || (utils_templateObject71 = utils_taggedTemplateLiteral(["BCZ: Create Blood Thinner"]))), $stat(utils_templateObject72 || (utils_templateObject72 = utils_taggedTemplateLiteral(["SubMuscle"])))], [template_string_$skill(utils_templateObject73 || (utils_templateObject73 = utils_taggedTemplateLiteral(["BCZ: Dial it up to 11"]))), $stat(utils_templateObject74 || (utils_templateObject74 = utils_taggedTemplateLiteral(["SubMysticality"])))], [template_string_$skill(utils_templateObject75 || (utils_templateObject75 = utils_taggedTemplateLiteral(["BCZ: Prepare Spinal Tapas"]))), $stat(utils_templateObject76 || (utils_templateObject76 = utils_taggedTemplateLiteral(["SubMysticality"])))], [template_string_$skill(utils_templateObject77 || (utils_templateObject77 = utils_taggedTemplateLiteral(["BCZ: Sweat Equity"]))), $stat(_templateObject78 || (_templateObject78 = utils_taggedTemplateLiteral(["SubMoxie"])))]]);
var utils_numericProperties = (/* unused pure expression or super */ null && (["coinMasterIndex", "dailyDeedsVersion", "defaultDropdown1", "defaultDropdown2", "defaultDropdownSplit", "defaultLimit", "fixedThreadPoolSize", "itemManagerIndex", "lastBuffRequestType", "lastGlobalCounterDay", "lastImageCacheClear", "pingDefaultTestPings", "pingLoginCount", "pingLoginGoal", "pingLoginThreshold", "pingTestPings", "previousUpdateRevision", "relayDelayForSVN", "relaySkillButtonCount", "scriptButtonPosition", "statusDropdown", "svnThreadPoolSize", "toolbarPosition", "_beachTides", "_g9Effect", "8BitBonusTurns", "8BitScore", "addingScrolls", "affirmationCookiesEaten", "aminoAcidsUsed", "antagonisticSnowmanKitCost", "ascensionsToday", "asolDeferredPoints", "asolPointsPigSkinner", "asolPointsCheeseWizard", "asolPointsJazzAgent", "autoAbortThreshold", "autoAntidote", "autoBuyPriceLimit", "autopsyTweezersUsed", "autumnatonQuestTurn", "availableCandyCredits", "availableDimes", "availableFunPoints", "availableMrStore2002Credits", "availableQuarters", "availableSeptEmbers", "availableStoreCredits", "availableSwagger", "avantGuardPoints", "averageSwagger", "awolMedicine", "awolPointsBeanslinger", "awolPointsCowpuncher", "awolPointsSnakeoiler", "awolDeferredPointsBeanslinger", "awolDeferredPointsCowpuncher", "awolDeferredPointsSnakeoiler", "awolVenom", "bagOTricksCharges", "ballpitBonus", "bankedKarma", "bartenderTurnsUsed", "basementMallPrices", "basementSafetyMargin", "batmanFundsAvailable", "batmanBonusInitialFunds", "batmanTimeLeft", "bearSwagger", "beeCounter", "beGregariousCharges", "beGregariousFightsLeft", "birdformCold", "birdformHot", "birdformRoc", "birdformSleaze", "birdformSpooky", "birdformStench", "blackBartsBootyCost", "blackPuddingsDefeated", "blackForestProgress", "blankOutUsed", "bloodweiserDrunk", "bodyguardCharge", "bondPoints", "bondVillainsDefeated", "boneAbacusVictories", "bookOfFactsGummi", "bookOfFactsPinata", "bookOfIronyCost", "booPeakProgress", "borisPoints", "breakableHandling", "breakableHandling1964", "breakableHandling9691", "breakableHandling9692", "breakableHandling9699", "breathitinCharges", "brodenBacteria", "brodenSprinkles", "buffBotMessageDisposal", "buffBotPhilanthropyType", "buffJimmyIngredients", "burnoutsDefeated", "burrowgrubSummonsRemaining", "bwApronMealsEaten", "camelSpit", "camerasUsed", "campAwayDecoration", "candyWitchTurnsUsed", "candyWitchCandyTotal", "carboLoading", "catBurglarBankHeists", "cellarLayout", "charitableDonations", "chasmBridgeProgress", "chefTurnsUsed", "chessboardsCleared", "chibiAlignment", "chibiBirthday", "chibiFitness", "chibiIntelligence", "chibiLastVisit", "chibiSocialization", "chilledToTheBone", "cinchoSaltAndLime", "cinderellaMinutesToMidnight", "cinderellaScore", "cocktailSummons", "commerceGhostCombats", "cookbookbatIngredientsCharge", "controlPanelOmega", "cornucopiasOpened", "cosmicBowlingBallReturnCombats", "cozyCounter6332", "cozyCounter6333", "cozyCounter6334", "craftingClay", "craftingLeather", "craftingPlansCharges", "craftingStraw", "crimbo16BeardChakraCleanliness", "crimbo16BootsChakraCleanliness", "crimbo16BungChakraCleanliness", "crimbo16CrimboHatChakraCleanliness", "crimbo16GutsChakraCleanliness", "crimbo16HatChakraCleanliness", "crimbo16JellyChakraCleanliness", "crimbo16LiverChakraCleanliness", "crimbo16NippleChakraCleanliness", "crimbo16NoseChakraCleanliness", "crimbo16ReindeerChakraCleanliness", "crimbo16SackChakraCleanliness", "crimboTrainingSkill", "crimboTreeDays", "cubelingProgress", "cupidBowFights", "currentExtremity", "currentHedgeMazeRoom", "currentMojoFilters", "currentNunneryMeat", "currentPortalEnergy", "currentReplicaStoreYear", "cursedMagnifyingGlassCount", "cyrptAlcoveEvilness", "cyrptCrannyEvilness", "cyrptNicheEvilness", "cyrptNookEvilness", "cyrptTotalEvilness", "darkGyfftePoints", "dartsThrown", "daycareEquipment", "daycareInstructorItemQuantity", "daycareInstructors", "daycareLastScavenge", "daycareToddlers", "dbNemesisSkill1", "dbNemesisSkill2", "dbNemesisSkill3", "desertExploration", "desktopHeight", "desktopWidth", "dinseyFilthLevel", "dinseyFunProgress", "dinseyNastyBearsDefeated", "dinseySocialJusticeIProgress", "dinseySocialJusticeIIProgress", "dinseyTouristsFed", "dinseyToxicMultiplier", "doctorBagQuestLights", "doctorBagUpgrades", "dreadScroll1", "dreadScroll2", "dreadScroll3", "dreadScroll4", "dreadScroll5", "dreadScroll6", "dreadScroll7", "dreadScroll8", "dripAdventuresSinceAscension", "drippingHallAdventuresSinceAscension", "drippingTreesAdventuresSinceAscension", "drippyBatsUnlocked", "drippyJuice", "drippyOrbsClaimed", "droneSelfDestructChipsUsed", "drunkenSwagger", "edDefeatAbort", "edPoints", "eldritchTentaclesFought", "electricKoolAidEaten", "elfGratitude", "encountersUntilDMTChoice", "encountersUntilYachtzeeChoice", "encountersUntilNEPChoice", "encountersUntilSRChoice", "ensorceleeLevel", "entauntaunedColdRes", "essenceOfAnnoyanceCost", "essenceOfBearCost", "extraRolloverAdventures", "falloutShelterLevel", "familiarSweat", "fingernailsClipped", "fistSkillsKnown", "flyeredML", "fossilB", "fossilD", "fossilN", "fossilP", "fossilS", "fossilW", "fratboysDefeated", "frenchGuardTurtlesFreed", "funGuyMansionKills", "garbageChampagneCharge", "garbageFireProgress", "garbageShirtCharge", "garbageTreeCharge", "garlandUpgrades", "getsYouDrunkTurnsLeft", "ghostPepperTurnsLeft", "gingerDigCount", "gingerLawChoice", "gingerMuscleChoice", "gingerTrainScheduleStudies", "gladiatorBallMovesKnown", "gladiatorBladeMovesKnown", "gladiatorNetMovesKnown", "glitchItemCost", "glitchItemImplementationCount", "glitchItemImplementationLevel", "glitchSwagger", "gloverPoints", "gnasirProgress", "goldenMrAccessories", "gongPath", "gooseDronesRemaining", "goreCollected", "gourdItemCount", "greyYouPoints", "grimoire1Summons", "grimoire2Summons", "grimoire3Summons", "grimstoneCharge", "guardTurtlesFreed", "guideToSafariCost", "guyMadeOfBeesCount", "guzzlrBronzeDeliveries", "guzzlrDeliveryProgress", "guzzlrGoldDeliveries", "guzzlrPlatinumDeliveries", "haciendaLayout", "hallowiener8BitRealm", "hallowienerCoinspiracy", "hareMillisecondsSaved", "hareTurnsUsed", "heavyRainsStartingThunder", "heavyRainsStartingRain", "heavyRainsStartingLightning", "heroDonationBoris", "heroDonationJarlsberg", "heroDonationSneakyPete", "hiddenApartmentProgress", "hiddenBowlingAlleyProgress", "hiddenHospitalProgress", "hiddenOfficeProgress", "hiddenTavernUnlock", "highTopPumped", "hippiesDefeated", "holidayHalsBookCost", "holidaySwagger", "homemadeRobotUpgrades", "homebodylCharges", "hpAutoRecovery", "hpAutoRecoveryTarget", "iceSwagger", "ironicSwagger", "jarlsbergPoints", "juicyGarbageUsed", "jungCharge", "junglePuns", "knownAscensions", "kolhsTotalSchoolSpirited", "lassoTrainingCount", "lastAnticheeseDay", "lastArcadeAscension", "lastBadMoonReset", "lastBangPotionReset", "lastBattlefieldReset", "lastBeardBuff", "lastBreakfast", "lastCartographyBooPeak", "lastCartographyCastleTop", "lastCartographyDarkNeck", "lastCartographyDefiledNook", "lastCartographyFratHouse", "lastCartographyFratHouseVerge", "lastCartographyGuanoJunction", "lastCartographyHauntedBilliards", "lastCartographyHippyCampVerge", "lastCartographyZeppelinProtesters", "lastCastleGroundUnlock", "lastCastleTopUnlock", "lastCellarReset", "lastChanceThreshold", "lastChasmReset", "lastColosseumRoundWon", "lastCouncilVisit", "lastCounterDay", "lastDesertUnlock", "lastDispensaryOpen", "lastDMTDuplication", "lastDwarfFactoryReset", "lastEVHelmetValue", "lastEVHelmetReset", "lastEmptiedStorage", "lastFilthClearance", "lastGoofballBuy", "lastGuildStoreOpen", "lastGuyMadeOfBeesReset", "lastFratboyCall", "lastFriarCeremonyAscension", "lastFriarsElbowNC", "lastFriarsHeartNC", "lastFriarsNeckNC", "lastHippyCall", "lastIslandUnlock", "lastKeyotronUse", "lastKingLiberation", "lastLightsOutTurn", "lastMushroomPlot", "lastMiningReset", "lastNemesisReset", "lastPaperStripReset", "lastPirateEphemeraReset", "lastPirateInsultReset", "lastPlusSignUnlock", "lastQuartetAscension", "lastQuartetRequest", "lastSecondFloorUnlock", "lastShadowForgeUnlockAdventure", "lastSkateParkReset", "lastStillBeatingSpleen", "lastTavernAscension", "lastTavernSquare", "lastTelescopeReset", "lastTempleAdventures", "lastTempleButtonsUnlock", "lastTempleUnlock", "lastThingWithNoNameDefeated", "lastTowelAscension", "lastTr4pz0rQuest", "lastTrainsetConfiguration", "lastVioletFogMap", "lastVoteMonsterTurn", "lastWartDinseyDefeated", "lastWuTangDefeated", "lastYearbookCameraAscension", "lastZapperWand", "lastZapperWandExplosionDay", "lawOfAveragesCost", "legacyPoints", "leprecondoLastNeedChange", "libramSummons", "lightsOutAutomation", "louvreDesiredGoal", "louvreGoal", "lovebugsAridDesert", "lovebugsBeachBuck", "lovebugsBooze", "lovebugsChroner", "lovebugsCoinspiracy", "lovebugsCyrpt", "lovebugsFreddy", "lovebugsFunFunds", "lovebugsHoboNickel", "lovebugsItemDrop", "lovebugsMeat", "lovebugsMeatDrop", "lovebugsMoxie", "lovebugsMuscle", "lovebugsMysticality", "lovebugsOilPeak", "lovebugsOrcChasm", "lovebugsPowder", "lovebugsWalmart", "lttQuestDifficulty", "lttQuestStageCount", "manaBurnSummonThreshold", "manaBurningThreshold", "manaBurningTrigger", "manorDrawerCount", "manualOfNumberologyCost", "mapToKokomoCost", "markYourTerritoryCharges", "masksUnlocked", "maximizerMRUSize", "maximizerCombinationLimit", "maximizerEquipmentLevel", "maximizerEquipmentScope", "maximizerMaxPrice", "maximizerPriceLevel", "maxManaBurn", "mayflyExperience", "mayoLevel", "meansuckerPrice", "merkinVocabularyMastery", "miniAdvClass", "miniKiwiAiolisUsed", "miniMartinisDrunk", "mixedBerryJellyUses", "moleTunnelLevel", "momSeaMonkeeProgress", "mothershipProgress", "mpAutoRecovery", "mpAutoRecoveryTarget", "munchiesPillsUsed", "mushroomGardenCropLevel", "nanopolymerSpiderWebsUsed", "nextAprilBandTurn", "nextParanormalActivity", "nextQuantumFamiliarOwnerId", "nextQuantumFamiliarTurn", "noobPoints", "noobDeferredPoints", "noodleSummons", "nsContestants1", "nsContestants2", "nsContestants3", "nuclearAutumnPoints", "numericSwagger", "nunsVisits", "oilPeakProgress", "optimalSwagger", "optimisticCandleProgress", "palindomeDudesDefeated", "parasolUsed", "peaceTurkeyIndex", "pendingMapReflections", "phosphorTracesUses", "pingpongSkill", "pirateRealmPlasticPiratesDefeated", "pirateRealmShipsDestroyed", "pirateRealmStormsEscaped", "pirateSwagger", "plantingDay", "plumberBadgeCost", "plumberCostumeCost", "plumberPoints", "pokefamPoints", "poolSharkCount", "poolSkill", "powerPillProgress", "preworkoutPowderUses", "primaryLabGooIntensity", "prismaticSummons", "procrastinatorLanguageFluency", "promptAboutCrafting", "puzzleChampBonus", "pyramidPosition", "quantumPoints", "reagentSummons", "reanimatorArms", "reanimatorLegs", "reanimatorSkulls", "reanimatorWeirdParts", "reanimatorWings", "recentLocations", "redSnapperProgress", "relayPort", "relocatePygmyJanitor", "relocatePygmyLawyer", "rockinRobinProgress", "romanCandelabraRedCasts", "romanCandelabraBlueCasts", "romanCandelabraYellowCasts", "romanCandelabraGreenCasts", "romanCandelabraPurpleCasts", "ROMOfOptimalityCost", "rumpelstiltskinKidsRescued", "rumpelstiltskinTurnsUsed", "rwbMonsterCount", "safariSwagger", "sausageGrinderUnits", "schoolOfHardKnocksDiplomaCost", "schoolSwagger", "scrapbookCharges", "screechCombats", "scriptMRULength", "seadentConstructKills", "seadentLevel", "seaodesFound", "seaPoints", "SeasoningSwagger", "sexChanges", "shenInitiationDay", "shockingLickCharges", "singleFamiliarRun", "skillBurn3", "skillBurn90", "skillBurn153", "skillBurn154", "skillBurn155", "skillBurn236", "skillBurn237", "skillBurn1019", "skillBurn5017", "skillBurn6014", "skillBurn6015", "skillBurn6016", "skillBurn6020", "skillBurn6021", "skillBurn6022", "skillBurn6023", "skillBurn6024", "skillBurn6026", "skillBurn6028", "skillBurn7323", "skillBurn14008", "skillBurn14028", "skillBurn14038", "skillBurn15011", "skillBurn15028", "skillBurn17005", "skillBurn22034", "skillBurn22035", "skillBurn23301", "skillBurn23302", "skillBurn23303", "skillBurn23304", "skillBurn23305", "skillBurn23306", "skillLevel46", "skillLevel47", "skillLevel48", "skillLevel117", "skillLevel118", "skillLevel121", "skillLevel128", "skillLevel134", "skillLevel135", "skillLevel144", "skillLevel180", "skillLevel188", "skillLevel227", "skillLevel245", "skillLevel7254", "slimelingFullness", "slimelingStacksDropped", "slimelingStacksDue", "smoresEaten", "smutOrcNoncombatProgress", "sneakyPetePoints", "snojoMoxieWins", "snojoMuscleWins", "snojoMysticalityWins", "sourceAgentsDefeated", "sourceEnlightenment", "sourceInterval", "sourcePoints", "sourceTerminalGram", "sourceTerminalPram", "sourceTerminalSpam", "spaceBabyLanguageFluency", "spacePirateLanguageFluency", "spelunkyNextNoncombat", "spelunkySacrifices", "spelunkyWinCount", "spookyPuttyCopiesMade", "spookyVHSTapeMonsterTurn", "statbotUses", "stockCertificateTurn", "sugarCounter4178", "sugarCounter4179", "sugarCounter4180", "sugarCounter4181", "sugarCounter4182", "sugarCounter4183", "sugarCounter4191", "summonAnnoyanceCost", "sweat", "tacoDanCocktailSauce", "tacoDanFishMeat", "takerSpaceAnchor", "takerSpaceGold", "takerSpaceMast", "takerSpaceRum", "takerSpaceSilk", "takerSpaceSpice", "tavernLayout", "telescopeUpgrades", "tempuraSummons", "timeposedTopHats", "timeSpinnerMedals", "timesRested", "tomeSummons", "totalCharitableDonations", "trainsetPosition", "turtleBlessingTurns", "twinPeakProgress", "twoCRSPoints", "unicornHornInflation", "universalSeasoningCost", "usable1HWeapons", "usable1xAccs", "usable2HWeapons", "usable3HWeapons", "usableAccessories", "usableHats", "usableOffhands", "usableOther", "usablePants", "usableShirts", "valueOfAdventure", "valueOfInventory", "valueOfStill", "valueOfTome", "vintnerCharge", "vintnerWineLevel", "violetFogGoal", "walfordBucketProgress", "warehouseProgress", "welcomeBackAdv", "wereProfessorBite", "wereProfessorKick", "wereProfessorLiver", "wereProfessorPoints", "wereProfessorRend", "wereProfessorResearchPoints", "wereProfessorStomach", "wereProfessorTransformTurns", "whetstonesUsed", "wolfPigsEvicted", "wolfTurnsUsed", "writingDesksDefeated", "xoSkeleltonXProgress", "xoSkeleltonOProgress", "yearbookCameraAscensions", "yearbookCameraUpgrades", "youRobotBody", "youRobotBottom", "youRobotLeft", "youRobotPoints", "youRobotRight", "youRobotTop", "zeppelinProgress", "zeppelinProtestors", "zigguratLianas", "zombiePoints", "zootSpecimensPrepared", "zootomistPoints", "_absintheDrops", "_abstractionDropsCrown", "_aguaDrops", "_xenomorphCharge", "_alliedRadioDropsUsed", "_ancestralRecallCasts", "_antihangoverBonus", "_aprilShowerDiscoNap", "_aprilBandInstruments", "_aprilBandSaxophoneUses", "_aprilBandTomUses", "_aprilBandTubaUses", "_aprilBandStaffUses", "_aprilBandPiccoloUses", "_astralDrops", "_augSkillsCast", "_assertYourAuthorityCast", "_automatedFutureManufactures", "_autumnatonQuests", "_backUpUses", "_badlyRomanticArrows", "_badgerCharge", "_balefulHowlUses", "_banderRunaways", "_bastilleCheese", "_bastilleGames", "_bastilleGameTurn", "_bastilleLastCheese", "_batWingsCauldronUsed", "_batWingsFreeFights", "_batWingsRestUsed", "_batWingsSwoopUsed", "_bczBloodGeyserCasts", "_bczRefractedGazeCasts", "_bczSweatBulletsCasts", "_bczBloodBathCasts", "_bczDialitupCasts", "_bczSweatEquityCasts", "_bczBloodThinnerCasts", "_bczSpinalTapasCasts", "_bczPheromoneCocktailCasts", "_beanCannonUses", "_bearHugs", "_beerLensDrops", "_bellydancerPickpockets", "_benettonsCasts", "_beretBlastUses", "_beretBoastUses", "_beretBuskingUses", "_birdsSoughtToday", "_bookOfFactsWishes", "_bookOfFactsTatters", "_boomBoxFights", "_boomBoxSongsLeft", "_bootStomps", "_boxingGloveArrows", "_brickoEyeSummons", "_brickoFights", "_campAwayCloudBuffs", "_campAwaySmileBuffs", "_candyEggsDeviled", "_candySummons", "_captainHagnkUsed", "_carnieCandyDrops", "_carnivorousPottedPlantWins", "_carrotNoseDrops", "_catBurglarCharge", "_catBurglarHeistsComplete", "_cheerleaderSteam", "_chestXRayUsed", "_chibiAdventures", "_chipBags", "_chocolateCigarsUsed", "_chocolateCoveredPingPongBallsUsed", "_chocolateSculpturesUsed", "_chocolatesUsed", "_chronolithActivations", "_chronolithNextCost", "_cinchUsed", "_cinchoRests", "_circadianRhythmsAdventures", "_clanFortuneConsultUses", "_clipartSummons", "_clocksUsed", "_cloversPurchased", "_coldMedicineConsults", "_coldMedicineEquipmentTaken", "_companionshipCasts", "_concoctionDatabaseRefreshes", "_cookbookbatCrafting", "_cookbookbatCombatsUntilNewQuest", "_cosmicBowlingSkillsUsed", "_crimbo21ColdResistance", "_cyberFreeFights", "_cyberZone1Turns", "_cyberZone2Turns", "_cyberZone3Turns", "_dailySpecialPrice", "_dartsLeft", "_daycareGymScavenges", "_daycareRecruits", "_deckCardsDrawn", "_deluxeKlawSummons", "_demandSandwich", "_detectiveCasesCompleted", "_disavowed", "_dnaPotionsMade", "_donhosCasts", "_douseFoeUses", "_dreamJarDrops", "_drunkPygmyBanishes", "_durableDolphinWhistleUsed", "_edDefeats", "_edLashCount", "_eldritchTentaclesFoughtToday", "_elfGuardCookingUsed", "_elronsCasts", "_enamorangs", "_energyCollected", "_expertCornerCutterUsed", "_extraTimeUsed", "_favorRareSummons", "_feastUsed", "_feelinTheRhythm", "_feelPrideUsed", "_feelExcitementUsed", "_feelHatredUsed", "_feelLonelyUsed", "_feelNervousUsed", "_feelEnvyUsed", "_feelDisappointedUsed", "_feelSuperiorUsed", "_feelLostUsed", "_feelNostalgicUsed", "_feelPeacefulUsed", "_fingertrapArrows", "_fireExtinguisherCharge", "_fragrantHerbsUsed", "_freeBeachWalksUsed", "_frButtonsPressed", "_fudgeWaspFights", "_gapBuffs", "_garbageFireDrops", "_garbageFireDropsCrown", "_generateIronyUsed", "_genieFightsUsed", "_genieWishesUsed", "_gibbererAdv", "_gibbererCharge", "_gingerbreadCityTurns", "_glarkCableUses", "_glitchMonsterFights", "_gnomeAdv", "_godLobsterFights", "_goldenMoneyCharge", "_gongDrops", "_gothKidCharge", "_gothKidFights", "_greyYouAdventures", "_grimBrotherCharge", "_grimFairyTaleDrops", "_grimFairyTaleDropsCrown", "_grimoireConfiscatorSummons", "_grimoireGeekySummons", "_grimstoneMaskDrops", "_grimstoneMaskDropsCrown", "_grooseCharge", "_grooseDrops", "_grubbyWoolDrops", "_guzzlrDeliveries", "_guzzlrGoldDeliveries", "_guzzlrPlatinumDeliveries", "_hareAdv", "_hareCharge", "_highTopPumps", "_hipsterAdv", "_hoardedCandyDropsCrown", "_hoboUnderlingSummons", "_holidayMultitaskingUsed", "_holoWristDrops", "_holoWristProgress", "_hotAshesDrops", "_hotJellyUses", "_hotTubSoaks", "_humanMuskUses", "_iceballUses", "_inigosCasts", "_ironTricornHeadbuttUsed", "_jerksHealthMagazinesUsed", "_jiggleCheese", "_jiggleCream", "_jiggleLife", "_jiggleSteak", "_jitbCharge", "_juneCleaverAdvs", "_juneCleaverFightsLeft", "_juneCleaverEncounters", "_juneCleaverStench", "_juneCleaverSpooky", "_juneCleaverSleaze", "_juneCleaverHot", "_juneCleaverCold", "_juneCleaverSkips", "_jungDrops", "_kgbClicksUsed", "_kgbDispenserUses", "_kgbTranquilizerDartUses", "_klawSummons", "_kloopCharge", "_kloopDrops", "_kolhsAdventures", "_kolhsSavedByTheBell", "_lastDailyDungeonRoom", "_lastFitzsimmonsHatch", "_lastMobiusStripTurn", "_lastSausageMonsterTurn", "_lastZomboEye", "_latteRefillsUsed", "_lawOfAveragesUsed", "_leafblowerML", "_leafLassosCrafted", "_leafMonstersFought", "_leavesBurned", "_legionJackhammerCrafting", "_leprecondoRearrangements", "_leprecondoFurniture", "_llamaCharge", "_longConUsed", "_lovebugsBeachBuck", "_lovebugsChroner", "_lovebugsCoinspiracy", "_lovebugsFreddy", "_lovebugsFunFunds", "_lovebugsHoboNickel", "_lovebugsWalmart", "_loveChocolatesUsed", "_lynyrdSnareUses", "_machineTunnelsAdv", "_macrometeoriteUses", "_mafiaThumbRingAdvs", "_mapToACandyRichBlockDrops", "_mayamRests", "_mayflowerDrops", "_mayflySummons", "_mcHugeLargeAvalancheUses", "_mcHugeLargeSkiPlowUses", "_mcHugeLargeSlashUses", "_mediumSiphons", "_meteoriteAdesUsed", "_meteorShowerUses", "_micrometeoriteUses", "_mildEvilPerpetrated", "_mimicEggsDonated", "_mimicEggsObtained", "_miniKiwiDrops", "_miniMartiniDrops", "_mobiusStripEncounters", "_monkeyPawWishesUsed", "_monsterHabitatsFightsLeft", "_monsterHabitatsRecalled", "_monstersMapped", "_mushroomGardenFights", "_nanorhinoCharge", "_navelRunaways", "_neverendingPartyFreeTurns", "_newYouQuestSharpensDone", "_newYouQuestSharpensToDo", "_nextColdMedicineConsult", "_nextQuantumAlignment", "_nightmareFuelCharges", "_noobSkillCount", "_nuclearStockpileUsed", "_oilExtracted", "_oldSchoolCocktailCraftingUsed", "_olfactionsUsed", "_optimisticCandleDropsCrown", "_oreDropsCrown", "_otoscopeUsed", "_oysterEggsFound", "_pantsgivingBanish", "_pantsgivingCount", "_pantsgivingCrumbs", "_pantsgivingFullness", "_pasteDrops", "_perilsForeseen", "_peteJukeboxFixed", "_peteJumpedShark", "_petePeeledOut", "_photoBoothEffects", "_photoBoothEquipment", "_pieDrops", "_piePartsCount", "_pirateRealmGold", "_pirateRealmGlue", "_pirateRealmGrog", "_pirateRealmGrub", "_pirateRealmGuns", "_pirateRealmIslandMonstersDefeated", "_pirateRealmSailingTurns", "_pirateRealmShipSpeed", "_pixieCharge", "_pocketProfessorLectures", "_poisonArrows", "_pokeGrowFertilizerDrops", "_poolGames", "_powderedGoldDrops", "_powderedMadnessUses", "_powerfulGloveBatteryPowerUsed", "_powerPillDrops", "_powerPillUses", "_precisionCasts", "_questPartyFairItemsOpened", "_radlibSummons", "_raindohCopiesMade", "_rapidPrototypingUsed", "_raveStealCount", "_reflexHammerUsed", "_resolutionAdv", "_resolutionRareSummons", "_riftletAdv", "_robinEggDrops", "_roboDrops", "_rogueProgramCharge", "_romanticFightsLeft", "_saberForceMonsterCount", "_saberForceUses", "_saberMod", "_saltGrainsConsumed", "_sandwormCharge", "_saplingsPlanted", "_sausageFights", "_sausagesEaten", "_sausagesMade", "_seadentLightningUsed", "_sealFigurineUses", "_sealScreeches", "_sealsSummoned", "_shadowBricksUsed", "_shadowRiftCombats", "_shatteringPunchUsed", "_shortOrderCookCharge", "_shrubCharge", "_slimeVialsHarvested", "_sloppyDinerBeachBucks", "_smilesOfMrA", "_smithsnessSummons", "_smoochArmyHQCombats", "_snojoFreeFights", "_snojoParts", "_snokebombUsed", "_snowconeSummons", "_snowglobeDrops", "_snowmanHatPlaceUsed", "_snowSuitCount", "_sourceTerminalDigitizeMonsterCount", "_sourceTerminalDigitizeUses", "_sourceTerminalDuplicateUses", "_sourceTerminalEnhanceUses", "_sourceTerminalExtrudes", "_sourceTerminalPortscanUses", "_spaceFurDropsCrown", "_spacegatePlanetIndex", "_spacegateTurnsLeft", "_spaceJellyfishDrops", "_speakeasyDrinksDrunk", "_speakeasyFreeFights", "_spelunkerCharges", "_spelunkingTalesDrops", "_spikolodonSpikeUses", "_spiritOfTheMountainsAdvs", "_spookyJellyUses", "_stackLumpsUses", "_steamCardDrops", "_stickerSummons", "_stinkyCheeseCount", "_stressBallSqueezes", "_sugarSummons", "_summonResortPassesUsed", "_surprisinglySweetSlashUsed", "_surprisinglySweetStabUsed", "_sweatOutSomeBoozeUsed", "_taffyRareSummons", "_taffyYellowSummons", "_tearawayPantsAdvs", "_thanksgettingFoodsEaten", "_thingfinderCasts", "_thinknerdPackageDrops", "_thorsPliersCrafting", "_timeHelmetAdv", "_timeCopsFoughtToday", "_timeSpinnerMinutesUsed", "_tokenDrops", "_transponderDrops", "_turkeyBlastersUsed", "_turkeyBooze", "_turkeyMuscle", "_turkeyMyst", "_turkeyMoxie", "_unaccompaniedMinerUsed", "_unblemishedPearlAnemoneMineProgress", "_unblemishedPearlDiveBarProgress", "_unblemishedPearlMadnessReefProgress", "_unblemishedPearlMarinaraTrenchProgress", "_unblemishedPearlTheBriniestDeepestsProgress", "_unconsciousCollectiveCharge", "_universalSeasoningsUsed", "_universeCalculated", "_universeImploded", "_usedReplicaBatoomerang", "_vampyreCloakeFormUses", "_villainLairProgress", "_vitachocCapsulesUsed", "_vmaskAdv", "_voidFreeFights", "_volcanoItem1", "_volcanoItem2", "_volcanoItem3", "_volcanoItemCount1", "_volcanoItemCount2", "_volcanoItemCount3", "_voteFreeFights", "_VYKEACompanionLevel", "_warbearAutoAnvilCrafting", "_waxGlobDrops", "_whiteRiceDrops", "_witchessFights", "_xoHugsUsed", "_yellowPixelDropsCrown", "_zapCount", "_zombieSmashPocketsUsed", "lastNoncombat15", "lastNoncombat257", "lastNoncombat270", "lastNoncombat273", "lastNoncombat280", "lastNoncombat283", "lastNoncombat297", "lastNoncombat322", "lastNoncombat323", "lastNoncombat324", "lastNoncombat341", "lastNoncombat343", "lastNoncombat384", "lastNoncombat386", "lastNoncombat391", "lastNoncombat392", "lastNoncombat394", "lastNoncombat405", "lastNoncombat406", "lastNoncombat408", "lastNoncombat439", "lastNoncombat440", "lastNoncombat441", "lastNoncombat450", "lastNoncombat528", "lastNoncombat533", "lastNoncombat539", "lastNoncombat540", "lastNoncombat541", "lastNoncombat588", "lastNoncombat589", "lastNoncombat590", "lastNoncombat591", "lastNoncombat592"]));
var PREFS = new Map([[template_string_$skill(_templateObject79 || (_templateObject79 = utils_taggedTemplateLiteral(["BCZ: Blood Geyser"]))), "_bczBloodGeyserCasts"], [template_string_$skill(_templateObject80 || (_templateObject80 = utils_taggedTemplateLiteral(["BCZ: Refracted Gaze"]))), "_bczRefractedGazeCasts"], [template_string_$skill(_templateObject81 || (_templateObject81 = utils_taggedTemplateLiteral(["BCZ: Sweat Bullets"]))), "_bczSweatBulletsCasts"], [template_string_$skill(_templateObject82 || (_templateObject82 = utils_taggedTemplateLiteral(["BCZ: Blood Bath"]))), "_bczBloodBathCasts"], [template_string_$skill(_templateObject83 || (_templateObject83 = utils_taggedTemplateLiteral(["BCZ: Dial it up to 11"]))), "_bczDialitupCasts"], [template_string_$skill(_templateObject84 || (_templateObject84 = utils_taggedTemplateLiteral(["BCZ: Sweat Equity"]))), "_bczSweatEquityCasts"], [template_string_$skill(_templateObject85 || (_templateObject85 = utils_taggedTemplateLiteral(["BCZ: Create Blood Thinner"]))), "_bczBloodThinnerCasts"], [template_string_$skill(_templateObject86 || (_templateObject86 = utils_taggedTemplateLiteral(["BCZ: Prepare Spinal Tapas"]))), "_bczSpinalTapasCasts"], [template_string_$skill(_templateObject87 || (_templateObject87 = utils_taggedTemplateLiteral(["BCZ: Craft a Pheromone Cocktail"]))), "_bczPheromoneCocktailCasts"]]);

/**
 * @param skill The BCZ skill to check.
 * @returns The number of casts of the skill already used, parsing the pref.
 */
function timesCast(skill) {
  var pref = PREFS.get(skill);
  if (!pref) return 0;
  return property_get(pref, 0);
}

/**
 * @param skill The BCZ skill to check.
 * @returns The substat used to cast the skill.
 */
function substatUsed(skill) {
  var cost = COSTS.get(skill);
  if (!cost) return null;
  return cost;
}

/**
 * @param skill The BCZ skill to check.
 * @param statFloor Minimum base stat you want to keep.
 * @returns The number of casts you can achieve of the selected skill before hitting the given stat floor.
 */
function availableCasts(skill, statFloor) {
  if (!utils_have_()) return 0;
  var stat = substatUsed(skill);
  if (!stat) return 0;

  // const currentStat = myBasestat(stat);
  var currentStat = (0,external_kolmafia_namespaceObject.myBasestat)(stat);
  var subStatFloor = statFloor ** 2;
  var casts = 0;
  var remainingStat = currentStat;
  for (var i = timesCast(skill); i < 25; i++) {
    // 25 is abritrary
    var nextCost = skillCost(skill);
    if (remainingStat - nextCost < subStatFloor) break;
    remainingStat -= nextCost;
    casts++;
  }
  return casts;
}

/**
 * @param skill The BCZ skill to cast.
 * @param statFloor Minimum base stat you want to keep.
 * @returns Whether you successfully cast the spell.
 */
function castDownTo(skill, statFloor) {
  if (!utils_have_() || !COSTS.get(skill)) return false;
  var casts = availableCasts(skill, statFloor);
  while (casts) {
    if (!(0,external_kolmafia_namespaceObject.useSkill)(skill, casts)) return false;
    casts = availableCasts(skill, statFloor);
  }
  return true;
}
;// CONCATENATED MODULE: ./src/args.ts
var args_templateObject, args_templateObject2, args_templateObject3, args_templateObject4, args_templateObject5, args_templateObject6;
function args_toConsumableArray(arr) { return args_arrayWithoutHoles(arr) || args_iterableToArray(arr) || args_unsupportedIterableToArray(arr) || args_nonIterableSpread(); }
function args_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function args_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return args_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return args_arrayLikeToArray(o, minLen); }
function args_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function args_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return args_arrayLikeToArray(arr); }
function args_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function args_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var args = Args.create("CandyWrapper", "Written by Seraphiii. This is a full-day wrapper for Community Service. It aims to be a single-press script that will take you through your Aftercore and Community Service legs. It chooses to perm learned skills upon ascension.", {
  version: Args.flag({
    help: "Output script version number and exit.",
    default: false,
    setting: ""
  }),
  list: Args.flag({
    help: "Show the status of all tasks and exit.",
    setting: ""
  }),
  profits: Args.flag({
    help: "Print out daily profit and exit.",
    setting: ""
  }),
  cs: Args.flag({
    help: "Ascend into and run CS.",
    default: false,
    setting: ""
  }),
  smol: Args.flag({
    help: "Ascend into and run smol.",
    default: false,
    setting: ""
  }),
  casual: Args.flag({
    help: "Ascend into and run casual.",
    default: false,
    setting: ""
  }),
  robot: Args.flag({
    help: "Ascend into and run You, Robot.",
    default: false,
    setting: ""
  }),
  zooto: Args.flag({
    help: "Ascend into and run Zootomist",
    default: false,
    setting: ""
  }),
  ih8u: Args.flag({
    help: "Ascend into and run 11 Things I Hate About U",
    default: false,
    setting: ""
  }),
  crimbo: Args.flag({
    help: "Farm Crimbo instead of Garbo",
    default: false,
    setting: ""
  }),
  chrono: Args.flag({
    help: "Farm TTT instead of Garbo",
    default: false,
    setting: ""
  }),
  ween: Args.flag({
    help: "Run Halloween instead of Garbo",
    default: false,
    setting: ""
  }),
  //partial run args
  actions: Args.number({
    help: "Maximum number of actions to perform, if given. Can be used to execute just a few steps at a time."
  }),
  abort: Args.string({
    help: "If given, abort during the prepare() step for the task with matching name."
  }),
  //configuration args
  pvp: Args.flag({
    help: "If true, break hippy stone and do pvp.",
    default: false
  }),
  safepvp: Args.flag({
    help: "If true, break hippy stone and do only before ascension.",
    default: false
  }),
  pvpTarget: Args.string({
    help: "When doing PvP, what should we fight for? fame, loot or flowers?",
    default: "flowers"
  }),
  astralpet: Args.custom({
    help: "Choose the astral pet you want to buy in valhalla",
    options: template_string_$items(args_templateObject || (args_templateObject = args_taggedTemplateLiteral(["astral bludgeon, astral shield, astral chapeau, astral bracer, astral longbow, astral shorts, astral mace, astral trousers, astral ring, astral statuette, astral pistol, astral mask, astral pet sweater, astral shirt, astral belt, none"]))).map(it => [it]),
    default: template_string_$item(args_templateObject2 || (args_templateObject2 = args_taggedTemplateLiteral(["astral pet sweater"])))
  }, external_kolmafia_namespaceObject.Item.get, "ITEM"),
  carpe: Args.flag({
    help: "Should we skip acquiring Carpe?",
    default: false
  }),
  moonsign: Args.custom({
    help: "Choose the moonsign you want to ascend into",
    options: ["mongoose", "wallaby", "vole", "platypus", "opossum", "marmot", "wombat", "blender", "packrat"].map(str => [toMoonSign(str)]),
    default: toMoonSign("blender")
  }, toMoonSign, "MOONSIGN"),
  class: Args.custom({
    help: "Choose your default class, if CandyWrapper doesn't have any other goals this run",
    options: $classes(args_templateObject3 || (args_templateObject3 = args_taggedTemplateLiteral(["Seal Clubber, Turtle Tamer, Pastamancer, Sauceror, Disco Bandit, Accordion Thief"]))).map(cl => [cl]),
    default: $class(args_templateObject4 || (args_templateObject4 = args_taggedTemplateLiteral(["Seal Clubber"])))
  }, external_kolmafia_namespaceObject.toClass, "CLASS"),
  clan: Args.string({
    help: "Your VIP Clan. CandyWrapper will whitelist into it at the beginning of your day. Requires clan whitelist.",
    default: ""
  }),
  csscript: Args.string({
    help: "The command that will do your Community Service run for you. Include any arguments desired.",
    default: "folgercs"
  }),
  smolscript: Args.string({
    help: "The command that will do your smol run for you. Include any arguments desired.",
    default: "loopsmol"
  }),
  casualscript: Args.string({
    help: "The command that will do your casual run for you. Include any arguments desired.",
    default: ""
  }),
  robotscript: Args.string({
    help: "The command that will do your You, Robot run for you. Include any arguments desired.",
    default: ""
  }),
  ih8uscript: Args.string({
    help: "The command that will do your You, Robot run for you. Include any arguments desired.",
    default: ""
  }),
  pulls: Args.items({
    help: "A list of items to pull at the start of the smol run.",
    default: [].concat(args_toConsumableArray(template_string_$items(args_templateObject5 || (args_templateObject5 = args_taggedTemplateLiteral(["mafia thumb ring, lucky gold ring"])))), args_toConsumableArray(property_get("stenchAirportAlways") || property_get("_stenchAirportToday") ? [] : template_string_$items(args_templateObject6 || (args_templateObject6 = args_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"])))))
  }),
  garbo: Args.string({
    help: "The command that will be used to diet and use all your adventures after reaching level 13 in Day 1 aftercore.",
    default: "garbo"
  }),
  garboascend: Args.string({
    help: "The command that will be used to diet and use all your adventures in Day 2 aftercore.",
    default: "garbo ascend"
  }),
  crimboscript: Args.string({
    help: "The command that will be used to run a crimbo farming script - note that if no script is provided, we will default to garbo",
    default: ""
  }),
  chronoscript: Args.string({
    help: "The command that will be used to run a TTT farming script - note that if no script is provided, we will default to garbo",
    default: ""
  }),
  itemcleanup: Args.string({
    help: "The script that will be used to mallsale items after a run",
    default: ""
  }),
  halloween: Args.flag({
    help: "Should we warn you when tomorrow is Halloween so you can prepare a steel organ?",
    default: true
  }),
  targetmonster: Args.string({
    help: "Define a specific monster for Garbo to target; note that the wrapper will find something useful for you!",
    default: ""
  }),
  test: Args.flag({
    help: "test",
    default: false
  })
});
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2022/JuneCleaver.js


var cleaver = (0,external_kolmafia_namespaceObject.toItem)("June cleaver");
/**
 * Determines whether you currently `have` the June cleaver
 *
 * @returns Whether you currently `have` the June cleaver
 */
function JuneCleaver_have() {
  return availableAmount(cleaver) > 0;
}
/**
 * Determines the number of cleaver-combats it takes to get a particular encounter number.
 *
 * @param encounters The ordinal value of the June cleaver encounter you're asking about
 * @returns The number of cleaver-combats it takes to get a particular encounter number--this is agnostic of your current fights.
 */
function getInterval() {
  var _encounters;
  var encounters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : get("_juneCleaverEncounters");
  return (_encounters = [1, 6, 10, 12, 15, 20][encounters]) !== null && _encounters !== void 0 ? _encounters : 30;
}
/**
 * Determines the number of cleaver-combats it takes to get a particular encounter number, when a skip is in the mix
 *
 * @param encounters The ordinal value of the June cleaver encounter you're asking about, assuming you've skipped
 * @returns The number of cleaver-combats it would take to get a particular encounter after skipping.
 */
function getSkippedInterval() {
  var _encounters2;
  var encounters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : get("_juneCleaverEncounters");
  return (_encounters2 = [1, 2, 3, 3, 4, 5][encounters]) !== null && _encounters2 !== void 0 ? _encounters2 : 8;
}
/**
 * Determines the amount of bonus elemental damage your cleaver currently grants
 *
 * @param element The element in question
 * @returns The bonus damage your cleaver currently gives for a given element.
 */
function damage(element) {
  return get("_juneCleaver".concat(element));
}
/**
 * Determines the number of times today you can skip a june cleaver choice
 *
 * @returns The number of additional times you can select option 4 in a cleaver choice today.
 */
function skipsRemaining() {
  return 5 - get("_juneCleaverSkips");
}
var choices = [1467, 1468, 1469, 1470, 1471, 1472, 1473, 1474, 1475];
/**
 * Returns the current June cleaver queue; you are not currently able to encounter any June cleaver choice adventure in this list
 *
 * @returns An array consisting of the cleaver choice adventures currently in the queue.
 */
function queue() {
  return get("juneCleaverQueue").split(",").filter(x => x.trim().length > 0).map(x => parseInt(x));
}
/**
 * Determines which choices are currently eligible to be encountered with your June cleaver
 *
 * @returns An array consisting of the cleaver choice adventures not currently in the queue.
 */
function choicesAvailable() {
  var currentQueue = queue();
  return choices.filter(choice => !currentQueue.includes(choice));
}
;// CONCATENATED MODULE: ./src/tasks/structure.ts

// eslint-disable-next-line no-restricted-syntax
var Leg = /*#__PURE__*/function (Leg) {
  Leg[Leg["Aftercore"] = 0] = "Aftercore";
  Leg[Leg["Run"] = 1] = "Run";
  return Leg;
}({});
function getCurrentLeg() {
  if ((0,external_kolmafia_namespaceObject.myDaycount)() === 1) return Leg.Run;
  return Leg.Aftercore;
}
;// CONCATENATED MODULE: ./src/engine/engine.ts
var engine_engine_templateObject;
function engine_engine_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function engine_engine_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? engine_engine_ownKeys(Object(source), !0).forEach(function (key) { engine_engine_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : engine_engine_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function engine_engine_toConsumableArray(arr) { return engine_engine_arrayWithoutHoles(arr) || engine_engine_iterableToArray(arr) || engine_engine_unsupportedIterableToArray(arr) || engine_engine_nonIterableSpread(); }
function engine_engine_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function engine_engine_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return engine_engine_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return engine_engine_arrayLikeToArray(o, minLen); }
function engine_engine_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function engine_engine_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return engine_engine_arrayLikeToArray(arr); }
function engine_engine_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function engine_engine_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function engine_engine_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function engine_engine_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, engine_engine_toPropertyKey(descriptor.key), descriptor); } }
function engine_engine_createClass(Constructor, protoProps, staticProps) { if (protoProps) engine_engine_defineProperties(Constructor.prototype, protoProps); if (staticProps) engine_engine_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function engine_get() { if (typeof Reflect !== "undefined" && Reflect.get) { engine_get = Reflect.get.bind(); } else { engine_get = function _get(target, property, receiver) { var base = engine_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return engine_get.apply(this, arguments); }
function engine_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = engine_getPrototypeOf(object); if (object === null) break; } return object; }
function engine_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) engine_setPrototypeOf(subClass, superClass); }
function engine_setPrototypeOf(o, p) { engine_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return engine_setPrototypeOf(o, p); }
function engine_createSuper(Derived) { var hasNativeReflectConstruct = engine_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = engine_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = engine_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return engine_possibleConstructorReturn(this, result); }; }
function engine_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return engine_assertThisInitialized(self); }
function engine_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function engine_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function engine_getPrototypeOf(o) { engine_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return engine_getPrototypeOf(o); }
function engine_engine_defineProperty(obj, key, value) { key = engine_engine_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function engine_engine_toPropertyKey(arg) { var key = engine_engine_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function engine_engine_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var engine_grimoireCCS = "grimoire_macro";
var ccsAbortString = "if pastround 2;abort Failed to finish combat in autoattack;endif;";
var ProfitTrackingEngine = /*#__PURE__*/function (_Engine) {
  engine_inherits(ProfitTrackingEngine, _Engine);
  var _super = engine_createSuper(ProfitTrackingEngine);
  function ProfitTrackingEngine(tasks, key) {
    var _this;
    engine_engine_classCallCheck(this, ProfitTrackingEngine);
    _this = _super.call(this, tasks);
    engine_engine_defineProperty(engine_assertThisInitialized(_this), "profits", void 0);
    _this.profits = new ProfitTracker(key);
    return _this;
  }
  engine_engine_createClass(ProfitTrackingEngine, [{
    key: "setChoices",
    value: function setChoices(task, manager) {
      engine_get(engine_getPrototypeOf(ProfitTrackingEngine.prototype), "setChoices", this).call(this, task, manager);
      if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(engine_engine_templateObject || (engine_engine_templateObject = engine_engine_taggedTemplateLiteral(["June cleaver"])))) > 0) {
        this.propertyManager.setChoices(Object.fromEntries(choices.map(choice => [choice, shouldSkip(choice) ? 4 : bestJuneCleaverOption(choice)])));
      }
    }
  }, {
    key: "setCombat",
    value: function setCombat(task, task_combat, task_resources) {
      var _this$options;
      // Save regular combat macro
      var macro = task_combat.compile(task_resources, (_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.combat_defaults, task.do instanceof external_kolmafia_namespaceObject.Location ? task.do : undefined);
      if (macro.toString().length > 1) {
        macro.save();
        if (!this.options.ccs) {
          // Use the macro through a CCS file
          var otherCCSEntries = task_combat.compileCcs();
          var ccsContents = ["[default]", "\"".concat(ccsAbortString).concat(macro.toString(), "\"")].concat(engine_engine_toConsumableArray(otherCCSEntries)).join("\n");

          // Log Macro + other CCS
          (0,external_kolmafia_namespaceObject.logprint)("CCS: ".concat(ccsContents.replace("\n", "\\n ")));
          if (ccsContents !== this.cachedCcsContents) {
            (0,external_kolmafia_namespaceObject.writeCcs)(ccsContents, engine_grimoireCCS);
            (0,external_kolmafia_namespaceObject.cliExecute)("ccs ".concat(engine_grimoireCCS)); // force Mafia to reparse the ccs
            var autoattack = task_combat.compileAutoattack().step(macro);
            if (autoattack.toString().length > 1) {
              autoattack.save();
              autoattack.setAutoAttack();
            } else {
              (0,external_kolmafia_namespaceObject.setAutoAttack)(0);
            }
            this.cachedCcsContents = ccsContents;
          }
        }
      }
    }
  }, {
    key: "checkLimits",
    value: function checkLimits(task, postcondition) {
      if (task.clear && !(task.clear instanceof Array)) task.clear = task.clear === "all" ? ["outfit", "macro"] : [task.clear]; //convert to an array of appropriate strings
      if (task.clear && task.clear.includes("macro")) this.cachedCcsContents = "";
      if (task.clear && task.clear.includes("outfit")) {
        clearMaximizerCache();
      }
      engine_get(engine_getPrototypeOf(ProfitTrackingEngine.prototype), "checkLimits", this).call(this, engine_engine_objectSpread({
        limit: {
          tries: 1
        }
      }, task), postcondition); //sets the default value of limit
    }
  }, {
    key: "execute",
    value: function execute(task) {
      try {
        engine_get(engine_getPrototypeOf(ProfitTrackingEngine.prototype), "execute", this).call(this, task);
      } finally {
        var _task$tracking;
        this.profits.record("".concat(getCurrentLeg(), "@").concat((_task$tracking = task.tracking) !== null && _task$tracking !== void 0 ? _task$tracking : "Other"));
      }
    }
  }, {
    key: "destruct",
    value: function destruct() {
      engine_get(engine_getPrototypeOf(ProfitTrackingEngine.prototype), "destruct", this).call(this);
      this.profits.save();
      printProfits(this.profits.all());
    }
  }]);
  return ProfitTrackingEngine;
}(Engine);
function shouldSkip(choice) {
  var skip = [1468, 1470, 1472, 1473, 1474];
  return skip.includes(choice) && property_get("_juneCleaverSkips") < 5;
}
function bestJuneCleaverOption(choice) {
  var _choiceTable$choice;
  var choiceTable = {
    1467: 3,
    // Poetic Justice
    1468: 2,
    // Aunts not Ants
    1469: 3,
    // Beware of Alligator
    1470: 2,
    // Teacher's Pet
    1471: 1,
    // Lost and Found
    1472: 1,
    // Summer Days
    1473: 1,
    // Bath Time
    1474: 2,
    // Delicious Sprouts
    1475: 1 // Hypnotic Master
  };

  return (_choiceTable$choice = choiceTable[choice]) !== null && _choiceTable$choice !== void 0 ? _choiceTable$choice : 0;
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2024/TakerSpace.js
var TakerSpace_templateObject, TakerSpace_templateObject2, TakerSpace_templateObject3, TakerSpace_templateObject4, TakerSpace_templateObject5, TakerSpace_templateObject6, TakerSpace_templateObject7, TakerSpace_templateObject8, TakerSpace_templateObject9, TakerSpace_templateObject10, TakerSpace_templateObject11, TakerSpace_templateObject12, TakerSpace_templateObject13, TakerSpace_templateObject14, TakerSpace_templateObject15, TakerSpace_templateObject16, TakerSpace_templateObject17, TakerSpace_templateObject18;
function TakerSpace_slicedToArray(arr, i) { return TakerSpace_arrayWithHoles(arr) || TakerSpace_iterableToArrayLimit(arr, i) || TakerSpace_unsupportedIterableToArray(arr, i) || TakerSpace_nonIterableRest(); }
function TakerSpace_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function TakerSpace_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function TakerSpace_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function TakerSpace_toConsumableArray(arr) { return TakerSpace_arrayWithoutHoles(arr) || TakerSpace_iterableToArray(arr) || TakerSpace_unsupportedIterableToArray(arr) || TakerSpace_nonIterableSpread(); }
function TakerSpace_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function TakerSpace_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TakerSpace_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TakerSpace_arrayLikeToArray(o, minLen); }
function TakerSpace_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function TakerSpace_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return TakerSpace_arrayLikeToArray(arr); }
function TakerSpace_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function TakerSpace_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var item = template_string_$item(TakerSpace_templateObject || (TakerSpace_templateObject = TakerSpace_taggedTemplateLiteral(["TakerSpace letter of Marque"])));
/**
 * Determines whether the TakerSpace letter of Marque is your current workshed
 *
 * @returns Whether the TakerSpace letter of Marque is your current workshed
 */
function installed() {
  return (0,external_kolmafia_namespaceObject.getWorkshed)() === item;
}
/**
 * Determines whether you `have` the TakerSpace letter of Marque (or if it is installed)
 *
 * @returns Whether you `have` the TakerSpace letter of Marque or it's installed
 */
function TakerSpace_have() {
  return installed() || have_(item);
}
var RESOURCES = ["Spice", "Rum", "Anchor", "Mast", "Silk", "Gold"];
var RECIPES = new Map([[template_string_$item(TakerSpace_templateObject2 || (TakerSpace_templateObject2 = TakerSpace_taggedTemplateLiteral(["deft pirate hook"]))), [0, 0, 1, 1, 0, 1]], [template_string_$item(TakerSpace_templateObject3 || (TakerSpace_templateObject3 = TakerSpace_taggedTemplateLiteral(["iron tricorn hat"]))), [0, 0, 2, 1, 0, 0]], [template_string_$item(TakerSpace_templateObject4 || (TakerSpace_templateObject4 = TakerSpace_taggedTemplateLiteral(["jolly roger flag"]))), [0, 1, 0, 1, 1, 0]], [template_string_$item(TakerSpace_templateObject5 || (TakerSpace_templateObject5 = TakerSpace_taggedTemplateLiteral(["sleeping profane parrot"]))), [15, 3, 0, 0, 2, 1]], [template_string_$item(TakerSpace_templateObject6 || (TakerSpace_templateObject6 = TakerSpace_taggedTemplateLiteral(["pirrrate's currrse"]))), [2, 2, 0, 0, 0, 0]], [template_string_$item(TakerSpace_templateObject7 || (TakerSpace_templateObject7 = TakerSpace_taggedTemplateLiteral(["tankard of spiced rum"]))), [1, 2, 0, 0, 0, 0]], [template_string_$item(TakerSpace_templateObject8 || (TakerSpace_templateObject8 = TakerSpace_taggedTemplateLiteral(["packaged luxury garment"]))), [0, 0, 0, 0, 3, 2]], [template_string_$item(TakerSpace_templateObject9 || (TakerSpace_templateObject9 = TakerSpace_taggedTemplateLiteral(["harpoon"]))), [0, 0, 0, 2, 0, 0]], [template_string_$item(TakerSpace_templateObject10 || (TakerSpace_templateObject10 = TakerSpace_taggedTemplateLiteral(["chili powder cutlass"]))), [5, 0, 1, 0, 0, 0]], [template_string_$item(TakerSpace_templateObject11 || (TakerSpace_templateObject11 = TakerSpace_taggedTemplateLiteral(["cursed Aztec tamale"]))), [2, 0, 0, 0, 0, 0]], [template_string_$item(TakerSpace_templateObject12 || (TakerSpace_templateObject12 = TakerSpace_taggedTemplateLiteral(["jolly roger tattoo kit"]))), [0, 6, 1, 1, 0, 6]], [template_string_$item(TakerSpace_templateObject13 || (TakerSpace_templateObject13 = TakerSpace_taggedTemplateLiteral(["golden pet rock"]))), [0, 0, 0, 0, 0, 7]], [template_string_$item(TakerSpace_templateObject14 || (TakerSpace_templateObject14 = TakerSpace_taggedTemplateLiteral(["groggles"]))), [0, 6, 0, 0, 0, 0]], [template_string_$item(TakerSpace_templateObject15 || (TakerSpace_templateObject15 = TakerSpace_taggedTemplateLiteral(["pirate dinghy"]))), [0, 0, 1, 1, 1, 0]], [template_string_$item(TakerSpace_templateObject16 || (TakerSpace_templateObject16 = TakerSpace_taggedTemplateLiteral(["anchor bomb"]))), [0, 1, 3, 1, 0, 1]], [template_string_$item(TakerSpace_templateObject17 || (TakerSpace_templateObject17 = TakerSpace_taggedTemplateLiteral(["silky pirate drawers"]))), [0, 0, 0, 0, 2, 0]], [template_string_$item(TakerSpace_templateObject18 || (TakerSpace_templateObject18 = TakerSpace_taggedTemplateLiteral(["spices"]))), [1, 0, 0, 0, 0, 0]]]);
/**
 * @returns A copy of our map of all recipes
 */
function allRecipes() {
  return new Map(TakerSpace_toConsumableArray(RECIPES.entries()).map(_ref => {
    var _ref2 = TakerSpace_slicedToArray(_ref, 2),
      item = _ref2[0],
      recipe = _ref2[1];
    return [item, TakerSpace_toConsumableArray(recipe)];
  }));
}
var defaultAmount = resource => ["Silk", "Gold"].includes(resource) ? 1 : 3;
/**
 * Collect daily resources from takerspace if you haven't yet today and are able to
 * @returns Whether we successfully collected supplies
 */
function collect() {
  if (!installed() || property_get("_takerSpaceSuppliesDelivered")) return false;
  (0,external_kolmafia_namespaceObject.visitUrl)("campground.php?action=workshed", false);
  return property_get("_takerSpaceSuppliesDelivered");
}
/**
 * Determine how much of a resource you will have when the TakerSpace is installed
 * @param resource The resource in question
 * @returns The amount of that resource that you will have when the TakerSpace is installed
 */
function amount(resource) {
  collect();
  return property_get("takerSpace".concat(resource)) + (!installed() && !property_get("_workshedItemUsed") ? defaultAmount(resource) : 0);
}
/**
 * Determine the Recipe for a given item
 * @param item The item in question
 * @returns The Recipe for that item, as a length-6 array in the order Spice, Rum, Anchor, Mast, Silk, Gold
 */
function recipeFor(item) {
  var result = RECIPES.get(item);
  return result ? TakerSpace_toConsumableArray(result) : null;
}
/**
 * @returns Your current available resources, as a length-6 array in the order Spice, Rum, Anchor, Mast, Silk, Gold
 */
function currentResources() {
  collect();
  return RESOURCES.map(amount);
}
/**
 * Determine if you have enough resources to make a particular item
 * @param item The item in question
 * @param amount The number of the item to make; defaults to one
 * @returns Whether we have enough resources available to make the amount of the item
 */
function haveEnoughFor(item) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var recipe = recipeFor(item);
  if (!recipe) return false;
  return currentResources().every((resource, index) => resource >= amount * recipe[index]);
}
/**
 * Determines if you're currently able to make a particular item
 * @param item The item in question
 * @param amount The number of the item to make; defaults to one
 * @returns Whether we currently can make the item--that is, whether the TakerSpace is in your workshed and you have enough resources
 */
function canMake(item) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return installed() && haveEnoughFor(item, amount);
}
/**
 * Attempts to make a particular item
 * @param item The item in question
 * @param amount The number of the item to make; defaults to one
 * @returns Whether we succeeded in our endeavor
 */
function make(item) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return canMake(item, amount) && (0,external_kolmafia_namespaceObject.create)(item, amount);
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2022/TrainSet.js
var TrainSet_templateObject;
function TrainSet_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var TrainSet_item = template_string_$item(TrainSet_templateObject || (TrainSet_templateObject = TrainSet_taggedTemplateLiteral(["model train set"])));
/**
 * Determines whether the Model Train Set is your current workshed
 *
 * @returns Whether the Model Train Set is your current workshed
 */
function TrainSet_installed() {
  return (0,external_kolmafia_namespaceObject.getWorkshed)() === TrainSet_item;
}
/**
 * Determines whether you `have` the model train set (or if it is installed)
 *
 * @returns Whether you `have` the model train set or it's installed
 */
function TrainSet_have() {
  return TrainSet_installed() || have_(TrainSet_item);
}
var Station;
(function (Station) {
  /**
   * Unknown station
   */
  Station["UNKNOWN"] = "";
  /**
   * Empty station
   */
  Station["EMPTY"] = "empty";
  /**
   * Gain 800 meat
   */
  Station["GAIN_MEAT"] = "meat_mine";
  /**
   * Effect: Regenerate MP
   */
  Station["TOWER_FIZZY"] = "tower_fizzy";
  /**
   * Gain mus, mys, mox stats
   */
  Station["VIEWING_PLATFORM"] = "viewing_platform";
  /**
   * Effect: Hot resist, cold damage
   */
  Station["TOWER_FROZEN"] = "tower_frozen";
  /**
   * Effect: Stench resist, spooky damage
   */
  Station["SPOOKY_GRAVEYARD"] = "spooky_graveyard";
  /**
   * Get smut bridge part, or stats
   */
  Station["LOGGING_MILL"] = "logging_mill";
  /**
   * Get some candy
   */
  Station["CANDY_FACTORY"] = "candy_factory";
  /**
   * Double strength of next station
   */
  Station["COAL_HOPPER"] = "coal_hopper";
  /**
   * Effect: Cold resist, stench damage
   */
  Station["TOWER_SEWAGE"] = "tower_sewage";
  /**
   * Effect: Spooky resist, sleaze damage
   */
  Station["OIL_REFINERY"] = "oil_refinery";
  /**
   * Effect: Sleaze resist, hot damage
   */
  Station["OIL_BRIDGE"] = "oil_bridge";
  /**
   * Effect: Increased Monster Level
   */
  Station["WATER_BRIDGE"] = "water_bridge";
  /**
   * Get moxie stats
   */
  Station["GROIN_SILO"] = "groin_silo";
  /**
   * Get random booze
   */
  Station["GRAIN_SILO"] = "grain_silo";
  /**
   * Get mys stats
   */
  Station["BRAIN_SILO"] = "brain_silo";
  /**
   * Get muscle stats
   */
  Station["BRAWN_SILO"] = "brawn_silo";
  /**
   * Effect: 50% food drop
   */
  Station["PRAWN_SILO"] = "prawn_silo";
  /**
   * Dupe last food dropped, or gain random food
   */
  Station["TRACKSIDE_DINER"] = "trackside_diner";
  /**
   * Drop random ore, or trapper ore if known
   */
  Station["ORE_HOPPER"] = "ore_hopper";
})(Station || (Station = {}));
var trainsetEffects = new Map([[Station.TOWER_FIZZY, external_kolmafia_namespaceObject.Effect.get("Carbonated")], [Station.TOWER_FROZEN, external_kolmafia_namespaceObject.Effect.get("Frozen")], [Station.SPOOKY_GRAVEYARD, external_kolmafia_namespaceObject.Effect.get("Shivering Spine")], [Station.TOWER_SEWAGE, external_kolmafia_namespaceObject.Effect.get("Hot Soupy Garbage")], [Station.OIL_BRIDGE, external_kolmafia_namespaceObject.Effect.get("Burningly Oiled")], [Station.OIL_REFINERY, external_kolmafia_namespaceObject.Effect.get("Spookily Greasy")], [Station.WATER_BRIDGE, external_kolmafia_namespaceObject.Effect.get("Troubled Waters")], [Station.PRAWN_SILO, external_kolmafia_namespaceObject.Effect.get("Craving Prawns")]]);
var trainsetEffectsDoubled = new Map([[Station.TOWER_FIZZY, external_kolmafia_namespaceObject.Effect.get("Double Carbonated")], [Station.TOWER_FROZEN, external_kolmafia_namespaceObject.Effect.get("Double Frozen")], [Station.SPOOKY_GRAVEYARD, external_kolmafia_namespaceObject.Effect.get("Doubly Shivering Spine")], [Station.TOWER_SEWAGE, external_kolmafia_namespaceObject.Effect.get("Double Hot Soupy Garbage")], [Station.OIL_BRIDGE, external_kolmafia_namespaceObject.Effect.get("Doubly Burningly Oiled")], [Station.OIL_REFINERY, external_kolmafia_namespaceObject.Effect.get("Doubly Spookily Greasy")], [Station.WATER_BRIDGE, external_kolmafia_namespaceObject.Effect.get("Doubly Troubled Waters")], [Station.PRAWN_SILO, external_kolmafia_namespaceObject.Effect.get("Doubly Craving Prawns")]]);
/**
 * Returns an effect--if one exists--for a given train station
 *
 * @param station The train station to check the effect of
 * @returns The effect associated with the given station
 */
function effect(station) {
  var _trainsetEffects$get;
  return (_trainsetEffects$get = trainsetEffects.get(station)) !== null && _trainsetEffects$get !== void 0 ? _trainsetEffects$get : null;
}
/**
 * Returns an effect--if one exists--for a given train station, assuming it's been primed by the coal station
 *
 * @param station The train station to check the doubled effect of
 * @returns The effect associated with given station, under the influence of coal
 */
function doubledEffect(station) {
  var _trainsetEffectsDoubl;
  return (_trainsetEffectsDoubl = trainsetEffectsDoubled.get(station)) !== null && _trainsetEffectsDoubl !== void 0 ? _trainsetEffectsDoubl : null;
}
/**
 * Determines the current configuration of train stations
 *
 * @returns An 8-tuple consisting of the stations currently installed in your Model Train Set; this functions even if the Model Train Set isn't your active workshed
 */
function cycle() {
  return property_get("trainsetConfiguration").split(",");
}
/**
 * Determines how many turns until you can next configure the Model Train Set
 *
 * @returns How many turns until you can next configure the Model Train Set
 */
function nextConfigurable() {
  return utils_clamp(property_get("lastTrainsetConfiguration") + 40 - property_get("trainsetPosition"), 0, 40);
}
/**
 * Determines whether you can currently configure your Model Train Set
 *
 * @returns Whether you can currently configure your Model Train Set
 */
function canConfigure() {
  return TrainSet_installed() && !nextConfigurable();
}
var pieces = [Station.EMPTY, Station.GAIN_MEAT, Station.TOWER_FIZZY, Station.VIEWING_PLATFORM, Station.TOWER_FROZEN, Station.SPOOKY_GRAVEYARD, Station.LOGGING_MILL, Station.CANDY_FACTORY, Station.COAL_HOPPER, Station.TOWER_SEWAGE, Station.UNKNOWN, Station.OIL_REFINERY, Station.OIL_BRIDGE, Station.WATER_BRIDGE, Station.GROIN_SILO, Station.GRAIN_SILO, Station.BRAIN_SILO, Station.BRAWN_SILO, Station.PRAWN_SILO, Station.TRACKSIDE_DINER, Station.ORE_HOPPER];
/**
 * Converts a given station to the integer value KoL associates with them
 *
 * @param station The station in question
 * @returns The integer value KoL assigns the train station in question
 */
function stationToInt(station) {
  return pieces.indexOf(station);
}
/**
 * Sets your model train station to the given configuration, if able
 *
 * @param configuration The cycle to try to set your model train station to
 * @returns Whether your model train station matches the given configuration
 */
function setConfiguration(configuration) {
  if (!canConfigure()) return false;
  (0,external_kolmafia_namespaceObject.visitUrl)("campground.php?action=workshed");
  (0,external_kolmafia_namespaceObject.runChoice)(1, "forceoption=0".concat(configuration.map((station, index) => "&slot[".concat(index, "]=").concat(stationToInt(station))).join("")));
  (0,external_kolmafia_namespaceObject.visitUrl)("main.php");
  var currentConfiguration = cycle();
  return configuration.every((station, index) => station === currentConfiguration[index]);
}
/**
 * Determines the next station you expect to encounter when the Model Train Station is active
 *
 * @returns The next station you expect to encounter when the Model Train Station is active
 */
function next() {
  return cycle()[get("trainsetPosition") % 8];
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2024/AprilingBandHelmet.js
var AprilingBandHelmet_templateObject;
function AprilingBandHelmet_slicedToArray(arr, i) { return AprilingBandHelmet_arrayWithHoles(arr) || AprilingBandHelmet_iterableToArrayLimit(arr, i) || AprilingBandHelmet_unsupportedIterableToArray(arr, i) || AprilingBandHelmet_nonIterableRest(); }
function AprilingBandHelmet_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function AprilingBandHelmet_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return AprilingBandHelmet_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return AprilingBandHelmet_arrayLikeToArray(o, minLen); }
function AprilingBandHelmet_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function AprilingBandHelmet_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function AprilingBandHelmet_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function AprilingBandHelmet_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var helmet = template_string_$item(AprilingBandHelmet_templateObject || (AprilingBandHelmet_templateObject = AprilingBandHelmet_taggedTemplateLiteral(["Apriling band helmet"])));
/**
 * @returns whether you `have` the Apriling band helmet
 */
function AprilingBandHelmet_have() {
  return lib_have(helmet);
}
var MARCHING_SONGS = Object.freeze(["Apriling Band Patrol Beat", "Apriling Band Battle Cadence", "Apriling Band Celebration Bop"]);
var MARCHING_SONG_EFFECTS = Object.freeze(MARCHING_SONGS.map(song => (0,external_kolmafia_namespaceObject.toEffect)(song)));
var INSTRUMENTS = Object.freeze(["Apriling band saxophone", "Apriling band quad tom", "Apriling band tuba", "Apriling band staff", "Apriling band piccolo"]);
var INSTRUMENT_ITEMS = Object.freeze(INSTRUMENTS.map(instrument => (0,external_kolmafia_namespaceObject.toItem)(instrument)));
var visitConduct = () => (0,external_kolmafia_namespaceObject.visitUrl)("inventory.php?pwd&action=apriling");
/**
 * @returns Whether we can currently join a new section of our Apriling band
 */
function canJoinSection() {
  return AprilingBandHelmet_have() && property_get("_aprilBandInstruments") < 2;
}
function makeConductFunction(mafiaClass, canDo, set, offset) {
  return input => {
    if (!canDo()) return false;
    var _ref = typeof input === "string" ? [input, mafiaClass.get(input)] : [input.name, input],
      _ref2 = AprilingBandHelmet_slicedToArray(_ref, 2),
      name = _ref2[0],
      instance = _ref2[1];
    if (lib_have(instance)) return true;
    var key = set.indexOf(name);
    if (key === -1) return false;
    visitConduct();
    (0,external_kolmafia_namespaceObject.runChoice)(key + offset);
    (0,external_kolmafia_namespaceObject.runChoice)(9);
    return lib_have(instance);
  };
}
/**
 * Joins the given section of your Apriling band, returning whether you successfully obtained its instrument
 *
 * @param section The section of your band to join--either the instrument's name as a string, or the item itself.
 *
 * @returns Whether we have the item, at the end of all things
 */
var joinSection = makeConductFunction(external_kolmafia_namespaceObject.Item, canJoinSection, INSTRUMENTS, 4);
/**
 * @returns Whether we can currently change the marching song of our Apriling Band
 */
function canChangeSong() {
  return AprilingBandHelmet_have() && property_get("nextAprilBandTurn") <= (0,external_kolmafia_namespaceObject.totalTurnsPlayed)();
}
/**
 * Instructs your Apriling band to play the given song, returning whether it's successfully playing
 *
 * @param song The song for your band to play--either the effect's name or the effect itself.
 *
 * @returns Whether we have the effect, at the end of all things
 */
var changeSong = makeConductFunction(external_kolmafia_namespaceObject.Effect, canChangeSong, MARCHING_SONGS, 1);
/**
 * Conduct your Apriling band helmet
 *
 * @param result The instrument (as an item or string) or song (as an effect or string) you want out of this thing
 * @returns Whether we successfully completed the task
 */
function conduct(result) {
  if (result instanceof external_kolmafia_namespaceObject.Item || utils_arrayContains(result, INSTRUMENTS)) {
    return joinSection(result);
  }
  return changeSong(result);
}
/**
 * Plays a given Apriling band instrument
 *
 * @param instrument The instrument to play
 * @param acquire Whether or not we should obtain the instrument if we don't currently have it
 * @returns Whether we successfully played our instrument
 */
function play(instrument) {
  var acquire = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var item = instrument instanceof Item ? instrument : Item.get(instrument);
  if (!canPlay(instrument, acquire)) return false;
  if (acquire && !have_(item)) joinSection(item);
  var currentUsesRemaining = item.dailyusesleft;
  visitUrl("inventory.php?pwd=".concat(myHash(), "&iid=").concat(item.id, "&action=aprilplay"), false);
  return item.dailyusesleft !== currentUsesRemaining;
}
/**
 * Determine whether you can play an instrument
 * @param instrument The instrument you want to play
 * @param acquire Whether you're willing to obtain an instrument you don't already have
 * @returns Whether you can play that instrument
 */
function canPlay(instrument) {
  var acquire = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!AprilingBandHelmet_have()) return false;
  var item = instrument instanceof Item ? instrument : Item.get(instrument);
  if (!have_(item) && (!acquire || !canJoinSection())) return false;
  if (item.dailyusesleft <= 0) return false;
  return true;
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2022/CombatLoversLocket.js
var CombatLoversLocket_templateObject;
function CombatLoversLocket_slicedToArray(arr, i) { return CombatLoversLocket_arrayWithHoles(arr) || CombatLoversLocket_iterableToArrayLimit(arr, i) || CombatLoversLocket_unsupportedIterableToArray(arr, i) || CombatLoversLocket_nonIterableRest(); }
function CombatLoversLocket_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function CombatLoversLocket_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return CombatLoversLocket_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return CombatLoversLocket_arrayLikeToArray(o, minLen); }
function CombatLoversLocket_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function CombatLoversLocket_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function CombatLoversLocket_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function CombatLoversLocket_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var locket = template_string_$item(CombatLoversLocket_templateObject || (CombatLoversLocket_templateObject = CombatLoversLocket_taggedTemplateLiteral(["combat lover's locket"])));
/**
 * @returns Whether you `have` the Combat Lover's Locket
 */
function CombatLoversLocket_have() {
  return lib_have(locket);
}
/**
 * Filters the set of all unlocked locket monsters to only the ones available to be locketed right now.
 *
 * @returns An array consisting of all Monsters you can fight with your locket right now.
 */
function availableLocketMonsters() {
  if (reminiscesLeft() === 0) return [];
  return Object.entries(getLocketMonsters()).filter(_ref => {
    var _ref2 = CombatLoversLocket_slicedToArray(_ref, 2),
      unused = _ref2[1];
    return unused;
  }).map(_ref3 => {
    var _ref4 = CombatLoversLocket_slicedToArray(_ref3, 1),
      name = _ref4[0];
    return toMonster(name);
  });
}
/**
 * Parses getLocketMonsters and returns the collection of all Monsters as an Array.
 *
 * @returns An array consisting of all Monsters you can hypothetically fight, regardless of whether they've been fought today.
 */
function unlockedLocketMonsters() {
  return Object.entries(getLocketMonsters()).map(_ref5 => {
    var _ref6 = CombatLoversLocket_slicedToArray(_ref5, 1),
      name = _ref6[0];
    return toMonster(name);
  });
}
function parseLocketProperty() {
  return property_get("_locketMonstersFought").split(",").filter(id => id.trim().length > 0);
}
/**
 * Determines how many reminisces remain by parsing the _locketMonstersFought property.
 *
 * @returns The number of reminisces a player has available; 0 if they lack the Locket.
 */
function reminiscesLeft() {
  return CombatLoversLocket_have() ? utils_clamp(3 - parseLocketProperty().length, 0, 3) : 0;
}
/**
 * Determines which monsters were reminisced today by parsing the _locketMonstersFought property.
 *
 * @returns An array consisting of the Monsters reminisced today.
 */
function monstersReminisced() {
  return parseLocketProperty().map(id => (0,external_kolmafia_namespaceObject.toMonster)(id));
}
/**
 * Fight a Monster using the Combat Lover's Locket
 *
 * @param monster The Monster to fight
 * @param combatParams Any parameters you'd like to pass to `runCombat`
 * @returns false if we are unable to reminisce about this monster. Else, returns whether, at the end of all things, we have reminisced about this monster.
 */
function reminisce(monster) {
  if (!CombatLoversLocket_have() || reminiscesLeft() === 0 || !(0,external_kolmafia_namespaceObject.getLocketMonsters)()[monster.name]) {
    return false;
  }
  (0,external_kolmafia_namespaceObject.cliExecute)("reminisce ".concat(monster));
  for (var _len = arguments.length, combatParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    combatParams[_key - 1] = arguments[_key];
  }
  external_kolmafia_namespaceObject.runCombat.apply(void 0, combatParams);
  return monstersReminisced().includes(monster);
}
/**
 * This function efficiently evaluates all of an adventurer's possibly reminiscable monsters, placing them through a filtering criteria and evaluating them based on a passed function.
 *
 * @param criteria A filtering function for delineating which monsters are "fair game" for the search, such as "is this monster free".
 * @param value A function for deciding which monsters are "better" than others.
 * @returns A singular monster that fulfills the criteria function and maximizes the value function.
 */
function findMonster(criteria) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : () => 1;
  if (!CombatLoversLocket_have() || reminiscesLeft() === 0) return null;
  var options = availableLocketMonsters().filter(criteria);
  if (!options.length) return null;
  return maxBy(options, value);
}
/**
 * Determine if a monster is currently reminiscible/reminiscable.
 * @param monster The monster in question
 * @returns Whether we can currently reminisce that monster
 */
function canReminisce(monster) {
  return CombatLoversLocket_have() && reminiscesLeft() > 0 && Boolean((0,external_kolmafia_namespaceObject.getLocketMonsters)()["".concat(monster)]);
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2019/PocketProfessor.js
var PocketProfessor_templateObject, PocketProfessor_templateObject2, PocketProfessor_templateObject3;
function PocketProfessor_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var PocketProfessor_familiar = template_string_$familiar(PocketProfessor_templateObject || (PocketProfessor_templateObject = PocketProfessor_taggedTemplateLiteral(["Pocket Professor"])));
/**
 * @returns Whether you `have` the Pocket Professor
 */
function PocketProfessor_have() {
  return lib_have(PocketProfessor_familiar);
}
/**
 * @returns Whether or not you're currently able to `Deliver your Thesis`
 */
function canThesis() {
  return PocketProfessor_have() && PocketProfessor_familiar.experience >= 400 && !get("_thesisDelivered");
}
/**
 * Calculate the total number of lectures available to you given a particular familiar weight and chip-equipped status
 * @param weight The weight to calculate at--defaults to your current total familiar weight
 * @param includeChip Whether or not to include the memory chip--defaults to whether or not it's currently equipped
 * @returns The total number of lectures you're able to deliver, including ones you've already delivered today
 */
function totalAvailableLectures() {
  var weight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : totalFamiliarWeight(PocketProfessor_familiar);
  var includeChip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,external_kolmafia_namespaceObject.haveEquipped)(template_string_$item(PocketProfessor_templateObject2 || (PocketProfessor_templateObject2 = PocketProfessor_taggedTemplateLiteral(["Pocket Professor memory chip"]))));
  return (includeChip ? 2 : 0) + Math.floor(Math.sqrt(weight - 1));
}
/**
 * @returns The number of Pocket Professor lectures you've delivered today
 */
function lecturesDelivered() {
  return property_get("_pocketProfessorLectures");
}
/**
 * Calculate the number of unused lectures available to you given a particular familiar weight and chip-equipped status
 * @param weight The weight to calculate at--defaults to your current total familiar weight
 * @param includeChip Whether or not to include the memory chip--defaults to whether or not it's currently equipped
 * @returns The number of lectures you're able to deliver, accounting for any you've already delivered today
 */
function currentlyAvailableLectures() {
  var weight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : totalFamiliarWeight(PocketProfessor_familiar);
  var includeChip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,external_kolmafia_namespaceObject.haveEquipped)(template_string_$item(PocketProfessor_templateObject3 || (PocketProfessor_templateObject3 = PocketProfessor_taggedTemplateLiteral(["Pocket Professor memory chip"]))));
  return totalAvailableLectures(weight, includeChip) - lecturesDelivered();
}
;// CONCATENATED MODULE: ./src/beret.ts
var beret_templateObject, beret_templateObject2, beret_templateObject3, beret_templateObject4, beret_templateObject5, beret_templateObject6, beret_templateObject7, beret_templateObject8, beret_templateObject9, beret_templateObject10, beret_templateObject11, beret_templateObject12, beret_templateObject13, beret_templateObject14, beret_templateObject15, beret_templateObject16, beret_templateObject17, beret_templateObject18, beret_templateObject19, beret_templateObject20, beret_templateObject21, beret_templateObject22, beret_templateObject23, beret_templateObject24, beret_templateObject25, beret_templateObject26, beret_templateObject27, beret_templateObject28, beret_templateObject29, beret_templateObject30, beret_templateObject31, beret_templateObject32;
function beret_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = beret_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function beret_toConsumableArray(arr) { return beret_arrayWithoutHoles(arr) || beret_iterableToArray(arr) || beret_unsupportedIterableToArray(arr) || beret_nonIterableSpread(); }
function beret_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function beret_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function beret_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return beret_arrayLikeToArray(arr); }
function beret_slicedToArray(arr, i) { return beret_arrayWithHoles(arr) || beret_iterableToArrayLimit(arr, i) || beret_unsupportedIterableToArray(arr, i) || beret_nonIterableRest(); }
function beret_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function beret_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return beret_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return beret_arrayLikeToArray(o, minLen); }
function beret_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function beret_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function beret_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function beret_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



// eslint-disable-next-line libram/verify-constants
var beret = template_string_$item(beret_templateObject || (beret_templateObject = beret_taggedTemplateLiteral(["prismatic beret"])));
var valueEffect = (effect, duration, valuer) => typeof valuer === "function" ? valuer(effect, duration) : Array.isArray(valuer) ? Number(valuer.includes(effect)) * duration : sum(Object.entries(valuer), _ref => {
  var _ref2 = beret_slicedToArray(_ref, 2),
    modifier = _ref2[0],
    weight = _ref2[1];
  return weight * (0,external_kolmafia_namespaceObject.numericModifier)(effect, modifier);
});

/**
 * @returns Whether or not you have the prismatic beret
 */
function beret_have() {
  return lib_have(beret);
}
function getUseableClothes() {
  var buyItem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var availableItems = external_kolmafia_namespaceObject.Item.all().filter(i => (0,external_kolmafia_namespaceObject.canEquip)(i) && (lib_have(i) || buyItem && (0,external_kolmafia_namespaceObject.npcPrice)(i) > 0));
  var useableHats = lib_have(template_string_$familiar(beret_templateObject2 || (beret_templateObject2 = beret_taggedTemplateLiteral(["Mad Hatrack"])))) ? [].concat(beret_toConsumableArray(availableItems.filter(i => (0,external_kolmafia_namespaceObject.toSlot)(i) === $slot(beret_templateObject3 || (beret_templateObject3 = beret_taggedTemplateLiteral(["hat"]))))), [template_string_$item.none]) : [beret];
  var useablePants = [].concat(beret_toConsumableArray(availableItems.filter(i => (0,external_kolmafia_namespaceObject.toSlot)(i) === $slot(beret_templateObject4 || (beret_templateObject4 = beret_taggedTemplateLiteral(["pants"]))))), [template_string_$item.none]);
  var useableShirts = [].concat(beret_toConsumableArray(availableItems.filter(i => (0,external_kolmafia_namespaceObject.toSlot)(i) === $slot(beret_templateObject5 || (beret_templateObject5 = beret_taggedTemplateLiteral(["shirt"]))))), [template_string_$item.none]);
  return {
    useableHats,
    useablePants,
    useableShirts
  };
}
function availablePowersums(buyItem) {
  var taoMultiplier = lib_have(template_string_$skill(beret_templateObject6 || (beret_templateObject6 = beret_taggedTemplateLiteral(["Tao of the Terrapin"])))) ? 2 : 1;
  var _getUseableClothes = getUseableClothes(buyItem),
    useableHats = _getUseableClothes.useableHats,
    useablePants = _getUseableClothes.useablePants,
    useableShirts = _getUseableClothes.useableShirts;
  var hatPowers = beret_toConsumableArray(new Set(useableHats.map(i => taoMultiplier * (0,external_kolmafia_namespaceObject.getPower)(i))));
  var pantPowers = beret_toConsumableArray(new Set(useablePants.map(i => taoMultiplier * (0,external_kolmafia_namespaceObject.getPower)(i))));
  var shirtPowers = beret_toConsumableArray(new Set(useableShirts.map(i => (0,external_kolmafia_namespaceObject.getPower)(i))));
  return beret_toConsumableArray(new Set(hatPowers.flatMap(hat => pantPowers.flatMap(pant => shirtPowers.flatMap(shirt => hat + pant + shirt)))));
}
function scoreBusk(effects, effectValuer, uselessEffects) {
  var usefulEffects = effects.filter(_ref3 => {
    var _ref4 = beret_slicedToArray(_ref3, 1),
      effect = _ref4[0];
    return !uselessEffects.has(effect);
  });
  return sum(usefulEffects, _ref5 => {
    var _ref6 = beret_slicedToArray(_ref5, 2),
      effect = _ref6[0],
      duration = _ref6[1];
    return valueEffect(effect, duration, effectValuer);
  });
}

/**
 * Calculate the optimal power-sum at which to busk, given a weighted set of modifiers.
 * @param wantedEffects An array of Effects we care about; maximizes the number of those effects we end up with
 * @param buskUses How many busks should we assume we've cast? Defaults to the current number.
 * @param uselessEffects An array (defaults to empty) of effects not to consider for the purposes of busk valuation
 * @param buyItem Whether or not we should consider purchasing items from NPC stores; defaults to true
 * @returns The power-sum at which you'll find the optimal busk for this situation.
 */

/**
 * Calculate the optimal power-sum at which to busk, given a weighted set of modifiers.
 * @param weightedModifiers An object keyed by Numeric Modifiers, with their values representing weights
 * @param buskUses How many busks should we assume we've cast? Defaults to the current number.
 * @param uselessEffects An array (defaults to empty) of effects not to consider for the purposes of busk valuation
 * @param buyItem Whether or not we should consider purchasing items from NPC stores; defaults to true
 * @returns The power-sum at which you'll find the optimal busk for this situation.
 */

/**
 * Calculate the optimal power-sum at which to busk, given a weighted set of modifiers.
 * @param valueFunction A function that maps effects to values
 * @param buskUses How many busks should we assume we've cast? Defaults to the current number.
 * @param uselessEffects An array (defaults to empty) of effects not to consider for the purposes of busk valuation
 * @param buyItem Whether or not we should consider purchasing items from NPC stores; defaults to true
 * @returns The power-sum at which you'll find the optimal busk for this situation.
 */

/**
 * Calculate the optimal power-sum at which to busk, given a weighted set of modifiers.
 * @param effectValuer Either a function that maps effect-duration pairs to values, or an object keyed by numeric modifiers with weights as values, or an array of desired effects
 * @param buskUses How many busks should we assume we've cast? Defaults to the current number.
 * @param uselessEffects An array (defaults to empty) of effects not to consider for the purposes of busk valuation
 * @param buyItem Whether or not we should consider purchasing items from NPC stores; defaults to true
 * @returns The power-sum at which you'll find the optimal busk for this situation.
 */

/**
 * Calculate the optimal power-sum at which to busk, given a weighted set of modifiers.
 * @param effectValuer Either a function that maps effect-duration pairs to values, or an object keyed by numeric modifiers with weights as values, or an array of desired effects
 * @param buskUses How many busks should we assume we've cast? Defaults to the current number.
 * @param uselessEffects An array (defaults to empty) of effects not to consider for the purposes of busk valuation
 * @param buyItem Whether or not we should consider purchasing items from NPC stores; defaults to true
 * @returns The power-sum at which you'll find the optimal busk for this situation.
 */
function findOptimalOutfitPower(effectValuer) {
  var buskUses = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : property_get("_beretBuskingUses", 0);
  var uselessEffects = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var buyItem = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var uselessEffectSet = new Set(uselessEffects);
  var powersums = availablePowersums(buyItem);
  if (!powersums.length) return 0;
  return utils_maxBy(powersums, power => scoreBusk(Object.entries((0,external_kolmafia_namespaceObject.beretBuskingEffects)(power, buskUses)).map(_ref7 => {
    var _ref8 = beret_slicedToArray(_ref7, 2),
      effect = _ref8[0],
      duration = _ref8[1];
    return [(0,external_kolmafia_namespaceObject.toEffect)(effect), duration];
  }).filter(_ref9 => {
    var _ref10 = beret_slicedToArray(_ref9, 1),
      e = _ref10[0];
    return e !== template_string_$effect.none;
  }), effectValuer, uselessEffectSet));
}
var populateMap = (arr, max, double) => {
  var map = new Map();
  var _iterator = beret_createForOfIteratorHelper(arr),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var it = _step.value;
      var power = (0,external_kolmafia_namespaceObject.getPower)(it) * (double ? 2 : 1);
      if (power > max) continue;
      var existing = map.get(power);
      if (!existing || !lib_have(existing) && (lib_have(it) || (0,external_kolmafia_namespaceObject.npcPrice)(it) < (0,external_kolmafia_namespaceObject.npcPrice)(existing))) {
        map.set(power, it);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return map;
};
var relevantSlots = ["hat", "pants", "shirt"];
function functionalPrice(item) {
  var price = lib_have(item) || external_kolmafia_namespaceObject.Item.none ? 0 : (0,external_kolmafia_namespaceObject.npcPrice)(item);
  return price;
}
function outfitPrice(outfit) {
  var thing = sum(relevantSlots, slot => functionalPrice(outfit[slot]));
  return thing;
}
function findOutfit(power, buyItem) {
  var _getUseableClothes2 = getUseableClothes(buyItem),
    useableHats = _getUseableClothes2.useableHats,
    useablePants = _getUseableClothes2.useablePants,
    useableShirts = _getUseableClothes2.useableShirts;
  var hatPowers = populateMap(useableHats, power, lib_have(template_string_$skill(beret_templateObject7 || (beret_templateObject7 = beret_taggedTemplateLiteral(["Tao of the Terrapin"])))));
  var pantsPowers = populateMap(useablePants, power, lib_have(template_string_$skill(beret_templateObject8 || (beret_templateObject8 = beret_taggedTemplateLiteral(["Tao of the Terrapin"])))));
  var shirtPowers = populateMap(useableShirts, power, false);
  var outfits = beret_toConsumableArray(hatPowers).flatMap(_ref11 => {
    var _ref12 = beret_slicedToArray(_ref11, 2),
      hatPower = _ref12[0],
      hat = _ref12[1];
    return beret_toConsumableArray(pantsPowers).flatMap(_ref13 => {
      var _ref14 = beret_slicedToArray(_ref13, 2),
        pantsPower = _ref14[0],
        pants = _ref14[1];
      return beret_toConsumableArray(shirtPowers).flatMap(_ref15 => {
        var _ref16 = beret_slicedToArray(_ref15, 2),
          shirtPower = _ref16[0],
          shirt = _ref16[1];
        return hatPower + pantsPower + shirtPower === power ? {
          hat,
          pants,
          shirt
        } : [];
      });
    });
  });
  if (!outfits.length) return null;
  var outfit = utils_maxBy(outfits, outfitPrice, true);
  dist_logger.debug("Chose outfit ".concat(outfit.hat, " ").concat(outfit.shirt, " ").concat(outfit.pants));
  if (outfitPrice(outfit) > (0,external_kolmafia_namespaceObject.myMeat)()) return null;
  var _iterator2 = beret_createForOfIteratorHelper(relevantSlots),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var slot = _step2.value;
      var item = outfit[slot];
      if (lib_have(item) || item === external_kolmafia_namespaceObject.Item.none) {
        (0,external_kolmafia_namespaceObject.print)("Have ".concat(item, "!"));
        continue;
      }
      if (!(0,external_kolmafia_namespaceObject.buy)(item)) {
        dist_logger.debug("Failed to purchase ".concat(item));
        return null;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return outfit;
}

/**
 * Attempt to busk at a particular power
 * @param power The power in question
 * @param buyItem Whether to buy items from NPC shops to create an outfit
 * @returns If we successfully busked at that power
 */
function buskAt(power) {
  var buyItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (!beret_have()) return false;
  var initialUses = property_get("_beretBuskingUses", 0);
  if (initialUses >= 5) return false;
  var outfit = findOutfit(power, buyItem);
  if (!outfit) return false;
  var initialEquips = $slots(beret_templateObject9 || (beret_templateObject9 = beret_taggedTemplateLiteral(["hat, shirt, pants"]))).map(slot => (0,external_kolmafia_namespaceObject.equippedItem)(slot));
  var initialFamiliar = (0,external_kolmafia_namespaceObject.myFamiliar)();
  var initialFamequip = (0,external_kolmafia_namespaceObject.equippedItem)($slot(beret_templateObject10 || (beret_templateObject10 = beret_taggedTemplateLiteral(["familiar"]))));
  var hat = outfit.hat,
    pants = outfit.pants,
    shirt = outfit.shirt;
  (0,external_kolmafia_namespaceObject.equip)($slot(beret_templateObject11 || (beret_templateObject11 = beret_taggedTemplateLiteral(["hat"]))), hat);
  if (hat !== beret) {
    (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(beret_templateObject12 || (beret_templateObject12 = beret_taggedTemplateLiteral(["Mad Hatrack"]))));
    (0,external_kolmafia_namespaceObject.equip)($slot(beret_templateObject13 || (beret_templateObject13 = beret_taggedTemplateLiteral(["familiar"]))), beret);
  }
  (0,external_kolmafia_namespaceObject.equip)($slot(beret_templateObject14 || (beret_templateObject14 = beret_taggedTemplateLiteral(["shirt"]))), shirt);
  (0,external_kolmafia_namespaceObject.equip)($slot(beret_templateObject15 || (beret_templateObject15 = beret_taggedTemplateLiteral(["pants"]))), pants);
  var taoMultiplier = lib_have(template_string_$skill(beret_templateObject16 || (beret_templateObject16 = beret_taggedTemplateLiteral(["Tao of the Terrapin"])))) ? 2 : 1;
  try {
    if (taoMultiplier * ((0,external_kolmafia_namespaceObject.getPower)((0,external_kolmafia_namespaceObject.equippedItem)($slot(beret_templateObject17 || (beret_templateObject17 = beret_taggedTemplateLiteral(["hat"]))))) + (0,external_kolmafia_namespaceObject.getPower)((0,external_kolmafia_namespaceObject.equippedItem)($slot(beret_templateObject18 || (beret_templateObject18 = beret_taggedTemplateLiteral(["pants"])))))) + (0,external_kolmafia_namespaceObject.getPower)((0,external_kolmafia_namespaceObject.equippedItem)($slot(beret_templateObject19 || (beret_templateObject19 = beret_taggedTemplateLiteral(["shirt"]))))) !== power) {
      return false;
    }
    // eslint-disable-next-line libram/verify-constants
    (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(beret_templateObject20 || (beret_templateObject20 = beret_taggedTemplateLiteral(["Beret Busking"]))));
    return initialUses !== property_get("_beretBuskingUses", 0);
  } finally {
    $slots(beret_templateObject21 || (beret_templateObject21 = beret_taggedTemplateLiteral(["hat, shirt, pants"]))).forEach((slot, index) => (0,external_kolmafia_namespaceObject.equip)(slot, initialEquips[index]));
    if (initialFamiliar !== template_string_$familiar(beret_templateObject22 || (beret_templateObject22 = beret_taggedTemplateLiteral(["Mad Hatrack"]))) && (0,external_kolmafia_namespaceObject.myFamiliar)() === template_string_$familiar(beret_templateObject23 || (beret_templateObject23 = beret_taggedTemplateLiteral(["Mad Hatrack"])))) {
      unequip($slot(beret_templateObject24 || (beret_templateObject24 = beret_taggedTemplateLiteral(["familiar"]))));
    }
    (0,external_kolmafia_namespaceObject.useFamiliar)(initialFamiliar);
    (0,external_kolmafia_namespaceObject.equip)($slot(beret_templateObject25 || (beret_templateObject25 = beret_taggedTemplateLiteral(["familiar"]))), initialFamequip);
  }
}
/**
 * Calculate the best outfit-power you can achieve for a given busk valuation, and then busks.
 * @param effectValuer Either a function that maps effect-duration pairs to values, or an object keyed by numeric modifiers with weights as values, or an array of desired effects
 * @param buyItem Whether or not we should consider purchasing items from NPC stores; defaults to true
 * @param uselessEffects An array (defaults to empty) of effects not to consider for the purposes of busk valuation
 * @returns Whether we were successful in our endeavor
 */
function buskFor(effectValuer) {
  var buyItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var uselessEffects = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var outfitPower = findOptimalOutfitPower(effectValuer, get("_beretBuskingUses", 0), uselessEffects, buyItem);
  return buskAt(outfitPower, buyItem);
}
function multipliers() {
  var taoHatMultiplier = lib_have(template_string_$skill(beret_templateObject26 || (beret_templateObject26 = beret_taggedTemplateLiteral(["Tao of the Terrapin"])))) ? 2 : 1;
  var taoPantsMultiplier = lib_have(template_string_$skill(beret_templateObject27 || (beret_templateObject27 = beret_taggedTemplateLiteral(["Tao of the Terrapin"])))) ? 1 : 0;
  var hammerTimeMultiplier = lib_have(template_string_$effect(beret_templateObject28 || (beret_templateObject28 = beret_taggedTemplateLiteral(["Hammertime"])))) ? 3 : 0;
  var totalPantsMultiplier = 1 + hammerTimeMultiplier + taoPantsMultiplier;
  return [taoHatMultiplier, totalPantsMultiplier];
}
function reconstructOutfit(daRaw) {
  var allItems = external_kolmafia_namespaceObject.Item.all().filter(i => lib_have(i) && (0,external_kolmafia_namespaceObject.canEquip)(i));
  var shopItems = external_kolmafia_namespaceObject.Item.all().filter(i => (0,external_kolmafia_namespaceObject.npcPrice)(i) > 0 && (0,external_kolmafia_namespaceObject.canEquip)(i));
  allItems.push.apply(allItems, beret_toConsumableArray(shopItems));
  var allHats = () => lib_have(template_string_$familiar(beret_templateObject29 || (beret_templateObject29 = beret_taggedTemplateLiteral(["Mad Hatrack"])))) ? allItems.filter(i => (0,external_kolmafia_namespaceObject.toSlot)(i) === $slot(beret_templateObject30 || (beret_templateObject30 = beret_taggedTemplateLiteral(["hat"])))) : [beret];
  var allPants = allItems.filter(i => (0,external_kolmafia_namespaceObject.toSlot)(i) === $slot(beret_templateObject31 || (beret_templateObject31 = beret_taggedTemplateLiteral(["pants"]))));
  var allShirts = allItems.filter(i => (0,external_kolmafia_namespaceObject.toSlot)(i) === $slot(beret_templateObject32 || (beret_templateObject32 = beret_taggedTemplateLiteral(["shirt"]))));
  var _iterator3 = beret_createForOfIteratorHelper(allHats()),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var hat = _step3.value;
      var hatPower = multipliers()[0] * (0,external_kolmafia_namespaceObject.getPower)(hat);
      var _iterator4 = beret_createForOfIteratorHelper(allShirts),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var shirt = _step4.value;
          var shirtPower = (0,external_kolmafia_namespaceObject.getPower)(shirt);
          var _iterator5 = beret_createForOfIteratorHelper(allPants),
            _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var pants = _step5.value;
              var pantsPower = multipliers()[1] * (0,external_kolmafia_namespaceObject.getPower)(pants);
              if (shirtPower + hatPower + pantsPower === daRaw) {
                return {
                  hat,
                  pants,
                  shirt
                };
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return {
    hat: new external_kolmafia_namespaceObject.Item(),
    pants: new external_kolmafia_namespaceObject.Item(),
    shirt: new external_kolmafia_namespaceObject.Item()
  };
}
;// CONCATENATED MODULE: ./src/tasks/repeatableTasks.ts
var repeatableTasks_templateObject, repeatableTasks_templateObject2, repeatableTasks_templateObject3, repeatableTasks_templateObject4, repeatableTasks_templateObject5, repeatableTasks_templateObject6, repeatableTasks_templateObject7, repeatableTasks_templateObject8, repeatableTasks_templateObject9, repeatableTasks_templateObject10, repeatableTasks_templateObject11, repeatableTasks_templateObject12, repeatableTasks_templateObject13, repeatableTasks_templateObject14, repeatableTasks_templateObject15, repeatableTasks_templateObject16, repeatableTasks_templateObject17, repeatableTasks_templateObject18, repeatableTasks_templateObject19, repeatableTasks_templateObject20, repeatableTasks_templateObject21, repeatableTasks_templateObject22, repeatableTasks_templateObject23, repeatableTasks_templateObject24, repeatableTasks_templateObject25, repeatableTasks_templateObject26, repeatableTasks_templateObject27, repeatableTasks_templateObject28, repeatableTasks_templateObject29, repeatableTasks_templateObject30, repeatableTasks_templateObject31, repeatableTasks_templateObject32, repeatableTasks_templateObject33, repeatableTasks_templateObject34, repeatableTasks_templateObject35, repeatableTasks_templateObject36, repeatableTasks_templateObject37, repeatableTasks_templateObject38, repeatableTasks_templateObject39, repeatableTasks_templateObject40, repeatableTasks_templateObject41, repeatableTasks_templateObject42, repeatableTasks_templateObject43, repeatableTasks_templateObject44, repeatableTasks_templateObject45, repeatableTasks_templateObject46, repeatableTasks_templateObject47, repeatableTasks_templateObject48, repeatableTasks_templateObject49, repeatableTasks_templateObject50, repeatableTasks_templateObject51, repeatableTasks_templateObject52, repeatableTasks_templateObject53, repeatableTasks_templateObject54, repeatableTasks_templateObject55, repeatableTasks_templateObject56, repeatableTasks_templateObject57, repeatableTasks_templateObject58, repeatableTasks_templateObject59, repeatableTasks_templateObject60, repeatableTasks_templateObject61, repeatableTasks_templateObject62, repeatableTasks_templateObject63, repeatableTasks_templateObject64, repeatableTasks_templateObject65, repeatableTasks_templateObject66, repeatableTasks_templateObject67, repeatableTasks_templateObject68, repeatableTasks_templateObject69, repeatableTasks_templateObject70, repeatableTasks_templateObject71, repeatableTasks_templateObject72, repeatableTasks_templateObject73, repeatableTasks_templateObject74, repeatableTasks_templateObject75, repeatableTasks_templateObject76, repeatableTasks_templateObject77, repeatableTasks_templateObject78, repeatableTasks_templateObject79, repeatableTasks_templateObject80, repeatableTasks_templateObject81, repeatableTasks_templateObject82, repeatableTasks_templateObject83, repeatableTasks_templateObject84, repeatableTasks_templateObject85, repeatableTasks_templateObject86, repeatableTasks_templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97;
function repeatableTasks_toConsumableArray(arr) { return repeatableTasks_arrayWithoutHoles(arr) || repeatableTasks_iterableToArray(arr) || repeatableTasks_unsupportedIterableToArray(arr) || repeatableTasks_nonIterableSpread(); }
function repeatableTasks_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function repeatableTasks_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return repeatableTasks_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return repeatableTasks_arrayLikeToArray(o, minLen); }
function repeatableTasks_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function repeatableTasks_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return repeatableTasks_arrayLikeToArray(arr); }
function repeatableTasks_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function repeatableTasks_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var repeatableTasks_bestFam = () => famCheck(template_string_$familiar(repeatableTasks_templateObject || (repeatableTasks_templateObject = repeatableTasks_taggedTemplateLiteral(["Pocket Professor"])))) ? template_string_$familiar(repeatableTasks_templateObject2 || (repeatableTasks_templateObject2 = repeatableTasks_taggedTemplateLiteral(["Pocket Professor"]))) : famCheck(template_string_$familiar(repeatableTasks_templateObject3 || (repeatableTasks_templateObject3 = repeatableTasks_taggedTemplateLiteral(["Chest Mimic"])))) ? template_string_$familiar(repeatableTasks_templateObject4 || (repeatableTasks_templateObject4 = repeatableTasks_taggedTemplateLiteral(["Chest Mimic"]))) : famCheck(template_string_$familiar(repeatableTasks_templateObject5 || (repeatableTasks_templateObject5 = repeatableTasks_taggedTemplateLiteral(["Grey Goose"])))) ? template_string_$familiar(repeatableTasks_templateObject6 || (repeatableTasks_templateObject6 = repeatableTasks_taggedTemplateLiteral(["Grey Goose"]))) : template_string_$familiar(repeatableTasks_templateObject7 || (repeatableTasks_templateObject7 = repeatableTasks_taggedTemplateLiteral(["Grey Goose"])));
function famCheck(fam) {
  return lib_have(fam) && fam.experience < 400;
}
var doSmol = args.smol ? true : false;
function postRunQuests() {
  return [{
    name: "Whitelist VIP Clan",
    completed: () => !args.clan || (0,external_kolmafia_namespaceObject.getClanName)().toLowerCase() === args.clan.toLowerCase(),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("/whitelist ".concat(args.clan))
  }, {
    name: "Set Garbo Pref",
    completed: () => property_get("_garbo_beSelfish", false),
    do: () => _set("_garbo_beSelfish", true)
  }, {
    name: "Breakfast",
    completed: () => property_get("breakfastCompleted"),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("breakfast"),
    tracking: "Breakfast"
  }, {
    name: "Radio",
    // eslint-disable-next-line libram/verify-constants
    ready: () => lib_have(template_string_$item(repeatableTasks_templateObject8 || (repeatableTasks_templateObject8 = repeatableTasks_taggedTemplateLiteral(["Allied Radio Backpack"])))) && property_get("_alliedRadioDropsUsed", 0) < 3,
    // eslint-disable-next-line libram/verify-constants
    completed: () => property_get("_alliedRadioDropsUsed", 0) >= 3,
    do: () => {
      var visitRadio = () => (0,external_kolmafia_namespaceObject.visitUrl)("inventory.php?action=requestdrop&pwd");
      visitRadio();
      if (!(0,external_kolmafia_namespaceObject.handlingChoice)() || (0,external_kolmafia_namespaceObject.lastChoice)() !== 1563) visitRadio();
      (0,external_kolmafia_namespaceObject.runChoice)(1, "request=radio");
    },
    limit: {
      tries: 3
    }
  }, {
    name: "Harvest Garden",
    completed: () => getGarden() === template_string_$item(repeatableTasks_templateObject9 || (repeatableTasks_templateObject9 = repeatableTasks_taggedTemplateLiteral(["none"]))) || getGarden() === template_string_$item(repeatableTasks_templateObject10 || (repeatableTasks_templateObject10 = repeatableTasks_taggedTemplateLiteral(["packet of mushroom spores"]))) || (0,external_kolmafia_namespaceObject.getCampground)()[getGarden().name] === 0,
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("garden pick"),
    tracking: "Dailies",
    limit: {
      tries: 3
    }
  }, {
    name: "Apriling",
    ready: () => canChangeSong(),
    completed: () => lib_have(template_string_$effect(repeatableTasks_templateObject11 || (repeatableTasks_templateObject11 = repeatableTasks_taggedTemplateLiteral(["Apriling Band Celebration Bop"])))),
    do: () => {
      conduct(template_string_$effect(repeatableTasks_templateObject12 || (repeatableTasks_templateObject12 = repeatableTasks_taggedTemplateLiteral(["Apriling Band Celebration Bop"]))));
    },
    limit: {
      tries: 1
    }
  }, {
    name: "SIT Course",
    // eslint-disable-next-line libram/verify-constants
    ready: () => lib_have(template_string_$item(repeatableTasks_templateObject13 || (repeatableTasks_templateObject13 = repeatableTasks_taggedTemplateLiteral(["S.I.T. Course Completion Certificate"])))),
    completed: () => property_get("_sitCourseCompleted", false),
    choices: {
      1494: 2
    },
    do: () =>
    // eslint-disable-next-line libram/verify-constants
    (0,external_kolmafia_namespaceObject.use)(template_string_$item(repeatableTasks_templateObject14 || (repeatableTasks_templateObject14 = repeatableTasks_taggedTemplateLiteral(["S.I.T. Course Completion Certificate"]))))
  }, {
    name: "Restore HP",
    completed: () => (0,external_kolmafia_namespaceObject.myHp)() > 0.5 * (0,external_kolmafia_namespaceObject.myMaxhp)(),
    do: () => (0,external_kolmafia_namespaceObject.restoreHp)(0.95 * (0,external_kolmafia_namespaceObject.myMaxhp)()),
    tracking: "Other"
  }, {
    name: "Implement Glitch",
    ready: () => lib_have(template_string_$item(repeatableTasks_templateObject15 || (repeatableTasks_templateObject15 = repeatableTasks_taggedTemplateLiteral(["[glitch season reward name]"])))),
    completed: () => property_get("_glitchItemImplemented"),
    do: () => (0,external_kolmafia_namespaceObject.use)(template_string_$item(repeatableTasks_templateObject16 || (repeatableTasks_templateObject16 = repeatableTasks_taggedTemplateLiteral(["[glitch season reward name]"]))))
  }, {
    name: "Unlock Guild",
    ready: () => (0,external_kolmafia_namespaceObject.myClass)() === $class(repeatableTasks_templateObject17 || (repeatableTasks_templateObject17 = repeatableTasks_taggedTemplateLiteral(["Seal Clubber"]))) && Math.min.apply(Math, repeatableTasks_toConsumableArray(template_string_$items(repeatableTasks_templateObject18 || (repeatableTasks_templateObject18 = repeatableTasks_taggedTemplateLiteral(["figurine of a wretched-looking seal, seal-blubber candle"]))).map(it => (0,external_kolmafia_namespaceObject.availableAmount)(it)))) < 20 && doSmol,
    completed: () => (0,external_kolmafia_namespaceObject.guildStoreAvailable)() || (0,external_kolmafia_namespaceObject.myAdventures)() === 0 || stooperDrunk(),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("guild"),
    choices: {
      //sleazy back alley
      108: 4,
      //craps: skip
      109: 1,
      //drunken hobo: fight
      110: 4,
      //entertainer: skip
      112: 2,
      //harold's hammer: skip
      21: 2,
      //under the knife: skip
      //haunted pantry
      115: 1,
      //drunken hobo: fight
      116: 4,
      //singing tree: skip
      117: 1,
      //knob goblin chef: fight
      114: 2,
      //birthday cake: skip
      //outskirts of cobb's knob
      113: 2,
      //knob goblin chef: fight
      111: 3,
      //chain gang: fight
      118: 2 //medicine quest: skip
    },

    outfit: () => ({
      familiar: repeatableTasks_bestFam(),
      modifier: "".concat(maxBase(), ", ").concat((0,external_kolmafia_namespaceObject.myPrimestat)() === $stat(repeatableTasks_templateObject19 || (repeatableTasks_templateObject19 = repeatableTasks_taggedTemplateLiteral(["Muscle"]))) ? "100 combat rate 20 max" : "-100 combat rate", ", 250 bonus carnivorous potted plant")
    }),
    combat: new CombatStrategy().macro(() => Macro.step("pickpocket").externalIf(lib_have(template_string_$skill(repeatableTasks_templateObject20 || (repeatableTasks_templateObject20 = repeatableTasks_taggedTemplateLiteral(["Curse of Weaksauce"])))), Macro.trySkill(template_string_$skill(repeatableTasks_templateObject21 || (repeatableTasks_templateObject21 = repeatableTasks_taggedTemplateLiteral(["Curse of Weaksauce"])))), Macro.tryItem(template_string_$item(repeatableTasks_templateObject22 || (repeatableTasks_templateObject22 = repeatableTasks_taggedTemplateLiteral(["electronics kit"]))))).tryItem(template_string_$item(repeatableTasks_templateObject23 || (repeatableTasks_templateObject23 = repeatableTasks_taggedTemplateLiteral(["porquoise-handled sixgun"])))).trySkill(template_string_$skill(repeatableTasks_templateObject24 || (repeatableTasks_templateObject24 = repeatableTasks_taggedTemplateLiteral(["Sing Along"])))).attack().repeat(), getTodaysHolidayWanderers()).macro(() => Macro.step("pickpocket").trySkill(template_string_$skill(repeatableTasks_templateObject25 || (repeatableTasks_templateObject25 = repeatableTasks_taggedTemplateLiteral(["Sing Along"])))).tryItem(template_string_$item(repeatableTasks_templateObject26 || (repeatableTasks_templateObject26 = repeatableTasks_taggedTemplateLiteral(["porquoise-handled sixgun"])))).attack().repeat()),
    tracking: "Other"
  }, {
    name: "Stock Up on MMJs",
    ready: () => (0,external_kolmafia_namespaceObject.guildStoreAvailable)() && ((0,external_kolmafia_namespaceObject.myClass)().primestat === $stat(repeatableTasks_templateObject27 || (repeatableTasks_templateObject27 = repeatableTasks_taggedTemplateLiteral(["Mysticality"]))) || (0,external_kolmafia_namespaceObject.myClass)() === $class(repeatableTasks_templateObject28 || (repeatableTasks_templateObject28 = repeatableTasks_taggedTemplateLiteral(["Accordion Thief"]))) && (0,external_kolmafia_namespaceObject.myLevel)() >= 9),
    completed: () => (0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(repeatableTasks_templateObject29 || (repeatableTasks_templateObject29 = repeatableTasks_taggedTemplateLiteral(["magical mystery juice"])))) >= 500,
    acquire: [{
      item: template_string_$item(repeatableTasks_templateObject30 || (repeatableTasks_templateObject30 = repeatableTasks_taggedTemplateLiteral(["magical mystery juice"]))),
      num: 500
    }],
    do: () => false,
    tracking: "Other"
  }, {
    name: "Buy Seal Summoning Supplies",
    ready: () => (0,external_kolmafia_namespaceObject.myClass)() === $class(repeatableTasks_templateObject31 || (repeatableTasks_templateObject31 = repeatableTasks_taggedTemplateLiteral(["Seal Clubber"]))) && (0,external_kolmafia_namespaceObject.guildStoreAvailable)(),
    completed: () => Math.min.apply(Math, repeatableTasks_toConsumableArray(template_string_$items(repeatableTasks_templateObject32 || (repeatableTasks_templateObject32 = repeatableTasks_taggedTemplateLiteral(["figurine of a wretched-looking seal, seal-blubber candle"]))).map(it => (0,external_kolmafia_namespaceObject.availableAmount)(it)))) >= 40,
    acquire: template_string_$items(repeatableTasks_templateObject33 || (repeatableTasks_templateObject33 = repeatableTasks_taggedTemplateLiteral(["figurine of a wretched-looking seal, seal-blubber candle"]))).map(it => ({
      item: it,
      num: 500
    })),
    do: () => false,
    tracking: "Other"
  }, {
    name: "Run CyberRealm",
    ready: () => (0,external_kolmafia_namespaceObject.mallPrice)(template_string_$item(repeatableTasks_templateObject34 || (repeatableTasks_templateObject34 = repeatableTasks_taggedTemplateLiteral(["1"])))) > 3_000 && (0,external_kolmafia_namespaceObject.myAdventures)() > 60 && (0,external_kolmafia_namespaceObject.myInebriety)() < (0,external_kolmafia_namespaceObject.inebrietyLimit)(),
    prepare: () => {
      $effects(repeatableTasks_templateObject35 || (repeatableTasks_templateObject35 = repeatableTasks_taggedTemplateLiteral(["Astral Shell, Elemental Saucesphere, Scarysauce"]))).forEach(ef => {
        if (!lib_have(ef)) (0,external_kolmafia_namespaceObject.useSkill)((0,external_kolmafia_namespaceObject.toSkill)(ef));
      });
    },
    completed: () => nextCyberZone() === $location(repeatableTasks_templateObject36 || (repeatableTasks_templateObject36 = repeatableTasks_taggedTemplateLiteral(["none"]))),
    // $location`Cyberzone 1`.turnsSpent >= 19 * myDaycount(),
    choices: {
      1545: 1,
      1546: 1,
      1547: 1,
      1548: 1,
      1549: 1,
      1550: 1
    },
    do: () => nextCyberZone(),
    outfit: {
      hat: template_string_$item(repeatableTasks_templateObject37 || (repeatableTasks_templateObject37 = repeatableTasks_taggedTemplateLiteral(["Crown of Thrones"]))),
      back: template_string_$item(repeatableTasks_templateObject38 || (repeatableTasks_templateObject38 = repeatableTasks_taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"]))),
      shirt: template_string_$item(repeatableTasks_templateObject39 || (repeatableTasks_templateObject39 = repeatableTasks_taggedTemplateLiteral(["zero-trust tanktop"]))),
      weapon: template_string_$item(repeatableTasks_templateObject40 || (repeatableTasks_templateObject40 = repeatableTasks_taggedTemplateLiteral(["June cleaver"]))),
      offhand: template_string_$item(repeatableTasks_templateObject41 || (repeatableTasks_templateObject41 = repeatableTasks_taggedTemplateLiteral(["visual packet sniffer"]))),
      pants: template_string_$item(repeatableTasks_templateObject42 || (repeatableTasks_templateObject42 = repeatableTasks_taggedTemplateLiteral(["digibritches"]))),
      acc1: template_string_$item(repeatableTasks_templateObject43 || (repeatableTasks_templateObject43 = repeatableTasks_taggedTemplateLiteral(["retro floppy disk"]))),
      acc2: template_string_$item(repeatableTasks_templateObject44 || (repeatableTasks_templateObject44 = repeatableTasks_taggedTemplateLiteral(["retro floppy disk"]))),
      acc3: template_string_$item(repeatableTasks_templateObject45 || (repeatableTasks_templateObject45 = repeatableTasks_taggedTemplateLiteral(["retro floppy disk"]))),
      famequip: template_string_$item(repeatableTasks_templateObject46 || (repeatableTasks_templateObject46 = repeatableTasks_taggedTemplateLiteral(["familiar-in-the-middle wrapper"]))),
      modes: {
        retrocape: ["vampire", "hold"]
      },
      riders: {
        "crown-of-thrones": template_string_$familiar(repeatableTasks_templateObject47 || (repeatableTasks_templateObject47 = repeatableTasks_taggedTemplateLiteral(["Mini Kiwi"])))
      }
    },
    combat: new CombatStrategy().macro(() => Macro.if_("!monsterphylum construct", Macro.trySkill(template_string_$skill(repeatableTasks_templateObject48 || (repeatableTasks_templateObject48 = repeatableTasks_taggedTemplateLiteral(["Sing Along"])))).trySkill(template_string_$skill(repeatableTasks_templateObject49 || (repeatableTasks_templateObject49 = repeatableTasks_taggedTemplateLiteral(["Micrometeorite"])))).trySkill(template_string_$skill(repeatableTasks_templateObject50 || (repeatableTasks_templateObject50 = repeatableTasks_taggedTemplateLiteral(["Saucestorm"])))).trySkill(template_string_$skill(repeatableTasks_templateObject51 || (repeatableTasks_templateObject51 = repeatableTasks_taggedTemplateLiteral(["Saucestorm"])))).trySkill(template_string_$skill(repeatableTasks_templateObject52 || (repeatableTasks_templateObject52 = repeatableTasks_taggedTemplateLiteral(["Saucestorm"])))).trySkill(template_string_$skill(repeatableTasks_templateObject53 || (repeatableTasks_templateObject53 = repeatableTasks_taggedTemplateLiteral(["Saucestorm"])))).attack().repeat()).skill(template_string_$skill(repeatableTasks_templateObject54 || (repeatableTasks_templateObject54 = repeatableTasks_taggedTemplateLiteral(["Throw Cyber Rock"])))).repeat()),
    limit: {
      skip: 60
    },
    tracking: "Cyber Realm"
  }, {
    name: "Wardrobe-o-matic",
    ready: () => (0,external_kolmafia_namespaceObject.myLevel)() >= 15 && lib_have(template_string_$item(repeatableTasks_templateObject55 || (repeatableTasks_templateObject55 = repeatableTasks_taggedTemplateLiteral(["wardrobe-o-matic"])))),
    completed: () => property_get("_wardrobeUsed", false),
    do: () => {
      (0,external_kolmafia_namespaceObject.use)(template_string_$item(repeatableTasks_templateObject56 || (repeatableTasks_templateObject56 = repeatableTasks_taggedTemplateLiteral(["wardrobe-o-matic"]))));
      (0,external_kolmafia_namespaceObject.cliExecute)("set _wardrobeUsed = true");
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Beret? Beret.",
    ready: () => lib_have((0,external_kolmafia_namespaceObject.toItem)(11919)),
    completed: () => property_get("_beretBuskingUses", 0) >= 5,
    do: () => {
      var uselessEffects = $effects(repeatableTasks_templateObject57 || (repeatableTasks_templateObject57 = repeatableTasks_taggedTemplateLiteral(["How to Scam Tourists, Empathy"])));
      var busk = property_get("_beretBuskingUses", 0);
      (0,external_kolmafia_namespaceObject.print)("Busking starting at ".concat(busk, " uses."));
      for (; busk < 5; busk++) {
        var best = findOptimalOutfitPower({
          "Familiar Weight": 10
        }, busk, uselessEffects, true);
        var outfit = reconstructOutfit(best);
        (0,external_kolmafia_namespaceObject.print)("Outfit is: ".concat(outfit === null || outfit === void 0 ? void 0 : outfit.hat, ", ").concat(outfit === null || outfit === void 0 ? void 0 : outfit.pants, ", ").concat(outfit === null || outfit === void 0 ? void 0 : outfit.shirt));
        (0,external_kolmafia_namespaceObject.print)("Busking at ".concat(best, " power."));
        buskAt(best, true);
      }
    },
    limit: {
      tries: 5
    }
  }, {
    name: "Candy Deviler",
    // eslint-disable-next-line libram/verify-constants
    ready: () => lib_have(template_string_$item(repeatableTasks_templateObject58 || (repeatableTasks_templateObject58 = repeatableTasks_taggedTemplateLiteral(["candy egg deviler"])))),
    completed: () => (0,external_kolmafia_namespaceObject.toInt)(property_get("_candyEggsDeviled")) >= 3,
    do: () => {
      (0,external_kolmafia_namespaceObject.visitUrl)("inventory.php?action=eggdevil&pwd");
      (0,external_kolmafia_namespaceObject.visitUrl)("choice.php?a=3054&whichchoice=1544&option=1&pwd");
      (0,external_kolmafia_namespaceObject.visitUrl)("choice.php?a=3054&whichchoice=1544&option=1&pwd");
      (0,external_kolmafia_namespaceObject.visitUrl)("choice.php?a=3054&whichchoice=1544&option=1&pwd");
    },
    tracking: "Garbo"
  }];
}
var duffo = false;
var loungeItems = (0,external_kolmafia_namespaceObject.getClanLounge)();
var hasClanFloundry = loungeItems["Clan Floundry"] === 1;
var hasCarpe = loungeItems["carpe"] !== undefined && loungeItems["carpe"] >= 1;
function preRunQuests() {
  return [{
    name: "Whitelist VIP Clan",
    completed: () => !args.clan || (0,external_kolmafia_namespaceObject.getClanName)().toLowerCase() === args.clan.toLowerCase(),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("/whitelist ".concat(args.clan)),
    choices: {
      1507: 1
    }
  }, {
    name: "Get Floundry item",
    ready: () => lib_have(template_string_$item(repeatableTasks_templateObject59 || (repeatableTasks_templateObject59 = repeatableTasks_taggedTemplateLiteral(["Clan VIP Lounge key"])))) && !args.carpe && hasClanFloundry && hasCarpe,
    completed: () => property_get("_floundryItemCreated"),
    do: () => {
      if ((0,external_kolmafia_namespaceObject.getClanLounge)()) (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(repeatableTasks_templateObject60 || (repeatableTasks_templateObject60 = repeatableTasks_taggedTemplateLiteral(["carpe"]))));
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Unpack Duffel Bag",
    completed: () => duffo,
    do: () => {
      (0,external_kolmafia_namespaceObject.visitUrl)("inventory.php?action=skiduffel&pwd");
      duffo = true;
    }
  }, {
    name: "Pantogramming",
    ready: () => pantogramReady() && args.casual,
    completed: () => utils_pantogram(),
    do: () => utils_pantogram(),
    tracking: "Farming Prep"
  }, {
    name: "Trip Scrip",
    ready: () => args.ih8u || args.smol || args.robot,
    completed: () => property_get("_roninStoragePulls").includes("".concat(template_string_$item(repeatableTasks_templateObject61 || (repeatableTasks_templateObject61 = repeatableTasks_taggedTemplateLiteral(["Shore Inc. Ship Trip Scrip"]))).id)) || (0,external_kolmafia_namespaceObject.storageAmount)(template_string_$item(repeatableTasks_templateObject62 || (repeatableTasks_templateObject62 = repeatableTasks_taggedTemplateLiteral(["Shore Inc. Ship Trip Scrip"])))) === 0,
    do: () => (0,external_kolmafia_namespaceObject.takeStorage)(template_string_$item(repeatableTasks_templateObject63 || (repeatableTasks_templateObject63 = repeatableTasks_taggedTemplateLiteral(["Shore Inc. Ship Trip Scrip"]))), 1),
    tracking: "Farming Prep"
  }, {
    name: "LGR Seed",
    ready: () => lib_have(template_string_$item(repeatableTasks_templateObject64 || (repeatableTasks_templateObject64 = repeatableTasks_taggedTemplateLiteral(["lucky gold ring"])))) && lib_have(template_string_$item(repeatableTasks_templateObject65 || (repeatableTasks_templateObject65 = repeatableTasks_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"])))) && !args.garboascend.includes("penguin") && !(args.cs || args.zooto),
    completed: () => property_get("_stenchAirportToday") || property_get("stenchAirportAlways"),
    do: () => (0,external_kolmafia_namespaceObject.use)(template_string_$item(repeatableTasks_templateObject66 || (repeatableTasks_templateObject66 = repeatableTasks_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"])))),
    tracking: "Farming Prep"
  }, {
    name: "Break Stone",
    ready: () => !args.safepvp,
    completed: () => (0,external_kolmafia_namespaceObject.hippyStoneBroken)() || !args.pvp,
    do: () => {
      (0,external_kolmafia_namespaceObject.visitUrl)("peevpee.php?action=smashstone&pwd&confirm=on", true);
      (0,external_kolmafia_namespaceObject.visitUrl)("peevpee.php?place=fight");
    }
  }];
}
function noBarf() {
  return [{
    name: "CONSUME ALL",
    ready: () => (0,external_kolmafia_namespaceObject.holiday)().includes("Halloween") || args.crimbo || args.chrono,
    completed: () => (0,external_kolmafia_namespaceObject.myFullness)() >= (0,external_kolmafia_namespaceObject.fullnessLimit)() && (0,external_kolmafia_namespaceObject.mySpleenUse)() >= (0,external_kolmafia_namespaceObject.spleenLimit)() && (0,external_kolmafia_namespaceObject.myInebriety)() >= (0,external_kolmafia_namespaceObject.inebrietyLimit)(),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("consume ALL"),
    tracking: "Organs"
  }, {
    name: "PProf Penguin Chain",
    ready: () => (args.garbo.includes("penguin") && args.garbo.includes("target=\"black crayon penguin\"") && (0,external_kolmafia_namespaceObject.myDaycount)() === 0 || args.garboascend.includes("penguin") && args.garboascend.includes("target=\"black crayon penguin\"") && (0,external_kolmafia_namespaceObject.myDaycount)() > 0) && canReminisce($monster(repeatableTasks_templateObject67 || (repeatableTasks_templateObject67 = repeatableTasks_taggedTemplateLiteral(["Black Crayon Flower"])))) && PocketProfessor_have() && lecturesDelivered() < 3,
    prepare: () => {
      if (!lib_have(template_string_$item(repeatableTasks_templateObject68 || (repeatableTasks_templateObject68 = repeatableTasks_taggedTemplateLiteral(["Pocket Professor memory chip"]))))) {
        (0,external_kolmafia_namespaceObject.retrieveItem)(1, template_string_$item(repeatableTasks_templateObject69 || (repeatableTasks_templateObject69 = repeatableTasks_taggedTemplateLiteral(["Pocket Professor memory chip"]))));
      }
      (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(repeatableTasks_templateObject70 || (repeatableTasks_templateObject70 = repeatableTasks_taggedTemplateLiteral(["Pocket Professor"]))));
      (0,external_kolmafia_namespaceObject.maximize)("10 familiar weight, -tie, 5.25 Meat Drop, -\"equip Amulet of Perpetual Darkness\", -\"equip Buddy Bjorn\", -\"equip Roman Candelabra\", -\"equip Spooky Putty ball\", -\"equip Spooky Putty leotard\", -\"equip Spooky Putty mitre\", -\"equip Spooky Putty snake\", -\"equip broken champagne bottle\", -\"equip cheap sunglasses\", -\"equip dice-shaped backpack\", -\"equip papier-masque\", -\"equip papier-mitre\", -\"equip smoke ball\", -\"equip stinky fannypack\", 100 \"bonus pantogram pants\", 124.26 \"bonus June cleaver\", 135 \"bonus Crown of Thrones\", 180 \"bonus Mr. Screege's spectacles\", 222.92 \"bonus mafia thumb ring\", 253.61 \"bonus can of mixed everything\", 284 \"bonus lucky gold ring\", 6.25 \"bonus Powerful Glove\", 700 \"bonus mafia pointer finger ring\"", false);
      $skills(repeatableTasks_templateObject71 || (repeatableTasks_templateObject71 = repeatableTasks_taggedTemplateLiteral(["Empathy of the Newt, Leash of Linguini"]))).forEach(sk => (0,external_kolmafia_namespaceObject.useSkill)(sk));
      template_string_$items(repeatableTasks_templateObject72 || (repeatableTasks_templateObject72 = repeatableTasks_taggedTemplateLiteral(["Pocket Professor memory chip, tearaway pants"]))).forEach(it => (0,external_kolmafia_namespaceObject.equip)(it));
    },
    completed: () => currentlyAvailableLectures() === 0,
    do: () => reminisce($monster(repeatableTasks_templateObject73 || (repeatableTasks_templateObject73 = repeatableTasks_taggedTemplateLiteral(["Black Crayon Flower"]))), ""),
    combat: new CombatStrategy().macro(Macro.externalIf(currentlyAvailableLectures() > 0, Macro.trySkill(template_string_$skill(repeatableTasks_templateObject74 || (repeatableTasks_templateObject74 = repeatableTasks_taggedTemplateLiteral(["lecture on relativity"])))).trySkill(template_string_$skill(repeatableTasks_templateObject75 || (repeatableTasks_templateObject75 = repeatableTasks_taggedTemplateLiteral(["Sing Along"])))).trySkill(template_string_$skill(repeatableTasks_templateObject76 || (repeatableTasks_templateObject76 = repeatableTasks_taggedTemplateLiteral(["Bowl Straight Up"])))).trySkill(template_string_$skill(repeatableTasks_templateObject77 || (repeatableTasks_templateObject77 = repeatableTasks_taggedTemplateLiteral(["Tear Away your Pants!"])))).trySkillRepeat(template_string_$skill(repeatableTasks_templateObject78 || (repeatableTasks_templateObject78 = repeatableTasks_taggedTemplateLiteral(["Saucestorm"])))), Macro.trySkill(template_string_$skill(repeatableTasks_templateObject79 || (repeatableTasks_templateObject79 = repeatableTasks_taggedTemplateLiteral(["Sing Along"])))).trySkill(template_string_$skill(repeatableTasks_templateObject80 || (repeatableTasks_templateObject80 = repeatableTasks_taggedTemplateLiteral(["Bowl Straight Up"])))).trySkill(template_string_$skill(repeatableTasks_templateObject81 || (repeatableTasks_templateObject81 = repeatableTasks_taggedTemplateLiteral(["Tear Away your Pants!"])))).trySkillRepeat(template_string_$skill(repeatableTasks_templateObject82 || (repeatableTasks_templateObject82 = repeatableTasks_taggedTemplateLiteral(["Saucestorm"])))))),
    tracking: "Garbo"
  }, {
    name: "Pantogramming",
    ready: () => pantogramReady(),
    completed: () => utils_pantogram(),
    do: () => utils_pantogram(),
    tracking: "Farming Prep"
  }, {
    name: "Garbo Nobarf",
    ready: () => (0,external_kolmafia_namespaceObject.holiday)().includes("Halloween") || args.crimbo || args.chrono,
    completed: () => (0,external_kolmafia_namespaceObject.myInebriety)() > (0,external_kolmafia_namespaceObject.inebrietyLimit)() || property_get("_monsterHabitatsRecalled") >= 3 && property_get("_macrometeoriteUses") >= 10,
    do: () => {
      (0,external_kolmafia_namespaceObject.cliExecute)("garbo nodiet nobarf target=\"sausage goblin\"");
    },
    tracking: "Garbo"
  }];
}
function garboWeen() {
  return [{
    name: "Freecandy time",
    ready: () => (0,external_kolmafia_namespaceObject.holiday)().includes("Halloween"),
    completed: () => (0,external_kolmafia_namespaceObject.myAdventures)() / 5 < 1,
    prepare: () => uneffect(template_string_$effect(repeatableTasks_templateObject83 || (repeatableTasks_templateObject83 = repeatableTasks_taggedTemplateLiteral(["Beaten Up"])))),
    do: () => {
      if (lib_have(template_string_$familiar(repeatableTasks_templateObject84 || (repeatableTasks_templateObject84 = repeatableTasks_taggedTemplateLiteral(["Trick-or-Treating Tot"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("familiar Trick-or-Treating Tot");else if (lib_have(template_string_$familiar(repeatableTasks_templateObject85 || (repeatableTasks_templateObject85 = repeatableTasks_taggedTemplateLiteral(["Red-Nosed Snapper"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("familiar snapper");
      (0,external_kolmafia_namespaceObject.cliExecute)("freecandy ".concat((0,external_kolmafia_namespaceObject.myAdventures)()));
    },
    clear: "all",
    tracking: "Freecandy",
    limit: {
      tries: 1
    } //this will run again after installing CMC, by magic
  }, {
    name: "Super Nightcap",
    ready: () => lib_have(template_string_$item(repeatableTasks_templateObject86 || (repeatableTasks_templateObject86 = repeatableTasks_taggedTemplateLiteral(["Drunkula's wineglass"])))) && (0,external_kolmafia_namespaceObject.holiday)().includes("Halloween"),
    completed: () => totallyDrunk(),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("CONSUME NIGHTCAP"),
    tracking: "Organs"
  }, {
    name: "Freecandy Drunk",
    ready: () => (0,external_kolmafia_namespaceObject.holiday)().includes("Halloween"),
    completed: () => Math.floor((0,external_kolmafia_namespaceObject.myAdventures)() / 5) === 0,
    prepare: () => uneffect(template_string_$effect(repeatableTasks_templateObject87 || (repeatableTasks_templateObject87 = repeatableTasks_taggedTemplateLiteral(["Beaten Up"])))),
    do: () => {
      (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(_templateObject88 || (_templateObject88 = repeatableTasks_taggedTemplateLiteral(["Red-Nosed Snapper"]))));
      (0,external_kolmafia_namespaceObject.cliExecute)("freeCandy ".concat((0,external_kolmafia_namespaceObject.myAdventures)()));
    },
    clear: "all",
    tracking: "Freecandy",
    limit: {
      tries: 1
    } //this will run again after installing CMC, by magic
  }];
}

function chrono() {
  return [{
    name: "Chrono",
    ready: () => args.chrono && (0,external_kolmafia_namespaceObject.canAdventure)($location(_templateObject89 || (_templateObject89 = repeatableTasks_taggedTemplateLiteral(["The Primordial Stew"])))),
    completed: () => (0,external_kolmafia_namespaceObject.myAdventures)() === 0 && (0,external_kolmafia_namespaceObject.myInebriety)() >= (0,external_kolmafia_namespaceObject.inebrietyLimit)(),
    prepare: () => uneffect(template_string_$effect(_templateObject90 || (_templateObject90 = repeatableTasks_taggedTemplateLiteral(["Beaten Up"])))),
    do: () => {
      (0,external_kolmafia_namespaceObject.cliExecute)("".concat(args.chronoscript));
    },
    clear: "all",
    tracking: "Chrono",
    limit: {
      tries: 1
    } //this will run again after installing CMC, by magic
  }, {
    name: "Super Nightcap",
    ready: () => lib_have(template_string_$item(_templateObject91 || (_templateObject91 = repeatableTasks_taggedTemplateLiteral(["Drunkula's wineglass"])))) && args.chrono && (0,external_kolmafia_namespaceObject.canAdventure)($location(_templateObject92 || (_templateObject92 = repeatableTasks_taggedTemplateLiteral(["The Primordial Stew"])))) && (0,external_kolmafia_namespaceObject.myDaycount)() > 1,
    completed: () => totallyDrunk(),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("CONSUME NIGHTCAP"),
    tracking: "Organs"
  }, {
    name: "Chrono Drunk",
    ready: () => args.chrono && (0,external_kolmafia_namespaceObject.canAdventure)($location(_templateObject93 || (_templateObject93 = repeatableTasks_taggedTemplateLiteral(["The Primordial Stew"])))) && (0,external_kolmafia_namespaceObject.myDaycount)() > 1,
    completed: () => (0,external_kolmafia_namespaceObject.myAdventures)() === 0,
    prepare: () => uneffect(template_string_$effect(_templateObject94 || (_templateObject94 = repeatableTasks_taggedTemplateLiteral(["Beaten Up"])))),
    do: () => {
      (0,external_kolmafia_namespaceObject.cliExecute)("".concat(args.chronoscript));
    },
    clear: "all",
    tracking: "Chrono",
    limit: {
      tries: 1
    } //this will run again after installing CMC, by magic
  }];
}

function crimbo() {
  return [{
    name: "Crimbo Time",
    ready: () => args.crimbo,
    completed: () => {
      if ((0,external_kolmafia_namespaceObject.myDaycount)() === 1) return (0,external_kolmafia_namespaceObject.myAdventures)() === 0 || (0,external_kolmafia_namespaceObject.myInebriety)() > (0,external_kolmafia_namespaceObject.inebrietyLimit)();else return (0,external_kolmafia_namespaceObject.myAdventures)() === 0;
    },
    prepare: () => uneffect(template_string_$effect(_templateObject95 || (_templateObject95 = repeatableTasks_taggedTemplateLiteral(["Beaten Up"])))),
    do: () => {
      (0,external_kolmafia_namespaceObject.cliExecute)("".concat(args.crimboscript));
    },
    clear: "all",
    tracking: "Crimbo",
    limit: {
      tries: 1
    } //this will run again after installing CMC, by magic
  }, {
    name: "Super Nightcap",
    ready: () => lib_have(template_string_$item(_templateObject96 || (_templateObject96 = repeatableTasks_taggedTemplateLiteral(["Drunkula's wineglass"])))) && (0,external_kolmafia_namespaceObject.holiday)().includes("Halloween") && (0,external_kolmafia_namespaceObject.myDaycount)() > 1,
    completed: () => totallyDrunk(),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("CONSUME NIGHTCAP"),
    tracking: "Organs"
  }, {
    name: "Crimbo Drunk",
    ready: () => args.crimbo && (0,external_kolmafia_namespaceObject.myDaycount)() > 1,
    completed: () => (0,external_kolmafia_namespaceObject.myAdventures)() === 0 || (0,external_kolmafia_namespaceObject.myDaycount)() === 1,
    prepare: () => uneffect(template_string_$effect(_templateObject97 || (_templateObject97 = repeatableTasks_taggedTemplateLiteral(["Beaten Up"])))),
    do: () => {
      (0,external_kolmafia_namespaceObject.cliExecute)("".concat(args.crimboscript));
    },
    clear: "all",
    tracking: "Crimbo",
    limit: {
      tries: 1
    } //this will run again after installing CMC, by magic
  }];
}
;// CONCATENATED MODULE: ./src/tasks/1 aftercoreleg.ts
var _1_aftercoreleg_templateObject, _1_aftercoreleg_templateObject2, _1_aftercoreleg_templateObject3, _1_aftercoreleg_templateObject4, _1_aftercoreleg_templateObject5, _1_aftercoreleg_templateObject6, _1_aftercoreleg_templateObject7, _1_aftercoreleg_templateObject8, _1_aftercoreleg_templateObject9, _1_aftercoreleg_templateObject10, _1_aftercoreleg_templateObject11, _1_aftercoreleg_templateObject12, _1_aftercoreleg_templateObject13, _1_aftercoreleg_templateObject14, _1_aftercoreleg_templateObject15, _1_aftercoreleg_templateObject16, _1_aftercoreleg_templateObject17, _1_aftercoreleg_templateObject18, _1_aftercoreleg_templateObject19, _1_aftercoreleg_templateObject20, _1_aftercoreleg_templateObject21, _1_aftercoreleg_templateObject22, _1_aftercoreleg_templateObject23, _1_aftercoreleg_templateObject24, _1_aftercoreleg_templateObject25, _1_aftercoreleg_templateObject26, _1_aftercoreleg_templateObject27, _1_aftercoreleg_templateObject28, _1_aftercoreleg_templateObject29, _1_aftercoreleg_templateObject30, _1_aftercoreleg_templateObject31, _1_aftercoreleg_templateObject32, _1_aftercoreleg_templateObject33, _1_aftercoreleg_templateObject34, _1_aftercoreleg_templateObject35, _1_aftercoreleg_templateObject36, _1_aftercoreleg_templateObject37, _1_aftercoreleg_templateObject38, _1_aftercoreleg_templateObject39, _1_aftercoreleg_templateObject40, _1_aftercoreleg_templateObject41, _1_aftercoreleg_templateObject42, _1_aftercoreleg_templateObject43, _1_aftercoreleg_templateObject44, _1_aftercoreleg_templateObject45, _1_aftercoreleg_templateObject46, _1_aftercoreleg_templateObject47, _1_aftercoreleg_templateObject48, _1_aftercoreleg_templateObject49, _1_aftercoreleg_templateObject50, _1_aftercoreleg_templateObject51, _1_aftercoreleg_templateObject52, _1_aftercoreleg_templateObject53, _1_aftercoreleg_templateObject54, _1_aftercoreleg_templateObject55, _1_aftercoreleg_templateObject56, _1_aftercoreleg_templateObject57, _1_aftercoreleg_templateObject58, _1_aftercoreleg_templateObject59, _1_aftercoreleg_templateObject60, _1_aftercoreleg_templateObject61, _1_aftercoreleg_templateObject62, _1_aftercoreleg_templateObject63, _1_aftercoreleg_templateObject64, _1_aftercoreleg_templateObject65, _1_aftercoreleg_templateObject66, _1_aftercoreleg_templateObject67, _1_aftercoreleg_templateObject68, _1_aftercoreleg_templateObject69, _1_aftercoreleg_templateObject70, _1_aftercoreleg_templateObject71, _1_aftercoreleg_templateObject72, _1_aftercoreleg_templateObject73, _1_aftercoreleg_templateObject74, _1_aftercoreleg_templateObject75, _1_aftercoreleg_templateObject76, _1_aftercoreleg_templateObject77, _1_aftercoreleg_templateObject78, _1_aftercoreleg_templateObject79, _1_aftercoreleg_templateObject80, _1_aftercoreleg_templateObject81, _1_aftercoreleg_templateObject82, _1_aftercoreleg_templateObject83, _1_aftercoreleg_templateObject84, _1_aftercoreleg_templateObject85, _1_aftercoreleg_templateObject86, _1_aftercoreleg_templateObject87, _1_aftercoreleg_templateObject88, _1_aftercoreleg_templateObject89, _1_aftercoreleg_templateObject90, _1_aftercoreleg_templateObject91, _1_aftercoreleg_templateObject92, _1_aftercoreleg_templateObject93;
function _1_aftercoreleg_slicedToArray(arr, i) { return _1_aftercoreleg_arrayWithHoles(arr) || _1_aftercoreleg_iterableToArrayLimit(arr, i) || _1_aftercoreleg_unsupportedIterableToArray(arr, i) || _1_aftercoreleg_nonIterableRest(); }
function _1_aftercoreleg_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _1_aftercoreleg_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _1_aftercoreleg_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _1_aftercoreleg_toConsumableArray(arr) { return _1_aftercoreleg_arrayWithoutHoles(arr) || _1_aftercoreleg_iterableToArray(arr) || _1_aftercoreleg_unsupportedIterableToArray(arr) || _1_aftercoreleg_nonIterableSpread(); }
function _1_aftercoreleg_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _1_aftercoreleg_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _1_aftercoreleg_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _1_aftercoreleg_arrayLikeToArray(o, minLen); }
function _1_aftercoreleg_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _1_aftercoreleg_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _1_aftercoreleg_arrayLikeToArray(arr); }
function _1_aftercoreleg_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _1_aftercoreleg_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var _1_aftercoreleg_RESOURCES = (/* unused pure expression or super */ null && (["Spice", "Rum", "Anchor", "Mast", "Silk", "Gold"]));
var _1_aftercoreleg_RECIPES = new Map([[template_string_$item(_1_aftercoreleg_templateObject || (_1_aftercoreleg_templateObject = _1_aftercoreleg_taggedTemplateLiteral(["deft pirate hook"]))), [0, 0, 1, 1, 0, 1]], [template_string_$item(_1_aftercoreleg_templateObject2 || (_1_aftercoreleg_templateObject2 = _1_aftercoreleg_taggedTemplateLiteral(["iron tricorn hat"]))), [0, 0, 2, 1, 0, 0]], [template_string_$item(_1_aftercoreleg_templateObject3 || (_1_aftercoreleg_templateObject3 = _1_aftercoreleg_taggedTemplateLiteral(["jolly roger flag"]))), [0, 1, 0, 1, 1, 0]], [template_string_$item(_1_aftercoreleg_templateObject4 || (_1_aftercoreleg_templateObject4 = _1_aftercoreleg_taggedTemplateLiteral(["sleeping profane parrot"]))), [15, 3, 0, 0, 2, 1]], [template_string_$item(_1_aftercoreleg_templateObject5 || (_1_aftercoreleg_templateObject5 = _1_aftercoreleg_taggedTemplateLiteral(["pirrrate's currrse"]))), [2, 2, 0, 0, 0, 0]], [template_string_$item(_1_aftercoreleg_templateObject6 || (_1_aftercoreleg_templateObject6 = _1_aftercoreleg_taggedTemplateLiteral(["tankard of spiced rum"]))), [1, 2, 0, 0, 0, 0]], [template_string_$item(_1_aftercoreleg_templateObject7 || (_1_aftercoreleg_templateObject7 = _1_aftercoreleg_taggedTemplateLiteral(["packaged luxury garment"]))), [0, 0, 0, 0, 3, 2]], [template_string_$item(_1_aftercoreleg_templateObject8 || (_1_aftercoreleg_templateObject8 = _1_aftercoreleg_taggedTemplateLiteral(["harpoon"]))), [0, 0, 0, 2, 0, 0]], [template_string_$item(_1_aftercoreleg_templateObject9 || (_1_aftercoreleg_templateObject9 = _1_aftercoreleg_taggedTemplateLiteral(["chili powder cutlass"]))), [5, 0, 1, 0, 0, 0]], [template_string_$item(_1_aftercoreleg_templateObject10 || (_1_aftercoreleg_templateObject10 = _1_aftercoreleg_taggedTemplateLiteral(["cursed Aztec tamale"]))), [2, 0, 0, 0, 0, 0]], [template_string_$item(_1_aftercoreleg_templateObject11 || (_1_aftercoreleg_templateObject11 = _1_aftercoreleg_taggedTemplateLiteral(["jolly roger tattoo kit"]))), [0, 6, 1, 1, 0, 6]], [template_string_$item(_1_aftercoreleg_templateObject12 || (_1_aftercoreleg_templateObject12 = _1_aftercoreleg_taggedTemplateLiteral(["golden pet rock"]))), [0, 0, 0, 0, 0, 7]], [template_string_$item(_1_aftercoreleg_templateObject13 || (_1_aftercoreleg_templateObject13 = _1_aftercoreleg_taggedTemplateLiteral(["groggles"]))), [0, 6, 0, 0, 0, 0]], [template_string_$item(_1_aftercoreleg_templateObject14 || (_1_aftercoreleg_templateObject14 = _1_aftercoreleg_taggedTemplateLiteral(["pirate dinghy"]))), [0, 0, 1, 1, 1, 0]], [template_string_$item(_1_aftercoreleg_templateObject15 || (_1_aftercoreleg_templateObject15 = _1_aftercoreleg_taggedTemplateLiteral(["anchor bomb"]))), [0, 1, 3, 1, 0, 1]], [template_string_$item(_1_aftercoreleg_templateObject16 || (_1_aftercoreleg_templateObject16 = _1_aftercoreleg_taggedTemplateLiteral(["silky pirate drawers"]))), [0, 0, 0, 0, 2, 0]], [template_string_$item(_1_aftercoreleg_templateObject17 || (_1_aftercoreleg_templateObject17 = _1_aftercoreleg_taggedTemplateLiteral(["spices"]))), [1, 0, 0, 0, 0, 0]]]);

/**
 * @returns A copy of our map of all recipes
 */
function _1_aftercoreleg_allRecipes() {
  return new Map(_1_aftercoreleg_toConsumableArray(_1_aftercoreleg_RECIPES.entries()).map(_ref => {
    var _ref2 = _1_aftercoreleg_slicedToArray(_ref, 2),
      item = _ref2[0],
      recipe = _ref2[1];
    return [item, _1_aftercoreleg_toConsumableArray(recipe)];
  }));
}
function affordableRecipes() {
  var recipes = _1_aftercoreleg_allRecipes(); // Get all recipes
  (0,external_kolmafia_namespaceObject.print)("Recipes Map: ".concat(recipes));
  var result = _1_aftercoreleg_toConsumableArray(recipes.keys()).filter(item => canMake(item));
  (0,external_kolmafia_namespaceObject.print)("Final affordable items array: ".concat(result));
  return result;
}
function takerSpaceOptimizer() {
  var recipes = affordableRecipes();
  (0,external_kolmafia_namespaceObject.print)("Recipes after affordableRecipes: ".concat(recipes));
  while (recipes.length > 0) {
    (0,external_kolmafia_namespaceObject.print)("Current recipe list: ".concat(recipes));

    // Find the best item to craft based on garboValue
    var bestRecipe = utils_maxBy(recipes, garboValue);
    (0,external_kolmafia_namespaceObject.print)("Best recipe to craft: ".concat(bestRecipe));

    // Craft the selected recipe
    make(bestRecipe);

    // Recompute the list of craftable recipes after crafting
    recipes = affordableRecipes();
  }
  return true;
}
var _1_aftercoreleg_doSmol = args.smol ? true : false;
var doCS = args.cs ? true : false;
var jobsDone = false;
var skipSoda = false;
var statStation = {
  Muscle: Station.BRAWN_SILO,
  Mysticality: Station.BRAIN_SILO,
  Moxie: Station.GROIN_SILO
}[(0,external_kolmafia_namespaceObject.myPrimestat)().toString()];
var stations = [Station.COAL_HOPPER,
// double mainstat gain
statStation,
// main stats
Station.VIEWING_PLATFORM,
// all stats
Station.GAIN_MEAT,
// meat
Station.TOWER_FIZZY,
// mp regen
Station.BRAIN_SILO,
// myst stats
Station.WATER_BRIDGE,
// +ML
Station.CANDY_FACTORY // candies
];

function AftercoreQuest() {
  return {
    name: "Aftercore",
    ready: () => (0,external_kolmafia_namespaceObject.myDaycount)() >= 2 && property_get("kingLiberated"),
    completed: () => (0,external_kolmafia_namespaceObject.myAdventures)() === 0 && totallyDrunk() && lib_have(template_string_$item(_1_aftercoreleg_templateObject18 || (_1_aftercoreleg_templateObject18 = _1_aftercoreleg_taggedTemplateLiteral(["Pizza of Legend"])))) && lib_have(template_string_$item(_1_aftercoreleg_templateObject19 || (_1_aftercoreleg_templateObject19 = _1_aftercoreleg_taggedTemplateLiteral(["Deep Dish of Legend"])))) && lib_have(template_string_$item(_1_aftercoreleg_templateObject20 || (_1_aftercoreleg_templateObject20 = _1_aftercoreleg_taggedTemplateLiteral(["Calzone of Legend"])))) || (0,external_kolmafia_namespaceObject.myDaycount)() === 1,
    tasks: [{
      name: "Takerspace",
      ready: () => (0,external_kolmafia_namespaceObject.getWorkshed)() === template_string_$item(_1_aftercoreleg_templateObject21 || (_1_aftercoreleg_templateObject21 = _1_aftercoreleg_taggedTemplateLiteral(["TakerSpace letter of Marque"]))) && !property_get("_workshedItemUsed"),
      completed: () => (0,external_kolmafia_namespaceObject.getWorkshed)() === template_string_$item(_1_aftercoreleg_templateObject22 || (_1_aftercoreleg_templateObject22 = _1_aftercoreleg_taggedTemplateLiteral(["model train set"]))),
      do: () => {
        (0,external_kolmafia_namespaceObject.visitUrl)("campground.php?action=workshed");
        takerSpaceOptimizer();
        (0,external_kolmafia_namespaceObject.use)(template_string_$item(_1_aftercoreleg_templateObject23 || (_1_aftercoreleg_templateObject23 = _1_aftercoreleg_taggedTemplateLiteral(["model train set"]))));
      },
      tracking: "Workshed"
    }, {
      name: "Pre-Run Photobooth",
      ready: () => lib_have(template_string_$item(_1_aftercoreleg_templateObject24 || (_1_aftercoreleg_templateObject24 = _1_aftercoreleg_taggedTemplateLiteral(["Clan VIP Lounge key"])))) && property_get("_photoBoothEquipment", 0) === 0,
      completed: () => property_get("_photoBoothEquipment", 0) >= 3,
      do: () => {
        (0,external_kolmafia_namespaceObject.cliExecute)("photobooth item fake arrow-through-the-head");
        (0,external_kolmafia_namespaceObject.cliExecute)("photobooth item oversized monocle on a stick");
        (0,external_kolmafia_namespaceObject.cliExecute)("photobooth item feather boa");
      }
    }, {
      name: "PvP Closet Safety 1",
      ready: () => args.pvp && property_get("autoSatisfyWithCloset") && !args.safepvp,
      completed: () => (0,external_kolmafia_namespaceObject.toBoolean)(property_get("_safetyCloset1")),
      do: () => pvpCloset(1)
    }].concat(_1_aftercoreleg_toConsumableArray(preRunQuests()), _1_aftercoreleg_toConsumableArray(postRunQuests()), _1_aftercoreleg_toConsumableArray(noBarf()), _1_aftercoreleg_toConsumableArray(garboWeen()), _1_aftercoreleg_toConsumableArray(crimbo()), _1_aftercoreleg_toConsumableArray(chrono()), [{
      name: "Garbo",
      completed: () => stooperDrunk() || (0,external_kolmafia_namespaceObject.myAdventures)() === 0,
      prepare: () => uneffect(template_string_$effect(_1_aftercoreleg_templateObject25 || (_1_aftercoreleg_templateObject25 = _1_aftercoreleg_taggedTemplateLiteral(["Beaten Up"])))),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("".concat(args.garboascend)),
      post: () => {
        if ((0,external_kolmafia_namespaceObject.myAdventures)() === 0) $effects(_1_aftercoreleg_templateObject26 || (_1_aftercoreleg_templateObject26 = _1_aftercoreleg_taggedTemplateLiteral(["Power Ballad of the Arrowsmith, Stevedave's Shanty of Superiority, The Moxious Madrigal, The Magical Mojomuscular Melody, Aloysius' Antiphon of Aptitude, Ur-Kel's Aria of Annoyance"]))).filter(ef => lib_have(ef)).forEach(ef => uneffect(ef));
      },
      clear: "all",
      tracking: "Garbo",
      limit: {
        tries: 1
      } //this will run again after installing CMC, by magic
    }, {
      name: "Stooper",
      ready: () => (0,external_kolmafia_namespaceObject.myInebriety)() === (0,external_kolmafia_namespaceObject.inebrietyLimit)() && lib_have(template_string_$item(_1_aftercoreleg_templateObject27 || (_1_aftercoreleg_templateObject27 = _1_aftercoreleg_taggedTemplateLiteral(["tiny stillsuit"])))) && property_get("familiarSweat") >= 300,
      completed: () => !lib_have(template_string_$familiar(_1_aftercoreleg_templateObject28 || (_1_aftercoreleg_templateObject28 = _1_aftercoreleg_taggedTemplateLiteral(["Stooper"])))) || stooperDrunk(),
      do: () => {
        (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(_1_aftercoreleg_templateObject29 || (_1_aftercoreleg_templateObject29 = _1_aftercoreleg_taggedTemplateLiteral(["Stooper"]))));
        (0,external_kolmafia_namespaceObject.cliExecute)("drink stillsuit distillate");
      },
      tracking: "Organs"
    }, {
      name: "Barfing Drunk with Stooper",
      ready: () => stooperDrunk() && lib_have(template_string_$familiar(_1_aftercoreleg_templateObject30 || (_1_aftercoreleg_templateObject30 = _1_aftercoreleg_taggedTemplateLiteral(["Stooper"])))) && !lib_have(template_string_$item(_1_aftercoreleg_templateObject31 || (_1_aftercoreleg_templateObject31 = _1_aftercoreleg_taggedTemplateLiteral(["Drunkula's wineglass"])))),
      completed: () => (0,external_kolmafia_namespaceObject.myAdventures)() === 0 || totallyDrunk() || (0,external_kolmafia_namespaceObject.daycount)() === 1,
      acquire: [{
        item: template_string_$item(_1_aftercoreleg_templateObject32 || (_1_aftercoreleg_templateObject32 = _1_aftercoreleg_taggedTemplateLiteral(["seal tooth"])))
      }],
      outfit: () => ({
        familiar: template_string_$familiar(_1_aftercoreleg_templateObject33 || (_1_aftercoreleg_templateObject33 = _1_aftercoreleg_taggedTemplateLiteral(["Stooper"]))),
        modifier: "".concat(maxBase(), ", 2.5 meat, 0.6 items")
      }),
      effects: $effects(_1_aftercoreleg_templateObject34 || (_1_aftercoreleg_templateObject34 = _1_aftercoreleg_taggedTemplateLiteral(["How to Scam Tourists"]))),
      //need to add meat buffs that we can cast
      prepare: () => {
        (0,external_kolmafia_namespaceObject.restoreHp)(0.75 * (0,external_kolmafia_namespaceObject.myMaxhp)());
        (0,external_kolmafia_namespaceObject.restoreMp)(20);
      },
      do: $location(_1_aftercoreleg_templateObject35 || (_1_aftercoreleg_templateObject35 = _1_aftercoreleg_taggedTemplateLiteral(["Barf Mountain"]))),
      combat: new CombatStrategy().macro(Macro.trySkill(template_string_$skill(_1_aftercoreleg_templateObject36 || (_1_aftercoreleg_templateObject36 = _1_aftercoreleg_taggedTemplateLiteral(["Curse of Weaksauce"])))), getTodaysHolidayWanderers()).macro(() => Macro.step("pickpocket").tryItem(template_string_$item(_1_aftercoreleg_templateObject37 || (_1_aftercoreleg_templateObject37 = _1_aftercoreleg_taggedTemplateLiteral(["train whistle"])))).trySkill(template_string_$skill(_1_aftercoreleg_templateObject38 || (_1_aftercoreleg_templateObject38 = _1_aftercoreleg_taggedTemplateLiteral(["Bowl Straight Up"])))).trySkill(template_string_$skill(_1_aftercoreleg_templateObject39 || (_1_aftercoreleg_templateObject39 = _1_aftercoreleg_taggedTemplateLiteral(["Sing Along"])))).tryItem(template_string_$item(_1_aftercoreleg_templateObject40 || (_1_aftercoreleg_templateObject40 = _1_aftercoreleg_taggedTemplateLiteral(["porquoise-handled sixgun"])))).externalIf((0,external_kolmafia_namespaceObject.haveEquipped)(template_string_$item(_1_aftercoreleg_templateObject41 || (_1_aftercoreleg_templateObject41 = _1_aftercoreleg_taggedTemplateLiteral(["mafia pointer finger ring"])))), Macro.trySkill(template_string_$skill(_1_aftercoreleg_templateObject42 || (_1_aftercoreleg_templateObject42 = _1_aftercoreleg_taggedTemplateLiteral(["Furious Wallop"])))).trySkill(template_string_$skill(_1_aftercoreleg_templateObject43 || (_1_aftercoreleg_templateObject43 = _1_aftercoreleg_taggedTemplateLiteral(["Summer Siesta"])))).trySkill(template_string_$skill(_1_aftercoreleg_templateObject44 || (_1_aftercoreleg_templateObject44 = _1_aftercoreleg_taggedTemplateLiteral(["Throw Shield"])))).trySkill(template_string_$skill(_1_aftercoreleg_templateObject45 || (_1_aftercoreleg_templateObject45 = _1_aftercoreleg_taggedTemplateLiteral(["Precision Shot"]))))).attack().repeat()),
      limit: {
        tries: 30
      },
      tracking: "Garbo"
    }, {
      name: "Nightcap (Wine Glass)",
      ready: () => lib_have(template_string_$item(_1_aftercoreleg_templateObject46 || (_1_aftercoreleg_templateObject46 = _1_aftercoreleg_taggedTemplateLiteral(["Drunkula's wineglass"])))),
      completed: () => totallyDrunk(),
      do: () => {
        if (template_string_$familiar(_1_aftercoreleg_templateObject47 || (_1_aftercoreleg_templateObject47 = _1_aftercoreleg_taggedTemplateLiteral(["Cooler Yeti"]))).experience >= 400) {
          (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(_1_aftercoreleg_templateObject48 || (_1_aftercoreleg_templateObject48 = _1_aftercoreleg_taggedTemplateLiteral(["Cooler Yeti"]))));
          (0,external_kolmafia_namespaceObject.visitUrl)("main.php?talktoyeti=1", false);
          (0,external_kolmafia_namespaceObject.runChoice)(2);
          (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(_1_aftercoreleg_templateObject49 || (_1_aftercoreleg_templateObject49 = _1_aftercoreleg_taggedTemplateLiteral(["Stooper"]))));
        }
        (0,external_kolmafia_namespaceObject.cliExecute)("CONSUME NIGHTCAP VALUE ".concat(property_get("valueOfAdventure") - 1000));
      },
      tracking: "Organs"
    }, {
      name: "Nightcap (Marginal)",
      ready: () => lib_have(template_string_$item(_1_aftercoreleg_templateObject50 || (_1_aftercoreleg_templateObject50 = _1_aftercoreleg_taggedTemplateLiteral(["Beach Comb"])))) || lib_have(template_string_$item(_1_aftercoreleg_templateObject51 || (_1_aftercoreleg_templateObject51 = _1_aftercoreleg_taggedTemplateLiteral(["Map to Safety Shelter Grimace Prime"])))),
      completed: () => totallyDrunk(),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("CONSUME NIGHTCAP VALUE 500"),
      tracking: "Organs"
    }, {
      name: "Grimace Maps",
      ready: () => !lib_have(template_string_$item(_1_aftercoreleg_templateObject52 || (_1_aftercoreleg_templateObject52 = _1_aftercoreleg_taggedTemplateLiteral(["Drunkula's wineglass"])))),
      completed: () => (0,external_kolmafia_namespaceObject.myAdventures)() === 0 || !lib_have(template_string_$item(_1_aftercoreleg_templateObject53 || (_1_aftercoreleg_templateObject53 = _1_aftercoreleg_taggedTemplateLiteral(["Map to Safety Shelter Grimace Prime"])))),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("grimace maps"),
      limit: {
        tries: 30
      },
      tracking: "Bonus"
    }, {
      name: "Trip Scrip",
      ready: () => args.ih8u || args.smol || args.casual,
      completed: () => lib_have(template_string_$item(_1_aftercoreleg_templateObject54 || (_1_aftercoreleg_templateObject54 = _1_aftercoreleg_taggedTemplateLiteral(["Shore Inc. Ship Trip Scrip"])))) || (0,external_kolmafia_namespaceObject.myInebriety)() > (0,external_kolmafia_namespaceObject.inebrietyLimit)(),
      do: $location(_1_aftercoreleg_templateObject55 || (_1_aftercoreleg_templateObject55 = _1_aftercoreleg_taggedTemplateLiteral(["The Shore, Inc. Travel Agency"]))),
      outfit: () => {
        if (!property_get("candyCaneSwordShore")) return {
          equip: template_string_$items(_1_aftercoreleg_templateObject56 || (_1_aftercoreleg_templateObject56 = _1_aftercoreleg_taggedTemplateLiteral(["candy cane sword cane"])))
        };else return {};
      },
      choices: () => {
        var swordReady = (0,external_kolmafia_namespaceObject.haveEquipped)(template_string_$item(_1_aftercoreleg_templateObject57 || (_1_aftercoreleg_templateObject57 = _1_aftercoreleg_taggedTemplateLiteral(["candy cane sword cane"])))) && !property_get("candyCaneSwordShore");
        var statChoice = byStat({
          Muscle: 1,
          Mysticality: 2,
          Moxie: 3
        });
        return {
          793: swordReady ? 5 : statChoice
        };
      },
      limit: {
        tries: 1
      },
      tracking: "Trip Scrip"
    }, {
      name: "Garbo (Drunk)",
      ready: () => lib_have(template_string_$item(_1_aftercoreleg_templateObject58 || (_1_aftercoreleg_templateObject58 = _1_aftercoreleg_taggedTemplateLiteral(["Drunkula's wineglass"])))),
      prepare: () => uneffect(template_string_$effect(_1_aftercoreleg_templateObject59 || (_1_aftercoreleg_templateObject59 = _1_aftercoreleg_taggedTemplateLiteral(["Beaten Up"])))),
      completed: () => (0,external_kolmafia_namespaceObject.myAdventures)() === 0,
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("".concat(args.garboascend)),
      post: () => $effects(_1_aftercoreleg_templateObject60 || (_1_aftercoreleg_templateObject60 = _1_aftercoreleg_taggedTemplateLiteral(["Power Ballad of the Arrowsmith, Stevedave's Shanty of Superiority, The Moxious Madrigal, The Magical Mojomuscular Melody, Aloysius' Antiphon of Aptitude, Ur-Kel's Aria of Annoyance"]))).filter(ef => lib_have(ef)).forEach(ef => uneffect(ef)),
      clear: "all",
      tracking: "Garbo"
    }, {
      name: "PvP Closet Safety 2",
      ready: () => args.pvp && property_get("autoSatisfyWithCloset") && !args.safepvp,
      completed: () => (0,external_kolmafia_namespaceObject.toBoolean)(property_get("_safetyCloset3")),
      do: () => pvpCloset(3)
    }, {
      name: "Comb Beach",
      ready: () => lib_have(template_string_$item(_1_aftercoreleg_templateObject61 || (_1_aftercoreleg_templateObject61 = _1_aftercoreleg_taggedTemplateLiteral(["Beach Comb"])))),
      completed: () => (0,external_kolmafia_namespaceObject.myAdventures)() === 0,
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("combo ".concat(11 - property_get("_freeBeachWalksUsed") + (0,external_kolmafia_namespaceObject.myAdventures)())),
      tracking: "Combo"
    }, {
      name: "Turn in FunFunds",
      ready: () => property_get("_stenchAirportToday") && (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(_1_aftercoreleg_templateObject62 || (_1_aftercoreleg_templateObject62 = _1_aftercoreleg_taggedTemplateLiteral(["FunFunds\u2122"])))) >= 20,
      completed: () => lib_have(template_string_$item(_1_aftercoreleg_templateObject63 || (_1_aftercoreleg_templateObject63 = _1_aftercoreleg_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"])))),
      do: () => (0,external_kolmafia_namespaceObject.buy)($coinmaster(_1_aftercoreleg_templateObject64 || (_1_aftercoreleg_templateObject64 = _1_aftercoreleg_taggedTemplateLiteral(["The Dinsey Company Store"]))), 1, template_string_$item(_1_aftercoreleg_templateObject65 || (_1_aftercoreleg_templateObject65 = _1_aftercoreleg_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"])))),
      tracking: "Garbo"
    }, {
      name: "Break Stone",
      ready: () => args.safepvp,
      completed: () => (0,external_kolmafia_namespaceObject.hippyStoneBroken)() || !args.pvp,
      do: () => {
        (0,external_kolmafia_namespaceObject.visitUrl)("peevpee.php?action=smashstone&pwd&confirm=on", true);
        (0,external_kolmafia_namespaceObject.visitUrl)("peevpee.php?place=fight");
      }
    }, {
      name: "PvP",
      completed: () => (0,external_kolmafia_namespaceObject.pvpAttacksLeft)() === 0 || !(0,external_kolmafia_namespaceObject.hippyStoneBroken)(),
      do: () => {
        (0,external_kolmafia_namespaceObject.cliExecute)("unequip");
        (0,external_kolmafia_namespaceObject.cliExecute)("UberPvPOptimizer");
        (0,external_kolmafia_namespaceObject.cliExecute)("PVP_MAB target=".concat(args.pvpTarget));
      }
    }, {
      name: "Prepare for LoopSmol",
      ready: () => _1_aftercoreleg_doSmol,
      completed: () => lib_have(template_string_$item(_1_aftercoreleg_templateObject66 || (_1_aftercoreleg_templateObject66 = _1_aftercoreleg_taggedTemplateLiteral(["Pizza of Legend"])))) && lib_have(template_string_$item(_1_aftercoreleg_templateObject67 || (_1_aftercoreleg_templateObject67 = _1_aftercoreleg_taggedTemplateLiteral(["Frosty's frosty mug"])))) && lib_have(template_string_$item(_1_aftercoreleg_templateObject68 || (_1_aftercoreleg_templateObject68 = _1_aftercoreleg_taggedTemplateLiteral(["Ol' Scratch's salad fork"])))),
      do: () => {
        if ((0,external_kolmafia_namespaceObject.mallPrice)(template_string_$item(_1_aftercoreleg_templateObject69 || (_1_aftercoreleg_templateObject69 = _1_aftercoreleg_taggedTemplateLiteral(["Frosty's frosty mug"])))) < 200000 && (0,external_kolmafia_namespaceObject.mallPrice)(template_string_$item(_1_aftercoreleg_templateObject70 || (_1_aftercoreleg_templateObject70 = _1_aftercoreleg_taggedTemplateLiteral(["Ol' Scratch's salad fork"])))) < 200000) (0,external_kolmafia_namespaceObject.cliExecute)("acquire Pizza of Legend; acquire Frosty's frosty mug; acquire Ol' Scratch's salad fork");
      },
      tracking: "Ascension Prep"
    }, {
      name: "Marble Soda!",
      ready: () => doCS,
      completed: () => lib_have(template_string_$item(_1_aftercoreleg_templateObject71 || (_1_aftercoreleg_templateObject71 = _1_aftercoreleg_taggedTemplateLiteral(["tobiko marble soda"])))) || skipSoda,
      do: () => {
        if ((0,external_kolmafia_namespaceObject.mallPrice)(template_string_$item(_1_aftercoreleg_templateObject72 || (_1_aftercoreleg_templateObject72 = _1_aftercoreleg_taggedTemplateLiteral(["tobiko marble soda"])))) < property_get("valueOfAdventure") * 2) (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(_1_aftercoreleg_templateObject73 || (_1_aftercoreleg_templateObject73 = _1_aftercoreleg_taggedTemplateLiteral(["tobiko marble soda"]))));else {
          (0,external_kolmafia_namespaceObject.print)("Soda is too expensive, mallprice is ".concat((0,external_kolmafia_namespaceObject.mallPrice)(template_string_$item(_1_aftercoreleg_templateObject74 || (_1_aftercoreleg_templateObject74 = _1_aftercoreleg_taggedTemplateLiteral(["tobiko marble soda"]))))));
          skipSoda = true;
        }
      },
      tracking: "Ascension Prep"
    }, {
      name: "Prepare for LoopCS",
      ready: () => doCS,
      completed: () => lib_have(template_string_$item(_1_aftercoreleg_templateObject75 || (_1_aftercoreleg_templateObject75 = _1_aftercoreleg_taggedTemplateLiteral(["Pizza of Legend"])))) && lib_have(template_string_$item(_1_aftercoreleg_templateObject76 || (_1_aftercoreleg_templateObject76 = _1_aftercoreleg_taggedTemplateLiteral(["Deep Dish of Legend"])))) && lib_have(template_string_$item(_1_aftercoreleg_templateObject77 || (_1_aftercoreleg_templateObject77 = _1_aftercoreleg_taggedTemplateLiteral(["Calzone of Legend"])))),
      do: () => {
        !lib_have(template_string_$item(_1_aftercoreleg_templateObject78 || (_1_aftercoreleg_templateObject78 = _1_aftercoreleg_taggedTemplateLiteral(["Pizza of Legend"])))) ? (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(_1_aftercoreleg_templateObject79 || (_1_aftercoreleg_templateObject79 = _1_aftercoreleg_taggedTemplateLiteral(["Pizza of Legend"])))) : undefined;
        !lib_have(template_string_$item(_1_aftercoreleg_templateObject80 || (_1_aftercoreleg_templateObject80 = _1_aftercoreleg_taggedTemplateLiteral(["Deep Dish of Legend"])))) ? (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(_1_aftercoreleg_templateObject81 || (_1_aftercoreleg_templateObject81 = _1_aftercoreleg_taggedTemplateLiteral(["Deep Dish of Legend"])))) : undefined;
        !lib_have(template_string_$item(_1_aftercoreleg_templateObject82 || (_1_aftercoreleg_templateObject82 = _1_aftercoreleg_taggedTemplateLiteral(["Calzone of Legend"])))) ? (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(_1_aftercoreleg_templateObject83 || (_1_aftercoreleg_templateObject83 = _1_aftercoreleg_taggedTemplateLiteral(["Calzone of Legend"])))) : undefined;
        !lib_have(template_string_$item(_1_aftercoreleg_templateObject84 || (_1_aftercoreleg_templateObject84 = _1_aftercoreleg_taggedTemplateLiteral(["borrowed time"])))) ? (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(_1_aftercoreleg_templateObject85 || (_1_aftercoreleg_templateObject85 = _1_aftercoreleg_taggedTemplateLiteral(["borrowed time"])))) : undefined;
      },
      tracking: "Ascension Prep"
    }, {
      name: "Prepare for IH8U",
      ready: () => args.ih8u,
      completed: () => lib_have(template_string_$item(_1_aftercoreleg_templateObject86 || (_1_aftercoreleg_templateObject86 = _1_aftercoreleg_taggedTemplateLiteral(["mini kiwi invisible dirigible"])))) && lib_have(template_string_$item(_1_aftercoreleg_templateObject87 || (_1_aftercoreleg_templateObject87 = _1_aftercoreleg_taggedTemplateLiteral(["mini kiwi digitized cookies"])))) && lib_have(template_string_$item(_1_aftercoreleg_templateObject88 || (_1_aftercoreleg_templateObject88 = _1_aftercoreleg_taggedTemplateLiteral(["mini kiwi intoxicating spirits"])))) && lib_have(template_string_$item(_1_aftercoreleg_templateObject89 || (_1_aftercoreleg_templateObject89 = _1_aftercoreleg_taggedTemplateLiteral(["incredible mini-pizza"])))),
      do: () => {
        (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(_1_aftercoreleg_templateObject90 || (_1_aftercoreleg_templateObject90 = _1_aftercoreleg_taggedTemplateLiteral(["mini kiwi invisible dirigible"]))));
        (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(_1_aftercoreleg_templateObject91 || (_1_aftercoreleg_templateObject91 = _1_aftercoreleg_taggedTemplateLiteral(["mini kiwi digitized cookies"]))));
        (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(_1_aftercoreleg_templateObject92 || (_1_aftercoreleg_templateObject92 = _1_aftercoreleg_taggedTemplateLiteral(["mini kiwi intoxicating spirits"]))));
        (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(_1_aftercoreleg_templateObject93 || (_1_aftercoreleg_templateObject93 = _1_aftercoreleg_taggedTemplateLiteral(["incredible mini-pizza"]))));
      },
      tracking: "Ascension Prep"
    }, {
      name: "Let's do the trainset again",
      completed: () => cycle().toString === stations.toString,
      do: () => {
        var offset = property_get("trainsetPosition") % 8;
        var newStations = [];
        for (var i = 0; i < 8; i++) {
          var newPos = (i + offset) % 8;
          newStations[newPos] = stations[i];
        }
        (0,external_kolmafia_namespaceObject.visitUrl)("campground.php?action=workshed");
        (0,external_kolmafia_namespaceObject.visitUrl)("main.php");
        setConfiguration(newStations);
      },
      limit: {
        tries: 5
      }
    }, {
      name: "Job's Done",
      completed: () => jobsDone,
      do: () => {
        jobsDone = true;
      }
    }])
  };
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2023/CursedMonkeyPaw.js
var CursedMonkeyPaw_templateObject;
function CursedMonkeyPaw_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var CursedMonkeyPaw_item = template_string_$item(CursedMonkeyPaw_templateObject || (CursedMonkeyPaw_templateObject = CursedMonkeyPaw_taggedTemplateLiteral(["cursed monkey's paw"])));
/**
 * @returns Whether or not we currently `have` the cursed monkey's paw
 */
function CursedMonkeyPaw_have() {
  return lib_have(CursedMonkeyPaw_item);
}
/**
 * @returns The number of monkey paw wishes we have remaining
 */
function wishes() {
  return clamp(5 - get("_monkeyPawWishesUsed"), 0, 5);
}
/**
 * @param filters An optional object optionally consisting of filtering functions to shrink down the pool of wishable items
 * @param filters.location A filtering function to remove locations from the pool of wishable targets.
 * @param filters.monster A filtering function to remove monsters from the pool of wishable targets.
 * @param filters.drop A filtering function to remove item drops from the pool of wishable targets.
 * @returns A set of all items we expect to be able to wish; this doesn't actually constitute all items
 */
function wishableItems() {
  var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Set(Location.all().filter(l => {
    var _filters$location, _filters$location2;
    return canAdventure(l) && ((_filters$location = (_filters$location2 = filters.location) === null || _filters$location2 === void 0 ? void 0 : _filters$location2.call(filters, l)) !== null && _filters$location !== void 0 ? _filters$location : true);
  }).flatMap(l => getMonsters(l).filter(m => {
    var _filters$monster, _filters$monster2;
    return m.copyable && ((_filters$monster = (_filters$monster2 = filters.monster) === null || _filters$monster2 === void 0 ? void 0 : _filters$monster2.call(filters, m)) !== null && _filters$monster !== void 0 ? _filters$monster : true);
  }).flatMap(m => itemDropsArray(m).filter(_ref => {
    var _filters$drop, _filters$drop2;
    var type = _ref.type,
      rate = _ref.rate,
      drop = _ref.drop;
    return !drop.quest && (type !== "c" || rate >= 1) && ( // Remove random roll drops
    (_filters$drop = (_filters$drop2 = filters.drop) === null || _filters$drop2 === void 0 ? void 0 : _filters$drop2.call(filters, {
      type,
      rate,
      drop
    })) !== null && _filters$drop !== void 0 ? _filters$drop : true);
  }).map(_ref2 => {
    var drop = _ref2.drop;
    return drop;
  }))));
}
var INVALID_CHARACTERS = /[^a-z\d -]/g;
var _unwishableEffects;
function unwishableEffects() {
  // This is the set of all names of genie-wishable effects, split into the maximal substrings we can actually submit
  var names = Effect.all().filter(e => !e.attributes.includes("nohookah")).map(e => {
    var name = e.name.toLowerCase();
    return {
      name,
      splitName: name.split(INVALID_CHARACTERS)
    };
  });
  return names.filter(_ref3 => {
    var name = _ref3.name,
      splitName = _ref3.splitName;
    return (
      // Any effect that doesn't contain an INVALID_CHARACTER is fine
      splitName.length > 1 &&
      // To be unwishable, there can't be any substrings that uniquely match a genie-wishable effect
      splitName.every(s =>
      // So we check every maximal substring against every one of our genie-wishable effects, excluding the effect we're currently looking at
      // if one of the substrings matches a substring associated with another effect, we're screwed.
      names.some(_ref4 => {
        var n = _ref4.name;
        return n !== name && n.includes(s);
      }))
    );
  }).map(_ref5 => {
    var name = _ref5.name;
    return toEffect(name);
  });
}
/**
 * @returns An Array consisting of all genie-wishable Effects that are not Monkey-wishable
 */
function getUnwishableEffects() {
  var _unwishableEffects2;
  return (_unwishableEffects2 = _unwishableEffects) !== null && _unwishableEffects2 !== void 0 ? _unwishableEffects2 : _unwishableEffects = unwishableEffects();
}
/**
 * Decides if we expect that a given Item or Effect can be wished for.
 * May be slow for Effects;
 *
 * @param wish The Item or Effect in question
 * @returns Whether we expect it can be wished for
 */
function isWishable(wish) {
  if (wish instanceof Item) {
    return wishableItems().has(wish);
  } else {
    if (wish.attributes.includes("nohookah")) return false;
    if (!wish.name.match(/[.,']/)) return true;
    return !getUnwishableEffects().includes(wish);
  }
}
/**
 * Wish for a given Item or Effect.
 * If it's an item, will `prepareForAdventure`; if an item is available in multiple locations this will pick the first one.
 *
 * @param wish The Item or Effect to wish for
 * @returns Whether we succeeded in this endeavor
 */
function wishFor(wish) {
  if (wishes() <= 0) return false;
  if (wish instanceof Effect) return monkeyPaw(wish);
  var locations = Location.all().filter(l => canAdventure(l) && getMonsters(l).some(m => m.copyable && itemDropsArray(m).some(_ref6 => {
    var drop = _ref6.drop;
    return drop === wish;
  })));
  try {
    if (locations.length) {
      cliExecute("checkpoint");
      prepareForAdventure(locations[0]);
    }
    var result = monkeyPaw(wish);
    if (!result) {
      logger.debug("Failed to monkeyPaw wish for ".concat(wish, "; assumed it was available in locations ").concat(locations.join(", ")));
    }
    return result;
  } finally {
    if (locations.length) cliExecute("outfit checkpoint");
  }
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/moonSign.js
var MoonSigns = ["Mongoose", "Wallaby", "Vole", "Platypus", "Opossum", "Marmot", "Wombat", "Blender", "Packrat"];
/**
 * @param moon Moon sign name
 * @returns Moon sign id else 0
 */
function signNameToId(moon) {
  return MoonSigns.indexOf(moon) + 1;
}
/**
 * @param id Moon sign id
 * @returns Name of moon sign else "None"
 */
function signIdToName(id) {
  return MoonSigns[id - 1] || "None";
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/ascend.js
var ascend_templateObject, ascend_templateObject2, ascend_templateObject3, ascend_templateObject4, ascend_templateObject5, ascend_templateObject6, ascend_templateObject7, ascend_templateObject8, ascend_templateObject9;
function ascend_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = ascend_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function ascend_toConsumableArray(arr) { return ascend_arrayWithoutHoles(arr) || ascend_iterableToArray(arr) || ascend_unsupportedIterableToArray(arr) || ascend_nonIterableSpread(); }
function ascend_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ascend_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function ascend_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return ascend_arrayLikeToArray(arr); }
function ascend_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function ascend_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ascend_ownKeys(Object(source), !0).forEach(function (key) { ascend_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ascend_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function ascend_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function ascend_defineProperty(obj, key, value) { key = ascend_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ascend_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, ascend_toPropertyKey(descriptor.key), descriptor); } }
function ascend_createClass(Constructor, protoProps, staticProps) { if (protoProps) ascend_defineProperties(Constructor.prototype, protoProps); if (staticProps) ascend_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function ascend_toPropertyKey(arg) { var key = ascend_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function ascend_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function ascend_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function ascend_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) ascend_setPrototypeOf(subClass, superClass); }
function ascend_createSuper(Derived) { var hasNativeReflectConstruct = ascend_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ascend_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ascend_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ascend_possibleConstructorReturn(this, result); }; }
function ascend_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return ascend_assertThisInitialized(self); }
function ascend_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function ascend_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; ascend_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !ascend_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return ascend_construct(Class, arguments, ascend_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return ascend_setPrototypeOf(Wrapper, Class); }; return ascend_wrapNativeSuper(Class); }
function ascend_construct(Parent, args, Class) { if (ascend_isNativeReflectConstruct()) { ascend_construct = Reflect.construct.bind(); } else { ascend_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) ascend_setPrototypeOf(instance, Class.prototype); return instance; }; } return ascend_construct.apply(null, arguments); }
function ascend_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function ascend_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function ascend_setPrototypeOf(o, p) { ascend_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ascend_setPrototypeOf(o, p); }
function ascend_getPrototypeOf(o) { ascend_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ascend_getPrototypeOf(o); }
function ascend_slicedToArray(arr, i) { return ascend_arrayWithHoles(arr) || ascend_iterableToArrayLimit(arr, i) || ascend_unsupportedIterableToArray(arr, i) || ascend_nonIterableRest(); }
function ascend_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ascend_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ascend_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ascend_arrayLikeToArray(o, minLen); }
function ascend_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ascend_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function ascend_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Lifestyle;
(function (Lifestyle) {
  Lifestyle[Lifestyle["casual"] = 1] = "casual";
  Lifestyle[Lifestyle["softcore"] = 2] = "softcore";
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  Lifestyle[Lifestyle["normal"] = 2] = "normal";
  Lifestyle[Lifestyle["hardcore"] = 3] = "hardcore";
})(Lifestyle || (Lifestyle = {}));
var KolGender;
(function (KolGender) {
  KolGender[KolGender["male"] = 1] = "male";
  KolGender[KolGender["female"] = 2] = "female";
})(KolGender || (KolGender = {}));
/**
 * Get a mapping of permed skills to the extent to which they're permed.
 *
 * If a skill is not permed at all, it will not appear in the mapping.
 *
 * @returns Permed skills mapping
 */
function permedSkills() {
  return new Map(Array.from(Object.entries((0,external_kolmafia_namespaceObject.getPermedSkills)())).map(_ref => {
    var _ref2 = ascend_slicedToArray(_ref, 2),
      skillName = _ref2[0],
      isHardcore = _ref2[1];
    return [(0,external_kolmafia_namespaceObject.toSkill)(skillName), isHardcore ? Lifestyle.hardcore : Lifestyle.softcore];
  }));
}
var AscendError = /*#__PURE__*/function (_Error) {
  ascend_inherits(AscendError, _Error);
  var _super = ascend_createSuper(AscendError);
  function AscendError() {
    ascend_classCallCheck(this, AscendError);
    return _super.apply(this, arguments);
  }
  return ascend_createClass(AscendError);
}( /*#__PURE__*/ascend_wrapNativeSuper(Error));
var ascend_gardens = (/* unused pure expression or super */ null && (["packet of pumpkin seeds", "Peppermint Pip Packet", "packet of dragon's teeth", "packet of beer seeds", "packet of winter seeds", "packet of thanksgarden seeds", "packet of tall grass seeds", "packet of mushroom spores", "packet of rock seeds"]));
var eudorae = (/* unused pure expression or super */ null && (["My Own Pen Pal kit", "GameInformPowerDailyPro subscription card", "Xi Receiver Unit", "New-You Club Membership Form", "Our Daily Candles™ order form", "Black and White Apron Enrollment Form"]));
var isGarden = x => arrayContains(x, ascend_gardens);
var isEudora = x => arrayContains(x, eudorae);
var isDesk = x => arrayContains(x, ChateauMantegna.desks);
var isNightstand = x => arrayContains(x, ChateauMantegna.nightstands);
var isCeiling = x => arrayContains(x, ChateauMantegna.ceilings);
var AscensionPrepError = /*#__PURE__*/(/* unused pure expression or super */ null && (function (_Error2) {
  ascend_inherits(AscensionPrepError, _Error2);
  var _super2 = ascend_createSuper(AscensionPrepError);
  function AscensionPrepError(cause, original) {
    var _this;
    ascend_classCallCheck(this, AscensionPrepError);
    if (isGarden(cause)) {
      _this = _super2.call(this, "Unable to swap garden to ".concat(cause, "; garden is currently ").concat(original, "."));
      ascend_defineProperty(ascend_assertThisInitialized(_this), "cause", void 0);
    } else if (isEudora(cause)) {
      _this = _super2.call(this, "Unable to swap eudora to ".concat(cause, "; eudora is currently ").concat(original, "."));
      ascend_defineProperty(ascend_assertThisInitialized(_this), "cause", void 0);
    } else if (isDesk(cause)) {
      _this = _super2.call(this, "Unable to swap chateau desk to ".concat(cause, "; desk is currently ").concat(original, "."));
      ascend_defineProperty(ascend_assertThisInitialized(_this), "cause", void 0);
    } else if (isNightstand(cause)) {
      _this = _super2.call(this, "Unable to swap chateau nightstand to ".concat(cause, "; nightstand is currently ").concat(original, "."));
      ascend_defineProperty(ascend_assertThisInitialized(_this), "cause", void 0);
    } else if (isCeiling(cause)) {
      _this = _super2.call(this, "Unable to swap chateau ceiling to ".concat(cause, "; ceiling is currently ").concat(original, "."));
      ascend_defineProperty(ascend_assertThisInitialized(_this), "cause", void 0);
    } else {
      _this = _super2.call(this, cause);
      ascend_defineProperty(ascend_assertThisInitialized(_this), "cause", void 0);
    }
    _this.cause = cause;
    return ascend_possibleConstructorReturn(_this);
  }
  return ascend_createClass(AscensionPrepError);
}( /*#__PURE__*/ascend_wrapNativeSuper(Error))));
/**
 * Determine the id of the appropriate moon sign.
 *
 * @param moon Either a moon sign or the desired unlocked zone name
 * @param playerClass Class, required for working out a moon sign based on the desired zone
 * @returns Moon sign id
 */
function inputToMoonId(moon, playerClass) {
  if (typeof moon === "number") return moon;
  var offset = () => {
    switch (playerClass.primestat) {
      case $stat(ascend_templateObject || (ascend_templateObject = ascend_taggedTemplateLiteral(["Muscle"]))):
        return 0;
      case $stat(ascend_templateObject2 || (ascend_templateObject2 = ascend_taggedTemplateLiteral(["Mysticality"]))):
        return 1;
      case $stat(ascend_templateObject3 || (ascend_templateObject3 = ascend_taggedTemplateLiteral(["Moxie"]))):
        return 2;
      default:
        throw new AscendError("unknown prime stat for ".concat(playerClass));
    }
  };
  var fromNormalInput = signNameToId(tc(moon));
  if (fromNormalInput > 0) return fromNormalInput;
  switch (moon.toLowerCase()) {
    case "degrassi":
    case "degrassi knoll":
    case "friendly degrassi knoll":
    case "knoll":
      return 1 + offset();
    case "canada":
    case "canadia":
    case "little canadia":
      return 4 + offset();
    case "gnomads":
    case "gnomish":
    case "gnomish gnomads camp":
      return 7 + offset();
    default:
      throw new AscendError("Invalid moon sign!");
  }
}
/**
 * Determine if player is currently in Valhalla
 *
 * @returns Whether player is in Valhalla
 */
function isInValhalla() {
  var charPaneText = (0,external_kolmafia_namespaceObject.visitUrl)("charpane.php");
  // Match the infinity images (inf_small.gif, inf_large.gif)
  // At time of writing, the full img tag used is:
  // <img src="https://d2uyhvukfffg5a.cloudfront.net/otherimages/inf_small.gif">
  var matches = charPaneText.match(/<img src="[^"]*\/otherimages\/inf_\w+\.gif">/);
  return matches !== null;
}
/**
 * Hops the gash, perming no skills by default
 *
 * @param options Configuration for the ascension
 * @param options.path Your path of choice for this ascension
 * @param options.playerClass Your class of choice for this ascension
 * @param options.lifestyle 1 for casual, 2 for softcore, 3 for hardcore. Alternately, use the Lifestyle enum
 * @param options.kolGender An entry from the KolGender enum: 1 for male, 2 for female (sorry that it's limited to those). Defaults to 2 or the corresponding value for defaultGenderOverride pref (which should be 'male' or 'female')
 * @param options.moon Your moon sign as a string, or the zone you're looking for as a string
 * @param options.consumable From the astral deli. Pick the container item, not the product. Defaults to astral six-pack, provide $item`none` for nothing.
 * @param options.pet From the astral pet store.
 * @param options.permOptions Options for perming during a player's stay in Valhalla
 * @param options.permOptions.permSkills A Map<Skill, Lifestyle> of skills you'd like to perm, ordered by priority.
 * @param options.permOptions.neverAbort Whether the ascension should abort on failure
 */
function ascend(options) {
  var _permOptions$permSkil, _permOptions$permSkil2;
  var DEFAULT_OPTIONS = {
    kolGender: property_get("defaultGenderOverride", "female") === "male" ? KolGender.male : KolGender.female,
    consumable: template_string_$item(ascend_templateObject4 || (ascend_templateObject4 = ascend_taggedTemplateLiteral(["astral six-pack"]))),
    pet: template_string_$item(ascend_templateObject5 || (ascend_templateObject5 = ascend_taggedTemplateLiteral(["none"])))
  };
  var prunedOptions = Object.fromEntries(Object.entries(options).filter(_ref3 => {
    var _ref4 = ascend_slicedToArray(_ref3, 2),
      value = _ref4[1];
    return value;
  }));
  var _DEFAULT_OPTIONS$prun = ascend_objectSpread(ascend_objectSpread({}, DEFAULT_OPTIONS), prunedOptions),
    path = _DEFAULT_OPTIONS$prun.path,
    playerClass = _DEFAULT_OPTIONS$prun.playerClass,
    lifestyle = _DEFAULT_OPTIONS$prun.lifestyle,
    kolGender = _DEFAULT_OPTIONS$prun.kolGender,
    moon = _DEFAULT_OPTIONS$prun.moon,
    consumable = _DEFAULT_OPTIONS$prun.consumable,
    pet = _DEFAULT_OPTIONS$prun.pet,
    permOptions = _DEFAULT_OPTIONS$prun.permOptions;
  if (playerClass.path !== (path.avatar ? path : external_kolmafia_namespaceObject.Path.none)) {
    throw new AscendError("Invalid class ".concat(playerClass, " for this path!"));
  }
  if (path.id < 0) throw new AscendError("Invalid path: ".concat(path, "!"));
  var moonId = inputToMoonId(moon, playerClass);
  if (moonId < 1 || moonId > 9) throw new Error("Invalid moon ".concat(moon));
  if (!template_string_$items(ascend_templateObject6 || (ascend_templateObject6 = ascend_taggedTemplateLiteral(["none, astral six-pack, astral hot dog dinner, [10882]carton of astral energy drinks"]))).includes(consumable)) {
    throw new AscendError("Invalid astral consumable: ".concat(consumable));
  }
  if (!template_string_$items(ascend_templateObject7 || (ascend_templateObject7 = ascend_taggedTemplateLiteral(["none, astral bludgeon, astral shield, astral chapeau, astral bracer, astral longbow, astral shorts, astral mace, astral trousers, astral ring, astral statuette, astral pistol, astral mask, astral pet sweater, astral shirt, astral belt"]))).includes(pet)) {
    throw new AscendError("Invalid astral pet: ".concat(pet));
  }
  var unownedSkills = ascend_toConsumableArray((_permOptions$permSkil = permOptions === null || permOptions === void 0 ? void 0 : permOptions.permSkills.keys()) !== null && _permOptions$permSkil !== void 0 ? _permOptions$permSkil : []).filter(skill => !(0,external_kolmafia_namespaceObject.haveSkill)(skill));
  if (unownedSkills.length) {
    throw new AscendError("You're trying to perm the following skills, but don't actually have them: ".concat(unownedSkills.join(", ")));
  }
  var unpermableSkills = ascend_toConsumableArray((_permOptions$permSkil2 = permOptions === null || permOptions === void 0 ? void 0 : permOptions.permSkills.keys()) !== null && _permOptions$permSkil2 !== void 0 ? _permOptions$permSkil2 : []).filter(skill => !skill.permable);
  if (unpermableSkills.length) {
    throw new AscendError("You're trying to perm the following skills, but they're unpermable: ".concat(unownedSkills.join(", ")));
  }
  if (!isInValhalla()) {
    (0,external_kolmafia_namespaceObject.visitUrl)("ascend.php?action=ascend&confirm=on&confirm2=on");
  }
  if (!isInValhalla()) {
    throw new AscendError("Failed to ascend--do you have a pending trade offer?");
  }
  (0,external_kolmafia_namespaceObject.visitUrl)("afterlife.php?action=pearlygates");
  if (consumable !== template_string_$item(ascend_templateObject8 || (ascend_templateObject8 = ascend_taggedTemplateLiteral(["none"])))) {
    (0,external_kolmafia_namespaceObject.visitUrl)("afterlife.php?action=buydeli&whichitem=".concat(consumable.id));
  }
  if (pet !== template_string_$item(ascend_templateObject9 || (ascend_templateObject9 = ascend_taggedTemplateLiteral(["none"])))) {
    (0,external_kolmafia_namespaceObject.visitUrl)("afterlife.php?action=buyarmory&whichitem=".concat(pet.id));
  }
  if (permOptions) {
    var currentPerms = permedSkills();
    var karma = property_get("bankedKarma");
    var _iterator = ascend_createForOfIteratorHelper(permOptions.permSkills.entries()),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _currentPerms$get;
        var _step$value = ascend_slicedToArray(_step.value, 2),
          skill = _step$value[0],
          prospectivePermLevel = _step$value[1];
        var currentPermLevel = (_currentPerms$get = currentPerms.get(skill)) !== null && _currentPerms$get !== void 0 ? _currentPerms$get : Lifestyle.casual;
        if (prospectivePermLevel > currentPermLevel) {
          var expectedKarma = 100 * (prospectivePermLevel - currentPermLevel);
          if (karma < expectedKarma) {
            if (!permOptions.neverAbort) throw new AscendError("Skill ".concat(skill, " is too karmaically expensive!"));
            continue;
          }
          karma -= expectedKarma;
          var permText = prospectivePermLevel === Lifestyle.hardcore ? "hcperm" : "scperm";
          (0,external_kolmafia_namespaceObject.visitUrl)("afterlife.php?action=".concat(permText, "&whichskill=").concat(skill.id));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  (0,external_kolmafia_namespaceObject.visitUrl)("afterlife.php?action=ascend&confirmascend=1&whichsign=".concat(moonId, "&gender=").concat(kolGender, "&whichclass=").concat(playerClass.id, "&whichpath=").concat(path.id, "&asctype=").concat(lifestyle, "&nopetok=1&noskillsok=1&lamepathok=1&lamesignok=1&pwd"), true);
}
/**
 * Sets up various iotms you may want to use in the coming ascension
 *
 * @param ascensionPrep Configuration for various ascension prep settings. Any ommitted key will be kept as-is
 * @param ascensionPrep.garden Garden to which to switch
 * @param ascensionPrep.eudora Eudora to which to switch
 * @param ascensionPrep.chateau Chateau configuration
 * @param ascensionPrep.chateau.desk Chateau desk configuration
 * @param ascensionPrep.chateau.ceiling Chateau ceiling configuration
 * @param ascensionPrep.chateau.nightstand Chateau nightstand configuration
 * @param ascensionPrep.throwOnFail If true, this will throw an error when it fails to switch something
 */
function prepareAscension() {
  var _throwOnFail;
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    garden = _ref5.garden,
    eudora = _ref5.eudora,
    chateau = _ref5.chateau,
    throwOnFail = _ref5.throwOnFail;
  throwOnFail = (_throwOnFail = throwOnFail) !== null && _throwOnFail !== void 0 ? _throwOnFail : true;
  if (garden && !Object.getOwnPropertyNames(getCampground()).includes(garden)) {
    use(Item.get(garden));
    var gardenName = Object.getOwnPropertyNames(getCampground()).find(isGarden);
    if (gardenName !== garden && throwOnFail) {
      throw new AscensionPrepError(garden, gardenName);
    }
  }
  if (eudora && eudoraItem().name !== eudora) {
    var eudoraNumber = 1 + eudorae.indexOf(eudora);
    if (!xpath(visitUrl("account.php?tab=correspondence"), "//select[@name=\"whichpenpal\"]/option/@value").includes(eudoraNumber.toString()) && throwOnFail) {
      throw new AscensionPrepError("Unable to swap eudora to ".concat(eudora, " because you are not subscribed to it."));
    } else {
      visitUrl("account.php?actions[]=whichpenpal&whichpenpal=".concat(eudoraNumber, "&action=Update"), true);
    }
    if (eudoraItem() !== Item.get(eudora) && throwOnFail) {
      throw new AscensionPrepError(eudora, eudoraItem());
    }
  }
  if (chateau && ChateauMantegna.have()) {
    var desk = chateau.desk,
      ceiling = chateau.ceiling,
      nightstand = chateau.nightstand;
    if (ceiling && ChateauMantegna.getCeiling() !== ceiling) {
      if (!ChateauMantegna.changeCeiling(ceiling) && throwOnFail) {
        var _ChateauMantegna$getC;
        throw new AscensionPrepError(ceiling, (_ChateauMantegna$getC = ChateauMantegna.getCeiling()) !== null && _ChateauMantegna$getC !== void 0 ? _ChateauMantegna$getC : "unknown");
      }
    }
    if (desk && ChateauMantegna.getDesk() !== desk) {
      if (!ChateauMantegna.changeDesk(desk) && throwOnFail) {
        var _ChateauMantegna$getD;
        throw new AscensionPrepError(desk, (_ChateauMantegna$getD = ChateauMantegna.getDesk()) !== null && _ChateauMantegna$getD !== void 0 ? _ChateauMantegna$getD : "unknown");
      }
    }
    if (nightstand && ChateauMantegna.getNightstand() !== nightstand) {
      if (!ChateauMantegna.changeNightstand(nightstand) && throwOnFail) {
        var _ChateauMantegna$getN;
        throw new AscensionPrepError(nightstand, (_ChateauMantegna$getN = ChateauMantegna.getNightstand()) !== null && _ChateauMantegna$getN !== void 0 ? _ChateauMantegna$getN : "unknown");
      }
    }
  }
}
;// CONCATENATED MODULE: ./src/tasks/perm.ts


function filterPermableSkills(lifestyle) {
  var permedSkill = permedSkills();
  var filteredSkills = [];
  if (lifestyle === Lifestyle.softcore) {
    filteredSkills = external_kolmafia_namespaceObject.Skill.all().filter(sk => sk.permable && lib_have(sk) && !(permedSkill.get(sk) === Lifestyle.softcore || Lifestyle.hardcore));
  } else {
    filteredSkills = external_kolmafia_namespaceObject.Skill.all().filter(sk => sk.permable && lib_have(sk) && !(permedSkill.get(sk) === lifestyle));
  }
  return filteredSkills;
}
function targetPerms() {
  // Try filtering softcore skills first
  var pOptions = filterPermableSkills(Lifestyle.softcore);
  var lifestyle = Lifestyle.softcore;

  // If all skills are permed as softcore, move to hardcore
  if (pOptions.length === 0) {
    pOptions = filterPermableSkills(Lifestyle.hardcore);
    lifestyle = Lifestyle.hardcore;
  }
  var maxQty = Math.floor(((0,external_kolmafia_namespaceObject.toInt)(property_get("bankedKarma", 0)) - 11) / 100);
  return [pOptions.slice(0, maxQty), lifestyle];
}
;// CONCATENATED MODULE: ./src/tasks/2 ascend.ts
var _2_ascend_templateObject, _2_ascend_templateObject2, _2_ascend_templateObject3, _2_ascend_templateObject4, _2_ascend_templateObject5, _2_ascend_templateObject6, _2_ascend_templateObject7, _2_ascend_templateObject8, _2_ascend_templateObject9, _2_ascend_templateObject10, _2_ascend_templateObject11, _2_ascend_templateObject12, _2_ascend_templateObject13, _2_ascend_templateObject14, _2_ascend_templateObject15, _2_ascend_templateObject16, _2_ascend_templateObject17, _2_ascend_templateObject18, _2_ascend_templateObject19;
function _2_ascend_slicedToArray(arr, i) { return _2_ascend_arrayWithHoles(arr) || _2_ascend_iterableToArrayLimit(arr, i) || _2_ascend_unsupportedIterableToArray(arr, i) || _2_ascend_nonIterableRest(); }
function _2_ascend_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _2_ascend_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _2_ascend_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _2_ascend_arrayLikeToArray(o, minLen); }
function _2_ascend_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _2_ascend_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _2_ascend_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _2_ascend_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var skipPizza = args.cs || args.smol ? false : true;
function AscendQuest() {
  return {
    name: "Ascend",
    ready: () => (0,external_kolmafia_namespaceObject.myAdventures)() === 0 && totallyDrunk(),
    completed: () => (0,external_kolmafia_namespaceObject.myDaycount)() === 1,
    tasks: [{
      name: "Spend them stats grrrrl",
      ready: () => lib_have(template_string_$item(_2_ascend_templateObject || (_2_ascend_templateObject = _2_ascend_taggedTemplateLiteral(["blood cubic zirconia"])))),
      completed: () => availableCasts(template_string_$skill(_2_ascend_templateObject2 || (_2_ascend_templateObject2 = _2_ascend_taggedTemplateLiteral(["BCZ: Prepare Spinal Tapas"]))), 0) === 0 && availableCasts(template_string_$skill(_2_ascend_templateObject3 || (_2_ascend_templateObject3 = _2_ascend_taggedTemplateLiteral(["BCZ: Craft a Pheromone Cocktail"]))), 0) === 0 && availableCasts(template_string_$skill(_2_ascend_templateObject4 || (_2_ascend_templateObject4 = _2_ascend_taggedTemplateLiteral(["BCZ: Create Blood Thinner"]))), 0) === 0,
      do: () => {
        (0,external_kolmafia_namespaceObject.equip)(template_string_$item(_2_ascend_templateObject5 || (_2_ascend_templateObject5 = _2_ascend_taggedTemplateLiteral(["blood cubic zirconia"]))));
        $skills(_2_ascend_templateObject6 || (_2_ascend_templateObject6 = _2_ascend_taggedTemplateLiteral(["BCZ: Prepare Spinal Tapas, BCZ: Craft a Pheromone Cocktail, BCZ: Create Blood Thinner"]))).forEach(sk => castDownTo(sk, 0));
      },
      tracking: "Other"
    }, {
      name: "Do the Ascension",
      ready: () => lib_have(template_string_$item(_2_ascend_templateObject7 || (_2_ascend_templateObject7 = _2_ascend_taggedTemplateLiteral(["Pizza of Legend"])))) && lib_have(template_string_$item(_2_ascend_templateObject8 || (_2_ascend_templateObject8 = _2_ascend_taggedTemplateLiteral(["Deep Dish of Legend"])))) && lib_have(template_string_$item(_2_ascend_templateObject9 || (_2_ascend_templateObject9 = _2_ascend_taggedTemplateLiteral(["Calzone of Legend"])))) || skipPizza,
      completed: () => (0,external_kolmafia_namespaceObject.myDaycount)() === 1,
      //Change this
      do: () => {
        var _targetPerms = targetPerms(),
          _targetPerms2 = _2_ascend_slicedToArray(_targetPerms, 2),
          skills = _targetPerms2[0],
          permLifestyle = _targetPerms2[1];
        var skillsToPerm = new Map();
        skills.forEach(sk => skillsToPerm.set(sk, permLifestyle));
        var path = args.cs ? $path(_2_ascend_templateObject10 || (_2_ascend_templateObject10 = _2_ascend_taggedTemplateLiteral(["Community Service"]))) : args.smol ? $path(_2_ascend_templateObject11 || (_2_ascend_templateObject11 = _2_ascend_taggedTemplateLiteral(["A Shrunken Adventurer am I"]))) : args.casual ? $path.none : args.robot ? $path(_2_ascend_templateObject12 || (_2_ascend_templateObject12 = _2_ascend_taggedTemplateLiteral(["You, Robot"]))) : args.zooto ? $path(_2_ascend_templateObject13 || (_2_ascend_templateObject13 = _2_ascend_taggedTemplateLiteral(["Z is for Zootomist"]))) : args.ih8u ? $path(_2_ascend_templateObject14 || (_2_ascend_templateObject14 = _2_ascend_taggedTemplateLiteral(["11 Things I Hate About U"]))) : undefined;
        var lifestyle = args.casual ? 1 : 2;
        if (path === undefined) throw "You have no path defined";
        var canRobotNonMon = CursedMonkeyPaw_have() && lib_have(template_string_$item(_2_ascend_templateObject15 || (_2_ascend_templateObject15 = _2_ascend_taggedTemplateLiteral(["genie bottle"]))));
        var moonsign = args.robot && canRobotNonMon ? toMoonSign("mongoose") : args.robot ? toMoonSign("vole") : toMoonSign(args.moonsign);
        var myClass = args.robot && !canRobotNonMon ? $class(_2_ascend_templateObject16 || (_2_ascend_templateObject16 = _2_ascend_taggedTemplateLiteral(["Pastamancer"]))) : args.class;
        ascend({
          path: path,
          playerClass: args.zooto ? $class(_2_ascend_templateObject17 || (_2_ascend_templateObject17 = _2_ascend_taggedTemplateLiteral(["Zootomist"]))) : myClass,
          lifestyle: lifestyle,
          moon: moonsign,
          consumable: template_string_$item(_2_ascend_templateObject18 || (_2_ascend_templateObject18 = _2_ascend_taggedTemplateLiteral(["astral six-pack"]))),
          pet: args.astralpet === template_string_$item(_2_ascend_templateObject19 || (_2_ascend_templateObject19 = _2_ascend_taggedTemplateLiteral(["none"]))) ? undefined : args.astralpet,
          permOptions: {
            permSkills: skillsToPerm,
            neverAbort: false
          }
        });
        (0,external_kolmafia_namespaceObject.cliExecute)("refresh all");
        (0,external_kolmafia_namespaceObject.visitUrl)("main.php");
        if (args.smol || args.robot) {
          while ((0,external_kolmafia_namespaceObject.handlingChoice)()) (0,external_kolmafia_namespaceObject.runChoice)(1);
        }
      }
    }]
  };
}
;// CONCATENATED MODULE: ./src/tasks/3 runleg.ts
var _3_runleg_templateObject, _3_runleg_templateObject2, _3_runleg_templateObject3, _3_runleg_templateObject4, _3_runleg_templateObject5, _3_runleg_templateObject6, _3_runleg_templateObject7, _3_runleg_templateObject8, _3_runleg_templateObject9, _3_runleg_templateObject10, _3_runleg_templateObject11, _3_runleg_templateObject12, _3_runleg_templateObject13, _3_runleg_templateObject14, _3_runleg_templateObject15, _3_runleg_templateObject16, _3_runleg_templateObject17, _3_runleg_templateObject18, _3_runleg_templateObject19, _3_runleg_templateObject20, _3_runleg_templateObject21, _3_runleg_templateObject22, _3_runleg_templateObject23, _3_runleg_templateObject24, _3_runleg_templateObject25, _3_runleg_templateObject26, _3_runleg_templateObject27;
function _3_runleg_toConsumableArray(arr) { return _3_runleg_arrayWithoutHoles(arr) || _3_runleg_iterableToArray(arr) || _3_runleg_unsupportedIterableToArray(arr) || _3_runleg_nonIterableSpread(); }
function _3_runleg_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _3_runleg_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _3_runleg_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _3_runleg_arrayLikeToArray(o, minLen); }
function _3_runleg_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _3_runleg_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _3_runleg_arrayLikeToArray(arr); }
function _3_runleg_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _3_runleg_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var runType = () => args.smol ? args.smolscript : args.cs ? args.csscript : args.casual ? args.casualscript : args.robot ? args.robotscript : args.ih8u ? args.ih8uscript : "autoscend";
function howManySausagesCouldIEat() {
  if (!lib_have(template_string_$item(_3_runleg_templateObject || (_3_runleg_templateObject = _3_runleg_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))))) return 0;
  // You may be full but you can't be overfull
  if ((0,external_kolmafia_namespaceObject.myFullness)() > (0,external_kolmafia_namespaceObject.fullnessLimit)()) return 0;
  return utils_clamp(23 - property_get("_sausagesEaten"), 0, (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(_3_runleg_templateObject2 || (_3_runleg_templateObject2 = _3_runleg_taggedTemplateLiteral(["magical sausage"])))) + (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(_3_runleg_templateObject3 || (_3_runleg_templateObject3 = _3_runleg_taggedTemplateLiteral(["magical sausage casing"])))));
}
function ih8uDrink() {
  if ((0,external_kolmafia_namespaceObject.myInebriety)() >= (0,external_kolmafia_namespaceObject.inebrietyLimit)()) return false;
  if (lib_have(template_string_$item(_3_runleg_templateObject4 || (_3_runleg_templateObject4 = _3_runleg_taggedTemplateLiteral(["splendid martini"]))))) return true;
  if (!lib_have(template_string_$item(_3_runleg_templateObject5 || (_3_runleg_templateObject5 = _3_runleg_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))) && !(lib_have(template_string_$item(_3_runleg_templateObject6 || (_3_runleg_templateObject6 = _3_runleg_taggedTemplateLiteral(["mini kiwi"])))) && (lib_have(template_string_$item(_3_runleg_templateObject7 || (_3_runleg_templateObject7 = _3_runleg_taggedTemplateLiteral(["bottle of vodka"])))) || lib_have(template_string_$item(_3_runleg_templateObject8 || (_3_runleg_templateObject8 = _3_runleg_taggedTemplateLiteral(["bottle of gin"]))))))) return false;
  if (lib_have(template_string_$item(_3_runleg_templateObject9 || (_3_runleg_templateObject9 = _3_runleg_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))) && property_get("_kgbDispenserUses") < 3) {
    (0,external_kolmafia_namespaceObject.cliExecute)("briefcase unlock");
    (0,external_kolmafia_namespaceObject.cliExecute)("briefcase collect");
  }
  if (lib_have(template_string_$item(_3_runleg_templateObject10 || (_3_runleg_templateObject10 = _3_runleg_taggedTemplateLiteral(["mini kiwi"])))) && (lib_have(template_string_$item(_3_runleg_templateObject11 || (_3_runleg_templateObject11 = _3_runleg_taggedTemplateLiteral(["bottle of vodka"])))) || lib_have(template_string_$item(_3_runleg_templateObject12 || (_3_runleg_templateObject12 = _3_runleg_taggedTemplateLiteral(["bottle of gin"])))))) {
    (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(_3_runleg_templateObject13 || (_3_runleg_templateObject13 = _3_runleg_taggedTemplateLiteral(["mini kiwitini"]))));
  }
  if (lib_have(template_string_$item(_3_runleg_templateObject14 || (_3_runleg_templateObject14 = _3_runleg_taggedTemplateLiteral(["mini kiwitini"]))))) return true;
  return false;
}
function RunQuests() {
  return {
    name: "Ascension Run",
    completed: () => property_get("kingLiberated"),
    tasks: [].concat(_3_runleg_toConsumableArray(preRunQuests()), [{
      name: "Run",
      completed: () => property_get("kingLiberated") && args.cs || step("questL13Final") > 11,
      do: () => {
        if (runType() === undefined || runType() === null) throw "no runtime defined";else (0,external_kolmafia_namespaceObject.cliExecute)(runType());
      },
      clear: "all",
      tracking: args.cs ? "Ignore" : "Run"
    }, {
      name: "drink ih8u",
      ready: () => (0,external_kolmafia_namespaceObject.myInebriety)() < (0,external_kolmafia_namespaceObject.inebrietyLimit)() && args.ih8u,
      completed: () => (0,external_kolmafia_namespaceObject.myInebriety)() === (0,external_kolmafia_namespaceObject.inebrietyLimit)() || !ih8uDrink(),
      do: () => {
        if (lib_have(template_string_$item(_3_runleg_templateObject15 || (_3_runleg_templateObject15 = _3_runleg_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))) && property_get("_kgbDispenserUses") < 3) {
          (0,external_kolmafia_namespaceObject.cliExecute)("briefcase unlock");
          (0,external_kolmafia_namespaceObject.cliExecute)("briefcase collect");
        }
        while ((0,external_kolmafia_namespaceObject.myInebriety)() < (0,external_kolmafia_namespaceObject.inebrietyLimit)() && lib_have(template_string_$item(_3_runleg_templateObject16 || (_3_runleg_templateObject16 = _3_runleg_taggedTemplateLiteral(["splendid martini"]))))) {
          (0,external_kolmafia_namespaceObject.equip)(template_string_$item(_3_runleg_templateObject17 || (_3_runleg_templateObject17 = _3_runleg_taggedTemplateLiteral(["tuxedo shirt"]))));
          (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(_3_runleg_templateObject18 || (_3_runleg_templateObject18 = _3_runleg_taggedTemplateLiteral(["The Ode to Booze"]))));
          if (lib_have(template_string_$item(_3_runleg_templateObject19 || (_3_runleg_templateObject19 = _3_runleg_taggedTemplateLiteral(["splendid martini"]))))) {
            (0,external_kolmafia_namespaceObject.drinksilent)(template_string_$item(_3_runleg_templateObject20 || (_3_runleg_templateObject20 = _3_runleg_taggedTemplateLiteral(["splendid martini"]))));
          }
        }
        while (external_kolmafia_namespaceObject.myFullness < external_kolmafia_namespaceObject.fullnessLimit && lib_have(template_string_$item(_3_runleg_templateObject21 || (_3_runleg_templateObject21 = _3_runleg_taggedTemplateLiteral(["mini kiwi"]))), 3)) {
          (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(_3_runleg_templateObject22 || (_3_runleg_templateObject22 = _3_runleg_taggedTemplateLiteral(["mini kiwi digitized cookies"]))));
          (0,external_kolmafia_namespaceObject.eat)(template_string_$item(_3_runleg_templateObject23 || (_3_runleg_templateObject23 = _3_runleg_taggedTemplateLiteral(["mini kiwi digitized cookies"]))));
        }
      },
      clear: "all",
      tracking: "Organs"
    }, {
      name: "drink",
      ready: () => shouldWeOverdrink() && args.smol,
      completed: () => (0,external_kolmafia_namespaceObject.myInebriety)() >= 2,
      do: () => {
        if (lib_have(template_string_$skill(_3_runleg_templateObject24 || (_3_runleg_templateObject24 = _3_runleg_taggedTemplateLiteral(["The Ode to Booze"]))))) (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(_3_runleg_templateObject25 || (_3_runleg_templateObject25 = _3_runleg_taggedTemplateLiteral(["The Ode to Booze"]))));
        (0,external_kolmafia_namespaceObject.drink)(template_string_$item(_3_runleg_templateObject26 || (_3_runleg_templateObject26 = _3_runleg_taggedTemplateLiteral(["astral pilsner"]))), 1);
      },
      clear: "all",
      tracking: "Organs"
    }, {
      name: "Sausages",
      ready: () => args.smol,
      completed: () => howManySausagesCouldIEat() === 0,
      do: () => {
        (0,external_kolmafia_namespaceObject.eat)(template_string_$item(_3_runleg_templateObject27 || (_3_runleg_templateObject27 = _3_runleg_taggedTemplateLiteral(["magical sausage"]))), howManySausagesCouldIEat());
      },
      clear: "all",
      tracking: "Run"
    }, {
      name: "Free King",
      ready: () => step("questL13Final") > 11 && !args.cs,
      completed: () => property_get("kingLiberated", false),
      do: () => {
        (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=nstower&action=ns_11_prism");
      },
      clear: "all",
      tracking: "ignore"
    }])
  };
}
;// CONCATENATED MODULE: ./src/tasks/4 postrunleg.ts
var _4_postrunleg_templateObject, _4_postrunleg_templateObject2, _4_postrunleg_templateObject3, _4_postrunleg_templateObject4, _4_postrunleg_templateObject5, _4_postrunleg_templateObject6, _4_postrunleg_templateObject7, _4_postrunleg_templateObject8, _4_postrunleg_templateObject9, _4_postrunleg_templateObject10, _4_postrunleg_templateObject11, _4_postrunleg_templateObject12, _4_postrunleg_templateObject13, _4_postrunleg_templateObject14, _4_postrunleg_templateObject15, _4_postrunleg_templateObject16, _4_postrunleg_templateObject17, _4_postrunleg_templateObject18, _4_postrunleg_templateObject19, _4_postrunleg_templateObject20, _4_postrunleg_templateObject21, _4_postrunleg_templateObject22, _4_postrunleg_templateObject23, _4_postrunleg_templateObject24, _4_postrunleg_templateObject25, _4_postrunleg_templateObject26, _4_postrunleg_templateObject27, _4_postrunleg_templateObject28, _4_postrunleg_templateObject29, _4_postrunleg_templateObject30, _4_postrunleg_templateObject31, _4_postrunleg_templateObject32, _4_postrunleg_templateObject33, _4_postrunleg_templateObject34, _4_postrunleg_templateObject35, _4_postrunleg_templateObject36, _4_postrunleg_templateObject37, _4_postrunleg_templateObject38, _4_postrunleg_templateObject39, _4_postrunleg_templateObject40, _4_postrunleg_templateObject41, _4_postrunleg_templateObject42, _4_postrunleg_templateObject43, _4_postrunleg_templateObject44, _4_postrunleg_templateObject45, _4_postrunleg_templateObject46, _4_postrunleg_templateObject47, _4_postrunleg_templateObject48, _4_postrunleg_templateObject49, _4_postrunleg_templateObject50, _4_postrunleg_templateObject51, _4_postrunleg_templateObject52, _4_postrunleg_templateObject53, _4_postrunleg_templateObject54, _4_postrunleg_templateObject55, _4_postrunleg_templateObject56, _4_postrunleg_templateObject57, _4_postrunleg_templateObject58, _4_postrunleg_templateObject59, _4_postrunleg_templateObject60, _4_postrunleg_templateObject61, _4_postrunleg_templateObject62, _4_postrunleg_templateObject63, _4_postrunleg_templateObject64, _4_postrunleg_templateObject65, _4_postrunleg_templateObject66, _4_postrunleg_templateObject67, _4_postrunleg_templateObject68, _4_postrunleg_templateObject69, _4_postrunleg_templateObject70, _4_postrunleg_templateObject71, _4_postrunleg_templateObject72, _4_postrunleg_templateObject73, _4_postrunleg_templateObject74, _4_postrunleg_templateObject75, _4_postrunleg_templateObject76, _4_postrunleg_templateObject77, _4_postrunleg_templateObject78, _4_postrunleg_templateObject79, _4_postrunleg_templateObject80, _4_postrunleg_templateObject81, _4_postrunleg_templateObject82, _4_postrunleg_templateObject83, _4_postrunleg_templateObject84, _4_postrunleg_templateObject85, _4_postrunleg_templateObject86, _4_postrunleg_templateObject87, _4_postrunleg_templateObject88, _4_postrunleg_templateObject89, _4_postrunleg_templateObject90, _4_postrunleg_templateObject91, _4_postrunleg_templateObject92, _4_postrunleg_templateObject93, _4_postrunleg_templateObject94, _4_postrunleg_templateObject95, _4_postrunleg_templateObject96, _4_postrunleg_templateObject97, _templateObject98, _templateObject99, _templateObject100, _templateObject101, _templateObject102, _templateObject103, _templateObject104, _templateObject105, _templateObject106, _templateObject107, _templateObject108, _templateObject109, _templateObject110, _templateObject111, _templateObject112, _templateObject113, _templateObject114, _templateObject115, _templateObject116, _templateObject117;
function _4_postrunleg_toConsumableArray(arr) { return _4_postrunleg_arrayWithoutHoles(arr) || _4_postrunleg_iterableToArray(arr) || _4_postrunleg_unsupportedIterableToArray(arr) || _4_postrunleg_nonIterableSpread(); }
function _4_postrunleg_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _4_postrunleg_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _4_postrunleg_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _4_postrunleg_arrayLikeToArray(o, minLen); }
function _4_postrunleg_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _4_postrunleg_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _4_postrunleg_arrayLikeToArray(arr); }
function _4_postrunleg_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _4_postrunleg_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var pajamas = false;
var smoke = 0;
var sasqBonus = 0.5 * 30 * 1000 / property_get("valueOfAdventure");
var ratskinBonus = 0.3 * 40 * 1000 / property_get("valueOfAdventure");
var checkMelange = () => property_get("valueOfAdventure") * 45 > (0,external_kolmafia_namespaceObject.mallPrice)(template_string_$item(_4_postrunleg_templateObject || (_4_postrunleg_templateObject = _4_postrunleg_taggedTemplateLiteral(["spice melange"])))) && !lib_have(template_string_$item(_4_postrunleg_templateObject2 || (_4_postrunleg_templateObject2 = _4_postrunleg_taggedTemplateLiteral(["designer sweatpants"]))));
function PostRunQuests() {
  return {
    name: "Post-Run Aftercore",
    ready: () => ((0,external_kolmafia_namespaceObject.myDaycount)() === 1 || (0,external_kolmafia_namespaceObject.myDaycount)() === 2 && args.zooto) && property_get("kingLiberated", false),
    completed: () => totallyDrunk() && pajamas,
    tasks: [{
      name: "Pull All",
      completed: () => property_get("lastEmptiedStorage") === (0,external_kolmafia_namespaceObject.myAscensions)(),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("pull all; refresh all")
    }, {
      name: "Clear citizen",
      completed: () => !property_get("_citizenZone", "").includes("castle") && !property_get("_citizenZone", "").includes("Madness Bakery"),
      do: () => {
        uneffect(template_string_$effect(_4_postrunleg_templateObject3 || (_4_postrunleg_templateObject3 = _4_postrunleg_taggedTemplateLiteral(["Citizen of a Zone"]))));
        (0,external_kolmafia_namespaceObject.cliExecute)("set _citizenZone = \"\"");
      },
      tracking: "Other"
    }, {
      name: "Ensure prefs reset",
      completed: () => !property_get("_folgerInitialConfig", false),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("set _folgerInitialConfig = false")
    }, {
      name: "But dad I don't want to feel lost",
      completed: () => !lib_have(template_string_$effect(_4_postrunleg_templateObject4 || (_4_postrunleg_templateObject4 = _4_postrunleg_taggedTemplateLiteral(["Feeling Lost"])))),
      do: () => uneffect(template_string_$effect(_4_postrunleg_templateObject5 || (_4_postrunleg_templateObject5 = _4_postrunleg_taggedTemplateLiteral(["Feeling Lost"])))),
      tracking: "Other"
    }, {
      name: "Hey kids, let's take a trip to the beach",
      completed: () => lib_have(template_string_$item(_4_postrunleg_templateObject6 || (_4_postrunleg_templateObject6 = _4_postrunleg_taggedTemplateLiteral(["bitchin' meatcar"])))) || lib_have(template_string_$item(_4_postrunleg_templateObject7 || (_4_postrunleg_templateObject7 = _4_postrunleg_taggedTemplateLiteral(["Desert Bus pass"])))),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("acquire bitchin"),
      tracking: "Other"
    }, {
      name: "Sober Up",
      ready: () => args.smol,
      completed: () => (0,external_kolmafia_namespaceObject.myInebriety)() <= (0,external_kolmafia_namespaceObject.inebrietyLimit)() || property_get("_mimeArmyShotglassUsed"),
      do: () => {
        if (checkMelange()) {
          (0,external_kolmafia_namespaceObject.cliExecute)("acquire spice melange; use spice melange");
        }
        while (property_get("_sweatOutSomeBoozeUsed", 0) < 3) {
          (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(_4_postrunleg_templateObject8 || (_4_postrunleg_templateObject8 = _4_postrunleg_taggedTemplateLiteral(["Sweat Out Some Booze"]))));
        }
        (0,external_kolmafia_namespaceObject.use)(template_string_$item(_4_postrunleg_templateObject9 || (_4_postrunleg_templateObject9 = _4_postrunleg_taggedTemplateLiteral(["synthetic dog hair pill"]))));
        if (!property_get("_sobrieTeaUsed", false)) {
          (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(_4_postrunleg_templateObject10 || (_4_postrunleg_templateObject10 = _4_postrunleg_taggedTemplateLiteral(["cuppa Sobrie tea"]))));
          (0,external_kolmafia_namespaceObject.use)(template_string_$item(_4_postrunleg_templateObject11 || (_4_postrunleg_templateObject11 = _4_postrunleg_taggedTemplateLiteral(["cuppa Sobrie tea"]))));
        }
      },
      tracking: "Organs"
    }, {
      name: "PvP Closet Safety 1",
      ready: () => args.pvp && property_get("autoSatisfyWithCloset") && !args.safepvp,
      completed: () => (0,external_kolmafia_namespaceObject.toBoolean)(property_get("_safetyCloset1")),
      do: () => pvpCloset(1)
    }, {
      name: "Drink Pre-Tune",
      ready: () => (0,external_kolmafia_namespaceObject.mySign)().toLowerCase() === "blender" && (0,external_kolmafia_namespaceObject.myLevel)() >= 7 && lib_have(template_string_$item(_4_postrunleg_templateObject12 || (_4_postrunleg_templateObject12 = _4_postrunleg_taggedTemplateLiteral(["mime army shotglass"])))) && (lib_have(template_string_$item(_4_postrunleg_templateObject13 || (_4_postrunleg_templateObject13 = _4_postrunleg_taggedTemplateLiteral(["astral pilsner"])))) || lib_have(template_string_$item(_4_postrunleg_templateObject14 || (_4_postrunleg_templateObject14 = _4_postrunleg_taggedTemplateLiteral(["astral six-pack"]))))),
      completed: () => property_get("_mimeArmyShotglassUsed") || !lib_have(template_string_$item(_4_postrunleg_templateObject15 || (_4_postrunleg_templateObject15 = _4_postrunleg_taggedTemplateLiteral(["hewn moon-rune spoon"])))) || property_get("moonTuned"),
      prepare: () => {
        if (lib_have(template_string_$item(_4_postrunleg_templateObject16 || (_4_postrunleg_templateObject16 = _4_postrunleg_taggedTemplateLiteral(["astral six-pack"]))))) (0,external_kolmafia_namespaceObject.use)(template_string_$item(_4_postrunleg_templateObject17 || (_4_postrunleg_templateObject17 = _4_postrunleg_taggedTemplateLiteral(["astral six-pack"]))));
      },
      do: () => (0,external_kolmafia_namespaceObject.drink)(1, template_string_$item(_4_postrunleg_templateObject18 || (_4_postrunleg_templateObject18 = _4_postrunleg_taggedTemplateLiteral(["astral pilsner"])))),
      tracking: "Organs"
    }, {
      name: "Moon Spoon",
      completed: () => !lib_have(template_string_$item(_4_postrunleg_templateObject19 || (_4_postrunleg_templateObject19 = _4_postrunleg_taggedTemplateLiteral(["hewn moon-rune spoon"])))) || property_get("moonTuned") || (0,external_kolmafia_namespaceObject.mySign)().toLowerCase() === "wombat",
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("spoon wombat")
    }, {
      name: "Gold Wedding Ring",
      ready: () => (0,external_kolmafia_namespaceObject.canAdventure)($location(_4_postrunleg_templateObject20 || (_4_postrunleg_templateObject20 = _4_postrunleg_taggedTemplateLiteral(["A-Boo Peak"])))),
      completed: () => !lib_have(template_string_$skill(_4_postrunleg_templateObject21 || (_4_postrunleg_templateObject21 = _4_postrunleg_taggedTemplateLiteral(["Comprehensive Cartography"])))) || (0,external_kolmafia_namespaceObject.myAscensions)() === property_get("lastCartographyBooPeak"),
      choices: {
        1430: 3,
        606: 4,
        610: 1,
        1056: 1
      },
      do: $location(_4_postrunleg_templateObject22 || (_4_postrunleg_templateObject22 = _4_postrunleg_taggedTemplateLiteral(["A-Boo Peak"]))),
      outfit: {
        modifier: "initiative 40 min 40 max, -tie"
      },
      tracking: "Other"
    }, {
      name: "Emergency Drink",
      ready: () => (0,external_kolmafia_namespaceObject.myAdventures)() < 25,
      completed: () => property_get("_mimeArmyShotglassUsed") || !lib_have(template_string_$item(_4_postrunleg_templateObject23 || (_4_postrunleg_templateObject23 = _4_postrunleg_taggedTemplateLiteral(["mime army shotglass"])))),
      prepare: () => {
        if (lib_have(template_string_$item(_4_postrunleg_templateObject24 || (_4_postrunleg_templateObject24 = _4_postrunleg_taggedTemplateLiteral(["astral six-pack"]))))) (0,external_kolmafia_namespaceObject.use)(template_string_$item(_4_postrunleg_templateObject25 || (_4_postrunleg_templateObject25 = _4_postrunleg_taggedTemplateLiteral(["astral six-pack"]))));
      },
      do: () => {
        while ((0,external_kolmafia_namespaceObject.myAdventures)() < 25) {
          (0,external_kolmafia_namespaceObject.drink)(1, template_string_$item(_4_postrunleg_templateObject26 || (_4_postrunleg_templateObject26 = _4_postrunleg_taggedTemplateLiteral(["astral pilsner"]))));
        }
      },
      tracking: "Organs"
    }, {
      name: "Emergency Drink Part 2",
      ready: () => (0,external_kolmafia_namespaceObject.myAdventures)() === 0 && (0,external_kolmafia_namespaceObject.myInebriety)() < 11,
      completed: () => (0,external_kolmafia_namespaceObject.myAdventures)() > 0 || (0,external_kolmafia_namespaceObject.myInebriety)() >= 11 || !lib_have(template_string_$item(_4_postrunleg_templateObject27 || (_4_postrunleg_templateObject27 = _4_postrunleg_taggedTemplateLiteral(["astral pilsner"])))) && !lib_have(template_string_$item(_4_postrunleg_templateObject28 || (_4_postrunleg_templateObject28 = _4_postrunleg_taggedTemplateLiteral(["astral six-pack"])))),
      prepare: () => {
        if (lib_have(template_string_$item(_4_postrunleg_templateObject29 || (_4_postrunleg_templateObject29 = _4_postrunleg_taggedTemplateLiteral(["astral six-pack"]))))) (0,external_kolmafia_namespaceObject.use)(template_string_$item(_4_postrunleg_templateObject30 || (_4_postrunleg_templateObject30 = _4_postrunleg_taggedTemplateLiteral(["astral six-pack"]))));
      },
      do: () => {
        while ((0,external_kolmafia_namespaceObject.myAdventures)() < 25) {
          (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(_4_postrunleg_templateObject31 || (_4_postrunleg_templateObject31 = _4_postrunleg_taggedTemplateLiteral(["The Ode to Booze"]))));
          (0,external_kolmafia_namespaceObject.drink)(1, template_string_$item(_4_postrunleg_templateObject32 || (_4_postrunleg_templateObject32 = _4_postrunleg_taggedTemplateLiteral(["astral pilsner"]))));
        }
      },
      limit: {
        tries: 6
      },
      tracking: "Organs"
    }, {
      name: "Laugh Floor",
      ready: () => !args.cs,
      completed: () => lib_have(template_string_$skill(_4_postrunleg_templateObject33 || (_4_postrunleg_templateObject33 = _4_postrunleg_taggedTemplateLiteral(["Liver of Steel"])))) || lib_have(template_string_$item(_4_postrunleg_templateObject34 || (_4_postrunleg_templateObject34 = _4_postrunleg_taggedTemplateLiteral(["steel margarita"])))) || lib_have(template_string_$item(_4_postrunleg_templateObject35 || (_4_postrunleg_templateObject35 = _4_postrunleg_taggedTemplateLiteral(["Azazel's lollipop"])))) || lib_have(template_string_$item(_4_postrunleg_templateObject36 || (_4_postrunleg_templateObject36 = _4_postrunleg_taggedTemplateLiteral(["observational glasses"])))),
      effects: () => [].concat(_4_postrunleg_toConsumableArray(lib_have(template_string_$skill(_4_postrunleg_templateObject37 || (_4_postrunleg_templateObject37 = _4_postrunleg_taggedTemplateLiteral(["Musk of the Moose"])))) ? $effects(_4_postrunleg_templateObject38 || (_4_postrunleg_templateObject38 = _4_postrunleg_taggedTemplateLiteral(["Musk of the Moose"]))) : []), _4_postrunleg_toConsumableArray(lib_have(template_string_$skill(_4_postrunleg_templateObject39 || (_4_postrunleg_templateObject39 = _4_postrunleg_taggedTemplateLiteral(["Carlweather's Cantata of Confrontation"])))) ? $effects(_4_postrunleg_templateObject40 || (_4_postrunleg_templateObject40 = _4_postrunleg_taggedTemplateLiteral(["Carlweather's Cantata of Confrontation"]))) : [])),
      prepare: () => {
        if (!lib_have(template_string_$effect(_4_postrunleg_templateObject41 || (_4_postrunleg_templateObject41 = _4_postrunleg_taggedTemplateLiteral(["Carlweather's Cantata of Confrontation"]))))) {
          (0,external_kolmafia_namespaceObject.cliExecute)("kmail to Buffy || 10 Cantata of Confrontation");
          (0,external_kolmafia_namespaceObject.wait)(15);
          (0,external_kolmafia_namespaceObject.cliExecute)("refresh effects");
        }
        $effects(_4_postrunleg_templateObject42 || (_4_postrunleg_templateObject42 = _4_postrunleg_taggedTemplateLiteral(["Smooth Movements, The Sonata of Sneakiness, Darkened Photons, Shifted Phase"]))).forEach(ef => (0,external_kolmafia_namespaceObject.cliExecute)("uneffect ".concat(ef)));
        (0,external_kolmafia_namespaceObject.restoreHp)(0.75 * (0,external_kolmafia_namespaceObject.myMaxhp)());
        (0,external_kolmafia_namespaceObject.restoreMp)(20);
      },
      do: $location(_4_postrunleg_templateObject43 || (_4_postrunleg_templateObject43 = _4_postrunleg_taggedTemplateLiteral(["The Laugh Floor"]))),
      outfit: () => ({
        familiar: bestFam(),
        modifier: "".concat(maxBase(), ", 100 combat rate, 3 item, 250 bonus carnivorous potted plant")
      }),
      combat: new CombatStrategy().macro(Macro.trySkill(template_string_$skill(_4_postrunleg_templateObject44 || (_4_postrunleg_templateObject44 = _4_postrunleg_taggedTemplateLiteral(["Curse of Weaksauce"])))).tryItem(template_string_$item(_4_postrunleg_templateObject45 || (_4_postrunleg_templateObject45 = _4_postrunleg_taggedTemplateLiteral(["train whistle"])))).tryItem(template_string_$item(_4_postrunleg_templateObject46 || (_4_postrunleg_templateObject46 = _4_postrunleg_taggedTemplateLiteral(["porquoise-handled sixgun"])))).attack().repeat()),
      limit: {
        tries: 15
      },
      tracking: "Steel Organ"
    }, {
      name: "Infernal Rackets Backstage",
      ready: () => !args.cs,
      completed: () => lib_have(template_string_$skill(_4_postrunleg_templateObject47 || (_4_postrunleg_templateObject47 = _4_postrunleg_taggedTemplateLiteral(["Liver of Steel"])))) || lib_have(template_string_$item(_4_postrunleg_templateObject48 || (_4_postrunleg_templateObject48 = _4_postrunleg_taggedTemplateLiteral(["steel margarita"])))) || lib_have(template_string_$item(_4_postrunleg_templateObject49 || (_4_postrunleg_templateObject49 = _4_postrunleg_taggedTemplateLiteral(["Azazel's unicorn"])))) || backstageItemsDone(),
      effects: () => [].concat(_4_postrunleg_toConsumableArray(lib_have(template_string_$skill(_4_postrunleg_templateObject50 || (_4_postrunleg_templateObject50 = _4_postrunleg_taggedTemplateLiteral(["Smooth Movement"])))) ? $effects(_4_postrunleg_templateObject51 || (_4_postrunleg_templateObject51 = _4_postrunleg_taggedTemplateLiteral(["Smooth Movements"]))) : []), _4_postrunleg_toConsumableArray(lib_have(template_string_$skill(_4_postrunleg_templateObject52 || (_4_postrunleg_templateObject52 = _4_postrunleg_taggedTemplateLiteral(["The Sonata of Sneakiness"])))) ? $effects(_4_postrunleg_templateObject53 || (_4_postrunleg_templateObject53 = _4_postrunleg_taggedTemplateLiteral(["The Sonata of Sneakiness"]))) : [])),
      prepare: () => {
        if (!lib_have(template_string_$effect(_4_postrunleg_templateObject54 || (_4_postrunleg_templateObject54 = _4_postrunleg_taggedTemplateLiteral(["The Sonata of Sneakiness"]))))) {
          (0,external_kolmafia_namespaceObject.cliExecute)("kmail to Buffy || 10 Sonata of Sneakiness");
          (0,external_kolmafia_namespaceObject.wait)(15);
          (0,external_kolmafia_namespaceObject.cliExecute)("refresh effects");
        }
        $effects(_4_postrunleg_templateObject55 || (_4_postrunleg_templateObject55 = _4_postrunleg_taggedTemplateLiteral(["Musk of the Moose, Carlweather's Cantata of Confrontation, Hooooooooonk!"]))).forEach(ef => (0,external_kolmafia_namespaceObject.cliExecute)("uneffect ".concat(ef)));
        (0,external_kolmafia_namespaceObject.restoreHp)(0.75 * (0,external_kolmafia_namespaceObject.myMaxhp)());
        (0,external_kolmafia_namespaceObject.restoreMp)(20);
      },
      do: $location(_4_postrunleg_templateObject56 || (_4_postrunleg_templateObject56 = _4_postrunleg_taggedTemplateLiteral(["Infernal Rackets Backstage"]))),
      outfit: () => ({
        familiar: bestFam(),
        modifier: "".concat(maxBase(), ", -100 combat rate, 3 item, 250 bonus carnivorous potted plant")
      }),
      combat: new CombatStrategy().macro(Macro.trySkill(template_string_$skill(_4_postrunleg_templateObject57 || (_4_postrunleg_templateObject57 = _4_postrunleg_taggedTemplateLiteral(["Curse of Weaksauce"])))).tryItem(template_string_$item(_4_postrunleg_templateObject58 || (_4_postrunleg_templateObject58 = _4_postrunleg_taggedTemplateLiteral(["train whistle"])))).tryItem(template_string_$item(_4_postrunleg_templateObject59 || (_4_postrunleg_templateObject59 = _4_postrunleg_taggedTemplateLiteral(["porquoise-handled sixgun"])))).attack().repeat()),
      limit: {
        tries: 15
      },
      tracking: "Steel Organ"
    }, {
      name: "Mourn",
      ready: () => lib_have(template_string_$item(_4_postrunleg_templateObject60 || (_4_postrunleg_templateObject60 = _4_postrunleg_taggedTemplateLiteral(["observational glasses"])))) && !args.cs,
      completed: () => lib_have(template_string_$skill(_4_postrunleg_templateObject61 || (_4_postrunleg_templateObject61 = _4_postrunleg_taggedTemplateLiteral(["Liver of Steel"])))) || lib_have(template_string_$item(_4_postrunleg_templateObject62 || (_4_postrunleg_templateObject62 = _4_postrunleg_taggedTemplateLiteral(["steel margarita"])))) || lib_have(template_string_$item(_4_postrunleg_templateObject63 || (_4_postrunleg_templateObject63 = _4_postrunleg_taggedTemplateLiteral(["Azazel's lollipop"])))),
      outfit: {
        equip: template_string_$items(_4_postrunleg_templateObject64 || (_4_postrunleg_templateObject64 = _4_postrunleg_taggedTemplateLiteral(["hilarious comedy prop, observational glasses, Victor, the Insult Comic Hellhound Puppet"], ["hilarious comedy prop, observational glasses, Victor\\, the Insult Comic Hellhound Puppet"])))
      },
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("panda comedy insult; panda comedy observe"),
      tracking: "Steel Organ"
    }, {
      name: "Sven Golly",
      ready: () => backstageItemsDone() && !args.cs,
      completed: () => lib_have(template_string_$skill(_4_postrunleg_templateObject65 || (_4_postrunleg_templateObject65 = _4_postrunleg_taggedTemplateLiteral(["Liver of Steel"])))) || lib_have(template_string_$item(_4_postrunleg_templateObject66 || (_4_postrunleg_templateObject66 = _4_postrunleg_taggedTemplateLiteral(["steel margarita"])))) || lib_have(template_string_$item(_4_postrunleg_templateObject67 || (_4_postrunleg_templateObject67 = _4_postrunleg_taggedTemplateLiteral(["Azazel's unicorn"])))),
      do: () => {
        (0,external_kolmafia_namespaceObject.cliExecute)("panda arena Bognort ".concat(template_string_$items(_4_postrunleg_templateObject68 || (_4_postrunleg_templateObject68 = _4_postrunleg_taggedTemplateLiteral(["giant marshmallow, gin-soaked blotter paper"]))).find(a => lib_have(a))));
        (0,external_kolmafia_namespaceObject.cliExecute)("panda arena Stinkface ".concat(template_string_$items(_4_postrunleg_templateObject69 || (_4_postrunleg_templateObject69 = _4_postrunleg_taggedTemplateLiteral(["beer-scented teddy bear, gin-soaked blotter paper"]))).find(a => lib_have(a))));
        (0,external_kolmafia_namespaceObject.cliExecute)("panda arena Flargwurm ".concat(template_string_$items(_4_postrunleg_templateObject70 || (_4_postrunleg_templateObject70 = _4_postrunleg_taggedTemplateLiteral(["booze-soaked cherry, sponge cake"]))).find(a => lib_have(a))));
        (0,external_kolmafia_namespaceObject.cliExecute)("panda arena Jim ".concat(template_string_$items(_4_postrunleg_templateObject71 || (_4_postrunleg_templateObject71 = _4_postrunleg_taggedTemplateLiteral(["comfy pillow, sponge cake"]))).find(a => lib_have(a))));
      },
      tracking: "Steel Organ"
    }, {
      name: "Moaning Panda",
      ready: () => haveAll(template_string_$items(_4_postrunleg_templateObject72 || (_4_postrunleg_templateObject72 = _4_postrunleg_taggedTemplateLiteral(["Azazel's lollipop, Azazel's unicorn"])))) && !args.cs,
      completed: () => lib_have(template_string_$skill(_4_postrunleg_templateObject73 || (_4_postrunleg_templateObject73 = _4_postrunleg_taggedTemplateLiteral(["Liver of Steel"])))) || lib_have(template_string_$item(_4_postrunleg_templateObject74 || (_4_postrunleg_templateObject74 = _4_postrunleg_taggedTemplateLiteral(["steel margarita"])))) || lib_have(template_string_$item(_4_postrunleg_templateObject75 || (_4_postrunleg_templateObject75 = _4_postrunleg_taggedTemplateLiteral(["Azazel's tutu"])))),
      acquire: () => template_string_$items(_4_postrunleg_templateObject76 || (_4_postrunleg_templateObject76 = _4_postrunleg_taggedTemplateLiteral(["bus pass, imp air"]))).map(it => ({
        item: it,
        num: 5,
        price: property_get("valueOfAdventure")
      })),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("panda moan"),
      limit: {
        tries: 3
      },
      tracking: "Steel Organ"
    }, {
      name: "Steel Margarita",
      ready: () => haveAll(template_string_$items(_4_postrunleg_templateObject77 || (_4_postrunleg_templateObject77 = _4_postrunleg_taggedTemplateLiteral(["Azazel's tutu, Azazel's lollipop, Azazel's unicorn"])))),
      completed: () => lib_have(template_string_$skill(_4_postrunleg_templateObject78 || (_4_postrunleg_templateObject78 = _4_postrunleg_taggedTemplateLiteral(["Liver of Steel"])))) || lib_have(template_string_$item(_4_postrunleg_templateObject79 || (_4_postrunleg_templateObject79 = _4_postrunleg_taggedTemplateLiteral(["steel margarita"])))),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("panda temple"),
      tracking: "Steel Organ"
    }, {
      name: "Liver of Steel",
      ready: () => lib_have(template_string_$item(_4_postrunleg_templateObject80 || (_4_postrunleg_templateObject80 = _4_postrunleg_taggedTemplateLiteral(["steel margarita"])))),
      completed: () => lib_have(template_string_$skill(_4_postrunleg_templateObject81 || (_4_postrunleg_templateObject81 = _4_postrunleg_taggedTemplateLiteral(["Liver of Steel"])))),
      do: () => (0,external_kolmafia_namespaceObject.drink)(1, template_string_$item(_4_postrunleg_templateObject82 || (_4_postrunleg_templateObject82 = _4_postrunleg_taggedTemplateLiteral(["steel margarita"])))),
      tracking: "Steel Organ"
    }, {
      name: "Emergency Drink Part 3",
      ready: () => (0,external_kolmafia_namespaceObject.myAdventures)() < 40 && (0,external_kolmafia_namespaceObject.myInebriety)() < 11,
      completed: () => (0,external_kolmafia_namespaceObject.myAdventures)() > 40 || (0,external_kolmafia_namespaceObject.myInebriety)() >= 11 || !lib_have(template_string_$item(_4_postrunleg_templateObject83 || (_4_postrunleg_templateObject83 = _4_postrunleg_taggedTemplateLiteral(["astral pilsner"])))) && !lib_have(template_string_$item(_4_postrunleg_templateObject84 || (_4_postrunleg_templateObject84 = _4_postrunleg_taggedTemplateLiteral(["astral six-pack"])))),
      prepare: () => {
        if (lib_have(template_string_$item(_4_postrunleg_templateObject85 || (_4_postrunleg_templateObject85 = _4_postrunleg_taggedTemplateLiteral(["astral six-pack"]))))) (0,external_kolmafia_namespaceObject.use)(template_string_$item(_4_postrunleg_templateObject86 || (_4_postrunleg_templateObject86 = _4_postrunleg_taggedTemplateLiteral(["astral six-pack"]))));
      },
      do: () => {
        while ((0,external_kolmafia_namespaceObject.myAdventures)() < 80 && lib_have(template_string_$item(_4_postrunleg_templateObject87 || (_4_postrunleg_templateObject87 = _4_postrunleg_taggedTemplateLiteral(["astral pilsner"]))))) {
          (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(_4_postrunleg_templateObject88 || (_4_postrunleg_templateObject88 = _4_postrunleg_taggedTemplateLiteral(["The Ode to Booze"]))));
          (0,external_kolmafia_namespaceObject.drink)(1, template_string_$item(_4_postrunleg_templateObject89 || (_4_postrunleg_templateObject89 = _4_postrunleg_taggedTemplateLiteral(["astral pilsner"]))));
        }
      },
      limit: {
        tries: 6
      },
      tracking: "Organs"
    }].concat(_4_postrunleg_toConsumableArray(postRunQuests()), _4_postrunleg_toConsumableArray(noBarf()), _4_postrunleg_toConsumableArray(garboWeen()), _4_postrunleg_toConsumableArray(crimbo()), _4_postrunleg_toConsumableArray(chrono()), [{
      name: "Garbo",
      completed: () => (0,external_kolmafia_namespaceObject.myAdventures)() === 0 || stooperDrunk(),
      prepare: () => uneffect(template_string_$effect(_4_postrunleg_templateObject90 || (_4_postrunleg_templateObject90 = _4_postrunleg_taggedTemplateLiteral(["Beaten Up"])))),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("".concat(args.garbo)),
      post: () => $effects(_4_postrunleg_templateObject91 || (_4_postrunleg_templateObject91 = _4_postrunleg_taggedTemplateLiteral(["Power Ballad of the Arrowsmith, Stevedave's Shanty of Superiority, The Moxious Madrigal, The Magical Mojomuscular Melody, Aloysius' Antiphon of Aptitude, Ur-Kel's Aria of Annoyance"]))).filter(ef => lib_have(ef)).forEach(ef => uneffect(ef)),
      clear: "all",
      tracking: "Garbo"
    }, {
      name: "Turn in FunFunds",
      ready: () => property_get("_stenchAirportToday") && (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(_4_postrunleg_templateObject92 || (_4_postrunleg_templateObject92 = _4_postrunleg_taggedTemplateLiteral(["FunFunds\u2122"])))) >= 20,
      completed: () => lib_have(template_string_$item(_4_postrunleg_templateObject93 || (_4_postrunleg_templateObject93 = _4_postrunleg_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"])))),
      do: () => (0,external_kolmafia_namespaceObject.buy)($coinmaster(_4_postrunleg_templateObject94 || (_4_postrunleg_templateObject94 = _4_postrunleg_taggedTemplateLiteral(["The Dinsey Company Store"]))), 1, template_string_$item(_4_postrunleg_templateObject95 || (_4_postrunleg_templateObject95 = _4_postrunleg_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"])))),
      tracking: "Garbo"
    }, {
      name: "PvP Closet Safety 2",
      ready: () => args.pvp && property_get("autoSatisfyWithCloset") && !args.safepvp,
      completed: () => (0,external_kolmafia_namespaceObject.toBoolean)(property_get("_safetyCloset2")),
      do: () => pvpCloset(2)
    }, {
      name: "PvP",
      ready: () => doneAdventuring(),
      completed: () => (0,external_kolmafia_namespaceObject.pvpAttacksLeft)() === 0 || !(0,external_kolmafia_namespaceObject.hippyStoneBroken)(),
      do: () => {
        (0,external_kolmafia_namespaceObject.cliExecute)("unequip");
        (0,external_kolmafia_namespaceObject.cliExecute)("UberPvPOptimizer");
        (0,external_kolmafia_namespaceObject.cliExecute)("PVP_MAB target=".concat(args.pvpTarget));
      }
    }, {
      name: "Stooper",
      ready: () => (0,external_kolmafia_namespaceObject.myInebriety)() === (0,external_kolmafia_namespaceObject.inebrietyLimit)() && lib_have(template_string_$item(_4_postrunleg_templateObject96 || (_4_postrunleg_templateObject96 = _4_postrunleg_taggedTemplateLiteral(["tiny stillsuit"])))) && property_get("familiarSweat") >= 300,
      completed: () => !lib_have(template_string_$familiar(_4_postrunleg_templateObject97 || (_4_postrunleg_templateObject97 = _4_postrunleg_taggedTemplateLiteral(["Stooper"])))) || stooperDrunk(),
      do: () => {
        (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(_templateObject98 || (_templateObject98 = _4_postrunleg_taggedTemplateLiteral(["Stooper"]))));
        (0,external_kolmafia_namespaceObject.cliExecute)("drink stillsuit distillate");
      },
      tracking: "Rollover Prep"
    }, {
      name: "Nightcap",
      ready: () => doneAdventuring(),
      completed: () => totallyDrunk(),
      do: () => {
        if (template_string_$familiar(_templateObject99 || (_templateObject99 = _4_postrunleg_taggedTemplateLiteral(["Cooler Yeti"]))).experience >= 400) {
          (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(_templateObject100 || (_templateObject100 = _4_postrunleg_taggedTemplateLiteral(["Cooler Yeti"]))));
          (0,external_kolmafia_namespaceObject.visitUrl)("main.php?talktoyeti=1", false);
          (0,external_kolmafia_namespaceObject.runChoice)(2);
          (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(_templateObject101 || (_templateObject101 = _4_postrunleg_taggedTemplateLiteral(["Stooper"]))));
        }
        (0,external_kolmafia_namespaceObject.cliExecute)("CONSUME NIGHTCAP");
      },
      tracking: "Rollover Prep"
    }, {
      name: "Smoke em if you got em",
      ready: () => property_get("getawayCampsiteUnlocked"),
      completed: () => !lib_have(template_string_$item(_templateObject102 || (_templateObject102 = _4_postrunleg_taggedTemplateLiteral(["stick of firewood"])))),
      do: () => {
        while (lib_have(template_string_$item(_templateObject103 || (_templateObject103 = _4_postrunleg_taggedTemplateLiteral(["stick of firewood"]))))) {
          (0,external_kolmafia_namespaceObject.setProperty)("choiceAdventure1394", "1&message=".concat(smoke, " Thanks Seraphiii for writing Candywrapper!"));
          (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(_templateObject104 || (_templateObject104 = _4_postrunleg_taggedTemplateLiteral(["campfire smoke"]))));
          (0,external_kolmafia_namespaceObject.print)("Smoked ".concat(smoke, " firewoods!"));
          smoke = smoke + 1;
        }
      },
      tracking: "Community Service"
    }, {
      name: "Offhand Remarkable",
      ready: () => lib_have(template_string_$item(_templateObject105 || (_templateObject105 = _4_postrunleg_taggedTemplateLiteral(["august scepter"])))),
      completed: () => !lib_have(template_string_$skill(_templateObject106 || (_templateObject106 = _4_postrunleg_taggedTemplateLiteral(["Aug. 13th: Left/Off Hander's Day!"])))) || lib_have(template_string_$effect(_templateObject107 || (_templateObject107 = _4_postrunleg_taggedTemplateLiteral(["Offhand Remarkable"])))) || property_get("_aug13Cast", false),
      do: () => (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(_templateObject108 || (_templateObject108 = _4_postrunleg_taggedTemplateLiteral(["Aug. 13th: Left/Off Hander's Day!"])))),
      tracking: "Rollover Prep"
    }, {
      name: "PvP Closet Safety 3",
      ready: () => args.pvp && property_get("autoSatisfyWithCloset") && !args.safepvp,
      completed: () => (0,external_kolmafia_namespaceObject.toBoolean)(property_get("_safetyCloset3")),
      do: () => pvpCloset(3)
    }, {
      name: "Item Cleanup",
      // eslint-disable-next-line libram/verify-constants
      completed: () => property_get("_cleanupToday", false) || args.itemcleanup === "",
      do: () => {
        (0,external_kolmafia_namespaceObject.cliExecute)("".concat(args.itemcleanup));
        (0,external_kolmafia_namespaceObject.cliExecute)("set _cleanupToday = true");
      },
      clear: "all",
      tracking: "Item Cleanup"
    }, {
      name: "Takerspace",
      ready: () => (0,external_kolmafia_namespaceObject.getWorkshed)() === template_string_$item(_templateObject109 || (_templateObject109 = _4_postrunleg_taggedTemplateLiteral(["model train set"]))) && !property_get("_workshedItemUsed"),
      completed: () => (0,external_kolmafia_namespaceObject.getWorkshed)() === template_string_$item(_templateObject110 || (_templateObject110 = _4_postrunleg_taggedTemplateLiteral(["TakerSpace letter of Marque"]))),
      do: () => {
        (0,external_kolmafia_namespaceObject.use)(template_string_$item(_templateObject111 || (_templateObject111 = _4_postrunleg_taggedTemplateLiteral(["TakerSpace letter of Marque"]))));
        (0,external_kolmafia_namespaceObject.visitUrl)("campground.php?action=workshed");
      },
      tracking: "Workshed"
    }, {
      name: "Pajamas",
      completed: () => lib_have(template_string_$item(_templateObject112 || (_templateObject112 = _4_postrunleg_taggedTemplateLiteral(["burning cape"])))),
      acquire: [{
        item: template_string_$item(_templateObject113 || (_templateObject113 = _4_postrunleg_taggedTemplateLiteral(["clockwork maid"]))),
        price: 7 * property_get("valueOfAdventure"),
        optional: true
      }, {
        item: template_string_$item(_templateObject114 || (_templateObject114 = _4_postrunleg_taggedTemplateLiteral(["burning cape"])))
      }],
      do: () => {
        if (lib_have(template_string_$item(_templateObject115 || (_templateObject115 = _4_postrunleg_taggedTemplateLiteral(["clockwork maid"]))))) {
          (0,external_kolmafia_namespaceObject.use)(template_string_$item(_templateObject116 || (_templateObject116 = _4_postrunleg_taggedTemplateLiteral(["clockwork maid"]))));
        }
        pajamas = true;
      },
      outfit: () => ({
        familiar: template_string_$familiars(_templateObject117 || (_templateObject117 = _4_postrunleg_taggedTemplateLiteral(["Trick-or-Treating Tot, Left-Hand Man, Disembodied Hand, Grey Goose"]))).find(fam => lib_have(fam)),
        modifier: "adventures ".concat(sasqBonus, " bonus Sasq\u2122 watch, ").concat(ratskinBonus, " bonus ratskin pajama pants ").concat(args.pvp ? ", 0.3 fites" : "")
      }),
      tracking: "Rollover Prep"
    }, {
      name: "Alert-No Nightcap",
      ready: () => !doneAdventuring(),
      completed: () => stooperDrunk(),
      do: () => {
        var targetAdvs = 100 - (0,external_kolmafia_namespaceObject.numericModifier)("adventures");
        (0,external_kolmafia_namespaceObject.print)("robot completed, but did not overdrink.", "red");
        if (targetAdvs < (0,external_kolmafia_namespaceObject.myAdventures)() && targetAdvs > 0) (0,external_kolmafia_namespaceObject.print)("Rerun with fewer than ".concat(targetAdvs, " adventures for smol to handle your diet"), "red");else (0,external_kolmafia_namespaceObject.print)("Something went wrong.", "red");
      }
    }])
  };
}
;// CONCATENATED MODULE: ./src/main.ts
var main_templateObject, main_templateObject2;
function main_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = main_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function main_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return main_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return main_arrayLikeToArray(o, minLen); }
function main_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function main_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var version = "0.0.3";
var dontCS = (0,external_kolmafia_namespaceObject.gamedayToInt)() === 78 || realMonth === 10 && realDay === 30;
function main(command) {
  Args.fill(args, command);
  if (args.help) {
    Args.showHelp(args);
    return;
  }
  if (args.test) {
    var coldWadPrice = (0,external_kolmafia_namespaceObject.mallPrice)(template_string_$item(main_templateObject || (main_templateObject = main_taggedTemplateLiteral(["stench wad"]))));
    var twinklyWadPrice = (0,external_kolmafia_namespaceObject.mallPrice)(template_string_$item(main_templateObject2 || (main_templateObject2 = main_taggedTemplateLiteral(["twinkly wad"]))));
    var results = external_kolmafia_namespaceObject.Item.all().map(item => {
      var _p$stenchWad, _p$stenchNuggets, _p$stenchPowder, _p$twinklyWad, _p$twinklyNuggets, _p$twinklyPowder;
      var p = (0,external_kolmafia_namespaceObject.getRelated)(item, "pulverize");
      var value =
      // cold
      ((_p$stenchWad = p === null || p === void 0 ? void 0 : p["stench wad"]) !== null && _p$stenchWad !== void 0 ? _p$stenchWad : 0) * coldWadPrice / 1_000_000 + ((_p$stenchNuggets = p === null || p === void 0 ? void 0 : p["stench nuggets"]) !== null && _p$stenchNuggets !== void 0 ? _p$stenchNuggets : 0) * coldWadPrice / 5 / 1_000_000 + ((_p$stenchPowder = p === null || p === void 0 ? void 0 : p["stench powder"]) !== null && _p$stenchPowder !== void 0 ? _p$stenchPowder : 0) * coldWadPrice / 25 / 1_000_000 +
      // twinkly
      ((_p$twinklyWad = p === null || p === void 0 ? void 0 : p["twinkly wad"]) !== null && _p$twinklyWad !== void 0 ? _p$twinklyWad : 0) * twinklyWadPrice / 1_000_000 + ((_p$twinklyNuggets = p === null || p === void 0 ? void 0 : p["twinkly nuggets"]) !== null && _p$twinklyNuggets !== void 0 ? _p$twinklyNuggets : 0) * twinklyWadPrice / 5 / 1_000_000 + ((_p$twinklyPowder = p === null || p === void 0 ? void 0 : p["twinkly powder"]) !== null && _p$twinklyPowder !== void 0 ? _p$twinklyPowder : 0) * twinklyWadPrice / 25 / 1_000_000;
      var price = (0,external_kolmafia_namespaceObject.mallPrice)(item) > 0 ? (0,external_kolmafia_namespaceObject.mallPrice)(item) : Infinity;
      var net = value - price;
      var roi = net / price;
      return {
        item,
        value,
        price,
        net,
        roi
      };
    }).filter(o => o.net > 0).sort((a, b) => b.net - a.net);
    var _iterator = main_createForOfIteratorHelper(results),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _step.value,
          item = _step$value.item,
          net = _step$value.net,
          roi = _step$value.roi;
        (0,external_kolmafia_namespaceObject.print)("".concat(item, ": net ").concat(net.toFixed(0), " meat (ROI ").concat((roi * 100).toFixed(1), "%)"));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  if (dontCS && args.halloween && args.cs) {
    throw "Tomorrow is halloween, run something that lets you get steel organs!";
  }
  if (halloween && args.halloween && args.smol) {
    throw "Today is halloween, run CS for more organ space!";
  }
  (0,external_kolmafia_namespaceObject.print)("Running: candyWrapper v".concat(version));
  if (!args.cs && !args.smol && !args.casual && !args.robot && !args.zooto && !args.ih8u) throw "Undefined runtype; please choose an acceptable path";
  var tasks = getTasks([AftercoreQuest(), AscendQuest(), RunQuests(), PostRunQuests()]);
  if (tasks === undefined) throw "Undefined runtype; please choose a valid run type";
  if (args.abort) {
    var to_abort = tasks.find(task => task.name === args.abort);
    if (!to_abort) throw "Unable to identify task ".concat(args.abort);
    to_abort.prepare = () => {
      throw "Abort requested";
    };
  }
  var engine = new ProfitTrackingEngine(tasks, "loop_profit_tracker");
  try {
    engine.run(args.actions);
    // Print the next task that will be executed, if it exists
    var task = engine.getNextTask();
    if (task) {
      (0,external_kolmafia_namespaceObject.print)("Next: ".concat(task.name), "blue");
    }
  } finally {
    engine.destruct();
  }
  deleteJunkKmails();
  notifyVoters();
}
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;