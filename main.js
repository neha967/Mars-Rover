let rover = {
    direction: "North",
    x: 0,
    y: 0,
    travelLog: [{x:0, y:0}]
};

function turnLeft(theRover){
    switch(theRover.direction){
        case "North":
            theRover.direction = "West";
            console.log(theRover.direction);
            break;
        case "West":
            theRover.direction = "South";            
            console.log(theRover.direction);
            break;
        case "South":
            theRover.direction = "East";
            console.log(theRover.direction);
            break;
        case "East":
            theRover.direction = "North";
            console.log(theRover.direction);
            break;
    }
}

function turnRight(theRover){
    switch(theRover.direction){
        case "North":
            theRover.direction = "East";
            console.log(theRover.direction);
            break;
        case "East":
            theRover.direction = "South";            
            console.log(theRover.direction);
            break;
        case "South":
            theRover.direction = "West";
            console.log(theRover.direction);
            break;
        case "West":
            theRover.direction = "North";
            console.log(theRover.direction);
            break;
    }
}

function moveForward(theRover){
    switch(theRover.direction){
        case "North":        
            theRover.y--;
            console.log(`${theRover.x} & ${theRover.y}`);
            break;
        case "West":
            theRover.x--;
            console.log(`${theRover.x} & ${theRover.y}`);
            break;
        case "South":
            theRover.y++;
            console.log(`${theRover.x} & ${theRover.y}`);
            break;
        case "East":
            theRover.x++;
            console.log(`${theRover.x} & ${theRover.y}`);
            break;
    }

    let newPositionForwards = {x: theRover.x, y: theRover.y};
    theRover.travelLog.push(newPositionForwards);
}

    function moveBackward(theRover){
        switch(theRover.direction){
            case "North":        
                theRover.y++;
                console.log(`${theRover.x} & ${theRover.y}`);
                break;
            case "West":
                theRover.x++;
                console.log(`${theRover.x} & ${theRover.y}`);
                break;
            case "South":
                theRover.y--;
                console.log(`${theRover.x} & ${theRover.y}`);
                break;
            case "East":
                theRover.x--;
                console.log(`${theRover.x} & ${theRover.y}`);
                break;
        } 

    let newPositionBackwards = {x: theRover.x, y: theRover.y};
    theRover.travelLog.push(newPositionBackwards);
};

function command(theRover,commands){
    for(let i = 0; i < commands.length; i++){
        let command = commands[i];
        switch(command){
            case "l":                
                turnLeft(theRover);
                break;
            case "r":
                turnRight(theRover);
                break;
            case "f":
                moveForward(theRover);
                break;
            case "b":
                moveBackward(theRover);
                break;
        }
    }
        if(command !== "l" && command !== "r" && command !== "f" && command !== "b"){
            console.log("Enter a valid command");
        }
    console.log(theRover.travelLog);
}


commandsList = ["l", "f", "r", "b", "r", "l", "f", "p"];
command(rover,commandsList);

for(let i = 0; i < rover.travelLog.length; i++){
    console.log(`Travel Log ${i} ==> x=${rover.travelLog[i].x}, y=${rover.travelLog[i].y}`);
}