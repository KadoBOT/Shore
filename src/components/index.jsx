import React, {PropTypes} from 'react'

import Grid from '../containers/Grid'
import StartScreen from '../containers/StartScreen'

const TicTacToe = ({gameStarted}) => gameStarted ? <Grid /> : <StartScreen />

TicTacToe.propTypes = {
  props: PropTypes.type
}

export default TicTacToe
