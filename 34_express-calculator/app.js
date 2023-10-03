const express = require('express');
const app = express();
const ExpressError = require('./expressError');
const fs = require('fs');
const process = require('process');
const axios = require('axios');

const { convertAndValidateNumsArray, findMode, findMean, findMedian } = require('./helpers');    

app.get('/mean', function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('Invalid number. You must pass in a comma-separated list of numbers.', 400)
    }
    let numsAsStrings = req.query.nums.split(',');
    // check if anything bad was put in
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mean",
        result: findMean(nums)
    }

    if (req.query.save === 'true') {
        fs.writeFile('results.json', JSON.stringify(result), 'utf8', function(err) {
            if (err) {
                console.log(err);
            }
            console.log('Successfully wrote to file.');
        });
        return res.send(result);

    } else {
        return res.send(result);
    }
});

app.get('/median', function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('Invalid number. You must pass in a comma-separated list of numbers.', 400)
    }
    let numsAsStrings = req.query.nums.split(',');
    // check if anything bad was put in
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "median",
        result: findMedian(nums)
    }

    if (req.query.save === 'true') {
        fs.writeFile('results.json', JSON.stringify(result), 'utf8', function(err) {
            if (err) {
                console.log(err);
            }
            console.log('Successfully wrote to file.');
        });
        return res.send(result);

    } else {
        return res.send(result);
    }

});

app.get('/mode', function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('Invalid number. You must pass in a comma-separated list of numbers.', 400)
    }
    let numsAsStrings = req.query.nums.split(',');
    // check if anything bad was put in
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mode",
        result: findMode(nums)
    }

    if (req.query.save === 'true') {
        fs.writeFile('results.json', JSON.stringify(result), 'utf8', function(err) {
            if (err) {
                console.log(err);
            }
            console.log('Successfully wrote to file.');
        });
        return res.send(result);

    } else {
        return res.send(result);
    }
});

app.get('/all', function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('Invalid number. You must pass in a comma-separated list of numbers.', 400)
    }
    let numsAsStrings = req.query.nums.split(',');
    // check if anything bad was put in
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "all",
        mean: findMean(nums),
        median: findMedian(nums),
        mode: findMode(nums)
    }

    if (req.query.save === 'true') {
        fs.writeFile('results.json', JSON.stringify(result), 'utf8', function(err) {
            if (err) {
                console.log(err);
            }
            console.log('Successfully wrote to file.');
        });
        return res.send(result);

    } else {
        return res.send(result);
    }

});

/** general error handler -- 404 not found*/

app.use(function(req, res, next) {
    const err = new ExpressError("Not Found", 404);
    return next(err);
});

/** general error handler -- network error  */
app.use(function(err, req, res, next) {
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.message
    });
});

app.listen(3000, function() {
    console.log('Server is listening on port 3000');
});

