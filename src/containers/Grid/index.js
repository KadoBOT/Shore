import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import R from 'ramda'

import * as actions from '../../actions'
import Grid from '../../components/Grid'

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Grid)
