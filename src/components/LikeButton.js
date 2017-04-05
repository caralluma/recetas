import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import './LikeButton.sass'
import HeartGrey from '../images/heart-grey.svg'
import HeartRed from '../images/heart-red.svg'
import toggleLike from '../actions/recipes/toggleLike'


export class LikeButton extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    liked: PropTypes.bool.isRequired,
  }

  classNames() {
    const { liked } = this.props

    let classes = 'like'

    if (liked) { classes += ' liked' }

    return classes
  }

  toggleLike() {
    this.props.onChange(this.props._id)
  }

  render() {
    const { liked } = this.props
    return (
      <p className={ this.classNames() }>
        <button onClick={ this.toggleLike.bind(this) }>
          <img className="heart" src={ liked ? HeartRed : HeartGrey } />
          <span className="copy">
            <img className="heart" src={ liked ? HeartRed : HeartGrey } />
          </span>
        </button>
        <span className="likes">{ liked ? 'You like this' : null }</span>
      </p>
    )
  }
}

export default connect(null, { onChange: toggleLike })(LikeButton)
