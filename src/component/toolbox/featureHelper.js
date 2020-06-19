/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

import * as zrUtil from 'zrender/src/core/util';

export function setEvent(feature) {
    feature.event = feature.event || {};
    var event = feature.model.get('event') || {};

    zrUtil.each(
        ['onclick', 'onmouseover', 'onmouseout'],
        function (e) {
            feature.event[e] = event[e];
        }
    );
};

export function bindCustomEventListeners(path, feature, iconName) {
    zrUtil.each(
        ['click', 'mouseover', 'mouseout'],
        function (evt, i) {
            var eventHandler = feature.event['on' + evt];
            zrUtil.isFunction(eventHandler) && path.on(evt, zrUtil.curry(eventHandler, iconName, path));
        }
    );
};

export function isUserFeatureName(featureName) {
    return featureName.indexOf('my') === 0;
};
