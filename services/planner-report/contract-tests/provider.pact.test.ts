import { describe, it } from 'vitest';
import { Verifier } from '@pact-foundation/pact';
import path from 'path';

describe('Pact Verification', () => {
  it('validates the expectations of Service 1', async () => {
    const opts = {
      provider: 'planner-report',
      providerBaseUrl: 'http://localhost:3001', // Service 2's URL
      pactUrls: [path.resolve(__dirname, '../../planner/pacts/planner-planner-report.json')],
      stateHandlers: {
        'Service 2 has data': async () => console.log('Setting up state: Service 2 has data')
      }
    };

    await new Verifier(opts).verifyProvider();
  });
});