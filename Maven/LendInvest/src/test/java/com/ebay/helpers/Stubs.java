package com.ebay.helpers;

import com.github.tomakehurst.wiremock.WireMockServer;
import static com.github.tomakehurst.wiremock.client.WireMock.*;
import com.github.tomakehurst.wiremock.matching.StringValuePattern;
import static com.github.tomakehurst.wiremock.core.WireMockConfiguration.options;

public class Stubs {
    private JsonUtil jsonUtil;
    public WireMockServer wireMockServer;
    public Stubs setUp() {
        wireMockServer = new WireMockServer(options().port(8080).httpsPort(8443));
        wireMockServer.start();
        jsonUtil = new JsonUtil();
        return this;
    }
    public Stubs resetServer() {
    	
    	if(wireMockServer!= null)
    	{
    		wireMockServer.resetAll();
    	}
    	return this;
    }
    
    public Stubs stubForGetAllLocations(String responseFileName)
    {
    	jsonUtil.setJSON("/__files/json/"+responseFileName);
    	wireMockServer.stubFor(get("/location/get/all")
                //.withHeader("Content-Type", equalToIgnoreCase("application/json"))
                //.withHeader("Accept", equalToIgnoreCase("application/json"))
                .willReturn(aResponse()
                    .withStatus(200)
                    .withHeader("Content-Type", "application/json")
                    .withBodyFile("json/"+responseFileName)));
            return this;
    }
    
    public Stubs stubForPostLocation(String requestFileName, String responseFileName)
    {
    	jsonUtil.setJSON("/__files/json/"+requestFileName);
    	wireMockServer.stubFor(post("/location/post")
                //.withHeader("Content-Type", equalToIgnoreCase("application/json"))
                //.withHeader("Accept", equalToIgnoreCase("application/json"))
                .willReturn(aResponse()
                    .withStatus(200)
                    .withHeader("Content-Type", "application/json")
                    .withBodyFile("json/"+responseFileName)));
            return this;
    }
    
    public Stubs status() {
        System.out.println("Stubs Started!");
        return this;
    }
}