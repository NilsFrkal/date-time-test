import * as _ from "lodash";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root", // <- ADD THIS
})
export class ObjectHelper {
  constructor() { }

  // helper function to merge objects
  merge = (a, b) => {
    if (_.isObject(a)) {
      return _.merge({}, a, b, this.merge);
    } else {
      return a || b;
    }
  };

  // helper function to merge array
  mergeObjectArray = (objectArray) => {
    // Custom merge function ORs together non-object values, recursively
    // calls itself on Objects.
    const merger = (a, b) => {
      if (_.isObject(a)) {
        return _.merge({}, a, b, merger);
      } else {
        return a || b;
      }
    };

    // Allow roles to be passed to _.merge as an array of arbitrary length
    const args = _.flatten([{}, objectArray, merger]);
    return _.merge.apply(_, args);
  };

  mapAttributes = (source, target) => {
    for (const key in source) {
      if (target.hasOwnProperty(key)) {
        target[key] = source[key];
      }
    }

    return target;
  };

  groupBy = (
    dataToGroupOn,
    fieldNameToGroupOn,
    fieldNameForGroupName,
    fieldNameForChildren
  ) => {
    const result = _.chain(dataToGroupOn)
      .groupBy(fieldNameToGroupOn)
      .toPairs()
      .map((currentItem) => {
        return _.zipObject(
          [fieldNameForGroupName, fieldNameForChildren],
          currentItem
        );
      })
      .value();
    return result;
  };

  pickMultiple = (array, thingsToPick) => {
    return _.map(array, _.partial(_.ary(_.pick, thingsToPick.length), _, thingsToPick))
  }
}
