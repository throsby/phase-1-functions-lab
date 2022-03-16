// Code your solution in this file!
function distanceFromHqInBlocks(val) {
  return Math.abs(42-val)
}

function distanceFromHqInFeet(val) {
    return 264 * distanceFromHqInBlocks(val)
}

function distanceTravelledInFeet(start,end) {
    return 264 * Math.abs(end-start)
}

function calculatesFarePrice(start,end) {
    if (distanceTravelledInFeet(start,end) <= 400) {
        return 0
    }
    else if (distanceTravelledInFeet(start,end) > 2500) {
        return 'cannot travel that far'
    }
    else if (distanceTravelledInFeet(start,end) > 2000) {
        return 25
    }
    else {
        return .02 * (distanceTravelledInFeet(start,end) - 400)
    }
}
