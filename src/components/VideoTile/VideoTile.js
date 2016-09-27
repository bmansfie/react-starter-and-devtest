/**
 * @author Brandon Mansfield
 */

import React, { PropTypes, Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './VideoTile.css';

class VideoTile extends Component {
  static propTypes = {
    youtubeId: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      play: false
    };
  };

  clicked(me) {
    console.log('clicked');
    this.setState({play:true});
  }

  render() {
    var videoIframe =
        <div className={s.video}>
          <iframe title="Youtube player"
                  width="800"
                  height="450"
                  src={'https://www.youtube.com/embed/' + this.props.youtubeId + '?autoplay=1'}
                  frameborder="0" allowFullScreen />
        </div>
        ;
    var flex = s.flexCol;
    if (!this.state.play) {
      videoIframe =
        <div className={s.video}>
          <div className={s.playButton} onClick={this.clicked.bind(this)} />
          <img
            width="213"
            height="120"
            onClick={this.clicked.bind(this)}
            src={'https://img.youtube.com/vi/' + this.props.youtubeId + '/0.jpg'}
          />
        </div>;
      flex = s.flexRow;
    }
    return (
      <div className={s.container + ' ' + flex}>
          {videoIframe}
        <div className={s.videoInfo}>
          <div className={s.name}>
            {this.props.name}
          </div>
          <div className={s.heading}>
            {this.props.heading}
          </div>
          <div className={s.caption}>
            {this.props.caption}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(VideoTile);
