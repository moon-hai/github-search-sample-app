const mergeOverlappingItems = (items) => {
  if (items.length <= 1) {
    return items;
  }

  // sort base startPx
  items.sort((a, b) => a.startPx - b.startPx);

  // get init items
  const mergedItems = [items[0]];

  for (let i = 1; i < items.length; i++) {
    const currItem = items[i];
    const comparedItem = mergedItems[mergedItems.length - 1];

    if (currItem.startPx <= comparedItem.endPx) {
      comparedItem.endPx = Math.max(comparedItem.endPx, currItem.endPx);
    } else {
      mergedItems.push(currItem);
    }
  }

  return mergedItems;
};

// test case 1: 1 item
// return [{ startPx: 10, endPx: 20 }]
console.log(mergeOverlappingItems([
  { startPx: 10, endPx: 20 }
]))

// test case 2:
// return [{ startPx: 10, endPx: 40 }]
console.log(mergeOverlappingItems([
  { startPx: 10, endPx: 30 },
  { startPx: 20, endPx: 40 }
]))

// test case 3:
// return [ { startPx: 10, endPx: 50 }, { startPx: 55, endPx: 70 } ]
console.log(mergeOverlappingItems([
  { startPx: 10, endPx: 30 },
  { startPx: 55, endPx: 65 },
  { startPx: 35, endPx: 50 },
  { startPx: 20, endPx: 40 },
  { startPx: 60, endPx: 70 }
]))
