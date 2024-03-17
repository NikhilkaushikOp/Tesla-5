export default async function handler(req, res) {
  try {
    const response = await fetch('https://auth.tesla.com/oauth2/v3/authorize?client_id=dd2f06fb925c-48c4-9077-4d817cd5fe8a&locale=en-US&response_type=code&scope=openid+user_data+offline_access+vehicle_device_data+vehicle_cmds+vehicle_charging_cmds&state=login&&redirect_uri=https%3A%2F%2Fteslascope.com%2Foauth%2Ftesla%2Fredirect', {
      method: 'GET',
      headers: {
        'Cookie': 'ak_bmsc=CCFFBED42053BDD40680A014054818F2~000000000000000000000000000000~YAAQPKkRYFMbmUaOAQAAmUVySxcqGMxr+8rUpa6x30O1gvEQuP/nOyk7d/i1kJB6x0BV8MofOP7W3fKCU7L/8QbHsqxpe5k841VBD3zx4CxpZvreBdFinjT3zpXjcO2AskboE+bycy5CI1XlDL3x0WBFfgVNBXoS8AZS7vZD14RUKhNMC568co60+oDUKCiWFFkUueXldP2jpATA8iISbyJ/EUNyqNT5LK4RCF5rpnwyUAQ/UKOZy6t8EMYj4y8zCGI2y2Y3RYlpcJUZCp6Gz8ivkXMJwWWVrvwC/bekF0sXobWVWvnU7mFIJAXUSug4suWqB0pEj8bcdjV+EBE6v2oXpxmLaA5X3jcVcdaKK2H0mN1wlF61mLpEfGoGENJx5gVbeDUr8yuqxD60SS4u2Wz0h6P1ttNVzs+TokBNOiXtjhu70dJ54qng1uJHRLKS7OMH+s8q9kjU/Lo38knCRogA8aVBI+rW8gkFNRFKKjVCQZ50MV5v; bm_mi=BA7DDF9067ABEEE14FE7C709023082B5~YAAQPKkRYD4bmUaOAQAAKTlySxdR1zrmYK4vXaKagNMA/N4vbMu6ueuQBf0PebokU2CereGGbllX0J3M1Jcrh+uyuzT4EVFRQHH/tWefNkH+aMf34yFXbyBAfN0Q1lKsVLBJbLMO8Vi6hH07U1hscEUEpZmDSSFiv7HMEypkj4WuVjlj3',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br',
        'Dnt': '1',
        'Sec-Gpc': '1',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        'Te': 'trailers'
      },
      credentials: 'include' // Include cookies in the request
    });

    if (!response.ok) {
      throw new Error('Failed to fetch');
    }

    const data = await response.text();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
