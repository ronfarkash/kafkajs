const Encoder = require('../../../encoder')
const { AlterClientQuotas: apiKey } = require('../../apiKeys')

/**
 *  AlterClientQuotas Request (Version: 0) => [entries] validate_only 
 *  entries => [entity] [ops] 
 *    entity => entity_type entity_name 
 *      entity_type => STRING
 *      entity_name => NULLABLE_STRING
 *    ops => key value remove 
 *      key => STRING
 *      value => FLOAT64
 *      remove => BOOLEAN
 *  validate_only => BOOLEAN
 */

/**
 * @param {Array} components An array of config resources to be returned
 * @param {Boolean} strict Whether the match is strict, i.e. should exclude entities with unspecified entity types.
 */
module.exports = ({ entries, validateOnly }) => ({
  apiKey,
  apiVersion: 0,
  apiName: 'AlterClientQuotas',
  encode: async () => {
    return new Encoder()
	.writeArray(entries.map(encodeEntry))
	.writeBoolean(validateOnly)
  },
})

const encodeEntry = ({entity, ops}) => {
	return new Encoder()
	 .writeArray(encodeEntity(entity))
	 .writeArray(encodeOps(ops))
}

const encodeEntity = ({ entityType, matchType, match}) => {
  return new Encoder()
    .writeString(entityType)
    .writeInt8(matchType)
    .writeString(match)
}

const encodeOps = ({key, value, remove}) => {
	return new Encoder()
	  .writeString(key)
	  .writeFloat64(value)
	  .writeBoolean(remove) 
}
