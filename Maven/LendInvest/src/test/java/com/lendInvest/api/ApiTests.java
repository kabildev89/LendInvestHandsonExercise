package com.lendInvest.api;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.hasSize;

import java.util.ArrayList;
import java.util.Arrays;

import com.google.gson.JsonObject;

import io.restassured.RestAssured;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import static org.hamcrest.Matchers.equalTo;

public class ApiTests {
	
    RequestSpecification requestSpecification;
    Response response;
    ValidatableResponse validatableResponse;
    
	ResponseSpecification checkStatusCodeAndContentType = 
		    new ResponseSpecBuilder().
		        expectStatusCode(200).
		        expectContentType(ContentType.JSON).
		        build();


	public void test_GetAndValidateLocations() {
		ArrayList<String> ExpectedLocations = new ArrayList<String>(Arrays.asList("LON","MAN","CAM","LCS"));
		System.out.println("GET started");
		given().when().get("http://localhost:8080/location/get/all").then().assertThat().log().all()
			.spec(checkStatusCodeAndContentType)
			.extract().path("items.location").equals(ExpectedLocations); 
		System.out.println("Location values are Validated");
	}
	
	public void test_GetAndValidateLocations_ShouldBe4() {
		System.out.println("GET started");
		given().when().get("http://localhost:8080/location/get/all").then().assertThat().log().all()
			.body("items.location", hasSize(4));
		System.out.println("No of locations Validated");
	}
	
	public void test_PostAndValidateLocations() {
		
		String jsonString = "{\"id\": \"1842347-1560779940\",\"cost\": \"£829.99\",\"location\": \"PAC\"}";
		 
        RestAssured.baseURI = "http://localhost:8080/location/post";
 
        // Create a request specification
        requestSpecification = RestAssured.given();
 
        // Setting content type to specify format in which request payload will be sent.
        requestSpecification.contentType(ContentType.JSON);
 
        // Adding body as string
        requestSpecification.body(jsonString);
 
        // Calling POST method
        response = requestSpecification.post();
        // Let's print response body.
        String responseString = response.prettyPrint();
 
        /*
         * To perform validation on response, we need to get ValidatableResponse type of
         * response
         */
        validatableResponse = response.then();
 
        // Check status code
        validatableResponse.statusCode(200);
 
        // It will check if status line is as expected
        validatableResponse.statusLine("HTTP/1.1 200 OK");
 
        // Check response body - location attribute
        validatableResponse.body("data.location", equalTo("PAC"));
        
		System.out.println("Post locations Validated");
 
    }
}