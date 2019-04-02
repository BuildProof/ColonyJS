// Import executeTaskMultisig helper method
const executeTaskMultisig = require('../helpers/multisig');

// An example using the setTaskEvaluatorPayout operation
const signSetTaskEvaluatorPayout = async (colonyClient, taskId, token) => {

  // Execute task multisig operation for the given colonyJS method
  await executeTaskMultisig(
    colonyClient,
    colonyClient.setTaskEvaluatorPayout,
    taskId,
  );

  // Get the task evaluator payout
  const payout = await colonyClient.getTaskPayout.call({
    taskId,
    role: 'EVALUATOR',
    token,
  });

  // Check out the logs to see the task evaluator payout
  console.log('Task Payout Amount:', payout.amount.toString());

  // Return the task evaluator payout
  return payout;

}

// Export signSetTaskEvaluatorPayout example
module.exports = signSetTaskEvaluatorPayout;
