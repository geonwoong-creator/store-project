import { medusaIntegrationTestRunner } from "@medusajs/test-utils"
jest.setTimeout(60 * 1000)

medusaIntegrationTestRunner({
  inApp: true,
  env: {},
  testSuite: ({ api }) => {
    describe("Custom Endpoint", () => {
      it("GET /store/custom should return 200", async () => {
        const response = await api.get('/store/custom')
        expect(response.status).toEqual(200)
      })
    })
  },
})
