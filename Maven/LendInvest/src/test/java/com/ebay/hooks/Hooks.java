package com.ebay.hooks;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;

import com.ebay.helpers.Constants;
import com.ebay.helpers.Stubs;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Hooks {
	public static WebDriver webDriver;

	@SuppressWarnings("deprecation")
	@Before("@ebay")
	public void setUp() throws InterruptedException {
		System.out.println("Browser is launching...");
		// String driverpath = Constants.CHROME_DRIVER_PATH;
		WebDriverManager. chromedriver(). setup();
		webDriver = new ChromeDriver();
		webDriver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		webDriver.manage().window().maximize();

	}

	@Before("@Api")
	public void setupWireMockServer() {
		System.out.println("Starting the Mock Server");
		Stubs stubs = new Stubs();
		stubs.setUp()
		.stubForGetAllLocations("getLocationResponse.json")
        .stubForPostLocation("postLocationRequest.json","postLocationResponse.json")
        .status();
	}
	
	@After("@Api")
	public void shutDownWireMockServer() {
		System.out.println("Stopping the Mock Server");
		Stubs stubs = new Stubs();
		stubs.resetServer();
	}
	
	@After("@ebay")
	public void closeBrowser() {
		System.out.println("Closing the Browser");
		webDriver.close();
		webDriver.quit();
	}

	public static WebDriver getDriver() {
		return webDriver;
	}
}