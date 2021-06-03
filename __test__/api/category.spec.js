import { getCategoryContent } from 'api/category'

describe('category', () => {
  test('getCategoryContent', async () => {
    const res = await getCategoryContent(11)
    expect(res).toBeNull
  })
})
