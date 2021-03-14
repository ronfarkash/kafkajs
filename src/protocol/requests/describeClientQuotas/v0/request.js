const Encoder = require('../../../encoder')
const { DescribeClientQuotas: apiKey } = require('../../apiKeys')

/**
 * DescribeClientQuotas Request (Version: 0) => [components] strict 
 *   components => entity_type match_type match 
 *     entity_type => STRING
 *     match_type => INT8
 *     match => NULLABLE_STRING
 *   strict => BOOLEAN
 */

/**
 * @param {Array} components An array of user entities to be returned.
 * @param {Boolean} strict Whether the match is strict, i.e. should exclude entities with unspecified entity types.
 */
module.exports = ({ components, strict }) => ({
  apiKey,
  apiVersion: 0,
  apiName: 'DescribeClientQuotas',
  encode: async () => {
    return new Encoder()
	.writeArray(components.map(encodeComponent))
	.writeBoolean(strict)
  },
})

const encodeComponent = ({ entityType, matchType, match}) => {
  return new Encoder()
    .writeString(entityType)
    .writeInt8(matchType)
    .writeString(match)
}
