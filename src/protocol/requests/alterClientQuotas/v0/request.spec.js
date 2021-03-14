const RequestV0Protocol = require('./request')
const RESOURCE_TYPES = require('../../../resourceTypes')

describe('Protocol > Requests > DescribeClientQuotas > v0', () => {
  test('request', async () => {
    const { buffer } = await RequestV0Protocol({
      components: [
        {
          entityType: RESOURCE_TYPES.TOPIC,
          name: 'test-topic-332d38bc4eee2ff29df6',
          configNames: ['compression.type', 'retention.ms'],
        },
      ],
	  strict: false,
    }).encode()
    expect(buffer).toEqual(Buffer.from(require('../fixtures/v0_request.json')))
  })
})
