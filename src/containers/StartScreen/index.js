import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import R from 'ramda'

import * as actions from '../../actions'
import StartScreen from '../../components/StartScreen'

const mapStateToProps = R.pick(['X', 'O'])

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen)
