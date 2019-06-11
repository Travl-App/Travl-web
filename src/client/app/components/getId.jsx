import React, {Component} from 'react';

export const getId = (url) => {
    const urlArray = url.split('/');
    return urlArray[urlArray.length-2];
  }
