const customResourceResponse = {};

customResourceResponse.success = { statusCode: 200, message: 'Request has been processed successfully.' };
customResourceResponse.reqCreated = { statusCode: 201, message: 'Record has been created successfully.' };
customResourceResponse.recordNotFound = { statusCode: 404, message: 'No record found.' };
customResourceResponse.serverError = { statusCode: 500, message: 'Internal server error.' };
customResourceResponse.reqValidationError = { statusCode: 422, message: 'Data validation failed.' };

module.exports = customResourceResponse;
