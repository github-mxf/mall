import { getHotSearchKeyword } from 'api/search';
import { HOT_WORD } from 'api/config'

describe('api-search', () => {
  test('getHotSearchKeyword', async () => {
    const result = await getHotSearchKeyword();
    expect(result).toBe(HOT_WORD);
  })
})
