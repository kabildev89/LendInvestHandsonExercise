$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LendInvest.feature");
formatter.feature({
  "line": 2,
  "name": "To automate the ebay site",
  "description": "This feature is to do test Automation on ebay website",
  "id": "to-automate-the-ebay-site",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@EbayFeature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Search and verify the items in ebay website",
  "description": "",
  "id": "to-automate-the-ebay-site;search-and-verify-the-items-in-ebay-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@ebay"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User launch the ebay application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I search for an item \"\u003citemname\u003e\" as a non-registered customer",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I get a list of matching results",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the resulting items cards show: postage price, No of bids, price or show BuyItNow tag",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I sort the results by Lowest Price",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the results are listed in the page in the ascending order",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I sort the results by Highest Price",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the results are listed in the page in the descending order",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "to-automate-the-ebay-site;search-and-verify-the-items-in-ebay-website;",
  "rows": [
    {
      "cells": [
        "itemname"
      ],
      "line": 17,
      "id": "to-automate-the-ebay-site;search-and-verify-the-items-in-ebay-website;;1"
    },
    {
      "cells": [
        "speaker"
      ],
      "line": 18,
      "id": "to-automate-the-ebay-site;search-and-verify-the-items-in-ebay-website;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4422489400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search and verify the items in ebay website",
  "description": "",
  "id": "to-automate-the-ebay-site;search-and-verify-the-items-in-ebay-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@ebay"
    },
    {
      "line": 1,
      "name": "@EbayFeature"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User launch the ebay application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I search for an item \"speaker\" as a non-registered customer",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I get a list of matching results",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the resulting items cards show: postage price, No of bids, price or show BuyItNow tag",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I sort the results by Lowest Price",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the results are listed in the page in the ascending order",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I sort the results by Highest Price",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the results are listed in the page in the descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "LendInvestStepDef.user_launch_the_ebay_application()"
});
formatter.result({
  "duration": 3769333100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "speaker",
      "offset": 22
    }
  ],
  "location": "LendInvestStepDef.i_search_for_an_item_as_a_non_registered_customer(String)"
});
formatter.result({
  "duration": 2351424400,
  "status": "passed"
});
formatter.match({
  "location": "LendInvestStepDef.i_get_a_list_of_matching_results()"
});
formatter.result({
  "duration": 2061067400,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.107)\nBuild info: version: \u00274.1.1\u0027, revision: \u0027e8fcc2cecf\u0027\nSystem info: host: \u0027YUVINKABILDEV\u0027, ip: \u0027192.168.1.218\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [bb7dbfed3118baec8e20d473b25f0019, findElements {using\u003dxpath, value\u003d//ul[contains(@class,\u0027srp-results\u0027)]/li[contains(@class,\u0027s-item s-item__pl-on-bottom\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.107, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\KUMARA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:64759}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64759/devtoo..., se:cdpVersion: 107.0.5304.107, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: bb7dbfed3118baec8e20d473b25f0019\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElements(ElementLocation.java:179)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElements(ElementLocation.java:102)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:374)\r\n\tat com.ebay.pages.SearchResultsPage.getWebElements(SearchResultsPage.java:51)\r\n\tat com.ebay.pages.SearchResultsPage.getListOfItems(SearchResultsPage.java:59)\r\n\tat com.ebay.stepdefinitions.LendInvestStepDef.i_get_a_list_of_matching_results(LendInvestStepDef.java:38)\r\n\tat ✽.Then I get a list of matching results(LendInvest.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LendInvestStepDef.the_resulting_items_cards_show_postage_price_No_of_bids_price_or_show_BuyItNow_tag()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LendInvestStepDef.i_sort_the_results_by_Lowest_Price()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LendInvestStepDef.the_results_are_listed_in_the_page_in_the_ascending_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LendInvestStepDef.i_sort_the_results_by_Highest_Price()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LendInvestStepDef.the_results_are_listed_in_the_page_in_the_descending_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 32330780600,
  "error_message": "org.openqa.selenium.WebDriverException: disconnected: unable to connect to renderer\n  (failed to check if window was closed: disconnected: unable to connect to renderer)\n  (Session info: chrome\u003d107.0.5304.107)\nBuild info: version: \u00274.1.1\u0027, revision: \u0027e8fcc2cecf\u0027\nSystem info: host: \u0027YUVINKABILDEV\u0027, ip: \u0027192.168.1.218\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [bb7dbfed3118baec8e20d473b25f0019, close {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.107, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\KUMARA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:64759}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64759/devtoo..., se:cdpVersion: 107.0.5304.107, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: bb7dbfed3118baec8e20d473b25f0019\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:598)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:428)\r\n\tat com.ebay.hooks.Hooks.closeBrowser(Hooks.java:51)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": ": Search and navigate through results pages",
  "description": "",
  "id": "to-automate-the-ebay-site;:-search-and-navigate-through-results-pages",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@ebay"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User launch the ebay application",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I search for an item \"\u003citemname\u003e\" as a non-registered customer",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I get a list of matching results",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "The results show more than one page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "The user can navigate through the pages to continue looking at the items",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "to-automate-the-ebay-site;:-search-and-navigate-through-results-pages;",
  "rows": [
    {
      "cells": [
        "itemname"
      ],
      "line": 29,
      "id": "to-automate-the-ebay-site;:-search-and-navigate-through-results-pages;;1"
    },
    {
      "cells": [
        "speaker"
      ],
      "line": 30,
      "id": "to-automate-the-ebay-site;:-search-and-navigate-through-results-pages;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1773963300,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": ": Search and navigate through results pages",
  "description": "",
  "id": "to-automate-the-ebay-site;:-search-and-navigate-through-results-pages;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@ebay"
    },
    {
      "line": 1,
      "name": "@EbayFeature"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User launch the ebay application",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I search for an item \"speaker\" as a non-registered customer",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I get a list of matching results",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "The results show more than one page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "The user can navigate through the pages to continue looking at the items",
  "keyword": "And "
});
formatter.match({
  "location": "LendInvestStepDef.user_launch_the_ebay_application()"
});
formatter.result({
  "duration": 39454561900,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00274.1.1\u0027, revision: \u0027e8fcc2cecf\u0027\nSystem info: host: \u0027YUVINKABILDEV\u0027, ip: \u0027192.168.1.218\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ee5cdfc8ca536d255614bd05e9172a06, get {url\u003dhttps://www.ebay.co.uk/}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.107, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\KUMARA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:64844}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64844/devtoo..., se:cdpVersion: 107.0.5304.107, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ee5cdfc8ca536d255614bd05e9172a06\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:312)\r\n\tat com.ebay.pages.HomePage.launch_URL(HomePage.java:40)\r\n\tat com.ebay.stepdefinitions.LendInvestStepDef.user_launch_the_ebay_application(LendInvestStepDef.java:27)\r\n\tat ✽.Given User launch the ebay application(LendInvest.feature:22)\r\nCaused by: java.io.UncheckedIOException: java.net.ConnectException: Connection refused: no further information: localhost/0:0:0:0:0:0:0:1:59104\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.makeCall(NettyHttpHandler.java:80)\r\n\tat org.openqa.selenium.remote.http.RetryRequest.lambda$apply$6(RetryRequest.java:83)\r\n\tat net.jodah.failsafe.Functions.lambda$get$0(Functions.java:48)\r\n\tat net.jodah.failsafe.RetryPolicyExecutor.lambda$supply$0(RetryPolicyExecutor.java:66)\r\n\tat net.jodah.failsafe.RetryPolicyExecutor.lambda$supply$0(RetryPolicyExecutor.java:66)\r\n\tat net.jodah.failsafe.RetryPolicyExecutor.lambda$supply$0(RetryPolicyExecutor.java:66)\r\n\tat net.jodah.failsafe.Execution.executeSync(Execution.java:128)\r\n\tat net.jodah.failsafe.FailsafeExecutor.call(FailsafeExecutor.java:379)\r\n\tat net.jodah.failsafe.FailsafeExecutor.get(FailsafeExecutor.java:68)\r\n\tat org.openqa.selenium.remote.http.RetryRequest.lambda$apply$7(RetryRequest.java:83)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:56)\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.execute(NettyHttpHandler.java:51)\r\n\tat org.openqa.selenium.remote.http.RetryRequest.lambda$apply$6(RetryRequest.java:83)\r\n\tat net.jodah.failsafe.Functions.lambda$get$0(Functions.java:48)\r\n\tat net.jodah.failsafe.RetryPolicyExecutor.lambda$supply$0(RetryPolicyExecutor.java:66)\r\n\tat net.jodah.failsafe.RetryPolicyExecutor.lambda$supply$0(RetryPolicyExecutor.java:66)\r\n\tat net.jodah.failsafe.RetryPolicyExecutor.lambda$supply$0(RetryPolicyExecutor.java:66)\r\n\tat net.jodah.failsafe.Execution.executeSync(Execution.java:128)\r\n\tat net.jodah.failsafe.FailsafeExecutor.call(FailsafeExecutor.java:379)\r\n\tat net.jodah.failsafe.FailsafeExecutor.get(FailsafeExecutor.java:68)\r\n\tat org.openqa.selenium.remote.http.RetryRequest.lambda$apply$7(RetryRequest.java:83)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:56)\r\n\tat org.openqa.selenium.remote.http.netty.NettyClient.execute(NettyClient.java:110)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:181)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:312)\r\n\tat com.ebay.pages.HomePage.launch_URL(HomePage.java:40)\r\n\tat com.ebay.stepdefinitions.LendInvestStepDef.user_launch_the_ebay_application(LendInvestStepDef.java:27)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: java.net.ConnectException: Connection refused: no further information: localhost/0:0:0:0:0:0:0:1:59104\r\n\tat org.asynchttpclient.netty.channel.NettyConnectListener.onFailure(NettyConnectListener.java:179)\r\n\tat org.asynchttpclient.netty.channel.NettyChannelConnector$1.onFailure(NettyChannelConnector.java:108)\r\n\tat org.asynchttpclient.netty.SimpleChannelFutureListener.operationComplete(SimpleChannelFutureListener.java:28)\r\n\tat org.asynchttpclient.netty.SimpleChannelFutureListener.operationComplete(SimpleChannelFutureListener.java:20)\r\n\tat io.netty.util.concurrent.DefaultPromise.notifyListener0(DefaultPromise.java:578)\r\n\tat io.netty.util.concurrent.DefaultPromise.notifyListeners0(DefaultPromise.java:571)\r\n\tat io.netty.util.concurrent.DefaultPromise.notifyListenersNow(DefaultPromise.java:550)\r\n\tat io.netty.util.concurrent.DefaultPromise.notifyListeners(DefaultPromise.java:491)\r\n\tat io.netty.util.concurrent.DefaultPromise.setValue0(DefaultPromise.java:616)\r\n\tat io.netty.util.concurrent.DefaultPromise.setFailure0(DefaultPromise.java:609)\r\n\tat io.netty.util.concurrent.DefaultPromise.tryFailure(DefaultPromise.java:117)\r\n\tat io.netty.channel.nio.AbstractNioChannel$AbstractNioUnsafe.fulfillConnectPromise(AbstractNioChannel.java:321)\r\n\tat io.netty.channel.nio.AbstractNioChannel$AbstractNioUnsafe.finishConnect(AbstractNioChannel.java:337)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKey(NioEventLoop.java:707)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKeysOptimized(NioEventLoop.java:655)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKeys(NioEventLoop.java:581)\r\n\tat io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:493)\r\n\tat io.netty.util.concurrent.SingleThreadEventExecutor$4.run(SingleThreadEventExecutor.java:986)\r\n\tat io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74)\r\n\tat io.netty.util.concurrent.FastThreadLocalRunnable.run(FastThreadLocalRunnable.java:30)\r\n\tat java.lang.Thread.run(Unknown Source)\r\nCaused by: io.netty.channel.AbstractChannel$AnnotatedConnectException: Connection refused: no further information: localhost/0:0:0:0:0:0:0:1:59104\r\nCaused by: java.net.ConnectException: Connection refused: no further information\r\n\tat sun.nio.ch.SocketChannelImpl.checkConnect(Native Method)\r\n\tat sun.nio.ch.SocketChannelImpl.finishConnect(Unknown Source)\r\n\tat io.netty.channel.socket.nio.NioSocketChannel.doFinishConnect(NioSocketChannel.java:330)\r\n\tat io.netty.channel.nio.AbstractNioChannel$AbstractNioUnsafe.finishConnect(AbstractNioChannel.java:334)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKey(NioEventLoop.java:707)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKeysOptimized(NioEventLoop.java:655)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKeys(NioEventLoop.java:581)\r\n\tat io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:493)\r\n\tat io.netty.util.concurrent.SingleThreadEventExecutor$4.run(SingleThreadEventExecutor.java:986)\r\n\tat io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74)\r\n\tat io.netty.util.concurrent.FastThreadLocalRunnable.run(FastThreadLocalRunnable.java:30)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "speaker",
      "offset": 22
    }
  ],
  "location": "LendInvestStepDef.i_search_for_an_item_as_a_non_registered_customer(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LendInvestStepDef.i_get_a_list_of_matching_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LendInvestStepDef.the_results_show_more_than_one_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LendInvestStepDef.the_user_can_navigate_through_the_pages_to_continue_looking_at_the_items()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 24483552500,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00274.1.1\u0027, revision: \u0027e8fcc2cecf\u0027\nSystem info: host: \u0027YUVINKABILDEV\u0027, ip: \u0027192.168.1.218\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ee5cdfc8ca536d255614bd05e9172a06, close {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.107, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\KUMARA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:64844}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64844/devtoo..., se:cdpVersion: 107.0.5304.107, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ee5cdfc8ca536d255614bd05e9172a06\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:598)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:428)\r\n\tat com.ebay.hooks.Hooks.closeBrowser(Hooks.java:51)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: java.io.UncheckedIOException: java.net.ConnectException: Connection refused: no further information: localhost/0:0:0:0:0:0:0:1:59104\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.makeCall(NettyHttpHandler.java:80)\r\n\tat org.openqa.selenium.remote.http.RetryRequest.lambda$apply$6(RetryRequest.java:83)\r\n\tat net.jodah.failsafe.Functions.lambda$get$0(Functions.java:48)\r\n\tat net.jodah.failsafe.RetryPolicyExecutor.lambda$supply$0(RetryPolicyExecutor.java:66)\r\n\tat net.jodah.failsafe.RetryPolicyExecutor.lambda$supply$0(RetryPolicyExecutor.java:66)\r\n\tat net.jodah.failsafe.RetryPolicyExecutor.lambda$supply$0(RetryPolicyExecutor.java:66)\r\n\tat net.jodah.failsafe.Execution.executeSync(Execution.java:128)\r\n\tat net.jodah.failsafe.FailsafeExecutor.call(FailsafeExecutor.java:379)\r\n\tat net.jodah.failsafe.FailsafeExecutor.get(FailsafeExecutor.java:68)\r\n\tat org.openqa.selenium.remote.http.RetryRequest.lambda$apply$7(RetryRequest.java:83)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:56)\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.execute(NettyHttpHandler.java:51)\r\n\tat org.openqa.selenium.remote.http.RetryRequest.lambda$apply$6(RetryRequest.java:83)\r\n\tat net.jodah.failsafe.Functions.lambda$get$0(Functions.java:48)\r\n\tat net.jodah.failsafe.RetryPolicyExecutor.lambda$supply$0(RetryPolicyExecutor.java:66)\r\n\tat net.jodah.failsafe.RetryPolicyExecutor.lambda$supply$0(RetryPolicyExecutor.java:66)\r\n\tat net.jodah.failsafe.RetryPolicyExecutor.lambda$supply$0(RetryPolicyExecutor.java:66)\r\n\tat net.jodah.failsafe.Execution.executeSync(Execution.java:128)\r\n\tat net.jodah.failsafe.FailsafeExecutor.call(FailsafeExecutor.java:379)\r\n\tat net.jodah.failsafe.FailsafeExecutor.get(FailsafeExecutor.java:68)\r\n\tat org.openqa.selenium.remote.http.RetryRequest.lambda$apply$7(RetryRequest.java:83)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:56)\r\n\tat org.openqa.selenium.remote.http.netty.NettyClient.execute(NettyClient.java:110)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:181)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\t... 59 more\r\nCaused by: java.net.ConnectException: Connection refused: no further information: localhost/0:0:0:0:0:0:0:1:59104\r\n\tat org.asynchttpclient.netty.channel.NettyConnectListener.onFailure(NettyConnectListener.java:179)\r\n\tat org.asynchttpclient.netty.channel.NettyChannelConnector$1.onFailure(NettyChannelConnector.java:108)\r\n\tat org.asynchttpclient.netty.SimpleChannelFutureListener.operationComplete(SimpleChannelFutureListener.java:28)\r\n\tat org.asynchttpclient.netty.SimpleChannelFutureListener.operationComplete(SimpleChannelFutureListener.java:20)\r\n\tat io.netty.util.concurrent.DefaultPromise.notifyListener0(DefaultPromise.java:578)\r\n\tat io.netty.util.concurrent.DefaultPromise.notifyListeners0(DefaultPromise.java:571)\r\n\tat io.netty.util.concurrent.DefaultPromise.notifyListenersNow(DefaultPromise.java:550)\r\n\tat io.netty.util.concurrent.DefaultPromise.notifyListeners(DefaultPromise.java:491)\r\n\tat io.netty.util.concurrent.DefaultPromise.setValue0(DefaultPromise.java:616)\r\n\tat io.netty.util.concurrent.DefaultPromise.setFailure0(DefaultPromise.java:609)\r\n\tat io.netty.util.concurrent.DefaultPromise.tryFailure(DefaultPromise.java:117)\r\n\tat io.netty.channel.nio.AbstractNioChannel$AbstractNioUnsafe.fulfillConnectPromise(AbstractNioChannel.java:321)\r\n\tat io.netty.channel.nio.AbstractNioChannel$AbstractNioUnsafe.finishConnect(AbstractNioChannel.java:337)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKey(NioEventLoop.java:707)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKeysOptimized(NioEventLoop.java:655)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKeys(NioEventLoop.java:581)\r\n\tat io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:493)\r\n\tat io.netty.util.concurrent.SingleThreadEventExecutor$4.run(SingleThreadEventExecutor.java:986)\r\n\tat io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74)\r\n\tat io.netty.util.concurrent.FastThreadLocalRunnable.run(FastThreadLocalRunnable.java:30)\r\n\tat java.lang.Thread.run(Unknown Source)\r\nCaused by: io.netty.channel.AbstractChannel$AnnotatedConnectException: Connection refused: no further information: localhost/0:0:0:0:0:0:0:1:59104\r\nCaused by: java.net.ConnectException: Connection refused: no further information\r\n\tat sun.nio.ch.SocketChannelImpl.checkConnect(Native Method)\r\n\tat sun.nio.ch.SocketChannelImpl.finishConnect(Unknown Source)\r\n\tat io.netty.channel.socket.nio.NioSocketChannel.doFinishConnect(NioSocketChannel.java:330)\r\n\tat io.netty.channel.nio.AbstractNioChannel$AbstractNioUnsafe.finishConnect(AbstractNioChannel.java:334)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKey(NioEventLoop.java:707)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKeysOptimized(NioEventLoop.java:655)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKeys(NioEventLoop.java:581)\r\n\tat io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:493)\r\n\tat io.netty.util.concurrent.SingleThreadEventExecutor$4.run(SingleThreadEventExecutor.java:986)\r\n\tat io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74)\r\n\tat io.netty.util.concurrent.FastThreadLocalRunnable.run(FastThreadLocalRunnable.java:30)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 493316000,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "API Automation",
  "description": "",
  "id": "to-automate-the-ebay-site;api-automation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@Api"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User validates the GET request",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User validates the POST request",
  "keyword": "Given "
});
formatter.match({
  "location": "LendInvestStepDef.user_validates_the_GET_request()"
});
formatter.result({
  "duration": 2604017500,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nXML path items.location doesn\u0027t match.\nExpected: a collection with size \u003c4\u003e\n  Actual: \u003c\u003e\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:263)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:139)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:171)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:261)\r\n\tat io.restassured.specification.ResponseSpecification$body$1.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:171)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:212)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:108)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:244)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$body(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy:298)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy)\r\n\tat com.lendInvest.api.ApiTests.test_GetAndValidateLocations_ShouldBe4(ApiTests.java:45)\r\n\tat com.ebay.stepdefinitions.LendInvestStepDef.user_validates_the_GET_request(LendInvestStepDef.java:83)\r\n\tat ✽.Given User validates the GET request(LendInvest.feature:34)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LendInvestStepDef.user_validates_the_POST_request()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 409800,
  "status": "passed"
});
});