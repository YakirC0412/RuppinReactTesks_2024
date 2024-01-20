
class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    show() {
        //המתודה מציגה את ערכי הנקודה בפורמט
        //(x,y)
        console.log(`(${this.x},${this.y})`);
    }
    Equals(p) {
        if (p.x == this.x && p.y == this.y)
            return true;
        return false;
    }

}

//Q 4.2
function IsPointInArr(PointsArr, XtoCheck, YtoCheck)
{
    for (var i = 0; i < PointArr.length; i++) {
        if (PointArr[i].x == XtoCheck && PointArr[i].y == YtoCheck)
            return true;
    }
    return false;
}

//Q 4.3
function IsPointEquals(PointArr, point)
{
    for (var i = 0; i < PointArr.length; i++) {
        if (PointArr[i].Equals(point))
            return true;
    }
    return false;
}

//Q4.4
function PointsLength(PointArr)
{
    let FullLength = 0;
    for (var i = 0; i < PointArr.length-1; i++) {
        let TotalX = PointArr[i].x - PointArr[i + 1].x;
        let TotalY = PointArr[i].y - PointArr[i + 1].y;
        let distance = Math.sqrt(Math.pow(TotalX, 2) + Math.pow(TotalY, 2));
        FullLength += distance;
    }
    return FullLength;
}

//Points to Q 4.2, Q 4.3 , Q 4.4
let point1 = new Point(1, 2);
point1.show(); // for Q 4.1
let point2 = new Point(7, 9);
let point3 = new Point(10, 5);
let point4 = new Point(1, 1);
let PointArr = [point1, point2, point3, point4];

//Validation for 4.2
console.log(IsPointInArr(PointArr, 1, 2)); //Will return true
console.log(IsPointInArr(PointArr, 9, 2)); //Will return false

//Validation for 4.3
console.log(IsPointEquals(PointArr,point1)); //Will return true
console.log(IsPointEquals(PointArr, new Point(-3, 4))); //Will return false

//Html Page for 4.4
function LoadHtml()
{
    let str = "";
    let str2 = "";
    for (var i = 0; i < PointArr.length; i++) {
        str += `Point ${i + 1}: (${PointArr[i].x},${PointArr[i].y}) <br/>`;
    }
    document.getElementById('points').innerHTML = str;
    let RouteLength = PointsLength(PointArr);
    str2 = `Full Route Length: ${RouteLength}`;
    document.getElementById('route').innerHTML = str2;
}

LoadHtml();