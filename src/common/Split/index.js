import React from 'react'
import PropTypes from 'prop-types'
import { MinHeight } from 'common/Styled'

class Split extends React.Component {
  componentWillMount() {
    this.cancelUpdate = false
    this.props.load.then(Component => {
      this.Component = Component
      if (!this.cancelUpdate && process.browser) {
        this.forceUpdate()
      }
    })
  }

  componentWillUnmount() {
    this.cancelUpdate = true
  }

  render() {
    const { componentProps } = this.props
    return (
      <MinHeight>
        {
          this.Component
            ? this.Component.default
              ? <this.Component.default {...componentProps} />
              : <this.Component {...componentProps} />
            : null
        }
      </MinHeight>
    )
  }
}

Split.propTypes = {
  load: PropTypes.object.isRequired,
}

export default Split
