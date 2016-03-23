/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 * This file was generated using AutoRest.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the UserCompactView class.
 * @constructor
 * User compact view
 * @member {string} userHandle Gets or sets user handle
 * 
 * @member {string} firstName Gets or sets first name of the user
 * 
 * @member {string} lastName Gets or sets last name of the user
 * 
 * @member {string} [photoHandle] Gets or sets photo handle of the user
 * 
 * @member {string} [photoUrl] Gets or sets photo url of the user
 * 
 * @member {string} visibility Gets or sets visibility of the user. Possible
 * values include: 'Public', 'Private'
 * 
 * @member {string} followerStatus Gets or sets follower relationship status
 * of the querying user. Possible values include: 'None', 'Follow',
 * 'Pending', 'Blocked'
 * 
 */
function UserCompactView() {
}

/**
 * Defines the metadata of UserCompactView
 *
 * @returns {object} metadata of UserCompactView
 *
 */
UserCompactView.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'UserCompactView',
    type: {
      name: 'Composite',
      className: 'UserCompactView',
      modelProperties: {
        userHandle: {
          required: true,
          serializedName: 'userHandle',
          type: {
            name: 'String'
          }
        },
        firstName: {
          required: true,
          serializedName: 'firstName',
          type: {
            name: 'String'
          }
        },
        lastName: {
          required: true,
          serializedName: 'lastName',
          type: {
            name: 'String'
          }
        },
        photoHandle: {
          required: false,
          serializedName: 'photoHandle',
          type: {
            name: 'String'
          }
        },
        photoUrl: {
          required: false,
          serializedName: 'photoUrl',
          type: {
            name: 'String'
          }
        },
        visibility: {
          required: true,
          serializedName: 'visibility',
          type: {
            name: 'Enum',
            allowedValues: [ 'Public', 'Private' ]
          }
        },
        followerStatus: {
          required: true,
          serializedName: 'followerStatus',
          type: {
            name: 'Enum',
            allowedValues: [ 'None', 'Follow', 'Pending', 'Blocked' ]
          }
        }
      }
    }
  };
};

module.exports = UserCompactView;
