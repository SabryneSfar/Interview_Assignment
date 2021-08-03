const axios = require('axios');
const { expect } = require('chai');

describe('Assignment', async function()
{
    it('Make a GET request to the following URL and do assertions', async function() {
        let url = "https://sandbox.iexapis.com/stable/stock/aapl/quote?token=Tsk_456ccaccad6f455886f60ab0529a0345";
        const response = await axios.get(url);

        //console.log(response);

        //In the JSON body response use the assertion library you chose to assert that: 
        
        //a)	The ‘symbol’ is AAPL    
                expect(response.data.symbol).to.equal("AAPL");

        //b)	The ‘companyName’ is “Apple, Inc’
                expect(response.data.companyName).to.equal("Apple Inc");

        //c)	The ‘isUSMarketOpen’ is a boolean true (we will run this during market hours)
                expect(response.data.isUSMarketOpen).to.true;
                
        //d)	The status response code is 200
                expect(response.status).to.equal(200); 
    });

    it('Make a second GET request - two symbols to the following URL and do assertions', async function() {
        let url = "https://sandbox.iexapis.com/stable/stock/market/batch?symbols=tsla,fb&types=quote,news,chart&range=1m&last=5&token=Tsk_456ccaccad6f455886f60ab0529a0345";
        const response = await axios.get(url);

       // console.log(response);

        //In the JSON body response use the assertion library you chose to assert that: 
        
        //a) The ‘symbol’ is Tesla and Facebook
                expect(response.data.TSLA.quote.symbol).to.equal("TSLA");
                expect(response.data.FB.quote.symbol).to.equal("FB");

        //b) The ‘companyName’ is Tesla and Facebook
                expect(response.data.TSLA.quote.companyName).to.equal("Tesla Inc");
                expect(response.data.FB.quote.companyName).to.equal("Facebook Inc - Class A");

        //c) The ‘isUSMarketOpen’ is a boolean true (we will run this during market hours)
                expect(response.data.TSLA.quote.isUSMarketOpen).to.true;
                expect(response.data.FB.quote.isUSMarketOpen).to.true;

        //d) The status response code is 200
                expect(response.status).to.equal(200); 

    });

});
