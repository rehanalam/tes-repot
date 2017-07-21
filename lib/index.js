/**
  * @module CalcLib
  *
  * Simple calculator API hosted on APIMATIC
  */

'use strict';

const Configuration = require('./configuration');
const OAuthManager = require('./OAuthManager');
const SimpleCalculatorController = require('./Controllers/SimpleCalculatorController');
const OAuthAuthorizationController = require('./Controllers/OAuthAuthorizationController');
const OperationTypeEnum = require('./Models/OperationTypeEnum');
const OperationEnum = require('./Models/OperationEnum');
const OAuthScopeEnum = require('./Models/OAuthScopeEnum');
const OAuthToken = require('./Models/OAuthToken');
const OAuthProviderErrorEnum = require('./Models/OAuthProviderErrorEnum');
const CouldNotComputeErrorException = require('./Exceptions/CouldNotComputeErrorException');
const OAuthProviderException = require('./Exceptions/OAuthProviderException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of CalcLib
    Configuration,
    OAuthManager,
    // controllers of CalcLib
    SimpleCalculatorController,
    OAuthAuthorizationController,
    // models of CalcLib
    OperationTypeEnum,
    OperationEnum,
    OAuthScopeEnum,
    OAuthToken,
    OAuthProviderErrorEnum,
    // exceptions of CalcLib
    CouldNotComputeErrorException,
    OAuthProviderException,
    APIException,
};

module.exports = initializer;
