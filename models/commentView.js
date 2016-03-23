/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 * This file was generated using AutoRest.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the CommentView class.
 * @constructor
 * Comment view
 * @member {string} commentHandle Gets or sets comment handle
 * 
 * @member {string} topicHandle Gets or sets parent topic handle
 * 
 * @member {date} createdTime Gets or sets created time
 * 
 * @member {object} user Gets or sets owner of the comment
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
 * @member {string} text Gets or sets comment text
 * 
 * @member {string} [blobType] Gets or sets comment blob type. Possible values
 * include: 'Unknown', 'Image', 'Video', 'Custom'
 * 
 * @member {string} [blobHandle] Gets or sets comment blob handle
 * 
 * @member {string} [blobUrl] Gets or sets comment blob url
 * 
 * @member {string} [language] Gets or sets comment language
 * 
 * @member {number} totalLikes Gets or sets total likes for the comment
 * 
 * @member {number} totalReplies Gets or sets total replies for the comment
 * 
 * @member {boolean} liked Gets or sets a value indicating whether the
 * querying user has liked the comment
 * 
 * @member {string} [contentStatus] Gets or sets content status. Possible
 * values include: 'Active', 'Banned'
 * 
 */
function CommentView() {
}

/**
 * Defines the metadata of CommentView
 *
 * @returns {object} metadata of CommentView
 *
 */
CommentView.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'CommentView',
    type: {
      name: 'Composite',
      className: 'CommentView',
      modelProperties: {
        commentHandle: {
          required: true,
          serializedName: 'commentHandle',
          type: {
            name: 'String'
          }
        },
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
        user: {
          required: true,
          serializedName: 'user',
          type: {
            name: 'Composite',
            className: 'UserCompactView'
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
        language: {
          required: false,
          serializedName: 'language',
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
        totalReplies: {
          required: true,
          serializedName: 'totalReplies',
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
        contentStatus: {
          required: false,
          serializedName: 'contentStatus',
          type: {
            name: 'Enum',
            allowedValues: [ 'Active', 'Banned' ]
          }
        }
      }
    }
  };
};

module.exports = CommentView;
