// From:
// https://github.com/apache/kafka/blob/trunk/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilterComponent.java#L26

/**
 * @typedef {number} EntityMatchTypes
 *
 * Enum for Entity Types
 * @readonly
 * @enum {EntityMatchTypes}
 */
module.exports = {
  /**
   * Matches the entity's name exactly.
   */
  EXACTLY: 0,
  /**
   * Matches the entity's name by the default name.
   */
  DEFAULT: 1,
  /**
   * Matches any entity's name.
   */
  ANY: 2,
}
