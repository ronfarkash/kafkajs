const Decoder = require('../../../decoder')
const { failure, createErrorFromCode } = require('../../../error')

/**
 * DescribeClientQuotas Response (Version: 0) => throttle_time_ms error_code error_message [entries] 
 *   throttle_time_ms => INT32
 *   error_code => INT16
 *   error_message => NULLABLE_STRING
 *   entries => [entity] [values] 
 *     entity => entity_type entity_name 
 *       entity_type => STRING
 *       entity_name => NULLABLE_STRING
 *     values => key value 
 *       key => STRING
 *       value => FLOAT64
 */

const decode = async rawData => {
	const decoder = new Decoder(rawData)
	const throttleTime = decoder.readInt32()
	const errorCode = decoder.readInt16()
	const entries = decoder.readArray(decodeEntries)
  
	return {
	  throttleTime,
	  errorCode,
	  entries,
	}
}

const decodeEntries = decoder => ({
	entity: decoder.readArray(decodeEntity),
	values: decoder.readArray(decodeValues),
})
const decodeEntity = decoder => ({
	entityType: decoder.readString(),
	entityName: decoder.readString(),
})

const decodeValues = decoder => ({
	key: decoder.readString(),
	value: decoder.readFloat64(),
})
 
const parse = async data => {
  if(failure(data.errorCode)) {
	throw createErrorFromCode(data.errorCode)
  }	
  return data;
}
  
module.exports = {
	decode,
	parse,
}