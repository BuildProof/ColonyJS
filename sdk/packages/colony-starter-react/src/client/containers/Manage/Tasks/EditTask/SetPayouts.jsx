import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as adminsActions from '../../../../actions/adminsActions'
import * as tasksActions from '../../../../actions/tasksActions'
import SetPayouts from '../../../../components/Manage/Tasks/EditTask/SetPayouts'

class SetPayoutsContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      payouts: {
        manager: props.task.payouts.manager,
        evaluator: props.task.payouts.evaluator,
        worker: props.task.payouts.worker,
      },
    }
    this.canSetPayouts = this.canSetPayouts.bind(this)
    this.setManagerPayout = this.setManagerPayout.bind(this)
    this.setEvaluatorPayout = this.setEvaluatorPayout.bind(this)
    this.setWorkerPayout = this.setWorkerPayout.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const colonyClient = this.props.colonyClient
    const userAddress = this.props.colonyClient.adapter.wallet.address
    this.props.checkAdmin(colonyClient, userAddress)
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.setTaskPayoutSuccess && this.props.setTaskPayoutSuccess) {
      this.setState({
        payouts: {
          manager: this.props.task.payouts.manager,
          evaluator: this.props.task.payouts.evaluator,
          worker: this.props.task.payouts.worker,
        },
      })
    }
  }

  componentWillUnmount() {
    this.props.resetActions()
  }

  canSetPayouts() {
    const completionDate = this.props.task.completionDate
    return completionDate === null
  }

  handleChange(event) {
    let state = this.state
    state.payouts[event.target.id] = event.target.value
    this.setState({ ...state })
  }

  setManagerPayout() {
    this.props.setTaskPayout(
      this.props.colonyClient,
      Number(this.props.task.id),
      'MANAGER',
      Number(this.state.payouts.manager),
    )
  }

  setEvaluatorPayout() {
    this.props.setTaskPayout(
      this.props.colonyClient,
      Number(this.props.task.id),
      'EVALUATOR',
      Number(this.state.payouts.evaluator),
    )
  }

  setWorkerPayout() {
    this.props.setTaskPayout(
      this.props.colonyClient,
      Number(this.props.task.id),
      'WORKER',
      Number(this.state.payouts.worker),
    )
  }

  render() {
    return (
      <SetPayouts
        canSetPayouts={this.canSetPayouts}
        handleChange={this.handleChange}
        payouts={this.state.payouts}
        setManagerPayout={this.setManagerPayout}
        setEvaluatorPayout={this.setEvaluatorPayout}
        setWorkerPayout={this.setWorkerPayout}
        setTaskPayoutError={this.props.setTaskPayoutError}
        setTaskPayoutLoading={this.props.setTaskPayoutLoading}
        setTaskPayoutSuccess={this.props.setTaskPayoutSuccess}
      />
    )
  }

}

const mapStateToProps = state => ({
  admin: state.admins.admin,
  colonyClient: state.colony.colonyClient,
  setTaskPayoutError: state.tasks.setTaskPayoutError,
  setTaskPayoutLoading: state.tasks.setTaskPayoutLoading,
  setTaskPayoutSuccess: state.tasks.setTaskPayoutSuccess,
  task: state.tasks.task,
})

const mapDispatchToProps = dispatch => ({
  checkAdmin(colonyClient, userAddress) {
    dispatch(adminsActions.checkAdmin(colonyClient, userAddress))
  },
  resetActions() {
    dispatch(adminsActions.checkAdminError(null))
    dispatch(adminsActions.checkAdminSuccess(false))
    dispatch(tasksActions.setTaskPayoutError(null))
    dispatch(tasksActions.setTaskPayoutSuccess(false))
  },
  setTaskPayout(colonyClient, taskId, role, amount) {
    dispatch(tasksActions.setTaskPayout(colonyClient, taskId, role, amount))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SetPayoutsContainer)
