import { createClient } from '../../common/contentful';

class Quotes extends React.Component {
  static async getInitialProps() {
    const client = createClient();
  
    const entries = await client.getEntries({
      'content_type': 'story'
    });
    return { entries: entries.items }
  }

  render() {
    const items = this.props.entries.map((item, key) => 
      <li>{item.fields.personName}</li>
    )

    return (
      <div className="text-center">    
        <h1>Quote test...</h1>
        <ul>
          {items}
        </ul>
        <video controls>
          <source src="http://videos.ctfassets.net/5mljqrbplngz/3E9akQxSVethgU0tJri0Ol/2f17f1518d786325fcc3f8ff53b69b5c/LOOK_PLAY_37.1_REV.mp4" type="video/mp4"></source>
        </video>
      </div>
    )
  }
}
export default Quotes
