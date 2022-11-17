$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("hometest/mailonline.feature");
formatter.feature({
  "line": 2,
  "name": "To automate the mailonline application",
  "description": "This feature is to open dailymail application and validate the Sports Category",
  "id": "to-automate-the-mailonline-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@mailonlineFeature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Validation of sports category in mailonline application",
  "description": "",
  "id": "to-automate-the-mailonline-application;validation-of-sports-category-in-mailonline-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@mailonline"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User launch the mailonline application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Verify the current date and time in the homepage header",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on the sport menu",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Verify color of Sports menu and Football sub menu are same",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Football submenu",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks first article and navigate to the gallery image",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on gallery icon from gallery image",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Image loads on full screen and verify previous and next arrows",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User clicks on Facebook icon from gallery image",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "verify it opens Facebook modal dialog",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User clicks on any video from most watched videos section",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Verify video expanded to full screen and collapsed on clicking collapse button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Print the points and position of \"\u003cteamname\u003e\" from the premier league table section",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "to-automate-the-mailonline-application;validation-of-sports-category-in-mailonline-application;",
  "rows": [
    {
      "cells": [
        "teamname"
      ],
      "line": 22,
      "id": "to-automate-the-mailonline-application;validation-of-sports-category-in-mailonline-application;;1"
    },
    {
      "cells": [
        "Liverpool"
      ],
      "line": 23,
      "id": "to-automate-the-mailonline-application;validation-of-sports-category-in-mailonline-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4147031000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Validation of sports category in mailonline application",
  "description": "",
  "id": "to-automate-the-mailonline-application;validation-of-sports-category-in-mailonline-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@mailonlineFeature"
    },
    {
      "line": 5,
      "name": "@mailonline"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User launch the mailonline application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Verify the current date and time in the homepage header",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on the sport menu",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Verify color of Sports menu and Football sub menu are same",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Football submenu",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks first article and navigate to the gallery image",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on gallery icon from gallery image",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Image loads on full screen and verify previous and next arrows",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User clicks on Facebook icon from gallery image",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "verify it opens Facebook modal dialog",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User clicks on any video from most watched videos section",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Verify video expanded to full screen and collapsed on clicking collapse button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Print the points and position of \"Liverpool\" from the premier league table section",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MailOnlineStepDef.user_launch_the_mailonline_application()"
});
formatter.result({
  "duration": 6541792500,
  "status": "passed"
});
formatter.match({
  "location": "MailOnlineStepDef.verify_the_current_date_and_time_in_the_homepage_header()"
});
formatter.result({
  "duration": 346725600,
  "status": "passed"
});
formatter.match({
  "location": "MailOnlineStepDef.user_clicks_on_the_sport_menu()"
});
formatter.result({
  "duration": 13872940499,
  "status": "passed"
});
formatter.match({
  "location": "MailOnlineStepDef.verify_color_of_Sports_menu_and_Football_sub_menu_are_same()"
});
formatter.result({
  "duration": 1066451401,
  "status": "passed"
});
formatter.match({
  "location": "MailOnlineStepDef.user_clicks_on_Football_submenu()"
});
formatter.result({
  "duration": 28042652000,
  "status": "passed"
});
formatter.match({
  "location": "MailOnlineStepDef.user_clicks_first_article_and_navigate_to_the_gallery_image()"
});
formatter.result({
  "duration": 15314754400,
  "status": "passed"
});
formatter.match({
  "location": "MailOnlineStepDef.user_clicks_on_gallery_icon_from_gallery_image()"
});
formatter.result({
  "duration": 84953200,
  "status": "passed"
});
formatter.match({
  "location": "MailOnlineStepDef.image_loads_on_full_screen_and_verify_previous_and_next_arrows()"
});
formatter.result({
  "duration": 870416001,
  "status": "passed"
});
formatter.match({
  "location": "MailOnlineStepDef.user_clicks_on_Facebook_icon_from_gallery_image()"
});
formatter.result({
  "duration": 9476114100,
  "status": "passed"
});
formatter.match({
  "location": "MailOnlineStepDef.verify_it_opens_Facebook_modal_dialog()"
});
formatter.result({
  "duration": 187692100,
  "status": "passed"
});
formatter.match({
  "location": "MailOnlineStepDef.user_clicks_on_any_video_from_most_watched_videos_section()"
});
formatter.result({
  "duration": 4462312400,
  "status": "passed"
});
formatter.match({
  "location": "MailOnlineStepDef.verify_video_expanded_to_full_screen_and_collapsed_on_clicking_collapse_button()"
});
formatter.result({
  "duration": 3302103700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Liverpool",
      "offset": 34
    }
  ],
  "location": "MailOnlineStepDef.print_the_points_and_position_of_from_the_premier_league_table_section(String)"
});
formatter.result({
  "duration": 132530300,
  "status": "passed"
});
formatter.after({
  "duration": 1279797901,
  "status": "passed"
});
});