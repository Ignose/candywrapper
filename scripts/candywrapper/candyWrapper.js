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
function utils_sum(addends, x) {
  return addends.reduce((subtotal, element) => subtotal + (typeof x === "function" ? x(element) : element[x]), 0);
}
/**
 * Sum array of numbers
 *
 * @param addends Numbers to sum
 * @returns Sum of numbers
 */
function sumNumbers(addends) {
  return utils_sum(addends, x => x);
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
function maxBy(array, optimizer) {
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
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
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
  return function (options) {
    var _options$val;
    var val = undelay(source);
    if ("default" in options) return (_options$val = options[val]) !== null && _options$val !== void 0 ? _options$val : options.default;
    return options[val];
  };
}
/**
 * Flattens an array. Basically replacing Array.prototype.flat for which Rhino doesn't yet have an implementation
 *
 * @param arr Array to flatten
 * @param depth Number of layers to flatten by; Infinity for a fully flat array
 * @returns Flattened array
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function utils_flat(arr) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
  var flatArray = [];
  var _iterator3 = utils_createForOfIteratorHelper(arr),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var item = _step3.value;
      if (Array.isArray(item) && depth > 0) {
        flatArray = flatArray.concat(utils_flat(item, depth - 1));
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
var createSingleConstant = Type => {
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
  tagFunction.none = Type.none;
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
var $bounty = createSingleConstant(external_kolmafia_namespaceObject.Bounty);
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
var $class = createSingleConstant(external_kolmafia_namespaceObject.Class);
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
var $coinmaster = createSingleConstant(external_kolmafia_namespaceObject.Coinmaster);
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
var template_string_$effect = createSingleConstant(external_kolmafia_namespaceObject.Effect);
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
var $element = createSingleConstant(external_kolmafia_namespaceObject.Element);
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
var template_string_$familiar = createSingleConstant(external_kolmafia_namespaceObject.Familiar);
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
var template_string_$item = createSingleConstant(external_kolmafia_namespaceObject.Item);
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
var $location = createSingleConstant(external_kolmafia_namespaceObject.Location);
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
var $modifier = createSingleConstant(external_kolmafia_namespaceObject.Modifier);
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
var $monster = createSingleConstant(external_kolmafia_namespaceObject.Monster);
/**
 * A list of Monsters specified by a comma-separated list of names.
 * For a list of all possible Monsters, leave the template string blank.
 *
 * @category In-game constant
 */
var $monsters = createPluralConstant(external_kolmafia_namespaceObject.Monster);
/**
 * A Phylum specified by name.
 *
 * @category In-game constant
 */
var $phylum = createSingleConstant(external_kolmafia_namespaceObject.Phylum);
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
var $servant = createSingleConstant(external_kolmafia_namespaceObject.Servant);
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
var template_string_$skill = createSingleConstant(external_kolmafia_namespaceObject.Skill);
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
var $slot = createSingleConstant(external_kolmafia_namespaceObject.Slot);
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
var $stat = createSingleConstant(external_kolmafia_namespaceObject.Stat);
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
var $thrall = createSingleConstant(external_kolmafia_namespaceObject.Thrall);
/**
 * A list of Thralls specified by a comma-separated list of names.
 * For a list of all possible Thralls, leave the template string blank.
 *
 * @category In-game constant
 */
var $thralls = createPluralConstant(external_kolmafia_namespaceObject.Thrall);
/**
 * A Path specified by name.
 *
 * @category In-game constant
 */
var $path = createSingleConstant(external_kolmafia_namespaceObject.Path);
/**
 * A list of Paths specified by a comma-separated list of names.
 * For a list of all possible Paths, leave the template string blank.
 *
 * @category In-game constant
 */
var $paths = createPluralConstant(external_kolmafia_namespaceObject.Path);
;// CONCATENATED MODULE: ./node_modules/libram/dist/lib.js
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45;
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
/**
 * Determines the fold group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required fold group
 * @returns List of items in the fold group
 */
function getFoldGroup(item) {
  return Object.entries((0,external_kolmafia_namespaceObject.getRelated)(item, "fold")).sort((_ref, _ref2) => {
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
/**
 * Get a map of banished monsters keyed by what banished them
 *
 * @category General
 * @returns Map of banished monsters
 */
function lib_getBanishedMonsters() {
  var banishes = chunk(get("banishedMonsters").split(":"), 3);
  var result = new Map();
  var _iterator = lib_createForOfIteratorHelper(banishes),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = lib_slicedToArray(_step.value, 2),
        foe = _step$value[0],
        banisher = _step$value[1];
      if (foe === undefined || banisher === undefined) break;
      // toItem doesn"t error if the item doesn"t exist, so we have to use that.
      var banisherItem = toItem(banisher);
      if (banisher.toLowerCase() === "saber force") {
        result.set($skill(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Use the Force"]))), Monster.get(foe));
      } else if (banisher.toLowerCase() === "nanorhino") {
        result.set($skill(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Unleash Nanites"]))), Monster.get(foe));
      } else if ([Item.none, Item.get("training scroll:  Snokebomb"), Item.get("tomayohawk-style reflex hammer"), null].includes(banisherItem)) {
        if (Skill.get(banisher) === $skill.none) {
          break;
        } else {
          result.set(Skill.get(banisher), Monster.get(foe));
        }
      } else {
        result.set(banisherItem, Monster.get(foe));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return result;
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
    if ($items(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Shrieking Weasel holo-record, Power-Guy 2000 holo-record, Lucky Strikes holo-record, EMD holo-record, Superdrifter holo-record, The Pigs holo-record, Drunk Uncles holo-record"]))).includes(item)) {
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
  if (thing instanceof Effect) {
    return thing === Effect.none ? null : thing;
  }
  if (thing instanceof Familiar) {
    return thing === Familiar.none ? null : thing;
  }
  if (thing instanceof Item) {
    return thing === Item.none ? null : thing;
  }
  return thing;
}
/**
 * Determine the average value from the sort of range that KoLmafia encodes as a string
 *
 * @param range KoLmafia-style range string
 * @returns Average value fo range
 */
function getAverage(range) {
  var _range$match;
  if (range.indexOf("-") < 0) return Number(range);
  var _ref7 = (_range$match = range.match(/(-?[0-9]+)-(-?[0-9]+)/)) !== null && _range$match !== void 0 ? _range$match : ["0", "0", "0"],
    _ref8 = lib_slicedToArray(_ref7, 3),
    lower = _ref8[1],
    upper = _ref8[2];
  return (Number(lower) + Number(upper)) / 2;
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
  if (familiar === $familiar(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Mutant Cactus Bud"])))) {
    return numericModifier(familiar, "Leprechaun Effectiveness", 1, $item.none);
  }
  if (familiar === $familiar(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Reanimated Reanimator"])))) return 0;
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
  if (familiar === $familiar(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Mutant Fire Ant"])))) {
    return numericModifier(familiar, "Fairy Effectiveness", 1, $item.none);
  }
  if (familiar === $familiar(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Reanimated Reanimator"])))) return 0;
  var itemBonus = numericModifier(familiar, "Item Drop", 1, $item.none);
  if (itemBonus === 0) return 0;
  return Math.pow(Math.sqrt(itemBonus + 55 / 4 + 3) - Math.sqrt(55) / 2, 2);
}
var holidayWanderers = new Map([["El Dia De Los Muertos Borrachos", $monsters(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", $monsters(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", $monsters(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
/**
 * Get today's holiday wanderers
 *
 * @returns List of holiday wanderer Monsters
 */
function getTodaysHolidayWanderers() {
  return utils_flat((0,external_kolmafia_namespaceObject.holiday)().split("/").map(holiday => {
    var _holidayWanderers$get;
    return (_holidayWanderers$get = holidayWanderers.get(holiday)) !== null && _holidayWanderers$get !== void 0 ? _holidayWanderers$get : [];
  }));
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
var telescopeStats = new Map([["standing around flexing their muscles and using grip exercisers", $stat(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Muscle"])))], ["sitting around playing chess and solving complicated-looking logic puzzles", $stat(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Mysticality"])))], ["all wearing sunglasses and dancing", $stat(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Moxie"])))]]);
var telescopeElements = new Map([["people, all of whom appear to be on fire", $element(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["hot"])))], ["people, surrounded by a cloud of eldritch mist", $element(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["spooky"])))], ["greasy-looking people furtively skulking around", $element(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["sleaze"])))], ["people, surrounded by garbage and clouds of flies", $element(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["stench"])))], ["people, clustered around a group of igloos", $element(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap1 = new Map([["smoldering bushes on the outskirts of a hedge maze", $element(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["hot"])))], ["creepy-looking black bushes on the outskirts of a hedge maze", $element(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["spooky"])))], ["purplish, greasy-looking hedges", $element(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["sleaze"])))], ["nasty-looking, dripping green bushes on the outskirts of a hedge maze", $element(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["stench"])))], ["frost-rimed bushes on the outskirts of a hedge maze", $element(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap2 = new Map([["smoke rising from deeper within the maze", $element(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["hot"])))], ["a miasma of eldritch vapors rising from deeper within the maze", $element(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["spooky"])))], ["a greasy purple cloud hanging over the center of the maze", $element(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["sleaze"])))], ["a cloud of green gas hovering over the maze", $element(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["stench"])))], ["wintry mists rising from deeper within the maze", $element(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap3 = new Map([["with lava slowly oozing out of it", $element(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["hot"])))], ["surrounded by creepy black mist", $element(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["spooky"])))], ["that occasionally vomits out a greasy ball of hair", $element(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["sleaze"])))], ["disgorging a really surprising amount of sewage", $element(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["stench"])))], ["occasionally disgorging a bunch of ice cubes", $element(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["cold"])))]]);
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
  }).filter(_ref9 => {
    var _ref10 = lib_slicedToArray(_ref9, 2),
      value = _ref10[1];
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
 * @returns The option corresponding to your primestat.
 */
var byStat = makeByXFunction(() => (0,external_kolmafia_namespaceObject.myPrimestat)().toString());
/**
 * Picks an option based on your player class
 *
 * @param options An object keyed by player class; it must either contain all classes, or have a `default` parameter.
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
  return visitUrl("inv_use.php?which=3&whichitem=".concat(item.id, "&pwd"));
}
/**
 * Empty a slot, or unequip all instances of a given equipped item
 *
 * @param thing The slot or item in question
 * @returns Whether we succeeded completely--`false` if we unequip some but not all instances of the item.
 */
function unequip(thing) {
  if (thing instanceof Slot) return equip(thing, $item.none);
  var failedSlots = Slot.all().filter(s => {
    // Filter the slot out if it doesn't contain the relevant item
    if (equippedItem(s) !== thing) return false;
    // Filter the slot out if we succeed at unequipping it
    return !unequip(thing);
    // This leaves only slots that do contain the item but that we failed to unequip
  });

  if (failedSlots.length) logger.debug("Failed to unequip ".concat(thing, " from slots ").concat(failedSlots.join(", ")));
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
  var all = (lib_have($skill(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["Rapid Prototyping"])))) ? 5 - get("_rapidPrototypingUsed") : 0) + (lib_have($skill(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["Expert Corner-Cutter"])))) ? 5 - get("_expertCornerCutterUsed") : 0) + effectCrafts($effect(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["Inigo's Incantation of Inspiration"])))) + effectCrafts($effect(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["Craft Tea"])))) +
  // eslint-disable-next-line libram/verify-constants
  effectCrafts($effect(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["Cooking Concentrate"]))));
  var food = type === "food" ? 5 - get("_cookbookbatCrafting") : 0;
  var smith = type === "smith" ? 5 - get("_thorsPliersCrafting") : 0;
  var booze = 0; // currently there is no booze specific free crafting skill
  return all + food + smith + booze;
}
var realmTypes = (/* unused pure expression or super */ null && (["spooky", "stench", "hot", "cold", "sleaze", "fantasy", "pirate"]));
/**
 * @param identifier which realm to check for
 * @returns if that realm is available
 */
function realmAvailable(identifier) {
  if (identifier === "fantasy") {
    return get("_frToday") || get("frAlways");
  } else if (identifier === "pirate") {
    return get("_prToday") || get("prAlways");
  }
  return get("_".concat(identifier, "AirportToday")) || get("".concat(identifier, "AirportAlways"));
}
/**
 * Compute the currently available Lucky Gold Ring Currencies
 * @param realm the realm type to consider
 * @returns The currency for the given zone
 */
function realmCurrency(realm) {
  switch (realm) {
    case "sleaze":
      return $item(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["Beach Buck"])));
    case "spooky":
      return $item(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["Coinspiracy"])));
    case "stench":
      return $item(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["FunFunds\u2122"])));
    case "cold":
      return $item(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["Wal-Mart gift certificate"])));
    case "hot":
      return $item(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["Volcoino"])));
    case "fantasy":
      return $item(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["Rubee\u2122"])));
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
  return visitUrl("account.php?".concat(([].concat(lib_toConsumableArray(flat(flags.map(_ref11 => {
    var flag = _ref11.flag,
      value = _ref11.value;
    return ["actions[]=flag_".concat(flag), "flag_".concat(flag, "=").concat(Number(value))];
  }))), ["action=Update", "am=1", "ajax=1"]).join("&"), true)));
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
  var initialValues = getCombatFlags(flags.map(_ref12 => {
    var flag = _ref12.flag;
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
  return new Map(Object.entries(kolmafiaExtractItems(text)).map(_ref13 => {
    var _ref14 = lib_slicedToArray(_ref13, 2),
      itemName = _ref14[0],
      quantity = _ref14[1];
    return [Item.get(itemName), quantity];
  }));
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/overlappingNames.js
/** THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseItemSkillNames.ts for more information */
var overlappingItemNames = ["spider web", "really sticky spider web", "dictionary", "NG", "Cloaca-Cola", "yo-yo", "top", "ball", "kite", "yo", "red potion", "blue potion", "bowling ball", "adder", "red button", "pile of sand", "mushroom", "deluxe mushroom"];
var overlappingSkillNames = ["Shoot", "Thrust-Smack", "Headbutt", "Toss", "Knife in the Dark", "Sing", "Disarm", "LIGHT", "BURN", "Extract", "Meteor Shower", "Snipe", "Bite", "Kick", "Howl", "Cleave", "Boil", "Slice", "Rainbow"];
;// CONCATENATED MODULE: ./node_modules/libram/dist/propertyTypes.js
/** THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseDefaultProperties.ts for more information */
var booleanProperties = ["abortOnChoiceWhenNotInChoice", "addChatCommandLine", "addCreationQueue", "addStatusBarToFrames", "allowCloseableDesktopTabs", "allowNegativeTally", "allowNonMoodBurning", "allowSummonBurning", "autoHighlightOnFocus", "broadcastEvents", "cacheMallSearches", "chatBeep", "chatLinksUseRelay", "compactChessboard", "copyAsHTML", "customizedTabs", "debugBuy", "debugConsequences", "debugFoxtrotRemoval", "debugPathnames", "debugTopMenuStyle", "gapProtection", "gitInstallDependencies", "gitShowCommitMessages", "gitUpdateOnLogin", "greenScreenProtection", "guiUsesOneWindow", "hideServerDebugText", "logAcquiredItems", "logBattleAction", "logBrowserInteractions", "logChatMessages", "logChatRequests", "logCleanedHTML", "logDecoratedResponses", "logFamiliarActions", "logGainMessages", "logReadableHTML", "logPreferenceChange", "logMonsterHealth", "logReverseOrder", "logStatGains", "logStatusEffects", "logStatusOnLogin", "macroDebug", "macroLens", "mementoListActive", "mergeHobopolisChat", "pingLogin", "pingStealthyTimein", "printStackOnAbort", "proxySet", "relayAddSounds", "relayAddsCustomCombat", "relayAddsDiscoHelper", "relayAddsGraphicalCLI", "relayAddsQuickScripts", "relayAddsRestoreLinks", "relayAddsUpArrowLinks", "relayAddsUseLinks", "relayAddsWikiLinks", "relayAllowRemoteAccess", "relayBrowserOnly", "relayCacheUncacheable", "relayFormatsChatText", "relayHidesJunkMallItems", "relayMaintainsEffects", "relayMaintainsHealth", "relayMaintainsMana", "relayOverridesImages", "relayRunsAfterAdventureScript", "relayRunsBeforeBattleScript", "relayRunsBeforePVPScript", "relayScriptButtonFirst", "relayTextualizesEffects", "relayTrimsZapList", "relayUsesInlineLinks", "relayUsesIntegratedChat", "relayWarnOnRecoverFailure", "removeMalignantEffects", "saveSettingsOnSet", "sharePriceData", "showAllRequests", "showExceptionalRequests", "stealthLogin", "svnAlwaysAdd", "svnAlwaysOverwrite", "svnInstallDependencies", "svnShowCommitMessages", "svnUpdateOnLogin", "switchEquipmentForBuffs", "syncAfterSvnUpdate", "useChatToolbar", "useContactsFrame", "useDevServer", "useDockIconBadge", "useHugglerChannel", "useImageCache", "useLastUserAgent", "useSystemTrayIcon", "useTabbedChatFrame", "useToolbars", "useCachedVolcanoMaps", "useZoneComboBox", "verboseSpeakeasy", "verboseFloundry", "wrapLongLines", "_gitUpdated", "_svnRepoFileFetched", "_svnUpdated", "antagonisticSnowmanKitAvailable", "arcadeGameHints", "armoryUnlocked", "autoForbidIgnoringStores", "autoCraft", "autoQuest", "autoEntangle", "autoGarish", "autoManaRestore", "autoFillMayoMinder", "autoPinkyRing", "autoPlantHardcore", "autoPlantSoftcore", "autoPotionID", "autoRepairBoxServants", "autoSatisfyWithCloset", "autoSatisfyWithCoinmasters", "autoSatisfyWithMall", "autoSatisfyWithNPCs", "autoSatisfyWithStash", "autoSatisfyWithStorage", "autoSetConditions", "autoSteal", "autoTuxedo", "backupCameraReverserEnabled", "badMoonEncounter01", "badMoonEncounter02", "badMoonEncounter03", "badMoonEncounter04", "badMoonEncounter05", "badMoonEncounter06", "badMoonEncounter07", "badMoonEncounter08", "badMoonEncounter09", "badMoonEncounter10", "badMoonEncounter11", "badMoonEncounter12", "badMoonEncounter13", "badMoonEncounter14", "badMoonEncounter15", "badMoonEncounter16", "badMoonEncounter17", "badMoonEncounter18", "badMoonEncounter19", "badMoonEncounter20", "badMoonEncounter21", "badMoonEncounter22", "badMoonEncounter23", "badMoonEncounter24", "badMoonEncounter25", "badMoonEncounter26", "badMoonEncounter27", "badMoonEncounter28", "badMoonEncounter29", "badMoonEncounter30", "badMoonEncounter31", "badMoonEncounter32", "badMoonEncounter33", "badMoonEncounter34", "badMoonEncounter35", "badMoonEncounter36", "badMoonEncounter37", "badMoonEncounter38", "badMoonEncounter39", "badMoonEncounter40", "badMoonEncounter41", "badMoonEncounter42", "badMoonEncounter43", "badMoonEncounter44", "badMoonEncounter45", "badMoonEncounter46", "badMoonEncounter47", "badMoonEncounter48", "barrelShrineUnlocked", "bigBrotherRescued", "blackBartsBootyAvailable", "bondAdv", "bondBeach", "bondBeat", "bondBooze", "bondBridge", "bondDesert", "bondDR", "bondDrunk1", "bondDrunk2", "bondHoney", "bondHP", "bondInit", "bondItem1", "bondItem2", "bondItem3", "bondJetpack", "bondMartiniDelivery", "bondMartiniPlus", "bondMartiniTurn", "bondMeat", "bondMox1", "bondMox2", "bondMPregen", "bondMus1", "bondMus2", "bondMys1", "bondMys2", "bondSpleen", "bondStat", "bondStat2", "bondStealth", "bondStealth2", "bondSymbols", "bondWar", "bondWeapon2", "bondWpn", "booPeakLit", "bootsCharged", "breakfastCompleted", "burrowgrubHiveUsed", "calzoneOfLegendEaten", "candyCaneSwordApartmentBuilding", "candyCaneSwordBlackForest", "candyCaneSwordBowlingAlley", "candyCaneSwordCopperheadClub", "candyCaneSwordDailyDungeon", "candyCaneSwordDefiledCranny", "candyCaneSwordFunHouse", "candyCaneSwordShore", "candyCaneSwordWarFratRoom", "candyCaneSwordWarFratZetas", "candyCaneSwordWarHippyBait", "candyCaneSwordWarHippyLine", "canteenUnlocked", "chaosButterflyThrown", "chatbotScriptExecuted", "chateauAvailable", "chatLiterate", "chatServesUpdates", "checkJackassHardcore", "checkJackassSoftcore", "clanAttacksEnabled", "coldAirportAlways", "considerShadowNoodles", "controlRoomUnlock", "concertVisited", "controlPanel1", "controlPanel2", "controlPanel3", "controlPanel4", "controlPanel5", "controlPanel6", "controlPanel7", "controlPanel8", "controlPanel9", "corralUnlocked", "crimbo23ArmoryAtWar", "crimbo23BarAtWar", "crimbo23CafeAtWar", "crimbo23CottageAtWar", "crimbo23FoundryAtWar", "dailyDungeonDone", "dampOldBootPurchased", "daycareOpen", "deepDishOfLegendEaten", "demonSummoned", "dinseyAudienceEngagement", "dinseyGarbagePirate", "dinseyRapidPassEnabled", "dinseyRollercoasterNext", "dinseySafetyProtocolsLoose", "doghouseBoarded", "dontStopForCounters", "drippingHallUnlocked", "drippyShieldUnlocked", "edUsedLash", "eldritchFissureAvailable", "eldritchHorrorAvailable", "errorOnAmbiguousFold", "essenceOfAnnoyanceAvailable", "essenceOfBearAvailable", "expressCardUsed", "falloutShelterChronoUsed", "falloutShelterCoolingTankUsed", "fireExtinguisherBatHoleUsed", "fireExtinguisherChasmUsed", "fireExtinguisherCyrptUsed", "fireExtinguisherDesertUsed", "fireExtinguisherHaremUsed", "fistTeachingsHaikuDungeon", "fistTeachingsPokerRoom", "fistTeachingsBarroomBrawl", "fistTeachingsConservatory", "fistTeachingsBatHole", "fistTeachingsFunHouse", "fistTeachingsMenagerie", "fistTeachingsSlums", "fistTeachingsFratHouse", "fistTeachingsRoad", "fistTeachingsNinjaSnowmen", "flickeringPixel1", "flickeringPixel2", "flickeringPixel3", "flickeringPixel4", "flickeringPixel5", "flickeringPixel6", "flickeringPixel7", "flickeringPixel8", "floristFriarAvailable", "floristFriarChecked", "frAlways", "frCemetaryUnlocked", "friarsBlessingReceived", "frMountainsUnlocked", "frSwampUnlocked", "frVillageUnlocked", "frWoodUnlocked", "getawayCampsiteUnlocked", "ghostPencil1", "ghostPencil2", "ghostPencil3", "ghostPencil4", "ghostPencil5", "ghostPencil6", "ghostPencil7", "ghostPencil8", "ghostPencil9", "gingerAdvanceClockUnlocked", "gingerBlackmailAccomplished", "gingerbreadCityAvailable", "gingerExtraAdventures", "gingerNegativesDropped", "gingerSewersUnlocked", "gingerSubwayLineUnlocked", "gingerRetailUnlocked", "glitchItemAvailable", "grabCloversHardcore", "grabCloversSoftcore", "guideToSafariAvailable", "guyMadeOfBeesDefeated", "hallowienerDefiledNook", "hallowienerGuanoJunction", "hallowienerKnollGym", "hallowienerMadnessBakery", "hallowienerMiddleChamber", "hallowienerOvergrownLot", "hallowienerSkeletonStore", "hallowienerSmutOrcs", "hallowienerSonofaBeach", "hallowienerVolcoino", "hardcorePVPWarning", "harvestBatteriesHardcore", "harvestBatteriesSoftcore", "hasAutumnaton", "hasBartender", "hasChef", "hasCocktailKit", "hasCosmicBowlingBall", "hasDetectiveSchool", "hasMaydayContract", "hasOven", "hasRange", "hasShaker", "hasSushiMat", "hasTwinkleVision", "haveBoxingDaydreamHardcore", "haveBoxingDaydreamSoftcore", "hermitHax0red", "holidayHalsBookAvailable", "horseryAvailable", "hotAirportAlways", "implementGlitchItem", "intenseCurrents", "itemBoughtPerAscension637", "itemBoughtPerAscension8266", "itemBoughtPerAscension10790", "itemBoughtPerAscension10794", "itemBoughtPerAscension10795", "itemBoughtPerCharacter6423", "itemBoughtPerCharacter6428", "itemBoughtPerCharacter6429", "kingLiberated", "lastPirateInsult1", "lastPirateInsult2", "lastPirateInsult3", "lastPirateInsult4", "lastPirateInsult5", "lastPirateInsult6", "lastPirateInsult7", "lastPirateInsult8", "lawOfAveragesAvailable", "leafletCompleted", "ledCandleDropped", "libraryCardUsed", "lockPicked", "logBastilleBattalionBattles", "loginRecoveryHardcore", "loginRecoverySoftcore", "lovebugsUnlocked", "loveTunnelAvailable", "lowerChamberUnlock", "madnessBakeryAvailable", "makePocketWishesHardcore", "makePocketWishesSoftcore", "manualOfNumberologyAvailable", "mappingMonsters", "mapToAnemoneMinePurchased", "mapToKokomoAvailable", "mapToMadnessReefPurchased", "mapToTheDiveBarPurchased", "mapToTheMarinaraTrenchPurchased", "mapToTheSkateParkPurchased", "maraisBeaverUnlock", "maraisCorpseUnlock", "maraisDarkUnlock", "maraisVillageUnlock", "maraisWildlifeUnlock", "maraisWizardUnlock", "maximizerAlwaysCurrent", "maximizerCreateOnHand", "maximizerCurrentMallPrices", "maximizerFoldables", "maximizerIncludeAll", "maximizerNoAdventures", "middleChamberUnlock", "milkOfMagnesiumActive", "moonTuned", "neverendingPartyAlways", "noncombatForcerActive", "oasisAvailable", "odeBuffbotCheck", "oilPeakLit", "oscusSodaUsed", "outrageousSombreroUsed", "overgrownLotAvailable", "ownsFloristFriar", "ownsSpeakeasy", "pathedSummonsHardcore", "pathedSummonsSoftcore", "pizzaOfLegendEaten", "popularTartUnlocked", "potatoAlarmClockUsed", "prAlways", "prayedForGlamour", "prayedForProtection", "prayedForVigor", "primaryLabCheerCoreGrabbed", "pyramidBombUsed", "rageGlandVented", "readManualHardcore", "readManualSoftcore", "relayShowSpoilers", "relayShowWarnings", "rememberDesktopSize", "replicaChateauAvailable", "replicaNeverendingPartyAlways", "replicaWitchessSetAvailable", "requireBoxServants", "requireSewerTestItems", "restUsingCampAwayTent", "restUsingChateau", "ROMOfOptimalityAvailable", "safePickpocket", "schoolOfHardKnocksDiplomaAvailable", "scriptCascadingMenus", "serverAddsCustomCombat", "SHAWARMAInitiativeUnlocked", "showForbiddenStores", "showGainsPerUnit", "showIgnoringStorePrices", "showNoSummonOnly", "showTurnFreeOnly", "skeletonStoreAvailable", "sleazeAirportAlways", "snojoAvailable", "sortByEffect", "sortByRoom", "spacegateAlways", "spacegateVaccine1", "spacegateVaccine2", "spacegateVaccine3", "spaceInvaderDefeated", "spelunkyHints", "spiceMelangeUsed", "spookyAirportAlways", "stenchAirportAlways", "stopForFixedWanderer", "stopForUltraRare", "styxPixieVisited", "superconductorDefeated", "suppressInappropriateNags", "suppressPowerPixellation", "suppressMallPriceCacheMessages", "telegraphOfficeAvailable", "telescopeLookedHigh", "timeTowerAvailable", "trackLightsOut", "uneffectWithHotTub", "universalSeasoningActive", "universalSeasoningAvailable", "useBookOfEverySkillHardcore", "useBookOfEverySkillSoftcore", "useCrimboToysHardcore", "useCrimboToysSoftcore", "verboseMaximizer", "visitLoungeHardcore", "visitLoungeSoftcore", "visitRumpusHardcore", "visitRumpusSoftcore", "voteAlways", "wildfireBarrelCaulked", "wildfireDusted", "wildfireFracked", "wildfirePumpGreased", "wildfireSprinkled", "yearbookCameraPending", "youRobotScavenged", "_2002MrStoreCreditsCollected", "_affirmationCookieEaten", "_affirmationHateUsed", "_airFryerUsed", "_akgyxothUsed", "_alienAnimalMilkUsed", "_alienPlantPodUsed", "_allYearSucker", "_aprilShower", "_armyToddlerCast", "_aug1Cast", "_aug2Cast", "_aug3Cast", "_aug4Cast", "_aug5Cast", "_aug6Cast", "_aug7Cast", "_aug8Cast", "_aug9Cast", "_aug10Cast", "_aug11Cast", "_aug12Cast", "_aug13Cast", "_aug14Cast", "_aug15Cast", "_aug16Cast", "_aug17Cast", "_aug18Cast", "_aug19Cast", "_aug20Cast", "_aug21Cast", "_aug22Cast", "_aug23Cast", "_aug24Cast", "_aug25Cast", "_aug26Cast", "_aug27Cast", "_aug28Cast", "_aug29Cast", "_aug30Cast", "_aug31Cast", "_augTodayCast", "_authorsInkUsed", "_baconMachineUsed", "_bagOfCandy", "_bagOfCandyUsed", "_bagOTricksUsed", "_ballastTurtleUsed", "_ballInACupUsed", "_ballpit", "_barrelPrayer", "_bastilleLastBattleWon", "_beachCombing", "_bendHellUsed", "_blackMonolithUsed", "_blankoutUsed", "_bonersSummoned", "_bookOfEverySkillUsed", "_borrowedTimeUsed", "_bowleggedSwaggerUsed", "_bowlFullOfJellyUsed", "_boxOfHammersUsed", "_brainPreservationFluidUsed", "_brassDreadFlaskUsed", "_cameraUsed", "_canSeekBirds", "_candyCaneSwordBackAlley", "_candyCaneSwordHauntedBedroom", "_candyCaneSwordHauntedLibrary", "_candyCaneSwordLyle", "_candyCaneSwordMadnessBakery", "_candyCaneSwordOvergrownLot", "_candyCaneSwordOvergrownShrine", "_candyCaneSwordPalindome", "_candyCaneSwordSouthOfTheBorder", "_candyCaneSwordSpookyForest", "_carboLoaded", "_cargoPocketEmptied", "_ceciHatUsed", "_chateauDeskHarvested", "_chateauMonsterFought", "_chibiChanged", "_chronerCrossUsed", "_chronerTriggerUsed", "_chubbyAndPlumpUsed", "_circadianRhythmsRecalled", "_circleDrumUsed", "_clanFortuneBuffUsed", "_claraBellUsed", "_coalPaperweightUsed", "_cocoaDispenserUsed", "_cocktailShakerUsed", "_coldAirportToday", "_coldOne", "_communismUsed", "_confusingLEDClockUsed", "_controlPanelUsed", "_cookbookbatRecipeDrops", "_corruptedStardustUsed", "_cosmicSixPackConjured", "_crappyCameraUsed", "_creepyVoodooDollUsed", "_crimboTraining", "_crimboTree", "_cursedKegUsed", "_cursedMicrowaveUsed", "_dailyDungeonMalwareUsed", "_darkChocolateHeart", "_daycareFights", "_daycareNap", "_daycareSpa", "_daycareToday", "_defectiveTokenChecked", "_defectiveTokenUsed", "_dinseyGarbageDisposed", "_discoKnife", "_distentionPillUsed", "_dnaHybrid", "_docClocksThymeCocktailDrunk", "_drippingHallDoor1", "_drippingHallDoor2", "_drippingHallDoor3", "_drippingHallDoor4", "_drippyCaviarUsed", "_drippyNuggetUsed", "_drippyPilsnerUsed", "_drippyPlumUsed", "_drippyWineUsed", "_eldritchHorrorEvoked", "_eldritchTentacleFought", "_entauntaunedToday", "_envyfishEggUsed", "_epicMcTwistUsed", "_essentialTofuUsed", "_etchedHourglassUsed", "_eternalCarBatteryUsed", "_everfullGlassUsed", "_extraGreasySliderEaten", "_eyeAndATwistUsed", "_fancyChessSetUsed", "_falloutShelterSpaUsed", "_fancyHotDogEaten", "_farmerItemsCollected", "_favoriteBirdVisited", "_firedJokestersGun", "_fireExtinguisherRefilled", "_fireStartingKitUsed", "_fireworksShop", "_fireworksShopHatBought", "_fireworksShopEquipmentBought", "_fireworkUsed", "_fishyPipeUsed", "_floundryItemCreated", "_floundryItemUsed", "_freePillKeeperUsed", "_frToday", "_frostyMugUsed", "_fudgeSporkUsed", "_garbageItemChanged", "_gingerBiggerAlligators", "_gingerbreadCityToday", "_gingerbreadClockAdvanced", "_gingerbreadClockVisited", "_gingerbreadColumnDestroyed", "_gingerbreadMobHitUsed", "_glennGoldenDiceUsed", "_glitchItemImplemented", "_gnollEyeUsed", "_governmentPerDiemUsed", "_grimBuff", "_guildManualUsed", "_guzzlrQuestAbandoned", "_hardKnocksDiplomaUsed", "_hippyMeatCollected", "_hobbyHorseUsed", "_hodgmansBlanketDrunk", "_holidayFunUsed", "_holoWristCrystal", "_hotAirportToday", "_hungerSauceUsed", "_hyperinflatedSealLungUsed", "_iceHotelRoomsRaided", "_iceSculptureUsed", "_incredibleSelfEsteemCast", "_infernoDiscoVisited", "_internetDailyDungeonMalwareBought", "_internetGallonOfMilkBought", "_internetPlusOneBought", "_internetPrintScreenButtonBought", "_internetViralVideoBought", "_interviewIsabella", "_interviewMasquerade", "_interviewVlad", "_inquisitorsUnidentifiableObjectUsed", "_ironicMoustache", "_jackassPlumberGame", "_jarlsCheeseSummoned", "_jarlsCreamSummoned", "_jarlsDoughSummoned", "_jarlsEggsSummoned", "_jarlsFruitSummoned", "_jarlsMeatSummoned", "_jarlsPotatoSummoned", "_jarlsVeggiesSummoned", "_jingleBellUsed", "_jukebox", "_kgbFlywheelCharged", "_kgbLeftDrawerUsed", "_kgbOpened", "_kgbRightDrawerUsed", "_kolConSixPackUsed", "_kolhsCutButNotDried", "_kolhsIsskayLikeAnAshtray", "_kolhsPoeticallyLicenced", "_kolhsSchoolSpirited", "_kudzuSaladEaten", "_lastCombatLost", "_lastCombatWon", "_latteBanishUsed", "_latteCopyUsed", "_latteDrinkUsed", "_leafAntEggCrafted", "_leafDayShortenerCrafted", "_leafTattooCrafted", "_leavesJumped", "_legendaryBeat", "_licenseToChillUsed", "_lodestoneUsed", "_lookingGlass", "_loveTunnelToday", "_loveTunnelUsed", "_luckyGoldRingVolcoino", "_lunchBreak", "_lupineHormonesUsed", "_lyleFavored", "_madLiquorDrunk", "_madTeaParty", "_mafiaMiddleFingerRingUsed", "_managerialManipulationUsed", "_mansquitoSerumUsed", "_mapToACandyRichBlockUsed", "_maydayDropped", "_mayoDeviceRented", "_mayoTankSoaked", "_meatballMachineUsed", "_meatifyMatterUsed", "_milkOfMagnesiumUsed", "_mimeArmyShotglassUsed", "_missGravesVermouthDrunk", "_missileLauncherUsed", "_molehillMountainUsed", "_momFoodReceived", "_mrBurnsgerEaten", "_muffinOrderedToday", "_mulliganStewEaten", "_mushroomGardenVisited", "_neverendingPartyToday", "_newYouQuestCompleted", "_olympicSwimmingPool", "_olympicSwimmingPoolItemFound", "_overflowingGiftBasketUsed", "_partyHard", "_pastaAdditive", "_perfectFreezeUsed", "_perfectlyFairCoinUsed", "_petePartyThrown", "_peteRiotIncited", "_photocopyUsed", "_pickyTweezersUsed", "_pickleJuiceDrunk", "_pingPongGame", "_pirateBellowUsed", "_pirateForkUsed", "_pixelOrbUsed", "_plumbersMushroomStewEaten", "_pneumaticityPotionUsed", "_portableSteamUnitUsed", "_pottedTeaTreeUsed", "_prToday", "_psychoJarFilled", "_psychoJarUsed", "_psychokineticHugUsed", "_punchingMirrorUsed", "_rainStickUsed", "_redwoodRainStickUsed", "_replicaSnowconeTomeUsed", "_replicaResolutionLibramUsed", "_replicaSmithsTomeUsed", "_requestSandwichSucceeded", "_rhinestonesAcquired", "_saladForkUsed", "_seaJellyHarvested", "_setOfJacksUsed", "_sewingKitUsed", "_sexChanged", "_shadowAffinityToday", "_shadowForestLooted", "_shrubDecorated", "_silverDreadFlaskUsed", "_sitCourseCompleted", "_skateBuff1", "_skateBuff2", "_skateBuff3", "_skateBuff4", "_skateBuff5", "_sleazeAirportToday", "_snowballFactoryUsed", "_sobrieTeaUsed", "_softwareGlitchTurnReceived", "_sotParcelReturned", "_spacegateMurderbot", "_spacegateRuins", "_spacegateSpant", "_spacegateToday", "_spacegateVaccine", "_spaghettiBreakfast", "_spaghettiBreakfastEaten", "_spinmasterLatheVisited", "_spinningWheel", "_spookyAirportToday", "_stabonicScrollUsed", "_steelyEyedSquintUsed", "_stenchAirportToday", "_stinkyCheeseBanisherUsed", "_strangeStalagmiteUsed", "_streamsCrossed", "_stuffedPocketwatchUsed", "_styxSprayUsed", "_summonAnnoyanceUsed", "_summonCarrotUsed", "_summonResortPassUsed", "_sweetToothUsed", "_syntheticDogHairPillUsed", "_tacoFlierUsed", "_telegraphOfficeToday", "_templeHiddenPower", "_tempuraAirUsed", "_thesisDelivered", "_tiedUpFlamingLeafletFought", "_tiedUpFlamingMonsteraFought", "_tiedUpLeaviathanFought", "_timeSpinnerReplicatorUsed", "_toastSummoned", "_tonicDjinn", "_treasuryEliteMeatCollected", "_treasuryHaremMeatCollected", "_trivialAvocationsGame", "_tryptophanDartUsed", "_turtlePowerCast", "_twelveNightEnergyUsed", "_ultraMegaSourBallUsed", "_victorSpoilsUsed", "_villainLairCanLidUsed", "_villainLairColorChoiceUsed", "_villainLairDoorChoiceUsed", "_villainLairFirecrackerUsed", "_villainLairSymbologyChoiceUsed", "_villainLairWebUsed", "_vmaskBanisherUsed", "_voraciTeaUsed", "_volcanoItemRedeemed", "_volcanoSuperduperheatedMetal", "_voodooSnuffUsed", "_voteToday", "_VYKEACafeteriaRaided", "_VYKEALoungeRaided", "_walfordQuestStartedToday", "_warbearBankUsed", "_warbearBreakfastMachineUsed", "_warbearGyrocopterUsed", "_warbearSodaMachineUsed", "_wildfireBarrelHarvested", "_witchessBuff", "_workshedItemUsed", "_zombieClover", "_preventScurvy", "lockedItem4637", "lockedItem4638", "lockedItem4639", "lockedItem4646", "lockedItem4647", "unknownRecipe3542", "unknownRecipe3543", "unknownRecipe3544", "unknownRecipe3545", "unknownRecipe3546", "unknownRecipe3547", "unknownRecipe3548", "unknownRecipe3749", "unknownRecipe3751", "unknownRecipe4172", "unknownRecipe4173", "unknownRecipe4174", "unknownRecipe5060", "unknownRecipe5061", "unknownRecipe5062", "unknownRecipe5063", "unknownRecipe5064", "unknownRecipe5066", "unknownRecipe5067", "unknownRecipe5069", "unknownRecipe5070", "unknownRecipe5072", "unknownRecipe5073", "unknownRecipe5670", "unknownRecipe5671", "unknownRecipe6501", "unknownRecipe6564", "unknownRecipe6565", "unknownRecipe6566", "unknownRecipe6567", "unknownRecipe6568", "unknownRecipe6569", "unknownRecipe6570", "unknownRecipe6571", "unknownRecipe6572", "unknownRecipe6573", "unknownRecipe6574", "unknownRecipe6575", "unknownRecipe6576", "unknownRecipe6577", "unknownRecipe6578", "unknownRecipe7752", "unknownRecipe7753", "unknownRecipe7754", "unknownRecipe7755", "unknownRecipe7756", "unknownRecipe7757", "unknownRecipe7758", "unknownRecipe10970", "unknownRecipe10971", "unknownRecipe10972", "unknownRecipe10973", "unknownRecipe10974", "unknownRecipe10975", "unknownRecipe10976", "unknownRecipe10977", "unknownRecipe10978", "unknownRecipe10988", "unknownRecipe10989", "unknownRecipe10990", "unknownRecipe10991", "unknownRecipe10992", "unknownRecipe11000"];
var numericProperties = ["coinMasterIndex", "dailyDeedsVersion", "defaultDropdown1", "defaultDropdown2", "defaultDropdownSplit", "defaultLimit", "fixedThreadPoolSize", "itemManagerIndex", "lastBuffRequestType", "lastGlobalCounterDay", "lastImageCacheClear", "pingDefaultTestPings", "pingLoginCount", "pingLoginGoal", "pingLoginThreshold", "pingTestPings", "previousUpdateRevision", "relayDelayForSVN", "relaySkillButtonCount", "scriptButtonPosition", "statusDropdown", "svnThreadPoolSize", "toolbarPosition", "_beachTides", "_g9Effect", "8BitBonusTurns", "8BitScore", "addingScrolls", "affirmationCookiesEaten", "aminoAcidsUsed", "antagonisticSnowmanKitCost", "ascensionsToday", "asolDeferredPoints", "asolPointsPigSkinner", "asolPointsCheeseWizard", "asolPointsJazzAgent", "autoAbortThreshold", "autoAntidote", "autoBuyPriceLimit", "autumnatonQuestTurn", "availableCandyCredits", "availableDimes", "availableFunPoints", "availableMrStore2002Credits", "availableQuarters", "availableStoreCredits", "availableSwagger", "averageSwagger", "awolMedicine", "awolPointsBeanslinger", "awolPointsCowpuncher", "awolPointsSnakeoiler", "awolDeferredPointsBeanslinger", "awolDeferredPointsCowpuncher", "awolDeferredPointsSnakeoiler", "awolVenom", "bagOTricksCharges", "ballpitBonus", "bankedKarma", "bartenderTurnsUsed", "basementMallPrices", "basementSafetyMargin", "batmanFundsAvailable", "batmanBonusInitialFunds", "batmanTimeLeft", "bearSwagger", "beeCounter", "beGregariousCharges", "beGregariousFightsLeft", "birdformCold", "birdformHot", "birdformRoc", "birdformSleaze", "birdformSpooky", "birdformStench", "blackBartsBootyCost", "blackPuddingsDefeated", "blackForestProgress", "blankOutUsed", "bloodweiserDrunk", "bondPoints", "bondVillainsDefeated", "boneAbacusVictories", "bookOfFactsGummi", "bookOfFactsPinata", "booPeakProgress", "borisPoints", "breakableHandling", "breakableHandling1964", "breakableHandling9691", "breakableHandling9692", "breakableHandling9699", "breathitinCharges", "brodenBacteria", "brodenSprinkles", "buffBotMessageDisposal", "buffBotPhilanthropyType", "buffJimmyIngredients", "burnoutsDefeated", "burrowgrubSummonsRemaining", "camelSpit", "camerasUsed", "campAwayDecoration", "candyWitchTurnsUsed", "candyWitchCandyTotal", "carboLoading", "catBurglarBankHeists", "cellarLayout", "charitableDonations", "chasmBridgeProgress", "chefTurnsUsed", "chessboardsCleared", "chibiAlignment", "chibiBirthday", "chibiFitness", "chibiIntelligence", "chibiLastVisit", "chibiSocialization", "chilledToTheBone", "cinchoSaltAndLime", "cinderellaMinutesToMidnight", "cinderellaScore", "cocktailSummons", "commerceGhostCombats", "controlPanelOmega", "cornucopiasOpened", "cosmicBowlingBallReturnCombats", "cozyCounter6332", "cozyCounter6333", "cozyCounter6334", "craftingClay", "craftingLeather", "craftingStraw", "crimbo16BeardChakraCleanliness", "crimbo16BootsChakraCleanliness", "crimbo16BungChakraCleanliness", "crimbo16CrimboHatChakraCleanliness", "crimbo16GutsChakraCleanliness", "crimbo16HatChakraCleanliness", "crimbo16JellyChakraCleanliness", "crimbo16LiverChakraCleanliness", "crimbo16NippleChakraCleanliness", "crimbo16NoseChakraCleanliness", "crimbo16ReindeerChakraCleanliness", "crimbo16SackChakraCleanliness", "crimboTrainingSkill", "crimboTreeDays", "cubelingProgress", "currentExtremity", "currentHedgeMazeRoom", "currentMojoFilters", "currentNunneryMeat", "currentPortalEnergy", "currentReplicaStoreYear", "cursedMagnifyingGlassCount", "cyrptAlcoveEvilness", "cyrptCrannyEvilness", "cyrptNicheEvilness", "cyrptNookEvilness", "cyrptTotalEvilness", "darkGyfftePoints", "dartsThrown", "daycareEquipment", "daycareInstructors", "daycareLastScavenge", "daycareToddlers", "dbNemesisSkill1", "dbNemesisSkill2", "dbNemesisSkill3", "desertExploration", "desktopHeight", "desktopWidth", "dinseyFilthLevel", "dinseyFunProgress", "dinseyNastyBearsDefeated", "dinseySocialJusticeIProgress", "dinseySocialJusticeIIProgress", "dinseyTouristsFed", "dinseyToxicMultiplier", "doctorBagQuestLights", "doctorBagUpgrades", "dreadScroll1", "dreadScroll2", "dreadScroll3", "dreadScroll4", "dreadScroll5", "dreadScroll6", "dreadScroll7", "dreadScroll8", "dripAdventuresSinceAscension", "drippingHallAdventuresSinceAscension", "drippingTreesAdventuresSinceAscension", "drippyBatsUnlocked", "drippyJuice", "drippyOrbsClaimed", "drunkenSwagger", "edDefeatAbort", "edPoints", "eldritchTentaclesFought", "electricKoolAidEaten", "elfGratitude", "encountersUntilDMTChoice", "encountersUntilYachtzeeChoice", "encountersUntilNEPChoice", "encountersUntilSRChoice", "ensorceleeLevel", "entauntaunedColdRes", "essenceOfAnnoyanceCost", "essenceOfBearCost", "extraRolloverAdventures", "falloutShelterLevel", "familiarSweat", "fingernailsClipped", "fistSkillsKnown", "flyeredML", "fossilB", "fossilD", "fossilN", "fossilP", "fossilS", "fossilW", "fratboysDefeated", "frenchGuardTurtlesFreed", "funGuyMansionKills", "garbageChampagneCharge", "garbageFireProgress", "garbageShirtCharge", "garbageTreeCharge", "garlandUpgrades", "getsYouDrunkTurnsLeft", "ghostPepperTurnsLeft", "gingerDigCount", "gingerLawChoice", "gingerMuscleChoice", "gingerTrainScheduleStudies", "gladiatorBallMovesKnown", "gladiatorBladeMovesKnown", "gladiatorNetMovesKnown", "glitchItemCost", "glitchItemImplementationCount", "glitchItemImplementationLevel", "glitchSwagger", "gloverPoints", "gnasirProgress", "goldenMrAccessories", "gongPath", "gooseDronesRemaining", "goreCollected", "gourdItemCount", "greyYouPoints", "grimoire1Summons", "grimoire2Summons", "grimoire3Summons", "grimstoneCharge", "guardTurtlesFreed", "guideToSafariCost", "guyMadeOfBeesCount", "guzzlrBronzeDeliveries", "guzzlrDeliveryProgress", "guzzlrGoldDeliveries", "guzzlrPlatinumDeliveries", "haciendaLayout", "hallowiener8BitRealm", "hallowienerCoinspiracy", "hareMillisecondsSaved", "hareTurnsUsed", "heavyRainsStartingThunder", "heavyRainsStartingRain", "heavyRainsStartingLightning", "heroDonationBoris", "heroDonationJarlsberg", "heroDonationSneakyPete", "hiddenApartmentProgress", "hiddenBowlingAlleyProgress", "hiddenHospitalProgress", "hiddenOfficeProgress", "hiddenTavernUnlock", "highTopPumped", "hippiesDefeated", "holidayHalsBookCost", "holidaySwagger", "homemadeRobotUpgrades", "homebodylCharges", "hpAutoRecovery", "hpAutoRecoveryTarget", "iceSwagger", "jarlsbergPoints", "jungCharge", "junglePuns", "knownAscensions", "kolhsTotalSchoolSpirited", "lastAnticheeseDay", "lastArcadeAscension", "lastBadMoonReset", "lastBangPotionReset", "lastBattlefieldReset", "lastBeardBuff", "lastBreakfast", "lastCartographyBooPeak", "lastCartographyCastleTop", "lastCartographyDarkNeck", "lastCartographyDefiledNook", "lastCartographyFratHouse", "lastCartographyFratHouseVerge", "lastCartographyGuanoJunction", "lastCartographyHauntedBilliards", "lastCartographyHippyCampVerge", "lastCartographyZeppelinProtesters", "lastCastleGroundUnlock", "lastCastleTopUnlock", "lastCellarReset", "lastChanceThreshold", "lastChasmReset", "lastColosseumRoundWon", "lastCouncilVisit", "lastCounterDay", "lastDesertUnlock", "lastDispensaryOpen", "lastDMTDuplication", "lastDwarfFactoryReset", "lastEVHelmetValue", "lastEVHelmetReset", "lastEmptiedStorage", "lastFilthClearance", "lastGoofballBuy", "lastGuildStoreOpen", "lastGuyMadeOfBeesReset", "lastFratboyCall", "lastFriarCeremonyAscension", "lastFriarsElbowNC", "lastFriarsHeartNC", "lastFriarsNeckNC", "lastHippyCall", "lastIslandUnlock", "lastKeyotronUse", "lastKingLiberation", "lastLightsOutTurn", "lastMushroomPlot", "lastMiningReset", "lastNemesisReset", "lastPaperStripReset", "lastPirateEphemeraReset", "lastPirateInsultReset", "lastPlusSignUnlock", "lastQuartetAscension", "lastQuartetRequest", "lastSecondFloorUnlock", "lastShadowForgeUnlockAdventure", "lastSkateParkReset", "lastStillBeatingSpleen", "lastTavernAscension", "lastTavernSquare", "lastTelescopeReset", "lastTempleAdventures", "lastTempleButtonsUnlock", "lastTempleUnlock", "lastThingWithNoNameDefeated", "lastTowelAscension", "lastTr4pz0rQuest", "lastTrainsetConfiguration", "lastVioletFogMap", "lastVoteMonsterTurn", "lastWartDinseyDefeated", "lastWuTangDefeated", "lastYearbookCameraAscension", "lastZapperWand", "lastZapperWandExplosionDay", "lawOfAveragesCost", "legacyPoints", "libramSummons", "lightsOutAutomation", "louvreDesiredGoal", "louvreGoal", "lovebugsAridDesert", "lovebugsBeachBuck", "lovebugsBooze", "lovebugsChroner", "lovebugsCoinspiracy", "lovebugsCyrpt", "lovebugsFreddy", "lovebugsFunFunds", "lovebugsHoboNickel", "lovebugsItemDrop", "lovebugsMeat", "lovebugsMeatDrop", "lovebugsMoxie", "lovebugsMuscle", "lovebugsMysticality", "lovebugsOilPeak", "lovebugsOrcChasm", "lovebugsPowder", "lovebugsWalmart", "lttQuestDifficulty", "lttQuestStageCount", "manaBurnSummonThreshold", "manaBurningThreshold", "manaBurningTrigger", "manorDrawerCount", "manualOfNumberologyCost", "mapToKokomoCost", "masksUnlocked", "maximizerMRUSize", "maximizerCombinationLimit", "maximizerEquipmentLevel", "maximizerEquipmentScope", "maximizerMaxPrice", "maximizerPriceLevel", "maxManaBurn", "mayflyExperience", "mayoLevel", "meansuckerPrice", "merkinVocabularyMastery", "miniAdvClass", "miniMartinisDrunk", "moleTunnelLevel", "mothershipProgress", "mpAutoRecovery", "mpAutoRecoveryTarget", "munchiesPillsUsed", "mushroomGardenCropLevel", "nextAprilBandTurn", "nextParanormalActivity", "nextQuantumFamiliarOwnerId", "nextQuantumFamiliarTurn", "noobPoints", "noobDeferredPoints", "noodleSummons", "nsContestants1", "nsContestants2", "nsContestants3", "nuclearAutumnPoints", "numericSwagger", "nunsVisits", "oilPeakProgress", "optimalSwagger", "optimisticCandleProgress", "palindomeDudesDefeated", "parasolUsed", "pendingMapReflections", "pingpongSkill", "pirateSwagger", "plantingDay", "plumberBadgeCost", "plumberCostumeCost", "plumberPoints", "poolSharkCount", "poolSkill", "primaryLabGooIntensity", "prismaticSummons", "procrastinatorLanguageFluency", "promptAboutCrafting", "puzzleChampBonus", "pyramidPosition", "quantumPoints", "reagentSummons", "reanimatorArms", "reanimatorLegs", "reanimatorSkulls", "reanimatorWeirdParts", "reanimatorWings", "recentLocations", "redSnapperProgress", "relayPort", "relocatePygmyJanitor", "relocatePygmyLawyer", "rockinRobinProgress", "ROMOfOptimalityCost", "rumpelstiltskinKidsRescued", "rumpelstiltskinTurnsUsed", "rwbMonsterCount", "safariSwagger", "sausageGrinderUnits", "schoolOfHardKnocksDiplomaCost", "schoolSwagger", "scrapbookCharges", "screechCombats", "scriptMRULength", "seaodesFound", "SeasoningSwagger", "sexChanges", "shenInitiationDay", "shockingLickCharges", "singleFamiliarRun", "skillBurn3", "skillBurn90", "skillBurn153", "skillBurn154", "skillBurn155", "skillBurn1019", "skillBurn5017", "skillBurn6014", "skillBurn6015", "skillBurn6016", "skillBurn6020", "skillBurn6021", "skillBurn6022", "skillBurn6023", "skillBurn6024", "skillBurn6026", "skillBurn6028", "skillBurn7323", "skillBurn14008", "skillBurn14028", "skillBurn14038", "skillBurn15011", "skillBurn15028", "skillBurn17005", "skillBurn22034", "skillBurn22035", "skillBurn23301", "skillBurn23302", "skillBurn23303", "skillBurn23304", "skillBurn23305", "skillBurn23306", "skillLevel46", "skillLevel47", "skillLevel48", "skillLevel117", "skillLevel118", "skillLevel121", "skillLevel128", "skillLevel134", "skillLevel135", "skillLevel144", "skillLevel180", "skillLevel188", "skillLevel227", "skillLevel7254", "slimelingFullness", "slimelingStacksDropped", "slimelingStacksDue", "smoresEaten", "smutOrcNoncombatProgress", "sneakyPetePoints", "snojoMoxieWins", "snojoMuscleWins", "snojoMysticalityWins", "sourceAgentsDefeated", "sourceEnlightenment", "sourceInterval", "sourcePoints", "sourceTerminalGram", "sourceTerminalPram", "sourceTerminalSpam", "spaceBabyLanguageFluency", "spacePirateLanguageFluency", "spelunkyNextNoncombat", "spelunkySacrifices", "spelunkyWinCount", "spookyPuttyCopiesMade", "spookyVHSTapeMonsterTurn", "statbotUses", "sugarCounter4178", "sugarCounter4179", "sugarCounter4180", "sugarCounter4181", "sugarCounter4182", "sugarCounter4183", "sugarCounter4191", "summonAnnoyanceCost", "sweat", "tacoDanCocktailSauce", "tacoDanFishMeat", "tavernLayout", "telescopeUpgrades", "tempuraSummons", "timeSpinnerMedals", "timesRested", "tomeSummons", "totalCharitableDonations", "trainsetPosition", "turtleBlessingTurns", "twinPeakProgress", "twoCRSPoints", "unicornHornInflation", "universalSeasoningCost", "usable1HWeapons", "usable1xAccs", "usable2HWeapons", "usable3HWeapons", "usableAccessories", "usableHats", "usableOffhands", "usableOther", "usablePants", "usableShirts", "valueOfAdventure", "valueOfInventory", "valueOfStill", "valueOfTome", "vintnerCharge", "vintnerWineLevel", "violetFogGoal", "walfordBucketProgress", "warehouseProgress", "welcomeBackAdv", "wereProfessorBite", "wereProfessorKick", "wereProfessorLiver", "wereProfessorPoints", "wereProfessorRend", "wereProfessorResearchPoints", "wereProfessorStomach", "wereProfessorTransformTurns", "whetstonesUsed", "wolfPigsEvicted", "wolfTurnsUsed", "writingDesksDefeated", "xoSkeleltonXProgress", "xoSkeleltonOProgress", "yearbookCameraAscensions", "yearbookCameraUpgrades", "youRobotBody", "youRobotBottom", "youRobotLeft", "youRobotPoints", "youRobotRight", "youRobotTop", "zeppelinProtestors", "zigguratLianas", "zombiePoints", "_absintheDrops", "_abstractionDropsCrown", "_aguaDrops", "_xenomorphCharge", "_ancestralRecallCasts", "_antihangoverBonus", "_aprilBandInstruments", "_aprilBandSaxophoneUses", "_aprilBandTomUses", "_aprilBandTubaUses", "_aprilBandStaffUses", "_aprilBandPiccoloUses", "_astralDrops", "_augSkillsCast", "_automatedFutureManufactures", "_autumnatonQuests", "_backUpUses", "_badlyRomanticArrows", "_badgerCharge", "_balefulHowlUses", "_banderRunaways", "_bastilleCheese", "_bastilleGames", "_bastilleGameTurn", "_bastilleLastCheese", "_beanCannonUses", "_bearHugs", "_beerLensDrops", "_bellydancerPickpockets", "_benettonsCasts", "_birdsSoughtToday", "_bookOfFactsWishes", "_bookOfFactsTatters", "_boomBoxFights", "_boomBoxSongsLeft", "_bootStomps", "_boxingGloveArrows", "_brickoEyeSummons", "_brickoFights", "_campAwayCloudBuffs", "_campAwaySmileBuffs", "_candySummons", "_captainHagnkUsed", "_carnieCandyDrops", "_carnivorousPottedPlantWins", "_carrotNoseDrops", "_catBurglarCharge", "_catBurglarHeistsComplete", "_cheerleaderSteam", "_chestXRayUsed", "_chibiAdventures", "_chipBags", "_chocolateCigarsUsed", "_chocolateCoveredPingPongBallsUsed", "_chocolateSculpturesUsed", "_chocolatesUsed", "_chronolithActivations", "_chronolithNextCost", "_cinchUsed", "_cinchoRests", "_circadianRhythmsAdventures", "_clanFortuneConsultUses", "_clipartSummons", "_cloversPurchased", "_coldMedicineConsults", "_coldMedicineEquipmentTaken", "_companionshipCasts", "_cookbookbatCrafting", "_cosmicBowlingSkillsUsed", "_crimbo21ColdResistance", "_dailySpecialPrice", "_dartsLeft", "_daycareGymScavenges", "_daycareRecruits", "_deckCardsDrawn", "_deluxeKlawSummons", "_demandSandwich", "_detectiveCasesCompleted", "_disavowed", "_dnaPotionsMade", "_donhosCasts", "_douseFoeUses", "_dreamJarDrops", "_drunkPygmyBanishes", "_edDefeats", "_edLashCount", "_elronsCasts", "_enamorangs", "_energyCollected", "_expertCornerCutterUsed", "_extraTimeUsed", "_favorRareSummons", "_feastUsed", "_feelinTheRhythm", "_feelPrideUsed", "_feelExcitementUsed", "_feelHatredUsed", "_feelLonelyUsed", "_feelNervousUsed", "_feelEnvyUsed", "_feelDisappointedUsed", "_feelSuperiorUsed", "_feelLostUsed", "_feelNostalgicUsed", "_feelPeacefulUsed", "_fingertrapArrows", "_fireExtinguisherCharge", "_fragrantHerbsUsed", "_freeBeachWalksUsed", "_frButtonsPressed", "_fudgeWaspFights", "_gapBuffs", "_garbageFireDrops", "_garbageFireDropsCrown", "_genieFightsUsed", "_genieWishesUsed", "_gibbererAdv", "_gibbererCharge", "_gingerbreadCityTurns", "_glarkCableUses", "_glitchMonsterFights", "_gnomeAdv", "_godLobsterFights", "_goldenMoneyCharge", "_gongDrops", "_gothKidCharge", "_gothKidFights", "_greyYouAdventures", "_grimBrotherCharge", "_grimFairyTaleDrops", "_grimFairyTaleDropsCrown", "_grimoireConfiscatorSummons", "_grimoireGeekySummons", "_grimstoneMaskDrops", "_grimstoneMaskDropsCrown", "_grooseCharge", "_grooseDrops", "_grubbyWoolDrops", "_guzzlrDeliveries", "_guzzlrGoldDeliveries", "_guzzlrPlatinumDeliveries", "_hareAdv", "_hareCharge", "_highTopPumps", "_hipsterAdv", "_hoardedCandyDropsCrown", "_hoboUnderlingSummons", "_holoWristDrops", "_holoWristProgress", "_hotAshesDrops", "_hotJellyUses", "_hotTubSoaks", "_humanMuskUses", "_iceballUses", "_inigosCasts", "_jerksHealthMagazinesUsed", "_jiggleCheese", "_jiggleCream", "_jiggleLife", "_jiggleSteak", "_jitbCharge", "_juneCleaverFightsLeft", "_juneCleaverEncounters", "_juneCleaverStench", "_juneCleaverSpooky", "_juneCleaverSleaze", "_juneCleaverHot", "_juneCleaverCold", "_juneCleaverSkips", "_jungDrops", "_kgbClicksUsed", "_kgbDispenserUses", "_kgbTranquilizerDartUses", "_klawSummons", "_kloopCharge", "_kloopDrops", "_kolhsAdventures", "_kolhsSavedByTheBell", "_lastDailyDungeonRoom", "_lastSausageMonsterTurn", "_lastZomboEye", "_latteRefillsUsed", "_leafblowerML", "_leafLassosCrafted", "_leafMonstersFought", "_leavesBurned", "_legionJackhammerCrafting", "_llamaCharge", "_longConUsed", "_lovebugsBeachBuck", "_lovebugsChroner", "_lovebugsCoinspiracy", "_lovebugsFreddy", "_lovebugsFunFunds", "_lovebugsHoboNickel", "_lovebugsWalmart", "_loveChocolatesUsed", "_lynyrdSnareUses", "_machineTunnelsAdv", "_macrometeoriteUses", "_mafiaThumbRingAdvs", "_mapToACandyRichBlockDrops", "_mayflowerDrops", "_mayflySummons", "_mediumSiphons", "_meteoriteAdesUsed", "_meteorShowerUses", "_micrometeoriteUses", "_mildEvilPerpetrated", "_mimicEggsDonated", "_mimicEggsObtained", "_miniMartiniDrops", "_monkeyPawWishesUsed", "_monsterHabitatsFightsLeft", "_monsterHabitatsRecalled", "_monstersMapped", "_mushroomGardenFights", "_nanorhinoCharge", "_navelRunaways", "_neverendingPartyFreeTurns", "_newYouQuestSharpensDone", "_newYouQuestSharpensToDo", "_nextColdMedicineConsult", "_nextQuantumAlignment", "_nightmareFuelCharges", "_noobSkillCount", "_nuclearStockpileUsed", "_oilExtracted", "_olfactionsUsed", "_optimisticCandleDropsCrown", "_oreDropsCrown", "_otoscopeUsed", "_oysterEggsFound", "_pantsgivingBanish", "_pantsgivingCount", "_pantsgivingCrumbs", "_pantsgivingFullness", "_pasteDrops", "_peteJukeboxFixed", "_peteJumpedShark", "_petePeeledOut", "_pieDrops", "_piePartsCount", "_pixieCharge", "_pocketProfessorLectures", "_poisonArrows", "_pokeGrowFertilizerDrops", "_poolGames", "_powderedGoldDrops", "_powderedMadnessUses", "_powerfulGloveBatteryPowerUsed", "_powerPillDrops", "_powerPillUses", "_precisionCasts", "_questPartyFairItemsOpened", "_radlibSummons", "_raindohCopiesMade", "_rapidPrototypingUsed", "_raveStealCount", "_reflexHammerUsed", "_resolutionAdv", "_resolutionRareSummons", "_riftletAdv", "_robinEggDrops", "_roboDrops", "_rogueProgramCharge", "_romanticFightsLeft", "_saberForceMonsterCount", "_saberForceUses", "_saberMod", "_saltGrainsConsumed", "_sandwormCharge", "_saplingsPlanted", "_sausageFights", "_sausagesEaten", "_sausagesMade", "_sealFigurineUses", "_sealScreeches", "_sealsSummoned", "_shadowBricksUsed", "_shadowRiftCombats", "_shatteringPunchUsed", "_shortOrderCookCharge", "_shrubCharge", "_sloppyDinerBeachBucks", "_smilesOfMrA", "_smithsnessSummons", "_snojoFreeFights", "_snojoParts", "_snokebombUsed", "_snowconeSummons", "_snowglobeDrops", "_snowSuitCount", "_sourceTerminalDigitizeMonsterCount", "_sourceTerminalDigitizeUses", "_sourceTerminalDuplicateUses", "_sourceTerminalEnhanceUses", "_sourceTerminalExtrudes", "_sourceTerminalPortscanUses", "_spaceFurDropsCrown", "_spacegatePlanetIndex", "_spacegateTurnsLeft", "_spaceJellyfishDrops", "_speakeasyDrinksDrunk", "_speakeasyFreeFights", "_spelunkerCharges", "_spelunkingTalesDrops", "_spikolodonSpikeUses", "_spookyJellyUses", "_stackLumpsUses", "_steamCardDrops", "_stickerSummons", "_stinkyCheeseCount", "_stressBallSqueezes", "_sugarSummons", "_surprisinglySweetSlashUsed", "_surprisinglySweetStabUsed", "_sweatOutSomeBoozeUsed", "_taffyRareSummons", "_taffyYellowSummons", "_thanksgettingFoodsEaten", "_thingfinderCasts", "_thinknerdPackageDrops", "_thorsPliersCrafting", "_timeHelmetAdv", "_timeSpinnerMinutesUsed", "_tokenDrops", "_transponderDrops", "_turkeyBlastersUsed", "_turkeyBooze", "_turkeyMuscle", "_turkeyMyst", "_turkeyMoxie", "_unaccompaniedMinerUsed", "_unconsciousCollectiveCharge", "_universalSeasoningsUsed", "_universeCalculated", "_universeImploded", "_usedReplicaBatoomerang", "_vampyreCloakeFormUses", "_villainLairProgress", "_vitachocCapsulesUsed", "_vmaskAdv", "_voidFreeFights", "_volcanoItem1", "_volcanoItem2", "_volcanoItem3", "_volcanoItemCount1", "_volcanoItemCount2", "_volcanoItemCount3", "_voteFreeFights", "_VYKEACompanionLevel", "_warbearAutoAnvilCrafting", "_waxGlobDrops", "_whiteRiceDrops", "_witchessFights", "_xoHugsUsed", "_yellowPixelDropsCrown", "_zapCount", "_zombieSmashPocketsUsed"];
var monsterProperties = ["beGregariousMonster", "cameraMonster", "chateauMonster", "clumsinessGroveBoss", "crappyCameraMonster", "crudeMonster", "enamorangMonster", "envyfishMonster", "glacierOfJerksBoss", "holdHandsMonster", "iceSculptureMonster", "lastCopyableMonster", "longConMonster", "maelstromOfLoversBoss", "makeFriendsMonster", "merkinLockkeyMonster", "monkeyPointMonster", "motifMonster", "nosyNoseMonster", "olfactedMonster", "photocopyMonster", "rainDohMonster", "romanticTarget", "rufusDesiredEntity", "rwbMonster", "screencappedMonster", "spookyPuttyMonster", "spookyVHSTapeMonster", "stenchCursedMonster", "superficiallyInterestedMonster", "waxMonster", "yearbookCameraTarget", "_gallapagosMonster", "_jiggleCreamedMonster", "_latteMonster", "_monsterHabitatsMonster", "_nanorhinoBanishedMonster", "_newYouQuestMonster", "_prankCardMonster", "_relativityMonster", "_saberForceMonster", "_sourceTerminalDigitizeMonster", "_trickCoinMonster", "_voteMonster"];
var locationProperties = ["autumnatonQuestLocation", "currentJunkyardLocation", "doctorBagQuestLocation", "ghostLocation", "guzzlrQuestLocation", "lastAdventure", "nextAdventure", "nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "rwbLocation", "sourceOracleTarget", "_floundryBassLocation", "_floundryCarpLocation", "_floundryCodLocation", "_floundryHatchetfishLocation", "_floundryTroutLocation", "_floundryTunaLocation", "_sotParcelLocation"];
var stringProperties = ["autoLogin", "browserBookmarks", "chatFontSize", "combatHotkey0", "combatHotkey1", "combatHotkey2", "combatHotkey3", "combatHotkey4", "combatHotkey5", "combatHotkey6", "combatHotkey7", "combatHotkey8", "combatHotkey9", "commandBufferGCLI", "commandBufferTabbedChat", "commandLineNamespace", "dailyDeedsOptions", "defaultBorderColor", "displayName", "externalEditor", "getBreakfast", "headerStates", "highlightList", "http.proxyHost", "http.proxyPassword", "http.proxyPort", "http.proxyUser", "https.proxyHost", "https.proxyPassword", "https.proxyPort", "https.proxyUser", "initialDesktop", "initialFrames", "lastRelayUpdate", "lastUserAgent", "lastUsername", "logPreferenceChangeFilter", "loginScript", "loginServerName", "loginWindowLogo", "logoutScript", "pingDefaultTestPage", "pingLatest", "pingLoginAbort", "pingLoginCheck", "pingLoginFail", "pingLongest", "pingShortest", "pingTestPage", "previousNotifyList", "previousUpdateVersion", "saveState", "saveStateActive", "scriptList", "swingLookAndFeel", "userAgent", "8BitColor", "afterAdventureScript", "antiScientificMethod", "autoOlfact", "autoPutty", "autumnatonUpgrades", "backupCameraMode", "banishedMonsters", "banishedPhyla", "banishingShoutMonsters", "batmanStats", "batmanZone", "batmanUpgrades", "battleAction", "beachHeadsUnlocked", "beastSkillsAvailable", "beastSkillsKnown", "beforePVPScript", "betweenBattleScript", "boomBoxSong", "breakfastAlways", "breakfastHardcore", "breakfastSoftcore", "buffBotCasting", "buyScript", "cargoPocketsEmptied", "cargoPocketScraps", "chatbotScript", "chatPlayerScript", "chibiName", "choiceAdventureScript", "chosenTrip", "clanFortuneReply1", "clanFortuneReply2", "clanFortuneReply3", "clanFortuneWord1", "clanFortuneWord2", "clanFortuneWord3", "commerceGhostItem", "counterScript", "copperheadClubHazard", "crimbo23ArmoryControl", "crimbo23BarControl", "crimbo23CafeControl", "crimbo23CottageControl", "crimbo23FoundryControl", "crimbotChassis", "crimbotArm", "crimbotPropulsion", "crystalBallPredictions", "csServicesPerformed", "currentAstralTrip", "currentDistillateMods", "currentEasyBountyItem", "currentHardBountyItem", "currentHippyStore", "currentJunkyardTool", "currentLlamaForm", "currentMood", "currentPVPSeason", "currentPvpVictories", "currentSpecialBountyItem", "currentSITSkill", "customCombatScript", "cyrusAdjectives", "defaultFlowerLossMessage", "defaultFlowerWinMessage", "demonName1", "demonName2", "demonName3", "demonName4", "demonName5", "demonName6", "demonName7", "demonName8", "demonName9", "demonName10", "demonName11", "demonName12", "demonName13", "dinseyGatorStenchDamage", "dinseyRollercoasterStats", "doctorBagQuestItem", "dolphinItem", "duckAreasCleared", "duckAreasSelected", "edPiece", "enamorangMonsterTurn", "ensorcelee", "EVEDirections", "everfullDartPerks", "extraCosmeticModifiers", "familiarScript", "forbiddenStores", "gameProBossSpecialPower", "gooseReprocessed", "grimoireSkillsHardcore", "grimoireSkillsSoftcore", "grimstoneMaskPath", "guzzlrQuestClient", "guzzlrQuestBooze", "guzzlrQuestTier", "harvestGardenHardcore", "harvestGardenSoftcore", "hpAutoRecoveryItems", "invalidBuffMessage", "jickSwordModifier", "juneCleaverQueue", "kingLiberatedScript", "lassoTraining", "lastBangPotion819", "lastBangPotion820", "lastBangPotion821", "lastBangPotion822", "lastBangPotion823", "lastBangPotion824", "lastBangPotion825", "lastBangPotion826", "lastBangPotion827", "lastChanceBurn", "lastChessboard", "lastCombatEnvironments", "lastDwarfDiceRolls", "lastDwarfDigitRunes", "lastDwarfEquipmentRunes", "lastDwarfFactoryItem118", "lastDwarfFactoryItem119", "lastDwarfFactoryItem120", "lastDwarfFactoryItem360", "lastDwarfFactoryItem361", "lastDwarfFactoryItem362", "lastDwarfFactoryItem363", "lastDwarfFactoryItem364", "lastDwarfFactoryItem365", "lastDwarfFactoryItem910", "lastDwarfFactoryItem3199", "lastDwarfOfficeItem3208", "lastDwarfOfficeItem3209", "lastDwarfOfficeItem3210", "lastDwarfOfficeItem3211", "lastDwarfOfficeItem3212", "lastDwarfOfficeItem3213", "lastDwarfOfficeItem3214", "lastDwarfOreRunes", "lastDwarfHopper1", "lastDwarfHopper2", "lastDwarfHopper3", "lastDwarfHopper4", "lastEncounter", "lastMacroError", "lastMessageId", "lastPaperStrip3144", "lastPaperStrip4138", "lastPaperStrip4139", "lastPaperStrip4140", "lastPaperStrip4141", "lastPaperStrip4142", "lastPaperStrip4143", "lastPaperStrip4144", "lastPirateEphemera", "lastPorkoBoard", "lastPorkoPayouts", "lastPorkoExpected", "lastSlimeVial3885", "lastSlimeVial3886", "lastSlimeVial3887", "lastSlimeVial3888", "lastSlimeVial3889", "lastSlimeVial3890", "lastSlimeVial3891", "lastSlimeVial3892", "lastSlimeVial3893", "lastSlimeVial3894", "lastSlimeVial3895", "lastSlimeVial3896", "lastSelectedFaxbot", "lastSuccessfulFaxbot", "latteIngredients", "latteModifier", "latteUnlocks", "ledCandleMode", "libramSkillsHardcore", "libramSkillsSoftcore", "louvreOverride", "lovePotion", "lttQuestName", "maximizerList", "maximizerMRUList", "mayoInMouth", "mayoMinderSetting", "merkinQuestPath", "mineLayout1", "mineLayout2", "mineLayout3", "mineLayout4", "mineLayout5", "mineLayout6", "mpAutoRecoveryItems", "muffinOnOrder", "nextDistillateMods", "nextQuantumFamiliarName", "nextQuantumFamiliarOwner", "nsChallenge2", "nsChallenge3", "nsChallenge4", "nsChallenge5", "nsTowerDoorKeysUsed", "oceanAction", "oceanDestination", "parkaMode", "pastaThrall1", "pastaThrall2", "pastaThrall3", "pastaThrall4", "pastaThrall5", "pastaThrall6", "pastaThrall7", "pastaThrall8", "peteMotorbikeTires", "peteMotorbikeGasTank", "peteMotorbikeHeadlight", "peteMotorbikeCowling", "peteMotorbikeMuffler", "peteMotorbikeSeat", "pieStuffing", "plantingDate", "plantingLength", "plantingScript", "plumberCostumeWorn", "pokefamBoosts", "postAscensionScript", "preAscensionScript", "questClumsinessGrove", "questDoctorBag", "questECoBucket", "questESlAudit", "questESlBacteria", "questESlCheeseburger", "questESlCocktail", "questESlDebt", "questESlFish", "questESlMushStash", "questESlSalt", "questESlSprinkles", "questESpClipper", "questESpEVE", "questESpFakeMedium", "questESpGore", "questESpJunglePun", "questESpOutOfOrder", "questESpSerum", "questESpSmokes", "questEStFishTrash", "questEStGiveMeFuel", "questEStNastyBears", "questEStSocialJusticeI", "questEStSocialJusticeII", "questEStSuperLuber", "questEStWorkWithFood", "questEStZippityDooDah", "questEUNewYou", "questF01Primordial", "questF02Hyboria", "questF03Future", "questF04Elves", "questF05Clancy", "questG01Meatcar", "questG02Whitecastle", "questG03Ego", "questG04Nemesis", "questG05Dark", "questG06Delivery", "questG07Myst", "questG08Moxie", "questG09Muscle", "questGlacierOfJerks", "questGuzzlr", "questI01Scapegoat", "questI02Beat", "questL02Larva", "questL03Rat", "questL04Bat", "questL05Goblin", "questL06Friar", "questL07Cyrptic", "questL08Trapper", "questL09Topping", "questL10Garbage", "questL11Black", "questL11Business", "questL11Curses", "questL11Desert", "questL11Doctor", "questL11MacGuffin", "questL11Manor", "questL11Palindome", "questL11Pyramid", "questL11Ron", "questL11Shen", "questL11Spare", "questL11Worship", "questL12HippyFrat", "questL12War", "questL13Final", "questL13Warehouse", "questLTTQuestByWire", "questM01Untinker", "questM02Artist", "questM03Bugbear", "questM05Toot", "questM06Gourd", "questM07Hammer", "questM08Baker", "questM09Rocks", "questM10Azazel", "questM11Postal", "questM12Pirate", "questM13Escape", "questM14Bounty", "questM15Lol", "questM16Temple", "questM17Babies", "questM18Swamp", "questM19Hippy", "questM20Necklace", "questM21Dance", "questM22Shirt", "questM23Meatsmith", "questM24Doc", "questM25Armorer", "questM26Oracle", "questMaelstromOfLovers", "questPAGhost", "questRufus", "questS01OldGuy", "questS02Monkees", "raveCombo1", "raveCombo2", "raveCombo3", "raveCombo4", "raveCombo5", "raveCombo6", "recoveryScript", "relayCounters", "retroCapeSuperhero", "retroCapeWashingInstructions", "royalty", "rufusDesiredArtifact", "rufusDesiredItems", "rufusQuestTarget", "rufusQuestType", "scriptMRUList", "seahorseName", "shadowLabyrinthGoal", "shadowRiftIngress", "shenQuestItem", "shrubGarland", "shrubGifts", "shrubLights", "shrubTopper", "sideDefeated", "sidequestArenaCompleted", "sidequestFarmCompleted", "sidequestJunkyardCompleted", "sidequestLighthouseCompleted", "sidequestNunsCompleted", "sidequestOrchardCompleted", "skateParkStatus", "snowsuit", "sourceTerminalChips", "sourceTerminalEducate1", "sourceTerminalEducate2", "sourceTerminalEnquiry", "sourceTerminalEducateKnown", "sourceTerminalEnhanceKnown", "sourceTerminalEnquiryKnown", "sourceTerminalExtrudeKnown", "spadingData", "spadingScript", "speakeasyName", "spelunkyStatus", "spelunkyUpgrades", "spookyravenRecipeUsed", "stationaryButton1", "stationaryButton2", "stationaryButton3", "stationaryButton4", "stationaryButton5", "streamCrossDefaultTarget", "sweetSynthesisBlacklist", "telescope1", "telescope2", "telescope3", "telescope4", "telescope5", "testudinalTeachings", "textColors", "thanksMessage", "tomeSkillsHardcore", "tomeSkillsSoftcore", "trackVoteMonster", "trainsetConfiguration", "trapperOre", "umbrellaState", "umdLastObtained", "vintnerWineEffect", "vintnerWineName", "vintnerWineType", "violetFogLayout", "volcanoMaze1", "volcanoMaze2", "volcanoMaze3", "volcanoMaze4", "volcanoMaze5", "walfordBucketItem", "warProgress", "watchedPreferences", "wereProfessorAdvancedResearch", "workteaClue", "yourFavoriteBird", "yourFavoriteBirdMods", "youRobotCPUUpgrades", "_automatedFutureSide", "_bastilleBoosts", "_bastilleChoice1", "_bastilleChoice2", "_bastilleChoice3", "_bastilleCurrentStyles", "_bastilleEnemyCastle", "_bastilleEnemyName", "_bastilleLastBattleResults", "_bastilleLastEncounter", "_bastilleStats", "_beachHeadsUsed", "_beachLayout", "_beachMinutes", "_birdOfTheDay", "_birdOfTheDayMods", "_bittycar", "_campAwaySmileBuffSign", "_citizenZone", "_citizenZoneMods", "_cloudTalkMessage", "_cloudTalkSmoker", "_coatOfPaintModifier", "_currentDartboard", "_dailySpecial", "_deckCardsSeen", "_feastedFamiliars", "_floristPlantsUsed", "_frAreasUnlocked", "_frHoursLeft", "_frMonstersKilled", "_futuristicCollarModifier", "_futuristicHatModifier", "_futuristicShirtModifier", "_horsery", "_horseryCrazyMox", "_horseryCrazyMus", "_horseryCrazyMys", "_horseryCrazyName", "_horseryCurrentName", "_horseryDarkName", "_horseryNormalName", "_horseryPaleName", "_jickJarAvailable", "_jiggleCheesedMonsters", "_lastCombatStarted", "_lastPirateRealmIsland", "_locketMonstersFought", "_mayamSymbolsUsed", "_mummeryMods", "_mummeryUses", "_newYouQuestSkill", "_noHatModifier", "_pantogramModifier", "_pottedPowerPlant", "_questESp", "_questPartyFair", "_questPartyFairProgress", "_questPartyFairQuest", "_roboDrinks", "_roninStoragePulls", "_savageBeastMods", "_spacegateAnimalLife", "_spacegateCoordinates", "_spacegateGear", "_spacegateHazards", "_spacegateIntelligentLife", "_spacegatePlanetName", "_spacegatePlantLife", "_stolenAccordions", "_tempRelayCounters", "_timeSpinnerFoodAvailable", "_unknownEasyBountyItem", "_unknownHardBountyItem", "_unknownSpecialBountyItem", "_untakenEasyBountyItem", "_untakenHardBountyItem", "_untakenSpecialBountyItem", "_userMods", "_villainLairColor", "_villainLairKey", "_voteLocal1", "_voteLocal2", "_voteLocal3", "_voteLocal4", "_voteMonster1", "_voteMonster2", "_voteModifier", "_VYKEACompanionType", "_VYKEACompanionRune", "_VYKEACompanionName"];
var numericOrStringProperties = ["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing", "choiceAdventure2", "choiceAdventure3", "choiceAdventure4", "choiceAdventure5", "choiceAdventure6", "choiceAdventure7", "choiceAdventure8", "choiceAdventure9", "choiceAdventure10", "choiceAdventure11", "choiceAdventure12", "choiceAdventure14", "choiceAdventure15", "choiceAdventure16", "choiceAdventure17", "choiceAdventure18", "choiceAdventure19", "choiceAdventure20", "choiceAdventure21", "choiceAdventure22", "choiceAdventure23", "choiceAdventure24", "choiceAdventure25", "choiceAdventure26", "choiceAdventure27", "choiceAdventure28", "choiceAdventure29", "choiceAdventure40", "choiceAdventure41", "choiceAdventure42", "choiceAdventure45", "choiceAdventure46", "choiceAdventure47", "choiceAdventure71", "choiceAdventure72", "choiceAdventure73", "choiceAdventure74", "choiceAdventure75", "choiceAdventure76", "choiceAdventure77", "choiceAdventure86", "choiceAdventure87", "choiceAdventure88", "choiceAdventure89", "choiceAdventure90", "choiceAdventure91", "choiceAdventure105", "choiceAdventure106", "choiceAdventure107", "choiceAdventure108", "choiceAdventure109", "choiceAdventure110", "choiceAdventure111", "choiceAdventure112", "choiceAdventure113", "choiceAdventure114", "choiceAdventure115", "choiceAdventure116", "choiceAdventure117", "choiceAdventure118", "choiceAdventure120", "choiceAdventure123", "choiceAdventure125", "choiceAdventure126", "choiceAdventure127", "choiceAdventure129", "choiceAdventure131", "choiceAdventure132", "choiceAdventure135", "choiceAdventure136", "choiceAdventure137", "choiceAdventure138", "choiceAdventure139", "choiceAdventure140", "choiceAdventure141", "choiceAdventure142", "choiceAdventure143", "choiceAdventure144", "choiceAdventure145", "choiceAdventure146", "choiceAdventure147", "choiceAdventure148", "choiceAdventure149", "choiceAdventure151", "choiceAdventure152", "choiceAdventure153", "choiceAdventure154", "choiceAdventure155", "choiceAdventure156", "choiceAdventure157", "choiceAdventure158", "choiceAdventure159", "choiceAdventure160", "choiceAdventure161", "choiceAdventure162", "choiceAdventure163", "choiceAdventure164", "choiceAdventure165", "choiceAdventure166", "choiceAdventure167", "choiceAdventure168", "choiceAdventure169", "choiceAdventure170", "choiceAdventure171", "choiceAdventure172", "choiceAdventure177", "choiceAdventure178", "choiceAdventure180", "choiceAdventure181", "choiceAdventure182", "choiceAdventure184", "choiceAdventure185", "choiceAdventure186", "choiceAdventure187", "choiceAdventure188", "choiceAdventure189", "choiceAdventure191", "choiceAdventure197", "choiceAdventure198", "choiceAdventure199", "choiceAdventure200", "choiceAdventure201", "choiceAdventure202", "choiceAdventure203", "choiceAdventure204", "choiceAdventure205", "choiceAdventure206", "choiceAdventure207", "choiceAdventure208", "choiceAdventure211", "choiceAdventure212", "choiceAdventure213", "choiceAdventure214", "choiceAdventure215", "choiceAdventure216", "choiceAdventure217", "choiceAdventure218", "choiceAdventure219", "choiceAdventure220", "choiceAdventure221", "choiceAdventure222", "choiceAdventure223", "choiceAdventure224", "choiceAdventure225", "choiceAdventure230", "choiceAdventure272", "choiceAdventure273", "choiceAdventure276", "choiceAdventure277", "choiceAdventure278", "choiceAdventure279", "choiceAdventure280", "choiceAdventure281", "choiceAdventure282", "choiceAdventure283", "choiceAdventure284", "choiceAdventure285", "choiceAdventure286", "choiceAdventure287", "choiceAdventure288", "choiceAdventure289", "choiceAdventure290", "choiceAdventure291", "choiceAdventure292", "choiceAdventure293", "choiceAdventure294", "choiceAdventure295", "choiceAdventure296", "choiceAdventure297", "choiceAdventure298", "choiceAdventure299", "choiceAdventure302", "choiceAdventure303", "choiceAdventure304", "choiceAdventure305", "choiceAdventure306", "choiceAdventure307", "choiceAdventure308", "choiceAdventure309", "choiceAdventure310", "choiceAdventure311", "choiceAdventure317", "choiceAdventure318", "choiceAdventure319", "choiceAdventure320", "choiceAdventure321", "choiceAdventure322", "choiceAdventure326", "choiceAdventure327", "choiceAdventure328", "choiceAdventure329", "choiceAdventure330", "choiceAdventure331", "choiceAdventure332", "choiceAdventure333", "choiceAdventure334", "choiceAdventure335", "choiceAdventure336", "choiceAdventure337", "choiceAdventure338", "choiceAdventure339", "choiceAdventure340", "choiceAdventure341", "choiceAdventure342", "choiceAdventure343", "choiceAdventure344", "choiceAdventure345", "choiceAdventure346", "choiceAdventure347", "choiceAdventure348", "choiceAdventure349", "choiceAdventure350", "choiceAdventure351", "choiceAdventure352", "choiceAdventure353", "choiceAdventure354", "choiceAdventure355", "choiceAdventure356", "choiceAdventure357", "choiceAdventure358", "choiceAdventure360", "choiceAdventure361", "choiceAdventure362", "choiceAdventure363", "choiceAdventure364", "choiceAdventure365", "choiceAdventure366", "choiceAdventure367", "choiceAdventure372", "choiceAdventure376", "choiceAdventure387", "choiceAdventure388", "choiceAdventure389", "choiceAdventure390", "choiceAdventure391", "choiceAdventure392", "choiceAdventure393", "choiceAdventure395", "choiceAdventure396", "choiceAdventure397", "choiceAdventure398", "choiceAdventure399", "choiceAdventure400", "choiceAdventure401", "choiceAdventure402", "choiceAdventure403", "choiceAdventure423", "choiceAdventure424", "choiceAdventure425", "choiceAdventure426", "choiceAdventure427", "choiceAdventure428", "choiceAdventure429", "choiceAdventure430", "choiceAdventure431", "choiceAdventure432", "choiceAdventure433", "choiceAdventure435", "choiceAdventure438", "choiceAdventure439", "choiceAdventure442", "choiceAdventure444", "choiceAdventure445", "choiceAdventure446", "choiceAdventure447", "choiceAdventure448", "choiceAdventure449", "choiceAdventure451", "choiceAdventure452", "choiceAdventure453", "choiceAdventure454", "choiceAdventure455", "choiceAdventure456", "choiceAdventure457", "choiceAdventure458", "choiceAdventure460", "choiceAdventure461", "choiceAdventure462", "choiceAdventure463", "choiceAdventure464", "choiceAdventure465", "choiceAdventure467", "choiceAdventure468", "choiceAdventure469", "choiceAdventure470", "choiceAdventure471", "choiceAdventure472", "choiceAdventure473", "choiceAdventure474", "choiceAdventure475", "choiceAdventure477", "choiceAdventure478", "choiceAdventure480", "choiceAdventure483", "choiceAdventure484", "choiceAdventure485", "choiceAdventure486", "choiceAdventure488", "choiceAdventure489", "choiceAdventure490", "choiceAdventure491", "choiceAdventure496", "choiceAdventure497", "choiceAdventure502", "choiceAdventure503", "choiceAdventure504", "choiceAdventure505", "choiceAdventure506", "choiceAdventure507", "choiceAdventure509", "choiceAdventure510", "choiceAdventure511", "choiceAdventure512", "choiceAdventure513", "choiceAdventure514", "choiceAdventure515", "choiceAdventure517", "choiceAdventure518", "choiceAdventure519", "choiceAdventure521", "choiceAdventure522", "choiceAdventure523", "choiceAdventure527", "choiceAdventure528", "choiceAdventure529", "choiceAdventure530", "choiceAdventure531", "choiceAdventure532", "choiceAdventure533", "choiceAdventure534", "choiceAdventure535", "choiceAdventure536", "choiceAdventure538", "choiceAdventure539", "choiceAdventure542", "choiceAdventure543", "choiceAdventure544", "choiceAdventure546", "choiceAdventure548", "choiceAdventure549", "choiceAdventure550", "choiceAdventure551", "choiceAdventure552", "choiceAdventure553", "choiceAdventure554", "choiceAdventure556", "choiceAdventure557", "choiceAdventure558", "choiceAdventure559", "choiceAdventure560", "choiceAdventure561", "choiceAdventure562", "choiceAdventure563", "choiceAdventure564", "choiceAdventure565", "choiceAdventure566", "choiceAdventure567", "choiceAdventure568", "choiceAdventure569", "choiceAdventure571", "choiceAdventure572", "choiceAdventure573", "choiceAdventure574", "choiceAdventure575", "choiceAdventure576", "choiceAdventure577", "choiceAdventure578", "choiceAdventure579", "choiceAdventure581", "choiceAdventure582", "choiceAdventure583", "choiceAdventure584", "choiceAdventure594", "choiceAdventure595", "choiceAdventure596", "choiceAdventure597", "choiceAdventure598", "choiceAdventure599", "choiceAdventure600", "choiceAdventure603", "choiceAdventure604", "choiceAdventure616", "choiceAdventure634", "choiceAdventure640", "choiceAdventure654", "choiceAdventure655", "choiceAdventure656", "choiceAdventure657", "choiceAdventure658", "choiceAdventure664", "choiceAdventure669", "choiceAdventure670", "choiceAdventure671", "choiceAdventure672", "choiceAdventure673", "choiceAdventure674", "choiceAdventure675", "choiceAdventure676", "choiceAdventure677", "choiceAdventure678", "choiceAdventure679", "choiceAdventure681", "choiceAdventure683", "choiceAdventure684", "choiceAdventure685", "choiceAdventure686", "choiceAdventure687", "choiceAdventure688", "choiceAdventure689", "choiceAdventure690", "choiceAdventure691", "choiceAdventure692", "choiceAdventure693", "choiceAdventure694", "choiceAdventure695", "choiceAdventure696", "choiceAdventure697", "choiceAdventure698", "choiceAdventure700", "choiceAdventure701", "choiceAdventure705", "choiceAdventure706", "choiceAdventure707", "choiceAdventure708", "choiceAdventure709", "choiceAdventure710", "choiceAdventure711", "choiceAdventure712", "choiceAdventure713", "choiceAdventure714", "choiceAdventure715", "choiceAdventure716", "choiceAdventure717", "choiceAdventure721", "choiceAdventure725", "choiceAdventure729", "choiceAdventure733", "choiceAdventure737", "choiceAdventure741", "choiceAdventure745", "choiceAdventure749", "choiceAdventure753", "choiceAdventure771", "choiceAdventure778", "choiceAdventure780", "choiceAdventure781", "choiceAdventure783", "choiceAdventure784", "choiceAdventure785", "choiceAdventure786", "choiceAdventure787", "choiceAdventure788", "choiceAdventure789", "choiceAdventure791", "choiceAdventure793", "choiceAdventure794", "choiceAdventure795", "choiceAdventure796", "choiceAdventure797", "choiceAdventure803", "choiceAdventure805", "choiceAdventure808", "choiceAdventure809", "choiceAdventure813", "choiceAdventure815", "choiceAdventure830", "choiceAdventure832", "choiceAdventure833", "choiceAdventure834", "choiceAdventure835", "choiceAdventure837", "choiceAdventure838", "choiceAdventure839", "choiceAdventure840", "choiceAdventure841", "choiceAdventure842", "choiceAdventure851", "choiceAdventure852", "choiceAdventure853", "choiceAdventure854", "choiceAdventure855", "choiceAdventure856", "choiceAdventure857", "choiceAdventure858", "choiceAdventure866", "choiceAdventure873", "choiceAdventure875", "choiceAdventure876", "choiceAdventure877", "choiceAdventure878", "choiceAdventure879", "choiceAdventure880", "choiceAdventure881", "choiceAdventure882", "choiceAdventure888", "choiceAdventure889", "choiceAdventure918", "choiceAdventure919", "choiceAdventure920", "choiceAdventure921", "choiceAdventure923", "choiceAdventure924", "choiceAdventure925", "choiceAdventure926", "choiceAdventure927", "choiceAdventure928", "choiceAdventure929", "choiceAdventure930", "choiceAdventure931", "choiceAdventure932", "choiceAdventure940", "choiceAdventure941", "choiceAdventure942", "choiceAdventure943", "choiceAdventure944", "choiceAdventure945", "choiceAdventure946", "choiceAdventure950", "choiceAdventure955", "choiceAdventure957", "choiceAdventure958", "choiceAdventure959", "choiceAdventure960", "choiceAdventure961", "choiceAdventure962", "choiceAdventure963", "choiceAdventure964", "choiceAdventure965", "choiceAdventure966", "choiceAdventure970", "choiceAdventure973", "choiceAdventure974", "choiceAdventure975", "choiceAdventure976", "choiceAdventure977", "choiceAdventure979", "choiceAdventure980", "choiceAdventure981", "choiceAdventure982", "choiceAdventure983", "choiceAdventure988", "choiceAdventure989", "choiceAdventure993", "choiceAdventure998", "choiceAdventure1000", "choiceAdventure1003", "choiceAdventure1005", "choiceAdventure1006", "choiceAdventure1007", "choiceAdventure1008", "choiceAdventure1009", "choiceAdventure1010", "choiceAdventure1011", "choiceAdventure1012", "choiceAdventure1013", "choiceAdventure1015", "choiceAdventure1016", "choiceAdventure1017", "choiceAdventure1018", "choiceAdventure1019", "choiceAdventure1020", "choiceAdventure1021", "choiceAdventure1022", "choiceAdventure1023", "choiceAdventure1026", "choiceAdventure1027", "choiceAdventure1028", "choiceAdventure1029", "choiceAdventure1030", "choiceAdventure1031", "choiceAdventure1032", "choiceAdventure1033", "choiceAdventure1034", "choiceAdventure1035", "choiceAdventure1036", "choiceAdventure1037", "choiceAdventure1038", "choiceAdventure1039", "choiceAdventure1040", "choiceAdventure1041", "choiceAdventure1042", "choiceAdventure1044", "choiceAdventure1045", "choiceAdventure1046", "choiceAdventure1048", "choiceAdventure1051", "choiceAdventure1052", "choiceAdventure1053", "choiceAdventure1054", "choiceAdventure1055", "choiceAdventure1056", "choiceAdventure1057", "choiceAdventure1059", "choiceAdventure1060", "choiceAdventure1061", "choiceAdventure1062", "choiceAdventure1065", "choiceAdventure1067", "choiceAdventure1068", "choiceAdventure1069", "choiceAdventure1070", "choiceAdventure1071", "choiceAdventure1073", "choiceAdventure1077", "choiceAdventure1080", "choiceAdventure1081", "choiceAdventure1082", "choiceAdventure1083", "choiceAdventure1084", "choiceAdventure1085", "choiceAdventure1091", "choiceAdventure1094", "choiceAdventure1095", "choiceAdventure1096", "choiceAdventure1097", "choiceAdventure1102", "choiceAdventure1106", "choiceAdventure1107", "choiceAdventure1108", "choiceAdventure1110", "choiceAdventure1114", "choiceAdventure1115", "choiceAdventure1116", "choiceAdventure1118", "choiceAdventure1119", "choiceAdventure1120", "choiceAdventure1121", "choiceAdventure1122", "choiceAdventure1123", "choiceAdventure1171", "choiceAdventure1172", "choiceAdventure1173", "choiceAdventure1174", "choiceAdventure1175", "choiceAdventure1193", "choiceAdventure1195", "choiceAdventure1196", "choiceAdventure1197", "choiceAdventure1198", "choiceAdventure1199", "choiceAdventure1202", "choiceAdventure1203", "choiceAdventure1204", "choiceAdventure1205", "choiceAdventure1206", "choiceAdventure1207", "choiceAdventure1208", "choiceAdventure1209", "choiceAdventure1210", "choiceAdventure1211", "choiceAdventure1212", "choiceAdventure1213", "choiceAdventure1214", "choiceAdventure1215", "choiceAdventure1219", "choiceAdventure1222", "choiceAdventure1223", "choiceAdventure1224", "choiceAdventure1225", "choiceAdventure1226", "choiceAdventure1227", "choiceAdventure1228", "choiceAdventure1229", "choiceAdventure1236", "choiceAdventure1237", "choiceAdventure1238", "choiceAdventure1239", "choiceAdventure1240", "choiceAdventure1241", "choiceAdventure1242", "choiceAdventure1243", "choiceAdventure1244", "choiceAdventure1245", "choiceAdventure1246", "choiceAdventure1247", "choiceAdventure1248", "choiceAdventure1249", "choiceAdventure1250", "choiceAdventure1251", "choiceAdventure1252", "choiceAdventure1253", "choiceAdventure1254", "choiceAdventure1255", "choiceAdventure1256", "choiceAdventure1266", "choiceAdventure1280", "choiceAdventure1281", "choiceAdventure1282", "choiceAdventure1283", "choiceAdventure1284", "choiceAdventure1285", "choiceAdventure1286", "choiceAdventure1287", "choiceAdventure1288", "choiceAdventure1289", "choiceAdventure1290", "choiceAdventure1291", "choiceAdventure1292", "choiceAdventure1293", "choiceAdventure1294", "choiceAdventure1295", "choiceAdventure1296", "choiceAdventure1297", "choiceAdventure1298", "choiceAdventure1299", "choiceAdventure1300", "choiceAdventure1301", "choiceAdventure1302", "choiceAdventure1303", "choiceAdventure1304", "choiceAdventure1305", "choiceAdventure1307", "choiceAdventure1310", "choiceAdventure1312", "choiceAdventure1313", "choiceAdventure1314", "choiceAdventure1315", "choiceAdventure1316", "choiceAdventure1317", "choiceAdventure1318", "choiceAdventure1319", "choiceAdventure1321", "choiceAdventure1322", "choiceAdventure1323", "choiceAdventure1324", "choiceAdventure1325", "choiceAdventure1326", "choiceAdventure1327", "choiceAdventure1328", "choiceAdventure1332", "choiceAdventure1333", "choiceAdventure1335", "choiceAdventure1340", "choiceAdventure1341", "choiceAdventure1345", "choiceAdventure1389", "choiceAdventure1392", "choiceAdventure1397", "choiceAdventure1399", "choiceAdventure1405", "choiceAdventure1411", "choiceAdventure1415", "choiceAdventure1427", "choiceAdventure1428", "choiceAdventure1429", "choiceAdventure1430", "choiceAdventure1431", "choiceAdventure1432", "choiceAdventure1433", "choiceAdventure1434", "choiceAdventure1436", "choiceAdventure1460", "choiceAdventure1461", "choiceAdventure1467", "choiceAdventure1468", "choiceAdventure1469", "choiceAdventure1470", "choiceAdventure1471", "choiceAdventure1472", "choiceAdventure1473", "choiceAdventure1474", "choiceAdventure1475", "choiceAdventure1486", "choiceAdventure1487", "choiceAdventure1488", "choiceAdventure1489", "choiceAdventure1491", "choiceAdventure1494", "choiceAdventure1505"];
var familiarProperties = ["commaFamiliar", "nextQuantumFamiliar", "stillsuitFamiliar"];
var statProperties = ["nsChallenge1", "snojoSetting"];
var phylumProperties = ["dnaSyringe", "locketPhylum", "redSnapperPhylum", "_circadianRhythmsPhylum"];
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
;// CONCATENATED MODULE: ./node_modules/libram/dist/property.js
function property_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function property_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? property_ownKeys(Object(source), !0).forEach(function (key) { property_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : property_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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


var createPropertyGetter = transform => (property, default_) => {
  var value = (0,external_kolmafia_namespaceObject.getProperty)(property);
  if (default_ !== undefined && value === "") {
    return default_;
  }
  return transform(value, property);
};
var createMafiaClassPropertyGetter = (Type, toType) => createPropertyGetter(value => {
  if (value === "") return null;
  var v = toType(value);
  return v === Type.none ? null : v;
});
var getString = createPropertyGetter(value => value);
var getCommaSeparated = createPropertyGetter(value => value.split(/, ?/));
var getBoolean = createPropertyGetter(value => value === "true");
var getNumber = createPropertyGetter(value => Number(value));
var getBounty = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Bounty, external_kolmafia_namespaceObject.toBounty);
var getClass = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Class, external_kolmafia_namespaceObject.toClass);
var getCoinmaster = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Coinmaster, external_kolmafia_namespaceObject.toCoinmaster);
var getEffect = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Effect, external_kolmafia_namespaceObject.toEffect);
var getElement = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Element, external_kolmafia_namespaceObject.toElement);
var getFamiliar = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Familiar, external_kolmafia_namespaceObject.toFamiliar);
var getItem = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Item, external_kolmafia_namespaceObject.toItem);
var getLocation = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Location, external_kolmafia_namespaceObject.toLocation);
var getMonster = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Monster, external_kolmafia_namespaceObject.toMonster);
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
  } else if (isStringProperty(property)) {
    return value;
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
        } else if (value) {
          _set(property, value);
        } else {
          _set(property, "");
        }
      }
    }
    /**
     * Iterates over all stored values, setting each property back to its original stored value. Does not delete entries from the manager.
     */
  }, {
    key: "resetAll",
    value: function resetAll() {
      setProperties(this.properties);
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
  var macroMatches = (0,external_kolmafia_namespaceObject.xpath)((0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php"), "//select[@name=\"macroid\"]/option[text()=\"".concat(name, "\"]/@value"));
  if (macroMatches.length === 0) {
    (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php?action=new");
    var newMacroText = (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php?macroid=0&name=".concat(name, "&macrotext=abort&action=save"));
    return parseInt((0,external_kolmafia_namespaceObject.xpath)(newMacroText, "//input[@name=".concat(name, "]/@value"))[0], 10);
  } else {
    return parseInt(macroMatches[0], 10);
  }
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
    return itemOrItems.map(itemOrItemsBallsMacroPredicate).join(" && ");
  } else {
    return "hascombatitem ".concat(itemOrItems);
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
      for (var _len = arguments.length, nextSteps = new Array(_len), _key = 0; _key < _len; _key++) {
        nextSteps[_key] = arguments[_key];
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
     * @returns  {Macro} This object itself.
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
      return this.step("if !(".concat(Macro.makeBALLSPredicate(condition), ")")).step(ifTrue).step("endif");
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
     * @param condition The BALLS condition for the if statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */
    function while_(condition, contents) {
      return this.step("while ".concat(condition)).step(contents).step("endwhile");
    }
    /**
     * Create a new macro with a "while" statement.
     *
     * @param condition The BALLS condition for the if statement.
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
     * @returns {Macro} This object itself.
     */
    function repeat() {
      return this.step("repeat");
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
      for (var _len2 = arguments.length, skills = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        skills[_key2] = arguments[_key2];
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
      for (var _len3 = arguments.length, skills = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        skills[_key3] = arguments[_key3];
      }
      return this.step.apply(this, combat_toConsumableArray(skills.map(skill => {
        return Macro.if_("hasskill ".concat(skillBallsMacroName(skill)), Macro.skill(skill));
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
      for (var _len4 = arguments.length, skills = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        skills[_key4] = arguments[_key4];
      }
      return this.step.apply(this, combat_toConsumableArray(skills.map(skill => {
        return Macro.if_("hasskill ".concat(skillBallsMacroName(skill)), Macro.skill(skill).repeat());
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
      for (var _len5 = arguments.length, items = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        items[_key5] = arguments[_key5];
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
      for (var _len6 = arguments.length, items = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        items[_key6] = arguments[_key6];
      }
      return this.step.apply(this, combat_toConsumableArray(items.map(item => {
        return Macro.if_(itemOrItemsBallsMacroPredicate(item), "use ".concat(itemOrItemsBallsMacroName(item)));
      })));
    }
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
     *
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
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
  }, {
    key: "makeBALLSPredicate",
    value: function makeBALLSPredicate(condition) {
      var ballsCondition = "";
      if (condition instanceof external_kolmafia_namespaceObject.Monster) {
        ballsCondition = "monsterid ".concat(condition.id);
      } else if (condition instanceof Array) {
        ballsCondition = condition.map(mon => "monsterid ".concat(mon.id)).join(" || ");
        ballsCondition = "(".concat(ballsCondition, ")");
      } else if (condition instanceof external_kolmafia_namespaceObject.Effect) {
        ballsCondition = "haseffect ".concat(condition.id);
      } else if (condition instanceof external_kolmafia_namespaceObject.Skill) {
        ballsCondition = "hasskill ".concat(skillBallsMacroName(condition));
      } else if (condition instanceof external_kolmafia_namespaceObject.Item) {
        if (!condition.combat) {
          throw new InvalidMacroError("Item ".concat(condition, " cannot be made a valid BALLS predicate (it is not combat-usable)"));
        }
        ballsCondition = "hascombatitem ".concat(itemOrItemsBallsMacroName(condition));
      } else if (condition instanceof external_kolmafia_namespaceObject.Location) {
        var snarfblat = condition.id;
        if (snarfblat < 1) {
          throw new InvalidMacroError("Location ".concat(condition, " cannot be made a valid BALLS predicate (it has no location id)"));
        }
        ballsCondition = "snarfblat ".concat(snarfblat);
      } else if (condition instanceof external_kolmafia_namespaceObject.Class) {
        if (condition.id > 6) {
          throw new InvalidMacroError("Class ".concat(condition, " cannot be made a valid BALLS predicate (it is not a standard class)"));
        }
        ballsCondition = condition.toString().replaceAll(" ", "").toLowerCase();
      } else if (condition instanceof external_kolmafia_namespaceObject.Stat) {
        ballsCondition = "".concat(condition.toString().toLowerCase(), "class");
      } else {
        ballsCondition = condition;
      }
      return ballsCondition;
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
      for (var _len7 = arguments.length, skills = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        skills[_key7] = arguments[_key7];
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
      for (var _len8 = arguments.length, items = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        items[_key8] = arguments[_key8];
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
      for (var _len9 = arguments.length, skills = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        skills[_key9] = arguments[_key9];
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
      for (var _len10 = arguments.length, items = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        items[_key10] = arguments[_key10];
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
    key: "trySkillRepeat",
    value:
    /**
     * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
     *
     * @param skills Skills to try repeatedly casting.
     * @returns {StrictMacro} This object itself.
     */
    function trySkillRepeat() {
      var _get6;
      for (var _len11 = arguments.length, skills = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        skills[_key11] = arguments[_key11];
      }
      return (_get6 = _get(combat_getPrototypeOf(StrictMacro.prototype), "trySkillRepeat", this)).call.apply(_get6, [this].concat(skills));
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
      var _this8;
      return (_this8 = new this()).skill.apply(_this8, arguments);
    }
  }, {
    key: "item",
    value: function item() {
      var _this9;
      return (_this9 = new this()).item.apply(_this9, arguments);
    }
  }, {
    key: "trySkill",
    value: function trySkill() {
      var _this10;
      return (_this10 = new this()).trySkill.apply(_this10, arguments);
    }
  }, {
    key: "tryItem",
    value: function tryItem() {
      var _this11;
      return (_this11 = new this()).tryItem.apply(_this11, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function trySkillRepeat() {
      var _this12;
      return (_this12 = new this()).trySkillRepeat.apply(_this12, arguments);
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
        result.step.apply(result, dist_combat_toConsumableArray(this.starting_macro.map(undelay)));
      }
      // Perform any monster-specific macros (these may or may not end the fight)
      var monster_macros = new CompressedMacro();
      this.macros.forEach((value, key) => {
        var _Macro;
        monster_macros.add(key, (_Macro = new Macro()).step.apply(_Macro, dist_combat_toConsumableArray(value.map(undelay))));
      });
      result.step(monster_macros.compile());
      // Perform the non-monster specific macro
      if (this.default_macro) result.step.apply(result, dist_combat_toConsumableArray(this.default_macro.map(undelay)));
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
        monster_macros.add(key, (_Macro2 = new Macro()).step.apply(_Macro2, dist_combat_toConsumableArray(value.map(undelay))));
      });
      result.step(monster_macros.compile());
      // Perform the non-monster specific macro
      if (this.default_autoattack) result.step.apply(result, dist_combat_toConsumableArray(this.default_autoattack.map(undelay)));
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
;// CONCATENATED MODULE: ./node_modules/libram/dist/maximize.js
var maximize_templateObject, maximize_templateObject2, maximize_templateObject3, maximize_templateObject4, maximize_templateObject5, maximize_templateObject6, maximize_templateObject7, maximize_templateObject8, maximize_templateObject9, maximize_templateObject10, maximize_templateObject11, maximize_templateObject12, maximize_templateObject13, maximize_templateObject14, maximize_templateObject15, maximize_templateObject16, maximize_templateObject17, maximize_templateObject18, maximize_templateObject19, maximize_templateObject20, maximize_templateObject21, maximize_templateObject22, maximize_templateObject23, maximize_templateObject24, maximize_templateObject25, maximize_templateObject26, maximize_templateObject27, maximize_templateObject28, maximize_templateObject29, maximize_templateObject30, maximize_templateObject31, maximize_templateObject32, maximize_templateObject33, maximize_templateObject34, maximize_templateObject35, maximize_templateObject36, maximize_templateObject37, maximize_templateObject38, maximize_templateObject39, maximize_templateObject40, maximize_templateObject41, maximize_templateObject42, maximize_templateObject43, maximize_templateObject44, maximize_templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50;
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
  var _addendums$updateOnFa, _addendums$updateOnCa, _addendums$useOutfitC, _addendums$forceEquip, _addendums$preventEqu, _addendums$bonusEquip, _addendums$onlySlot, _addendums$preventSlo, _addendums$forceUpdat, _addendums$modes;
  return {
    updateOnFamiliarChange: (_addendums$updateOnFa = addendums.updateOnFamiliarChange) !== null && _addendums$updateOnFa !== void 0 ? _addendums$updateOnFa : defaultOptions.updateOnFamiliarChange,
    updateOnCanEquipChanged: (_addendums$updateOnCa = addendums.updateOnCanEquipChanged) !== null && _addendums$updateOnCa !== void 0 ? _addendums$updateOnCa : defaultOptions.updateOnCanEquipChanged,
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
    if (!options.onlySlot.includes($slot(_templateObject46 || (_templateObject46 = maximize_taggedTemplateLiteral(["buddy-bjorn"]))))) {
      rider.delete(template_string_$item(_templateObject47 || (_templateObject47 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))));
    }
    if (!options.onlySlot.includes($slot(_templateObject48 || (_templateObject48 = maximize_taggedTemplateLiteral(["crown-of-thrones"]))))) {
      rider.delete(template_string_$item(_templateObject49 || (_templateObject49 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))));
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
  var cacheKey = [objective].concat(maximize_toConsumableArray(untouchedSlots.map(slot => "".concat(slot, ":").concat((0,external_kolmafia_namespaceObject.equippedItem)(slot))).sort()), [lib_have(template_string_$effect(_templateObject50 || (_templateObject50 = maximize_taggedTemplateLiteral(["Offhand Remarkable"]))))]).join("; ");
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
      var optionalBooleans = mergeOptionalOptions(optionsA, optionsB, "updateOnFamiliarChange", "updateOnCanEquipChanged", "forceUpdate");
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
var outfit_templateObject, outfit_templateObject2, outfit_templateObject3, outfit_templateObject4, outfit_templateObject5, outfit_templateObject6, outfit_templateObject7, outfit_templateObject8, outfit_templateObject9, outfit_templateObject10, outfit_templateObject11, outfit_templateObject12, outfit_templateObject13, outfit_templateObject14, outfit_templateObject15, outfit_templateObject16, outfit_templateObject17, outfit_templateObject18, outfit_templateObject19, outfit_templateObject20, outfit_templateObject21, outfit_templateObject22, outfit_templateObject23, outfit_templateObject24, outfit_templateObject25, outfit_templateObject26, outfit_templateObject27, outfit_templateObject28, outfit_templateObject29, outfit_templateObject30, outfit_templateObject31, outfit_templateObject32, outfit_templateObject33, outfit_templateObject34, outfit_templateObject35, outfit_templateObject36, outfit_templateObject37, outfit_templateObject38, outfit_templateObject39, outfit_templateObject40, outfit_templateObject41, outfit_templateObject42, outfit_templateObject43, outfit_templateObject44, outfit_templateObject45, outfit_templateObject46, outfit_templateObject47, outfit_templateObject48, outfit_templateObject49, outfit_templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61;
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
var outfit_modeableCommands = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka"];
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
          if (targetEquipment.includes((0,external_kolmafia_namespaceObject.equippedItem)(slot)) && this.equips.get(slot) !== (0,external_kolmafia_namespaceObject.equippedItem)(slot) || this.avoid.includes((0,external_kolmafia_namespaceObject.equippedItem)(slot)) || slot === $slot(outfit_templateObject49 || (outfit_templateObject49 = outfit_taggedTemplateLiteral(["weapon"]))) && weaponHands((0,external_kolmafia_namespaceObject.equippedItem)(slot)) !== 1 && this.equips.has($slot(outfit_templateObject50 || (outfit_templateObject50 = outfit_taggedTemplateLiteral(["offhand"])))) && !this.equips.has($slot(_templateObject51 || (_templateObject51 = outfit_taggedTemplateLiteral(["weapon"]))))) (0,external_kolmafia_namespaceObject.equip)(slot, template_string_$item.none);
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
      if (this.modifier.length > 0) {
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
        var entry = this.equips.get((_a = new Map([["famequip", $slot(_templateObject52 || (_templateObject52 = outfit_taggedTemplateLiteral(["familiar"])))], ["offhand", $slot(_templateObject53 || (_templateObject53 = outfit_taggedTemplateLiteral(["off-hand"])))]]).get(slotName)) !== null && _a !== void 0 ? _a : (0,external_kolmafia_namespaceObject.toSlot)(slotName));
        if (entry) result[slotName] = entry;
      }
      // Include the riders
      var riders = {};
      var buddyRider = this.riders.get($slot(_templateObject54 || (_templateObject54 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))));
      if (buddyRider !== undefined) riders["buddy-bjorn"] = buddyRider;
      var throneRider = this.riders.get($slot(_templateObject55 || (_templateObject55 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))));
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
        var cleanedResult = Object.fromEntries(outfit_toConsumableArray(Object.entries(result)).filter(_ref5 => {
          var _ref6 = outfit_slicedToArray(_ref5, 2),
            v = _ref6[1];
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
    parka: modes["parka"]
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
    parka: getMode("parkaMode", ["kachungasaur", "dilophosaur", "ghostasaurus", "spikolodon", "pterodactyl"])
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
      (0,external_kolmafia_namespaceObject.print)("");
      (0,external_kolmafia_namespaceObject.print)("Executing ".concat(task.name), "blue");
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
"A Pound of Cure",
// Turtle taming noncombats
"Nantucket Snapper", "Blue Monday", "Capital!", "Training Day", "Boxed In", "Duel Nature", "Slow Food", "A Rolling Turtle Gathers No Moss", "Slow Road to Hell", "C'mere, Little Fella", "The Real Victims", "Like That Time in Tortuga", "Cleansing your Palette", "Harem Scarum", "Turtle in peril", "No Man, No Hole", "Slow and Steady Wins the Brawl", "Stormy Weather", "Turtles of the Universe", "O Turtle Were Art Thou", "Allow 6-8 Weeks For Delivery", "Kick the Can", "Turtles All The Way Around", "More eXtreme Than Usual", "Jewel in the Rough", "The worst kind of drowning", "Even Tamer Than Usual", "Never Break the Chain", "Close, but Yes Cigar", "Armchair Quarterback", "This Turtle Rocks!", "Really Sticking Her Neck Out", "It Came from Beneath the Sewer? Great!", "Don't Be Alarmed, Now", "Puttin' it on Wax", "More Like... Hurtle", "Musk! Musk! Musk!", "Silent Strolling"]);
var zoneSpecificNCs = new Map([["The Horror...", ["Frat House"]] // Duplicate choice name
]);
/**
 * Return true if the last adv was one of:
 *   1. Halloweener dog noncombats,
 *   2. June cleaver noncombats,
 *   3. Lil' Doctor™ bag noncombat, or
 *   4. Turtle taming noncombats.
 */
function lastEncounterWasWanderingNC() {
  var _a;
  var last = property_get("lastEncounter");
  if (zoneSpecificNCs.has(last)) {
    // Handle NCs with a duplicated name
    var zones = (_a = zoneSpecificNCs.get(last)) !== null && _a !== void 0 ? _a : [];
    return zones.includes(property_get("lastAdventure"));
  } else {
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
  var _a, _b;
  var result = [];
  var _iterator = route_createForOfIteratorHelper(quests),
    _step;
  try {
    var _loop = function _loop() {
      var quest = _step.value;
      var questCompleted = quest.completed;
      var questReady = quest.ready;
      var _iterator3 = route_createForOfIteratorHelper(quest.tasks),
        _step3;
      try {
        var _loop2 = function _loop2() {
          var task = _step3.value;
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
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
    // Verify the dependency names of all tasks
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var names = new Set();
  for (var _i = 0, _result = result; _i < _result.length; _i++) {
    var task = _result[_i];
    names.add(task.name);
  }
  for (var _i2 = 0, _result2 = result; _i2 < _result2.length; _i2++) {
    var _task = _result2[_i2];
    var _iterator2 = route_createForOfIteratorHelper((_b = _task.after) !== null && _b !== void 0 ? _b : []),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var after = _step2.value;
        if (!names.has(after)) {
          throw "Unknown task dependency ".concat(after, " of ").concat(_task.name);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  return result;
}
function orderByRoute(tasks, routing, ignore_missing_tasks) {
  var priorities = new Map();
  var _iterator4 = route_createForOfIteratorHelper(tasks),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var task = _step4.value;
      priorities.set(task.name, [1000, task]);
    }
    // Prioritize the routing list of tasks first
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
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
    var _iterator5 = route_createForOfIteratorHelper((_a = old_priority[1].after) !== null && _a !== void 0 ? _a : []),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var requirement = _step5.value;
        setPriorityRecursive(requirement, priority - 0.01);
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
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







;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2017/AsdonMartin.js
var AsdonMartin_templateObject, AsdonMartin_templateObject2, AsdonMartin_templateObject3, AsdonMartin_templateObject4, AsdonMartin_templateObject5, AsdonMartin_templateObject6, AsdonMartin_templateObject7, AsdonMartin_templateObject8, AsdonMartin_templateObject9, AsdonMartin_templateObject10, AsdonMartin_templateObject11, AsdonMartin_templateObject12, AsdonMartin_templateObject13;
function AsdonMartin_slicedToArray(arr, i) { return AsdonMartin_arrayWithHoles(arr) || AsdonMartin_iterableToArrayLimit(arr, i) || AsdonMartin_unsupportedIterableToArray(arr, i) || AsdonMartin_nonIterableRest(); }
function AsdonMartin_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function AsdonMartin_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return AsdonMartin_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return AsdonMartin_arrayLikeToArray(o, minLen); }
function AsdonMartin_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function AsdonMartin_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function AsdonMartin_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function AsdonMartin_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var PriceAge;
(function (PriceAge) {
  PriceAge[PriceAge["HISTORICAL"] = 0] = "HISTORICAL";
  PriceAge[PriceAge["RECENT"] = 1] = "RECENT";
  PriceAge[PriceAge["TODAY"] = 2] = "TODAY";
})(PriceAge || (PriceAge = {}));
/**
 * @returns Whether the Asdon is our current active workshed
 */
function installed() {
  return (0,external_kolmafia_namespaceObject.getWorkshed)() === template_string_$item(AsdonMartin_templateObject || (AsdonMartin_templateObject = AsdonMartin_taggedTemplateLiteral(["Asdon Martin keyfob (on ring)"])));
}
/**
 * @returns `true` if we `have` the Asdon or if it's installed
 */
function AsdonMartin_have() {
  return installed() || haveItem($item(AsdonMartin_templateObject2 || (AsdonMartin_templateObject2 = AsdonMartin_taggedTemplateLiteral(["Asdon Martin keyfob (on ring)"]))));
}
var fuelSkiplist = template_string_$items(AsdonMartin_templateObject3 || (AsdonMartin_templateObject3 = AsdonMartin_taggedTemplateLiteral(["cup of \"tea\", thermos of \"whiskey\", Lucky Lindy, Bee's Knees, Sockdollager, Ish Kabibble, Hot Socks, Phonus Balonus, Flivver, Sloppy Jalopy, glass of \"milk\""])));
/**
 * Internal function used to determine whether a historical price is recent enough
 *
 * @param item The item to check
 * @returns Whether a price is too old to trust
 */
function priceTooOld(item) {
  return (0,external_kolmafia_namespaceObject.historicalPrice)(item) === 0 || (0,external_kolmafia_namespaceObject.historicalAge)(item) >= 7;
}
/**
 * @param item The item in question
 * @returns Mall max if historicalPrice is -1; otherwise, the historical price
 */
function historicalPriceOrMax(item) {
  var historical = (0,external_kolmafia_namespaceObject.historicalPrice)(item);
  return historical < 0 ? 999999999 : historical;
}
/**
 * @param item The item in question
 * @returns Mall max if historicalPrice is -1; otherwise, the mall price
 */
function mallPriceOrMax(item) {
  var mall = (0,external_kolmafia_namespaceObject.mallPrice)(item);
  return mall < 0 ? 999999999 : mall;
}
/**
 * Combined internal function to determine the price of an item
 *
 * @param item The item in question
 * @param priceAge How do we decide when to use historical vs real mall prices?
 * @returns The price of the item in question
 */
function price(item, priceAge) {
  switch (priceAge) {
    case PriceAge.HISTORICAL:
      {
        var historical = historicalPriceOrMax(item);
        return historical === 0 ? mallPriceOrMax(item) : historical;
      }
    case PriceAge.RECENT:
      return priceTooOld(item) ? mallPriceOrMax(item) : historicalPriceOrMax(item);
    case PriceAge.TODAY:
      return mallPriceOrMax(item);
  }
}
function inventoryItems() {
  return external_kolmafia_namespaceObject.Item.all().filter(isFuelItem).filter(item => lib_have(item) && [100, (0,external_kolmafia_namespaceObject.autosellPrice)(item)].includes(price(item, PriceAge.RECENT)));
}
/**
 * @param it The item in question
 * @param priceAge The PriceAge option to apply
 * @returns Meat per fuel of an item
 */
function calculateFuelUnitCost(it) {
  var priceAge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PriceAge.RECENT;
  var units = getAverageAdventures(it);
  return price(it, priceAge) / units;
}
/**
 * @param it the item in question
 * @returns Can `it` be used as Asdon fuel?
 */
function isFuelItem(it) {
  return !(0,external_kolmafia_namespaceObject.isNpcItem)(it) && it.fullness + it.inebriety > 0 && getAverageAdventures(it) > 0 && it.tradeable && it.discardable && !fuelSkiplist.includes(it);
}
/**
 * @returns The best fuel options available to us at this time
 */
function getBestFuels() {
  // Three stages.
  // 1. Filter to reasonable items using historical cost (within 5x of historical best).
  var allFuel = external_kolmafia_namespaceObject.Item.all().filter(isFuelItem);
  if (allFuel.filter(item => (0,external_kolmafia_namespaceObject.historicalPrice)(item) === 0).length > 100) {
    (0,external_kolmafia_namespaceObject.mallPrices)("food");
    (0,external_kolmafia_namespaceObject.mallPrices)("booze");
  }
  var keyHistorical = item => calculateFuelUnitCost(item, PriceAge.HISTORICAL);
  allFuel.sort((x, y) => keyHistorical(x) - keyHistorical(y));
  var bestUnitCost = keyHistorical(allFuel[0]);
  var firstBadIndex = allFuel.findIndex(item => keyHistorical(item) > 5 * bestUnitCost);
  var potentialFuel = firstBadIndex > 0 ? allFuel.slice(0, firstBadIndex) : allFuel;
  // 2. Filter to top 10 candidates using prices at most a week old.
  if (potentialFuel.filter(item => priceTooOld(item)).length > 100) {
    (0,external_kolmafia_namespaceObject.mallPrices)("food");
    (0,external_kolmafia_namespaceObject.mallPrices)("booze");
  }
  var key1 = item => -getAverageAdventures(item);
  var key2 = item => calculateFuelUnitCost(item, PriceAge.RECENT);
  potentialFuel.sort((x, y) => key1(x) - key1(y));
  potentialFuel.sort((x, y) => key2(x) - key2(y));
  // 3. Find result using precise price for those top candidates.
  var candidates = potentialFuel.slice(0, 10);
  var key3 = item => calculateFuelUnitCost(item, PriceAge.TODAY);
  candidates.sort((x, y) => key3(x) - key3(y));
  if (calculateFuelUnitCost(candidates[0], PriceAge.TODAY) > 100) {
    throw new Error("Could not identify any fuel with efficiency better than 100 meat per fuel. " + "This means something went wrong.");
  }
  return candidates;
}
/**
 * Fuel your Asdon Martin with a given quantity of a given item
 *
 * @param it Item to fuel with.
 * @param quantity Number of items to fuel with.
 * @returns Whether we succeeded at fueling with the given items.
 */
function insertFuel(it) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var result = (0,external_kolmafia_namespaceObject.visitUrl)("campground.php?action=fuelconvertor&pwd&qty=".concat(quantity, "&iid=").concat(it.id, "&go=Convert%21"));
  return result.includes("The display updates with a");
}
/**
 * Fill your Asdon Martin to the given fuel level in the cheapest way possible
 *
 * @param targetUnits Fuel level to attempt to reach.
 * @returns Whether we succeeded at filling to the target fuel level.
 */
function fillTo(targetUnits) {
  if (!installed()) return false;
  while ((0,external_kolmafia_namespaceObject.getFuel)() < targetUnits) {
    // if in Hardcore/ronin, skip the price calculation and just use soda bread
    var _ref = (0,external_kolmafia_namespaceObject.canInteract)() ? getBestFuels() : [template_string_$item(AsdonMartin_templateObject4 || (AsdonMartin_templateObject4 = AsdonMartin_taggedTemplateLiteral(["loaf of soda bread"]))), undefined],
      _ref2 = AsdonMartin_slicedToArray(_ref, 2),
      bestFuel = _ref2[0],
      secondBest = _ref2[1];
    var count = Math.ceil(targetUnits / getAverageAdventures(bestFuel));
    var ceiling = undefined;
    if (secondBest) {
      var efficiencyOfSecondBest = (0,external_kolmafia_namespaceObject.mallPrice)(secondBest) / getAverageAdventures(secondBest);
      ceiling = Math.ceil(efficiencyOfSecondBest * getAverageAdventures(bestFuel));
    }
    if (!(0,external_kolmafia_namespaceObject.canInteract)()) (0,external_kolmafia_namespaceObject.retrieveItem)(count, bestFuel);else ceiling ? (0,external_kolmafia_namespaceObject.buy)(count, bestFuel, ceiling) : (0,external_kolmafia_namespaceObject.buy)(count, bestFuel);
    if (!insertFuel(bestFuel, Math.min((0,external_kolmafia_namespaceObject.itemAmount)(bestFuel), count))) {
      throw new Error("Failed to fuel Asdon Martin.");
    }
  }
  return (0,external_kolmafia_namespaceObject.getFuel)() >= targetUnits;
}
/**
 * @param targetUnits The fuel level we aim to achieve
 * @returns Whether we successfully filled our Asdon's tank
 */
function fillWithBestInventoryItem(targetUnits) {
  var options = inventoryItems().sort((a, b) => getAverageAdventures(b) / (0,external_kolmafia_namespaceObject.autosellPrice)(b) - getAverageAdventures(a) / (0,external_kolmafia_namespaceObject.autosellPrice)(a));
  if (options.length === 0) return false;
  var best = options[0];
  if ((0,external_kolmafia_namespaceObject.autosellPrice)(best) / getAverageAdventures(best) > 100) return false;
  var amountToUse = utils_clamp(Math.ceil(targetUnits / getAverageAdventures(best)), 0, (0,external_kolmafia_namespaceObject.itemAmount)(best));
  return insertFuel(best, amountToUse);
}
/**
 * Fill your Asdon Martin by prioritizing mallmin items in your inventory. Default to the behavior of fillTo.
 *
 * @param targetUnits Fuel level to attempt to reach.
 * @returns Whether we succeeded at filling to the target fuel level.
 */
function fillWithInventoryTo(targetUnits) {
  if (!installed()) return false;
  var continueFuelingFromInventory = true;
  while ((0,external_kolmafia_namespaceObject.getFuel)() < targetUnits && continueFuelingFromInventory) {
    continueFuelingFromInventory && (continueFuelingFromInventory = fillWithBestInventoryItem(targetUnits));
  }
  return fillTo(targetUnits);
}
/**
 * Object consisting of the various Asdon driving styles
 */
var Driving = {
  Obnoxiously: template_string_$effect(AsdonMartin_templateObject5 || (AsdonMartin_templateObject5 = AsdonMartin_taggedTemplateLiteral(["Driving Obnoxiously"]))),
  Stealthily: template_string_$effect(AsdonMartin_templateObject6 || (AsdonMartin_templateObject6 = AsdonMartin_taggedTemplateLiteral(["Driving Stealthily"]))),
  Wastefully: template_string_$effect(AsdonMartin_templateObject7 || (AsdonMartin_templateObject7 = AsdonMartin_taggedTemplateLiteral(["Driving Wastefully"]))),
  Safely: template_string_$effect(AsdonMartin_templateObject8 || (AsdonMartin_templateObject8 = AsdonMartin_taggedTemplateLiteral(["Driving Safely"]))),
  Recklessly: template_string_$effect(AsdonMartin_templateObject9 || (AsdonMartin_templateObject9 = AsdonMartin_taggedTemplateLiteral(["Driving Recklessly"]))),
  Intimidatingly: template_string_$effect(AsdonMartin_templateObject10 || (AsdonMartin_templateObject10 = AsdonMartin_taggedTemplateLiteral(["Driving Intimidatingly"]))),
  Quickly: template_string_$effect(AsdonMartin_templateObject11 || (AsdonMartin_templateObject11 = AsdonMartin_taggedTemplateLiteral(["Driving Quickly"]))),
  Observantly: template_string_$effect(AsdonMartin_templateObject12 || (AsdonMartin_templateObject12 = AsdonMartin_taggedTemplateLiteral(["Driving Observantly"]))),
  Waterproofly: template_string_$effect(AsdonMartin_templateObject13 || (AsdonMartin_templateObject13 = AsdonMartin_taggedTemplateLiteral(["Driving Waterproofly"])))
};
/**
 * Attempt to drive with a particular style for a particular number of turns.
 *
 * @param style The driving style to use.
 * @param turns The number of turns to attempt to get.
 * @param preferInventory Whether we should preferentially value items currently in our inventory.
 * @returns Whether we have at least as many turns as requested of said driving style.
 */
function drive(style) {
  var turns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var preferInventory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!Object.values(Driving).includes(style)) return false;
  if (!installed()) return false;
  if ((0,external_kolmafia_namespaceObject.haveEffect)(style) >= turns) return true;
  var fuelNeeded = 37 * Math.ceil((turns - (0,external_kolmafia_namespaceObject.haveEffect)(style)) / 30);
  (preferInventory ? fillWithInventoryTo : fillTo)(fuelNeeded);
  while ((0,external_kolmafia_namespaceObject.getFuel)() >= 37 && (0,external_kolmafia_namespaceObject.haveEffect)(style) < turns) {
    (0,external_kolmafia_namespaceObject.cliExecute)("asdonmartin drive ".concat(style.name.replace("Driving ", "")));
  }
  return (0,external_kolmafia_namespaceObject.haveEffect)(style) >= turns;
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
  var item = instrument instanceof external_kolmafia_namespaceObject.Item ? instrument : external_kolmafia_namespaceObject.Item.get(instrument);
  if (!canPlay(instrument, acquire)) return false;
  if (acquire && !lib_have(item)) joinSection(item);
  var currentUsesRemaining = item.dailyusesleft;
  (0,external_kolmafia_namespaceObject.visitUrl)("inventory.php?pwd=".concat((0,external_kolmafia_namespaceObject.myHash)(), "&iid=").concat(item.id, "&action=aprilplay"), false);
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
  var item = instrument instanceof external_kolmafia_namespaceObject.Item ? instrument : external_kolmafia_namespaceObject.Item.get(instrument);
  if (!lib_have(item) && (!acquire || !canJoinSection())) return false;
  if (item.dailyusesleft <= 0) return false;
  return true;
}
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
      var items = Math.floor(utils_sum(itemDetails, "value"));
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
      return new Session(utils_sum(meat, f => f()), mySessionItemsWrapper(sessionOnly), (0,external_kolmafia_namespaceObject.totalTurnsPlayed)());
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
      var outliersValue = utils_sum(outlierItems, detail => detail.value);
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
var profits_templateObject, profits_templateObject2, profits_templateObject3, profits_templateObject4, profits_templateObject5, profits_templateObject6, profits_templateObject7, profits_templateObject8, profits_templateObject9, profits_templateObject10, profits_templateObject11, profits_templateObject12, profits_templateObject13, profits_templateObject14, profits_templateObject15, profits_templateObject16, profits_templateObject17, profits_templateObject18, profits_templateObject19, profits_templateObject20, profits_templateObject21, profits_templateObject22, profits_templateObject23, profits_templateObject24, profits_templateObject25, profits_templateObject26, profits_templateObject27, profits_templateObject28, profits_templateObject29, profits_templateObject30, profits_templateObject31, profits_templateObject32, profits_templateObject33, profits_templateObject34, profits_templateObject35, profits_templateObject36, profits_templateObject37, profits_templateObject38, profits_templateObject39, profits_templateObject40, profits_templateObject41, profits_templateObject42, profits_templateObject43, profits_templateObject44, profits_templateObject45, profits_templateObject46, profits_templateObject47, profits_templateObject48, profits_templateObject49, profits_templateObject50, profits_templateObject51, profits_templateObject52, profits_templateObject53, profits_templateObject54, profits_templateObject55, profits_templateObject56, profits_templateObject57, profits_templateObject58, profits_templateObject59, profits_templateObject60, profits_templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76;
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
var specialValueLookup = new Map([[template_string_$item(profits_templateObject || (profits_templateObject = profits_taggedTemplateLiteral(["Freddy Kruegerand"]))), currency.apply(void 0, profits_toConsumableArray(template_string_$items(profits_templateObject2 || (profits_templateObject2 = profits_taggedTemplateLiteral(["bottle of Bloodweiser, electric Kool-Aid, Dreadsylvanian skeleton key"])))))], [template_string_$item(profits_templateObject3 || (profits_templateObject3 = profits_taggedTemplateLiteral(["Beach Buck"]))), currency(template_string_$item(profits_templateObject4 || (profits_templateObject4 = profits_taggedTemplateLiteral(["one-day ticket to Spring Break Beach"]))))], [template_string_$item(profits_templateObject5 || (profits_templateObject5 = profits_taggedTemplateLiteral(["Coinspiracy"]))), currency.apply(void 0, profits_toConsumableArray(template_string_$items(profits_templateObject6 || (profits_templateObject6 = profits_taggedTemplateLiteral(["Merc Core deployment orders, karma shawarma"])))))], [template_string_$item(profits_templateObject7 || (profits_templateObject7 = profits_taggedTemplateLiteral(["FunFunds\u2122"]))), currency(template_string_$item(profits_templateObject8 || (profits_templateObject8 = profits_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"]))))], [template_string_$item(profits_templateObject9 || (profits_templateObject9 = profits_taggedTemplateLiteral(["Volcoino"]))), currency(template_string_$item(profits_templateObject10 || (profits_templateObject10 = profits_taggedTemplateLiteral(["one-day ticket to That 70s Volcano"]))))], [template_string_$item(profits_templateObject11 || (profits_templateObject11 = profits_taggedTemplateLiteral(["Wal-Mart gift certificate"]))), currency(template_string_$item(profits_templateObject12 || (profits_templateObject12 = profits_taggedTemplateLiteral(["one-day ticket to The Glaciest"]))))], [template_string_$item(profits_templateObject13 || (profits_templateObject13 = profits_taggedTemplateLiteral(["Rubee\u2122"]))), currency(template_string_$item(profits_templateObject14 || (profits_templateObject14 = profits_taggedTemplateLiteral(["FantasyRealm guest pass"]))))], [template_string_$item(profits_templateObject15 || (profits_templateObject15 = profits_taggedTemplateLiteral(["Guzzlrbuck"]))), currency(template_string_$item(profits_templateObject16 || (profits_templateObject16 = profits_taggedTemplateLiteral(["Never Don't Stop Not Striving"]))))]].concat(profits_toConsumableArray(complexCandy()), [[template_string_$item(profits_templateObject17 || (profits_templateObject17 = profits_taggedTemplateLiteral(["Merc Core deployment orders"]))), () => garboValue(template_string_$item(profits_templateObject18 || (profits_templateObject18 = profits_taggedTemplateLiteral(["one-day ticket to Conspiracy Island"]))))], [template_string_$item(profits_templateObject19 || (profits_templateObject19 = profits_taggedTemplateLiteral(["free-range mushroom"]))), () => 3 * Math.max(garboValue(template_string_$item(profits_templateObject20 || (profits_templateObject20 = profits_taggedTemplateLiteral(["mushroom tea"])))) - garboValue(template_string_$item(profits_templateObject21 || (profits_templateObject21 = profits_taggedTemplateLiteral(["soda water"])))), garboValue(template_string_$item(profits_templateObject22 || (profits_templateObject22 = profits_taggedTemplateLiteral(["mushroom whiskey"])))) - garboValue(template_string_$item(profits_templateObject23 || (profits_templateObject23 = profits_taggedTemplateLiteral(["fermenting powder"])))), garboValue(template_string_$item(profits_templateObject24 || (profits_templateObject24 = profits_taggedTemplateLiteral(["mushroom filet"])))))], [template_string_$item(profits_templateObject25 || (profits_templateObject25 = profits_taggedTemplateLiteral(["little firkin"]))), () => garboAverageValue.apply(void 0, profits_toConsumableArray(template_string_$items(profits_templateObject26 || (profits_templateObject26 = profits_taggedTemplateLiteral(["martini, screwdriver, strawberry daiquiri, margarita, vodka martini, tequila sunrise, bottle of Amontillado, barrel-aged martini, barrel gun"])))))], [template_string_$item(profits_templateObject27 || (profits_templateObject27 = profits_taggedTemplateLiteral(["normal barrel"]))), () => garboAverageValue.apply(void 0, profits_toConsumableArray(template_string_$items(profits_templateObject28 || (profits_templateObject28 = profits_taggedTemplateLiteral(["a little sump'm sump'm, pink pony, rockin' wagon, roll in the hay, slip 'n' slide, slap and tickle"])))))], [template_string_$item(profits_templateObject29 || (profits_templateObject29 = profits_taggedTemplateLiteral(["big tun"]))), () => garboAverageValue.apply(void 0, profits_toConsumableArray(template_string_$items(profits_templateObject30 || (profits_templateObject30 = profits_taggedTemplateLiteral(["gibson, gin and tonic, mimosette, tequila sunset, vodka and tonic, zmobie"])))))], [template_string_$item(profits_templateObject31 || (profits_templateObject31 = profits_taggedTemplateLiteral(["weathered barrel"]))), () => garboAverageValue.apply(void 0, profits_toConsumableArray(template_string_$items(profits_templateObject32 || (profits_templateObject32 = profits_taggedTemplateLiteral(["bean burrito, enchanted bean burrito, jumping bean burrito"])))))], [template_string_$item(profits_templateObject33 || (profits_templateObject33 = profits_taggedTemplateLiteral(["dusty barrel"]))), () => garboAverageValue.apply(void 0, profits_toConsumableArray(template_string_$items(profits_templateObject34 || (profits_templateObject34 = profits_taggedTemplateLiteral(["spicy bean burrito, spicy enchanted bean burrito, spicy jumping bean burrito"])))))], [template_string_$item(profits_templateObject35 || (profits_templateObject35 = profits_taggedTemplateLiteral(["disintegrating barrel"]))), () => garboAverageValue.apply(void 0, profits_toConsumableArray(template_string_$items(profits_templateObject36 || (profits_templateObject36 = profits_taggedTemplateLiteral(["insanely spicy bean burrito, insanely spicy enchanted bean burrito, insanely spicy jumping bean burrito"])))))], [template_string_$item(profits_templateObject37 || (profits_templateObject37 = profits_taggedTemplateLiteral(["moist barrel"]))), () => garboAverageValue.apply(void 0, profits_toConsumableArray(template_string_$items(profits_templateObject38 || (profits_templateObject38 = profits_taggedTemplateLiteral(["cast, concentrated magicalness pill, enchanted barbell, giant moxie weed, Mountain Stream soda"])))))], [template_string_$item(profits_templateObject39 || (profits_templateObject39 = profits_taggedTemplateLiteral(["rotting barrel"]))), () => garboAverageValue.apply(void 0, profits_toConsumableArray(template_string_$items(profits_templateObject40 || (profits_templateObject40 = profits_taggedTemplateLiteral(["Doc Galaktik's Ailment Ointment, extra-strength strongness elixir, jug-o-magicalness, Marquis de Poivre soda, suntan lotion of moxiousness"])))))], [template_string_$item(profits_templateObject41 || (profits_templateObject41 = profits_taggedTemplateLiteral(["mouldering barrel"]))), () => garboAverageValue.apply(void 0, profits_toConsumableArray(template_string_$items(profits_templateObject42 || (profits_templateObject42 = profits_taggedTemplateLiteral(["creepy ginger ale, haunted battery, scroll of drastic healing, synthetic marrow, the funk"])))))], [template_string_$item(profits_templateObject43 || (profits_templateObject43 = profits_taggedTemplateLiteral(["barnacled barrel"]))), () => garboAverageValue.apply(void 0, profits_toConsumableArray(template_string_$items(profits_templateObject44 || (profits_templateObject44 = profits_taggedTemplateLiteral(["Alewife\u2122 Ale, bazookafish bubble gum, beefy fish meat, eel battery, glistening fish meat, ink bladder, pufferfish spine, shark cartilage, slick fish meat, slug of rum, slug of shochu, slug of vodka, temporary teardrop tattoo"])))))], [template_string_$item(profits_templateObject45 || (profits_templateObject45 = profits_taggedTemplateLiteral(["fake hand"]))), () => 50000], [template_string_$item(profits_templateObject46 || (profits_templateObject46 = profits_taggedTemplateLiteral(["potted tea tree"]))), () => 0]]));
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
  var itemMappings = new Map([].concat(profits_toConsumableArray(foldable(template_string_$item(profits_templateObject47 || (profits_templateObject47 = profits_taggedTemplateLiteral(["liar's pants"]))))), profits_toConsumableArray(foldable(template_string_$item(profits_templateObject48 || (profits_templateObject48 = profits_taggedTemplateLiteral(["ice pick"]))))), profits_toConsumableArray(manyToOne(template_string_$item(profits_templateObject49 || (profits_templateObject49 = profits_taggedTemplateLiteral(["Spooky Putty sheet"]))), [template_string_$item(profits_templateObject50 || (profits_templateObject50 = profits_taggedTemplateLiteral(["Spooky Putty monster"])))].concat(profits_toConsumableArray(getFoldGroup(template_string_$item(profits_templateObject51 || (profits_templateObject51 = profits_taggedTemplateLiteral(["Spooky Putty sheet"])))))))), profits_toConsumableArray(foldable(template_string_$item(profits_templateObject52 || (profits_templateObject52 = profits_taggedTemplateLiteral(["stinky cheese sword"]))))), profits_toConsumableArray(foldable(template_string_$item(profits_templateObject53 || (profits_templateObject53 = profits_taggedTemplateLiteral(["naughty paper shuriken"]))))), profits_toConsumableArray(foldable(template_string_$item(profits_templateObject54 || (profits_templateObject54 = profits_taggedTemplateLiteral(["Loathing Legion knife"]))))), profits_toConsumableArray(foldable(template_string_$item(profits_templateObject55 || (profits_templateObject55 = profits_taggedTemplateLiteral(["deceased crimbo tree"]))))), profits_toConsumableArray(foldable(template_string_$item(profits_templateObject56 || (profits_templateObject56 = profits_taggedTemplateLiteral(["makeshift turban"]))))), profits_toConsumableArray(foldable(template_string_$item(profits_templateObject57 || (profits_templateObject57 = profits_taggedTemplateLiteral(["turtle wax shield"]))))), profits_toConsumableArray(foldable(template_string_$item(profits_templateObject58 || (profits_templateObject58 = profits_taggedTemplateLiteral(["metallic foil bow"]))))), profits_toConsumableArray(foldable(template_string_$item(profits_templateObject59 || (profits_templateObject59 = profits_taggedTemplateLiteral(["ironic moustache"]))))), profits_toConsumableArray(foldable(template_string_$item(profits_templateObject60 || (profits_templateObject60 = profits_taggedTemplateLiteral(["bugged balaclava"]))))), profits_toConsumableArray(foldable(template_string_$item(profits_templateObject61 || (profits_templateObject61 = profits_taggedTemplateLiteral(["toggle switch (Bartend)"]))))), profits_toConsumableArray(foldable(template_string_$item(_templateObject62 || (_templateObject62 = profits_taggedTemplateLiteral(["mushroom cap"]))))), profits_toConsumableArray(manyToOne(template_string_$item(_templateObject63 || (_templateObject63 = profits_taggedTemplateLiteral(["can of Rain-Doh"]))), template_string_$items(_templateObject64 || (_templateObject64 = profits_taggedTemplateLiteral(["empty Rain-Doh can"]))))), profits_toConsumableArray(manyToOne(template_string_$item(_templateObject65 || (_templateObject65 = profits_taggedTemplateLiteral(["meteorite fragment"]))), template_string_$items(_templateObject66 || (_templateObject66 = profits_taggedTemplateLiteral(["meteorite earring, meteorite necklace, meteorite ring"]))))), profits_toConsumableArray(manyToOne(template_string_$item(_templateObject67 || (_templateObject67 = profits_taggedTemplateLiteral(["Sneaky Pete's leather jacket"]))), template_string_$items(_templateObject68 || (_templateObject68 = profits_taggedTemplateLiteral(["Sneaky Pete's leather jacket (collar popped)"]))))), profits_toConsumableArray(manyToOne(template_string_$item(_templateObject69 || (_templateObject69 = profits_taggedTemplateLiteral(["Boris's Helm"]))), template_string_$items(_templateObject70 || (_templateObject70 = profits_taggedTemplateLiteral(["Boris's Helm (askew)"]))))), profits_toConsumableArray(manyToOne(template_string_$item(_templateObject71 || (_templateObject71 = profits_taggedTemplateLiteral(["Jarlsberg's pan"]))), template_string_$items(_templateObject72 || (_templateObject72 = profits_taggedTemplateLiteral(["Jarlsberg's pan (Cosmic portal mode)"]))))), profits_toConsumableArray(manyToOne(template_string_$item(_templateObject73 || (_templateObject73 = profits_taggedTemplateLiteral(["tiny plastic sword"]))), template_string_$items(_templateObject74 || (_templateObject74 = profits_taggedTemplateLiteral(["grogtini, bodyslam, dirty martini, vesper, cherry bomb, sangria del diablo"]))))), profits_toConsumableArray(manyToOne(template_string_$item(_templateObject75 || (_templateObject75 = profits_taggedTemplateLiteral(["earthenware muffin tin"]))), template_string_$items(_templateObject76 || (_templateObject76 = profits_taggedTemplateLiteral(["blueberry muffin, bran muffin, chocolate chip muffin"])))))));
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
var utils_templateObject, utils_templateObject2, utils_templateObject3, utils_templateObject4, utils_templateObject5, utils_templateObject6, utils_templateObject7, utils_templateObject8, utils_templateObject9, utils_templateObject10, utils_templateObject11, utils_templateObject12, utils_templateObject13, utils_templateObject14, utils_templateObject15, utils_templateObject16, utils_templateObject17, utils_templateObject18, utils_templateObject19, utils_templateObject20, utils_templateObject21, utils_templateObject22, utils_templateObject23, utils_templateObject24, utils_templateObject25, utils_templateObject26, utils_templateObject27, utils_templateObject28, utils_templateObject29, utils_templateObject30, utils_templateObject31, utils_templateObject32, utils_templateObject33, utils_templateObject34, utils_templateObject35, utils_templateObject36, utils_templateObject37, utils_templateObject38, utils_templateObject39, utils_templateObject40, utils_templateObject41, utils_templateObject42, utils_templateObject43, utils_templateObject44, utils_templateObject45;
function utils_slicedToArray(arr, i) { return utils_arrayWithHoles(arr) || utils_iterableToArrayLimit(arr, i) || tasks_utils_unsupportedIterableToArray(arr, i) || utils_nonIterableRest(); }
function utils_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function utils_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function utils_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function tasks_utils_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = tasks_utils_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
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
  return "-ml, ".concat(minusMLItems.filter(it => lib_have(it)).map(it => "-equip ".concat(it.name)).join(", "));
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
function canDiet() {
  return (0,external_kolmafia_namespaceObject.myFullness)() < (0,external_kolmafia_namespaceObject.fullnessLimit)() || (0,external_kolmafia_namespaceObject.mySpleenUse)() < (0,external_kolmafia_namespaceObject.spleenLimit)() || (0,external_kolmafia_namespaceObject.myInebriety)() < (0,external_kolmafia_namespaceObject.inebrietyLimit)() || lib_have(template_string_$item(utils_templateObject14 || (utils_templateObject14 = utils_taggedTemplateLiteral(["distention pill"])))) && !property_get("_distentionPillUsed") || args.smol || lib_have(template_string_$item(utils_templateObject15 || (utils_templateObject15 = utils_taggedTemplateLiteral(["synthetic dog hair pill"])))) && !property_get("_syntheticDogHairPillUsed") || lib_have(template_string_$item(utils_templateObject16 || (utils_templateObject16 = utils_taggedTemplateLiteral(["designer sweatpants"])))) && property_get("_sweatOutSomeBoozeUsed") < 3 && property_get("sweat") >= 25 || lib_have(template_string_$item(utils_templateObject17 || (utils_templateObject17 = utils_taggedTemplateLiteral(["mime army shotglass"])))) && !property_get("_mimeArmyShotglassUsed") || property_get("currentMojoFilters") < 3 && (0,external_kolmafia_namespaceObject.mallPrice)(template_string_$item(utils_templateObject18 || (utils_templateObject18 = utils_taggedTemplateLiteral(["mojo filter"])))) + (0,external_kolmafia_namespaceObject.mallPrice)(template_string_$item(utils_templateObject19 || (utils_templateObject19 = utils_taggedTemplateLiteral(["transdermal smoke patch"])))) < 2.5 * property_get("valueOfAdventure");
}
function stooperDrunk() {
  return (0,external_kolmafia_namespaceObject.myInebriety)() > (0,external_kolmafia_namespaceObject.inebrietyLimit)() || (0,external_kolmafia_namespaceObject.myInebriety)() === (0,external_kolmafia_namespaceObject.inebrietyLimit)() && (0,external_kolmafia_namespaceObject.myFamiliar)() === template_string_$familiar(utils_templateObject20 || (utils_templateObject20 = utils_taggedTemplateLiteral(["Stooper"])));
}
function totallyDrunk() {
  return lib_have(template_string_$familiar(utils_templateObject21 || (utils_templateObject21 = utils_taggedTemplateLiteral(["Stooper"])))) && (0,external_kolmafia_namespaceObject.myFamiliar)() !== template_string_$familiar(utils_templateObject22 || (utils_templateObject22 = utils_taggedTemplateLiteral(["Stooper"]))) ? (0,external_kolmafia_namespaceObject.myInebriety)() > (0,external_kolmafia_namespaceObject.inebrietyLimit)() + 1 : (0,external_kolmafia_namespaceObject.myInebriety)() > (0,external_kolmafia_namespaceObject.inebrietyLimit)();
}
function doneAdventuring() {
  return !canDiet() && (0,external_kolmafia_namespaceObject.myAdventures)() === 0 || stooperDrunk();
}
var gardens = template_string_$items(utils_templateObject23 || (utils_templateObject23 = utils_taggedTemplateLiteral(["packet of pumpkin seeds, Peppermint Pip Packet, packet of dragon's teeth, packet of beer seeds, packet of winter seeds, packet of thanksgarden seeds, packet of tall grass seeds, packet of mushroom spores, packet of rock seeds"])));
function getGarden() {
  return gardens.find(it => it.name in (0,external_kolmafia_namespaceObject.getCampground)()) || template_string_$item(utils_templateObject24 || (utils_templateObject24 = utils_taggedTemplateLiteral(["none"])));
}
var banishes;
function nextUnusedBanishItem() {
  if (!banishes) banishes = $items(utils_templateObject25 || (utils_templateObject25 = utils_taggedTemplateLiteral(["human musk, tennis ball, Louder Than Bomb, divine champagne popper"]))).sort((a, b) => mallPrice(a) - mallPrice(b)); //sorted from cheapest to most expensive
  return banishes.find(it => !getBanishedMonsters().get(it)) || $item(utils_templateObject26 || (utils_templateObject26 = utils_taggedTemplateLiteral(["none"]))); //return the cheapest free banish not currently in use
}

function chewOrWish(it, ef) {
  if (mallPrice(it) + mallPrice($item(utils_templateObject27 || (utils_templateObject27 = utils_taggedTemplateLiteral(["mojo filter"])))) < mallPrice($item(utils_templateObject28 || (utils_templateObject28 = utils_taggedTemplateLiteral(["pocket wish"]))))) {
    if (mySpleenUse() === spleenLimit()) use(1, $item(utils_templateObject29 || (utils_templateObject29 = utils_taggedTemplateLiteral(["mojo filter"]))));
    chew(it);
  } else {
    retrieveItem($item(utils_templateObject30 || (utils_templateObject30 = utils_taggedTemplateLiteral(["pocket wish"]))));
    cliExecute("genie effect ".concat(ef.name));
  }
}
function isGoodGarboScript(scr) {
  // Returns true if scr includes "garbo", and doesn't include a semicolon
  return scr.includes("garbo") && !scr.includes(";");
}
function backstageItemsDone() {
  return (lib_have(template_string_$item(utils_templateObject31 || (utils_templateObject31 = utils_taggedTemplateLiteral(["giant marshmallow"])))) ? 1 : 0) + (lib_have(template_string_$item(utils_templateObject32 || (utils_templateObject32 = utils_taggedTemplateLiteral(["beer-scented teddy bear"])))) ? 1 : 0) + (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(utils_templateObject33 || (utils_templateObject33 = utils_taggedTemplateLiteral(["gin-soaked blotter paper"])))) >= 2 && (lib_have(template_string_$item(utils_templateObject34 || (utils_templateObject34 = utils_taggedTemplateLiteral(["booze-soaked cherry"])))) ? 1 : 0) + (lib_have(template_string_$item(utils_templateObject35 || (utils_templateObject35 = utils_taggedTemplateLiteral(["comfy pillow"])))) ? 1 : 0) + (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(utils_templateObject36 || (utils_templateObject36 = utils_taggedTemplateLiteral(["sponge cake"])))) >= 2;
}
var commaValue = new Map([[template_string_$item(utils_templateObject37 || (utils_templateObject37 = utils_taggedTemplateLiteral(["stomp box"]))), (0,external_kolmafia_namespaceObject.mallPrice)(template_string_$item(utils_templateObject38 || (utils_templateObject38 = utils_taggedTemplateLiteral(["stomp box"]))))], [template_string_$item(utils_templateObject39 || (utils_templateObject39 = utils_taggedTemplateLiteral(["aquaviolet jub-jub bird"]))), (0,external_kolmafia_namespaceObject.mallPrice)(template_string_$item(utils_templateObject40 || (utils_templateObject40 = utils_taggedTemplateLiteral(["aquaviolet jub-jub bird"]))))], [template_string_$item(utils_templateObject41 || (utils_templateObject41 = utils_taggedTemplateLiteral(["charpuce jub-jub bird"]))), (0,external_kolmafia_namespaceObject.mallPrice)(template_string_$item(utils_templateObject42 || (utils_templateObject42 = utils_taggedTemplateLiteral(["charpuce jub-jub bird"]))))], [template_string_$item(utils_templateObject43 || (utils_templateObject43 = utils_taggedTemplateLiteral(["crimsilion jub-jub bird"]))), (0,external_kolmafia_namespaceObject.mallPrice)(template_string_$item(utils_templateObject44 || (utils_templateObject44 = utils_taggedTemplateLiteral(["crimsilion jub-jub bird"]))))]]);
function findCheapRun() {
  var minItem = template_string_$item(utils_templateObject45 || (utils_templateObject45 = utils_taggedTemplateLiteral(["stomp box"])));
  var minValue = -1;
  var _iterator = tasks_utils_createForOfIteratorHelper(commaValue),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = utils_slicedToArray(_step.value, 2),
        item = _step$value[0],
        value = _step$value[1];
      if (value < minValue) {
        minValue = value;
        minItem = item;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return minItem;
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
    setting: ""
  }),
  smol: Args.flag({
    help: "Ascend into and run smol.",
    setting: ""
  }),
  casual: Args.flag({
    help: "Ascend into and run casual.",
    setting: ""
  }),
  robot: Args.flag({
    help: "Ascend into and run You, Robot.",
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
  itemcleanup: Args.string({
    help: "The script that will be used to mallsale items after a run",
    default: ""
  }),
  halloween: Args.flag({
    help: "Should we warn you when tomorrow is Halloween so you can prepare a steel organ?",
    default: true
  })
});
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
;// CONCATENATED MODULE: ./src/tasks/csrunleg.ts
var csrunleg_templateObject, csrunleg_templateObject2, csrunleg_templateObject3, csrunleg_templateObject4, csrunleg_templateObject5, csrunleg_templateObject6, csrunleg_templateObject7, csrunleg_templateObject8, csrunleg_templateObject9, csrunleg_templateObject10, csrunleg_templateObject11, csrunleg_templateObject12, csrunleg_templateObject13, csrunleg_templateObject14, csrunleg_templateObject15, csrunleg_templateObject16, csrunleg_templateObject17, csrunleg_templateObject18, csrunleg_templateObject19, csrunleg_templateObject20, csrunleg_templateObject21, csrunleg_templateObject22, csrunleg_templateObject23, csrunleg_templateObject24, csrunleg_templateObject25, csrunleg_templateObject26, csrunleg_templateObject27, csrunleg_templateObject28, csrunleg_templateObject29, csrunleg_templateObject30, csrunleg_templateObject31, csrunleg_templateObject32, csrunleg_templateObject33, csrunleg_templateObject34, csrunleg_templateObject35, csrunleg_templateObject36, csrunleg_templateObject37, csrunleg_templateObject38, csrunleg_templateObject39, csrunleg_templateObject40, csrunleg_templateObject41, csrunleg_templateObject42, csrunleg_templateObject43, csrunleg_templateObject44, csrunleg_templateObject45, csrunleg_templateObject46, csrunleg_templateObject47, csrunleg_templateObject48, csrunleg_templateObject49, csrunleg_templateObject50, csrunleg_templateObject51, csrunleg_templateObject52, csrunleg_templateObject53, csrunleg_templateObject54, csrunleg_templateObject55, csrunleg_templateObject56, csrunleg_templateObject57, csrunleg_templateObject58, csrunleg_templateObject59, csrunleg_templateObject60, csrunleg_templateObject61, csrunleg_templateObject62, csrunleg_templateObject63, csrunleg_templateObject64, csrunleg_templateObject65, csrunleg_templateObject66, csrunleg_templateObject67, csrunleg_templateObject68, csrunleg_templateObject69, csrunleg_templateObject70, csrunleg_templateObject71, csrunleg_templateObject72, csrunleg_templateObject73, csrunleg_templateObject74, csrunleg_templateObject75, csrunleg_templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87;
function csrunleg_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var pajamas = false;
var smoke = 1;
var offhandWorth = lib_have(template_string_$familiar(csrunleg_templateObject || (csrunleg_templateObject = csrunleg_taggedTemplateLiteral(["Left-Hand Man"]))));
var garboDone = false;
function CSQuests() {
  return [{
    name: "Community Service Run",
    completed: () => getCurrentLeg() !== Leg.Run || property_get("kingLiberated"),
    tasks: [{
      name: "Whitelist VIP Clan",
      completed: () => !args.clan || (0,external_kolmafia_namespaceObject.getClanName)().toLowerCase() === args.clan.toLowerCase(),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("/whitelist ".concat(args.clan))
    }, {
      name: "Prep Fireworks Shop",
      completed: () => !lib_have(template_string_$item(csrunleg_templateObject2 || (csrunleg_templateObject2 = csrunleg_taggedTemplateLiteral(["Clan VIP Lounge key"])))) || property_get("_goorboFireworksPrepped", false),
      do: () => {
        (0,external_kolmafia_namespaceObject.visitUrl)("clan_viplounge.php?action=fwshop&whichfloor=2");
        _set("_goorboFireworksPrepped", true);
      },
      tracking: "Run"
    }, {
      name: "Run",
      completed: () => property_get("kingLiberated"),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)(args.csscript),
      tracking: "Run"
    }]
  }, {
    name: "Post-Community Service Aftercore",
    ready: () => getCurrentLeg() === Leg.Run && property_get("kingLiberated", false),
    completed: () => totallyDrunk() && pajamas,
    tasks: [{
      name: "Pull All",
      completed: () => property_get("lastEmptiedStorage") === (0,external_kolmafia_namespaceObject.myAscensions)(),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("pull all; refresh all")
    }, {
      name: "Ensure prefs reset",
      completed: () => !property_get("_folgerInitialConfig", false),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("set _folgerInitialConfig = false")
    }, {
      name: "But dad I don't want to feel lost",
      completed: () => !lib_have(template_string_$effect(csrunleg_templateObject3 || (csrunleg_templateObject3 = csrunleg_taggedTemplateLiteral(["Feeling Lost"])))),
      do: () => uneffect(template_string_$effect(csrunleg_templateObject4 || (csrunleg_templateObject4 = csrunleg_taggedTemplateLiteral(["Feeling Lost"]))))
    }, {
      name: "Clear citizen",
      completed: () => property_get("_citizenZone", "") !== "Madness Bakery",
      do: () => {
        uneffect(template_string_$effect(csrunleg_templateObject5 || (csrunleg_templateObject5 = csrunleg_taggedTemplateLiteral(["Citizen of a Zone"]))));
        (0,external_kolmafia_namespaceObject.cliExecute)("set _citizenZone = \"\"");
      }
    }, {
      name: "Use Mayam",
      // eslint-disable-next-line libram/verify-constants
      ready: () => lib_have(template_string_$item(csrunleg_templateObject6 || (csrunleg_templateObject6 = csrunleg_taggedTemplateLiteral(["Mayam Calendar"])))),
      completed: () => ["yam4", "explosion", "clock"].every(sym => property_get("_mayamSymbolsUsed").includes(sym)),
      do: () => {
        if (template_string_$familiar(csrunleg_templateObject7 || (csrunleg_templateObject7 = csrunleg_taggedTemplateLiteral(["Chest Mimic"]))).experience < 450) (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(csrunleg_templateObject8 || (csrunleg_templateObject8 = csrunleg_taggedTemplateLiteral(["Chest Mimic"]))));else (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(csrunleg_templateObject9 || (csrunleg_templateObject9 = csrunleg_taggedTemplateLiteral(["Grey Goose"]))));
        (0,external_kolmafia_namespaceObject.cliExecute)("mayam rings vessel yam cheese explosion");
        (0,external_kolmafia_namespaceObject.cliExecute)("mayam rings yam meat eyepatch yam");
        (0,external_kolmafia_namespaceObject.cliExecute)("mayam rings fur bottle wall clock");
      }
    }, {
      name: "Wardrobe-o-matic",
      ready: () => (0,external_kolmafia_namespaceObject.myLevel)() >= 15 && lib_have(template_string_$item(csrunleg_templateObject10 || (csrunleg_templateObject10 = csrunleg_taggedTemplateLiteral(["wardrobe-o-matic"])))),
      completed: () => property_get("_wardrobeUsed", false),
      do: () => {
        (0,external_kolmafia_namespaceObject.use)(template_string_$item(csrunleg_templateObject11 || (csrunleg_templateObject11 = csrunleg_taggedTemplateLiteral(["wardrobe-o-matic"]))));
        (0,external_kolmafia_namespaceObject.cliExecute)("set _wardrobeUsed = true");
      },
      limit: {
        tries: 1
      }
    }, {
      name: "Smoke em if you got em",
      completed: () => !lib_have(template_string_$item(csrunleg_templateObject12 || (csrunleg_templateObject12 = csrunleg_taggedTemplateLiteral(["stick of firewood"])))) || smoke >= 10,
      do: () => {
        if ((0,external_kolmafia_namespaceObject.mallPrice)(template_string_$item(csrunleg_templateObject13 || (csrunleg_templateObject13 = csrunleg_taggedTemplateLiteral(["stick of firewood"])))) <= 200) (0,external_kolmafia_namespaceObject.buy)(template_string_$item(csrunleg_templateObject14 || (csrunleg_templateObject14 = csrunleg_taggedTemplateLiteral(["stick of firewood"]))), 10);
        while (lib_have(template_string_$item(csrunleg_templateObject15 || (csrunleg_templateObject15 = csrunleg_taggedTemplateLiteral(["stick of firewood"]))))) {
          (0,external_kolmafia_namespaceObject.setProperty)("choiceAdventure1394", "1&message=".concat(smoke, " Thanks Seraphiii for writing Candywrapper!"));
          (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(csrunleg_templateObject16 || (csrunleg_templateObject16 = csrunleg_taggedTemplateLiteral(["campfire smoke"]))));
          (0,external_kolmafia_namespaceObject.print)("Smoked ".concat(smoke, " firewoods!"));
          smoke = smoke + 1;
        }
        if ((0,external_kolmafia_namespaceObject.mallPrice)(template_string_$item(csrunleg_templateObject17 || (csrunleg_templateObject17 = csrunleg_taggedTemplateLiteral(["stick of firewood"])))) <= 200) (0,external_kolmafia_namespaceObject.buy)(template_string_$item(csrunleg_templateObject18 || (csrunleg_templateObject18 = csrunleg_taggedTemplateLiteral(["stick of firewood"]))), 1);
      }
    }, {
      name: "Acquire Carpe",
      completed: () => !args.carpe || lib_have(template_string_$item(csrunleg_templateObject19 || (csrunleg_templateObject19 = csrunleg_taggedTemplateLiteral(["carpe"])))),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("acquire carpe")
    }, {
      name: "Unlock Desert",
      completed: () => lib_have(template_string_$item(csrunleg_templateObject20 || (csrunleg_templateObject20 = csrunleg_taggedTemplateLiteral(["bitchin' meatcar"])))),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("acquire bitchin")
    }, {
      name: "Drink Pre-Tune",
      ready: () => (0,external_kolmafia_namespaceObject.mySign)().toLowerCase() === "blender" && (0,external_kolmafia_namespaceObject.myLevel)() >= 7 && lib_have(template_string_$item(csrunleg_templateObject21 || (csrunleg_templateObject21 = csrunleg_taggedTemplateLiteral(["mime army shotglass"])))) && (lib_have(template_string_$item(csrunleg_templateObject22 || (csrunleg_templateObject22 = csrunleg_taggedTemplateLiteral(["astral pilsner"])))) || lib_have(template_string_$item(csrunleg_templateObject23 || (csrunleg_templateObject23 = csrunleg_taggedTemplateLiteral(["astral six-pack"]))))),
      completed: () => property_get("_mimeArmyShotglassUsed") || !lib_have(template_string_$item(csrunleg_templateObject24 || (csrunleg_templateObject24 = csrunleg_taggedTemplateLiteral(["hewn moon-rune spoon"])))) || property_get("moonTuned"),
      prepare: () => {
        if (lib_have(template_string_$item(csrunleg_templateObject25 || (csrunleg_templateObject25 = csrunleg_taggedTemplateLiteral(["astral six-pack"]))))) (0,external_kolmafia_namespaceObject.use)(template_string_$item(csrunleg_templateObject26 || (csrunleg_templateObject26 = csrunleg_taggedTemplateLiteral(["astral six-pack"]))));
      },
      do: () => (0,external_kolmafia_namespaceObject.drink)(1, template_string_$item(csrunleg_templateObject27 || (csrunleg_templateObject27 = csrunleg_taggedTemplateLiteral(["astral pilsner"]))))
    }, {
      name: "Moon Spoon",
      completed: () => !lib_have(template_string_$item(csrunleg_templateObject28 || (csrunleg_templateObject28 = csrunleg_taggedTemplateLiteral(["hewn moon-rune spoon"])))) || property_get("moonTuned") || (0,external_kolmafia_namespaceObject.mySign)().toLowerCase() === "wombat",
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("spoon wombat")
    }, {
      name: "Drive Observantly",
      completed: () => (0,external_kolmafia_namespaceObject.getWorkshed)() !== template_string_$item(csrunleg_templateObject29 || (csrunleg_templateObject29 = csrunleg_taggedTemplateLiteral(["Asdon Martin keyfob (on ring)"]))) || (0,external_kolmafia_namespaceObject.haveEffect)(template_string_$effect(csrunleg_templateObject30 || (csrunleg_templateObject30 = csrunleg_taggedTemplateLiteral(["Driving Observantly"])))) >= (totallyDrunk() || !lib_have(template_string_$item(csrunleg_templateObject31 || (csrunleg_templateObject31 = csrunleg_taggedTemplateLiteral(["Drunkula's wineglass"])))) ? (0,external_kolmafia_namespaceObject.myAdventures)() : (0,external_kolmafia_namespaceObject.myAdventures)() + 60),
      do: () => drive(template_string_$effect(csrunleg_templateObject32 || (csrunleg_templateObject32 = csrunleg_taggedTemplateLiteral(["Driving Observantly"]))), totallyDrunk() || !lib_have(template_string_$item(csrunleg_templateObject33 || (csrunleg_templateObject33 = csrunleg_taggedTemplateLiteral(["Drunkula's wineglass"])))) ? (0,external_kolmafia_namespaceObject.myAdventures)() : (0,external_kolmafia_namespaceObject.myAdventures)() + 60, false),
      limit: {
        tries: 5
      }
    }, {
      name: "Breakfast",
      completed: () => property_get("breakfastCompleted"),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("breakfast")
    }, {
      name: "Garbo",
      ready: () => !(0,external_kolmafia_namespaceObject.holiday)().includes("Halloween"),
      completed: () => (0,external_kolmafia_namespaceObject.myAdventures)() === 0 && !canDiet() || stooperDrunk(),
      prepare: () => uneffect(template_string_$effect(csrunleg_templateObject34 || (csrunleg_templateObject34 = csrunleg_taggedTemplateLiteral(["Beaten Up"])))),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)(args.garbo),
      post: () => $effects(csrunleg_templateObject35 || (csrunleg_templateObject35 = csrunleg_taggedTemplateLiteral(["Power Ballad of the Arrowsmith, Stevedave's Shanty of Superiority, The Moxious Madrigal, The Magical Mojomuscular Melody, Aloysius' Antiphon of Aptitude, Ur-Kel's Aria of Annoyance"]))).filter(ef => lib_have(ef)).forEach(ef => uneffect(ef)),
      clear: "all",
      tracking: "Garbo"
    }, {
      name: "CONSUME ALL",
      ready: () => (0,external_kolmafia_namespaceObject.holiday)().includes("Halloween"),
      completed: () => (0,external_kolmafia_namespaceObject.myFullness)() >= (0,external_kolmafia_namespaceObject.fullnessLimit)() && (0,external_kolmafia_namespaceObject.mySpleenUse)() >= (0,external_kolmafia_namespaceObject.spleenLimit)() && (0,external_kolmafia_namespaceObject.myInebriety)() >= (0,external_kolmafia_namespaceObject.inebrietyLimit)(),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("consume ALL")
    }, {
      name: "Garbo Nobarf",
      ready: () => (0,external_kolmafia_namespaceObject.holiday)().includes("Halloween"),
      completed: () => garboDone,
      do: () => {
        (0,external_kolmafia_namespaceObject.cliExecute)("".concat(args.garbo, " nodiet nobarf target=\"witchess knight\""));
        garboDone = true;
      }
    }, {
      name: "Garboween",
      ready: () => (0,external_kolmafia_namespaceObject.holiday)().includes("Halloween"),
      completed: () => Math.floor((0,external_kolmafia_namespaceObject.myAdventures)() / 5) < 1,
      prepare: () => uneffect(template_string_$effect(csrunleg_templateObject36 || (csrunleg_templateObject36 = csrunleg_taggedTemplateLiteral(["Beaten Up"])))),
      do: () => {
        if (lib_have(template_string_$familiar(csrunleg_templateObject37 || (csrunleg_templateObject37 = csrunleg_taggedTemplateLiteral(["Trick-or-Treating Tot"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("familiar Trick-or-Treating Tot");else if (lib_have(template_string_$familiar(csrunleg_templateObject38 || (csrunleg_templateObject38 = csrunleg_taggedTemplateLiteral(["Red-Nosed Snapper"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("familiar snapper");
        (0,external_kolmafia_namespaceObject.cliExecute)("freeCandy ".concat((0,external_kolmafia_namespaceObject.myAdventures)()));
      },
      post: () => {
        if ((0,external_kolmafia_namespaceObject.myAdventures)() === 0) $effects(csrunleg_templateObject39 || (csrunleg_templateObject39 = csrunleg_taggedTemplateLiteral(["Power Ballad of the Arrowsmith, Stevedave's Shanty of Superiority, The Moxious Madrigal, The Magical Mojomuscular Melody, Aloysius' Antiphon of Aptitude, Ur-Kel's Aria of Annoyance"]))).filter(ef => lib_have(ef)).forEach(ef => uneffect(ef));
      },
      clear: "all",
      tracking: "Garbo"
    }, {
      name: "Turn in FunFunds",
      ready: () => property_get("_stenchAirportToday") && (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(csrunleg_templateObject40 || (csrunleg_templateObject40 = csrunleg_taggedTemplateLiteral(["FunFunds\u2122"])))) >= 20,
      completed: () => lib_have(template_string_$item(csrunleg_templateObject41 || (csrunleg_templateObject41 = csrunleg_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"])))),
      do: () => (0,external_kolmafia_namespaceObject.buy)($coinmaster(csrunleg_templateObject42 || (csrunleg_templateObject42 = csrunleg_taggedTemplateLiteral(["The Dinsey Company Store"]))), 1, template_string_$item(csrunleg_templateObject43 || (csrunleg_templateObject43 = csrunleg_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"])))),
      tracking: "Garbo"
    }, {
      name: "PvP",
      ready: () => doneAdventuring(),
      completed: () => (0,external_kolmafia_namespaceObject.pvpAttacksLeft)() === 0 || !(0,external_kolmafia_namespaceObject.hippyStoneBroken)(),
      do: () => {
        (0,external_kolmafia_namespaceObject.cliExecute)("unequip");
        (0,external_kolmafia_namespaceObject.cliExecute)("UberPvPOptimizer");
        (0,external_kolmafia_namespaceObject.cliExecute)("swagger");
      }
    }, {
      name: "Stooper",
      ready: () => (0,external_kolmafia_namespaceObject.myInebriety)() === (0,external_kolmafia_namespaceObject.inebrietyLimit)() && lib_have(template_string_$item(csrunleg_templateObject44 || (csrunleg_templateObject44 = csrunleg_taggedTemplateLiteral(["tiny stillsuit"])))) && property_get("familiarSweat") >= 300,
      completed: () => !lib_have(template_string_$familiar(csrunleg_templateObject45 || (csrunleg_templateObject45 = csrunleg_taggedTemplateLiteral(["Stooper"])))) || stooperDrunk(),
      do: () => {
        (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(csrunleg_templateObject46 || (csrunleg_templateObject46 = csrunleg_taggedTemplateLiteral(["Stooper"]))));
        (0,external_kolmafia_namespaceObject.cliExecute)("drink stillsuit distillate");
      }
    }, {
      name: "Nightcap",
      ready: () => doneAdventuring(),
      completed: () => totallyDrunk(),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("CONSUME NIGHTCAP")
    }, {
      name: "Do Pizza",
      ready: () => doneAdventuring(),
      completed: () => lib_have(template_string_$item(csrunleg_templateObject47 || (csrunleg_templateObject47 = csrunleg_taggedTemplateLiteral(["Pizza of Legend"])))) && lib_have(template_string_$item(csrunleg_templateObject48 || (csrunleg_templateObject48 = csrunleg_taggedTemplateLiteral(["Deep Dish of Legend"])))) && lib_have(template_string_$item(csrunleg_templateObject49 || (csrunleg_templateObject49 = csrunleg_taggedTemplateLiteral(["Calzone of Legend"])))),
      do: () => {
        !lib_have(template_string_$item(csrunleg_templateObject50 || (csrunleg_templateObject50 = csrunleg_taggedTemplateLiteral(["Pizza of Legend"])))) ? (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(csrunleg_templateObject51 || (csrunleg_templateObject51 = csrunleg_taggedTemplateLiteral(["Pizza of Legend"])))) : undefined;
        !lib_have(template_string_$item(csrunleg_templateObject52 || (csrunleg_templateObject52 = csrunleg_taggedTemplateLiteral(["Deep Dish of Legend"])))) ? (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(csrunleg_templateObject53 || (csrunleg_templateObject53 = csrunleg_taggedTemplateLiteral(["Deep Dish of Legend"])))) : undefined;
        !lib_have(template_string_$item(csrunleg_templateObject54 || (csrunleg_templateObject54 = csrunleg_taggedTemplateLiteral(["Calzone of Legend"])))) ? (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(csrunleg_templateObject55 || (csrunleg_templateObject55 = csrunleg_taggedTemplateLiteral(["Calzone of Legend"])))) : undefined;
      }
    }, {
      name: "Plant Garden",
      ready: () => doneAdventuring() && !!template_string_$items(csrunleg_templateObject56 || (csrunleg_templateObject56 = csrunleg_taggedTemplateLiteral(["packet of rock seeds, packet of thanksgarden seeds, Peppermint Pip Packet, packet of winter seeds, packet of beer seeds, packet of pumpkin seeds, packet of dragon's teeth"]))).find(it => lib_have(it)),
      completed: () => getGarden() !== template_string_$item(csrunleg_templateObject57 || (csrunleg_templateObject57 = csrunleg_taggedTemplateLiteral(["packet of tall grass seeds"]))),
      do: () => {
        (0,external_kolmafia_namespaceObject.use)(template_string_$items(csrunleg_templateObject58 || (csrunleg_templateObject58 = csrunleg_taggedTemplateLiteral(["packet of rock seeds, packet of thanksgarden seeds, Peppermint Pip Packet, packet of winter seeds, packet of beer seeds, packet of pumpkin seeds, packet of dragon's teeth"]))).find(it => lib_have(it)) || template_string_$item(csrunleg_templateObject59 || (csrunleg_templateObject59 = csrunleg_taggedTemplateLiteral(["none"]))));
        (0,external_kolmafia_namespaceObject.cliExecute)("garden pick");
      }
    }, {
      name: "Freecandy Drunk",
      ready: () => (0,external_kolmafia_namespaceObject.holiday)().includes("Halloween"),
      completed: () => stooperDrunk() || !canDiet() && Math.floor((0,external_kolmafia_namespaceObject.myAdventures)() / 5) === 0,
      prepare: () => uneffect(template_string_$effect(csrunleg_templateObject60 || (csrunleg_templateObject60 = csrunleg_taggedTemplateLiteral(["Beaten Up"])))),
      do: () => {
        (0,external_kolmafia_namespaceObject.cliExecute)("freeCandy ".concat((0,external_kolmafia_namespaceObject.myAdventures)()));
      },
      post: () => {
        if ((0,external_kolmafia_namespaceObject.myAdventures)() === 0) $effects(csrunleg_templateObject61 || (csrunleg_templateObject61 = csrunleg_taggedTemplateLiteral(["Power Ballad of the Arrowsmith, Stevedave's Shanty of Superiority, The Moxious Madrigal, The Magical Mojomuscular Melody, Aloysius' Antiphon of Aptitude, Ur-Kel's Aria of Annoyance"]))).filter(ef => lib_have(ef)).forEach(ef => uneffect(ef));
      },
      clear: "all",
      tracking: "Garbo",
      limit: {
        tries: 1
      } //this will run again after installing CMC, by magic
    }, {
      name: "Offhand Remarkable",
      ready: () => lib_have(template_string_$item(csrunleg_templateObject62 || (csrunleg_templateObject62 = csrunleg_taggedTemplateLiteral(["august scepter"])))),
      completed: () => lib_have(template_string_$effect(csrunleg_templateObject63 || (csrunleg_templateObject63 = csrunleg_taggedTemplateLiteral(["Offhand Remarkable"])))) || property_get("_aug13Cast", false) || property_get("_augSkillsCast", 0) >= 5 && gameDay().getDate() !== 13,
      do: () => (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(csrunleg_templateObject64 || (csrunleg_templateObject64 = csrunleg_taggedTemplateLiteral(["Aug. 13th: Left/Off Hander's Day!"]))))
    }, {
      name: "Alternative Offhand Remarkable",
      ready: () => offhandWorth,
      completed: () => lib_have(template_string_$effect(csrunleg_templateObject65 || (csrunleg_templateObject65 = csrunleg_taggedTemplateLiteral(["Offhand Remarkable"])))),
      do: () => {
        (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(csrunleg_templateObject66 || (csrunleg_templateObject66 = csrunleg_taggedTemplateLiteral(["pocket wish"]))));
        (0,external_kolmafia_namespaceObject.cliExecute)("genie effect Aug. 13th: Left/Off Hander's Day!");
      }
    }, {
      name: "Item Cleanup",
      // eslint-disable-next-line libram/verify-constants
      completed: () => property_get("_cleanupToday", false) || args.itemcleanup === "",
      do: () => {
        (0,external_kolmafia_namespaceObject.cliExecute)("".concat(args.itemcleanup));
        (0,external_kolmafia_namespaceObject.cliExecute)("set _cleanupToday = true");
      },
      tracking: "Item Cleanup"
    }, {
      name: "Apriling Part 2",
      ready: () => canJoinSection(),
      completed: () => !canPlay(template_string_$item(csrunleg_templateObject67 || (csrunleg_templateObject67 = csrunleg_taggedTemplateLiteral(["Apriling band piccolo"])))),
      do: () => {
        joinSection(template_string_$item(csrunleg_templateObject68 || (csrunleg_templateObject68 = csrunleg_taggedTemplateLiteral(["Apriling band piccolo"]))));
        if (canJoinSection()) {
          joinSection(template_string_$item(csrunleg_templateObject69 || (csrunleg_templateObject69 = csrunleg_taggedTemplateLiteral(["Apriling band saxophone"]))));
          play(template_string_$item(csrunleg_templateObject70 || (csrunleg_templateObject70 = csrunleg_taggedTemplateLiteral(["Apriling band saxophone"]))));
        }
        if (lib_have(template_string_$familiar(csrunleg_templateObject71 || (csrunleg_templateObject71 = csrunleg_taggedTemplateLiteral(["Grey Goose"]))))) (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(csrunleg_templateObject72 || (csrunleg_templateObject72 = csrunleg_taggedTemplateLiteral(["Grey Goose"]))));else if (lib_have(template_string_$familiar(csrunleg_templateObject73 || (csrunleg_templateObject73 = csrunleg_taggedTemplateLiteral(["Chest Mimic"]))))) (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(csrunleg_templateObject74 || (csrunleg_templateObject74 = csrunleg_taggedTemplateLiteral(["Chest Mimic"]))));else if (lib_have(template_string_$familiar(csrunleg_templateObject75 || (csrunleg_templateObject75 = csrunleg_taggedTemplateLiteral(["Pocket Professor"])))) && (0,external_kolmafia_namespaceObject.familiarWeight)(template_string_$familiar(csrunleg_templateObject76 || (csrunleg_templateObject76 = csrunleg_taggedTemplateLiteral(["Pocket Professor"])))) < 20) (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(_templateObject77 || (_templateObject77 = csrunleg_taggedTemplateLiteral(["Pocket Professor"]))));else if (lib_have(template_string_$familiar(_templateObject78 || (_templateObject78 = csrunleg_taggedTemplateLiteral(["Comma Chameleon"]))))) (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(_templateObject79 || (_templateObject79 = csrunleg_taggedTemplateLiteral(["Comma Chameleon"]))));
        while (template_string_$item(_templateObject80 || (_templateObject80 = csrunleg_taggedTemplateLiteral(["Apriling band piccolo"]))).dailyusesleft > 0 && lib_have(template_string_$item(_templateObject81 || (_templateObject81 = csrunleg_taggedTemplateLiteral(["Apriling band piccolo"]))))) play(template_string_$item(_templateObject82 || (_templateObject82 = csrunleg_taggedTemplateLiteral(["Apriling band piccolo"]))));
      },
      limit: {
        tries: 1
      }
    }, {
      name: "Pajamas",
      completed: () => lib_have(template_string_$item(_templateObject83 || (_templateObject83 = csrunleg_taggedTemplateLiteral(["burning cape"])))),
      acquire: [{
        item: template_string_$item(_templateObject84 || (_templateObject84 = csrunleg_taggedTemplateLiteral(["clockwork maid"]))),
        price: 7 * property_get("valueOfAdventure"),
        optional: true
      }, {
        item: template_string_$item(_templateObject85 || (_templateObject85 = csrunleg_taggedTemplateLiteral(["burning cape"])))
      }],
      do: () => {
        if (lib_have(template_string_$item(_templateObject86 || (_templateObject86 = csrunleg_taggedTemplateLiteral(["clockwork maid"]))))) {
          (0,external_kolmafia_namespaceObject.use)(template_string_$item(_templateObject87 || (_templateObject87 = csrunleg_taggedTemplateLiteral(["clockwork maid"]))));
        }
        (0,external_kolmafia_namespaceObject.cliExecute)("maximize adv, switch disembodied hand, -switch left-hand man");
        pajamas = true;
      }
    }, {
      name: "Alert-No Nightcap",
      ready: () => !doneAdventuring(),
      completed: () => stooperDrunk(),
      do: () => {
        var targetAdvs = 100 - (0,external_kolmafia_namespaceObject.numericModifier)("adventures");
        (0,external_kolmafia_namespaceObject.print)("candyWrapper completed, but did not overdrink.", "red");
        if (targetAdvs < (0,external_kolmafia_namespaceObject.myAdventures)() && targetAdvs > 0) (0,external_kolmafia_namespaceObject.print)("Rerun with fewer than ".concat(targetAdvs, " adventures for candyWrapper to handle your diet"), "red");else (0,external_kolmafia_namespaceObject.print)("Something went wrong.", "red");
      }
    }]
  }];
}
;// CONCATENATED MODULE: ./src/engine/engine.ts
function engine_engine_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function engine_engine_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? engine_engine_ownKeys(Object(source), !0).forEach(function (key) { engine_engine_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : engine_engine_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function engine_engine_toConsumableArray(arr) { return engine_engine_arrayWithoutHoles(arr) || engine_engine_iterableToArray(arr) || engine_engine_unsupportedIterableToArray(arr) || engine_engine_nonIterableSpread(); }
function engine_engine_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function engine_engine_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return engine_engine_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return engine_engine_arrayLikeToArray(o, minLen); }
function engine_engine_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function engine_engine_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return engine_engine_arrayLikeToArray(arr); }
function engine_engine_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
;// CONCATENATED MODULE: ./node_modules/libram/dist/modifierTypes.js
// THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseModifiers.ts for more information
var modifierTypes_booleanModifiers = ["Softcore Only", "Single Equip", "Never Fumble", "Weakens Monster", "Free Pull", "Variable", "Nonstackable Watch", "Cold Immunity", "Hot Immunity", "Sleaze Immunity", "Spooky Immunity", "Stench Immunity", "Cold Vulnerability", "Hot Vulnerability", "Sleaze Vulnerability", "Spooky Vulnerability", "Stench Vulnerability", "Moxie Controls MP", "Moxie May Control MP", "Four Songs", "Adventure Underwater", "Underwater Familiar", "Generic", "Unarmed", "No Pull", "Lasts Until Rollover", "Attacks Can't Miss", "Pirate", "Breakable", "Drops Items", "Drops Meat"];
var classModifiers = ["Class"];
var modifierTypes_numericModifiers = ["Familiar Weight", "Monster Level", "Combat Rate", "Initiative", "Experience", "Item Drop", "Meat Drop", "Damage Absorption", "Damage Reduction", "Cold Resistance", "Hot Resistance", "Sleaze Resistance", "Spooky Resistance", "Stench Resistance", "Mana Cost", "Moxie", "Moxie Percent", "Muscle", "Muscle Percent", "Mysticality", "Mysticality Percent", "Maximum HP", "Maximum HP Percent", "Maximum MP", "Maximum MP Percent", "Weapon Damage", "Ranged Damage", "Spell Damage", "Spell Damage Percent", "Cold Damage", "Hot Damage", "Sleaze Damage", "Spooky Damage", "Stench Damage", "Cold Spell Damage", "Hot Spell Damage", "Sleaze Spell Damage", "Spooky Spell Damage", "Stench Spell Damage", "Underwater Combat Rate", "Fumble", "HP Regen Min", "HP Regen Max", "MP Regen Min", "MP Regen Max", "Adventures", "Familiar Weight Percent", "Weapon Damage Percent", "Ranged Damage Percent", "Stackable Mana Cost", "Hobo Power", "Base Resting HP", "Resting HP Percent", "Bonus Resting HP", "Base Resting MP", "Resting MP Percent", "Bonus Resting MP", "Critical Hit Percent", "PvP Fights", "Volleyball", "Sombrero", "Leprechaun", "Fairy", "Meat Drop Penalty", "Hidden Familiar Weight", "Item Drop Penalty", "Initiative Penalty", "Food Drop", "Booze Drop", "Hat Drop", "Weapon Drop", "Offhand Drop", "Shirt Drop", "Pants Drop", "Accessory Drop", "Volleyball Effectiveness", "Sombrero Effectiveness", "Leprechaun Effectiveness", "Fairy Effectiveness", "Familiar Weight Cap", "Slime Resistance", "Slime Hates It", "Spell Critical Percent", "Muscle Experience", "Mysticality Experience", "Moxie Experience", "Effect Duration", "Candy Drop", "DB Combat Damage", "Sombrero Bonus", "Familiar Experience", "Sporadic Meat Drop", "Sporadic Item Drop", "Meat Bonus", "Pickpocket Chance", "Combat Mana Cost", "Muscle Experience Percent", "Mysticality Experience Percent", "Moxie Experience Percent", "Minstrel Level", "Muscle Limit", "Mysticality Limit", "Moxie Limit", "Song Duration", "Prismatic Damage", "Smithsness", "Supercold Resistance", "Reduce Enemy Defense", "Pool Skill", "Surgeonosity", "Familiar Damage", "Gear Drop", "Maximum Hooch", "Water Level", "Crimbot Outfit Power", "Familiar Tuning Muscle", "Familiar Tuning Mysticality", "Familiar Tuning Moxie", "Random Monster Modifiers", "Luck", "Othello Skill", "Disco Style", "Rollover Effect Duration", "Sixgun Damage", "Fishing Skill", "Additional Song", "Sprinkle Drop", "Absorb Adventures", "Absorb Stats", "Rubee Drop", "Kruegerand Drop", "WarBear Armor Penetration", "Clowniness", "Maximum PP", "Plumber Power", "Drippy Damage", "Drippy Resistance", "Energy", "Scrap", "Familiar Action Bonus", "Water"];
var effectModifiers = ["Effect", "Rollover Effect"];
var monsterModifiers = ["Avatar"];
var skillModifiers = ["Skill"];
var statModifiers = ["Plumber Stat"];
var stringModifiers = ["Intrinsic Effect", "Equalize", "Wiki Name", "Modifiers", "Outfit", "Stat Tuning", "Equips On", "Familiar Effect", "Jiggle", "Equalize Muscle", "Equalize Mysticality", "Equalize Moxie", "Floor Buffed Muscle", "Floor Buffed Mysticality", "Floor Buffed Moxie"];
;// CONCATENATED MODULE: ./node_modules/libram/dist/modifier.js
var modifier_templateObject;
function modifier_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function modifier_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function modifier_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? modifier_ownKeys(Object(source), !0).forEach(function (key) { modifier_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : modifier_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function modifier_defineProperty(obj, key, value) { key = modifier_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function modifier_toPropertyKey(arg) { var key = modifier_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function modifier_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





/**
 * Get the value of a modifier
 *
 * @param name Modifier name
 * @param subject Subject of modifier
 * @returns Value of modifier
 */
function modifier_get(name, subject) {
  if (utils_arrayContains(name, modifierTypes_booleanModifiers)) {
    return subject === undefined ? (0,external_kolmafia_namespaceObject.booleanModifier)(name) : (0,external_kolmafia_namespaceObject.booleanModifier)(subject, name);
  }
  if (utils_arrayContains(name, classModifiers)) {
    return (0,external_kolmafia_namespaceObject.classModifier)(subject, name);
  }
  if (utils_arrayContains(name, effectModifiers)) {
    return (0,external_kolmafia_namespaceObject.effectModifier)(subject, name);
  }
  if (utils_arrayContains(name, monsterModifiers)) {
    return (0,external_kolmafia_namespaceObject.monsterModifier)(subject, name);
  }
  if (utils_arrayContains(name, modifierTypes_numericModifiers)) {
    return subject === undefined ? (0,external_kolmafia_namespaceObject.numericModifier)(name) : (0,external_kolmafia_namespaceObject.numericModifier)(subject, name);
  }
  if (utils_arrayContains(name, skillModifiers)) {
    return (0,external_kolmafia_namespaceObject.skillModifier)(subject, name);
  }
  if (utils_arrayContains(name, stringModifiers)) {
    return subject === undefined ? (0,external_kolmafia_namespaceObject.stringModifier)(name) : (0,external_kolmafia_namespaceObject.stringModifier)(subject, name);
  }
  if (utils_arrayContains(name, statModifiers)) {
    return (0,external_kolmafia_namespaceObject.statModifier)(subject, name);
  }
}
/**
 * Merge two Modifiers objects into one, summing all numeric modifiers, ||ing all boolean modifiers, and otherwise letting the second object overwrite the first.
 *
 * @param modifiers1 Modifiers objects to be merged onto.
 * @param modifiers2 Modifiers object to merge.
 * @returns A single Modifiers object obtained by merging.
 */
function pairwiseMerge(modifiers1, modifiers2) {
  var returnValue = modifier_objectSpread(modifier_objectSpread({}, modifiers1), modifiers2);
  for (var modifier in modifiers1) {
    if (Array.from(Object.values(modifiers2)).includes(modifier)) {
      if (arrayContains(modifier, numericModifiers)) {
        var _modifiers1$modifier, _modifiers2$modifier;
        returnValue[modifier] = ((_modifiers1$modifier = modifiers1[modifier]) !== null && _modifiers1$modifier !== void 0 ? _modifiers1$modifier : 0) + ((_modifiers2$modifier = modifiers2[modifier]) !== null && _modifiers2$modifier !== void 0 ? _modifiers2$modifier : 0);
      }
      if (arrayContains(modifier, booleanModifiers)) {
        var _modifiers1$modifier2, _modifiers2$modifier2;
        returnValue[modifier] = ((_modifiers1$modifier2 = modifiers1[modifier]) !== null && _modifiers1$modifier2 !== void 0 ? _modifiers1$modifier2 : false) || ((_modifiers2$modifier2 = modifiers2[modifier]) !== null && _modifiers2$modifier2 !== void 0 ? _modifiers2$modifier2 : false);
      }
    }
  }
  return returnValue;
}
/**
 * Merge arbitrarily many Modifiers objects into one, summing all numeric modifiers, and ||ing all boolean modifiers.
 *
 * @param modifierss Modifiers objects to be merged together.
 * @returns A single Modifiers object obtained by merging.
 */
function mergeModifiers() {
  for (var _len = arguments.length, modifierss = new Array(_len), _key = 0; _key < _len; _key++) {
    modifierss[_key] = arguments[_key];
  }
  return modifierss.reduce((a, b) => pairwiseMerge(a, b), {});
}
/**
 * Prints the modtrace to the log.
 * Example: printModtrace("Meat Drop") or printModtrace(["Item Drop", "Booze Drop"])
 *
 * @param inputModifiers A string (or string[]) containing the modtrace lookup term(s).
 * @param baseModifier A string where all the info about modifiers in the string[] array can be grabbed with this one lookup term. (Automatically generated in most cases)
 * @param componentColor The print color for the sum returned for each input modifier
 * @param totalColor The print color for the total sum over every input modifier
 * @returns void
 */
function printModtrace(inputModifiers,
// the user's list of modifiers to look up
baseModifier) {
  var _htmlOutput$match, _htmlOutput$match2;
  var componentColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "purple";
  var totalColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "blue";
  if (typeof inputModifiers === "string") return printModtrace([inputModifiers], inputModifiers);else if (inputModifiers.length === 0) return;else if (!baseModifier) {
    return inputModifiers.filter(mod1 => !inputModifiers.some(mod2 => mod2 !== mod1 && mod1.includes(mod2))).forEach(baseMod => printModtrace(inputModifiers.filter(mod => mod.includes(baseMod)), baseMod));
  }
  var htmlOutput = cliExecuteOutput("modtrace ".concat(baseModifier));
  // The list of matched modifiers that mafia returns
  var modtraceModifiers = Array.from((_htmlOutput$match = htmlOutput.match(RegExp(/(>)(.*?)(<\/td>)/g))) !== null && _htmlOutput$match !== void 0 ? _htmlOutput$match : []).map(s => s.slice(1, -5)).slice(2);
  if (!modtraceModifiers.some(modifier => modifier.toLowerCase() === baseModifier.toLowerCase())) {
    return print("Could not find exact string match of ".concat(baseModifier, " in ").concat(inputModifiers.toString()), "red");
  }
  var initialVal = baseModifier.toLowerCase() === "familiar weight" ? (() => {
    var wt = familiarWeight(myFamiliar());
    print("[Familiar Weight] Base weight (".concat(wt, ")"));
    return wt;
  })() : 0;
  var modifierVals = new Map(modtraceModifiers.map(modifier => [modifier, initialVal])); // Maps modifier name to its value
  var lowerCaseModifiers = inputModifiers.map(modifier => modifier.toLowerCase());
  Array.from((_htmlOutput$match2 = htmlOutput.match(RegExp(/<tr>(.*?)<\/tr>/g))) !== null && _htmlOutput$match2 !== void 0 ? _htmlOutput$match2 : []).slice(1).map(s => s.slice(4, -5)).forEach(s => {
    var _s$replace$match;
    var rowArr = Array.from((_s$replace$match = s.replace(RegExp(/><\/td>/g), ">0</td>").match(RegExp(/(>)(.*?)(<\/td>)/g))) !== null && _s$replace$match !== void 0 ? _s$replace$match : []).map(s => s.slice(1, -5));
    var rowName = rowArr[1];
    rowArr.slice(2).filter((e, idx) => idx % 2 === 0).forEach((e, idx) => {
      var _modifierVals$get;
      var val = parseFloat(e);
      modifierVals.set(modtraceModifiers[idx], ((_modifierVals$get = modifierVals.get(modtraceModifiers[idx])) !== null && _modifierVals$get !== void 0 ? _modifierVals$get : 0) + val);
      if (val !== 0 && lowerCaseModifiers.includes(modtraceModifiers[idx].toLowerCase())) {
        print("[".concat(modtraceModifiers[idx], "] ").concat(rowName, " (").concat(val.toFixed(1), ")"));
      }
    });
  });
  var total = sum(modtraceModifiers, modifier => {
    if (lowerCaseModifiers.includes(modifier.toLowerCase())) {
      var _modifierVals$get2;
      var modVal = (_modifierVals$get2 = modifierVals.get(modifier)) !== null && _modifierVals$get2 !== void 0 ? _modifierVals$get2 : 0;
      if (have($effect(modifier_templateObject || (modifier_templateObject = modifier_taggedTemplateLiteral(["Bow-Legged Swagger"])))) && modifier.includes("Weapon Damage")) {
        print("[".concat(modifier, "] Bow-Legged Swagger (").concat(modVal.toFixed(1), ")"));
        modVal *= 2;
      }
      print("".concat(modifier, " => ").concat(modVal.toFixed(1)), componentColor);
      return modVal;
    } else return 0;
  });
  print("Total ".concat(baseModifier, ": ").concat(total.toFixed(1)), totalColor);
}
/**
 * Take the sum of a modifier over an array of Skills, Effects, and Items
 *
 * @param modifier A NumericModifier that we want to find the total value of
 * @param subjects A rested array of Skills, Effects, and Items that we want to find the total value of
 * @returns The sum of the appropriate modifier for all of the subjects
 */
function getTotalModifier(modifier) {
  for (var _len2 = arguments.length, subjects = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    subjects[_key2 - 1] = arguments[_key2];
  }
  return sum(subjects, subject => modifier_get(modifier, subject));
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2014/DNALab.js
var DNALab_templateObject, DNALab_templateObject2, DNALab_templateObject3, DNALab_templateObject4, DNALab_templateObject5, DNALab_templateObject6, DNALab_templateObject7, DNALab_templateObject8, DNALab_templateObject9, DNALab_templateObject10, DNALab_templateObject11, DNALab_templateObject12, DNALab_templateObject13, DNALab_templateObject14, DNALab_templateObject15, DNALab_templateObject16, DNALab_templateObject17, DNALab_templateObject18, DNALab_templateObject19, DNALab_templateObject20, DNALab_templateObject21, DNALab_templateObject22, DNALab_templateObject23, DNALab_templateObject24, DNALab_templateObject25, DNALab_templateObject26, DNALab_templateObject27, DNALab_templateObject28, DNALab_templateObject29, DNALab_templateObject30, DNALab_templateObject31, DNALab_templateObject32, DNALab_templateObject33, DNALab_templateObject34, DNALab_templateObject35, DNALab_templateObject36, DNALab_templateObject37, DNALab_templateObject38, DNALab_templateObject39, DNALab_templateObject40, DNALab_templateObject41, DNALab_templateObject42, DNALab_templateObject43, DNALab_templateObject44, DNALab_templateObject45, DNALab_templateObject46, DNALab_templateObject47, DNALab_templateObject48, DNALab_templateObject49, DNALab_templateObject50, DNALab_templateObject51, DNALab_templateObject52, DNALab_templateObject53, DNALab_templateObject54, DNALab_templateObject55, DNALab_templateObject56, DNALab_templateObject57, DNALab_templateObject58, DNALab_templateObject59, DNALab_templateObject60, DNALab_templateObject61, DNALab_templateObject62, DNALab_templateObject63, DNALab_templateObject64, DNALab_templateObject65, DNALab_templateObject66, DNALab_templateObject67, DNALab_templateObject68, DNALab_templateObject69, DNALab_templateObject70, DNALab_templateObject71, DNALab_templateObject72, DNALab_templateObject73, DNALab_templateObject74, DNALab_templateObject75, DNALab_templateObject76, DNALab_templateObject77, DNALab_templateObject78, DNALab_templateObject79, DNALab_templateObject80, DNALab_templateObject81, DNALab_templateObject82, DNALab_templateObject83, DNALab_templateObject84, DNALab_templateObject85;
function DNALab_slicedToArray(arr, i) { return DNALab_arrayWithHoles(arr) || DNALab_iterableToArrayLimit(arr, i) || DNALab_unsupportedIterableToArray(arr, i) || DNALab_nonIterableRest(); }
function DNALab_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function DNALab_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return DNALab_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return DNALab_arrayLikeToArray(o, minLen); }
function DNALab_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function DNALab_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function DNALab_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function DNALab_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var lab = template_string_$item(DNALab_templateObject || (DNALab_templateObject = DNALab_taggedTemplateLiteral(["Little Geneticist DNA-Splicing Lab"])));
/**
 * @returns Whether or not you `have` DNA lab or it's installed
 */
function DNALab_have() {
  return haveItem(lab) || getWorkshed() === lab;
}
/**
 * @returns Whether the DNA Lab is your currently active workshed
 */
function DNALab_installed() {
  return (0,external_kolmafia_namespaceObject.getWorkshed)() === lab;
}
var phylaEffects = new Map([[$phylum(DNALab_templateObject2 || (DNALab_templateObject2 = DNALab_taggedTemplateLiteral(["beast"]))), template_string_$effect(DNALab_templateObject3 || (DNALab_templateObject3 = DNALab_taggedTemplateLiteral(["Human-Beast Hybrid"])))], [$phylum(DNALab_templateObject4 || (DNALab_templateObject4 = DNALab_taggedTemplateLiteral(["bug"]))), template_string_$effect(DNALab_templateObject5 || (DNALab_templateObject5 = DNALab_taggedTemplateLiteral(["Human-Insect Hybrid"])))], [$phylum(DNALab_templateObject6 || (DNALab_templateObject6 = DNALab_taggedTemplateLiteral(["constellation"]))), template_string_$effect(DNALab_templateObject7 || (DNALab_templateObject7 = DNALab_taggedTemplateLiteral(["Human-Constellation Hybrid"])))], [$phylum(DNALab_templateObject8 || (DNALab_templateObject8 = DNALab_taggedTemplateLiteral(["construct"]))), template_string_$effect(DNALab_templateObject9 || (DNALab_templateObject9 = DNALab_taggedTemplateLiteral(["Human-Machine Hybrid"])))], [$phylum(DNALab_templateObject10 || (DNALab_templateObject10 = DNALab_taggedTemplateLiteral(["demon"]))), template_string_$effect(DNALab_templateObject11 || (DNALab_templateObject11 = DNALab_taggedTemplateLiteral(["Human-Demon Hybrid"])))], [$phylum(DNALab_templateObject12 || (DNALab_templateObject12 = DNALab_taggedTemplateLiteral(["dude"]))), template_string_$effect(DNALab_templateObject13 || (DNALab_templateObject13 = DNALab_taggedTemplateLiteral(["Human-Human Hybrid"])))], [$phylum(DNALab_templateObject14 || (DNALab_templateObject14 = DNALab_taggedTemplateLiteral(["elemental"]))), template_string_$effect(DNALab_templateObject15 || (DNALab_templateObject15 = DNALab_taggedTemplateLiteral(["Human-Elemental Hybrid"])))], [$phylum(DNALab_templateObject16 || (DNALab_templateObject16 = DNALab_taggedTemplateLiteral(["elf"]))), template_string_$effect(DNALab_templateObject17 || (DNALab_templateObject17 = DNALab_taggedTemplateLiteral(["Human-Elf Hybrid"])))], [$phylum(DNALab_templateObject18 || (DNALab_templateObject18 = DNALab_taggedTemplateLiteral(["fish"]))), template_string_$effect(DNALab_templateObject19 || (DNALab_templateObject19 = DNALab_taggedTemplateLiteral(["Human-Fish Hybrid"])))], [$phylum(DNALab_templateObject20 || (DNALab_templateObject20 = DNALab_taggedTemplateLiteral(["goblin"]))), template_string_$effect(DNALab_templateObject21 || (DNALab_templateObject21 = DNALab_taggedTemplateLiteral(["Human-Goblin Hybrid"])))], [$phylum(DNALab_templateObject22 || (DNALab_templateObject22 = DNALab_taggedTemplateLiteral(["hippy"]))), template_string_$effect(DNALab_templateObject23 || (DNALab_templateObject23 = DNALab_taggedTemplateLiteral(["Human-Hobo Hybrid"])))], [$phylum(DNALab_templateObject24 || (DNALab_templateObject24 = DNALab_taggedTemplateLiteral(["horror"]))), template_string_$effect(DNALab_templateObject25 || (DNALab_templateObject25 = DNALab_taggedTemplateLiteral(["Human-Horror Hybrid"])))], [$phylum(DNALab_templateObject26 || (DNALab_templateObject26 = DNALab_taggedTemplateLiteral(["humanoid"]))), template_string_$effect(DNALab_templateObject27 || (DNALab_templateObject27 = DNALab_taggedTemplateLiteral(["Human-Humanoid Hybrid"])))], [$phylum(DNALab_templateObject28 || (DNALab_templateObject28 = DNALab_taggedTemplateLiteral(["mer-kin"]))), template_string_$effect(DNALab_templateObject29 || (DNALab_templateObject29 = DNALab_taggedTemplateLiteral(["Human-Mer-kin Hybrid"])))], [$phylum(DNALab_templateObject30 || (DNALab_templateObject30 = DNALab_taggedTemplateLiteral(["orc"]))), template_string_$effect(DNALab_templateObject31 || (DNALab_templateObject31 = DNALab_taggedTemplateLiteral(["Human-Orc Hybrid"])))], [$phylum(DNALab_templateObject32 || (DNALab_templateObject32 = DNALab_taggedTemplateLiteral(["penguin"]))), template_string_$effect(DNALab_templateObject33 || (DNALab_templateObject33 = DNALab_taggedTemplateLiteral(["Human-Penguin Hybrid"])))], [$phylum(DNALab_templateObject34 || (DNALab_templateObject34 = DNALab_taggedTemplateLiteral(["pirate"]))), template_string_$effect(DNALab_templateObject35 || (DNALab_templateObject35 = DNALab_taggedTemplateLiteral(["Human-Pirate Hybrid"])))], [$phylum(DNALab_templateObject36 || (DNALab_templateObject36 = DNALab_taggedTemplateLiteral(["plant"]))), template_string_$effect(DNALab_templateObject37 || (DNALab_templateObject37 = DNALab_taggedTemplateLiteral(["Human-Plant Hybrid"])))], [$phylum(DNALab_templateObject38 || (DNALab_templateObject38 = DNALab_taggedTemplateLiteral(["slime"]))), template_string_$effect(DNALab_templateObject39 || (DNALab_templateObject39 = DNALab_taggedTemplateLiteral(["Human-Slime Hybrid"])))], [$phylum(DNALab_templateObject40 || (DNALab_templateObject40 = DNALab_taggedTemplateLiteral(["undead"]))), template_string_$effect(DNALab_templateObject41 || (DNALab_templateObject41 = DNALab_taggedTemplateLiteral(["Human-Undead Hybrid"])))], [$phylum(DNALab_templateObject42 || (DNALab_templateObject42 = DNALab_taggedTemplateLiteral(["weird"]))), template_string_$effect(DNALab_templateObject43 || (DNALab_templateObject43 = DNALab_taggedTemplateLiteral(["Human-Weird Thing Hybrid"])))]]);
var phylaTonics = new Map([[$phylum(DNALab_templateObject44 || (DNALab_templateObject44 = DNALab_taggedTemplateLiteral(["beast"]))), template_string_$item(DNALab_templateObject45 || (DNALab_templateObject45 = DNALab_taggedTemplateLiteral(["Gene Tonic: Beast"])))], [$phylum(DNALab_templateObject46 || (DNALab_templateObject46 = DNALab_taggedTemplateLiteral(["bug"]))), template_string_$item(DNALab_templateObject47 || (DNALab_templateObject47 = DNALab_taggedTemplateLiteral(["Gene Tonic: Insect"])))], [$phylum(DNALab_templateObject48 || (DNALab_templateObject48 = DNALab_taggedTemplateLiteral(["constellation"]))), template_string_$item(DNALab_templateObject49 || (DNALab_templateObject49 = DNALab_taggedTemplateLiteral(["Gene Tonic: Constellation"])))], [$phylum(DNALab_templateObject50 || (DNALab_templateObject50 = DNALab_taggedTemplateLiteral(["construct"]))), template_string_$item(DNALab_templateObject51 || (DNALab_templateObject51 = DNALab_taggedTemplateLiteral(["Gene Tonic: Construct"])))], [$phylum(DNALab_templateObject52 || (DNALab_templateObject52 = DNALab_taggedTemplateLiteral(["demon"]))), template_string_$item(DNALab_templateObject53 || (DNALab_templateObject53 = DNALab_taggedTemplateLiteral(["Gene Tonic: Demon"])))], [$phylum(DNALab_templateObject54 || (DNALab_templateObject54 = DNALab_taggedTemplateLiteral(["dude"]))), template_string_$item(DNALab_templateObject55 || (DNALab_templateObject55 = DNALab_taggedTemplateLiteral(["Gene Tonic: Humanoid"])))], [$phylum(DNALab_templateObject56 || (DNALab_templateObject56 = DNALab_taggedTemplateLiteral(["elemental"]))), template_string_$item(DNALab_templateObject57 || (DNALab_templateObject57 = DNALab_taggedTemplateLiteral(["Gene Tonic: Elemental"])))], [$phylum(DNALab_templateObject58 || (DNALab_templateObject58 = DNALab_taggedTemplateLiteral(["elf"]))), template_string_$item(DNALab_templateObject59 || (DNALab_templateObject59 = DNALab_taggedTemplateLiteral(["Gene Tonic: Elf"])))], [$phylum(DNALab_templateObject60 || (DNALab_templateObject60 = DNALab_taggedTemplateLiteral(["fish"]))), template_string_$item(DNALab_templateObject61 || (DNALab_templateObject61 = DNALab_taggedTemplateLiteral(["Gene Tonic: Fish"])))], [$phylum(DNALab_templateObject62 || (DNALab_templateObject62 = DNALab_taggedTemplateLiteral(["goblin"]))), template_string_$item(DNALab_templateObject63 || (DNALab_templateObject63 = DNALab_taggedTemplateLiteral(["Gene Tonic: Goblin"])))], [$phylum(DNALab_templateObject64 || (DNALab_templateObject64 = DNALab_taggedTemplateLiteral(["hippy"]))), template_string_$item(DNALab_templateObject65 || (DNALab_templateObject65 = DNALab_taggedTemplateLiteral(["Gene Tonic: Hobo"])))], [$phylum(DNALab_templateObject66 || (DNALab_templateObject66 = DNALab_taggedTemplateLiteral(["horror"]))), template_string_$item(DNALab_templateObject67 || (DNALab_templateObject67 = DNALab_taggedTemplateLiteral(["Gene Tonic: Horror"])))], [$phylum(DNALab_templateObject68 || (DNALab_templateObject68 = DNALab_taggedTemplateLiteral(["humanoid"]))), template_string_$item(DNALab_templateObject69 || (DNALab_templateObject69 = DNALab_taggedTemplateLiteral(["Gene Tonic: Humanoid"])))], [$phylum(DNALab_templateObject70 || (DNALab_templateObject70 = DNALab_taggedTemplateLiteral(["mer-kin"]))), template_string_$item(DNALab_templateObject71 || (DNALab_templateObject71 = DNALab_taggedTemplateLiteral(["Gene Tonic: Mer-kin"])))], [$phylum(DNALab_templateObject72 || (DNALab_templateObject72 = DNALab_taggedTemplateLiteral(["orc"]))), template_string_$item(DNALab_templateObject73 || (DNALab_templateObject73 = DNALab_taggedTemplateLiteral(["Gene Tonic: Orc"])))], [$phylum(DNALab_templateObject74 || (DNALab_templateObject74 = DNALab_taggedTemplateLiteral(["penguin"]))), template_string_$item(DNALab_templateObject75 || (DNALab_templateObject75 = DNALab_taggedTemplateLiteral(["Gene Tonic: Penguin"])))], [$phylum(DNALab_templateObject76 || (DNALab_templateObject76 = DNALab_taggedTemplateLiteral(["pirate"]))), template_string_$item(DNALab_templateObject77 || (DNALab_templateObject77 = DNALab_taggedTemplateLiteral(["Gene Tonic: Pirate"])))], [$phylum(DNALab_templateObject78 || (DNALab_templateObject78 = DNALab_taggedTemplateLiteral(["plant"]))), template_string_$item(DNALab_templateObject79 || (DNALab_templateObject79 = DNALab_taggedTemplateLiteral(["Gene Tonic: Plant"])))], [$phylum(DNALab_templateObject80 || (DNALab_templateObject80 = DNALab_taggedTemplateLiteral(["slime"]))), template_string_$item(DNALab_templateObject81 || (DNALab_templateObject81 = DNALab_taggedTemplateLiteral(["Gene Tonic: Slime"])))], [$phylum(DNALab_templateObject82 || (DNALab_templateObject82 = DNALab_taggedTemplateLiteral(["undead"]))), template_string_$item(DNALab_templateObject83 || (DNALab_templateObject83 = DNALab_taggedTemplateLiteral(["Gene Tonic: Undead"])))], [$phylum(DNALab_templateObject84 || (DNALab_templateObject84 = DNALab_taggedTemplateLiteral(["weird"]))), template_string_$item(DNALab_templateObject85 || (DNALab_templateObject85 = DNALab_taggedTemplateLiteral(["Gene Tonic: Weird"])))]]);
var tonicEffects = Array.from(phylaEffects.values());
/**
 * Tells you whether you are currently hybridized. When passed with an input of any sort, tells you whether you are currently hybridized with that effect.
 *
 * @param tonic Optional input. When passed, the function returns whether that specific effect is hybridized.
 * @returns Whether the given tonic is currently hybridized
 */
function isHybridized(tonic) {
  if (!tonic) return DNALab_installed() && property_get("_dnaHybrid");
  var tonicEffect = tonic instanceof external_kolmafia_namespaceObject.Effect ? tonic : tonic instanceof external_kolmafia_namespaceObject.Phylum ? DNALab_getEffect(tonic) : modifier_get("Effect", tonic);
  return tonicEffects.includes(tonicEffect) && (0,external_kolmafia_namespaceObject.haveEffect)(tonicEffect) === 2147483647;
}
/**
 * Returns the tonic item associated with a particular phylum.
 *
 * @param phylum The phylum in question.
 * @returns The tonic item associated with that phylum; returns $item.none for $phylum.none.
 */
function getTonic(phylum) {
  var _phylaTonics$get;
  return (_phylaTonics$get = phylaTonics.get(phylum)) !== null && _phylaTonics$get !== void 0 ? _phylaTonics$get : template_string_$item.none;
  //return $item.none rather than null because it should never happen.
}
/**
 * Returns the tonic effect associated with a particular phylum.
 *
 * @param phylum The phylum in question.
 * @returns The tonic effect associated with that phylum; returns $effect.none for $phylum.none.
 */
function DNALab_getEffect(phylum) {
  var _phylaEffects$get;
  return (_phylaEffects$get = phylaEffects.get(phylum)) !== null && _phylaEffects$get !== void 0 ? _phylaEffects$get : template_string_$effect.none;
  //return $effect.none rather than null because it should never happen
}
/**
 * Tells you which phylum to hunt down for a given effect or item.
 *
 * @param dnatype The tonic effect or item in question
 * @returns The Phylum associated with that effect or item; null if an invalid choice
 */
function phylumFor(dnatype) {
  if (dnatype instanceof Effect) {
    var phylumPair = Array.from(phylaEffects.entries()).find(_ref => {
      var _ref2 = DNALab_slicedToArray(_ref, 2),
        effect = _ref2[1];
      return effect === dnatype;
    });
    return phylumPair ? phylumPair[0] : null;
  } else {
    var _phylumPair = Array.from(phylaTonics.entries()).find(_ref3 => {
      var _ref4 = DNALab_slicedToArray(_ref3, 2),
        tonic = _ref4[1];
      return tonic === dnatype;
    });
    return _phylumPair ? _phylumPair[0] : null;
  }
}
/**
 * Hybridize yourself with the current contents of your syringe, if possible.
 *
 * @returns Whether or not we succeeded
 */
function hybridize() {
  if (property_get("_dnaHybrid")) return false;
  if (!DNALab_installed()) return false;
  var currentSyringe = property_get("dnaSyringe");
  if (!currentSyringe) return false;
  var tonicPotion = getTonic(currentSyringe);
  var expectedEffect = modifier_get("Effect", tonicPotion);
  (0,external_kolmafia_namespaceObject.cliExecute)("camp dnainject");
  return isHybridized(expectedEffect);
}
/**
 * Makes tonics with whatever phylum is currently in your syringe
 *
 * @param {number} [amount=1] the number of tonics to make
 * @returns Whether we successfully made tonics; returns true if we made as many as we could, regardless of whether that was the number requested
 */
function makeTonic() {
  var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  if (!DNALab_installed()) return false;
  var currentSyringe = property_get("dnaSyringe");
  if (!currentSyringe) return false;
  var tonicPotion = getTonic(currentSyringe);
  var amountToMake = utils_clamp(amount, 0, tonicsLeft());
  var startingAmount = (0,external_kolmafia_namespaceObject.itemAmount)(tonicPotion);
  (0,external_kolmafia_namespaceObject.cliExecute)("camp dnapotion ".concat(amountToMake));
  return (0,external_kolmafia_namespaceObject.itemAmount)(tonicPotion) - startingAmount === amountToMake;
}
/**
 * Tells you how many tonics you can make the rest of the day.
 *
 * @returns The remaining tonics you can make
 */
function tonicsLeft() {
  return utils_clamp(3 - property_get("_dnaPotionsMade"), 0, 3);
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2022/TrainSet.js
var TrainSet_templateObject;
function TrainSet_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var item = template_string_$item(TrainSet_templateObject || (TrainSet_templateObject = TrainSet_taggedTemplateLiteral(["model train set"])));
/**
 * Determines whether the Model Train Set is your current workshed
 *
 * @returns Whether the Model Train Set is your current workshed
 */
function TrainSet_installed() {
  return (0,external_kolmafia_namespaceObject.getWorkshed)() === item;
}
/**
 * Determines whether you `have` the model train set (or if it is installed)
 *
 * @returns Whether you `have` the model train set or it's installed
 */
function TrainSet_have() {
  return TrainSet_installed() || have_(item);
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
;// CONCATENATED MODULE: ./src/tasks/aftercoreleg.ts
var aftercoreleg_templateObject, aftercoreleg_templateObject2, aftercoreleg_templateObject3, aftercoreleg_templateObject4, aftercoreleg_templateObject5, aftercoreleg_templateObject6, aftercoreleg_templateObject7, aftercoreleg_templateObject8, aftercoreleg_templateObject9, aftercoreleg_templateObject10, aftercoreleg_templateObject11, aftercoreleg_templateObject12, aftercoreleg_templateObject13, aftercoreleg_templateObject14, aftercoreleg_templateObject15, aftercoreleg_templateObject16, aftercoreleg_templateObject17, aftercoreleg_templateObject18, aftercoreleg_templateObject19, aftercoreleg_templateObject20, aftercoreleg_templateObject21, aftercoreleg_templateObject22, aftercoreleg_templateObject23, aftercoreleg_templateObject24, aftercoreleg_templateObject25, aftercoreleg_templateObject26, aftercoreleg_templateObject27, aftercoreleg_templateObject28, aftercoreleg_templateObject29, aftercoreleg_templateObject30, aftercoreleg_templateObject31, aftercoreleg_templateObject32, aftercoreleg_templateObject33, aftercoreleg_templateObject34, aftercoreleg_templateObject35, aftercoreleg_templateObject36, aftercoreleg_templateObject37, aftercoreleg_templateObject38, aftercoreleg_templateObject39, aftercoreleg_templateObject40, aftercoreleg_templateObject41, aftercoreleg_templateObject42, aftercoreleg_templateObject43, aftercoreleg_templateObject44, aftercoreleg_templateObject45, aftercoreleg_templateObject46, aftercoreleg_templateObject47, aftercoreleg_templateObject48, aftercoreleg_templateObject49, aftercoreleg_templateObject50, aftercoreleg_templateObject51, aftercoreleg_templateObject52, aftercoreleg_templateObject53, aftercoreleg_templateObject54, aftercoreleg_templateObject55, aftercoreleg_templateObject56, aftercoreleg_templateObject57, aftercoreleg_templateObject58, aftercoreleg_templateObject59, aftercoreleg_templateObject60, aftercoreleg_templateObject61, aftercoreleg_templateObject62, aftercoreleg_templateObject63, aftercoreleg_templateObject64, aftercoreleg_templateObject65, aftercoreleg_templateObject66, aftercoreleg_templateObject67, aftercoreleg_templateObject68, aftercoreleg_templateObject69, aftercoreleg_templateObject70, aftercoreleg_templateObject71, aftercoreleg_templateObject72, aftercoreleg_templateObject73, aftercoreleg_templateObject74, aftercoreleg_templateObject75, aftercoreleg_templateObject76, aftercoreleg_templateObject77, aftercoreleg_templateObject78, aftercoreleg_templateObject79, aftercoreleg_templateObject80, aftercoreleg_templateObject81, aftercoreleg_templateObject82, aftercoreleg_templateObject83, aftercoreleg_templateObject84, aftercoreleg_templateObject85, aftercoreleg_templateObject86, aftercoreleg_templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97, _templateObject98, _templateObject99, _templateObject100, _templateObject101, _templateObject102, _templateObject103, _templateObject104, _templateObject105, _templateObject106, _templateObject107, _templateObject108, _templateObject109, _templateObject110, _templateObject111, _templateObject112, _templateObject113, _templateObject114, _templateObject115, _templateObject116, _templateObject117, _templateObject118, _templateObject119, _templateObject120, _templateObject121, _templateObject122, _templateObject123, _templateObject124, _templateObject125, _templateObject126;
function aftercoreleg_toConsumableArray(arr) { return aftercoreleg_arrayWithoutHoles(arr) || aftercoreleg_iterableToArray(arr) || aftercoreleg_unsupportedIterableToArray(arr) || aftercoreleg_nonIterableSpread(); }
function aftercoreleg_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function aftercoreleg_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return aftercoreleg_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return aftercoreleg_arrayLikeToArray(o, minLen); }
function aftercoreleg_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function aftercoreleg_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return aftercoreleg_arrayLikeToArray(arr); }
function aftercoreleg_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function aftercoreleg_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var doSmol = args.smol ? true : false;
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
    completed: () => (0,external_kolmafia_namespaceObject.myAdventures)() === 0 && totallyDrunk() && lib_have(template_string_$item(aftercoreleg_templateObject || (aftercoreleg_templateObject = aftercoreleg_taggedTemplateLiteral(["Pizza of Legend"])))) && lib_have(template_string_$item(aftercoreleg_templateObject2 || (aftercoreleg_templateObject2 = aftercoreleg_taggedTemplateLiteral(["Deep Dish of Legend"])))) && lib_have(template_string_$item(aftercoreleg_templateObject3 || (aftercoreleg_templateObject3 = aftercoreleg_taggedTemplateLiteral(["Calzone of Legend"])))) || (0,external_kolmafia_namespaceObject.myDaycount)() === 1,
    tasks: [{
      name: "Whitelist VIP Clan",
      completed: () => !args.clan || (0,external_kolmafia_namespaceObject.getClanName)().toLowerCase() === args.clan.toLowerCase(),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("/whitelist ".concat(args.clan))
    }, {
      name: "Prep Fireworks Shop",
      completed: () => !lib_have(template_string_$item(aftercoreleg_templateObject4 || (aftercoreleg_templateObject4 = aftercoreleg_taggedTemplateLiteral(["Clan VIP Lounge key"])))) || property_get("_goorboFireworksPrepped", false),
      do: () => {
        (0,external_kolmafia_namespaceObject.visitUrl)("clan_viplounge.php?action=fwshop&whichfloor=2");
        _set("_goorboFireworksPrepped", true);
      }
    }, {
      name: "Breakfast",
      completed: () => property_get("breakfastCompleted"),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("breakfast")
    }, {
      name: "Apriling",
      ready: () => canChangeSong(),
      completed: () => lib_have(template_string_$effect(aftercoreleg_templateObject5 || (aftercoreleg_templateObject5 = aftercoreleg_taggedTemplateLiteral(["Apriling Band Celebration Bop"])))),
      do: () => {
        conduct(template_string_$effect(aftercoreleg_templateObject6 || (aftercoreleg_templateObject6 = aftercoreleg_taggedTemplateLiteral(["Apriling Band Celebration Bop"]))));
      },
      limit: {
        tries: 1
      }
    }, {
      name: "Harvest Garden",
      completed: () => getGarden() === template_string_$item(aftercoreleg_templateObject7 || (aftercoreleg_templateObject7 = aftercoreleg_taggedTemplateLiteral(["none"]))) || getGarden() === template_string_$item(aftercoreleg_templateObject8 || (aftercoreleg_templateObject8 = aftercoreleg_taggedTemplateLiteral(["packet of mushroom spores"]))) || (0,external_kolmafia_namespaceObject.getCampground)()[getGarden().name] === 0,
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("garden pick"),
      tracking: "Dailies",
      limit: {
        tries: 3
      }
    }, {
      name: "Use Mayam",
      // eslint-disable-next-line libram/verify-constants
      ready: () => lib_have(template_string_$item(aftercoreleg_templateObject9 || (aftercoreleg_templateObject9 = aftercoreleg_taggedTemplateLiteral(["Mayam Calendar"])))),
      completed: () => ["yam4", "explosion", "clock"].every(sym => property_get("_mayamSymbolsUsed").includes(sym)),
      do: () => {
        if (template_string_$familiar(aftercoreleg_templateObject10 || (aftercoreleg_templateObject10 = aftercoreleg_taggedTemplateLiteral(["Chest Mimic"]))).experience < 450) (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(aftercoreleg_templateObject11 || (aftercoreleg_templateObject11 = aftercoreleg_taggedTemplateLiteral(["Chest Mimic"]))));else (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(aftercoreleg_templateObject12 || (aftercoreleg_templateObject12 = aftercoreleg_taggedTemplateLiteral(["Grey Goose"]))));
        (0,external_kolmafia_namespaceObject.cliExecute)("mayam rings vessel yam cheese explosion");
        (0,external_kolmafia_namespaceObject.cliExecute)("mayam rings yam meat eyepatch yam");
        (0,external_kolmafia_namespaceObject.cliExecute)("mayam rings fur bottle wall clock");
      }
    }, {
      name: "Plant Grass",
      completed: () => !lib_have(template_string_$item(aftercoreleg_templateObject13 || (aftercoreleg_templateObject13 = aftercoreleg_taggedTemplateLiteral(["packet of tall grass seeds"])))) || getGarden() === template_string_$item(aftercoreleg_templateObject14 || (aftercoreleg_templateObject14 = aftercoreleg_taggedTemplateLiteral(["packet of tall grass seeds"]))),
      do: () => (0,external_kolmafia_namespaceObject.use)(template_string_$item(aftercoreleg_templateObject15 || (aftercoreleg_templateObject15 = aftercoreleg_taggedTemplateLiteral(["packet of tall grass seeds"]))))
    }, {
      name: "SIT Course",
      // eslint-disable-next-line libram/verify-constants
      ready: () => lib_have(template_string_$item(aftercoreleg_templateObject16 || (aftercoreleg_templateObject16 = aftercoreleg_taggedTemplateLiteral(["S.I.T. Course Completion Certificate"])))),
      completed: () => property_get("_sitCourseCompleted", false),
      choices: {
        1494: 2
      },
      do: () =>
      // eslint-disable-next-line libram/verify-constants
      (0,external_kolmafia_namespaceObject.use)(template_string_$item(aftercoreleg_templateObject17 || (aftercoreleg_templateObject17 = aftercoreleg_taggedTemplateLiteral(["S.I.T. Course Completion Certificate"]))))
    }, {
      name: "Drive Observantly",
      completed: () => property_get("dailyDungeonDone") || (0,external_kolmafia_namespaceObject.getWorkshed)() !== template_string_$item(aftercoreleg_templateObject18 || (aftercoreleg_templateObject18 = aftercoreleg_taggedTemplateLiteral(["Asdon Martin keyfob (on ring)"]))) || (0,external_kolmafia_namespaceObject.haveEffect)(template_string_$effect(aftercoreleg_templateObject19 || (aftercoreleg_templateObject19 = aftercoreleg_taggedTemplateLiteral(["Driving Observantly"])))) >= (totallyDrunk() || !lib_have(template_string_$item(aftercoreleg_templateObject20 || (aftercoreleg_templateObject20 = aftercoreleg_taggedTemplateLiteral(["Drunkula's wineglass"])))) ? (0,external_kolmafia_namespaceObject.myAdventures)() : (0,external_kolmafia_namespaceObject.myAdventures)() + 60),
      do: () => drive(template_string_$effect(aftercoreleg_templateObject21 || (aftercoreleg_templateObject21 = aftercoreleg_taggedTemplateLiteral(["Driving Observantly"]))), totallyDrunk() || !lib_have(template_string_$item(aftercoreleg_templateObject22 || (aftercoreleg_templateObject22 = aftercoreleg_taggedTemplateLiteral(["Drunkula's wineglass"])))) ? (0,external_kolmafia_namespaceObject.myAdventures)() : (0,external_kolmafia_namespaceObject.myAdventures)() + 60, false),
      limit: {
        tries: 5
      }
    }, {
      name: "Sample Constellation DNA",
      ready: () => lib_have(template_string_$item(aftercoreleg_templateObject23 || (aftercoreleg_templateObject23 = aftercoreleg_taggedTemplateLiteral(["DNA extraction syringe"])))),
      completed: () => !DNALab_installed() || isHybridized($phylum(aftercoreleg_templateObject24 || (aftercoreleg_templateObject24 = aftercoreleg_taggedTemplateLiteral(["Constellation"])))) || property_get("dnaSyringe") === $phylum(aftercoreleg_templateObject25 || (aftercoreleg_templateObject25 = aftercoreleg_taggedTemplateLiteral(["Constellation"]))),
      outfit: {
        familiar: bestFam(),
        modifier: "".concat(maxBase())
      },
      do: $location(aftercoreleg_templateObject26 || (aftercoreleg_templateObject26 = aftercoreleg_taggedTemplateLiteral(["The Hole in the Sky"]))),
      combat: new CombatStrategy().macro(Macro.skill(template_string_$skill(aftercoreleg_templateObject27 || (aftercoreleg_templateObject27 = aftercoreleg_taggedTemplateLiteral(["Curse of Weaksauce"])))), getTodaysHolidayWanderers()).macro(Macro.tryItem(template_string_$item(aftercoreleg_templateObject28 || (aftercoreleg_templateObject28 = aftercoreleg_taggedTemplateLiteral(["DNA extraction syringe"]))))).macro(Macro.tryItem(template_string_$item(aftercoreleg_templateObject29 || (aftercoreleg_templateObject29 = aftercoreleg_taggedTemplateLiteral(["train whistle"])))).tryItem(template_string_$item(aftercoreleg_templateObject30 || (aftercoreleg_templateObject30 = aftercoreleg_taggedTemplateLiteral(["porquoise-handled sixgun"])))).trySkill(template_string_$skill(aftercoreleg_templateObject31 || (aftercoreleg_templateObject31 = aftercoreleg_taggedTemplateLiteral(["Sing Along"])))).attack().repeat())
    }, {
      name: "Hybridize Constellation",
      ready: () => property_get("dnaSyringe") === $phylum(aftercoreleg_templateObject32 || (aftercoreleg_templateObject32 = aftercoreleg_taggedTemplateLiteral(["Constellation"]))),
      completed: () => !DNALab_installed() || isHybridized($phylum(aftercoreleg_templateObject33 || (aftercoreleg_templateObject33 = aftercoreleg_taggedTemplateLiteral(["Constellation"])))),
      do: () => {
        makeTonic(3);
        hybridize();
      }
    }, {
      name: "LGR Seed",
      ready: () =>
      //best guess if we're going to Dinseylandfill later in the day
      isGoodGarboScript(args.garboascend) || args.pulls.includes(template_string_$item(aftercoreleg_templateObject34 || (aftercoreleg_templateObject34 = aftercoreleg_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"])))),
      completed: () => !lib_have(template_string_$item(aftercoreleg_templateObject35 || (aftercoreleg_templateObject35 = aftercoreleg_taggedTemplateLiteral(["lucky gold ring"])))) || property_get("_stenchAirportToday") || property_get("stenchAirportAlways"),
      do: () => (0,external_kolmafia_namespaceObject.use)(template_string_$item(aftercoreleg_templateObject36 || (aftercoreleg_templateObject36 = aftercoreleg_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"]))))
    }, {
      name: "June Cleaver",
      completed: () => !lib_have(template_string_$item(aftercoreleg_templateObject37 || (aftercoreleg_templateObject37 = aftercoreleg_taggedTemplateLiteral(["June cleaver"])))) || property_get("_juneCleaverFightsLeft") > 0 || (0,external_kolmafia_namespaceObject.myAdventures)() === 0,
      choices: {
        1467: 3,
        //Poetic Justice
        1468: property_get("_juneCleaverSkips") < 5 ? 4 : 2,
        //Aunts not Ants
        1469: 3,
        //Beware of Aligator
        1470: property_get("_juneCleaverSkips") < 5 ? 4 : 2,
        //Teacher's Pet
        1471: 1,
        //Lost and Found
        1472: property_get("_juneCleaverSkips") < 5 ? 4 : 1,
        //Summer Days
        1473: property_get("_juneCleaverSkips") < 5 ? 4 : 1,
        //Bath Time
        1474: property_get("_juneCleaverSkips") < 5 ? 4 : 2,
        //Delicious Sprouts
        1475: 1 //Hypnotic Master
      },

      do: $location(aftercoreleg_templateObject38 || (aftercoreleg_templateObject38 = aftercoreleg_taggedTemplateLiteral(["Noob Cave"]))),
      post: () => {
        if ((0,external_kolmafia_namespaceObject.handlingChoice)()) (0,external_kolmafia_namespaceObject.visitUrl)("main.php");
        if (lib_have(template_string_$effect(aftercoreleg_templateObject39 || (aftercoreleg_templateObject39 = aftercoreleg_taggedTemplateLiteral(["Beaten Up"]))))) uneffect(template_string_$effect(aftercoreleg_templateObject40 || (aftercoreleg_templateObject40 = aftercoreleg_taggedTemplateLiteral(["Beaten Up"]))));
      },
      outfit: () => ({
        equip: template_string_$items(aftercoreleg_templateObject41 || (aftercoreleg_templateObject41 = aftercoreleg_taggedTemplateLiteral(["June cleaver"])))
      }),
      limit: undefined
    }, {
      name: "Restore HP",
      completed: () => (0,external_kolmafia_namespaceObject.myHp)() > 0.5 * (0,external_kolmafia_namespaceObject.myMaxhp)(),
      do: () => (0,external_kolmafia_namespaceObject.restoreHp)(0.95 * (0,external_kolmafia_namespaceObject.myMaxhp)())
    }, {
      name: "Implement Glitch",
      ready: () => lib_have(template_string_$item(aftercoreleg_templateObject42 || (aftercoreleg_templateObject42 = aftercoreleg_taggedTemplateLiteral(["[glitch season reward name]"])))),
      completed: () => property_get("_glitchItemImplemented"),
      do: () => (0,external_kolmafia_namespaceObject.use)(template_string_$item(aftercoreleg_templateObject43 || (aftercoreleg_templateObject43 = aftercoreleg_taggedTemplateLiteral(["[glitch season reward name]"]))))
    }, {
      name: "Fight Glitch",
      ready: () => lib_have(template_string_$item(aftercoreleg_templateObject44 || (aftercoreleg_templateObject44 = aftercoreleg_taggedTemplateLiteral(["[glitch season reward name]"])))),
      completed: () => property_get("_glitchMonsterFights") > 0,
      acquire: template_string_$items(aftercoreleg_templateObject45 || (aftercoreleg_templateObject45 = aftercoreleg_taggedTemplateLiteral(["gas can, gas balloon, shard of double-ice"]))).map(it => ({
        item: it,
        price: 1000
      })),
      prepare: () => {
        (0,external_kolmafia_namespaceObject.restoreHp)(0.9 * (0,external_kolmafia_namespaceObject.myMaxhp)());
        if (lib_have(template_string_$skill(aftercoreleg_templateObject46 || (aftercoreleg_templateObject46 = aftercoreleg_taggedTemplateLiteral(["Blood Bubble"])))) && !lib_have(template_string_$effect(aftercoreleg_templateObject47 || (aftercoreleg_templateObject47 = aftercoreleg_taggedTemplateLiteral(["Blood Bubble"]))))) (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(aftercoreleg_templateObject48 || (aftercoreleg_templateObject48 = aftercoreleg_taggedTemplateLiteral(["Blood Bubble"]))));
      },
      do: () => (0,external_kolmafia_namespaceObject.visitUrl)("inv_eat.php?pwd&whichitem=10207"),
      post: () => {
        if (!property_get("_lastCombatWon")) throw new Error("Lost Combat - Check to see what went wrong.");
      },
      outfit: () => ({
        familiar: bestFam(),
        modifier: "".concat((0,external_kolmafia_namespaceObject.myPrimestat)(), " experience, 5 ").concat((0,external_kolmafia_namespaceObject.myPrimestat)(), " experience percent, ").concat(noML())
      }),
      combat: new CombatStrategy().macro(() => {
        var _Macro$tryItem$trySki;
        return (_Macro$tryItem$trySki = Macro.tryItem(template_string_$item(aftercoreleg_templateObject49 || (aftercoreleg_templateObject49 = aftercoreleg_taggedTemplateLiteral(["gas balloon"])))).trySkill(template_string_$skill(aftercoreleg_templateObject50 || (aftercoreleg_templateObject50 = aftercoreleg_taggedTemplateLiteral(["Feel Pride"]))))).tryItem.apply(_Macro$tryItem$trySki, aftercoreleg_toConsumableArray(template_string_$items(aftercoreleg_templateObject51 || (aftercoreleg_templateObject51 = aftercoreleg_taggedTemplateLiteral(["shard of double-ice, gas can"]))))).attack().repeat();
      }),
      tracking: "Leveling"
    }, {
      name: "Unlock Guild",
      ready: () => (0,external_kolmafia_namespaceObject.myClass)() === $class(aftercoreleg_templateObject52 || (aftercoreleg_templateObject52 = aftercoreleg_taggedTemplateLiteral(["Seal Clubber"]))) && Math.min.apply(Math, aftercoreleg_toConsumableArray(template_string_$items(aftercoreleg_templateObject53 || (aftercoreleg_templateObject53 = aftercoreleg_taggedTemplateLiteral(["figurine of a wretched-looking seal, seal-blubber candle"]))).map(it => (0,external_kolmafia_namespaceObject.availableAmount)(it)))) < 20 && doSmol,
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
        familiar: bestFam(),
        modifier: "".concat(maxBase(), ", ").concat((0,external_kolmafia_namespaceObject.myPrimestat)() === $stat(aftercoreleg_templateObject54 || (aftercoreleg_templateObject54 = aftercoreleg_taggedTemplateLiteral(["Muscle"]))) ? "100 combat rate 20 max" : "-100 combat rate", ", 250 bonus carnivorous potted plant")
      }),
      combat: new CombatStrategy().macro(() => Macro.step("pickpocket").externalIf(lib_have(template_string_$skill(aftercoreleg_templateObject55 || (aftercoreleg_templateObject55 = aftercoreleg_taggedTemplateLiteral(["Curse of Weaksauce"])))), Macro.trySkill(template_string_$skill(aftercoreleg_templateObject56 || (aftercoreleg_templateObject56 = aftercoreleg_taggedTemplateLiteral(["Curse of Weaksauce"])))), Macro.tryItem(template_string_$item(aftercoreleg_templateObject57 || (aftercoreleg_templateObject57 = aftercoreleg_taggedTemplateLiteral(["electronics kit"]))))).tryItem(template_string_$item(aftercoreleg_templateObject58 || (aftercoreleg_templateObject58 = aftercoreleg_taggedTemplateLiteral(["porquoise-handled sixgun"])))).trySkill(template_string_$skill(aftercoreleg_templateObject59 || (aftercoreleg_templateObject59 = aftercoreleg_taggedTemplateLiteral(["Sing Along"])))).attack().repeat(), getTodaysHolidayWanderers()).macro(() => Macro.step("pickpocket").trySkill(template_string_$skill(aftercoreleg_templateObject60 || (aftercoreleg_templateObject60 = aftercoreleg_taggedTemplateLiteral(["Sing Along"])))).tryItem(template_string_$item(aftercoreleg_templateObject61 || (aftercoreleg_templateObject61 = aftercoreleg_taggedTemplateLiteral(["porquoise-handled sixgun"])))).attack().repeat())
    }, {
      name: "Stock Up on MMJs",
      ready: () => (0,external_kolmafia_namespaceObject.guildStoreAvailable)() && ((0,external_kolmafia_namespaceObject.myClass)().primestat === $stat(aftercoreleg_templateObject62 || (aftercoreleg_templateObject62 = aftercoreleg_taggedTemplateLiteral(["Mysticality"]))) || (0,external_kolmafia_namespaceObject.myClass)() === $class(aftercoreleg_templateObject63 || (aftercoreleg_templateObject63 = aftercoreleg_taggedTemplateLiteral(["Accordion Thief"]))) && (0,external_kolmafia_namespaceObject.myLevel)() >= 9),
      completed: () => (0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(aftercoreleg_templateObject64 || (aftercoreleg_templateObject64 = aftercoreleg_taggedTemplateLiteral(["magical mystery juice"])))) >= 500,
      acquire: [{
        item: template_string_$item(aftercoreleg_templateObject65 || (aftercoreleg_templateObject65 = aftercoreleg_taggedTemplateLiteral(["magical mystery juice"]))),
        num: 500
      }],
      do: () => false
    }, {
      name: "Buy Seal Summoning Supplies",
      ready: () => (0,external_kolmafia_namespaceObject.myClass)() === $class(aftercoreleg_templateObject66 || (aftercoreleg_templateObject66 = aftercoreleg_taggedTemplateLiteral(["Seal Clubber"]))) && (0,external_kolmafia_namespaceObject.guildStoreAvailable)(),
      completed: () => Math.min.apply(Math, aftercoreleg_toConsumableArray(template_string_$items(aftercoreleg_templateObject67 || (aftercoreleg_templateObject67 = aftercoreleg_taggedTemplateLiteral(["figurine of a wretched-looking seal, seal-blubber candle"]))).map(it => (0,external_kolmafia_namespaceObject.availableAmount)(it)))) >= 40,
      acquire: template_string_$items(aftercoreleg_templateObject68 || (aftercoreleg_templateObject68 = aftercoreleg_taggedTemplateLiteral(["figurine of a wretched-looking seal, seal-blubber candle"]))).map(it => ({
        item: it,
        num: 500
      })),
      do: () => false
    }, {
      name: "Garbo",
      completed: () => stooperDrunk() || (0,external_kolmafia_namespaceObject.myAdventures)() === 0,
      prepare: () => uneffect(template_string_$effect(aftercoreleg_templateObject69 || (aftercoreleg_templateObject69 = aftercoreleg_taggedTemplateLiteral(["Beaten Up"])))),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)(args.garboascend),
      post: () => {
        if ((0,external_kolmafia_namespaceObject.myAdventures)() === 0) $effects(aftercoreleg_templateObject70 || (aftercoreleg_templateObject70 = aftercoreleg_taggedTemplateLiteral(["Power Ballad of the Arrowsmith, Stevedave's Shanty of Superiority, The Moxious Madrigal, The Magical Mojomuscular Melody, Aloysius' Antiphon of Aptitude, Ur-Kel's Aria of Annoyance"]))).filter(ef => lib_have(ef)).forEach(ef => uneffect(ef));
      },
      clear: "all",
      tracking: "Garbo",
      limit: {
        tries: 1
      } //this will run again after installing CMC, by magic
    }, {
      name: "Stooper",
      ready: () => (0,external_kolmafia_namespaceObject.myInebriety)() === (0,external_kolmafia_namespaceObject.inebrietyLimit)() && lib_have(template_string_$item(aftercoreleg_templateObject71 || (aftercoreleg_templateObject71 = aftercoreleg_taggedTemplateLiteral(["tiny stillsuit"])))) && property_get("familiarSweat") >= 300,
      completed: () => !lib_have(template_string_$familiar(aftercoreleg_templateObject72 || (aftercoreleg_templateObject72 = aftercoreleg_taggedTemplateLiteral(["Stooper"])))) || stooperDrunk(),
      do: () => {
        (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(aftercoreleg_templateObject73 || (aftercoreleg_templateObject73 = aftercoreleg_taggedTemplateLiteral(["Stooper"]))));
        (0,external_kolmafia_namespaceObject.cliExecute)("drink stillsuit distillate");
      }
    }, {
      name: "Barfing Drunk with Stooper",
      ready: () => stooperDrunk() && lib_have(template_string_$familiar(aftercoreleg_templateObject74 || (aftercoreleg_templateObject74 = aftercoreleg_taggedTemplateLiteral(["Stooper"])))) && !lib_have(template_string_$item(aftercoreleg_templateObject75 || (aftercoreleg_templateObject75 = aftercoreleg_taggedTemplateLiteral(["Drunkula's wineglass"])))),
      completed: () => (0,external_kolmafia_namespaceObject.myAdventures)() === 0 || totallyDrunk(),
      acquire: [{
        item: template_string_$item(aftercoreleg_templateObject76 || (aftercoreleg_templateObject76 = aftercoreleg_taggedTemplateLiteral(["seal tooth"])))
      }],
      outfit: () => ({
        familiar: template_string_$familiar(aftercoreleg_templateObject77 || (aftercoreleg_templateObject77 = aftercoreleg_taggedTemplateLiteral(["Stooper"]))),
        modifier: "".concat(maxBase(), ", 2.5 meat, 0.6 items")
      }),
      effects: $effects(aftercoreleg_templateObject78 || (aftercoreleg_templateObject78 = aftercoreleg_taggedTemplateLiteral(["How to Scam Tourists"]))),
      //need to add meat buffs that we can cast
      prepare: () => {
        (0,external_kolmafia_namespaceObject.restoreHp)(0.75 * (0,external_kolmafia_namespaceObject.myMaxhp)());
        (0,external_kolmafia_namespaceObject.restoreMp)(20);
      },
      do: $location(aftercoreleg_templateObject79 || (aftercoreleg_templateObject79 = aftercoreleg_taggedTemplateLiteral(["Barf Mountain"]))),
      combat: new CombatStrategy().macro(Macro.trySkill(template_string_$skill(aftercoreleg_templateObject80 || (aftercoreleg_templateObject80 = aftercoreleg_taggedTemplateLiteral(["Curse of Weaksauce"])))), getTodaysHolidayWanderers()).macro(() => Macro.step("pickpocket").tryItem(template_string_$item(aftercoreleg_templateObject81 || (aftercoreleg_templateObject81 = aftercoreleg_taggedTemplateLiteral(["train whistle"])))).trySkill(template_string_$skill(aftercoreleg_templateObject82 || (aftercoreleg_templateObject82 = aftercoreleg_taggedTemplateLiteral(["Bowl Straight Up"])))).trySkill(template_string_$skill(aftercoreleg_templateObject83 || (aftercoreleg_templateObject83 = aftercoreleg_taggedTemplateLiteral(["Sing Along"])))).tryItem(template_string_$item(aftercoreleg_templateObject84 || (aftercoreleg_templateObject84 = aftercoreleg_taggedTemplateLiteral(["porquoise-handled sixgun"])))).externalIf((0,external_kolmafia_namespaceObject.haveEquipped)(template_string_$item(aftercoreleg_templateObject85 || (aftercoreleg_templateObject85 = aftercoreleg_taggedTemplateLiteral(["mafia pointer finger ring"])))), Macro.trySkill(template_string_$skill(aftercoreleg_templateObject86 || (aftercoreleg_templateObject86 = aftercoreleg_taggedTemplateLiteral(["Furious Wallop"])))).trySkill(template_string_$skill(aftercoreleg_templateObject87 || (aftercoreleg_templateObject87 = aftercoreleg_taggedTemplateLiteral(["Summer Siesta"])))).trySkill(template_string_$skill(_templateObject88 || (_templateObject88 = aftercoreleg_taggedTemplateLiteral(["Throw Shield"])))).trySkill(template_string_$skill(_templateObject89 || (_templateObject89 = aftercoreleg_taggedTemplateLiteral(["Precision Shot"]))))).attack().repeat()),
      limit: {
        tries: 30
      }
    }, {
      name: "Nightcap (Wine Glass)",
      ready: () => lib_have(template_string_$item(_templateObject90 || (_templateObject90 = aftercoreleg_taggedTemplateLiteral(["Drunkula's wineglass"])))),
      completed: () => totallyDrunk(),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("CONSUME NIGHTCAP VALUE ".concat(property_get("valueOfAdventure") - 1000))
    }, {
      name: "Nightcap (Marginal)",
      ready: () => lib_have(template_string_$item(_templateObject91 || (_templateObject91 = aftercoreleg_taggedTemplateLiteral(["Beach Comb"])))) || lib_have(template_string_$item(_templateObject92 || (_templateObject92 = aftercoreleg_taggedTemplateLiteral(["Map to Safety Shelter Grimace Prime"])))),
      completed: () => totallyDrunk(),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("CONSUME NIGHTCAP VALUE 500")
    }, {
      name: "Grimace Maps",
      ready: () => !lib_have(template_string_$item(_templateObject93 || (_templateObject93 = aftercoreleg_taggedTemplateLiteral(["Drunkula's wineglass"])))),
      completed: () => (0,external_kolmafia_namespaceObject.myAdventures)() === 0 || !lib_have(template_string_$item(_templateObject94 || (_templateObject94 = aftercoreleg_taggedTemplateLiteral(["Map to Safety Shelter Grimace Prime"])))),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("grimace maps"),
      limit: {
        tries: 30
      }
    }, {
      name: "Garbo (Drunk)",
      ready: () => lib_have(template_string_$item(_templateObject95 || (_templateObject95 = aftercoreleg_taggedTemplateLiteral(["Drunkula's wineglass"])))),
      prepare: () => uneffect(template_string_$effect(_templateObject96 || (_templateObject96 = aftercoreleg_taggedTemplateLiteral(["Beaten Up"])))),
      completed: () => (0,external_kolmafia_namespaceObject.myAdventures)() === 0,
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("garbo ascend"),
      post: () => $effects(_templateObject97 || (_templateObject97 = aftercoreleg_taggedTemplateLiteral(["Power Ballad of the Arrowsmith, Stevedave's Shanty of Superiority, The Moxious Madrigal, The Magical Mojomuscular Melody, Aloysius' Antiphon of Aptitude, Ur-Kel's Aria of Annoyance"]))).filter(ef => lib_have(ef)).forEach(ef => uneffect(ef)),
      clear: "all",
      tracking: "Garbo"
    }, {
      name: "Comb Beach",
      ready: () => lib_have(template_string_$item(_templateObject98 || (_templateObject98 = aftercoreleg_taggedTemplateLiteral(["Beach Comb"])))),
      completed: () => (0,external_kolmafia_namespaceObject.myAdventures)() === 0,
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("combo ".concat(11 - property_get("_freeBeachWalksUsed") + (0,external_kolmafia_namespaceObject.myAdventures)()))
    }, {
      name: "Turn in FunFunds",
      ready: () => property_get("_stenchAirportToday") && (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(_templateObject99 || (_templateObject99 = aftercoreleg_taggedTemplateLiteral(["FunFunds\u2122"])))) >= 20,
      completed: () => lib_have(template_string_$item(_templateObject100 || (_templateObject100 = aftercoreleg_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"])))),
      do: () => (0,external_kolmafia_namespaceObject.buy)($coinmaster(_templateObject101 || (_templateObject101 = aftercoreleg_taggedTemplateLiteral(["The Dinsey Company Store"]))), 1, template_string_$item(_templateObject102 || (_templateObject102 = aftercoreleg_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"])))),
      tracking: "Garbo"
    }, {
      name: "PvP",
      completed: () => (0,external_kolmafia_namespaceObject.pvpAttacksLeft)() === 0 || !(0,external_kolmafia_namespaceObject.hippyStoneBroken)(),
      do: () => {
        (0,external_kolmafia_namespaceObject.cliExecute)("unequip");
        (0,external_kolmafia_namespaceObject.cliExecute)("UberPvPOptimizer");
        (0,external_kolmafia_namespaceObject.cliExecute)("swagger");
      }
    }, {
      name: "Prepare for LoopSmol",
      ready: () => doSmol,
      completed: () => lib_have(template_string_$item(_templateObject103 || (_templateObject103 = aftercoreleg_taggedTemplateLiteral(["Pizza of Legend"])))) && lib_have(template_string_$item(_templateObject104 || (_templateObject104 = aftercoreleg_taggedTemplateLiteral(["Frosty's frosty mug"])))) && lib_have(template_string_$item(_templateObject105 || (_templateObject105 = aftercoreleg_taggedTemplateLiteral(["Ol' Scratch's salad fork"])))),
      do: () => {
        if ((0,external_kolmafia_namespaceObject.mallPrice)(template_string_$item(_templateObject106 || (_templateObject106 = aftercoreleg_taggedTemplateLiteral(["Frosty's frosty mug"])))) < 200000 && (0,external_kolmafia_namespaceObject.mallPrice)(template_string_$item(_templateObject107 || (_templateObject107 = aftercoreleg_taggedTemplateLiteral(["Ol' Scratch's salad fork"])))) < 200000) (0,external_kolmafia_namespaceObject.cliExecute)("acquire Pizza of Legend; acquire Frosty's frosty mug; acquire Ol' Scratch's salad fork");
      }
    }, {
      name: "Marble Soda!",
      ready: () => doCS,
      completed: () => lib_have(template_string_$item(_templateObject108 || (_templateObject108 = aftercoreleg_taggedTemplateLiteral(["tobiko marble soda"])))) || skipSoda,
      do: () => {
        if ((0,external_kolmafia_namespaceObject.mallPrice)(template_string_$item(_templateObject109 || (_templateObject109 = aftercoreleg_taggedTemplateLiteral(["tobiko marble soda"])))) < property_get("valueOfAdventure") * 2) (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(_templateObject110 || (_templateObject110 = aftercoreleg_taggedTemplateLiteral(["tobiko marble soda"]))));else {
          (0,external_kolmafia_namespaceObject.print)("Soda is too expensive, mallprice is ".concat((0,external_kolmafia_namespaceObject.mallPrice)(template_string_$item(_templateObject111 || (_templateObject111 = aftercoreleg_taggedTemplateLiteral(["tobiko marble soda"]))))));
          skipSoda = true;
        }
      }
    }, {
      name: "Cheap Comma Run Setup",
      ready: () => doSmol,
      completed: () => {
        if (findCheapRun() === null) return true;
        if (!lib_have(template_string_$familiar(_templateObject112 || (_templateObject112 = aftercoreleg_taggedTemplateLiteral(["Comma Chameleon"]))))) return true;
        if (lib_have(template_string_$familiar(_templateObject113 || (_templateObject113 = aftercoreleg_taggedTemplateLiteral(["Frumious Bandersnatch"])))) || lib_have(template_string_$familiar(_templateObject114 || (_templateObject114 = aftercoreleg_taggedTemplateLiteral(["Pair of Stomping Boots"]))))) return true;
        if (template_string_$items(_templateObject115 || (_templateObject115 = aftercoreleg_taggedTemplateLiteral(["aquaviolet jub-jub bird, charpuce jub-jub bird, crimsilion jub-jub bird, stomp box"]))).find(f => lib_have(f))) return true;
        if (findCheapRun() !== null) {
          if ((0,external_kolmafia_namespaceObject.mallPrice)(findCheapRun()) > 8 * property_get("valueOfAdventure")) return true;
        }
        return false;
      },
      do: () => {
        (0,external_kolmafia_namespaceObject.retrieveItem)(findCheapRun());
      }
    }, {
      name: "Prepare for LoopCS",
      completed: () => lib_have(template_string_$item(_templateObject116 || (_templateObject116 = aftercoreleg_taggedTemplateLiteral(["Pizza of Legend"])))) && lib_have(template_string_$item(_templateObject117 || (_templateObject117 = aftercoreleg_taggedTemplateLiteral(["Deep Dish of Legend"])))) && lib_have(template_string_$item(_templateObject118 || (_templateObject118 = aftercoreleg_taggedTemplateLiteral(["Calzone of Legend"])))),
      do: () => {
        !lib_have(template_string_$item(_templateObject119 || (_templateObject119 = aftercoreleg_taggedTemplateLiteral(["Pizza of Legend"])))) ? (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(_templateObject120 || (_templateObject120 = aftercoreleg_taggedTemplateLiteral(["Pizza of Legend"])))) : undefined;
        !lib_have(template_string_$item(_templateObject121 || (_templateObject121 = aftercoreleg_taggedTemplateLiteral(["Deep Dish of Legend"])))) ? (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(_templateObject122 || (_templateObject122 = aftercoreleg_taggedTemplateLiteral(["Deep Dish of Legend"])))) : undefined;
        !lib_have(template_string_$item(_templateObject123 || (_templateObject123 = aftercoreleg_taggedTemplateLiteral(["Calzone of Legend"])))) ? (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(_templateObject124 || (_templateObject124 = aftercoreleg_taggedTemplateLiteral(["Calzone of Legend"])))) : undefined;
        !lib_have(template_string_$item(_templateObject125 || (_templateObject125 = aftercoreleg_taggedTemplateLiteral(["borrowed time"])))) ? (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(_templateObject126 || (_templateObject126 = aftercoreleg_taggedTemplateLiteral(["borrowed time"])))) : undefined;
      }
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
    }]
  };
}
;// CONCATENATED MODULE: ./src/tasks/smolrunleg.ts
var smolrunleg_templateObject, smolrunleg_templateObject2, smolrunleg_templateObject3, smolrunleg_templateObject4, smolrunleg_templateObject5, smolrunleg_templateObject6, smolrunleg_templateObject7, smolrunleg_templateObject8, smolrunleg_templateObject9, smolrunleg_templateObject10, smolrunleg_templateObject11, smolrunleg_templateObject12, smolrunleg_templateObject13, smolrunleg_templateObject14, smolrunleg_templateObject15, smolrunleg_templateObject16, smolrunleg_templateObject17, smolrunleg_templateObject18, smolrunleg_templateObject19, smolrunleg_templateObject20, smolrunleg_templateObject21, smolrunleg_templateObject22, smolrunleg_templateObject23, smolrunleg_templateObject24, smolrunleg_templateObject25, smolrunleg_templateObject26, smolrunleg_templateObject27, smolrunleg_templateObject28, smolrunleg_templateObject29, smolrunleg_templateObject30, smolrunleg_templateObject31, smolrunleg_templateObject32, smolrunleg_templateObject33, smolrunleg_templateObject34, smolrunleg_templateObject35, smolrunleg_templateObject36, smolrunleg_templateObject37, smolrunleg_templateObject38, smolrunleg_templateObject39, smolrunleg_templateObject40, smolrunleg_templateObject41, smolrunleg_templateObject42, smolrunleg_templateObject43, smolrunleg_templateObject44, smolrunleg_templateObject45, smolrunleg_templateObject46, smolrunleg_templateObject47, smolrunleg_templateObject48, smolrunleg_templateObject49, smolrunleg_templateObject50, smolrunleg_templateObject51, smolrunleg_templateObject52, smolrunleg_templateObject53, smolrunleg_templateObject54, smolrunleg_templateObject55, smolrunleg_templateObject56, smolrunleg_templateObject57, smolrunleg_templateObject58, smolrunleg_templateObject59, smolrunleg_templateObject60, smolrunleg_templateObject61, smolrunleg_templateObject62, smolrunleg_templateObject63, smolrunleg_templateObject64, smolrunleg_templateObject65, smolrunleg_templateObject66, smolrunleg_templateObject67, smolrunleg_templateObject68, smolrunleg_templateObject69, smolrunleg_templateObject70, smolrunleg_templateObject71, smolrunleg_templateObject72, smolrunleg_templateObject73, smolrunleg_templateObject74, smolrunleg_templateObject75, smolrunleg_templateObject76, smolrunleg_templateObject77, smolrunleg_templateObject78, smolrunleg_templateObject79, smolrunleg_templateObject80, smolrunleg_templateObject81, smolrunleg_templateObject82, smolrunleg_templateObject83, smolrunleg_templateObject84, smolrunleg_templateObject85, smolrunleg_templateObject86, smolrunleg_templateObject87, smolrunleg_templateObject88, smolrunleg_templateObject89, smolrunleg_templateObject90, smolrunleg_templateObject91, smolrunleg_templateObject92, smolrunleg_templateObject93, smolrunleg_templateObject94, smolrunleg_templateObject95, smolrunleg_templateObject96, smolrunleg_templateObject97, smolrunleg_templateObject98, smolrunleg_templateObject99, smolrunleg_templateObject100, smolrunleg_templateObject101, smolrunleg_templateObject102, smolrunleg_templateObject103, smolrunleg_templateObject104, smolrunleg_templateObject105, smolrunleg_templateObject106, smolrunleg_templateObject107, smolrunleg_templateObject108, smolrunleg_templateObject109, smolrunleg_templateObject110, smolrunleg_templateObject111, smolrunleg_templateObject112, smolrunleg_templateObject113, smolrunleg_templateObject114, smolrunleg_templateObject115, smolrunleg_templateObject116, smolrunleg_templateObject117, smolrunleg_templateObject118, smolrunleg_templateObject119, smolrunleg_templateObject120, smolrunleg_templateObject121, smolrunleg_templateObject122, smolrunleg_templateObject123, smolrunleg_templateObject124, smolrunleg_templateObject125, smolrunleg_templateObject126, _templateObject127, _templateObject128, _templateObject129, _templateObject130, _templateObject131, _templateObject132, _templateObject133, _templateObject134, _templateObject135, _templateObject136, _templateObject137, _templateObject138, _templateObject139, _templateObject140, _templateObject141, _templateObject142, _templateObject143, _templateObject144, _templateObject145, _templateObject146, _templateObject147, _templateObject148, _templateObject149, _templateObject150;
function smolrunleg_toConsumableArray(arr) { return smolrunleg_arrayWithoutHoles(arr) || smolrunleg_iterableToArray(arr) || smolrunleg_unsupportedIterableToArray(arr) || smolrunleg_nonIterableSpread(); }
function smolrunleg_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function smolrunleg_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return smolrunleg_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return smolrunleg_arrayLikeToArray(o, minLen); }
function smolrunleg_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function smolrunleg_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return smolrunleg_arrayLikeToArray(arr); }
function smolrunleg_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function smolrunleg_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var smolrunleg_pajamas = false;
var smolrunleg_smoke = 1;
var commaSetupDone = false;
var checkMelange = property_get("valueOfAdventure") * 45 > (0,external_kolmafia_namespaceObject.mallPrice)(template_string_$item(smolrunleg_templateObject || (smolrunleg_templateObject = smolrunleg_taggedTemplateLiteral(["spice melange"])))) && !lib_have(template_string_$item(smolrunleg_templateObject2 || (smolrunleg_templateObject2 = smolrunleg_taggedTemplateLiteral(["designer sweatpants"]))));
function howManySausagesCouldIEat() {
  if (!lib_have(template_string_$item(smolrunleg_templateObject3 || (smolrunleg_templateObject3 = smolrunleg_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))))) return 0;
  // You may be full but you can't be overfull
  if ((0,external_kolmafia_namespaceObject.myFullness)() > (0,external_kolmafia_namespaceObject.fullnessLimit)()) return 0;
  return utils_clamp(23 - property_get("_sausagesEaten"), 0, (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(smolrunleg_templateObject4 || (smolrunleg_templateObject4 = smolrunleg_taggedTemplateLiteral(["magical sausage"])))) + (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(smolrunleg_templateObject5 || (smolrunleg_templateObject5 = smolrunleg_taggedTemplateLiteral(["magical sausage casing"])))));
}
function firstWorkshed() {
  return template_string_$items(smolrunleg_templateObject6 || (smolrunleg_templateObject6 = smolrunleg_taggedTemplateLiteral(["model train set, Asdon Martin keyfob (on ring), cold medicine cabinet, Little Geneticist DNA-Splicing Lab, portable Mayo Clinic"]))).find(it => lib_have(it) || (0,external_kolmafia_namespaceObject.getWorkshed)() === it || (0,external_kolmafia_namespaceObject.storageAmount)(it) > 0) || template_string_$item(smolrunleg_templateObject7 || (smolrunleg_templateObject7 = smolrunleg_taggedTemplateLiteral(["none"])));
}
function altWorkshed() {
  var ws = (0,external_kolmafia_namespaceObject.getWorkshed)();
  switch (ws) {
    case template_string_$item(smolrunleg_templateObject8 || (smolrunleg_templateObject8 = smolrunleg_taggedTemplateLiteral(["model train set"]))):
      return template_string_$items(smolrunleg_templateObject9 || (smolrunleg_templateObject9 = smolrunleg_taggedTemplateLiteral(["cold medicine cabinet, Asdon Martin keyfob (on ring), Little Geneticist DNA-Splicing Lab, portable Mayo Clinic"]))).find(it => lib_have(it) || (0,external_kolmafia_namespaceObject.getWorkshed)() === it || (0,external_kolmafia_namespaceObject.storageAmount)(it) > 0) || ws;
    case template_string_$item(smolrunleg_templateObject10 || (smolrunleg_templateObject10 = smolrunleg_taggedTemplateLiteral(["Asdon Martin keyfob (on ring)"]))):
      return template_string_$items(smolrunleg_templateObject11 || (smolrunleg_templateObject11 = smolrunleg_taggedTemplateLiteral(["cold medicine cabinet, model train set, Little Geneticist DNA-Splicing Lab, portable Mayo Clinic"]))).find(it => lib_have(it) || (0,external_kolmafia_namespaceObject.getWorkshed)() === it || (0,external_kolmafia_namespaceObject.storageAmount)(it) > 0) || ws;
    case template_string_$item(smolrunleg_templateObject12 || (smolrunleg_templateObject12 = smolrunleg_taggedTemplateLiteral(["cold medicine cabinet"]))):
      return template_string_$items(smolrunleg_templateObject13 || (smolrunleg_templateObject13 = smolrunleg_taggedTemplateLiteral(["Asdon Martin keyfob (on ring), model train set, Little Geneticist DNA-Splicing Lab, portable Mayo Clinic, warbear induction oven, snow machine"]))).find(it => lib_have(it) || (0,external_kolmafia_namespaceObject.getWorkshed)() === it || (0,external_kolmafia_namespaceObject.storageAmount)(it) > 0) || ws;
    case template_string_$item(smolrunleg_templateObject14 || (smolrunleg_templateObject14 = smolrunleg_taggedTemplateLiteral(["Little Geneticist DNA-Splicing Lab"]))):
      return template_string_$items(smolrunleg_templateObject15 || (smolrunleg_templateObject15 = smolrunleg_taggedTemplateLiteral(["cold medicine cabinet, Asdon Martin keyfob (on ring), model train set, portable Mayo Clinic"]))).find(it => lib_have(it) || (0,external_kolmafia_namespaceObject.getWorkshed)() === it || (0,external_kolmafia_namespaceObject.storageAmount)(it) > 0) || ws;
    case template_string_$item(smolrunleg_templateObject16 || (smolrunleg_templateObject16 = smolrunleg_taggedTemplateLiteral(["portable Mayo Clinic"]))):
      return template_string_$items(smolrunleg_templateObject17 || (smolrunleg_templateObject17 = smolrunleg_taggedTemplateLiteral(["cold medicine cabinet, model train set, Asdon Martin keyfob (on ring), Little Geneticist DNA-Splicing Lab"]))).find(it => lib_have(it) || (0,external_kolmafia_namespaceObject.getWorkshed)() === it || (0,external_kolmafia_namespaceObject.storageAmount)(it) > 0) || ws;
    default:
      return template_string_$item(smolrunleg_templateObject18 || (smolrunleg_templateObject18 = smolrunleg_taggedTemplateLiteral(["none"])));
  }
}
function SmolQuests() {
  return [{
    name: "Smol Run",
    completed: () => getCurrentLeg() !== Leg.Run || property_get("kingLiberated", false),
    tasks: [{
      name: "Whitelist VIP Clan",
      completed: () => !args.clan || (0,external_kolmafia_namespaceObject.getClanName)().toLowerCase() === args.clan.toLowerCase(),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("/whitelist ".concat(args.clan)),
      choices: {
        1507: 1
      }
    }, {
      name: "Prep Fireworks Shop",
      completed: () => !lib_have(template_string_$item(smolrunleg_templateObject19 || (smolrunleg_templateObject19 = smolrunleg_taggedTemplateLiteral(["Clan VIP Lounge key"])))) || property_get("_goorboFireworksPrepped", false),
      do: () => {
        (0,external_kolmafia_namespaceObject.visitUrl)("clan_viplounge.php?action=fwshop&whichfloor=2");
        _set("_goorboFireworksPrepped", true);
      }
    }, {
      name: "Pre-Pulls",
      completed: () => (0,external_kolmafia_namespaceObject.pullsRemaining)() === 0 || !args.pulls.find(it => !lib_have(it) && !property_get("_roninStoragePulls").includes((0,external_kolmafia_namespaceObject.toInt)(it).toString())),
      //can't find a pull that (we dont have and it hasn't been pulled today)
      do: () => args.pulls.forEach(it => {
        if (!lib_have(it) && !property_get("_roninStoragePulls").includes((0,external_kolmafia_namespaceObject.toInt)(it).toString())) {
          if ((0,external_kolmafia_namespaceObject.storageAmount)(it) === 0) (0,external_kolmafia_namespaceObject.buyUsingStorage)(it); //should respect autoBuyPriceLimit
          (0,external_kolmafia_namespaceObject.cliExecute)("pull ".concat(it));
        }
      })
    }, {
      name: "LGR Seed",
      ready: () => lib_have(template_string_$item(smolrunleg_templateObject20 || (smolrunleg_templateObject20 = smolrunleg_taggedTemplateLiteral(["lucky gold ring"])))) && lib_have(template_string_$item(smolrunleg_templateObject21 || (smolrunleg_templateObject21 = smolrunleg_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"])))),
      completed: () => property_get("_stenchAirportToday") || property_get("stenchAirportAlways"),
      do: () => (0,external_kolmafia_namespaceObject.use)(template_string_$item(smolrunleg_templateObject22 || (smolrunleg_templateObject22 = smolrunleg_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"])))),
      tracking: "Garbo"
    }, {
      name: "Install First Workshed",
      ready: () => lib_have(firstWorkshed()),
      completed: () => firstWorkshed() === template_string_$item(smolrunleg_templateObject23 || (smolrunleg_templateObject23 = smolrunleg_taggedTemplateLiteral(["none"]))) || property_get("_workshedItemUsed") || (0,external_kolmafia_namespaceObject.getWorkshed)() !== template_string_$item(smolrunleg_templateObject24 || (smolrunleg_templateObject24 = smolrunleg_taggedTemplateLiteral(["none"]))),
      do: () => (0,external_kolmafia_namespaceObject.use)(firstWorkshed())
    }, {
      name: "SIT Course",
      // eslint-disable-next-line libram/verify-constants
      ready: () => lib_have(template_string_$item(smolrunleg_templateObject25 || (smolrunleg_templateObject25 = smolrunleg_taggedTemplateLiteral(["S.I.T. Course Completion Certificate"])))),
      completed: () => property_get("_sitCourseCompleted", false),
      choices: {
        1494: 2
      },
      do: () =>
      // eslint-disable-next-line libram/verify-constants
      (0,external_kolmafia_namespaceObject.use)(template_string_$item(smolrunleg_templateObject26 || (smolrunleg_templateObject26 = smolrunleg_taggedTemplateLiteral(["S.I.T. Course Completion Certificate"]))))
    }, {
      name: "Break Stone",
      completed: () => (0,external_kolmafia_namespaceObject.hippyStoneBroken)() || !args.pvp,
      do: () => {
        (0,external_kolmafia_namespaceObject.visitUrl)("peevpee.php?action=smashstone&pwd&confirm=on", true);
        (0,external_kolmafia_namespaceObject.visitUrl)("peevpee.php?place=fight");
      }
    }, {
      name: "Prepare Empathy",
      completed: () => property_get("_empathyReady", false),
      do: () => {
        (0,external_kolmafia_namespaceObject.cliExecute)("maximize MP; set _empathyReady = true");
      }
    }, {
      name: "Prepare Comma",
      ready: () => lib_have(template_string_$familiar(smolrunleg_templateObject27 || (smolrunleg_templateObject27 = smolrunleg_taggedTemplateLiteral(["Comma Chameleon"])))) && !lib_have(template_string_$familiar(smolrunleg_templateObject28 || (smolrunleg_templateObject28 = smolrunleg_taggedTemplateLiteral(["Frumious Bandersnatch"])))) && !lib_have(template_string_$familiar(smolrunleg_templateObject29 || (smolrunleg_templateObject29 = smolrunleg_taggedTemplateLiteral(["Pair of Stomping Boots"])))),
      completed: () => commaSetupDone || (0,external_kolmafia_namespaceObject.getProperty)("commaFamiliar") === "Pair of Stomping Boots" || (0,external_kolmafia_namespaceObject.getProperty)("commaFamiliar") === "Frumious Bandersnatch" || property_get("_commaRunDone", false),
      do: () => {
        var it = findCheapRun();
        if (!lib_have(it) && !property_get("_roninStoragePulls").includes((0,external_kolmafia_namespaceObject.toInt)(it).toString())) {
          if ((0,external_kolmafia_namespaceObject.storageAmount)(it) === 0) (0,external_kolmafia_namespaceObject.buyUsingStorage)(it); //should respect autoBuyPriceLimit
          (0,external_kolmafia_namespaceObject.cliExecute)("pull ".concat(it));
          (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(smolrunleg_templateObject30 || (smolrunleg_templateObject30 = smolrunleg_taggedTemplateLiteral(["Comma Chameleon"]))));
          (0,external_kolmafia_namespaceObject.visitUrl)("inv_equip.php?which=2&action=equip&whichitem=".concat((0,external_kolmafia_namespaceObject.toInt)(it), "&pwd"));
          (0,external_kolmafia_namespaceObject.visitUrl)("charpane.php");
          commaSetupDone = true;
          (0,external_kolmafia_namespaceObject.cliExecute)("set _commaRunDone = true");
        }
      }
    }, {
      name: "Stillsuit Prep",
      completed: () => (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(smolrunleg_templateObject31 || (smolrunleg_templateObject31 = smolrunleg_taggedTemplateLiteral(["tiny stillsuit"])))) === 0,
      do: () => (0,external_kolmafia_namespaceObject.equip)(template_string_$item(smolrunleg_templateObject32 || (smolrunleg_templateObject32 = smolrunleg_taggedTemplateLiteral(["tiny stillsuit"]))), property_get("stillsuitFamiliar", template_string_$familiars(smolrunleg_templateObject33 || (smolrunleg_templateObject33 = smolrunleg_taggedTemplateLiteral(["Gelatinous Cubeling, Levitating Potato, Mosquito"]))).find(fam => lib_have(fam)) || template_string_$familiar(smolrunleg_templateObject34 || (smolrunleg_templateObject34 = smolrunleg_taggedTemplateLiteral(["none"])))))
    }, {
      name: "Run",
      completed: () => step("questL13Final") > 11,
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)(args.smolscript),
      clear: "all",
      tracking: "Run"
    }, {
      name: "drink",
      ready: () => step("questL13Final") > 11 && (lib_have(template_string_$item(smolrunleg_templateObject35 || (smolrunleg_templateObject35 = smolrunleg_taggedTemplateLiteral(["designer sweatpants"])))) || checkMelange) && lib_have(template_string_$skill(smolrunleg_templateObject36 || (smolrunleg_templateObject36 = smolrunleg_taggedTemplateLiteral(["Drinking to Drink"])))) && (0,external_kolmafia_namespaceObject.storageAmount)(template_string_$item(smolrunleg_templateObject37 || (smolrunleg_templateObject37 = smolrunleg_taggedTemplateLiteral(["synthetic dog hair pill"])))) >= 1,
      completed: () => (0,external_kolmafia_namespaceObject.myInebriety)() >= 2,
      do: () => {
        if (lib_have(template_string_$skill(smolrunleg_templateObject38 || (smolrunleg_templateObject38 = smolrunleg_taggedTemplateLiteral(["The Ode to Booze"]))))) (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(smolrunleg_templateObject39 || (smolrunleg_templateObject39 = smolrunleg_taggedTemplateLiteral(["The Ode to Booze"]))));
        (0,external_kolmafia_namespaceObject.drink)(template_string_$item(smolrunleg_templateObject40 || (smolrunleg_templateObject40 = smolrunleg_taggedTemplateLiteral(["astral pilsner"]))), 1);
      },
      clear: "all",
      tracking: "Run"
    }, {
      name: "Sausages",
      completed: () => howManySausagesCouldIEat() === 0,
      do: () => {
        (0,external_kolmafia_namespaceObject.eat)(template_string_$item(smolrunleg_templateObject41 || (smolrunleg_templateObject41 = smolrunleg_taggedTemplateLiteral(["magical sausage"]))), howManySausagesCouldIEat());
      },
      clear: "all",
      tracking: "Run"
    }, {
      name: "Free King",
      ready: () => step("questL13Final") > 11,
      completed: () => property_get("kingLiberated", false),
      do: () => {
        (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=nstower&action=ns_11_prism");
      },
      clear: "all"
    }]
  }, {
    name: "Post-SMOL Aftercore",
    ready: () => (0,external_kolmafia_namespaceObject.myDaycount)() === 1 && property_get("kingLiberated", false),
    completed: () => totallyDrunk() && smolrunleg_pajamas,
    tasks: [{
      name: "Pull All",
      completed: () => property_get("lastEmptiedStorage") === (0,external_kolmafia_namespaceObject.myAscensions)(),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("pull all; refresh all")
    }, {
      name: "Unlock Garbage Mountain",
      completed: () => property_get("_stenchAirportToday") || property_get("stenchAirportAlways"),
      do: () => {
        (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(smolrunleg_templateObject42 || (smolrunleg_templateObject42 = smolrunleg_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"]))));
        (0,external_kolmafia_namespaceObject.use)(template_string_$item(smolrunleg_templateObject43 || (smolrunleg_templateObject43 = smolrunleg_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"]))));
      },
      tracking: "Garbo"
    }, {
      name: "Sober Up",
      completed: () => (0,external_kolmafia_namespaceObject.myInebriety)() <= 15 || property_get("_mimeArmyShotglassUsed") || property_get("_sweatOutSomeBoozeUsed", 0) === 3,
      do: () => {
        if (checkMelange) {
          (0,external_kolmafia_namespaceObject.cliExecute)("acquire spice melange; use spice melange");
        }
        while (property_get("_sweatOutSomeBoozeUsed", 0) < 3) {
          (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(smolrunleg_templateObject44 || (smolrunleg_templateObject44 = smolrunleg_taggedTemplateLiteral(["Sweat Out Some Booze"]))));
        }
        if (!property_get("_sobrieTeaUsed", false)) {
          (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(smolrunleg_templateObject45 || (smolrunleg_templateObject45 = smolrunleg_taggedTemplateLiteral(["cuppa Sobrie tea"]))));
          (0,external_kolmafia_namespaceObject.use)(template_string_$item(smolrunleg_templateObject46 || (smolrunleg_templateObject46 = smolrunleg_taggedTemplateLiteral(["cuppa Sobrie tea"]))));
        }
        (0,external_kolmafia_namespaceObject.use)(template_string_$item(smolrunleg_templateObject47 || (smolrunleg_templateObject47 = smolrunleg_taggedTemplateLiteral(["synthetic dog hair pill"]))));
      }
    }, {
      name: "Wardrobe-o-matic",
      ready: () => (0,external_kolmafia_namespaceObject.myLevel)() >= 15 && lib_have(template_string_$item(smolrunleg_templateObject48 || (smolrunleg_templateObject48 = smolrunleg_taggedTemplateLiteral(["wardrobe-o-matic"])))),
      completed: () => property_get("_wardrobeUsed", false),
      do: () => {
        (0,external_kolmafia_namespaceObject.use)(template_string_$item(smolrunleg_templateObject49 || (smolrunleg_templateObject49 = smolrunleg_taggedTemplateLiteral(["wardrobe-o-matic"]))));
        (0,external_kolmafia_namespaceObject.cliExecute)("set _wardrobeUsed = true");
      },
      limit: {
        tries: 1
      }
    }, {
      name: "Apriling Part 1",
      ready: () => canChangeSong(),
      completed: () => lib_have(template_string_$effect(smolrunleg_templateObject50 || (smolrunleg_templateObject50 = smolrunleg_taggedTemplateLiteral(["Apriling Band Celebration Bop"])))),
      do: () => {
        conduct(template_string_$effect(smolrunleg_templateObject51 || (smolrunleg_templateObject51 = smolrunleg_taggedTemplateLiteral(["Apriling Band Celebration Bop"]))));
      },
      limit: {
        tries: 1
      }
    }, {
      name: "Drink Pre-Tune",
      ready: () => (0,external_kolmafia_namespaceObject.mySign)().toLowerCase() === "blender" && (0,external_kolmafia_namespaceObject.myLevel)() >= 7 && lib_have(template_string_$item(smolrunleg_templateObject52 || (smolrunleg_templateObject52 = smolrunleg_taggedTemplateLiteral(["mime army shotglass"])))) && (lib_have(template_string_$item(smolrunleg_templateObject53 || (smolrunleg_templateObject53 = smolrunleg_taggedTemplateLiteral(["astral pilsner"])))) || lib_have(template_string_$item(smolrunleg_templateObject54 || (smolrunleg_templateObject54 = smolrunleg_taggedTemplateLiteral(["astral six-pack"]))))),
      completed: () => property_get("_mimeArmyShotglassUsed") || !lib_have(template_string_$item(smolrunleg_templateObject55 || (smolrunleg_templateObject55 = smolrunleg_taggedTemplateLiteral(["hewn moon-rune spoon"])))) || property_get("moonTuned"),
      prepare: () => {
        if (lib_have(template_string_$item(smolrunleg_templateObject56 || (smolrunleg_templateObject56 = smolrunleg_taggedTemplateLiteral(["astral six-pack"]))))) (0,external_kolmafia_namespaceObject.use)(template_string_$item(smolrunleg_templateObject57 || (smolrunleg_templateObject57 = smolrunleg_taggedTemplateLiteral(["astral six-pack"]))));
      },
      do: () => (0,external_kolmafia_namespaceObject.drink)(1, template_string_$item(smolrunleg_templateObject58 || (smolrunleg_templateObject58 = smolrunleg_taggedTemplateLiteral(["astral pilsner"]))))
    }, {
      name: "Moon Spoon",
      completed: () => !lib_have(template_string_$item(smolrunleg_templateObject59 || (smolrunleg_templateObject59 = smolrunleg_taggedTemplateLiteral(["hewn moon-rune spoon"])))) || property_get("moonTuned") || (0,external_kolmafia_namespaceObject.mySign)().toLowerCase() === "wombat",
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("spoon wombat")
    }, {
      name: "Install Alternate Workshed",
      ready: () => lib_have(altWorkshed()),
      completed: () => altWorkshed() === template_string_$item(smolrunleg_templateObject60 || (smolrunleg_templateObject60 = smolrunleg_taggedTemplateLiteral(["none"]))) || property_get("_workshedItemUsed") || (0,external_kolmafia_namespaceObject.getWorkshed)() === altWorkshed(),
      do: () => (0,external_kolmafia_namespaceObject.use)(altWorkshed())
    }, {
      name: "Gold Wedding Ring",
      completed: () => !lib_have(template_string_$skill(smolrunleg_templateObject61 || (smolrunleg_templateObject61 = smolrunleg_taggedTemplateLiteral(["Comprehensive Cartography"])))) || (0,external_kolmafia_namespaceObject.myAscensions)() === property_get("lastCartographyBooPeak"),
      choices: {
        1430: 3,
        606: 4,
        610: 1,
        1056: 1
      },
      do: $location(smolrunleg_templateObject62 || (smolrunleg_templateObject62 = smolrunleg_taggedTemplateLiteral(["A-Boo Peak"]))),
      outfit: {
        modifier: "initiative 40 min 40 max, -tie"
      }
    }, {
      name: "Breakfast",
      completed: () => property_get("breakfastCompleted"),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("breakfast")
    }, {
      name: "Laugh Floor",
      completed: () => lib_have(template_string_$skill(smolrunleg_templateObject63 || (smolrunleg_templateObject63 = smolrunleg_taggedTemplateLiteral(["Liver of Steel"])))) || lib_have(template_string_$item(smolrunleg_templateObject64 || (smolrunleg_templateObject64 = smolrunleg_taggedTemplateLiteral(["steel margarita"])))) || lib_have(template_string_$item(smolrunleg_templateObject65 || (smolrunleg_templateObject65 = smolrunleg_taggedTemplateLiteral(["Azazel's lollipop"])))) || lib_have(template_string_$item(smolrunleg_templateObject66 || (smolrunleg_templateObject66 = smolrunleg_taggedTemplateLiteral(["observational glasses"])))),
      effects: () => [].concat(smolrunleg_toConsumableArray(lib_have(template_string_$skill(smolrunleg_templateObject67 || (smolrunleg_templateObject67 = smolrunleg_taggedTemplateLiteral(["Musk of the Moose"])))) ? $effects(smolrunleg_templateObject68 || (smolrunleg_templateObject68 = smolrunleg_taggedTemplateLiteral(["Musk of the Moose"]))) : []), smolrunleg_toConsumableArray(lib_have(template_string_$skill(smolrunleg_templateObject69 || (smolrunleg_templateObject69 = smolrunleg_taggedTemplateLiteral(["Carlweather's Cantata of Confrontation"])))) ? $effects(smolrunleg_templateObject70 || (smolrunleg_templateObject70 = smolrunleg_taggedTemplateLiteral(["Carlweather's Cantata of Confrontation"]))) : [])),
      prepare: () => {
        if (!lib_have(template_string_$effect(smolrunleg_templateObject71 || (smolrunleg_templateObject71 = smolrunleg_taggedTemplateLiteral(["Carlweather's Cantata of Confrontation"]))))) {
          (0,external_kolmafia_namespaceObject.cliExecute)("kmail to Buffy || 10 Cantata of Confrontation");
          (0,external_kolmafia_namespaceObject.wait)(15);
          (0,external_kolmafia_namespaceObject.cliExecute)("refresh effects");
        }
        $effects(smolrunleg_templateObject72 || (smolrunleg_templateObject72 = smolrunleg_taggedTemplateLiteral(["Smooth Movements, The Sonata of Sneakiness, Darkened Photons, Shifted Phase"]))).forEach(ef => (0,external_kolmafia_namespaceObject.cliExecute)("uneffect ".concat(ef)));
        (0,external_kolmafia_namespaceObject.restoreHp)(0.75 * (0,external_kolmafia_namespaceObject.myMaxhp)());
        (0,external_kolmafia_namespaceObject.restoreMp)(20);
      },
      do: $location(smolrunleg_templateObject73 || (smolrunleg_templateObject73 = smolrunleg_taggedTemplateLiteral(["The Laugh Floor"]))),
      outfit: () => ({
        familiar: bestFam(),
        modifier: "".concat(maxBase(), ", 100 combat rate, 3 item, 250 bonus carnivorous potted plant")
      }),
      combat: new CombatStrategy().macro(Macro.trySkill(template_string_$skill(smolrunleg_templateObject74 || (smolrunleg_templateObject74 = smolrunleg_taggedTemplateLiteral(["Curse of Weaksauce"])))).tryItem(template_string_$item(smolrunleg_templateObject75 || (smolrunleg_templateObject75 = smolrunleg_taggedTemplateLiteral(["train whistle"])))).tryItem(template_string_$item(smolrunleg_templateObject76 || (smolrunleg_templateObject76 = smolrunleg_taggedTemplateLiteral(["porquoise-handled sixgun"])))).attack().repeat()),
      limit: {
        tries: 15
      }
    }, {
      name: "Infernal Rackets Backstage",
      completed: () => lib_have(template_string_$skill(smolrunleg_templateObject77 || (smolrunleg_templateObject77 = smolrunleg_taggedTemplateLiteral(["Liver of Steel"])))) || lib_have(template_string_$item(smolrunleg_templateObject78 || (smolrunleg_templateObject78 = smolrunleg_taggedTemplateLiteral(["steel margarita"])))) || lib_have(template_string_$item(smolrunleg_templateObject79 || (smolrunleg_templateObject79 = smolrunleg_taggedTemplateLiteral(["Azazel's unicorn"])))) || backstageItemsDone(),
      effects: () => [].concat(smolrunleg_toConsumableArray(lib_have(template_string_$skill(smolrunleg_templateObject80 || (smolrunleg_templateObject80 = smolrunleg_taggedTemplateLiteral(["Smooth Movement"])))) ? $effects(smolrunleg_templateObject81 || (smolrunleg_templateObject81 = smolrunleg_taggedTemplateLiteral(["Smooth Movements"]))) : []), smolrunleg_toConsumableArray(lib_have(template_string_$skill(smolrunleg_templateObject82 || (smolrunleg_templateObject82 = smolrunleg_taggedTemplateLiteral(["The Sonata of Sneakiness"])))) ? $effects(smolrunleg_templateObject83 || (smolrunleg_templateObject83 = smolrunleg_taggedTemplateLiteral(["The Sonata of Sneakiness"]))) : [])),
      prepare: () => {
        if (!lib_have(template_string_$effect(smolrunleg_templateObject84 || (smolrunleg_templateObject84 = smolrunleg_taggedTemplateLiteral(["The Sonata of Sneakiness"]))))) {
          (0,external_kolmafia_namespaceObject.cliExecute)("kmail to Buffy || 10 Sonata of Sneakiness");
          (0,external_kolmafia_namespaceObject.wait)(15);
          (0,external_kolmafia_namespaceObject.cliExecute)("refresh effects");
        }
        $effects(smolrunleg_templateObject85 || (smolrunleg_templateObject85 = smolrunleg_taggedTemplateLiteral(["Musk of the Moose, Carlweather's Cantata of Confrontation, Hooooooooonk!"]))).forEach(ef => (0,external_kolmafia_namespaceObject.cliExecute)("uneffect ".concat(ef)));
        (0,external_kolmafia_namespaceObject.restoreHp)(0.75 * (0,external_kolmafia_namespaceObject.myMaxhp)());
        (0,external_kolmafia_namespaceObject.restoreMp)(20);
      },
      do: $location(smolrunleg_templateObject86 || (smolrunleg_templateObject86 = smolrunleg_taggedTemplateLiteral(["Infernal Rackets Backstage"]))),
      outfit: () => ({
        familiar: bestFam(),
        modifier: "".concat(maxBase(), ", -100 combat rate, 3 item, 250 bonus carnivorous potted plant")
      }),
      combat: new CombatStrategy().macro(Macro.trySkill(template_string_$skill(smolrunleg_templateObject87 || (smolrunleg_templateObject87 = smolrunleg_taggedTemplateLiteral(["Curse of Weaksauce"])))).tryItem(template_string_$item(smolrunleg_templateObject88 || (smolrunleg_templateObject88 = smolrunleg_taggedTemplateLiteral(["train whistle"])))).tryItem(template_string_$item(smolrunleg_templateObject89 || (smolrunleg_templateObject89 = smolrunleg_taggedTemplateLiteral(["porquoise-handled sixgun"])))).attack().repeat()),
      limit: {
        tries: 15
      }
    }, {
      name: "Mourn",
      ready: () => lib_have(template_string_$item(smolrunleg_templateObject90 || (smolrunleg_templateObject90 = smolrunleg_taggedTemplateLiteral(["observational glasses"])))),
      completed: () => lib_have(template_string_$skill(smolrunleg_templateObject91 || (smolrunleg_templateObject91 = smolrunleg_taggedTemplateLiteral(["Liver of Steel"])))) || lib_have(template_string_$item(smolrunleg_templateObject92 || (smolrunleg_templateObject92 = smolrunleg_taggedTemplateLiteral(["steel margarita"])))) || lib_have(template_string_$item(smolrunleg_templateObject93 || (smolrunleg_templateObject93 = smolrunleg_taggedTemplateLiteral(["Azazel's lollipop"])))),
      outfit: {
        equip: template_string_$items(smolrunleg_templateObject94 || (smolrunleg_templateObject94 = smolrunleg_taggedTemplateLiteral(["hilarious comedy prop, observational glasses, Victor, the Insult Comic Hellhound Puppet"], ["hilarious comedy prop, observational glasses, Victor\\, the Insult Comic Hellhound Puppet"])))
      },
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("panda comedy insult; panda comedy observe")
    }, {
      name: "Sven Golly",
      ready: () => backstageItemsDone(),
      completed: () => lib_have(template_string_$skill(smolrunleg_templateObject95 || (smolrunleg_templateObject95 = smolrunleg_taggedTemplateLiteral(["Liver of Steel"])))) || lib_have(template_string_$item(smolrunleg_templateObject96 || (smolrunleg_templateObject96 = smolrunleg_taggedTemplateLiteral(["steel margarita"])))) || lib_have(template_string_$item(smolrunleg_templateObject97 || (smolrunleg_templateObject97 = smolrunleg_taggedTemplateLiteral(["Azazel's unicorn"])))),
      do: () => {
        (0,external_kolmafia_namespaceObject.cliExecute)("panda arena Bognort ".concat(template_string_$items(smolrunleg_templateObject98 || (smolrunleg_templateObject98 = smolrunleg_taggedTemplateLiteral(["giant marshmallow, gin-soaked blotter paper"]))).find(a => lib_have(a))));
        (0,external_kolmafia_namespaceObject.cliExecute)("panda arena Stinkface ".concat(template_string_$items(smolrunleg_templateObject99 || (smolrunleg_templateObject99 = smolrunleg_taggedTemplateLiteral(["beer-scented teddy bear, gin-soaked blotter paper"]))).find(a => lib_have(a))));
        (0,external_kolmafia_namespaceObject.cliExecute)("panda arena Flargwurm ".concat(template_string_$items(smolrunleg_templateObject100 || (smolrunleg_templateObject100 = smolrunleg_taggedTemplateLiteral(["booze-soaked cherry, sponge cake"]))).find(a => lib_have(a))));
        (0,external_kolmafia_namespaceObject.cliExecute)("panda arena Jim ".concat(template_string_$items(smolrunleg_templateObject101 || (smolrunleg_templateObject101 = smolrunleg_taggedTemplateLiteral(["comfy pillow, sponge cake"]))).find(a => lib_have(a))));
      }
    }, {
      name: "Moaning Panda",
      ready: () => haveAll(template_string_$items(smolrunleg_templateObject102 || (smolrunleg_templateObject102 = smolrunleg_taggedTemplateLiteral(["Azazel's lollipop, Azazel's unicorn"])))),
      completed: () => lib_have(template_string_$skill(smolrunleg_templateObject103 || (smolrunleg_templateObject103 = smolrunleg_taggedTemplateLiteral(["Liver of Steel"])))) || lib_have(template_string_$item(smolrunleg_templateObject104 || (smolrunleg_templateObject104 = smolrunleg_taggedTemplateLiteral(["steel margarita"])))) || lib_have(template_string_$item(smolrunleg_templateObject105 || (smolrunleg_templateObject105 = smolrunleg_taggedTemplateLiteral(["Azazel's tutu"])))),
      acquire: () => template_string_$items(smolrunleg_templateObject106 || (smolrunleg_templateObject106 = smolrunleg_taggedTemplateLiteral(["bus pass, imp air"]))).map(it => ({
        item: it,
        num: 5,
        price: property_get("valueOfAdventure")
      })),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("panda moan"),
      limit: {
        tries: 3
      }
    }, {
      name: "Steel Margarita",
      ready: () => haveAll(template_string_$items(smolrunleg_templateObject107 || (smolrunleg_templateObject107 = smolrunleg_taggedTemplateLiteral(["Azazel's tutu, Azazel's lollipop, Azazel's unicorn"])))),
      completed: () => lib_have(template_string_$skill(smolrunleg_templateObject108 || (smolrunleg_templateObject108 = smolrunleg_taggedTemplateLiteral(["Liver of Steel"])))) || lib_have(template_string_$item(smolrunleg_templateObject109 || (smolrunleg_templateObject109 = smolrunleg_taggedTemplateLiteral(["steel margarita"])))),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("panda temple")
    }, {
      name: "Liver of Steel",
      ready: () => lib_have(template_string_$item(smolrunleg_templateObject110 || (smolrunleg_templateObject110 = smolrunleg_taggedTemplateLiteral(["steel margarita"])))),
      completed: () => lib_have(template_string_$skill(smolrunleg_templateObject111 || (smolrunleg_templateObject111 = smolrunleg_taggedTemplateLiteral(["Liver of Steel"])))),
      do: () => (0,external_kolmafia_namespaceObject.drink)(1, template_string_$item(smolrunleg_templateObject112 || (smolrunleg_templateObject112 = smolrunleg_taggedTemplateLiteral(["steel margarita"]))))
    }, {
      name: "Garbo",
      ready: () => property_get("_stenchAirportToday") || property_get("stenchAirportAlways"),
      completed: () => (0,external_kolmafia_namespaceObject.myAdventures)() === 0 || stooperDrunk(),
      prepare: () => uneffect(template_string_$effect(smolrunleg_templateObject113 || (smolrunleg_templateObject113 = smolrunleg_taggedTemplateLiteral(["Beaten Up"])))),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)(args.garbo),
      post: () => $effects(smolrunleg_templateObject114 || (smolrunleg_templateObject114 = smolrunleg_taggedTemplateLiteral(["Power Ballad of the Arrowsmith, Stevedave's Shanty of Superiority, The Moxious Madrigal, The Magical Mojomuscular Melody, Aloysius' Antiphon of Aptitude, Ur-Kel's Aria of Annoyance"]))).filter(ef => lib_have(ef)).forEach(ef => uneffect(ef)),
      clear: "all",
      tracking: "Garbo"
    }, {
      name: "Turn in FunFunds",
      ready: () => property_get("_stenchAirportToday") && (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(smolrunleg_templateObject115 || (smolrunleg_templateObject115 = smolrunleg_taggedTemplateLiteral(["FunFunds\u2122"])))) >= 20,
      completed: () => lib_have(template_string_$item(smolrunleg_templateObject116 || (smolrunleg_templateObject116 = smolrunleg_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"])))),
      do: () => (0,external_kolmafia_namespaceObject.buy)($coinmaster(smolrunleg_templateObject117 || (smolrunleg_templateObject117 = smolrunleg_taggedTemplateLiteral(["The Dinsey Company Store"]))), 1, template_string_$item(smolrunleg_templateObject118 || (smolrunleg_templateObject118 = smolrunleg_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"])))),
      tracking: "Garbo"
    }, {
      name: "PvP",
      ready: () => doneAdventuring(),
      completed: () => (0,external_kolmafia_namespaceObject.pvpAttacksLeft)() === 0 || !(0,external_kolmafia_namespaceObject.hippyStoneBroken)(),
      do: () => {
        (0,external_kolmafia_namespaceObject.cliExecute)("unequip");
        (0,external_kolmafia_namespaceObject.cliExecute)("UberPvPOptimizer");
        (0,external_kolmafia_namespaceObject.cliExecute)("swagger");
      }
    }, {
      name: "Stooper",
      ready: () => (0,external_kolmafia_namespaceObject.myInebriety)() === (0,external_kolmafia_namespaceObject.inebrietyLimit)() && lib_have(template_string_$item(smolrunleg_templateObject119 || (smolrunleg_templateObject119 = smolrunleg_taggedTemplateLiteral(["tiny stillsuit"])))) && property_get("familiarSweat") >= 300,
      completed: () => !lib_have(template_string_$familiar(smolrunleg_templateObject120 || (smolrunleg_templateObject120 = smolrunleg_taggedTemplateLiteral(["Stooper"])))) || stooperDrunk(),
      do: () => {
        (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(smolrunleg_templateObject121 || (smolrunleg_templateObject121 = smolrunleg_taggedTemplateLiteral(["Stooper"]))));
        (0,external_kolmafia_namespaceObject.cliExecute)("drink stillsuit distillate");
      }
    }, {
      name: "Nightcap",
      ready: () => doneAdventuring(),
      completed: () => totallyDrunk(),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("CONSUME NIGHTCAP")
    }, {
      name: "Smoke em if you got em",
      completed: () => !lib_have(template_string_$item(smolrunleg_templateObject122 || (smolrunleg_templateObject122 = smolrunleg_taggedTemplateLiteral(["stick of firewood"])))),
      do: () => {
        while (lib_have(template_string_$item(smolrunleg_templateObject123 || (smolrunleg_templateObject123 = smolrunleg_taggedTemplateLiteral(["stick of firewood"]))))) {
          (0,external_kolmafia_namespaceObject.setProperty)("choiceAdventure1394", "1&message=".concat(smolrunleg_smoke, " Thanks Seraphiii for writing Candywrapper!"));
          (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(smolrunleg_templateObject124 || (smolrunleg_templateObject124 = smolrunleg_taggedTemplateLiteral(["campfire smoke"]))));
          (0,external_kolmafia_namespaceObject.print)("Smoked ".concat(smolrunleg_smoke, " firewoods!"));
          smolrunleg_smoke = smolrunleg_smoke + 1;
        }
      }
    }, {
      name: "Offhand Remarkable",
      ready: () => lib_have(template_string_$item(smolrunleg_templateObject125 || (smolrunleg_templateObject125 = smolrunleg_taggedTemplateLiteral(["august scepter"])))),
      completed: () => !lib_have(template_string_$skill(smolrunleg_templateObject126 || (smolrunleg_templateObject126 = smolrunleg_taggedTemplateLiteral(["Aug. 13th: Left/Off Hander's Day!"])))) || lib_have(template_string_$effect(_templateObject127 || (_templateObject127 = smolrunleg_taggedTemplateLiteral(["Offhand Remarkable"])))) || property_get("_aug13Cast", false),
      do: () => (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(_templateObject128 || (_templateObject128 = smolrunleg_taggedTemplateLiteral(["Aug. 13th: Left/Off Hander's Day!"]))))
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
      name: "Apriling Part 2",
      ready: () => canJoinSection(),
      completed: () => !canPlay(template_string_$item(_templateObject129 || (_templateObject129 = smolrunleg_taggedTemplateLiteral(["Apriling band piccolo"])))),
      do: () => {
        joinSection(template_string_$item(_templateObject130 || (_templateObject130 = smolrunleg_taggedTemplateLiteral(["Apriling band piccolo"]))));
        if (canJoinSection()) {
          joinSection(template_string_$item(_templateObject131 || (_templateObject131 = smolrunleg_taggedTemplateLiteral(["Apriling band saxophone"]))));
          play(template_string_$item(_templateObject132 || (_templateObject132 = smolrunleg_taggedTemplateLiteral(["Apriling band saxophone"]))));
        }
        if (lib_have(template_string_$familiar(_templateObject133 || (_templateObject133 = smolrunleg_taggedTemplateLiteral(["Grey Goose"]))))) (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(_templateObject134 || (_templateObject134 = smolrunleg_taggedTemplateLiteral(["Grey Goose"]))));else if (lib_have(template_string_$familiar(_templateObject135 || (_templateObject135 = smolrunleg_taggedTemplateLiteral(["Chest Mimic"]))))) (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(_templateObject136 || (_templateObject136 = smolrunleg_taggedTemplateLiteral(["Chest Mimic"]))));else if (lib_have(template_string_$familiar(_templateObject137 || (_templateObject137 = smolrunleg_taggedTemplateLiteral(["Pocket Professor"])))) && (0,external_kolmafia_namespaceObject.familiarWeight)(template_string_$familiar(_templateObject138 || (_templateObject138 = smolrunleg_taggedTemplateLiteral(["Pocket Professor"])))) < 20) (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(_templateObject139 || (_templateObject139 = smolrunleg_taggedTemplateLiteral(["Pocket Professor"]))));else if (lib_have(template_string_$familiar(_templateObject140 || (_templateObject140 = smolrunleg_taggedTemplateLiteral(["Comma Chameleon"]))))) (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(_templateObject141 || (_templateObject141 = smolrunleg_taggedTemplateLiteral(["Comma Chameleon"]))));
        while (template_string_$item(_templateObject142 || (_templateObject142 = smolrunleg_taggedTemplateLiteral(["Apriling band piccolo"]))).dailyusesleft > 0 && lib_have(template_string_$item(_templateObject143 || (_templateObject143 = smolrunleg_taggedTemplateLiteral(["Apriling band piccolo"]))))) play(template_string_$item(_templateObject144 || (_templateObject144 = smolrunleg_taggedTemplateLiteral(["Apriling band piccolo"]))));
      },
      limit: {
        tries: 1
      }
    }, {
      name: "Pajamas",
      completed: () => lib_have(template_string_$item(_templateObject145 || (_templateObject145 = smolrunleg_taggedTemplateLiteral(["burning cape"])))),
      acquire: [{
        item: template_string_$item(_templateObject146 || (_templateObject146 = smolrunleg_taggedTemplateLiteral(["clockwork maid"]))),
        price: 7 * property_get("valueOfAdventure"),
        optional: true
      }, {
        item: template_string_$item(_templateObject147 || (_templateObject147 = smolrunleg_taggedTemplateLiteral(["burning cape"])))
      }],
      do: () => {
        if (lib_have(template_string_$item(_templateObject148 || (_templateObject148 = smolrunleg_taggedTemplateLiteral(["clockwork maid"]))))) {
          (0,external_kolmafia_namespaceObject.use)(template_string_$item(_templateObject149 || (_templateObject149 = smolrunleg_taggedTemplateLiteral(["clockwork maid"]))));
        }
        smolrunleg_pajamas = true;
      },
      outfit: () => ({
        familiar: template_string_$familiars(_templateObject150 || (_templateObject150 = smolrunleg_taggedTemplateLiteral(["Trick-or-Treating Tot, Left-Hand Man, Disembodied Hand, Grey Goose"]))).find(fam => lib_have(fam)),
        modifier: "adventures".concat(args.pvp ? ", 0.3 fites" : "")
      })
    }, {
      name: "Alert-No Nightcap",
      ready: () => !doneAdventuring(),
      completed: () => stooperDrunk(),
      do: () => {
        var targetAdvs = 100 - (0,external_kolmafia_namespaceObject.numericModifier)("adventures");
        (0,external_kolmafia_namespaceObject.print)("smol completed, but did not overdrink.", "red");
        if (targetAdvs < (0,external_kolmafia_namespaceObject.myAdventures)() && targetAdvs > 0) (0,external_kolmafia_namespaceObject.print)("Rerun with fewer than ".concat(targetAdvs, " adventures for smol to handle your diet"), "red");else (0,external_kolmafia_namespaceObject.print)("Something went wrong.", "red");
      }
    }]
  }];
}
;// CONCATENATED MODULE: ./src/tasks/Garboween.ts
var Garboween_templateObject, Garboween_templateObject2, Garboween_templateObject3, Garboween_templateObject4, Garboween_templateObject5, Garboween_templateObject6, Garboween_templateObject7, Garboween_templateObject8, Garboween_templateObject9, Garboween_templateObject10, Garboween_templateObject11, Garboween_templateObject12, Garboween_templateObject13, Garboween_templateObject14, Garboween_templateObject15, Garboween_templateObject16, Garboween_templateObject17, Garboween_templateObject18, Garboween_templateObject19, Garboween_templateObject20, Garboween_templateObject21, Garboween_templateObject22, Garboween_templateObject23, Garboween_templateObject24, Garboween_templateObject25, Garboween_templateObject26, Garboween_templateObject27, Garboween_templateObject28, Garboween_templateObject29, Garboween_templateObject30, Garboween_templateObject31, Garboween_templateObject32, Garboween_templateObject33, Garboween_templateObject34, Garboween_templateObject35, Garboween_templateObject36, Garboween_templateObject37, Garboween_templateObject38, Garboween_templateObject39, Garboween_templateObject40, Garboween_templateObject41, Garboween_templateObject42, Garboween_templateObject43, Garboween_templateObject44, Garboween_templateObject45, Garboween_templateObject46, Garboween_templateObject47, Garboween_templateObject48, Garboween_templateObject49, Garboween_templateObject50, Garboween_templateObject51, Garboween_templateObject52, Garboween_templateObject53, Garboween_templateObject54, Garboween_templateObject55, Garboween_templateObject56, Garboween_templateObject57, Garboween_templateObject58, Garboween_templateObject59, Garboween_templateObject60, Garboween_templateObject61, Garboween_templateObject62, Garboween_templateObject63, Garboween_templateObject64, Garboween_templateObject65, Garboween_templateObject66, Garboween_templateObject67;
function Garboween_toConsumableArray(arr) { return Garboween_arrayWithoutHoles(arr) || Garboween_iterableToArray(arr) || Garboween_unsupportedIterableToArray(arr) || Garboween_nonIterableSpread(); }
function Garboween_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Garboween_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Garboween_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Garboween_arrayLikeToArray(o, minLen); }
function Garboween_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function Garboween_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Garboween_arrayLikeToArray(arr); }
function Garboween_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Garboween_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Garboween_garboDone = false;
function GarboWeenQuest() {
  return {
    name: "Aftercore",
    ready: () => getCurrentLeg() === 0,
    completed: () => getCurrentLeg() > Leg.Aftercore,
    tasks: [{
      name: "Whitelist VIP Clan",
      completed: () => !args.clan || (0,external_kolmafia_namespaceObject.getClanName)().toLowerCase() === args.clan.toLowerCase(),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("/whitelist ".concat(args.clan))
    }, {
      name: "Acquire Carpe",
      completed: () => !args.carpe || lib_have(template_string_$item(Garboween_templateObject || (Garboween_templateObject = Garboween_taggedTemplateLiteral(["carpe"])))),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("acquire carpe")
    }, {
      name: "Prep Fireworks Shop",
      completed: () => !lib_have(template_string_$item(Garboween_templateObject2 || (Garboween_templateObject2 = Garboween_taggedTemplateLiteral(["Clan VIP Lounge key"])))) || property_get("_goorboFireworksPrepped", false),
      do: () => {
        (0,external_kolmafia_namespaceObject.visitUrl)("clan_viplounge.php?action=fwshop&whichfloor=2");
        _set("_goorboFireworksPrepped", true);
      }
    }, {
      name: "Breakfast",
      completed: () => property_get("breakfastCompleted"),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("breakfast")
    }, {
      name: "Harvest Garden",
      completed: () => getGarden() === template_string_$item(Garboween_templateObject3 || (Garboween_templateObject3 = Garboween_taggedTemplateLiteral(["none"]))) || getGarden() === template_string_$item(Garboween_templateObject4 || (Garboween_templateObject4 = Garboween_taggedTemplateLiteral(["packet of mushroom spores"]))) || (0,external_kolmafia_namespaceObject.getCampground)()[getGarden().name] === 0,
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("garden pick"),
      tracking: "Dailies",
      limit: {
        tries: 3
      }
    }, {
      name: "Plant Grass",
      completed: () => !lib_have(template_string_$item(Garboween_templateObject5 || (Garboween_templateObject5 = Garboween_taggedTemplateLiteral(["packet of tall grass seeds"])))) || getGarden() === template_string_$item(Garboween_templateObject6 || (Garboween_templateObject6 = Garboween_taggedTemplateLiteral(["packet of tall grass seeds"]))),
      do: () => (0,external_kolmafia_namespaceObject.use)(template_string_$item(Garboween_templateObject7 || (Garboween_templateObject7 = Garboween_taggedTemplateLiteral(["packet of tall grass seeds"]))))
    }, {
      name: "SIT Course",
      // eslint-disable-next-line libram/verify-constants
      ready: () => lib_have(template_string_$item(Garboween_templateObject8 || (Garboween_templateObject8 = Garboween_taggedTemplateLiteral(["S.I.T. Course Completion Certificate"])))),
      completed: () => property_get("_sitCourseCompleted", false),
      choices: {
        1494: 2
      },
      do: () =>
      // eslint-disable-next-line libram/verify-constants
      (0,external_kolmafia_namespaceObject.use)(template_string_$item(Garboween_templateObject9 || (Garboween_templateObject9 = Garboween_taggedTemplateLiteral(["S.I.T. Course Completion Certificate"]))))
    }, {
      name: "Drive Observantly",
      completed: () => (0,external_kolmafia_namespaceObject.getWorkshed)() !== template_string_$item(Garboween_templateObject10 || (Garboween_templateObject10 = Garboween_taggedTemplateLiteral(["Asdon Martin keyfob (on ring)"]))) || (0,external_kolmafia_namespaceObject.haveEffect)(template_string_$effect(Garboween_templateObject11 || (Garboween_templateObject11 = Garboween_taggedTemplateLiteral(["Driving Observantly"])))) >= (totallyDrunk() || !lib_have(template_string_$item(Garboween_templateObject12 || (Garboween_templateObject12 = Garboween_taggedTemplateLiteral(["Drunkula's wineglass"])))) ? (0,external_kolmafia_namespaceObject.myAdventures)() : (0,external_kolmafia_namespaceObject.myAdventures)() + 60),
      do: () => drive(template_string_$effect(Garboween_templateObject13 || (Garboween_templateObject13 = Garboween_taggedTemplateLiteral(["Driving Observantly"]))), totallyDrunk() || !lib_have(template_string_$item(Garboween_templateObject14 || (Garboween_templateObject14 = Garboween_taggedTemplateLiteral(["Drunkula's wineglass"])))) ? (0,external_kolmafia_namespaceObject.myAdventures)() : (0,external_kolmafia_namespaceObject.myAdventures)() + 60, false),
      limit: {
        tries: 5
      }
    }, {
      name: "Sample Constellation DNA",
      ready: () => lib_have(template_string_$item(Garboween_templateObject15 || (Garboween_templateObject15 = Garboween_taggedTemplateLiteral(["DNA extraction syringe"])))),
      completed: () => !DNALab_installed() || isHybridized($phylum(Garboween_templateObject16 || (Garboween_templateObject16 = Garboween_taggedTemplateLiteral(["Constellation"])))) || property_get("dnaSyringe") === $phylum(Garboween_templateObject17 || (Garboween_templateObject17 = Garboween_taggedTemplateLiteral(["Constellation"]))),
      outfit: {
        familiar: bestFam(),
        modifier: "".concat(maxBase())
      },
      do: $location(Garboween_templateObject18 || (Garboween_templateObject18 = Garboween_taggedTemplateLiteral(["The Hole in the Sky"]))),
      combat: new CombatStrategy().macro(Macro.skill(template_string_$skill(Garboween_templateObject19 || (Garboween_templateObject19 = Garboween_taggedTemplateLiteral(["Curse of Weaksauce"])))), getTodaysHolidayWanderers()).macro(Macro.tryItem(template_string_$item(Garboween_templateObject20 || (Garboween_templateObject20 = Garboween_taggedTemplateLiteral(["DNA extraction syringe"]))))).macro(Macro.tryItem(template_string_$item(Garboween_templateObject21 || (Garboween_templateObject21 = Garboween_taggedTemplateLiteral(["train whistle"])))).tryItem(template_string_$item(Garboween_templateObject22 || (Garboween_templateObject22 = Garboween_taggedTemplateLiteral(["porquoise-handled sixgun"])))).trySkill(template_string_$skill(Garboween_templateObject23 || (Garboween_templateObject23 = Garboween_taggedTemplateLiteral(["Sing Along"])))).attack().repeat())
    }, {
      name: "Hybridize Constellation",
      ready: () => property_get("dnaSyringe") === $phylum(Garboween_templateObject24 || (Garboween_templateObject24 = Garboween_taggedTemplateLiteral(["Constellation"]))),
      completed: () => !DNALab_installed() || isHybridized($phylum(Garboween_templateObject25 || (Garboween_templateObject25 = Garboween_taggedTemplateLiteral(["Constellation"])))),
      do: () => {
        makeTonic(3);
        hybridize();
      }
    }, {
      name: "June Cleaver",
      completed: () => !lib_have(template_string_$item(Garboween_templateObject26 || (Garboween_templateObject26 = Garboween_taggedTemplateLiteral(["June cleaver"])))) || property_get("_juneCleaverFightsLeft") > 0 || (0,external_kolmafia_namespaceObject.myAdventures)() === 0,
      choices: {
        1467: 3,
        //Poetic Justice
        1468: property_get("_juneCleaverSkips") < 5 ? 4 : 2,
        //Aunts not Ants
        1469: 3,
        //Beware of Aligator
        1470: property_get("_juneCleaverSkips") < 5 ? 4 : 2,
        //Teacher's Pet
        1471: 1,
        //Lost and Found
        1472: property_get("_juneCleaverSkips") < 5 ? 4 : 1,
        //Summer Days
        1473: property_get("_juneCleaverSkips") < 5 ? 4 : 1,
        //Bath Time
        1474: property_get("_juneCleaverSkips") < 5 ? 4 : 2,
        //Delicious Sprouts
        1475: 1 //Hypnotic Master
      },

      do: $location(Garboween_templateObject27 || (Garboween_templateObject27 = Garboween_taggedTemplateLiteral(["Noob Cave"]))),
      post: () => {
        if ((0,external_kolmafia_namespaceObject.handlingChoice)()) (0,external_kolmafia_namespaceObject.visitUrl)("main.php");
        if (lib_have(template_string_$effect(Garboween_templateObject28 || (Garboween_templateObject28 = Garboween_taggedTemplateLiteral(["Beaten Up"]))))) uneffect(template_string_$effect(Garboween_templateObject29 || (Garboween_templateObject29 = Garboween_taggedTemplateLiteral(["Beaten Up"]))));
      },
      outfit: () => ({
        equip: template_string_$items(Garboween_templateObject30 || (Garboween_templateObject30 = Garboween_taggedTemplateLiteral(["June cleaver"])))
      }),
      limit: undefined
    }, {
      name: "Restore HP",
      completed: () => (0,external_kolmafia_namespaceObject.myHp)() > 0.5 * (0,external_kolmafia_namespaceObject.myMaxhp)(),
      do: () => (0,external_kolmafia_namespaceObject.restoreHp)(0.95 * (0,external_kolmafia_namespaceObject.myMaxhp)())
    }, {
      name: "Implement Glitch",
      ready: () => lib_have(template_string_$item(Garboween_templateObject31 || (Garboween_templateObject31 = Garboween_taggedTemplateLiteral(["[glitch season reward name]"])))),
      completed: () => property_get("_glitchItemImplemented"),
      do: () => (0,external_kolmafia_namespaceObject.use)(template_string_$item(Garboween_templateObject32 || (Garboween_templateObject32 = Garboween_taggedTemplateLiteral(["[glitch season reward name]"]))))
    }, {
      name: "Fight Glitch",
      ready: () => lib_have(template_string_$item(Garboween_templateObject33 || (Garboween_templateObject33 = Garboween_taggedTemplateLiteral(["[glitch season reward name]"])))),
      completed: () => property_get("_glitchMonsterFights") > 0,
      acquire: template_string_$items(Garboween_templateObject34 || (Garboween_templateObject34 = Garboween_taggedTemplateLiteral(["gas can, gas balloon, shard of double-ice"]))).map(it => ({
        item: it,
        price: 1000
      })),
      prepare: () => {
        (0,external_kolmafia_namespaceObject.restoreHp)(0.9 * (0,external_kolmafia_namespaceObject.myMaxhp)());
        if (lib_have(template_string_$skill(Garboween_templateObject35 || (Garboween_templateObject35 = Garboween_taggedTemplateLiteral(["Blood Bubble"])))) && !lib_have(template_string_$effect(Garboween_templateObject36 || (Garboween_templateObject36 = Garboween_taggedTemplateLiteral(["Blood Bubble"]))))) (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(Garboween_templateObject37 || (Garboween_templateObject37 = Garboween_taggedTemplateLiteral(["Blood Bubble"]))));
      },
      do: () => (0,external_kolmafia_namespaceObject.visitUrl)("inv_eat.php?pwd&whichitem=10207"),
      post: () => {
        if (!property_get("_lastCombatWon")) throw new Error("Lost Combat - Check to see what went wrong.");
      },
      outfit: () => ({
        familiar: bestFam(),
        modifier: "".concat((0,external_kolmafia_namespaceObject.myPrimestat)(), " experience, 5 ").concat((0,external_kolmafia_namespaceObject.myPrimestat)(), " experience percent, ").concat(noML())
      }),
      combat: new CombatStrategy().macro(() => {
        var _Macro$tryItem$trySki;
        return (_Macro$tryItem$trySki = Macro.tryItem(template_string_$item(Garboween_templateObject38 || (Garboween_templateObject38 = Garboween_taggedTemplateLiteral(["gas balloon"])))).trySkill(template_string_$skill(Garboween_templateObject39 || (Garboween_templateObject39 = Garboween_taggedTemplateLiteral(["Feel Pride"]))))).tryItem.apply(_Macro$tryItem$trySki, Garboween_toConsumableArray(template_string_$items(Garboween_templateObject40 || (Garboween_templateObject40 = Garboween_taggedTemplateLiteral(["shard of double-ice, gas can"]))))).attack().repeat();
      }),
      tracking: "Leveling"
    }, {
      name: "Buy Seal Summoning Supplies",
      ready: () => (0,external_kolmafia_namespaceObject.myClass)() === $class(Garboween_templateObject41 || (Garboween_templateObject41 = Garboween_taggedTemplateLiteral(["Seal Clubber"]))) && (0,external_kolmafia_namespaceObject.guildStoreAvailable)(),
      completed: () => Math.min.apply(Math, Garboween_toConsumableArray(template_string_$items(Garboween_templateObject42 || (Garboween_templateObject42 = Garboween_taggedTemplateLiteral(["figurine of a wretched-looking seal, seal-blubber candle"]))).map(it => (0,external_kolmafia_namespaceObject.availableAmount)(it)))) >= 40,
      acquire: template_string_$items(Garboween_templateObject43 || (Garboween_templateObject43 = Garboween_taggedTemplateLiteral(["figurine of a wretched-looking seal, seal-blubber candle"]))).map(it => ({
        item: it,
        num: 500
      })),
      do: () => false
    }, {
      name: "CONSUME ALL",
      completed: () => (0,external_kolmafia_namespaceObject.myFullness)() >= (0,external_kolmafia_namespaceObject.fullnessLimit)() && (0,external_kolmafia_namespaceObject.mySpleenUse)() >= (0,external_kolmafia_namespaceObject.spleenLimit)() && (0,external_kolmafia_namespaceObject.myInebriety)() >= (0,external_kolmafia_namespaceObject.inebrietyLimit)(),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("consume ALL")
    }, {
      name: "Garbo Nobarf",
      completed: () => Garboween_garboDone,
      do: () => {
        (0,external_kolmafia_namespaceObject.cliExecute)("".concat(args.garboascend, " nodiet nobarf target=\"witchess knight\""));
        Garboween_garboDone = true;
      }
    }, {
      name: "Freecandy time",
      ready: () => (0,external_kolmafia_namespaceObject.holiday)().includes("Halloween"),
      completed: () => (0,external_kolmafia_namespaceObject.myAdventures)() / 5 < 1,
      prepare: () => uneffect(template_string_$effect(Garboween_templateObject44 || (Garboween_templateObject44 = Garboween_taggedTemplateLiteral(["Beaten Up"])))),
      do: () => {
        if (lib_have(template_string_$familiar(Garboween_templateObject45 || (Garboween_templateObject45 = Garboween_taggedTemplateLiteral(["Trick-or-Treating Tot"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("familiar Trick-or-Treating Tot");else if (lib_have(template_string_$familiar(Garboween_templateObject46 || (Garboween_templateObject46 = Garboween_taggedTemplateLiteral(["Red-Nosed Snapper"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("familiar snapper");
        (0,external_kolmafia_namespaceObject.cliExecute)("freecandy ".concat((0,external_kolmafia_namespaceObject.myAdventures)()));
      },
      clear: "all",
      tracking: "Freecandy",
      limit: {
        tries: 1
      } //this will run again after installing CMC, by magic
    }, {
      name: "Do Pizza",
      completed: () => lib_have(template_string_$item(Garboween_templateObject47 || (Garboween_templateObject47 = Garboween_taggedTemplateLiteral(["Pizza of Legend"])))) && lib_have(template_string_$item(Garboween_templateObject48 || (Garboween_templateObject48 = Garboween_taggedTemplateLiteral(["Deep Dish of Legend"])))) && lib_have(template_string_$item(Garboween_templateObject49 || (Garboween_templateObject49 = Garboween_taggedTemplateLiteral(["Calzone of Legend"])))),
      do: () => {
        !lib_have(template_string_$item(Garboween_templateObject50 || (Garboween_templateObject50 = Garboween_taggedTemplateLiteral(["Pizza of Legend"])))) ? (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(Garboween_templateObject51 || (Garboween_templateObject51 = Garboween_taggedTemplateLiteral(["Pizza of Legend"])))) : undefined;
        !lib_have(template_string_$item(Garboween_templateObject52 || (Garboween_templateObject52 = Garboween_taggedTemplateLiteral(["Deep Dish of Legend"])))) ? (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(Garboween_templateObject53 || (Garboween_templateObject53 = Garboween_taggedTemplateLiteral(["Deep Dish of Legend"])))) : undefined;
        !lib_have(template_string_$item(Garboween_templateObject54 || (Garboween_templateObject54 = Garboween_taggedTemplateLiteral(["Calzone of Legend"])))) ? (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(Garboween_templateObject55 || (Garboween_templateObject55 = Garboween_taggedTemplateLiteral(["Calzone of Legend"])))) : undefined;
      }
    }, {
      name: "Stooper",
      ready: () => (0,external_kolmafia_namespaceObject.myInebriety)() === (0,external_kolmafia_namespaceObject.inebrietyLimit)() && lib_have(template_string_$item(Garboween_templateObject56 || (Garboween_templateObject56 = Garboween_taggedTemplateLiteral(["tiny stillsuit"])))) && property_get("familiarSweat") >= 300,
      completed: () => !lib_have(template_string_$familiar(Garboween_templateObject57 || (Garboween_templateObject57 = Garboween_taggedTemplateLiteral(["Stooper"])))) || stooperDrunk(),
      do: () => {
        (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(Garboween_templateObject58 || (Garboween_templateObject58 = Garboween_taggedTemplateLiteral(["Stooper"]))));
        (0,external_kolmafia_namespaceObject.cliExecute)("drink stillsuit distillate");
      }
    }, {
      name: "Super Nightcap",
      ready: () => lib_have(template_string_$item(Garboween_templateObject59 || (Garboween_templateObject59 = Garboween_taggedTemplateLiteral(["Drunkula's wineglass"])))),
      completed: () => totallyDrunk(),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("CONSUME NIGHTCAP")
    }, {
      name: "Freecandy Drunk",
      ready: () => (0,external_kolmafia_namespaceObject.holiday)().includes("Halloween"),
      completed: () => Math.floor((0,external_kolmafia_namespaceObject.myAdventures)() / 5) === 0,
      prepare: () => uneffect(template_string_$effect(Garboween_templateObject60 || (Garboween_templateObject60 = Garboween_taggedTemplateLiteral(["Beaten Up"])))),
      do: () => {
        (0,external_kolmafia_namespaceObject.cliExecute)("freeCandy ".concat((0,external_kolmafia_namespaceObject.myAdventures)()));
      },
      clear: "all",
      tracking: "Freecandy",
      limit: {
        tries: 1
      } //this will run again after installing CMC, by magic
    }, {
      name: "Grimace Maps",
      ready: () => lib_have(template_string_$item(Garboween_templateObject61 || (Garboween_templateObject61 = Garboween_taggedTemplateLiteral(["Map to Safety Shelter Grimace Prime"])))) && totallyDrunk(),
      completed: () => !lib_have(template_string_$item(Garboween_templateObject62 || (Garboween_templateObject62 = Garboween_taggedTemplateLiteral(["Map to Safety Shelter Grimace Prime"])))) || (0,external_kolmafia_namespaceObject.myAdventures)() === 0,
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("grimace maps")
    }, {
      name: "Comb Beach",
      ready: () => lib_have(template_string_$item(Garboween_templateObject63 || (Garboween_templateObject63 = Garboween_taggedTemplateLiteral(["Beach Comb"])))) && totallyDrunk(),
      completed: () => (0,external_kolmafia_namespaceObject.myAdventures)() === 0,
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("combo ".concat(11 - property_get("_freeBeachWalksUsed") + (0,external_kolmafia_namespaceObject.myAdventures)()))
    }, {
      name: "Turn in FunFunds",
      ready: () => property_get("_stenchAirportToday") && (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(Garboween_templateObject64 || (Garboween_templateObject64 = Garboween_taggedTemplateLiteral(["FunFunds\u2122"])))) >= 20,
      completed: () => lib_have(template_string_$item(Garboween_templateObject65 || (Garboween_templateObject65 = Garboween_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"])))),
      do: () => (0,external_kolmafia_namespaceObject.buy)($coinmaster(Garboween_templateObject66 || (Garboween_templateObject66 = Garboween_taggedTemplateLiteral(["The Dinsey Company Store"]))), 1, template_string_$item(Garboween_templateObject67 || (Garboween_templateObject67 = Garboween_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"])))),
      tracking: "Garbo"
    }, {
      name: "PvP",
      completed: () => (0,external_kolmafia_namespaceObject.pvpAttacksLeft)() === 0 || !(0,external_kolmafia_namespaceObject.hippyStoneBroken)(),
      do: () => {
        (0,external_kolmafia_namespaceObject.cliExecute)("unequip");
        (0,external_kolmafia_namespaceObject.cliExecute)("UberPvPOptimizer");
        (0,external_kolmafia_namespaceObject.cliExecute)("swagger");
      }
    }]
  };
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
var eudorae = (/* unused pure expression or super */ null && (["My Own Pen Pal kit", "GameInformPowerDailyPro subscription card", "Xi Receiver Unit", "New-You Club Membership Form", "Our Daily Candles™ order form"]));
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


function filterPermableSkills() {
  var allSkills = external_kolmafia_namespaceObject.Skill.all().filter(sk => sk.permable);
  var permedSkill = permedSkills();
  var filteredSkills = allSkills.filter(skill => skill.permable && lib_have(skill) && ![Lifestyle.softcore, Lifestyle.hardcore].includes(permedSkill.get(skill)));
  return filteredSkills;
}
function targetPerms() {
  var pOptions = filterPermableSkills();
  var maxQty = Math.floor(((0,external_kolmafia_namespaceObject.toInt)(property_get("bankedKarma", 0)) - 11) / 100);
  return pOptions.slice(0, maxQty);
}
;// CONCATENATED MODULE: ./src/tasks/ascend.ts
var tasks_ascend_templateObject, tasks_ascend_templateObject2, tasks_ascend_templateObject3, tasks_ascend_templateObject4, tasks_ascend_templateObject5, tasks_ascend_templateObject6, tasks_ascend_templateObject7, tasks_ascend_templateObject8, tasks_ascend_templateObject9;
function tasks_ascend_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





function AscendQuest() {
  return {
    name: "Ascend",
    ready: () => (0,external_kolmafia_namespaceObject.myAdventures)() === 0 && totallyDrunk(),
    completed: () => (0,external_kolmafia_namespaceObject.myDaycount)() === 1,
    tasks: [{
      name: "Do the Ascension",
      ready: () => lib_have(template_string_$item(tasks_ascend_templateObject || (tasks_ascend_templateObject = tasks_ascend_taggedTemplateLiteral(["Pizza of Legend"])))) && lib_have(template_string_$item(tasks_ascend_templateObject2 || (tasks_ascend_templateObject2 = tasks_ascend_taggedTemplateLiteral(["Deep Dish of Legend"])))) && lib_have(template_string_$item(tasks_ascend_templateObject3 || (tasks_ascend_templateObject3 = tasks_ascend_taggedTemplateLiteral(["Calzone of Legend"])))),
      completed: () => (0,external_kolmafia_namespaceObject.myDaycount)() === 1,
      //Change this
      do: () => {
        var skillsToPerm = new Map();
        targetPerms().forEach(sk => skillsToPerm.set(sk, Lifestyle.softcore));
        var path = args.cs ? $path(tasks_ascend_templateObject4 || (tasks_ascend_templateObject4 = tasks_ascend_taggedTemplateLiteral(["Community Service"]))) : args.smol ? $path(tasks_ascend_templateObject5 || (tasks_ascend_templateObject5 = tasks_ascend_taggedTemplateLiteral(["A Shrunken Adventurer am I"]))) : args.casual ? $path.none : args.robot ? $path(tasks_ascend_templateObject6 || (tasks_ascend_templateObject6 = tasks_ascend_taggedTemplateLiteral(["You, Robot"]))) : undefined;
        var lifestyle = args.casual ? 1 : 2;
        if (path === undefined) throw "You have no path defined";
        var moonsign = args.robot ? toMoonSign("vole") : toMoonSign(args.moonsign);
        var myClass = args.robot ? $class(tasks_ascend_templateObject7 || (tasks_ascend_templateObject7 = tasks_ascend_taggedTemplateLiteral(["Pastamancer"]))) : args.class;
        ascend({
          path: path,
          playerClass: myClass,
          lifestyle: lifestyle,
          moon: moonsign,
          consumable: template_string_$item(tasks_ascend_templateObject8 || (tasks_ascend_templateObject8 = tasks_ascend_taggedTemplateLiteral(["astral six-pack"]))),
          pet: args.astralpet === template_string_$item(tasks_ascend_templateObject9 || (tasks_ascend_templateObject9 = tasks_ascend_taggedTemplateLiteral(["none"]))) ? undefined : args.astralpet,
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
        ;
      }
    }]
  };
}
;// CONCATENATED MODULE: ./src/tasks/casualrunleg.ts
var casualrunleg_templateObject, casualrunleg_templateObject2, casualrunleg_templateObject3, casualrunleg_templateObject4, casualrunleg_templateObject5, casualrunleg_templateObject6, casualrunleg_templateObject7, casualrunleg_templateObject8, casualrunleg_templateObject9, casualrunleg_templateObject10, casualrunleg_templateObject11, casualrunleg_templateObject12, casualrunleg_templateObject13, casualrunleg_templateObject14, casualrunleg_templateObject15, casualrunleg_templateObject16, casualrunleg_templateObject17, casualrunleg_templateObject18, casualrunleg_templateObject19, casualrunleg_templateObject20, casualrunleg_templateObject21, casualrunleg_templateObject22, casualrunleg_templateObject23, casualrunleg_templateObject24, casualrunleg_templateObject25, casualrunleg_templateObject26, casualrunleg_templateObject27, casualrunleg_templateObject28, casualrunleg_templateObject29, casualrunleg_templateObject30, casualrunleg_templateObject31, casualrunleg_templateObject32, casualrunleg_templateObject33, casualrunleg_templateObject34, casualrunleg_templateObject35, casualrunleg_templateObject36, casualrunleg_templateObject37, casualrunleg_templateObject38, casualrunleg_templateObject39, casualrunleg_templateObject40, casualrunleg_templateObject41, casualrunleg_templateObject42, casualrunleg_templateObject43, casualrunleg_templateObject44, casualrunleg_templateObject45, casualrunleg_templateObject46, casualrunleg_templateObject47, casualrunleg_templateObject48, casualrunleg_templateObject49, casualrunleg_templateObject50, casualrunleg_templateObject51, casualrunleg_templateObject52, casualrunleg_templateObject53, casualrunleg_templateObject54, casualrunleg_templateObject55, casualrunleg_templateObject56, casualrunleg_templateObject57, casualrunleg_templateObject58, casualrunleg_templateObject59, casualrunleg_templateObject60, casualrunleg_templateObject61, casualrunleg_templateObject62, casualrunleg_templateObject63, casualrunleg_templateObject64, casualrunleg_templateObject65, casualrunleg_templateObject66, casualrunleg_templateObject67, casualrunleg_templateObject68, casualrunleg_templateObject69, casualrunleg_templateObject70, casualrunleg_templateObject71, casualrunleg_templateObject72, casualrunleg_templateObject73, casualrunleg_templateObject74, casualrunleg_templateObject75, casualrunleg_templateObject76, casualrunleg_templateObject77, casualrunleg_templateObject78, casualrunleg_templateObject79, casualrunleg_templateObject80, casualrunleg_templateObject81, casualrunleg_templateObject82, casualrunleg_templateObject83, casualrunleg_templateObject84, casualrunleg_templateObject85, casualrunleg_templateObject86, casualrunleg_templateObject87, casualrunleg_templateObject88, casualrunleg_templateObject89, casualrunleg_templateObject90, casualrunleg_templateObject91, casualrunleg_templateObject92, casualrunleg_templateObject93, casualrunleg_templateObject94, casualrunleg_templateObject95, casualrunleg_templateObject96, casualrunleg_templateObject97, casualrunleg_templateObject98, casualrunleg_templateObject99, casualrunleg_templateObject100, casualrunleg_templateObject101, casualrunleg_templateObject102, casualrunleg_templateObject103, casualrunleg_templateObject104, casualrunleg_templateObject105, casualrunleg_templateObject106, casualrunleg_templateObject107, casualrunleg_templateObject108, casualrunleg_templateObject109, casualrunleg_templateObject110, casualrunleg_templateObject111, casualrunleg_templateObject112, casualrunleg_templateObject113, casualrunleg_templateObject114, casualrunleg_templateObject115, casualrunleg_templateObject116, casualrunleg_templateObject117, casualrunleg_templateObject118, casualrunleg_templateObject119, casualrunleg_templateObject120, casualrunleg_templateObject121, casualrunleg_templateObject122, casualrunleg_templateObject123, casualrunleg_templateObject124, casualrunleg_templateObject125, casualrunleg_templateObject126, casualrunleg_templateObject127, casualrunleg_templateObject128, casualrunleg_templateObject129, casualrunleg_templateObject130, casualrunleg_templateObject131, casualrunleg_templateObject132, casualrunleg_templateObject133, casualrunleg_templateObject134, casualrunleg_templateObject135, casualrunleg_templateObject136, casualrunleg_templateObject137;
function casualrunleg_toConsumableArray(arr) { return casualrunleg_arrayWithoutHoles(arr) || casualrunleg_iterableToArray(arr) || casualrunleg_unsupportedIterableToArray(arr) || casualrunleg_nonIterableSpread(); }
function casualrunleg_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function casualrunleg_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return casualrunleg_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return casualrunleg_arrayLikeToArray(o, minLen); }
function casualrunleg_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function casualrunleg_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return casualrunleg_arrayLikeToArray(arr); }
function casualrunleg_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function casualrunleg_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var casualrunleg_pajamas = false;
var casualrunleg_smoke = 1;
var casualrunleg_commaSetupDone = false;
function casualrunleg_howManySausagesCouldIEat() {
  if (!have($item(casualrunleg_templateObject || (casualrunleg_templateObject = casualrunleg_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))))) return 0;
  // You may be full but you can't be overfull
  if (myFullness() > fullnessLimit()) return 0;
  return clamp(23 - get("_sausagesEaten"), 0, itemAmount($item(casualrunleg_templateObject2 || (casualrunleg_templateObject2 = casualrunleg_taggedTemplateLiteral(["magical sausage"])))) + itemAmount($item(casualrunleg_templateObject3 || (casualrunleg_templateObject3 = casualrunleg_taggedTemplateLiteral(["magical sausage casing"])))));
}
function casualrunleg_firstWorkshed() {
  return template_string_$items(casualrunleg_templateObject4 || (casualrunleg_templateObject4 = casualrunleg_taggedTemplateLiteral(["model train set, Asdon Martin keyfob (on ring), cold medicine cabinet, Little Geneticist DNA-Splicing Lab, portable Mayo Clinic"]))).find(it => lib_have(it) || (0,external_kolmafia_namespaceObject.getWorkshed)() === it || (0,external_kolmafia_namespaceObject.storageAmount)(it) > 0) || template_string_$item(casualrunleg_templateObject5 || (casualrunleg_templateObject5 = casualrunleg_taggedTemplateLiteral(["none"])));
}
function casualrunleg_altWorkshed() {
  var ws = (0,external_kolmafia_namespaceObject.getWorkshed)();
  switch (ws) {
    case template_string_$item(casualrunleg_templateObject6 || (casualrunleg_templateObject6 = casualrunleg_taggedTemplateLiteral(["model train set"]))):
      return template_string_$items(casualrunleg_templateObject7 || (casualrunleg_templateObject7 = casualrunleg_taggedTemplateLiteral(["cold medicine cabinet, Asdon Martin keyfob (on ring), Little Geneticist DNA-Splicing Lab, portable Mayo Clinic"]))).find(it => lib_have(it) || (0,external_kolmafia_namespaceObject.getWorkshed)() === it || (0,external_kolmafia_namespaceObject.storageAmount)(it) > 0) || ws;
    case template_string_$item(casualrunleg_templateObject8 || (casualrunleg_templateObject8 = casualrunleg_taggedTemplateLiteral(["Asdon Martin keyfob (on ring)"]))):
      return template_string_$items(casualrunleg_templateObject9 || (casualrunleg_templateObject9 = casualrunleg_taggedTemplateLiteral(["cold medicine cabinet, model train set, Little Geneticist DNA-Splicing Lab, portable Mayo Clinic"]))).find(it => lib_have(it) || (0,external_kolmafia_namespaceObject.getWorkshed)() === it || (0,external_kolmafia_namespaceObject.storageAmount)(it) > 0) || ws;
    case template_string_$item(casualrunleg_templateObject10 || (casualrunleg_templateObject10 = casualrunleg_taggedTemplateLiteral(["cold medicine cabinet"]))):
      return template_string_$items(casualrunleg_templateObject11 || (casualrunleg_templateObject11 = casualrunleg_taggedTemplateLiteral(["Asdon Martin keyfob (on ring), model train set, Little Geneticist DNA-Splicing Lab, portable Mayo Clinic, warbear induction oven, snow machine"]))).find(it => lib_have(it) || (0,external_kolmafia_namespaceObject.getWorkshed)() === it || (0,external_kolmafia_namespaceObject.storageAmount)(it) > 0) || ws;
    case template_string_$item(casualrunleg_templateObject12 || (casualrunleg_templateObject12 = casualrunleg_taggedTemplateLiteral(["Little Geneticist DNA-Splicing Lab"]))):
      return template_string_$items(casualrunleg_templateObject13 || (casualrunleg_templateObject13 = casualrunleg_taggedTemplateLiteral(["cold medicine cabinet, Asdon Martin keyfob (on ring), model train set, portable Mayo Clinic"]))).find(it => lib_have(it) || (0,external_kolmafia_namespaceObject.getWorkshed)() === it || (0,external_kolmafia_namespaceObject.storageAmount)(it) > 0) || ws;
    case template_string_$item(casualrunleg_templateObject14 || (casualrunleg_templateObject14 = casualrunleg_taggedTemplateLiteral(["portable Mayo Clinic"]))):
      return template_string_$items(casualrunleg_templateObject15 || (casualrunleg_templateObject15 = casualrunleg_taggedTemplateLiteral(["cold medicine cabinet, model train set, Asdon Martin keyfob (on ring), Little Geneticist DNA-Splicing Lab"]))).find(it => lib_have(it) || (0,external_kolmafia_namespaceObject.getWorkshed)() === it || (0,external_kolmafia_namespaceObject.storageAmount)(it) > 0) || ws;
    default:
      return template_string_$item(casualrunleg_templateObject16 || (casualrunleg_templateObject16 = casualrunleg_taggedTemplateLiteral(["none"])));
  }
}
function CasualQuests() {
  return [{
    name: "Casual Run",
    completed: () => getCurrentLeg() !== Leg.Run || property_get("kingLiberated", false),
    tasks: [{
      name: "Whitelist VIP Clan",
      completed: () => !args.clan || (0,external_kolmafia_namespaceObject.getClanName)().toLowerCase() === args.clan.toLowerCase(),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("/whitelist ".concat(args.clan)),
      choices: {
        1507: 1
      }
    }, {
      name: "Prep Fireworks Shop",
      completed: () => !lib_have(template_string_$item(casualrunleg_templateObject17 || (casualrunleg_templateObject17 = casualrunleg_taggedTemplateLiteral(["Clan VIP Lounge key"])))) || property_get("_goorboFireworksPrepped", false),
      do: () => {
        (0,external_kolmafia_namespaceObject.visitUrl)("clan_viplounge.php?action=fwshop&whichfloor=2");
        _set("_goorboFireworksPrepped", true);
      }
    }, {
      name: "LGR Seed",
      ready: () => lib_have(template_string_$item(casualrunleg_templateObject18 || (casualrunleg_templateObject18 = casualrunleg_taggedTemplateLiteral(["lucky gold ring"])))) && lib_have(template_string_$item(casualrunleg_templateObject19 || (casualrunleg_templateObject19 = casualrunleg_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"])))),
      completed: () => property_get("_stenchAirportToday") || property_get("stenchAirportAlways"),
      do: () => (0,external_kolmafia_namespaceObject.use)(template_string_$item(casualrunleg_templateObject20 || (casualrunleg_templateObject20 = casualrunleg_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"])))),
      tracking: "Garbo"
    }, {
      name: "Install First Workshed",
      ready: () => lib_have(casualrunleg_firstWorkshed()),
      completed: () => casualrunleg_firstWorkshed() === template_string_$item(casualrunleg_templateObject21 || (casualrunleg_templateObject21 = casualrunleg_taggedTemplateLiteral(["none"]))) || property_get("_workshedItemUsed") || (0,external_kolmafia_namespaceObject.getWorkshed)() !== template_string_$item(casualrunleg_templateObject22 || (casualrunleg_templateObject22 = casualrunleg_taggedTemplateLiteral(["none"]))),
      do: () => (0,external_kolmafia_namespaceObject.use)(casualrunleg_firstWorkshed())
    }, {
      name: "SIT Course",
      // eslint-disable-next-line libram/verify-constants
      ready: () => lib_have(template_string_$item(casualrunleg_templateObject23 || (casualrunleg_templateObject23 = casualrunleg_taggedTemplateLiteral(["S.I.T. Course Completion Certificate"])))),
      completed: () => property_get("_sitCourseCompleted", false),
      choices: {
        1494: 2
      },
      do: () =>
      // eslint-disable-next-line libram/verify-constants
      (0,external_kolmafia_namespaceObject.use)(template_string_$item(casualrunleg_templateObject24 || (casualrunleg_templateObject24 = casualrunleg_taggedTemplateLiteral(["S.I.T. Course Completion Certificate"]))))
    }, {
      name: "Break Stone",
      completed: () => (0,external_kolmafia_namespaceObject.hippyStoneBroken)() || !args.pvp,
      do: () => {
        (0,external_kolmafia_namespaceObject.visitUrl)("peevpee.php?action=smashstone&pwd&confirm=on", true);
        (0,external_kolmafia_namespaceObject.visitUrl)("peevpee.php?place=fight");
      }
    }, {
      name: "Prepare Empathy",
      completed: () => property_get("_empathyReady", false),
      do: () => {
        (0,external_kolmafia_namespaceObject.cliExecute)("maximize MP; set _empathyReady = true");
      }
    }, {
      name: "Prepare Comma",
      ready: () => lib_have(template_string_$familiar(casualrunleg_templateObject25 || (casualrunleg_templateObject25 = casualrunleg_taggedTemplateLiteral(["Comma Chameleon"])))) && !lib_have(template_string_$familiar(casualrunleg_templateObject26 || (casualrunleg_templateObject26 = casualrunleg_taggedTemplateLiteral(["Frumious Bandersnatch"])))) && !lib_have(template_string_$familiar(casualrunleg_templateObject27 || (casualrunleg_templateObject27 = casualrunleg_taggedTemplateLiteral(["Pair of Stomping Boots"])))),
      completed: () => casualrunleg_commaSetupDone || (0,external_kolmafia_namespaceObject.getProperty)("commaFamiliar") === "Pair of Stomping Boots" || (0,external_kolmafia_namespaceObject.getProperty)("commaFamiliar") === "Frumious Bandersnatch" || property_get("_commaRunDone", false),
      do: () => {
        var it = findCheapRun();
        if (!lib_have(it) && !property_get("_roninStoragePulls").includes((0,external_kolmafia_namespaceObject.toInt)(it).toString())) {
          if ((0,external_kolmafia_namespaceObject.storageAmount)(it) === 0) (0,external_kolmafia_namespaceObject.buyUsingStorage)(it); //should respect autoBuyPriceLimit
          (0,external_kolmafia_namespaceObject.cliExecute)("pull ".concat(it));
          (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(casualrunleg_templateObject28 || (casualrunleg_templateObject28 = casualrunleg_taggedTemplateLiteral(["Comma Chameleon"]))));
          (0,external_kolmafia_namespaceObject.visitUrl)("inv_equip.php?which=2&action=equip&whichitem=".concat((0,external_kolmafia_namespaceObject.toInt)(it), "&pwd"));
          (0,external_kolmafia_namespaceObject.visitUrl)("charpane.php");
          casualrunleg_commaSetupDone = true;
          (0,external_kolmafia_namespaceObject.cliExecute)("set _commaRunDone = true");
        }
      }
    }, {
      name: "Stillsuit Prep",
      completed: () => (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(casualrunleg_templateObject29 || (casualrunleg_templateObject29 = casualrunleg_taggedTemplateLiteral(["tiny stillsuit"])))) === 0,
      do: () => (0,external_kolmafia_namespaceObject.equip)(template_string_$item(casualrunleg_templateObject30 || (casualrunleg_templateObject30 = casualrunleg_taggedTemplateLiteral(["tiny stillsuit"]))), property_get("stillsuitFamiliar", template_string_$familiars(casualrunleg_templateObject31 || (casualrunleg_templateObject31 = casualrunleg_taggedTemplateLiteral(["Gelatinous Cubeling, Levitating Potato, Mosquito"]))).find(fam => lib_have(fam)) || template_string_$familiar(casualrunleg_templateObject32 || (casualrunleg_templateObject32 = casualrunleg_taggedTemplateLiteral(["none"])))))
    }, {
      name: "Run",
      completed: () => step("questL13Final") > 11,
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)(args.casualscript),
      clear: "all",
      tracking: "Run"
    }, {
      name: "Free King",
      ready: () => step("questL13Final") > 11,
      completed: () => property_get("kingLiberated", false),
      do: () => {
        (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=nstower&action=ns_11_prism");
      },
      clear: "all"
    }]
  }, {
    name: "Post-casual Aftercore",
    ready: () => (0,external_kolmafia_namespaceObject.myDaycount)() === 1 && property_get("kingLiberated", false),
    completed: () => totallyDrunk() && casualrunleg_pajamas,
    tasks: [{
      name: "Unlock Garbage Mountain",
      completed: () => property_get("_stenchAirportToday") || property_get("stenchAirportAlways"),
      do: () => {
        (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(casualrunleg_templateObject33 || (casualrunleg_templateObject33 = casualrunleg_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"]))));
        (0,external_kolmafia_namespaceObject.use)(template_string_$item(casualrunleg_templateObject34 || (casualrunleg_templateObject34 = casualrunleg_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"]))));
      },
      tracking: "Garbo"
    }, {
      name: "Wardrobe-o-matic",
      ready: () => (0,external_kolmafia_namespaceObject.myLevel)() >= 15 && lib_have(template_string_$item(casualrunleg_templateObject35 || (casualrunleg_templateObject35 = casualrunleg_taggedTemplateLiteral(["wardrobe-o-matic"])))),
      completed: () => property_get("_wardrobeUsed", false),
      do: () => {
        (0,external_kolmafia_namespaceObject.use)(template_string_$item(casualrunleg_templateObject36 || (casualrunleg_templateObject36 = casualrunleg_taggedTemplateLiteral(["wardrobe-o-matic"]))));
        (0,external_kolmafia_namespaceObject.cliExecute)("set _wardrobeUsed = true");
      },
      limit: {
        tries: 1
      }
    }, {
      name: "Apriling Part 1",
      ready: () => canChangeSong(),
      completed: () => lib_have(template_string_$effect(casualrunleg_templateObject37 || (casualrunleg_templateObject37 = casualrunleg_taggedTemplateLiteral(["Apriling Band Celebration Bop"])))),
      do: () => {
        conduct(template_string_$effect(casualrunleg_templateObject38 || (casualrunleg_templateObject38 = casualrunleg_taggedTemplateLiteral(["Apriling Band Celebration Bop"]))));
      },
      limit: {
        tries: 1
      }
    }, {
      name: "Drink Pre-Tune",
      ready: () => (0,external_kolmafia_namespaceObject.mySign)().toLowerCase() === "blender" && (0,external_kolmafia_namespaceObject.myLevel)() >= 7 && lib_have(template_string_$item(casualrunleg_templateObject39 || (casualrunleg_templateObject39 = casualrunleg_taggedTemplateLiteral(["mime army shotglass"])))) && (lib_have(template_string_$item(casualrunleg_templateObject40 || (casualrunleg_templateObject40 = casualrunleg_taggedTemplateLiteral(["astral pilsner"])))) || lib_have(template_string_$item(casualrunleg_templateObject41 || (casualrunleg_templateObject41 = casualrunleg_taggedTemplateLiteral(["astral six-pack"]))))),
      completed: () => property_get("_mimeArmyShotglassUsed") || !lib_have(template_string_$item(casualrunleg_templateObject42 || (casualrunleg_templateObject42 = casualrunleg_taggedTemplateLiteral(["hewn moon-rune spoon"])))) || property_get("moonTuned"),
      prepare: () => {
        if (lib_have(template_string_$item(casualrunleg_templateObject43 || (casualrunleg_templateObject43 = casualrunleg_taggedTemplateLiteral(["astral six-pack"]))))) (0,external_kolmafia_namespaceObject.use)(template_string_$item(casualrunleg_templateObject44 || (casualrunleg_templateObject44 = casualrunleg_taggedTemplateLiteral(["astral six-pack"]))));
      },
      do: () => (0,external_kolmafia_namespaceObject.drink)(1, template_string_$item(casualrunleg_templateObject45 || (casualrunleg_templateObject45 = casualrunleg_taggedTemplateLiteral(["astral pilsner"]))))
    }, {
      name: "Moon Spoon",
      completed: () => !lib_have(template_string_$item(casualrunleg_templateObject46 || (casualrunleg_templateObject46 = casualrunleg_taggedTemplateLiteral(["hewn moon-rune spoon"])))) || property_get("moonTuned") || (0,external_kolmafia_namespaceObject.mySign)().toLowerCase() === "wombat",
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("spoon wombat")
    }, {
      name: "Install Alternate Workshed",
      ready: () => lib_have(casualrunleg_altWorkshed()),
      completed: () => casualrunleg_altWorkshed() === template_string_$item(casualrunleg_templateObject47 || (casualrunleg_templateObject47 = casualrunleg_taggedTemplateLiteral(["none"]))) || property_get("_workshedItemUsed") || (0,external_kolmafia_namespaceObject.getWorkshed)() === casualrunleg_altWorkshed(),
      do: () => (0,external_kolmafia_namespaceObject.use)(casualrunleg_altWorkshed())
    }, {
      name: "Gold Wedding Ring",
      completed: () => !lib_have(template_string_$skill(casualrunleg_templateObject48 || (casualrunleg_templateObject48 = casualrunleg_taggedTemplateLiteral(["Comprehensive Cartography"])))) || (0,external_kolmafia_namespaceObject.myAscensions)() === property_get("lastCartographyBooPeak"),
      choices: {
        1430: 3,
        606: 4,
        610: 1,
        1056: 1
      },
      do: $location(casualrunleg_templateObject49 || (casualrunleg_templateObject49 = casualrunleg_taggedTemplateLiteral(["A-Boo Peak"]))),
      outfit: {
        modifier: "initiative 40 min 40 max, -tie"
      }
    }, {
      name: "Breakfast",
      completed: () => property_get("breakfastCompleted"),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("breakfast")
    }, {
      name: "Laugh Floor",
      completed: () => lib_have(template_string_$skill(casualrunleg_templateObject50 || (casualrunleg_templateObject50 = casualrunleg_taggedTemplateLiteral(["Liver of Steel"])))) || lib_have(template_string_$item(casualrunleg_templateObject51 || (casualrunleg_templateObject51 = casualrunleg_taggedTemplateLiteral(["steel margarita"])))) || lib_have(template_string_$item(casualrunleg_templateObject52 || (casualrunleg_templateObject52 = casualrunleg_taggedTemplateLiteral(["Azazel's lollipop"])))) || lib_have(template_string_$item(casualrunleg_templateObject53 || (casualrunleg_templateObject53 = casualrunleg_taggedTemplateLiteral(["observational glasses"])))),
      effects: () => [].concat(casualrunleg_toConsumableArray(lib_have(template_string_$skill(casualrunleg_templateObject54 || (casualrunleg_templateObject54 = casualrunleg_taggedTemplateLiteral(["Musk of the Moose"])))) ? $effects(casualrunleg_templateObject55 || (casualrunleg_templateObject55 = casualrunleg_taggedTemplateLiteral(["Musk of the Moose"]))) : []), casualrunleg_toConsumableArray(lib_have(template_string_$skill(casualrunleg_templateObject56 || (casualrunleg_templateObject56 = casualrunleg_taggedTemplateLiteral(["Carlweather's Cantata of Confrontation"])))) ? $effects(casualrunleg_templateObject57 || (casualrunleg_templateObject57 = casualrunleg_taggedTemplateLiteral(["Carlweather's Cantata of Confrontation"]))) : [])),
      prepare: () => {
        if (!lib_have(template_string_$effect(casualrunleg_templateObject58 || (casualrunleg_templateObject58 = casualrunleg_taggedTemplateLiteral(["Carlweather's Cantata of Confrontation"]))))) {
          (0,external_kolmafia_namespaceObject.cliExecute)("kmail to Buffy || 10 Cantata of Confrontation");
          (0,external_kolmafia_namespaceObject.wait)(15);
          (0,external_kolmafia_namespaceObject.cliExecute)("refresh effects");
        }
        $effects(casualrunleg_templateObject59 || (casualrunleg_templateObject59 = casualrunleg_taggedTemplateLiteral(["Smooth Movements, The Sonata of Sneakiness, Darkened Photons, Shifted Phase"]))).forEach(ef => (0,external_kolmafia_namespaceObject.cliExecute)("uneffect ".concat(ef)));
        (0,external_kolmafia_namespaceObject.restoreHp)(0.75 * (0,external_kolmafia_namespaceObject.myMaxhp)());
        (0,external_kolmafia_namespaceObject.restoreMp)(20);
      },
      do: $location(casualrunleg_templateObject60 || (casualrunleg_templateObject60 = casualrunleg_taggedTemplateLiteral(["The Laugh Floor"]))),
      outfit: () => ({
        familiar: bestFam(),
        modifier: "".concat(maxBase(), ", 100 combat rate, 3 item, 250 bonus carnivorous potted plant")
      }),
      combat: new CombatStrategy().macro(Macro.trySkill(template_string_$skill(casualrunleg_templateObject61 || (casualrunleg_templateObject61 = casualrunleg_taggedTemplateLiteral(["Curse of Weaksauce"])))).tryItem(template_string_$item(casualrunleg_templateObject62 || (casualrunleg_templateObject62 = casualrunleg_taggedTemplateLiteral(["train whistle"])))).tryItem(template_string_$item(casualrunleg_templateObject63 || (casualrunleg_templateObject63 = casualrunleg_taggedTemplateLiteral(["porquoise-handled sixgun"])))).attack().repeat()),
      limit: {
        tries: 15
      }
    }, {
      name: "Infernal Rackets Backstage",
      completed: () => lib_have(template_string_$skill(casualrunleg_templateObject64 || (casualrunleg_templateObject64 = casualrunleg_taggedTemplateLiteral(["Liver of Steel"])))) || lib_have(template_string_$item(casualrunleg_templateObject65 || (casualrunleg_templateObject65 = casualrunleg_taggedTemplateLiteral(["steel margarita"])))) || lib_have(template_string_$item(casualrunleg_templateObject66 || (casualrunleg_templateObject66 = casualrunleg_taggedTemplateLiteral(["Azazel's unicorn"])))) || backstageItemsDone(),
      effects: () => [].concat(casualrunleg_toConsumableArray(lib_have(template_string_$skill(casualrunleg_templateObject67 || (casualrunleg_templateObject67 = casualrunleg_taggedTemplateLiteral(["Smooth Movement"])))) ? $effects(casualrunleg_templateObject68 || (casualrunleg_templateObject68 = casualrunleg_taggedTemplateLiteral(["Smooth Movements"]))) : []), casualrunleg_toConsumableArray(lib_have(template_string_$skill(casualrunleg_templateObject69 || (casualrunleg_templateObject69 = casualrunleg_taggedTemplateLiteral(["The Sonata of Sneakiness"])))) ? $effects(casualrunleg_templateObject70 || (casualrunleg_templateObject70 = casualrunleg_taggedTemplateLiteral(["The Sonata of Sneakiness"]))) : [])),
      prepare: () => {
        if (!lib_have(template_string_$effect(casualrunleg_templateObject71 || (casualrunleg_templateObject71 = casualrunleg_taggedTemplateLiteral(["The Sonata of Sneakiness"]))))) {
          (0,external_kolmafia_namespaceObject.cliExecute)("kmail to Buffy || 10 Sonata of Sneakiness");
          (0,external_kolmafia_namespaceObject.wait)(15);
          (0,external_kolmafia_namespaceObject.cliExecute)("refresh effects");
        }
        $effects(casualrunleg_templateObject72 || (casualrunleg_templateObject72 = casualrunleg_taggedTemplateLiteral(["Musk of the Moose, Carlweather's Cantata of Confrontation, Hooooooooonk!"]))).forEach(ef => (0,external_kolmafia_namespaceObject.cliExecute)("uneffect ".concat(ef)));
        (0,external_kolmafia_namespaceObject.restoreHp)(0.75 * (0,external_kolmafia_namespaceObject.myMaxhp)());
        (0,external_kolmafia_namespaceObject.restoreMp)(20);
      },
      do: $location(casualrunleg_templateObject73 || (casualrunleg_templateObject73 = casualrunleg_taggedTemplateLiteral(["Infernal Rackets Backstage"]))),
      outfit: () => ({
        familiar: bestFam(),
        modifier: "".concat(maxBase(), ", -100 combat rate, 3 item, 250 bonus carnivorous potted plant")
      }),
      combat: new CombatStrategy().macro(Macro.trySkill(template_string_$skill(casualrunleg_templateObject74 || (casualrunleg_templateObject74 = casualrunleg_taggedTemplateLiteral(["Curse of Weaksauce"])))).tryItem(template_string_$item(casualrunleg_templateObject75 || (casualrunleg_templateObject75 = casualrunleg_taggedTemplateLiteral(["train whistle"])))).tryItem(template_string_$item(casualrunleg_templateObject76 || (casualrunleg_templateObject76 = casualrunleg_taggedTemplateLiteral(["porquoise-handled sixgun"])))).attack().repeat()),
      limit: {
        tries: 15
      }
    }, {
      name: "Mourn",
      ready: () => lib_have(template_string_$item(casualrunleg_templateObject77 || (casualrunleg_templateObject77 = casualrunleg_taggedTemplateLiteral(["observational glasses"])))),
      completed: () => lib_have(template_string_$skill(casualrunleg_templateObject78 || (casualrunleg_templateObject78 = casualrunleg_taggedTemplateLiteral(["Liver of Steel"])))) || lib_have(template_string_$item(casualrunleg_templateObject79 || (casualrunleg_templateObject79 = casualrunleg_taggedTemplateLiteral(["steel margarita"])))) || lib_have(template_string_$item(casualrunleg_templateObject80 || (casualrunleg_templateObject80 = casualrunleg_taggedTemplateLiteral(["Azazel's lollipop"])))),
      outfit: {
        equip: template_string_$items(casualrunleg_templateObject81 || (casualrunleg_templateObject81 = casualrunleg_taggedTemplateLiteral(["hilarious comedy prop, observational glasses, Victor, the Insult Comic Hellhound Puppet"], ["hilarious comedy prop, observational glasses, Victor\\, the Insult Comic Hellhound Puppet"])))
      },
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("panda comedy insult; panda comedy observe")
    }, {
      name: "Sven Golly",
      ready: () => backstageItemsDone(),
      completed: () => lib_have(template_string_$skill(casualrunleg_templateObject82 || (casualrunleg_templateObject82 = casualrunleg_taggedTemplateLiteral(["Liver of Steel"])))) || lib_have(template_string_$item(casualrunleg_templateObject83 || (casualrunleg_templateObject83 = casualrunleg_taggedTemplateLiteral(["steel margarita"])))) || lib_have(template_string_$item(casualrunleg_templateObject84 || (casualrunleg_templateObject84 = casualrunleg_taggedTemplateLiteral(["Azazel's unicorn"])))),
      do: () => {
        (0,external_kolmafia_namespaceObject.cliExecute)("panda arena Bognort ".concat(template_string_$items(casualrunleg_templateObject85 || (casualrunleg_templateObject85 = casualrunleg_taggedTemplateLiteral(["giant marshmallow, gin-soaked blotter paper"]))).find(a => lib_have(a))));
        (0,external_kolmafia_namespaceObject.cliExecute)("panda arena Stinkface ".concat(template_string_$items(casualrunleg_templateObject86 || (casualrunleg_templateObject86 = casualrunleg_taggedTemplateLiteral(["beer-scented teddy bear, gin-soaked blotter paper"]))).find(a => lib_have(a))));
        (0,external_kolmafia_namespaceObject.cliExecute)("panda arena Flargwurm ".concat(template_string_$items(casualrunleg_templateObject87 || (casualrunleg_templateObject87 = casualrunleg_taggedTemplateLiteral(["booze-soaked cherry, sponge cake"]))).find(a => lib_have(a))));
        (0,external_kolmafia_namespaceObject.cliExecute)("panda arena Jim ".concat(template_string_$items(casualrunleg_templateObject88 || (casualrunleg_templateObject88 = casualrunleg_taggedTemplateLiteral(["comfy pillow, sponge cake"]))).find(a => lib_have(a))));
      }
    }, {
      name: "Moaning Panda",
      ready: () => haveAll(template_string_$items(casualrunleg_templateObject89 || (casualrunleg_templateObject89 = casualrunleg_taggedTemplateLiteral(["Azazel's lollipop, Azazel's unicorn"])))),
      completed: () => lib_have(template_string_$skill(casualrunleg_templateObject90 || (casualrunleg_templateObject90 = casualrunleg_taggedTemplateLiteral(["Liver of Steel"])))) || lib_have(template_string_$item(casualrunleg_templateObject91 || (casualrunleg_templateObject91 = casualrunleg_taggedTemplateLiteral(["steel margarita"])))) || lib_have(template_string_$item(casualrunleg_templateObject92 || (casualrunleg_templateObject92 = casualrunleg_taggedTemplateLiteral(["Azazel's tutu"])))),
      acquire: () => template_string_$items(casualrunleg_templateObject93 || (casualrunleg_templateObject93 = casualrunleg_taggedTemplateLiteral(["bus pass, imp air"]))).map(it => ({
        item: it,
        num: 5,
        price: property_get("valueOfAdventure")
      })),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("panda moan"),
      limit: {
        tries: 3
      }
    }, {
      name: "Steel Margarita",
      ready: () => haveAll(template_string_$items(casualrunleg_templateObject94 || (casualrunleg_templateObject94 = casualrunleg_taggedTemplateLiteral(["Azazel's tutu, Azazel's lollipop, Azazel's unicorn"])))),
      completed: () => lib_have(template_string_$skill(casualrunleg_templateObject95 || (casualrunleg_templateObject95 = casualrunleg_taggedTemplateLiteral(["Liver of Steel"])))) || lib_have(template_string_$item(casualrunleg_templateObject96 || (casualrunleg_templateObject96 = casualrunleg_taggedTemplateLiteral(["steel margarita"])))),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("panda temple")
    }, {
      name: "Liver of Steel",
      ready: () => lib_have(template_string_$item(casualrunleg_templateObject97 || (casualrunleg_templateObject97 = casualrunleg_taggedTemplateLiteral(["steel margarita"])))),
      completed: () => lib_have(template_string_$skill(casualrunleg_templateObject98 || (casualrunleg_templateObject98 = casualrunleg_taggedTemplateLiteral(["Liver of Steel"])))),
      do: () => (0,external_kolmafia_namespaceObject.drink)(1, template_string_$item(casualrunleg_templateObject99 || (casualrunleg_templateObject99 = casualrunleg_taggedTemplateLiteral(["steel margarita"]))))
    }, {
      name: "Garbo",
      ready: () => property_get("_stenchAirportToday") || property_get("stenchAirportAlways"),
      completed: () => (0,external_kolmafia_namespaceObject.myAdventures)() === 0 || stooperDrunk(),
      prepare: () => uneffect(template_string_$effect(casualrunleg_templateObject100 || (casualrunleg_templateObject100 = casualrunleg_taggedTemplateLiteral(["Beaten Up"])))),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)(args.garbo),
      post: () => $effects(casualrunleg_templateObject101 || (casualrunleg_templateObject101 = casualrunleg_taggedTemplateLiteral(["Power Ballad of the Arrowsmith, Stevedave's Shanty of Superiority, The Moxious Madrigal, The Magical Mojomuscular Melody, Aloysius' Antiphon of Aptitude, Ur-Kel's Aria of Annoyance"]))).filter(ef => lib_have(ef)).forEach(ef => uneffect(ef)),
      clear: "all",
      tracking: "Garbo"
    }, {
      name: "Turn in FunFunds",
      ready: () => property_get("_stenchAirportToday") && (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(casualrunleg_templateObject102 || (casualrunleg_templateObject102 = casualrunleg_taggedTemplateLiteral(["FunFunds\u2122"])))) >= 20,
      completed: () => lib_have(template_string_$item(casualrunleg_templateObject103 || (casualrunleg_templateObject103 = casualrunleg_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"])))),
      do: () => (0,external_kolmafia_namespaceObject.buy)($coinmaster(casualrunleg_templateObject104 || (casualrunleg_templateObject104 = casualrunleg_taggedTemplateLiteral(["The Dinsey Company Store"]))), 1, template_string_$item(casualrunleg_templateObject105 || (casualrunleg_templateObject105 = casualrunleg_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"])))),
      tracking: "Garbo"
    }, {
      name: "PvP",
      ready: () => doneAdventuring(),
      completed: () => (0,external_kolmafia_namespaceObject.pvpAttacksLeft)() === 0 || !(0,external_kolmafia_namespaceObject.hippyStoneBroken)(),
      do: () => {
        (0,external_kolmafia_namespaceObject.cliExecute)("unequip");
        (0,external_kolmafia_namespaceObject.cliExecute)("UberPvPOptimizer");
        (0,external_kolmafia_namespaceObject.cliExecute)("swagger");
      }
    }, {
      name: "Stooper",
      ready: () => (0,external_kolmafia_namespaceObject.myInebriety)() === (0,external_kolmafia_namespaceObject.inebrietyLimit)() && lib_have(template_string_$item(casualrunleg_templateObject106 || (casualrunleg_templateObject106 = casualrunleg_taggedTemplateLiteral(["tiny stillsuit"])))) && property_get("familiarSweat") >= 300,
      completed: () => !lib_have(template_string_$familiar(casualrunleg_templateObject107 || (casualrunleg_templateObject107 = casualrunleg_taggedTemplateLiteral(["Stooper"])))) || stooperDrunk(),
      do: () => {
        (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(casualrunleg_templateObject108 || (casualrunleg_templateObject108 = casualrunleg_taggedTemplateLiteral(["Stooper"]))));
        (0,external_kolmafia_namespaceObject.cliExecute)("drink stillsuit distillate");
      }
    }, {
      name: "Nightcap",
      ready: () => doneAdventuring(),
      completed: () => totallyDrunk(),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("CONSUME NIGHTCAP")
    }, {
      name: "Smoke em if you got em",
      completed: () => !lib_have(template_string_$item(casualrunleg_templateObject109 || (casualrunleg_templateObject109 = casualrunleg_taggedTemplateLiteral(["stick of firewood"])))),
      do: () => {
        while (lib_have(template_string_$item(casualrunleg_templateObject110 || (casualrunleg_templateObject110 = casualrunleg_taggedTemplateLiteral(["stick of firewood"]))))) {
          (0,external_kolmafia_namespaceObject.setProperty)("choiceAdventure1394", "1&message=".concat(casualrunleg_smoke, " Thanks Seraphiii for writing Candywrapper!"));
          (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(casualrunleg_templateObject111 || (casualrunleg_templateObject111 = casualrunleg_taggedTemplateLiteral(["campfire smoke"]))));
          (0,external_kolmafia_namespaceObject.print)("Smoked ".concat(casualrunleg_smoke, " firewoods!"));
          casualrunleg_smoke = casualrunleg_smoke + 1;
        }
      }
    }, {
      name: "Offhand Remarkable",
      ready: () => lib_have(template_string_$item(casualrunleg_templateObject112 || (casualrunleg_templateObject112 = casualrunleg_taggedTemplateLiteral(["august scepter"])))),
      completed: () => !lib_have(template_string_$skill(casualrunleg_templateObject113 || (casualrunleg_templateObject113 = casualrunleg_taggedTemplateLiteral(["Aug. 13th: Left/Off Hander's Day!"])))) || lib_have(template_string_$effect(casualrunleg_templateObject114 || (casualrunleg_templateObject114 = casualrunleg_taggedTemplateLiteral(["Offhand Remarkable"])))) || property_get("_aug13Cast", false),
      do: () => (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(casualrunleg_templateObject115 || (casualrunleg_templateObject115 = casualrunleg_taggedTemplateLiteral(["Aug. 13th: Left/Off Hander's Day!"]))))
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
      name: "Apriling Part 2",
      ready: () => canJoinSection(),
      completed: () => !canPlay(template_string_$item(casualrunleg_templateObject116 || (casualrunleg_templateObject116 = casualrunleg_taggedTemplateLiteral(["Apriling band piccolo"])))),
      do: () => {
        joinSection(template_string_$item(casualrunleg_templateObject117 || (casualrunleg_templateObject117 = casualrunleg_taggedTemplateLiteral(["Apriling band piccolo"]))));
        if (canJoinSection()) {
          joinSection(template_string_$item(casualrunleg_templateObject118 || (casualrunleg_templateObject118 = casualrunleg_taggedTemplateLiteral(["Apriling band saxophone"]))));
          play(template_string_$item(casualrunleg_templateObject119 || (casualrunleg_templateObject119 = casualrunleg_taggedTemplateLiteral(["Apriling band saxophone"]))));
        }
        if (lib_have(template_string_$familiar(casualrunleg_templateObject120 || (casualrunleg_templateObject120 = casualrunleg_taggedTemplateLiteral(["Grey Goose"]))))) (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(casualrunleg_templateObject121 || (casualrunleg_templateObject121 = casualrunleg_taggedTemplateLiteral(["Grey Goose"]))));else if (lib_have(template_string_$familiar(casualrunleg_templateObject122 || (casualrunleg_templateObject122 = casualrunleg_taggedTemplateLiteral(["Chest Mimic"]))))) (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(casualrunleg_templateObject123 || (casualrunleg_templateObject123 = casualrunleg_taggedTemplateLiteral(["Chest Mimic"]))));else if (lib_have(template_string_$familiar(casualrunleg_templateObject124 || (casualrunleg_templateObject124 = casualrunleg_taggedTemplateLiteral(["Pocket Professor"])))) && (0,external_kolmafia_namespaceObject.familiarWeight)(template_string_$familiar(casualrunleg_templateObject125 || (casualrunleg_templateObject125 = casualrunleg_taggedTemplateLiteral(["Pocket Professor"])))) < 20) (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(casualrunleg_templateObject126 || (casualrunleg_templateObject126 = casualrunleg_taggedTemplateLiteral(["Pocket Professor"]))));else if (lib_have(template_string_$familiar(casualrunleg_templateObject127 || (casualrunleg_templateObject127 = casualrunleg_taggedTemplateLiteral(["Comma Chameleon"]))))) (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(casualrunleg_templateObject128 || (casualrunleg_templateObject128 = casualrunleg_taggedTemplateLiteral(["Comma Chameleon"]))));
        while (template_string_$item(casualrunleg_templateObject129 || (casualrunleg_templateObject129 = casualrunleg_taggedTemplateLiteral(["Apriling band piccolo"]))).dailyusesleft > 0 && lib_have(template_string_$item(casualrunleg_templateObject130 || (casualrunleg_templateObject130 = casualrunleg_taggedTemplateLiteral(["Apriling band piccolo"]))))) play(template_string_$item(casualrunleg_templateObject131 || (casualrunleg_templateObject131 = casualrunleg_taggedTemplateLiteral(["Apriling band piccolo"]))));
      },
      limit: {
        tries: 1
      }
    }, {
      name: "Pajamas",
      completed: () => lib_have(template_string_$item(casualrunleg_templateObject132 || (casualrunleg_templateObject132 = casualrunleg_taggedTemplateLiteral(["burning cape"])))),
      acquire: [{
        item: template_string_$item(casualrunleg_templateObject133 || (casualrunleg_templateObject133 = casualrunleg_taggedTemplateLiteral(["clockwork maid"]))),
        price: 7 * property_get("valueOfAdventure"),
        optional: true
      }, {
        item: template_string_$item(casualrunleg_templateObject134 || (casualrunleg_templateObject134 = casualrunleg_taggedTemplateLiteral(["burning cape"])))
      }],
      do: () => {
        if (lib_have(template_string_$item(casualrunleg_templateObject135 || (casualrunleg_templateObject135 = casualrunleg_taggedTemplateLiteral(["clockwork maid"]))))) {
          (0,external_kolmafia_namespaceObject.use)(template_string_$item(casualrunleg_templateObject136 || (casualrunleg_templateObject136 = casualrunleg_taggedTemplateLiteral(["clockwork maid"]))));
        }
        casualrunleg_pajamas = true;
      },
      outfit: () => ({
        familiar: template_string_$familiars(casualrunleg_templateObject137 || (casualrunleg_templateObject137 = casualrunleg_taggedTemplateLiteral(["Trick-or-Treating Tot, Left-Hand Man, Disembodied Hand, Grey Goose"]))).find(fam => lib_have(fam)),
        modifier: "adventures".concat(args.pvp ? ", 0.3 fites" : "")
      })
    }, {
      name: "Alert-No Nightcap",
      ready: () => !doneAdventuring(),
      completed: () => stooperDrunk(),
      do: () => {
        var targetAdvs = 100 - (0,external_kolmafia_namespaceObject.numericModifier)("adventures");
        (0,external_kolmafia_namespaceObject.print)("smol completed, but did not overdrink.", "red");
        if (targetAdvs < (0,external_kolmafia_namespaceObject.myAdventures)() && targetAdvs > 0) (0,external_kolmafia_namespaceObject.print)("Rerun with fewer than ".concat(targetAdvs, " adventures for smol to handle your diet"), "red");else (0,external_kolmafia_namespaceObject.print)("Something went wrong.", "red");
      }
    }]
  }];
}
;// CONCATENATED MODULE: ./src/tasks/robotrunleg.ts
var robotrunleg_templateObject, robotrunleg_templateObject2, robotrunleg_templateObject3, robotrunleg_templateObject4, robotrunleg_templateObject5, robotrunleg_templateObject6, robotrunleg_templateObject7, robotrunleg_templateObject8, robotrunleg_templateObject9, robotrunleg_templateObject10, robotrunleg_templateObject11, robotrunleg_templateObject12, robotrunleg_templateObject13, robotrunleg_templateObject14, robotrunleg_templateObject15, robotrunleg_templateObject16, robotrunleg_templateObject17, robotrunleg_templateObject18, robotrunleg_templateObject19, robotrunleg_templateObject20, robotrunleg_templateObject21, robotrunleg_templateObject22, robotrunleg_templateObject23, robotrunleg_templateObject24, robotrunleg_templateObject25, robotrunleg_templateObject26, robotrunleg_templateObject27, robotrunleg_templateObject28, robotrunleg_templateObject29, robotrunleg_templateObject30, robotrunleg_templateObject31, robotrunleg_templateObject32, robotrunleg_templateObject33, robotrunleg_templateObject34, robotrunleg_templateObject35, robotrunleg_templateObject36, robotrunleg_templateObject37, robotrunleg_templateObject38, robotrunleg_templateObject39, robotrunleg_templateObject40, robotrunleg_templateObject41, robotrunleg_templateObject42, robotrunleg_templateObject43, robotrunleg_templateObject44, robotrunleg_templateObject45, robotrunleg_templateObject46, robotrunleg_templateObject47, robotrunleg_templateObject48, robotrunleg_templateObject49, robotrunleg_templateObject50, robotrunleg_templateObject51, robotrunleg_templateObject52, robotrunleg_templateObject53, robotrunleg_templateObject54, robotrunleg_templateObject55, robotrunleg_templateObject56, robotrunleg_templateObject57, robotrunleg_templateObject58, robotrunleg_templateObject59, robotrunleg_templateObject60, robotrunleg_templateObject61, robotrunleg_templateObject62, robotrunleg_templateObject63, robotrunleg_templateObject64, robotrunleg_templateObject65, robotrunleg_templateObject66, robotrunleg_templateObject67, robotrunleg_templateObject68, robotrunleg_templateObject69, robotrunleg_templateObject70, robotrunleg_templateObject71, robotrunleg_templateObject72, robotrunleg_templateObject73, robotrunleg_templateObject74, robotrunleg_templateObject75, robotrunleg_templateObject76, robotrunleg_templateObject77, robotrunleg_templateObject78, robotrunleg_templateObject79, robotrunleg_templateObject80, robotrunleg_templateObject81, robotrunleg_templateObject82, robotrunleg_templateObject83, robotrunleg_templateObject84, robotrunleg_templateObject85, robotrunleg_templateObject86, robotrunleg_templateObject87, robotrunleg_templateObject88, robotrunleg_templateObject89, robotrunleg_templateObject90, robotrunleg_templateObject91, robotrunleg_templateObject92, robotrunleg_templateObject93, robotrunleg_templateObject94, robotrunleg_templateObject95, robotrunleg_templateObject96, robotrunleg_templateObject97, robotrunleg_templateObject98, robotrunleg_templateObject99, robotrunleg_templateObject100, robotrunleg_templateObject101, robotrunleg_templateObject102, robotrunleg_templateObject103, robotrunleg_templateObject104, robotrunleg_templateObject105, robotrunleg_templateObject106, robotrunleg_templateObject107, robotrunleg_templateObject108, robotrunleg_templateObject109, robotrunleg_templateObject110, robotrunleg_templateObject111, robotrunleg_templateObject112;
function robotrunleg_toConsumableArray(arr) { return robotrunleg_arrayWithoutHoles(arr) || robotrunleg_iterableToArray(arr) || robotrunleg_unsupportedIterableToArray(arr) || robotrunleg_nonIterableSpread(); }
function robotrunleg_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function robotrunleg_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return robotrunleg_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return robotrunleg_arrayLikeToArray(o, minLen); }
function robotrunleg_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function robotrunleg_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return robotrunleg_arrayLikeToArray(arr); }
function robotrunleg_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function robotrunleg_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var robotrunleg_pajamas = false;
var robotrunleg_smoke = 1;
function robotrunleg_firstWorkshed() {
  return template_string_$items(robotrunleg_templateObject || (robotrunleg_templateObject = robotrunleg_taggedTemplateLiteral(["model train set, Asdon Martin keyfob (on ring), cold medicine cabinet, Little Geneticist DNA-Splicing Lab, portable Mayo Clinic"]))).find(it => lib_have(it) || (0,external_kolmafia_namespaceObject.getWorkshed)() === it || (0,external_kolmafia_namespaceObject.storageAmount)(it) > 0) || template_string_$item(robotrunleg_templateObject2 || (robotrunleg_templateObject2 = robotrunleg_taggedTemplateLiteral(["none"])));
}
function RobotQuests() {
  return [{
    name: "Robot Run",
    completed: () => getCurrentLeg() !== Leg.Run || property_get("kingLiberated", false),
    tasks: [{
      name: "Whitelist VIP Clan",
      completed: () => !args.clan || (0,external_kolmafia_namespaceObject.getClanName)().toLowerCase() === args.clan.toLowerCase(),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("/whitelist ".concat(args.clan)),
      choices: {
        1507: 1
      }
    }, {
      name: "Prep Fireworks Shop",
      completed: () => !lib_have(template_string_$item(robotrunleg_templateObject3 || (robotrunleg_templateObject3 = robotrunleg_taggedTemplateLiteral(["Clan VIP Lounge key"])))) || property_get("_goorboFireworksPrepped", false),
      do: () => {
        (0,external_kolmafia_namespaceObject.visitUrl)("clan_viplounge.php?action=fwshop&whichfloor=2");
        _set("_goorboFireworksPrepped", true);
      }
    }, {
      name: "Pre-Pulls",
      completed: () => (0,external_kolmafia_namespaceObject.pullsRemaining)() === 0 || !args.pulls.find(it => !lib_have(it) && !property_get("_roninStoragePulls").includes((0,external_kolmafia_namespaceObject.toInt)(it).toString())),
      //can't find a pull that (we dont have and it hasn't been pulled today)
      do: () => args.pulls.forEach(it => {
        if (!lib_have(it) && !property_get("_roninStoragePulls").includes((0,external_kolmafia_namespaceObject.toInt)(it).toString())) {
          if ((0,external_kolmafia_namespaceObject.storageAmount)(it) === 0) (0,external_kolmafia_namespaceObject.buyUsingStorage)(it); //should respect autoBuyPriceLimit
          (0,external_kolmafia_namespaceObject.cliExecute)("pull ".concat(it));
        }
      })
    }, {
      name: "LGR Seed",
      ready: () => lib_have(template_string_$item(robotrunleg_templateObject4 || (robotrunleg_templateObject4 = robotrunleg_taggedTemplateLiteral(["lucky gold ring"])))) && lib_have(template_string_$item(robotrunleg_templateObject5 || (robotrunleg_templateObject5 = robotrunleg_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"])))),
      completed: () => property_get("_stenchAirportToday") || property_get("stenchAirportAlways"),
      do: () => (0,external_kolmafia_namespaceObject.use)(template_string_$item(robotrunleg_templateObject6 || (robotrunleg_templateObject6 = robotrunleg_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"])))),
      tracking: "Garbo"
    }, {
      name: "Break Stone",
      completed: () => (0,external_kolmafia_namespaceObject.hippyStoneBroken)() || !args.pvp,
      do: () => {
        (0,external_kolmafia_namespaceObject.visitUrl)("peevpee.php?action=smashstone&pwd&confirm=on", true);
        (0,external_kolmafia_namespaceObject.visitUrl)("peevpee.php?place=fight");
      }
    }, {
      name: "Run",
      completed: () => step("questL13Final") > 11,
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)(args.robotscript),
      clear: "all",
      tracking: "Run"
    }, {
      name: "Free King",
      ready: () => step("questL13Final") > 11,
      completed: () => property_get("kingLiberated", false),
      do: () => {
        (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=nstower&action=ns_11_prism");
      },
      clear: "all"
    }]
  }, {
    name: "Post-Robot Aftercore",
    ready: () => (0,external_kolmafia_namespaceObject.myDaycount)() === 1 && property_get("kingLiberated", false),
    completed: () => totallyDrunk() && robotrunleg_pajamas,
    tasks: [{
      name: "Pull All",
      completed: () => property_get("lastEmptiedStorage") === (0,external_kolmafia_namespaceObject.myAscensions)(),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("pull all; refresh all")
    }, {
      name: "Install First Workshed",
      ready: () => lib_have(robotrunleg_firstWorkshed()),
      completed: () => robotrunleg_firstWorkshed() === template_string_$item(robotrunleg_templateObject7 || (robotrunleg_templateObject7 = robotrunleg_taggedTemplateLiteral(["none"]))) || property_get("_workshedItemUsed") || (0,external_kolmafia_namespaceObject.getWorkshed)() !== template_string_$item(robotrunleg_templateObject8 || (robotrunleg_templateObject8 = robotrunleg_taggedTemplateLiteral(["none"]))),
      do: () => (0,external_kolmafia_namespaceObject.use)(robotrunleg_firstWorkshed())
    }, {
      name: "Unlock Garbage Mountain",
      completed: () => property_get("_stenchAirportToday") || property_get("stenchAirportAlways"),
      do: () => {
        (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(robotrunleg_templateObject9 || (robotrunleg_templateObject9 = robotrunleg_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"]))));
        (0,external_kolmafia_namespaceObject.use)(template_string_$item(robotrunleg_templateObject10 || (robotrunleg_templateObject10 = robotrunleg_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"]))));
      },
      tracking: "Garbo"
    }, {
      name: "Wardrobe-o-matic",
      ready: () => (0,external_kolmafia_namespaceObject.myLevel)() >= 15 && lib_have(template_string_$item(robotrunleg_templateObject11 || (robotrunleg_templateObject11 = robotrunleg_taggedTemplateLiteral(["wardrobe-o-matic"])))),
      completed: () => property_get("_wardrobeUsed", false),
      do: () => {
        (0,external_kolmafia_namespaceObject.use)(template_string_$item(robotrunleg_templateObject12 || (robotrunleg_templateObject12 = robotrunleg_taggedTemplateLiteral(["wardrobe-o-matic"]))));
        (0,external_kolmafia_namespaceObject.cliExecute)("set _wardrobeUsed = true");
      },
      limit: {
        tries: 1
      }
    }, {
      name: "Apriling Part 1",
      ready: () => canChangeSong(),
      completed: () => lib_have(template_string_$effect(robotrunleg_templateObject13 || (robotrunleg_templateObject13 = robotrunleg_taggedTemplateLiteral(["Apriling Band Celebration Bop"])))),
      do: () => {
        conduct(template_string_$effect(robotrunleg_templateObject14 || (robotrunleg_templateObject14 = robotrunleg_taggedTemplateLiteral(["Apriling Band Celebration Bop"]))));
      },
      limit: {
        tries: 1
      }
    }, {
      name: "Drink Pre-Tune",
      ready: () => (0,external_kolmafia_namespaceObject.mySign)().toLowerCase() === "blender" && (0,external_kolmafia_namespaceObject.myLevel)() >= 7 && lib_have(template_string_$item(robotrunleg_templateObject15 || (robotrunleg_templateObject15 = robotrunleg_taggedTemplateLiteral(["mime army shotglass"])))) && (lib_have(template_string_$item(robotrunleg_templateObject16 || (robotrunleg_templateObject16 = robotrunleg_taggedTemplateLiteral(["astral pilsner"])))) || lib_have(template_string_$item(robotrunleg_templateObject17 || (robotrunleg_templateObject17 = robotrunleg_taggedTemplateLiteral(["astral six-pack"]))))),
      completed: () => property_get("_mimeArmyShotglassUsed") || !lib_have(template_string_$item(robotrunleg_templateObject18 || (robotrunleg_templateObject18 = robotrunleg_taggedTemplateLiteral(["hewn moon-rune spoon"])))) || property_get("moonTuned"),
      prepare: () => {
        if (lib_have(template_string_$item(robotrunleg_templateObject19 || (robotrunleg_templateObject19 = robotrunleg_taggedTemplateLiteral(["astral six-pack"]))))) (0,external_kolmafia_namespaceObject.use)(template_string_$item(robotrunleg_templateObject20 || (robotrunleg_templateObject20 = robotrunleg_taggedTemplateLiteral(["astral six-pack"]))));
      },
      do: () => (0,external_kolmafia_namespaceObject.drink)(1, template_string_$item(robotrunleg_templateObject21 || (robotrunleg_templateObject21 = robotrunleg_taggedTemplateLiteral(["astral pilsner"]))))
    }, {
      name: "Moon Spoon",
      completed: () => !lib_have(template_string_$item(robotrunleg_templateObject22 || (robotrunleg_templateObject22 = robotrunleg_taggedTemplateLiteral(["hewn moon-rune spoon"])))) || property_get("moonTuned") || (0,external_kolmafia_namespaceObject.mySign)().toLowerCase() === "wombat",
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("spoon wombat")
    }, {
      name: "Gold Wedding Ring",
      completed: () => !lib_have(template_string_$skill(robotrunleg_templateObject23 || (robotrunleg_templateObject23 = robotrunleg_taggedTemplateLiteral(["Comprehensive Cartography"])))) || (0,external_kolmafia_namespaceObject.myAscensions)() === property_get("lastCartographyBooPeak"),
      choices: {
        1430: 3,
        606: 4,
        610: 1,
        1056: 1
      },
      do: $location(robotrunleg_templateObject24 || (robotrunleg_templateObject24 = robotrunleg_taggedTemplateLiteral(["A-Boo Peak"]))),
      outfit: {
        modifier: "initiative 40 min 40 max, -tie"
      }
    }, {
      name: "Breakfast",
      completed: () => property_get("breakfastCompleted"),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("breakfast")
    }, {
      name: "Laugh Floor",
      completed: () => lib_have(template_string_$skill(robotrunleg_templateObject25 || (robotrunleg_templateObject25 = robotrunleg_taggedTemplateLiteral(["Liver of Steel"])))) || lib_have(template_string_$item(robotrunleg_templateObject26 || (robotrunleg_templateObject26 = robotrunleg_taggedTemplateLiteral(["steel margarita"])))) || lib_have(template_string_$item(robotrunleg_templateObject27 || (robotrunleg_templateObject27 = robotrunleg_taggedTemplateLiteral(["Azazel's lollipop"])))) || lib_have(template_string_$item(robotrunleg_templateObject28 || (robotrunleg_templateObject28 = robotrunleg_taggedTemplateLiteral(["observational glasses"])))),
      effects: () => [].concat(robotrunleg_toConsumableArray(lib_have(template_string_$skill(robotrunleg_templateObject29 || (robotrunleg_templateObject29 = robotrunleg_taggedTemplateLiteral(["Musk of the Moose"])))) ? $effects(robotrunleg_templateObject30 || (robotrunleg_templateObject30 = robotrunleg_taggedTemplateLiteral(["Musk of the Moose"]))) : []), robotrunleg_toConsumableArray(lib_have(template_string_$skill(robotrunleg_templateObject31 || (robotrunleg_templateObject31 = robotrunleg_taggedTemplateLiteral(["Carlweather's Cantata of Confrontation"])))) ? $effects(robotrunleg_templateObject32 || (robotrunleg_templateObject32 = robotrunleg_taggedTemplateLiteral(["Carlweather's Cantata of Confrontation"]))) : [])),
      prepare: () => {
        if (!lib_have(template_string_$effect(robotrunleg_templateObject33 || (robotrunleg_templateObject33 = robotrunleg_taggedTemplateLiteral(["Carlweather's Cantata of Confrontation"]))))) {
          (0,external_kolmafia_namespaceObject.cliExecute)("kmail to Buffy || 10 Cantata of Confrontation");
          (0,external_kolmafia_namespaceObject.wait)(15);
          (0,external_kolmafia_namespaceObject.cliExecute)("refresh effects");
        }
        $effects(robotrunleg_templateObject34 || (robotrunleg_templateObject34 = robotrunleg_taggedTemplateLiteral(["Smooth Movements, The Sonata of Sneakiness, Darkened Photons, Shifted Phase"]))).forEach(ef => (0,external_kolmafia_namespaceObject.cliExecute)("uneffect ".concat(ef)));
        (0,external_kolmafia_namespaceObject.restoreHp)(0.75 * (0,external_kolmafia_namespaceObject.myMaxhp)());
        (0,external_kolmafia_namespaceObject.restoreMp)(20);
      },
      do: $location(robotrunleg_templateObject35 || (robotrunleg_templateObject35 = robotrunleg_taggedTemplateLiteral(["The Laugh Floor"]))),
      outfit: () => ({
        familiar: bestFam(),
        modifier: "".concat(maxBase(), ", 100 combat rate, 3 item, 250 bonus carnivorous potted plant")
      }),
      combat: new CombatStrategy().macro(Macro.trySkill(template_string_$skill(robotrunleg_templateObject36 || (robotrunleg_templateObject36 = robotrunleg_taggedTemplateLiteral(["Curse of Weaksauce"])))).tryItem(template_string_$item(robotrunleg_templateObject37 || (robotrunleg_templateObject37 = robotrunleg_taggedTemplateLiteral(["train whistle"])))).tryItem(template_string_$item(robotrunleg_templateObject38 || (robotrunleg_templateObject38 = robotrunleg_taggedTemplateLiteral(["porquoise-handled sixgun"])))).attack().repeat()),
      limit: {
        tries: 15
      }
    }, {
      name: "Infernal Rackets Backstage",
      completed: () => lib_have(template_string_$skill(robotrunleg_templateObject39 || (robotrunleg_templateObject39 = robotrunleg_taggedTemplateLiteral(["Liver of Steel"])))) || lib_have(template_string_$item(robotrunleg_templateObject40 || (robotrunleg_templateObject40 = robotrunleg_taggedTemplateLiteral(["steel margarita"])))) || lib_have(template_string_$item(robotrunleg_templateObject41 || (robotrunleg_templateObject41 = robotrunleg_taggedTemplateLiteral(["Azazel's unicorn"])))) || backstageItemsDone(),
      effects: () => [].concat(robotrunleg_toConsumableArray(lib_have(template_string_$skill(robotrunleg_templateObject42 || (robotrunleg_templateObject42 = robotrunleg_taggedTemplateLiteral(["Smooth Movement"])))) ? $effects(robotrunleg_templateObject43 || (robotrunleg_templateObject43 = robotrunleg_taggedTemplateLiteral(["Smooth Movements"]))) : []), robotrunleg_toConsumableArray(lib_have(template_string_$skill(robotrunleg_templateObject44 || (robotrunleg_templateObject44 = robotrunleg_taggedTemplateLiteral(["The Sonata of Sneakiness"])))) ? $effects(robotrunleg_templateObject45 || (robotrunleg_templateObject45 = robotrunleg_taggedTemplateLiteral(["The Sonata of Sneakiness"]))) : [])),
      prepare: () => {
        if (!lib_have(template_string_$effect(robotrunleg_templateObject46 || (robotrunleg_templateObject46 = robotrunleg_taggedTemplateLiteral(["The Sonata of Sneakiness"]))))) {
          (0,external_kolmafia_namespaceObject.cliExecute)("kmail to Buffy || 10 Sonata of Sneakiness");
          (0,external_kolmafia_namespaceObject.wait)(15);
          (0,external_kolmafia_namespaceObject.cliExecute)("refresh effects");
        }
        $effects(robotrunleg_templateObject47 || (robotrunleg_templateObject47 = robotrunleg_taggedTemplateLiteral(["Musk of the Moose, Carlweather's Cantata of Confrontation, Hooooooooonk!"]))).forEach(ef => (0,external_kolmafia_namespaceObject.cliExecute)("uneffect ".concat(ef)));
        (0,external_kolmafia_namespaceObject.restoreHp)(0.75 * (0,external_kolmafia_namespaceObject.myMaxhp)());
        (0,external_kolmafia_namespaceObject.restoreMp)(20);
      },
      do: $location(robotrunleg_templateObject48 || (robotrunleg_templateObject48 = robotrunleg_taggedTemplateLiteral(["Infernal Rackets Backstage"]))),
      outfit: () => ({
        familiar: bestFam(),
        modifier: "".concat(maxBase(), ", -100 combat rate, 3 item, 250 bonus carnivorous potted plant")
      }),
      combat: new CombatStrategy().macro(Macro.trySkill(template_string_$skill(robotrunleg_templateObject49 || (robotrunleg_templateObject49 = robotrunleg_taggedTemplateLiteral(["Curse of Weaksauce"])))).tryItem(template_string_$item(robotrunleg_templateObject50 || (robotrunleg_templateObject50 = robotrunleg_taggedTemplateLiteral(["train whistle"])))).tryItem(template_string_$item(robotrunleg_templateObject51 || (robotrunleg_templateObject51 = robotrunleg_taggedTemplateLiteral(["porquoise-handled sixgun"])))).attack().repeat()),
      limit: {
        tries: 15
      }
    }, {
      name: "Mourn",
      ready: () => lib_have(template_string_$item(robotrunleg_templateObject52 || (robotrunleg_templateObject52 = robotrunleg_taggedTemplateLiteral(["observational glasses"])))),
      completed: () => lib_have(template_string_$skill(robotrunleg_templateObject53 || (robotrunleg_templateObject53 = robotrunleg_taggedTemplateLiteral(["Liver of Steel"])))) || lib_have(template_string_$item(robotrunleg_templateObject54 || (robotrunleg_templateObject54 = robotrunleg_taggedTemplateLiteral(["steel margarita"])))) || lib_have(template_string_$item(robotrunleg_templateObject55 || (robotrunleg_templateObject55 = robotrunleg_taggedTemplateLiteral(["Azazel's lollipop"])))),
      outfit: {
        equip: template_string_$items(robotrunleg_templateObject56 || (robotrunleg_templateObject56 = robotrunleg_taggedTemplateLiteral(["hilarious comedy prop, observational glasses, Victor, the Insult Comic Hellhound Puppet"], ["hilarious comedy prop, observational glasses, Victor\\, the Insult Comic Hellhound Puppet"])))
      },
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("panda comedy insult; panda comedy observe")
    }, {
      name: "Sven Golly",
      ready: () => backstageItemsDone(),
      completed: () => lib_have(template_string_$skill(robotrunleg_templateObject57 || (robotrunleg_templateObject57 = robotrunleg_taggedTemplateLiteral(["Liver of Steel"])))) || lib_have(template_string_$item(robotrunleg_templateObject58 || (robotrunleg_templateObject58 = robotrunleg_taggedTemplateLiteral(["steel margarita"])))) || lib_have(template_string_$item(robotrunleg_templateObject59 || (robotrunleg_templateObject59 = robotrunleg_taggedTemplateLiteral(["Azazel's unicorn"])))),
      do: () => {
        (0,external_kolmafia_namespaceObject.cliExecute)("panda arena Bognort ".concat(template_string_$items(robotrunleg_templateObject60 || (robotrunleg_templateObject60 = robotrunleg_taggedTemplateLiteral(["giant marshmallow, gin-soaked blotter paper"]))).find(a => lib_have(a))));
        (0,external_kolmafia_namespaceObject.cliExecute)("panda arena Stinkface ".concat(template_string_$items(robotrunleg_templateObject61 || (robotrunleg_templateObject61 = robotrunleg_taggedTemplateLiteral(["beer-scented teddy bear, gin-soaked blotter paper"]))).find(a => lib_have(a))));
        (0,external_kolmafia_namespaceObject.cliExecute)("panda arena Flargwurm ".concat(template_string_$items(robotrunleg_templateObject62 || (robotrunleg_templateObject62 = robotrunleg_taggedTemplateLiteral(["booze-soaked cherry, sponge cake"]))).find(a => lib_have(a))));
        (0,external_kolmafia_namespaceObject.cliExecute)("panda arena Jim ".concat(template_string_$items(robotrunleg_templateObject63 || (robotrunleg_templateObject63 = robotrunleg_taggedTemplateLiteral(["comfy pillow, sponge cake"]))).find(a => lib_have(a))));
      }
    }, {
      name: "Moaning Panda",
      ready: () => haveAll(template_string_$items(robotrunleg_templateObject64 || (robotrunleg_templateObject64 = robotrunleg_taggedTemplateLiteral(["Azazel's lollipop, Azazel's unicorn"])))),
      completed: () => lib_have(template_string_$skill(robotrunleg_templateObject65 || (robotrunleg_templateObject65 = robotrunleg_taggedTemplateLiteral(["Liver of Steel"])))) || lib_have(template_string_$item(robotrunleg_templateObject66 || (robotrunleg_templateObject66 = robotrunleg_taggedTemplateLiteral(["steel margarita"])))) || lib_have(template_string_$item(robotrunleg_templateObject67 || (robotrunleg_templateObject67 = robotrunleg_taggedTemplateLiteral(["Azazel's tutu"])))),
      acquire: () => template_string_$items(robotrunleg_templateObject68 || (robotrunleg_templateObject68 = robotrunleg_taggedTemplateLiteral(["bus pass, imp air"]))).map(it => ({
        item: it,
        num: 5,
        price: property_get("valueOfAdventure")
      })),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("panda moan"),
      limit: {
        tries: 3
      }
    }, {
      name: "Steel Margarita",
      ready: () => haveAll(template_string_$items(robotrunleg_templateObject69 || (robotrunleg_templateObject69 = robotrunleg_taggedTemplateLiteral(["Azazel's tutu, Azazel's lollipop, Azazel's unicorn"])))),
      completed: () => lib_have(template_string_$skill(robotrunleg_templateObject70 || (robotrunleg_templateObject70 = robotrunleg_taggedTemplateLiteral(["Liver of Steel"])))) || lib_have(template_string_$item(robotrunleg_templateObject71 || (robotrunleg_templateObject71 = robotrunleg_taggedTemplateLiteral(["steel margarita"])))),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("panda temple")
    }, {
      name: "Liver of Steel",
      ready: () => lib_have(template_string_$item(robotrunleg_templateObject72 || (robotrunleg_templateObject72 = robotrunleg_taggedTemplateLiteral(["steel margarita"])))),
      completed: () => lib_have(template_string_$skill(robotrunleg_templateObject73 || (robotrunleg_templateObject73 = robotrunleg_taggedTemplateLiteral(["Liver of Steel"])))),
      do: () => (0,external_kolmafia_namespaceObject.drink)(1, template_string_$item(robotrunleg_templateObject74 || (robotrunleg_templateObject74 = robotrunleg_taggedTemplateLiteral(["steel margarita"]))))
    }, {
      name: "Garbo",
      ready: () => property_get("_stenchAirportToday") || property_get("stenchAirportAlways"),
      completed: () => (0,external_kolmafia_namespaceObject.myAdventures)() === 0 || stooperDrunk(),
      prepare: () => uneffect(template_string_$effect(robotrunleg_templateObject75 || (robotrunleg_templateObject75 = robotrunleg_taggedTemplateLiteral(["Beaten Up"])))),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)(args.garbo),
      post: () => $effects(robotrunleg_templateObject76 || (robotrunleg_templateObject76 = robotrunleg_taggedTemplateLiteral(["Power Ballad of the Arrowsmith, Stevedave's Shanty of Superiority, The Moxious Madrigal, The Magical Mojomuscular Melody, Aloysius' Antiphon of Aptitude, Ur-Kel's Aria of Annoyance"]))).filter(ef => lib_have(ef)).forEach(ef => uneffect(ef)),
      clear: "all",
      tracking: "Garbo"
    }, {
      name: "Turn in FunFunds",
      ready: () => property_get("_stenchAirportToday") && (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(robotrunleg_templateObject77 || (robotrunleg_templateObject77 = robotrunleg_taggedTemplateLiteral(["FunFunds\u2122"])))) >= 20,
      completed: () => lib_have(template_string_$item(robotrunleg_templateObject78 || (robotrunleg_templateObject78 = robotrunleg_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"])))),
      do: () => (0,external_kolmafia_namespaceObject.buy)($coinmaster(robotrunleg_templateObject79 || (robotrunleg_templateObject79 = robotrunleg_taggedTemplateLiteral(["The Dinsey Company Store"]))), 1, template_string_$item(robotrunleg_templateObject80 || (robotrunleg_templateObject80 = robotrunleg_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"])))),
      tracking: "Garbo"
    }, {
      name: "PvP",
      ready: () => doneAdventuring(),
      completed: () => (0,external_kolmafia_namespaceObject.pvpAttacksLeft)() === 0 || !(0,external_kolmafia_namespaceObject.hippyStoneBroken)(),
      do: () => {
        (0,external_kolmafia_namespaceObject.cliExecute)("unequip");
        (0,external_kolmafia_namespaceObject.cliExecute)("UberPvPOptimizer");
        (0,external_kolmafia_namespaceObject.cliExecute)("swagger");
      }
    }, {
      name: "Stooper",
      ready: () => (0,external_kolmafia_namespaceObject.myInebriety)() === (0,external_kolmafia_namespaceObject.inebrietyLimit)() && lib_have(template_string_$item(robotrunleg_templateObject81 || (robotrunleg_templateObject81 = robotrunleg_taggedTemplateLiteral(["tiny stillsuit"])))) && property_get("familiarSweat") >= 300,
      completed: () => !lib_have(template_string_$familiar(robotrunleg_templateObject82 || (robotrunleg_templateObject82 = robotrunleg_taggedTemplateLiteral(["Stooper"])))) || stooperDrunk(),
      do: () => {
        (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(robotrunleg_templateObject83 || (robotrunleg_templateObject83 = robotrunleg_taggedTemplateLiteral(["Stooper"]))));
        (0,external_kolmafia_namespaceObject.cliExecute)("drink stillsuit distillate");
      }
    }, {
      name: "Nightcap",
      ready: () => doneAdventuring(),
      completed: () => totallyDrunk(),
      do: () => (0,external_kolmafia_namespaceObject.cliExecute)("CONSUME NIGHTCAP")
    }, {
      name: "Smoke em if you got em",
      completed: () => !lib_have(template_string_$item(robotrunleg_templateObject84 || (robotrunleg_templateObject84 = robotrunleg_taggedTemplateLiteral(["stick of firewood"])))),
      do: () => {
        while (lib_have(template_string_$item(robotrunleg_templateObject85 || (robotrunleg_templateObject85 = robotrunleg_taggedTemplateLiteral(["stick of firewood"]))))) {
          (0,external_kolmafia_namespaceObject.setProperty)("choiceAdventure1394", "1&message=".concat(robotrunleg_smoke, " Thanks Seraphiii for writing Candywrapper!"));
          (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(robotrunleg_templateObject86 || (robotrunleg_templateObject86 = robotrunleg_taggedTemplateLiteral(["campfire smoke"]))));
          (0,external_kolmafia_namespaceObject.print)("Smoked ".concat(robotrunleg_smoke, " firewoods!"));
          robotrunleg_smoke = robotrunleg_smoke + 1;
        }
      }
    }, {
      name: "Offhand Remarkable",
      ready: () => lib_have(template_string_$item(robotrunleg_templateObject87 || (robotrunleg_templateObject87 = robotrunleg_taggedTemplateLiteral(["august scepter"])))),
      completed: () => !lib_have(template_string_$skill(robotrunleg_templateObject88 || (robotrunleg_templateObject88 = robotrunleg_taggedTemplateLiteral(["Aug. 13th: Left/Off Hander's Day!"])))) || lib_have(template_string_$effect(robotrunleg_templateObject89 || (robotrunleg_templateObject89 = robotrunleg_taggedTemplateLiteral(["Offhand Remarkable"])))) || property_get("_aug13Cast", false),
      do: () => (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(robotrunleg_templateObject90 || (robotrunleg_templateObject90 = robotrunleg_taggedTemplateLiteral(["Aug. 13th: Left/Off Hander's Day!"]))))
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
      name: "Apriling Part 2",
      ready: () => canJoinSection(),
      completed: () => !canPlay(template_string_$item(robotrunleg_templateObject91 || (robotrunleg_templateObject91 = robotrunleg_taggedTemplateLiteral(["Apriling band piccolo"])))),
      do: () => {
        joinSection(template_string_$item(robotrunleg_templateObject92 || (robotrunleg_templateObject92 = robotrunleg_taggedTemplateLiteral(["Apriling band piccolo"]))));
        if (canJoinSection()) {
          joinSection(template_string_$item(robotrunleg_templateObject93 || (robotrunleg_templateObject93 = robotrunleg_taggedTemplateLiteral(["Apriling band saxophone"]))));
          play(template_string_$item(robotrunleg_templateObject94 || (robotrunleg_templateObject94 = robotrunleg_taggedTemplateLiteral(["Apriling band saxophone"]))));
        }
        if (lib_have(template_string_$familiar(robotrunleg_templateObject95 || (robotrunleg_templateObject95 = robotrunleg_taggedTemplateLiteral(["Grey Goose"]))))) (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(robotrunleg_templateObject96 || (robotrunleg_templateObject96 = robotrunleg_taggedTemplateLiteral(["Grey Goose"]))));else if (lib_have(template_string_$familiar(robotrunleg_templateObject97 || (robotrunleg_templateObject97 = robotrunleg_taggedTemplateLiteral(["Chest Mimic"]))))) (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(robotrunleg_templateObject98 || (robotrunleg_templateObject98 = robotrunleg_taggedTemplateLiteral(["Chest Mimic"]))));else if (lib_have(template_string_$familiar(robotrunleg_templateObject99 || (robotrunleg_templateObject99 = robotrunleg_taggedTemplateLiteral(["Pocket Professor"])))) && (0,external_kolmafia_namespaceObject.familiarWeight)(template_string_$familiar(robotrunleg_templateObject100 || (robotrunleg_templateObject100 = robotrunleg_taggedTemplateLiteral(["Pocket Professor"])))) < 20) (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(robotrunleg_templateObject101 || (robotrunleg_templateObject101 = robotrunleg_taggedTemplateLiteral(["Pocket Professor"]))));else if (lib_have(template_string_$familiar(robotrunleg_templateObject102 || (robotrunleg_templateObject102 = robotrunleg_taggedTemplateLiteral(["Comma Chameleon"]))))) (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(robotrunleg_templateObject103 || (robotrunleg_templateObject103 = robotrunleg_taggedTemplateLiteral(["Comma Chameleon"]))));
        while (template_string_$item(robotrunleg_templateObject104 || (robotrunleg_templateObject104 = robotrunleg_taggedTemplateLiteral(["Apriling band piccolo"]))).dailyusesleft > 0 && lib_have(template_string_$item(robotrunleg_templateObject105 || (robotrunleg_templateObject105 = robotrunleg_taggedTemplateLiteral(["Apriling band piccolo"]))))) play(template_string_$item(robotrunleg_templateObject106 || (robotrunleg_templateObject106 = robotrunleg_taggedTemplateLiteral(["Apriling band piccolo"]))));
      },
      limit: {
        tries: 1
      }
    }, {
      name: "Pajamas",
      completed: () => lib_have(template_string_$item(robotrunleg_templateObject107 || (robotrunleg_templateObject107 = robotrunleg_taggedTemplateLiteral(["burning cape"])))),
      acquire: [{
        item: template_string_$item(robotrunleg_templateObject108 || (robotrunleg_templateObject108 = robotrunleg_taggedTemplateLiteral(["clockwork maid"]))),
        price: 7 * property_get("valueOfAdventure"),
        optional: true
      }, {
        item: template_string_$item(robotrunleg_templateObject109 || (robotrunleg_templateObject109 = robotrunleg_taggedTemplateLiteral(["burning cape"])))
      }],
      do: () => {
        if (lib_have(template_string_$item(robotrunleg_templateObject110 || (robotrunleg_templateObject110 = robotrunleg_taggedTemplateLiteral(["clockwork maid"]))))) {
          (0,external_kolmafia_namespaceObject.use)(template_string_$item(robotrunleg_templateObject111 || (robotrunleg_templateObject111 = robotrunleg_taggedTemplateLiteral(["clockwork maid"]))));
        }
        robotrunleg_pajamas = true;
      },
      outfit: () => ({
        familiar: template_string_$familiars(robotrunleg_templateObject112 || (robotrunleg_templateObject112 = robotrunleg_taggedTemplateLiteral(["Trick-or-Treating Tot, Left-Hand Man, Disembodied Hand, Grey Goose"]))).find(fam => lib_have(fam)),
        modifier: "adventures".concat(args.pvp ? ", 0.3 fites" : "")
      })
    }, {
      name: "Alert-No Nightcap",
      ready: () => !doneAdventuring(),
      completed: () => stooperDrunk(),
      do: () => {
        var targetAdvs = 100 - (0,external_kolmafia_namespaceObject.numericModifier)("adventures");
        (0,external_kolmafia_namespaceObject.print)("smol completed, but did not overdrink.", "red");
        if (targetAdvs < (0,external_kolmafia_namespaceObject.myAdventures)() && targetAdvs > 0) (0,external_kolmafia_namespaceObject.print)("Rerun with fewer than ".concat(targetAdvs, " adventures for smol to handle your diet"), "red");else (0,external_kolmafia_namespaceObject.print)("Something went wrong.", "red");
      }
    }]
  }];
}
;// CONCATENATED MODULE: ./src/main.ts
function main_toConsumableArray(arr) { return main_arrayWithoutHoles(arr) || main_iterableToArray(arr) || main_unsupportedIterableToArray(arr) || main_nonIterableSpread(); }
function main_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function main_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return main_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return main_arrayLikeToArray(o, minLen); }
function main_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function main_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return main_arrayLikeToArray(arr); }
function main_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }












var version = "0.0.3";
var realMonth = gameDay().getMonth();
var realDay = gameDay().getDate();
var dontCS = (0,external_kolmafia_namespaceObject.gamedayToInt)() === 78 || realMonth === 10 && realDay === 30;
var halloween = (0,external_kolmafia_namespaceObject.gamedayToInt)() === 79 || realMonth === 10 && realDay === 31;
function main(command) {
  Args.fill(args, command);
  if (args.help) {
    Args.showHelp(args);
    return;
  }
  if (dontCS && args.halloween && args.cs) {
    throw "Tomorrow is halloween, run something that lets you get steel organs!";
  }
  if (halloween && args.halloween && args.smol) {
    throw "Today is halloween, run CS for more organ space!";
  }

  /*if (args.profits) {
    printProfits(this.profits.all());
    return;
  };*/

  (0,external_kolmafia_namespaceObject.print)("Running: candyWrapper v".concat(version));
  var runQuest = args.cs ? CSQuests() : args.smol ? SmolQuests() : args.casual ? CasualQuests() : args.robot ? RobotQuests() : undefined;
  if (runQuest === undefined) throw "Undefined runtype; please choose either cs or smol";
  var tasks = halloween ? getTasks([GarboWeenQuest(), AscendQuest()].concat(main_toConsumableArray(runQuest))) : getTasks([AftercoreQuest(), AscendQuest()].concat(main_toConsumableArray(runQuest)));
  if (tasks === undefined) throw "Undefined runtype; please choose either cs or smol";
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
}
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;