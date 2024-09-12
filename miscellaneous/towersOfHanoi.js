//towers of hanoi

let towersHanoi = (ringCount, srcTower, tempTower, destTower) => {
    if (ringCount == 1) {
        console.log(`move ring no.${ringCount} from tower ${srcTower} to tower ${destTower}..`);
        return;
    }
    towersHanoi(ringCount - 1, srcTower, destTower, tempTower);
    console.log(`move ring no.${ringCount} from tower ${srcTower} to tower ${destTower}..`);

    towersHanoi(ringCount - 1, tempTower, srcTower, destTower);
}

//1st argument: number rings in sourc tower
//2nd argument: source tower pointer
//3rd argument: temporary tower pointer
//4th argument: destination tower pointer

//  towersHanoi(2, 'A', 'T', 'B');
 towersHanoi(3, 'A', 'T', 'B');