/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 * <autogenerated> This file was generated using AutoRest. </autogenerated>
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the GetTopicNameResponse class.
 * @constructor
 * Response from get topic name
 * @member {string} topicHandle Gets or sets topic handle of the response
 * 
 */
function GetTopicNameResponse() {
}

/**
 * Defines the metadata of GetTopicNameResponse
 *
 * @returns {object} metadata of GetTopicNameResponse
 *
 */
GetTopicNameResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'GetTopicNameResponse',
    type: {
      name: 'Composite',
      className: 'GetTopicNameResponse',
      modelProperties: {
        topicHandle: {
          required: true,
          serializedName: 'topicHandle',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = GetTopicNameResponse;