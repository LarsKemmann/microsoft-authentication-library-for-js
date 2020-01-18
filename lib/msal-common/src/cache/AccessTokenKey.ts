/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { ICrypto } from "../crypto/ICrypto";
import { UrlString } from "../url/UrlString";
import { StringUtils } from "../utils/StringUtils";

/**
 * @hidden
 */
export class AccessTokenKey {

    authority: string;
    clientId: string;
    scopes: string;
    resource: string;
    homeAccountIdentifier: string;

    constructor(authority: string, clientId: string, scopes: string, resource: string, uid: string, utid: string, cryptoObj: ICrypto) {
        const authorityUri = new UrlString(authority);
        this.authority = authorityUri.urlString;
        this.clientId = clientId;
        this.scopes = scopes;
        this.resource = resource;
        if (!StringUtils.isEmpty(uid) && !StringUtils.isEmpty(utid)) {
            this.homeAccountIdentifier = `${cryptoObj.base64Encode(uid)}.${cryptoObj.base64Encode(utid)}`;
        }
    }
}