import { describe, it, beforeAll, afterAll, afterEach, beforeEach, expect } from 'vitest';
import { Pact } from '@pact-foundation/pact';
import path from 'path';
import { financialReportClient } from '../src/financial-report-client';

const provider = new Pact({
  consumer: 'Service 1',
  provider: 'Service 2',
  port: 1234, // Arbitrary port for mock service
  log: path.resolve(process.cwd(), 'logs', 'pact.log'),
  dir: path.resolve(process.cwd(), 'pacts'),
  logLevel: 'info',
});

describe('Service 2 API', () => {
  beforeAll(async () => {
    await provider.setup()
  });
  afterAll(async () => {
    await provider.finalize();
  });
  afterEach(async () => {
    await provider.verify();
  });

  describe('when a call to Service 2 is made', () => {
    beforeEach(() => {
      provider.addInteraction({
        state: 'Service 2 has data',
        uponReceiving: 'a request for data',
        withRequest: {
          method: 'GET',
          path: '/data',
        },
        willRespondWith: {
          status: 200,
          body: { data: 'Some data' },
        },
      });
    });

    it('will receive the expected response', async () => {
      const response = await financialReportClient();
      expect(response.data).toEqual('Some data');
    });
  });
});
