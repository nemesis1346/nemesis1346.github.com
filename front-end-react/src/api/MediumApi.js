
import axios from 'axios'
class MediumApi {
    // Get values from Medium with rss2json
    static async getMediumBlogPosts() {
        let response;
        
        const options = {
            method: 'GET',
            url: 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nemesis1346',
            headers: {accept: 'application/json'}
        };
        
        
        try {
            response = await axios.request(options);
            console.log("Medium Response: ",response.data);
            return response.data; // Return ordered documents
        } catch (error) {
            console.error(error);
            throw new Error('Failed to fetch coins from CoinGecko API');
        }
    }
    
    
}

export default MediumApi;
