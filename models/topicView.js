/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 * This file was generated using AutoRest.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the TopicView class.
 * @constructor
 * Topic view
 * @member {string} topicHandle Gets or sets topic handle
 * 
 * @member {date} createdTime Gets or sets created time
 * 
 * @member {date} lastUpdatedTime Gets or sets last updated time
 * 
 * @member {string} publisherType Gets or sets publisher type. Possible values
 * include: 'User', 'App'
 * 
 * @member {object} user Gets or sets owner of the topic
 * 
 * @member {string} [user.userHandle] Gets or sets user handle
 * 
 * @member {string} [user.firstName] Gets or sets first name of the user
 * 
 * @member {string} [user.lastName] Gets or sets last name of the user
 * 
 * @member {string} [user.photoHandle] Gets or sets photo handle of the user
 * 
 * @member {string} [user.photoUrl] Gets or sets photo url of the user
 * 
 * @member {string} [user.visibility] Gets or sets visibility of the user.
 * Possible values include: 'Public', 'Private'
 * 
 * @member {string} [user.followerStatus] Gets or sets follower relationship
 * status of the querying user. Possible values include: 'None', 'Follow',
 * 'Pending', 'Blocked'
 * 
 * @member {string} [title] Gets or sets topic title
 * 
 * @member {string} text Gets or sets topic text
 * 
 * @member {string} [blobType] Gets or sets topic blob type. Possible values
 * include: 'Unknown', 'Image', 'Video', 'Custom'
 * 
 * @member {string} [blobHandle] Gets or sets topic blob handle
 * 
 * @member {string} [blobUrl] Gets or sets topic blob url
 * 
 * @member {string} [categories] Gets or sets topic categories
 * 
 * @member {string} [language] Gets or sets topic language
 * 
 * @member {string} [group] Gets or sets topic group
 * 
 * @member {string} [deepLink] Gets or sets topic deep link
 * 
 * @member {string} [friendlyName] Gets or sets topic friendly name
 * 
 * @member {number} totalLikes Gets or sets total likes for the topic
 * 
 * @member {number} totalComments Gets or sets total comments for the topic
 * 
 * @member {boolean} liked Gets or sets a value indicating whether the
 * querying user has liked the topic
 * 
 * @member {boolean} [pinned] Gets or sets a value indicating whether the
 * querying user has pinned the topic
 * 
 * @member {string} [contentStatus] Gets or sets content status. Possible
 * values include: 'Active', 'Banned'
 * 
 * @member {object} [app] Gets or sets the containing app
 * 
 * @member {string} [app.appHandle] Gets or sets app handle
 * 
 * @member {string} [app.name] Gets or sets app name
 * 
 * @member {string} [app.iconHandle] Gets or sets app icon handle
 * 
 * @member {string} [app.iconUrl] Gets or sets app icon url
 * 
 * @member {string} [app.platformType] Gets or sets platform type. Possible
 * values include: 'Windows', 'Android', 'IOS'
 * 
 * @member {string} [app.deepLink] Gets or sets app deep link
 * 
 * @member {string} [app.storeLink] Gets or sets app store link
 * 
 */
function TopicView() {
}

/**
 * Defines the metadata of TopicView
 *
 * @returns {object} metadata of TopicView
 *
 */
TopicView.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'TopicView',
    type: {
      name: 'Composite',
      className: 'TopicView',
      modelProperties: {
        topicHandle: {
          required: true,
          serializedName: 'topicHandle',
          type: {
            name: 'String'
          }
        },
        createdTime: {
          required: true,
          serializedName: 'createdTime',
          type: {
            name: 'DateTime'
          }
        },
        lastUpdatedTime: {
          required: true,
          serializedName: 'lastUpdatedTime',
          type: {
            name: 'DateTime'
          }
        },
        publisherType: {
          required: true,
          serializedName: 'publisherType',
          type: {
            name: 'Enum',
            allowedValues: [ 'User', 'App' ]
          }
        },
        user: {
          required: true,
          serializedName: 'user',
          type: {
            name: 'Composite',
            className: 'UserCompactView'
          }
        },
        title: {
          required: false,
          serializedName: 'title',
          type: {
            name: 'String'
          }
        },
        text: {
          required: true,
          serializedName: 'text',
          type: {
            name: 'String'
          }
        },
        blobType: {
          required: false,
          serializedName: 'blobType',
          type: {
            name: 'Enum',
            allowedValues: [ 'Unknown', 'Image', 'Video', 'Custom' ]
          }
        },
        blobHandle: {
          required: false,
          serializedName: 'blobHandle',
          type: {
            name: 'String'
          }
        },
        blobUrl: {
          required: false,
          serializedName: 'blobUrl',
          type: {
            name: 'String'
          }
        },
        categories: {
          required: false,
          serializedName: 'categories',
          type: {
            name: 'String'
          }
        },
        language: {
          required: false,
          serializedName: 'language',
          type: {
            name: 'String'
          }
        },
        group: {
          required: false,
          serializedName: 'group',
          type: {
            name: 'String'
          }
        },
        deepLink: {
          required: false,
          serializedName: 'deepLink',
          type: {
            name: 'String'
          }
        },
        friendlyName: {
          required: false,
          serializedName: 'friendlyName',
          type: {
            name: 'String'
          }
        },
        totalLikes: {
          required: true,
          serializedName: 'totalLikes',
          type: {
            name: 'Number'
          }
        },
        totalComments: {
          required: true,
          serializedName: 'totalComments',
          type: {
            name: 'Number'
          }
        },
        liked: {
          required: true,
          serializedName: 'liked',
          type: {
            name: 'Boolean'
          }
        },
        pinned: {
          required: false,
          serializedName: 'pinned',
          type: {
            name: 'Boolean'
          }
        },
        contentStatus: {
          required: false,
          serializedName: 'contentStatus',
          type: {
            name: 'Enum',
            allowedValues: [ 'Active', 'Banned' ]
          }
        },
        app: {
          required: false,
          serializedName: 'app',
          type: {
            name: 'Composite',
            className: 'AppCompactView'
          }
        }
      }
    }
  };
};

module.exports = TopicView;
