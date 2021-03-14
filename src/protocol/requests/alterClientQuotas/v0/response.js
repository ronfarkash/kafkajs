const Decoder = require('../../../decoder')
const { failure, createErrorFromCode } = require('../../../error')

/**
 *  AlterClientQuotas Response (Version: 0) => throttle_time_ms [entries] 
 *  throttle_time_ms => INT32
 *  entries => error_code error_message [entity] 
 *    error_code => INT16
 *    error_message => NULLABLE_STRING
 *    entity => entity_type entity_name 
 *      entity_type => STRING
 *      entity_name => NULLABLE_STRING
 */

const decode = async rawData => {
	const decoder = new Decoder(rawData)
	const throttleTime = decoder.readInt32()
	const entries = decoder.readArray(decodeEntries)
  
	return {
	  throttleTime,
	  entries,
	}
}

const decodeEntries = decoder => ({
	errorCode: decoder.readInt16(),
	errorMessage: decoder.readString(),
	entity: decoder.readArray(decodeEntity),
})
const decodeEntity = decoder => ({
	entityType: decoder.readString(),
	entityName: decoder.readString(),
})

const parse = async data => {
	const entriesWithError = data.resources.filter(({ errorCode }) => failure(errorCode))
	if (entriesWithError.length > 0) {
	  throw createErrorFromCode(resourcesWithError[0].errorCode)
	}
	return data
  }
  
  
module.exports = {
	decode,
	parse,
}