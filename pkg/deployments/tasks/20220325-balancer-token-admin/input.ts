import Task, { TaskMode } from '../../src/task';

export type BalancerTokenAdminDeployment = {
  BAL: string;
  Vault: string;
};

const TestBALTask = new Task('20220325-test-balancer-token', TaskMode.READ_ONLY);
const Vault = new Task('20210418-vault', TaskMode.READ_ONLY);

export default {
  Vault,
  mainnet: {
    BAL: '0xba100000625a3754423978a60c9317c58a424e3D',
  },
  kovan: {
    BAL: TestBALTask.output({ network: 'kovan' }).TestBalancerToken,
  },
  goerli: {
    BAL: TestBALTask.output({ network: 'goerli' }).TestBalancerToken,
  },
  'bsc-testnet': {
    BAL: TestBALTask.output({ network: 'bsc-testnet' }).TestBalancerToken,
  },
};
