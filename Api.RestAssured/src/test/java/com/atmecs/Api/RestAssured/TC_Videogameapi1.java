package com.atmecs.Api.RestAssured;

import org.testng.Assert;
import org.testng.annotations.Test;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;

import java.util.HashMap;

import io.restassured.module.jsv.JsonSchemaValidator.*;

public class TC_Videogameapi1 {
	
	
	@Test(priority=1)
	public void test_videogame() {
		
	Response response =	RestAssured.get("https://reqres.in/api/users?page=2");
		
	
		System.out.println((response.getStatusCode()));
		System.out.println(response.getTime());
		System.out.println(response.getBody().asString());
		System.out.println(response.getHeader("content type"));
		int statuscode = response.getStatusCode();
		Assert.assertEquals(statuscode, 200);
		
		
	}
	
	
	@Test(priority=2)
	public void gettestforstatuscode() {
		
		baseURI = "https://reqres.in/api";
		 given().get("/users?page=2").then().statusCode(200).body("data[0].email", equalTo("michael.lawson@reqres.in"));
		 given().get("/users?page=2").then().statusCode(200).body("data.id[1]", equalTo(8));
	}
	
	
	@Test(priority=3)
	public void gettest() {
		 
		baseURI = "https://reqres.in/api";
		given().get("/users?page=2").then().statusCode(200).body("data[1].id", equalTo(8));
		
		
		
		
		

}
	@Test(priority=4)
	public void puttest() {
		
		HashMap data = new HashMap();
		data.put("name", "chandu");
		data.put("job","QA");
		
		given()
		.contentType("application/json")
		.body(data)
		.when()
		.patch("https://reqres.in/api/users/2")
		.then().statusCode(200).log().body()
		.body("name", equalTo("chandu"));
		
		
		
		
		
		
		
		
		
		
	}
	
	@Test(priority=5)
	public void posttest() {
		
		HashMap data = new HashMap();
		data.put("email", "eve.holt@reqres.in");
		data.put("password","pistol");
		//data.put("name", "chandu");
		//data.put("job","QA");
		
		given()
		.contentType("application/json")
		.body(data)
		.when()
		.post("https://reqres.in/api/register")
		
		.then().statusCode(200).log().body();
		
		
		
		
		
		
		
		
		
		
		
		
	}
	
}
