import React, { useEffect } from 'react'

class Comments extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { fullUrl, id } = this.props;
    const DISQUS_SCRIPT = `disq_script_${id}`
    const sd = document.getElementById(DISQUS_SCRIPT)
    if (!sd) {
      var disqus_config = function() {
        this.page.url = fullUrl
        this.page.identifier = id
      }

      const d = document
      const s = d.createElement('script')
      s.src = `https://${id}.disqus.com/embed.js`
      s.id = DISQUS_SCRIPT
      s.async = true
      s.setAttribute('data-timestamp', + new Date())

      d.body.appendChild(s)
    } else {
      window.DISQUS.reset({
        reload: true,
        config: disqus_config,
      })
    }
  }

  componentWillUnmount() {
    const { id } = this.props;
    let scriptElem = document.getElementById(`disq_script_${id}`);
    let divElem = document.getElementById('disqus_thread');
    scriptElem.remove();
    divElem.remove();
  }

  render() {
    return <div id='disqus_thread'/>;
  }
}

export default Comments;