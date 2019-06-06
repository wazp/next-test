import { createClient } from '../../common/contentful';

class Quotes extends React.Component {
  static async getInitialProps() {
    const client = createClient();
  
    const entries = await client.getEntries({
      'content_type': 'blogPost'
    });
    // console.log(entries.items[0])
    return { entries: entries.items }
  }

  render() {
    const items = this.props.entries.map((item, key) => 
      <li>{item.fields.title}</li>
    )

    return (
      <div className="text-center">    
        <h1>Quote test...</h1>
        <ul>
          {items}
        </ul>
      </div>
    )
  }
}
export default Quotes
