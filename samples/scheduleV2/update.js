"use strict";

let opsgenie = require('../../');
require('../configure');

let update_schedule_json = {
    "name": "New Name"
};

opsgenie.scheduleV2.updateSchedule("cb0ddf84-2b2c-40b9-8ff3-396e5060409e", update_schedule_json, function (error, user) {
    if (error) {
        console.error(error);
    } else {
        console.log("Update Schedule Response");
        console.log(user);
    }
});
