import { AnimationArrayType } from "@/lib/types";

function heapify(
  array: number[],
  animations: AnimationArrayType,
  n: number,
  i: number
) {
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

    const temp = array[i];
    array[i] = array[largest];
    array[largest] = temp;

    heapify(array, animations, n, largest);
  }
}

function buildMaxHeap(array: number[], animations: AnimationArrayType) {
  const n = array.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, animations, n, i);
  }
}

export function heapSort(array: number[], animations: AnimationArrayType) {
  const n = array.length;

  buildMaxHeap(array, animations);

  for (let i = n - 1; i > 0; i--) {
    animations.push([[0, i], false]);
    const temp = array[0];
    array[0] = array[i];
    array[i] = temp;

    heapify(array, animations, i, 0);
    animations.push([[0, array[0]], true]);
  }
}

export function generateHeapSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
) {
  if (isSorting) return;
  if (array.length <= 1) return;
  const animations: AnimationArrayType = [];

  const auxiliaryArray = array.slice();
  heapSort(auxiliaryArray, animations);
  runAnimation(animations);
}
