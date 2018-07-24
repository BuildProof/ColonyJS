// An example using the setTaskDueDate operation
const setTaskDueDate = async (colonyClient, taskId, dueDate) => {

  // Start the operation to set the dueDate for the given task
  const operation = await colonyClient.setTaskDueDate.startOperation({
    taskId,
    dueDate,
  });

  // Check if the required signees for the operation includes the current user
  if (operation.requiredSignees.includes(colonyClient.adapter.wallet.address)) {

    // Sign the operation
    await operation.sign();

    // Successfully signed operation
    console.log('Successfully Signed Operation');

  }

  // Check for missing signees
  if (operation.missingSignees.length === 0) {

    // Send the operation
    await operation.send();

    // Successfully completed operation
    console.log('Successfully Completed Operation');


  } else {

    // Serialize the operation into JSON format
    const operationJSON = operation.toJSON();

    // Store the operation to access it again from another account
    STORED_OPERATIONS.setTaskDueDateOperationJSON = operationJSON;

    // Successfully Stored Operation
    console.log('Successfully Stored Operation');

  }

  // Get the updated task
  const updatedTask = await colonyClient.getTask.call({ taskId });

  // Check out the logs to see the updated task
  console.log('Updated Task:', updatedTask);

  // Return the updated task
  return updatedTask;

}

// Export setTaskDueDate example
module.exports = setTaskDueDate;
