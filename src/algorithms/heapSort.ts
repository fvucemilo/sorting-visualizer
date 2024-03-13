import { AnimationArrayType } from "@/lib/types";

function heapify(array: number[], n: number, i: number, animations: AnimationArrayType): void {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && array[left] > array[largest]) {
    largest = left;
  }

  if (right < n && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== i) {
    animations.push([[i, largest], false]);
    animations.push([[i, array[largest]], true]);
    animations.push([[largest, array[i]], true]);
    [array[i], array[largest]] = [array[largest], array[i]];

    heapify(array, n, largest, animations);
  }
}

function buildMaxHeap(array: number[], animations: AnimationArrayType): void {
  const n = array.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i, animations);
  }
}

export function generateHeapSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
) {
  if (isSorting) return;
  if (array.length <= 1) return [];

  const animations: AnimationArrayType = [];
  const auxiliaryArray = array.slice();

  buildMaxHeap(auxiliaryArray, animations);

  for (let i = auxiliaryArray.length - 1; i > 0; i--) {
    animations.push([[0, i], false]);
    animations.push([[0, auxiliaryArray[i]], true]);
    animations.push([[i, auxiliaryArray[0]], true]);
    [auxiliaryArray[0], auxiliaryArray[i]] = [auxiliaryArray[i], auxiliaryArray[0]];

    heapify(auxiliaryArray, i, 0, animations);
  }

  runAnimation(animations);
}
