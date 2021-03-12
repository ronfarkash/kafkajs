// From:
// https://github.com/apache/kafka/blob/trunk/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaEntity.java#L33

/**
 * @typedef {number} EntityTypes
 *
 * Enum for Entity Types
 * @readonly
 * @enum {EntityTypes}
 */
 module.exports = {
	/**
	 * User entity type.
	 */
	USER: 'user',
	/**
	 * Client ID entity type.
	 */
	CLIENT_ID : 'client-id',
	/**
	 * IP entity type.
	 */
	IP: 'id',
  }
  